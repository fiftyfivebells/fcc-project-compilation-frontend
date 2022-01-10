import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppMenu from './components/layout/AppMenu';
import Home from './components/Home';
import QuoteGenerator from './components/QuoteGenerator';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random-quote-machine" element={<QuoteGenerator />} />
          <Route path="/calculator" element={<Calculator />} />        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
