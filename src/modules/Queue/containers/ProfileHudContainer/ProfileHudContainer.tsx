import { FC } from "react";

import { Avatar } from "../../../../commons/components";
import { MainContainer } from "./ProfileHudContainer.styles";
import { User } from "../../../../commons/contracts/user.contracts";

interface ProfileHudContainerProps {
  user: User;
}

export const ProfileHudContainer: FC<ProfileHudContainerProps> = ({
  user,
}: {
  user: User;
}) => {
  return (
    <MainContainer>
      <Avatar user={user} showControllers={false} variation="small" />
    </MainContainer>
  );
};
