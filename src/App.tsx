import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import SearchAndSave from './Pages/SearchAndSave';
import NoPage from './Pages/NoPage';
import ContextProvoider from './Context/ContextProvoider';

function App() {
  return (
    <BrowserRouter>
      <ContextProvoider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add_package" element={<SearchAndSave />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </ContextProvoider>
    </BrowserRouter>
  );
}

export default App;
