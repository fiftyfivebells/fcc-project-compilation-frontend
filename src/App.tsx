import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppMenu from './components/layout/AppMenu';
import Home from './components/Home';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppMenu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/random-quote-machine" element={<QuoteGenerator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
