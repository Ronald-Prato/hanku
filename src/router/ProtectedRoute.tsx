import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath: string;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  redirectPath,
}) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        navigate(redirectPath);
      }

      setShowChildren(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{showChildren && children}</>;
};
