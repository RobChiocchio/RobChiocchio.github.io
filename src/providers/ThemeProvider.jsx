import React, { createContext } from 'react';
import useDarkMode from 'hooks/useDarkMode';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";

const themes = {
  "light": lightTheme,
  "dark": darkTheme,
};

export const ThemeContext = createContext("light");

export default ({ children }) => {
  const [themeName, toggleTheme] = useDarkMode();

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};