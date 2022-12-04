import { useState } from "react";
import Assets from "../components/Assets";
import TokenPage from "../components/TokenPage";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Home = () => {
  const [activeTokenPage, setActiveTokenPage] = useState({
    id: null,
    type: null,
  });
  return (
    <Box className="page-container">
      <Tabs>
        <TabList color="#465B60" borderBottomColor="#465B60">
          <Tab
            _selected={{
              color: "white",
              bg: "none",
              borderBottom: "4px solid #249676",
            }}
          >
            Your Assets
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "none",
              borderBottom: "4px solid #249676",
            }}
          >
            Offers
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "none",
              borderBottom: "4px solid #249676",
            }}
          >
            Explore
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {activeTokenPage.id === null ? (
              <Assets setActiveTokenPage={setActiveTokenPage} />
            ) : (
              <TokenPage
                tokenId={activeTokenPage.id}
                type={activeTokenPage.type}
              />
            )}
          </TabPanel>
          <TabPanel>
            <p>Offers</p>
          </TabPanel>
          <TabPanel>
            <p>Explore</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
