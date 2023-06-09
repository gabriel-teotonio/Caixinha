import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    max-width: 100%;
    padding: 2rem 1rem;

    img{
      width: 100%;
      max-width: 500px;
    }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1{
    font-size: 48px;
  }
`
export const BackButton = styled(NavLink)`
  padding: .5rem 1rem;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 2rem;
  color: white;
  margin-top: 2rem;
`
