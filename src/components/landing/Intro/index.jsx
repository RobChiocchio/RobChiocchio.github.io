import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from "@material-ui/core";
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={themeName}>
          <h1>Hi There!</h1>
          <h4>I’m Rob!</h4>
          <Button variant="contained" color="primary" as={AnchorLink} href="#projects">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Rob!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};