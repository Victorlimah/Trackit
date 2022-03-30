import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/habits" element={<h1>oi</h1>} />
        <Route path="/today" element={<h1>oi</h1>} />
        <Route path="/history" element={<h1>oi</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
