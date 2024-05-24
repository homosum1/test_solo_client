import React, { useEffect, useState } from 'react';

import './App.scss';

import { Route, Routes } from 'react-router-dom';

import { MainPage } from './sites/MainPage/MainPage';
import { NotFound } from './sites/NotFound/NotFound';


function App() {
  
  function loadGoogleFonts() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }



  
  useEffect(() => {
    loadGoogleFonts();
  }, []);
  
  
  return (
    <div className='App'>
      <Routes>
        <Route path="" element={ <MainPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
