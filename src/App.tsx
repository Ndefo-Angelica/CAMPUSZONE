import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Services from './pages/Services/Service';
import SystemOfStudy from './pages/Services/SystemOfStudy';
import Faculties from './pages/Services/Faculties';
import Departments from './pages/Services/Departments';
import Courses from './pages/Services/Course';
import Resources from './pages/Services/Resources';

function App() {
  return (
    <Router>
      <Routes>
        {/* Top-Level Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* Nested Routes */}
        <Route path="/services" element={<Services />}>
          <Route path="system-of-study" element={<SystemOfStudy />}>
            <Route path="faculties" element={<Faculties />}>
              <Route path=":type" element={<Faculties />} />
              <Route path=":type/departments" element={<Departments />}>
                <Route path=":faculty" element={<Departments />}>
                  <Route path="courses" element={<Courses />}>
                    <Route path=":courseId" element={<Courses />} />
                    <Route path="resources" element={<Resources />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
