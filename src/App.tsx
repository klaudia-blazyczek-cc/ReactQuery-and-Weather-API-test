import React from 'react';
import { Routes, Route } from 'react-router';

import { AppWrapper } from './App.styled';
import { Home } from './pages/Home';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
