import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
};
