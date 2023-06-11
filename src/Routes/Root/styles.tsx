import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    max-width: 100%;
`

export const Main = styled.main`
    padding: 1rem 2rem;
    margin-left: 20%;
    flex: 1;
    min-height: 100%;
    max-width: 100%;

    @media (max-width:430px) {
        margin: 0;
        padding: 1rem;
        padding-bottom: 4rem;
    }
`

export const MainContent = styled.div`
    max-height: calc(100% - 49px);
    margin-top: 1rem;
`