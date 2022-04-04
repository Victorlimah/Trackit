import Home from "../pages/Home";
import { useState } from "react";
import Today from "../pages/Today";
import SignUp from "../pages/SingUp";
import Habits from "../pages/Habits";
import History from "../pages/History";
import HabitsContext from "../provider/HabitsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </HabitsContext.Provider>
  );
}
