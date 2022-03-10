import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { PrivateRoute } from "./PriverRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainScreen } from "../modules/Home/pages";
import { UserWizard } from "../modules/Home/pages/";
import { AccountScreen } from "../modules/Home/pages";
import { Login, Signup } from "../modules/Auth/pages";
import { MatchScreen } from "../modules/Match/pages/MatchScreen/MatchScreen";
import { QueueScreen } from "../modules/Queue/pages/QueueScreen/QueueScreen";
import { io, Socket } from "socket.io-client";

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

const HANKU_SERVER_URL = process.env.REACT_APP_HANKU_SERVER_URL || "";
const socket: Socket = io(HANKU_SERVER_URL, {
  transports: ["polling"],
});

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
              <MainScreen socket={socket} />
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
              <QueueScreen socket={socket} />
            </PrivateRoute>
          }
        />
        <Route
          path="/match"
          element={
            <PrivateRoute>
              <MatchScreen socket={socket} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
