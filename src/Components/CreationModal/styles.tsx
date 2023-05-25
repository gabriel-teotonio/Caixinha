import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    min-height: 150px;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #567794;
    padding: 1rem;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: .5rem;
    color: white;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        button{
            color: white;
        }
    }
`

export const ListButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h4{
        font-size: 1rem;
        color: white;
        text-align: center;
        padding-bottom: 1.5rem;
    }
`

export const ButtonAction = styled.button`
    background-color: ${props => props.theme.colors.lightBlue_200};
    padding: 10px;
    color: ${props => props.theme.colors.white};
    border-radius: .5rem;
    font-family: 'montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: ${props => props.theme.fontSizes.md};
`

export const IconWrapper = styled.div`
    font-size: 1.5rem;
`