import { FC, useEffect, useRef } from "react";
import { InputWrapper } from "./MatchInput.styles";
import { MatchInputProps } from "./MatchInput.styles.contracts";

export const MatchInput: FC<MatchInputProps> = ({ onChangeText, onCheat }) => {
  const matchInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    matchInputRef.current?.focus();
  }, []);

  const handleCheatingBehaviour = () => {
    alert("expulsao por pajuo");
    onCheat();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    onChangeText(value);
  };

  return (
    <InputWrapper
      rows={8}
      spellCheck="false"
      ref={matchInputRef}
      onChange={handleOnChange}
      onCopy={handleCheatingBehaviour}
      onPaste={handleCheatingBehaviour}
    />
  );
};
