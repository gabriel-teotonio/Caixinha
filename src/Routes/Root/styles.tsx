import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-height: 100vh;
`

export const Main = styled.main`
    flex: 1;
    padding: 1rem;
    max-width: 895px;
    margin: 0 auto;
    min-height: 100%;
`

export const MainContent = styled.div`
    max-height: calc(100% - 49px);
    margin-top: 1rem;
`