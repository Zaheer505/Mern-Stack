import React from 'react';
import "./App.css";
import Pay from './Pay';
import {BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <h1>hello</h1>

    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay />}>
        </Route>
      </Routes>
    </BrowserRouter>


  </>
  );
}

export default App;
