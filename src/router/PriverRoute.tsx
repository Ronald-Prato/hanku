import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserUid } from "../commons/store/user/user.party";
import { useGunUser } from "../commons/hooks/useGunUser";

export const PrivateRoute: FC = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getUser } = useGunUser();

  const [showChildren, setShowChildren] = useState(false);

  const handleRedirectToWizard = () => {
    // This function gets called if there's no user in peer network
    navigate("/begin");
    setShowChildren(true);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (!user) {
        navigate("/login");
      }

      dispatch(setUserUid(user.uid));

      getUser({
        userId: user.uid,
        noUserCallback: handleRedirectToWizard,
        userSet: () => setShowChildren(true),
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{showChildren && children}</>;
};
