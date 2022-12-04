import * as React from "react";
import type { AppProps } from "next/app";
import { TransactionProvider } from "../context/RealEstateContext";
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </TransactionProvider>
  );
}
