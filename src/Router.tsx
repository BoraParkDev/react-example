import React from "react";
import { Route, Routes } from "react-router-dom";
import EventPractics from "./EventPractics";
import Condition from "./Condition";
import Say from "./Say";
import App from "./App_";
import StopWatch from "./ref/StopWatch";
import Chat from "./ref/Chat";
import Ref from "./ref/Ref";
import ToggleButton from "./ref/ToggleButton";
import IterationSample from "./IterationSample";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/paractice" element={<EventPractics />} />
      <Route path="/say" element={<Say />} />
      <Route path="/condition" element={<Condition />} />
      <Route path="/ref" element={<Ref />}>
        <Route path="stopwatch" element={<StopWatch />} />
        <Route path="chat" element={<Chat />} />
        <Route path="toggle" element={<ToggleButton />} />
      </Route>
      <Route path="/sample" element={<IterationSample />} />
    </Routes>
  );
};

export default Router;
