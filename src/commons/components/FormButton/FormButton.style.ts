import styled from "styled-components";

export const CustomButton = styled.button<{ isDisabled?: boolean }>`
  outline: none;
  border: none;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.PALETTE.gray : theme.PALETTE.primary};
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;
