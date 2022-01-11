import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "../modules/Auth/pages";
import { MainScreen } from "../modules/Home/pages";
import { UserWizard } from "../modules/Home/pages/";
import { PrivateRoute } from "./PriverRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/begin"
          element={
            <PrivateRoute>
              <UserWizard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
