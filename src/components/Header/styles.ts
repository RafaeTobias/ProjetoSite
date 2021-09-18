import styled from "styled-components"
import { colors } from "styles/GlobalStyle"
import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    /* latin */
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/playfairdisplay/v22/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDXbtM.woff2') format('woff2');
    }
`
export const Header = styled.header`

    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.blue};
    section {
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
    nav {
        padding-top: 0.5rem;
        background-color: ${colors.white};
        margin: 0;
        display: flex;
        flex-direction: row;
    }
    nav ul {
        padding: 0%;
        margin: 0rem;
        font-size: 1.1rem;
    }
    nav ul li {
        margin: 0rem;
        padding: 0rem;
        padding-right: 0rem;
        display: inline;
        list-style: none;
    }
    nav ul li a{
        padding-top: 0.5rem;
    }
    .left {    
    padding-bottom: 0.5rem;
    padding-inline-end: 5rem;
    padding-inline-start: 5rem;
    }
    .right {
    padding-bottom: 0.5rem;
    margin-left: 2.9rem;
    padding-inline-end: 5rem;
    padding-inline-start: 5rem; 
    }
    nav ul li a {
        text-decoration: none;
        color: black;
        background-color: grey;
        font-family: 'Playfair Display', serif;
    }
    nav ul li a:hover {
        background-color: #65c3eb;
        cursor: pointer;
        padding-bottom: 1rem;
        
    }

`

