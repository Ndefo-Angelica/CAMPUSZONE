import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Layout from './Layout';
import Register from './pages/SignupForm/SignupForm';
import Chats from './pages/Chats/Chats';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services"
// import SystemOfStudy from "./pages/Courses/SystemOfStudy";
// import Faculties from './pages/Courses/Faculties';
// import Departments from './pages/Courses/Departments';
// import Courses from './pages/Courses/Course';
// import Resources from './pages/Courses/Resources';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
       
        <Route path="contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/systemofstudy" element={<SystemOfStudy />} />
        <Route path="faculties" element={<Outlet />} />
        <Route path=":type" element={<Faculties />} />
        <Route path="departments" element={<Outlet />} />
        <Route path=":faculty" element={<Departments />} />
        <Route path="courses" element={<Outlet />} />
        <Route path=":courseId" element={<Courses />} />
        <Route path="resources" element={<Resources />} /> */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="chat" element={<Chats />} />
      </Routes>
    </Router>


  );
}

export default App;
