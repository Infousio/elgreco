import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#582B0B'
    },
    secondary: {
      main: '#EADBBA'
    },
    error: {
      main: "#FFFFFF"
    },
    background: {
    },
    aTags: {
      '&:hover': {
        textDecoration: "none",
        cursor: "default"
      }
    }
  }
});

export default theme;