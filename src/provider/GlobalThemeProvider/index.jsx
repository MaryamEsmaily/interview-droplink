import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";

function GlobalThemeProvider({ children }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export default GlobalThemeProvider;
