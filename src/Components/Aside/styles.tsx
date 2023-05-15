import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { IPropsModal } from "../../types/modal";


export const Container = styled.nav<IPropsModal>`
    min-height: 100vh;
    width: 20%;
    background-color: ${props => props.theme.colors.darkBlue};
    color: white;
    position: fixed;
    transition: all .4s;

    @media (max-width: 430px) {
        min-height: 30%;
        height: auto;
        width: 100%;
        border-radius: 1rem 1rem 0 0;
        padding-bottom: 1rem;
        ${({isOpen}) => !isOpen ? css`
        bottom: -15rem;
    `: css`
        bottom: 0;
    `}
        /* display: none; */
    }
`

export const AsideHeader = styled.header`
    border-bottom: #ffffff65 1px solid;
    text-align: center;
    padding: .5rem 1rem;
    button{
        color: white;
    }

    @media (max-width: 430px) {
        display: flex;
        justify-content: space-between;
    }
`

export const AsideTitle = styled.h2``

export const ListNavigate = styled.ul`
    padding: 0 1rem;
    margin-top: 2rem;
`
export const ItemNavigate = styled.li`
    margin-top: 1rem;
    font-size: ${props => props.theme.fontSizes.lg};
    `

export const IconWrapper = styled.div`
    font-size: 1.5rem;
`

export const NavLink = styled(Link)`
    display: flex;
    gap: 10px;
`