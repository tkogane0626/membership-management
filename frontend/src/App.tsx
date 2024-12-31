import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MembershipPage from './pages/MembershipPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/memberships" element={<MembershipPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
