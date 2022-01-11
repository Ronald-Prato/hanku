import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AlertSeverities } from "../../../commons/components/Alert/Alert.contracts";
import { FirebaseLoginErrors } from "../constants";

export const signIn = async (
  email: string,
  password: string,
  handleShowAlarm: (message: string, severity: AlertSeverities) => void
) => {
  const auth = getAuth();

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (err) {
    const customErr: any = err;

    if (customErr.message === FirebaseLoginErrors.NotFound) {
      handleShowAlarm("El usuario no existe", "error");
    }

    if (customErr.message === FirebaseLoginErrors.WrongPassword) {
      handleShowAlarm("Contraseña incorrecta", "error");
    }
    return null;
  }
};
