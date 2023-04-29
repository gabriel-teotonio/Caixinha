import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.darkBlue};
`

export const TitleHeaderMain = styled.h2`
    font-weight: ${props => props.theme.fontWeight.medium};
    font-size: ${props => props.theme.fontSizes.xl};
`