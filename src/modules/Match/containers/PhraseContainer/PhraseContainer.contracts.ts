export interface PhraseContainerProps {
  phrase: string;
  writtenText: string;
}

export enum WordState {
  NotWritten = 0,
  Correct = 1,
  Incorrect = 2,
}
