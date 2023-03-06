import "./App.css";
import React from "react";
import Auth from "./components/auth/auth";
import Dashboard from "./components/dashboard/dashboard";

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/private-route";
import GiftCard from "./components/dashboard/giftCard";

function App() {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route element={<PrivateRoute isLogged={true} />}>
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/giftcard" element={<GiftCard/>} />
        <Route path='*' element={<p>No Found</p>} />
      </Route>
    </Routes>
  );
}

export default App;