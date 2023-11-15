import React from 'react';
import MainPage from './components/MainPage/MainPage';
import SecPage from './components/SecPage/SecPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<SecPage/>}/>
        <Route path="/SecPage" element={<SecPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
