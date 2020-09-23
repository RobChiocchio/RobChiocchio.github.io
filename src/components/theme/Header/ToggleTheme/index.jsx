import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={themeName === "light" ? moonIcon : sunIcon} alt={themeName} />
    </Wrapper>
  );
};

export default ToggleTheme;
