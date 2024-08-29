import React, { useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

interface Course {
  id: string;
  name: string;
}

const mockCourses: Record<string, Course[]> = {
  // Mock data for courses based on levels
  level100: [
    { id: 'course1', name: 'Mathematics 101' },
    { id: 'course2', name: 'Introduction to Computer Science' },
  ],
  level200: [
    { id: 'course3', name: 'Advanced Mathematics' },
    { id: 'course4', name: 'Data Structures' },
  ],
};

const Courses: React.FC = () => {
  const { type, faculty, department } = useParams<{ type: string; faculty: string; department: string }>();
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const level = event.target.value;
    setSelectedLevel(level);
    setCourses(mockCourses[level] || []);
  };

  const handleCourseSelect = (courseId: string) => {
    navigate(`/services/system-of-study/faculties/${type}/departments/${faculty}/courses/${courseId}/resources`);
  };

  return (
    <div>
      <h1>Courses for {department} in {faculty} ({type})</h1>
      <label htmlFor="level">Select Your Level:</label>
      <select id="level" value={selectedLevel} onChange={handleLevelChange}>
        <option value="">--Select Level--</option>
        <option value="level100">Level 100</option>
        <option value="level200">Level 200</option>
        <option value="level300">Level 300</option>
        <option value="level400">Level 400</option>
        <option value="level500">Level 500</option>
      </select>

      {courses.length > 0 && (
        <div>
          <h2>Available Courses:</h2>
          <ul>
            {courses.map(course => (
              <li key={course.id} onClick={() => handleCourseSelect(course.id)}>
                {course.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
};

export default Courses;
