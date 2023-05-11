import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyle } from "../../GlobalStyles";
import { Container, Main, MainContent } from "./styles";
import { Outlet } from 'react-router-dom';
import { Aside } from "../../Components/Aside";
import { HeaderMain } from "../../Components/HeaderMain";
import { NavMobile } from "../../Components/NavMobile";

function Root() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Aside />
        <Main>
          <HeaderMain />
          <MainContent className="content-main">
              <Outlet />
          </MainContent>
        </Main>

      <NavMobile />
      </ Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Root
