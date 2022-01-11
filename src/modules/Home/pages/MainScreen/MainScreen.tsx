import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../commons/store";
import { useGunUser } from "../../../../commons/hooks/useGunUser";
import { getAuth, signOut } from "firebase/auth";

export const MainScreen = () => {
  const { getUser } = useGunUser();

  const user = useSelector((state: RootState) => state.user);
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

  return showMainScreen ? (
    <div>
      <p>id: {user.uid}</p>
      <p>nickname: {user.nickname}</p>
      <p>avatar: {user.avatar}</p>
      <p>rank: {user.rank}</p>
      <p>lvl: {user.lvl}</p>
      <p>lvl points: {user.lvlPoints}</p>

      <button onClick={handleCloseSesion}>cerrar sesion</button>
    </div>
  ) : null;
};
