import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;

    h2{
        padding-top: 1rem;
        font-size: 2.5rem;
        width: 100%;
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    picture {
        width: 40%;
        display: flex;
        flex-direction: column;
        display: center;
    }
    div picture section h3{
        padding: 2rem;
        margin: 1rem;
        align-items: center;
        background-color: grey;
    }
    picture img{
        margin-left: 4rem;
        padding: 0;
        width: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .vs{
    padding-top: 9rem;
    text-align: center;
    font-size: 1.4rem;
    width: 20%;
    }
    .vs h3 {
        padding: 3rem;
    }
    .ford {
        margin-left: 2rem;
        padding-bottom: 0.5rem;
        width: 194px;
    }
    .button {
    text-align: center;
    } 
`