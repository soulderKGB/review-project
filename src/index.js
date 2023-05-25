import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Movie1 from './Movie1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movie1' element={<Movie1/>}/>
    </Routes>
   </BrowserRouter>
);