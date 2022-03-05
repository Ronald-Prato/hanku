import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { AccountScreen } from "../modules/Home/pages";
import { Login, Signup } from "../modules/Auth/pages";
import { MainScreen } from "../modules/Home/pages";
import { UserWizard } from "../modules/Home/pages/";
import { PrivateRoute } from "./PriverRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { QueueScreen } from "../modules/Queue/pages/QueueScreen/QueueScreen";

const InstantRedirect = ({
  redirectTo,
}: {
  redirectTo: string;
}): JSX.Element => {
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => navigate(redirectTo), []);
  return <></>;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InstantRedirect redirectTo="/login" />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute redirectPath="/home">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute redirectPath="/home">
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
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
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <AccountScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/queue"
          element={
            <PrivateRoute>
              <QueueScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
