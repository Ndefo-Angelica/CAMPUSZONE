import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Register from './pages/SignupForm/SignupForm';
import Chats from './pages/Chats/Chats';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Login/Login';




const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="chat" element={<Chats />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>

    
  );
}

export default App;
