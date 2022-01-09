export enum FirebaseLoginErrors {
  NotFound = "Firebase: Error (auth/user-not-found).",
  WrongPassword = "Firebase: Error (auth/wrong-password).",
}

export enum FirebaseSignupErrors {
  AlreadyUsed = "Firebase: Error (auth/email-already-in-use).",
  Min6Chars = "Firebase: Password should be at least 6 characters (auth/weak-password).",
}
