import styled from "styled-components"

export const Main = styled.main`

    display: flex;
    flex-direction: column;
    width: 100%;

    section h2{
        padding: 4rem;
        background-color: grey;
        margin: 2rem 0;
    }
    picture img {
        width: 100%;
    }
    ul {
        display: flex;
        flex-direction: row;
    }
    ul picture {
        width: 2rem;
    }
`