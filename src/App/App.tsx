import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Equipment from '../Equipment/Equipment';
import Specialists from '../Specialists/Specialists';

function App():JSX.Element {
  return (
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/specialists" element={<Specialists />} />
    </Route>
   </Routes>
  );
}

export default App;
