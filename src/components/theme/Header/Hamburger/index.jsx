import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => {

  const { themeName } = useContext(ThemeContext);
  
  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} theme={themeName}/>
      <Bar mid sidebar={sidebar} theme={themeName} />
      <Bar bottom sidebar={sidebar} theme={themeName} />
    </Wrapper>
  )
};

export default Hamburger;
