import styled from "styled-components";

export const CustomButton = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.PALETTE.primary};
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;
