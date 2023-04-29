import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${props => props.theme.colors.white};
    width: 260px;
    border-radius:4px;
    box-shadow: ${props => props.theme.colors.shadowInfoItem};
`
export const Title = styled.h4`
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight:  ${props => props.theme.fontWeight.normal};
    color:  ${props => props.theme.colors.lightBlue_100};
    `
export const Value = styled.span`
    font-size: ${props => props.theme.fontSizes.xxl} ;
    color:  ${props => props.theme.colors.darkBlue};
    font-weight:  ${props => props.theme.fontWeight.bold};
`
