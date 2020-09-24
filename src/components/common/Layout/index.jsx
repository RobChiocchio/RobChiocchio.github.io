import React, { useContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider, { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles.js';
import './fonts.css';

export const Layout = ({ children }) => {
  const prefersDarkMode = useContext(ThemeContext);

  //const { themeName } = useContext(ThemeContext);
  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? "dark" : "light",
  //         background: {
  //           paper: prefersDarkMode ? "#424242" : "#ffffff",
  //           default: prefersDarkMode ? "#303030" : "#fafafa",
  //         },
  //       },
  //     }),
  //     [prefersDarkMode],
  // );

  return (
    <>
      {/* <Global theme={prefersDarkMode} /> */}
      {/* <ThemeProvider theme={theme}> */}
      {/* <ThemeProvider> */}
        <CssBaseline />
        <Global />
        {children}
      {/* </ThemeProvider> */}
      {/* </ThemeProvider> */}
    </>
  );
};
