import HorizontalNav from './HorizontalNav';
import VerticalNav from './VerticalNav';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

export default function Layout({ children }) {
  
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      {matchesMD ? <HorizontalNav/> : <VerticalNav/>}
      {children}
    </div>
  );
}
