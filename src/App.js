import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HospitalList from './components/HospitalList';
import RequestList from './components/RequestList';
import Schedule from './components/Schedule';
import RequestSheet from './components/RequestSheet'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HospitalList />} />
        <Route path="/hospital" element={<HospitalList />} />
        <Route path="/requests" element={<RequestList />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/request-sheet" element={<RequestSheet />} /> 
      </Routes>
    </Router>
  );
}

export default App;
