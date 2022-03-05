import styled from "styled-components";
import { MAX_APP_WIDTH } from "../../../../constants";

export const MainContainer = styled.div`
  width: 100%;
  max-width: ${MAX_APP_WIDTH}px;
  height: fit-content;
  position: relative;
  transition: ease-in-out 200ms;
`;
