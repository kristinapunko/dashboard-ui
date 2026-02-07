import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AccountPage from './pages/AccountPage';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import data from './data/mockData.json';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <div className="w-[95%] md:w-[90%] mx-auto bg-[var(--color-brand-dark)] text-slate-100">
        <Header user={data.user} />
        <Navbar tabs={data.navigation} />
        
        <main className="sm:px-2 pb-4 md:px-6 md:pb-6">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />            
            <Route path="/account/:id" element={<AccountPage />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;