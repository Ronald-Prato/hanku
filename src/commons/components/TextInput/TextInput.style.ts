import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  border-radius: 50px;
  background: ${({ theme }) => theme.PALETTE.primaryDark};
`;

export const CustomInput = styled.input`
  outline: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.PALETTE.gray};
  font-size: 15px;
  font-weight: 500;
  flex: 1;
`;

export const IconContainer = styled.div`
  margin: 0 10px 0 5px;
`;
