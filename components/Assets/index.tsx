import { Flex, VStack, IconButton, Text } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

import Asset from "./Asset";

const Assets = () => {
  return (
    <Flex>
      {/* map out the assets */}
      <Asset
        tokenId="1"
        location="Alap heritage, Rajkot, Gujarat (360005)"
        landmarks="Rajkot International Airport (3.6 km)"
        area="2350"
        price="90 lacs"
        renovations="1 (2017)"
      />
      {/* add token button */}
      <VStack marginLeft="40px" height="80vh" justify="center">
        <IconButton
          aria-label="add token"
          icon={<BiAddToQueue />}
          color="#000"
          backgroundColor="#25C296"
          size="lg"
        />
        <Text color="#25C296">Add new Asset</Text>
      </VStack>
    </Flex>
  );
};

export default Assets;
