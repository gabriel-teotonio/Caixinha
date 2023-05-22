import ReactInputMask from "react-input-mask";
import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
`

export const FieldBox = styled.div`
    width: 100%;
    margin: 1rem 0;
`
export const Label = styled.label`
    color: ${props => props.theme.colors.whiteBlue};
`

export const InputMask = styled(ReactInputMask)`
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

export const ButtonSubmit = styled.button`
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
`