import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard'; 

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
