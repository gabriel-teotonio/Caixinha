import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Carrousel = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    max-width: 100%;

    @media (max-width:430px) {
        display: grid;
        grid-auto-flow: column;
        scroll-behavior: auto;
        gap: 1.2rem;
        overflow-y: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
        
    }
`