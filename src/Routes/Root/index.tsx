import { GlobalStyle } from "../../GlobalStyles";
import { Container, Main, MainContent } from "./styles";
import { Outlet } from 'react-router-dom';
import { Aside } from "../../Components/Aside";
import { HeaderMain } from "../../Components/HeaderMain";
import { NavMobile } from "../../Components/NavMobile";
import { useAppContext } from "../../contexts/appContext";
import { ModalContainer } from "../../Components/ModalContainer";
import { ModalProvider } from "../../contexts/modalContext";
import 'react-toastify/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify'

function Root() {
  const { isMobileScreen } = useAppContext();

return (
  <>
    <ModalProvider>
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
                <NavMobile />
              </>
            ) 
          }
          <ModalContainer />
          <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
          />
      </ Container>
    </ModalProvider>
      <GlobalStyle />
      </>
  )
}

export default Root
