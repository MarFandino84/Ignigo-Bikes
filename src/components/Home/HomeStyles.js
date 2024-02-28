import styled from "styled-components"


export const ContainerSection = styled.div`

display: flex;
justify-content: center; align-items: center;
width: 100%; height: 100%;
position: relative;

img {
    width: auto;
    object-fit: cover;
    aspect-ratio: 16/ 9;
}
h3 {
      font-style: italic;
      font-size: 3em;
      position: absolute;
      top: 1em; 
      right: 15%;
}


`