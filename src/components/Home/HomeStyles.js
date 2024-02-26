import styled from "styled-components"


export const ContainerSection = styled.section`

display: flex;
width: 100vw; height: 65vh;
z-index: -15;

img {
    width : 0 ;
    opacity: 0.8; 
      flex-grow: 1;
      transition: ease 0.5s;
     object-fit: cover;

&:hover {
     opacity: 1;
     width: 30vw;

}

 
}


`