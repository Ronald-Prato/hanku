import styled from "styled-components";
import { WordState } from "./PhraseContainer.contracts";

const mapStateToColors = {
  [WordState.NotWritten]: "white",
  [WordState.Incorrect]: "red",
  [WordState.Correct]: "green",
};

export const MainContainer = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 5% 0 8% 0;
`;

export const Phrase = styled.span<{ wordState: WordState }>`
  color: ${({ wordState }) => mapStateToColors[wordState]};
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 0.4px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;
