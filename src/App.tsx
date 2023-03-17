import "./App.css";
import React, { useEffect } from "react";
import Auth from "./components/auth/auth";
import Dashboard from "./components/dashboard/dashboard";

import { Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoute from "./routes/private-route";
import GiftCard from "./components/dashboard/giftCard";
import { ISession } from "./models/auth";
import NoFound from "./elements/noFound";

function App() {
  const navigate = useNavigate();
  const { login }: ISession = JSON.parse(sessionStorage.getItem('auth') || '{}');

  useEffect(() => {
    if (login) navigate(`/home`);
  }, []);

  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route element={<PrivateRoute isLogged={login} />}>
        <Route path="/home" element={<Dashboard />}>
          <Route index element={<NoFound/>} />
          <Route path="capacitaciones" element={<NoFound/>} />
          <Route path="comercial" element={<NoFound/>} />
          <Route path="rappi" element={<NoFound/>} />
          <Route path="giftcard" element={<GiftCard />} />
          <Route path="sistemas" element={<NoFound />} />
        </Route>
      </Route>
      <Route path="*" element={<p>No Found</p>} />
    </Routes>
  );
}

export default App; 