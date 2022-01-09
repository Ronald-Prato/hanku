import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "../modules/Auth/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
