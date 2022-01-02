import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppMenu from './components/layout/AppMenu';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <AppMenu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
