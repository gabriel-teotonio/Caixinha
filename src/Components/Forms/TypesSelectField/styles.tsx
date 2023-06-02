import styled from "styled-components";

export const FieldBox = styled.div`
   width: 100%;
   margin: 1rem 0;
`

export const Select = styled.select`
   width: 100%;
   padding: .4rem;
   height: 40px;
   margin-top: .2rem;
   background-color: transparent;
   border: 1px solid ${props => props.theme.colors.lightBlue_200};
   border-radius: 6px;
   box-shadow: none;
   outline: none;
   color: ${props => props.theme.colors.whiteBlue};
   font-weight: ${props => props.theme.fontWeight.medium};
`

export const Option = styled.option`
   background-color: #040e28;
   color: white;
`
export const Label = styled.label``