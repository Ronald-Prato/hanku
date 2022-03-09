import { Socket } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";

import {
  CustomButton,
  LeftContainer,
  MainContainer,
} from "./MainScreen.styles";
import { RootState } from "../../../../commons/store";
import { QueueAlert } from "../../../../commons/components";
import { useGunUser } from "../../../../commons/hooks/useGunUser";
import { HomeLayout } from "../../../../layouts/HomeLayout/HomeLayout";
import { setQueueAlert } from "../../../../commons/store/common/common.party";

export const MainScreen: FC<{ socket: Socket }> = ({ socket }) => {
  const user = useSelector((state: RootState) => state.user);

  const { getUser } = useGunUser();
  const { updatePlayerScore } = useGunUser();

  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMainScreen, setShowMainScreen] = useState(false);

  const handleRedirectToWizard = () => {
    // This function gets called if there's no user in peer network
    navigate("/begin");
  };

  socket.on("user-has-diconnected", (disconnectedUserId: string) => {
    if (disconnectedUserId === user.uid) {
      updatePlayerScore({
        option: "subtract",
        callback: (points) => {
          // TODO: Place the lose amound acording to rank for disconnection here.
          dispatch(
            setQueueAlert({
              show: true,
              message: `Has perdido ${points} RPs porque te desconectaste recientemente`,
            })
          );
        },
      });
    }
  });

  useEffect(() => {
    // Add the user to the array server side
    socket.emit("new-user", user);
  }, []);

  useEffect(() => {
    getUser({
      noUserCallback: handleRedirectToWizard,
      userSet: () => setShowMainScreen(true),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseSession = () => {
    signOut(auth);
    navigate("/login");
  };

  const handleGoToQueue = () => {
    navigate("/queue");
  };

  return showMainScreen ? (
    <HomeLayout>
      <MainContainer>
        <LeftContainer>
          <p>BIENVENIDOS A</p>
          <h1>Hanku</h1>
          <h2>Type</h2>

          <CustomButton onClick={handleGoToQueue}>JUGAR</CustomButton>
          <button onClick={handleCloseSession}>Salir</button>
        </LeftContainer>
      </MainContainer>

      <QueueAlert />
      <button onClick={() => console.log(user)}>JEEE</button>
    </HomeLayout>
  ) : null;
};
