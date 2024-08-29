import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Resources: React.FC = () => {
  const { department } = useParams<{ type: string; faculty: string; department: string }>();
  const [level, setLevel] = useState<string | null>(null);

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };

  return (
    <div>
      <h1>{department} Resources</h1>
      <label htmlFor="level">Choose your level:</label>
      <select id="level" onChange={handleLevelChange}>
        <option value="">Select Level</option>
        <option value="100">Level 100</option>
        <option value="200">Level 200</option>
        <option value="300">Level 300</option>
        <option value="400">Level 400</option>
        <option value="500">Level 500</option>
      </select>

      {level && (
        <div>
          <h2>Resources for {department}, Level {level}</h2>
          <ul>
            <li>Notes</li>
            <li>Past Exam Papers</li>
            <li>Other Learning Materials</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Resources;
