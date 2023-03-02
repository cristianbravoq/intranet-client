import "./App.css";
import React from "react";
import Auth from "./components/auth/auth";
import Dashboard from "./components/dashboard/dashboard";

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/private-route";

function App() {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route element={<PrivateRoute isLogged={true} />}>
        <Route path="/home" element={<Dashboard/>} />
      </Route>
    </Routes>
  );
}

export default App;