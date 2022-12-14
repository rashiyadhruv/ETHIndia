import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";
import Input from "../components/Input";
import HeroBG from "../assets/hero_bg.svg";
import ETHSymbol from "../assets/eth_symbol.svg";

import { TransactionContext } from "../context/RealEstateContext";

export default function Register() {
  const nameInputRef = React.useRef();
  const emailInputRef = React.useRef();
  const walletAddressInputRef = React.useRef();
  const AadharNumInputRef = React.useRef();
  const { connectWallet, currentAccount, generateToken } =
    React.useContext(TransactionContext);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page-container">
        <Box width="50%" height="10vh">
          <Heading
            background="none"
            color="#b3b2b2"
            fontWeight="800"
            fontSize="26px"
          >
            REGISTER
          </Heading>
          <div
            style={{
              marginTop: "2%",
              height: "1px",
              background: "#465B60",
            }}
          />
        </Box>
        <Flex height="80vh" alignItems="center" justify="space-between">
          <Flex direction="column" align="center">
            <Image src={HeroBG} alt="prop3rty" width={650} />
            <Text
              color="#91BAB4"
              size="18px"
              fontWeight="400"
              textAlign="center"
              marginTop="5%"
            >
              Real Estate - Buy/Sell/Rent on web3.
            </Text>
          </Flex>
          <Flex
            width="40%"
            flexDirection="column"
            position="relative"
            fontSize="14px"
            fontWeight="500"
            color="white"
          >
            <Input label="Name" inputRef={nameInputRef} />
            <Input label="Email" inputRef={emailInputRef} />
            <Input label="Wallet Address" inputRef={walletAddressInputRef} />
            <Input label="Aadhar Number" inputRef={AadharNumInputRef} />
            <Button
              style={{
                width: "100%",
                background: "#502D78",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
                padding: "2.5% 0",
                margin: "5% 0 0 0",
                cursor: "pointer",
                border: "none",
              }}
            >
              Register
            </Button>
            <Flex justify="center" marginTop="2%">
              <Text size="16px" fontWeight="700" color="#6E7C84">
                Already registered?
              </Text>
              <Text
                onClick={() => {
                  generateToken(220, 2, "details", "land");
                }}
                marginLeft="1%"
                size="16px"
                fontWeight="700"
                color="#25C296"
                cursor="pointer"
              >
                Connect with existing account
              </Text>
            </Flex>

            {/* animation */}
            <div id="eth-symbol-hero">
              <Image
                src={ETHSymbol}
                alt="ethereum symbol"
                width={160}
                quality={0.1}
              />
            </div>
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
