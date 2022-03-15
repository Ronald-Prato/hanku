import { FC, useEffect, useRef } from "react";
import { InputWrapper } from "./MatchInput.styles";
import { MatchInputProps } from "./MatchInput.styles.contracts";

export const MatchInput: FC<MatchInputProps> = ({
  onChangeText,
  onCheat,
  isDisabled,
}) => {
  const matchInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    matchInputRef.current?.focus();
  }, []);

  const handleCheatingBehaviour = (event: any) => {
    event.preventDefault();
    alert("¿A dónde vas crack?");
    onCheat();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    onChangeText(value);
  };

  return (
    <InputWrapper
      rows={8}
      disabled={isDisabled}
      spellCheck="false"
      ref={matchInputRef}
      onChange={handleOnChange}
      onCopy={handleCheatingBehaviour}
      onPaste={handleCheatingBehaviour}
    />
  );
};
