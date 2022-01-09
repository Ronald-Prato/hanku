const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const checkLoginCredentials = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  if (!email.trim().length) {
    alert("Email requerido");
    return false;
  }

  if (!password.length) {
    alert("Contraseña requerida");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Email inválido");
    return false;
  }

  return true;
};
