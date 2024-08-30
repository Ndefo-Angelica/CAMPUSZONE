import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Register from './pages/SignupForm/SignupForm';
import Chats from './pages/Chats/Chats';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import Courses from './pages/Courses/Courses';
import Faculties from './pages/Courses/Faculties';
import Departments from './pages/Courses/Departments';
import Course from './pages/Courses/Course';
import Resources from './pages/Courses/Resources';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chats />} />
          <Route path="contacts" element={<Contacts />} />
       
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/faculties/:type" element={<Faculties />} />
          <Route path="/departments/:type" element={<Departments />} />
          <Route path="/course/:type" element={<Course />} />
          <Route path="/resources/:type" element={<Resources />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>

    
  );
}

export default App;
