import styled from "styled-components";

export const InputDefault = styled.input`
    width: 100%;
    padding: .4rem;
    outline: none;
    border: 1px solid ${props => props.theme.colors.lightBlue_200};
    border-radius: 6px;
    margin-top: .2rem;
    height: 40px;
    font-size: 1rem;
    background-color: transparent;
    color: ${props => props.theme.colors.whiteBlue};
    font-weight: ${props => props.theme.fontWeight.medium};
    
    &::placeholder{
        color:  ${props => props.theme.colors.lightBlue_200};
    }
    &:focus{
        border: 1px solid ${props => props.theme.colors.lightBlue_100};
    }
`