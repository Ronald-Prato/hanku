export type AlertSeverities = "normal" | "error" | "success";

export interface AlertProps {
  message: string;
  icon?: JSX.Element;
  severity?: AlertSeverities;
  onClosed?: () => void;
}
