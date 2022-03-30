import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Habits from "../pages/Habits";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Today from "../pages/Today";

export default function Router() {
  const [token, setToken] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home saveToken={(token) => setToken(token)} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<Habits token={token} />} />
        <Route path="/today" element={<Today />} />
        <Route path="/history" element={<h1>oi</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
