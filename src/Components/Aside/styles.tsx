import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.nav`
    min-height: 100vh;
    width: 250px;
    background-color: ${props => props.theme.colors.darkBlue};
    color: white;
`
export const AsideTitle = styled.h2`
    text-align: center;
    border-bottom: #ffffff65 1px solid;
    padding: .5rem 0;
`
export const ListNavigate = styled.ul`
    padding: 0 1rem;
    margin-top: 2rem;
`
export const ItemNavigate = styled.li`
    margin-top: 1rem;
    font-size: ${props => props.theme.fontSizes.lg};
    `

export const NavLink = styled(Link)`
    display: flex;
    gap: 10px;
`