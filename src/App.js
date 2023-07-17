import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BasicForm from './components/forms/basicForm';
import Dashboard from './components/forms/dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route  path="/" element={<BasicForm/>}/>
            <Route  path="/dashboard" element={<Dashboard/>} />
            <Route  path="/" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
