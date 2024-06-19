import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Start from "./components/start/Start";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Db from "./components/database/db";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/register" element={<Register />} />
          <Route path="/db" element={<Db />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
