import { HTMLInputTypeAttribute } from "react";

export interface TextInputProps {
  placeholder?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  icon?: JSX.Element;
  type?: HTMLInputTypeAttribute;
}
