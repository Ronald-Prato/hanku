import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserUid } from "../commons/store/user/user.party";

export const PrivateRoute: FC = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (!user) {
        navigate("/login");
      }

      dispatch(setUserUid(user.uid));
      setShowChildren(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{showChildren && children}</>;
};
