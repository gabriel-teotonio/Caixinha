import styled from "styled-components";

export const List = styled.ul`
   max-width: 400px;
   margin-top: 1rem;

   input{
      border-radius: 4px;
      border: #00000061 1px solid;
      padding: .4rem;
   }
`
export const Item = styled.li`
   margin-top: .5rem;
   display: flex;
   justify-content: space-between;
   background-color: ${props => props.theme.colors.white};
   box-shadow: #0000001b 1px 1px 2px ;
   padding: 1rem .5rem;
   border-radius: 6px;
`