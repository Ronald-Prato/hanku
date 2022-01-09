import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseLoginErrors } from "../constants";

export const signIn = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
  } catch (err) {
    const customErr: any = err;

    if (customErr.message === FirebaseLoginErrors.NotFound) {
      alert("El usuario no existe");
    }

    if (customErr.message === FirebaseLoginErrors.WrongPassword) {
      alert("Contraseña incorrecta");
    }
    return null;
  }
};
