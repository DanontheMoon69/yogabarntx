import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import { StateContext } from "../context/StateContext";
//import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    //<ChakraProvider>
    <AuthContextProvider>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </AuthContextProvider>
    //</ChakraProvider>
  );
}

export default MyApp;
