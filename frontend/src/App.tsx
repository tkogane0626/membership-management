import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MembershipPage from './pages/MembershipPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/memberships" element={<MembershipPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
