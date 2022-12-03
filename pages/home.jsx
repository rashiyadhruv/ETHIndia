import Assets from "../components/Assets";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Home = () => {
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
            <Assets />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Home;
