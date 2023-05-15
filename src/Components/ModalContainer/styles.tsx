import styled, { css } from "styled-components";
import { IPropsModal } from "../../types/modal";


export const Container = styled.div<IPropsModal>`
    height: 100%;   
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 500;
    ${({isOpen}) => !isOpen ? css`
        opacity: 0;
        pointer-events: none;
    `: css`
        opacity:1;
        pointer-events: all;
    `}
`