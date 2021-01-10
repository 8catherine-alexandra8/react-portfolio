import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}
body{
    background: #1b1b1b;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #0B4C5F;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Roboto', sans-serif;
    &:hover{
        background-color: #0B4C5F;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: normal;
        font-size: 1.7rem;
        &:hover{
            color: #E9FA03;
        }
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #0B4C5F;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    ul{
        list-style: none;
    }
`

export default GlobalStyle
