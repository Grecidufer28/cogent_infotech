import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import BookUpdate from './BookUpdate';

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<BookList/>}/>
      <Route exact path='/books/:BookID' element={<BookUpdate/>}/>
    </Routes>
  );
}

export default App;