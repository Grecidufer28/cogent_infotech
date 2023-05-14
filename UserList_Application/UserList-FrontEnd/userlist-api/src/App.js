import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import UserUpdate from './UserUpdate';

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<UserList/>}/>
      <Route exact path='/users/:id' element={<UserUpdate/>}/>
    </Routes>
  );
}

export default App;
