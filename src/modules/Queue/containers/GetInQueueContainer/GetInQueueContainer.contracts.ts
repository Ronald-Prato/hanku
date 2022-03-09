import { Socket } from "socket.io-client";
import { User } from "../../../../commons/contracts/user.contracts";

export interface GetInQueueContainerProps {
  onExitQueue: () => void;
  onAcceptMatch: () => void;
  onRejectMatch: () => void;
  matchFound: boolean;
  socket: Socket;
  user: User;
}
