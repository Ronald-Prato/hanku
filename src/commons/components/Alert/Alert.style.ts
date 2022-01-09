import styled from "styled-components";
import { ALERT_SHOW_TIME } from "../../../constants";
import { Theme } from "../../../theme";
import { AlertSeverities } from "./Alert.contracts";

const mapSeverityColors = (severity: AlertSeverities) => {
  const severityColors: { [key in AlertSeverities]: string } = {
    error: Theme.PALETTE.error,
    success: Theme.PALETTE.green,
    normal: "#ffffff",
  };

  return severityColors[severity];
};

export const MainContainer = styled.div<{ severity: AlertSeverities }>`
  @keyframes slideRight {
    from {
      transform: translateX(-100%) skewX(-20deg);
    }
    to {
      transform: translateX(0) skewX(-20deg);
    }
  }

  @keyframes slideRightSlow {
    from {
      transform: translateX(0) skewX(-20deg);
    }
    to {
      transform: translateX(6%) skewX(-20deg);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  background: ${({ theme }) => theme.PALETTE.primaryDark};
  transform: translateX(-100%) skewX(-20deg);
  padding: 8px 30px 8px 20px;
  position: fixed;
  top: 5%;
  left: 2%;
  animation: slideRight 100ms forwards linear,
    slideRightSlow 4000ms 100ms forwards, linear,
    fadeOut 600ms ${ALERT_SHOW_TIME}ms forwards linear;

  cursor: pointer;

  &::before {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background: ${({ severity }) => mapSeverityColors(severity)};
  }
`;

export const AlertMessage = styled.p<{ severity: AlertSeverities }>`
  margin: 0;
  font-weight: 600;
  font-size: 14.5px;
  font-family: Roboto;
  letter-spacing: 0.8px;
  color: ${({ severity }) => mapSeverityColors(severity)};
  text-transform: uppercase;
`;
