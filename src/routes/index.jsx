import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "../pages/Habits";
import { useState } from "react";
import Home from "../pages/Home";

import Today from "../pages/Today";
import SignUp from "../pages/SingUp";
import HabitsContext from "../provider/HabitsContext";

export default function Router() {
  const [user, setUser] = useState({});
  return (
    <HabitsContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/today" element={<Today />} />
          <Route path="/history" element={<h1>oi</h1>} />
        </Routes>
      </BrowserRouter>
    </HabitsContext.Provider>
  );
}
