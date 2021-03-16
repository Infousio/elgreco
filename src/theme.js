import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#DBDBDB",
    },
    error: {
      main: "#FFFFFF",
    },
    background: {},
    aTags: {
      "&:hover": {
        textDecoration: "none",
        cursor: "default",
      },
    },
  },
});

export default theme;
