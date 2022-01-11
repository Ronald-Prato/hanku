import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Theme } from "../../../../theme";
import { AVATAR_BASE_URL } from "../../../../constants";
import {
  Avatar,
  AvatarSquare,
  MainContainer,
  RepeatIcon,
} from "./AvatarContainer.style";

interface AvatarContainerProps {
  onChangeAvatar: (avatar: string) => void;
}

export const AvatarContainer: FC<AvatarContainerProps> = ({
  onChangeAvatar,
}) => {
  const [randomSeed, setRandomSeed] = useState(uuidv4());

  useEffect(() => {
    onChangeAvatar(`${AVATAR_BASE_URL}/${randomSeed}.svg`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomSeed]);

  const handleCreateNewAvatar = () => {
    setRandomSeed(uuidv4());
  };

  return (
    <MainContainer>
      <AvatarSquare>
        <Avatar src={`${AVATAR_BASE_URL}/${randomSeed}.svg`} />

        <RepeatIcon
          onClick={handleCreateNewAvatar}
          color={Theme.PALETTE.primary}
        />
      </AvatarSquare>
    </MainContainer>
  );
};
