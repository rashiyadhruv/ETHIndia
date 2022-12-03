import {
  Flex,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

type AssetProps = {
  tokenId: string;
  location: string;
  landmarks: string;
  area: string;
  price: string;
  renovations: string;
};

const Asset = ({
  tokenId,
  location,
  landmarks,
  area,
  price,
  renovations,
}: AssetProps) => {
  return (
    <VStack
      backgroundColor="#1C3139"
      width="25%"
      height="80vh"
      marginTop="1%"
      padding="20px"
      spacing={5}
    >
      <Flex
        backgroundColor="#1E313A"
        width="100%"
        height="30%"
        justify="flex-start"
        align="flex-end"
        color="#25C296"
        fontWeight="600"
      >
        Token ID - {tokenId}
      </Flex>

      <VStack align="flex-start" spacing={0.5} width="100%">
        <Text color="#DBDFE1" fontSize="sm">
          Location
        </Text>
        <Text color="#fff">{location}</Text>
      </VStack>

      <VStack align="flex-start" spacing={0.5} width="100%">
        <Text color="#DBDFE1" fontSize="sm">
          Nearby Landmarks
        </Text>
        <Text color="#fff">{landmarks}</Text>
      </VStack>

      <HStack width="100%" spacing={0.5}>
        <Text color="#DBDFE1" fontSize="sm" width="50%" textAlign="left">
          Area
        </Text>
        <Text color="#fff" width="50%" textAlign="left">
          {area} sq. ft
        </Text>
      </HStack>

      <HStack width="100%" spacing={0.5}>
        <Text color="#DBDFE1" fontSize="sm" width="50%" textAlign="left">
          Price
        </Text>
        <Text color="#fff" width="50%" textAlign="left">
          {price}
        </Text>
      </HStack>

      <HStack width="100%" spacing={0.5}>
        <Text color="#DBDFE1" fontSize="sm" width="50%" textAlign="left">
          Renovations
        </Text>
        <Text color="#fff" width="50%" textAlign="left">
          {renovations}
        </Text>
      </HStack>

      <HStack width="100%" spacing={1} justify="space-between">
        <Button colorScheme="teal" width="47%" padding="5px 10px">
          Sell Property
        </Button>
        <Button width="47%" padding="5px 10px">
          Rent Property
        </Button>
      </HStack>
    </VStack>
  );
};

export default Asset;
