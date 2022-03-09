import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../../../../commons/components";
import { RootState } from "../../../../commons/store";
import { HomeLayout } from "../../../../layouts/HomeLayout/HomeLayout";
import { MainContainer, TabItem, TabsContainer } from "./AccountScreen.style";

export const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const user = useSelector((state: RootState) => state.user);

  return (
    <HomeLayout>
      <MainContainer>
        <TabsContainer>
          <TabItem onClick={() => setActiveTab(0)} isActive={activeTab === 0}>
            Mi cuenta
          </TabItem>
          <TabItem onClick={() => setActiveTab(1)} isActive={activeTab === 1}>
            Historial de partidas
          </TabItem>
        </TabsContainer>

        {activeTab === 0 && <Avatar user={user} />}
      </MainContainer>
    </HomeLayout>
  );
};
