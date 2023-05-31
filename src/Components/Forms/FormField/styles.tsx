import styled from "styled-components";


export const FieldBox = styled.div`
    width: 100%;
    margin: 1rem 0;
`
export const Label = styled.label`
    color: ${props => props.theme.colors.whiteBlue};
`

export const Input = styled.input`
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
`