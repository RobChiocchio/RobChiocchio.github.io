import { createMuiTheme } from "@material-ui/core/styles";
import base from "./base";

export const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        paper: "#424242",
        default: "#303030",
      },
    },
    base
  })