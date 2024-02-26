import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

:root {
    --sea-green: #8FBC8F;
    --red-brick: #B22222;
    --grenboro-grey: #DCDCDC;
  --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background-color: lightgray;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }


`;