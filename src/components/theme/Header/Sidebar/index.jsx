import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => {
  const { themeName } = useContext(ThemeContext);
  
  return (
  <Wrapper active={sidebar} onClick={toggle} theme={themeName}>
    <NavbarLinks />
  </Wrapper>
  )
};

export default Sidebar;
