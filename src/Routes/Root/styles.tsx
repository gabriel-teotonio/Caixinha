import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-height: 100vh;
`

export const Main = styled.main`
    padding: 1rem;
    margin-left: 20%;
    flex: 1;
    min-height: 100%;
`

export const MainContent = styled.div`
    max-height: calc(100% - 49px);
    margin-top: 1rem;
`