import { User } from "../../contracts/user.contracts";

export type Variations = "small" | "big";
export interface AvatarProps {
  user: User;
  showControllers?: boolean;
  variation?: Variations;
}
