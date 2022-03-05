import { FC, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Theme } from "../../../../theme";
import { MatchInput } from "../../../../commons/components";
import { Content, MainContainer } from "./MatchScreen.styles";
import { PhraseContainer } from "../../containers/PhraseContainer/PhraseContainer";

const PHRASE =
  "This is the start of something that could be really great if we invest the right amount of time to it";

export const MatchScreen: FC = () => {
  const [writtenText, setWrittenText] = useState("");

  const handleRoundFinished = () => {
    alert("round terminado");
  };

  return (
    <MainContainer>
      <Content>
        <CountdownCircleTimer
          isPlaying
          onComplete={handleRoundFinished}
          duration={30}
          colors={Theme.PALETTE.primary as any}
          trailColor={Theme.PALETTE.primaryDark as any}
        >
          {({ remainingTime }) => (
            <span style={{ color: "white" }}>{remainingTime}</span>
          )}
        </CountdownCircleTimer>

        <PhraseContainer phrase={PHRASE} writtenText={writtenText} />

        <MatchInput
          onChangeText={(value) => setWrittenText(value)}
          onCheat={() => {}}
        />
      </Content>
    </MainContainer>
  );
};
