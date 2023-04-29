import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    max-width: 460px;
`
export const Title = styled.h3`
    border-bottom: ${props => props.theme.colors.darkBlueTransparent} 1px solid;
    padding-bottom: .5rem;
`
export const TransactionList = styled.ul`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
`