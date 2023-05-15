import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyle } from "../../GlobalStyles";
import { Container, Main, MainContent } from "./styles";
import { Outlet } from 'react-router-dom';
import { Aside } from "../../Components/Aside";
import { HeaderMain } from "../../Components/HeaderMain";
import { NavMobile } from "../../Components/NavMobile";
import { useAppContext } from "../../contexts/appContext";
import { ModalContainer } from "../../Components/ModalContainer";
import { ModalProvider } from "../../contexts/modalContext";

function Root() {
  const { isMobileScreen } = useAppContext();

  return (
    <ThemeProvider theme={theme}>
      
        <Container>
          {
            !isMobileScreen && <Aside />
          }
          <Main>
            <HeaderMain />
            <MainContent className="content-main">
                <Outlet />
            </MainContent>
          </Main>

        {
          isMobileScreen && (
            <>
            <ModalProvider>
              <NavMobile />
              <ModalContainer />
            </ModalProvider>
            </>
          ) 
        }
        </ Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Root
