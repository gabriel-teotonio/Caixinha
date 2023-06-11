import styled from "styled-components";

export const Container = styled.button`
    background-color: ${props => props.theme.colors.blue};
    padding: 10px;
    color: ${props => props.theme.colors.white};
    border-radius: .5rem;
    font-family: 'montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: ${props => props.theme.fontSizes.md};
    width: 100%;
    margin-top: 2rem;

    &:hover{
        filter: brightness(.9);
    }
`