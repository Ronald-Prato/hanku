import { FC } from "react";
import { GameHeader } from "../../commons/components";
import { MainContainer } from "./HomeLayout.styles";

export const HomeLayout: FC = ({ children }) => {
  return (
    <MainContainer>
      <GameHeader />
      {children}
    </MainContainer>
  );
};
