import styled from "styled-components";


export const Nav = styled.nav`
    height: 66px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 1rem 1rem 0 0;
    padding:.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    button{
        color: currentColor;
    }
`

export const IconWrapper = styled.div`
    font-size: 1.8rem;
`