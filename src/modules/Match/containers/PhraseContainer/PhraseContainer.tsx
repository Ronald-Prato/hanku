/* eslint-disable react-hooks/exhaustive-deps */
import produce from "immer";
import { FC, useEffect, useState } from "react";
import { PhraseContainerProps, WordState } from "./PhraseContainer.contracts";
import { MainContainer, Phrase } from "./PhraseContainer.styles";

export const PhraseContainer: FC<PhraseContainerProps> = ({
  phrase,
  writtenText,
}) => {
  const phraseWords = phrase.split(" ");
  const initialWordsState = phraseWords.map(() => WordState.NotWritten);
  const [phraseWordsStates, setPhraseWordsStates] = useState(initialWordsState);
  const [currentWrittenLength, setCurrentWrittenLength] = useState(0);
  const [prevCurrentWrittenLength, setPrevCurrentWrittenLength] = useState(0);

  const compareText = () => {
    const writtenTextWords = writtenText.trim().split(" ");
    const currentIndex = writtenTextWords.length - 1;

    if (!writtenText.trim().length) {
      setPhraseWordsStates(initialWordsState);
      return;
    }

    const nextState = produce(phraseWordsStates, (draftState) => {
      if (phraseWords[currentIndex] === writtenTextWords[currentIndex]) {
        draftState[currentIndex] = WordState.Correct;
      } else {
        draftState[currentIndex] = WordState.Incorrect;
      }
    });

    setPhraseWordsStates(nextState);
    setCurrentWrittenLength(writtenTextWords.length);
  };

  useEffect(() => {
    compareText();
  }, [writtenText]);

  useEffect(() => {
    // If the last length is bigger it means you just delete a word, so just set its state to NotWritten.
    if (prevCurrentWrittenLength > currentWrittenLength) {
      const nextState = produce(phraseWordsStates, (draftState) => {
        draftState[currentWrittenLength] = WordState.NotWritten;
      });

      setPhraseWordsStates(nextState);
    }

    setPrevCurrentWrittenLength(currentWrittenLength);
  }, [currentWrittenLength]);

  return (
    <MainContainer>
      {phraseWords.map((word, index) => (
        <Phrase wordState={phraseWordsStates[index]}>{word} </Phrase>
      ))}
    </MainContainer>
  );
};
