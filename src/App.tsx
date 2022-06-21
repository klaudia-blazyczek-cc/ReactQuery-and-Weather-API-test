import React from 'react';
import { Routes, Route } from 'react-router';

import { AppWrapper } from './App.styled';
import { Home } from './pages/Home';
import { Weather } from './pages/Weather';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<Weather />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
