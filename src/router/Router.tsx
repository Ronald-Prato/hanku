import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../modules/Auth/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
