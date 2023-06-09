import styled from "styled-components";

export const Container = styled.div`
   ul{
      max-width: 400px;
      margin-top: 2rem;
      li{
         margin-top: .5rem;
         display: flex;
         justify-content: space-between;
         background-color: ${props => props.theme.colors.white};
         box-shadow: #0000001b 1px 1px 2px ;
         padding: 1rem .5rem;
         border-radius: 6px;
      }
   }
`