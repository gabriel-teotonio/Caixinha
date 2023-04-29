import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.colors.lightBlue_200};
`
export const ItemInfos = styled.div`
`
export const SubInfos = styled.div`
    display: flex;
    gap: .5rem;
    font-size: 14px;
    margin-top: .3rem;
`
export const ItemName = styled.h5`
    font-size: 18px;
    font-weight: 500;
`
export const TransactionType = styled.div``
export const TransactionsDate = styled.div``

export const TransactionValue = styled.span`
    font-weight: 600;
    font-size: 18px;
`