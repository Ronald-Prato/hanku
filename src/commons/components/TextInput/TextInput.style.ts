import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  background: ${({ theme }) => theme.PALETTE.primaryDark};
`;

export const CustomInput = styled.input<{
  centerText: boolean;
  customColor?: string;
}>`
  outline: none;
  border: none;
  background: none;
  color: ${({ theme, customColor }) =>
    customColor ? customColor : theme.PALETTE.gray};
  font-size: 15px;
  font-weight: 500;
  flex: 1;
  text-align: ${({ centerText }) => (centerText ? "center" : "left")};
`;

export const IconContainer = styled.div`
  margin: 3px 10px 0 5px;
`;
