import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "../modules/Auth/pages";
import { MainScreen } from "../modules/Home/pages";
import { UserWizard } from "../modules/Home/pages/";
import { PrivateRoute } from "./PriverRoute";
import { ProtectedRoute } from "./ProtectedRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute redirectPath="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute redirectPath="/">
              <Signup />
            </ProtectedRoute>
          }
        />
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
