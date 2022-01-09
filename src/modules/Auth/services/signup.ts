import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AlertSeverities } from "../../../commons/components/Alert/Alert.contracts";
import { FirebaseSignupErrors } from "../constants";

export const signUp = async (
  email: string,
  password: string,
  handleShowAlarm: (message: string, severity: AlertSeverities) => void
) => {
  const auth = getAuth();

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    const customError: any = err;

    if (customError.message === FirebaseSignupErrors.AlreadyUsed) {
      handleShowAlarm("El correo ya está en uso", "error");
    }

    if (customError.message === FirebaseSignupErrors.Min6Chars) {
      handleShowAlarm(
        "La contraseña debe tener al menos 6 caracteres",
        "error"
      );
    }

    return null;
  }
};
