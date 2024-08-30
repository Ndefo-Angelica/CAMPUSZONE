import React from 'react';
import Header from './pages/Home/Header';
import Footer from './pages/Home/Footer';
import Copyright from './pages/Home/Copyright';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Copyright />
      <Footer />
    </div>
  );
};

export default Layout;
