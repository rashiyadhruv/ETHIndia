import Image from "next/image";
import { Box, Flex, HStack } from "@chakra-ui/react";

import TokenGraphic from "../assets/token_buy_sell.png";

type TokenPageProps = { type: string; tokenId: string };

const TokenPage = ({ type, tokenId }: TokenPageProps) => {
  return (
    <Box className="page-container" height="80vh">
      <Flex
        justify="flex-start"
        align="flex-end"
        color="#25C296"
        fontWeight="600"
        marginBottom="40px"
      >
        Your Assets {">>"} Token ID - {tokenId}
      </Flex>
      <HStack>
        <Image src={TokenGraphic} alt="prop3rty" width={450} />
      </HStack>
    </Box>
  );
};

export default TokenPage;
