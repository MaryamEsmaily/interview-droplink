import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "theme/styles";
//
const theme = extendTheme(
  {
    direction: "ltr",
    styles,
    semanticTokens: {
      colors: {
        layout: { default: "#1E1E1E" },
        "text-primary": { default: "#FFFFFF" },
        "text-secondary": { default: "#C2C2C2" },
        green: "#2EC99E",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "green",
  })
);

export default theme;
