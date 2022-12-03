import { useRouter } from "next/router";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Buy = () => {
  const router = useRouter();
  const { id: tokenId } = router.query;

  return (
    <Box className="page-container">
      <p>Post: {tokenId}</p>
    </Box>
  );
};

export default Buy;
