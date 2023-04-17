import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPractics from "./EventPractics";
import Condition from "./Condition";
import Say from "./Say";
import App from "./App";
import StopWatch from "./ref/StopWatch";
import Chat from "./ref/Chat";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/paractice" element={<EventPractics />} />
      <Route path="/say" element={<Say />} />
      <Route path="/condition" element={<Condition />} />
      <Route path="/stopwatch" element={<StopWatch />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default Router;
