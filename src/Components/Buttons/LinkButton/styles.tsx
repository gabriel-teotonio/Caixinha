import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const IconWrapper = styled.div`
    font-size: 1.8rem;
`

export const Container = styled(NavLink)`
   padding: .5rem 1rem;
   background-color: ${props => props.theme.colors.blue};
   border-radius: 2rem;
   color: white;
`
