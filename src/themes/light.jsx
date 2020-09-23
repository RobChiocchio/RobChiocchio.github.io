import { createMuiTheme } from "@material-ui/core/styles";
import base from "./base";

export const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      background: {
        paper: "#ffffff",
        default: "#fafafa",
      },
    },
    base
  });