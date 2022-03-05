import styled from "styled-components";

export const InputWrapper = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.PALETTE.darker};
  color: white;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  width: 600px;
  font-weight: bolder;
`;
