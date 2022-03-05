import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGunUser } from "../../../../commons/hooks/useGunUser";
import { getAuth, signOut } from "firebase/auth";
import { HomeLayout } from "../../../../layouts/HomeLayout/HomeLayout";
import {
  CustomButton,
  LeftContainer,
  MainContainer,
} from "./MainScreen.styles";

export const MainScreen = () => {
  const { getUser } = useGunUser();

  const auth = getAuth();
  const navigate = useNavigate();

  const [showMainScreen, setShowMainScreen] = useState(false);

  const handleRedirectToWizard = () => {
    // This function gets called if there's no user in peer network
    navigate("/begin");
  };

  useEffect(() => {
    getUser({
      noUserCallback: handleRedirectToWizard,
      userSet: () => setShowMainScreen(true),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseSesion = () => {
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
        </LeftContainer>
      </MainContainer>
    </HomeLayout>
  ) : null;
};
