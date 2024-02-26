import styled from "styled-components";
import { motion } from "framer-motion"



export const Container = styled.div`
justify-content: center; align-items: center;
display: flex; flex-direction: column;


`

export const CartMainDiv = styled(motion.div)`
width: 75vw;
min-height: 100vh;



border-radius: 5px; background-color: var(--sea-green);
border: 1px solid black;
padding: 0.5em;
box-shadow: 0 0 5px 5px gray;

display: flex; flex-direction: column;
justify-content: flex-start ; align-items: center;

`

export const RenderDivProducts = styled.div`
max-height: 85%; width: 75vw;
display: flex; flex-direction: column;
align-items: center;

button {
     height: 1.5em; width: 1.5em;
     font-size: large; border-radius: 5px;
     border: 1px solid black;
     margin: 1em;

     &:hover {
       background-color: var(--red-brick);
       transition: 1.5;
     }
}

`

export const TableStyles = styled.table`

`

export const ButtonStyle = styled.button`
     
      min-width: 50%;
      border-radius: 8px;
      background-color: var(--red-brick);
      text-align: center; 
      color: white; font-size: 1em;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const RenderProduct = styled.div`
width: 65vw;
background-color: white;
display: flex; flex-direction: row;
justify-content: center; align-items: center;
border-radius: 9px;
margin: 1em; padding: 1em;

@media (max-width: 514px) {
      display: flex;
      flex-direction: column;
}

&:hover {
     scale: 1.025; transition: 0.5s;
     border: 1px solid black;

    }

img {
     width:5em; height: 5em;
     border-radius: 15px;
     object-fit: contain; padding: 0 1em;
}
button {
     height: 1.5em; width: 1.5em;
     font-size: large; border-radius: 5px;
     border: 1px solid black;
     margin: 0.5em;

     &:hover {
       background-color: var(--red-brick);
       transition: 1.5;
     }
}

`


