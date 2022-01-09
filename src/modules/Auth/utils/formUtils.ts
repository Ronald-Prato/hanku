import { AlertSeverities } from "../../../commons/components/Alert/Alert.contracts";

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
  handleShowAlarm,
}: {
  email: string;
  password: string;
  handleShowAlarm: (message: string, severity: AlertSeverities) => void;
}) => {
  if (!email.trim().length) {
    handleShowAlarm("Email requerido", "error");
    return false;
  }

  if (!password.length) {
    handleShowAlarm("Contraseña requerida", "error");
    return false;
  }

  if (!validateEmail(email)) {
    handleShowAlarm("Email inválido", "error");
    return false;
  }

  return true;
};
