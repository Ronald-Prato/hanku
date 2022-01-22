import {
  HeaderContainer,
  ListItem,
  LogoSection,
  MainList,
  TextSection,
} from "./GameHeader.style";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderTab } from "../../store/common/common.party";
import { ReactComponent as HankuTypeLogo } from "../../../assets/svg/hanku-type-logo.svg";

export const GameHeader = () => {
  const headerOptions = [
    { label: "Inicio", path: "/home" },
    { label: "Cuenta", path: "/account" },
    { label: "NFTs", path: "/nfts" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedTabIndex = useSelector(
    (state: RootState) => state.common.headerTab
  );

  const handleSetOption = (index: number) => {
    dispatch(setHeaderTab(index));
    navigate(headerOptions[index].path);
  };

  return (
    <HeaderContainer>
      <LogoSection>
        <HankuTypeLogo width={100} />
        <TextSection>
          <h1>Hanku</h1>
          <h2>Type</h2>
        </TextSection>
      </LogoSection>
      <MainList>
        {headerOptions.map((headerItem, index) => (
          <ListItem
            isActive={selectedTabIndex === index}
            onClick={() => handleSetOption(index)}
          >
            {headerItem.label}
          </ListItem>
        ))}
      </MainList>
    </HeaderContainer>
  );
};
