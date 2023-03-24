import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './Authentication/Login';
import Navbar from './Navbar';
import Register from './Authentication/Signup';
//import TodoPage from './TodoPage';
//import TodoForm from './TodoForm';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    

    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path ="/Register" element={<Register />} />


    </Routes>
    </BrowserRouter>
  )
}
   