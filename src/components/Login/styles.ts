import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
    
    width: 100%;
    background-color: azure;
    
    section {
        text-align: center;
        display: flex;
        flex-direction: column;
        background-color: ${colors.blue};
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    section picture {
        width: 20%;
    }
    section picture img {
        margin-left: -3rem;
        padding: 0.3rem;
        width: 2rem;
    }
    section h1 a{
        padding-top: 0.5rem;
        color: black;
        text-decoration: none;
        font-size: 2.5rem;
        width: 80%;
        margin-left: 4.8rem;
        display: flex;
        align-items: center;
        background-color: ${colors.black};
        font-family: 'Playfair Display';
    }
    fieldset {
        background-color: azure;
        padding-top: 17rem;
    }
    #abaixaBotao {
        padding-top: 9rem;
    }
    .dados {
        font-size: 1.8rem;
        display: flex;
        text-align: center;
    }
    input {
        background-color: cornsilk;
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
`