import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import styled from "styled-components"






export const TopNavbarStyle = styled.div`
min-width: 100vw;
background-color: black;
color: white; text-align: center;
p {
margin: 0;
}

`

export const MainNavbarStyles = styled.nav`
width: 100vw;
height: auto;
background-color: var(--sea-green);
display: flex; justify-content: space-between;
position: sticky; top: 0;

img {
     min-height: 5em; width: 5em;

}
ul {
     display: flex; flex-direction: row;
}
li { 
     margin: 1em;
  
}

@media (max-width: 596px) {
     min-width: 100vw;
     
ul, li {
           display: none;
     } 
}

`
export const NavLinkStyles = styled(NavLink)`
&.active {
      color: black;
}
`
export const HambMenu = styled(motion.div)`
display: flex; flex-direction: column;
margin: 1em;
z-index: 1;
@media (min-width: 596px) {
   display :none ;
}

div {
     height: 0.3em ; width: 3em;
     margin: 0.5em;
     border-radius: 5px; background-color: white;
}    
`
export const DropDownMenu = styled(motion.div)`

  
  position: fixed;
  top: 6.5em;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 65vw;
  height: auto;

  padding: 2rem;
  background-color: var(--sea-green);
  border-radius:  1rem 1rem 0 1rem;
  box-shadow: 0 0 20px 20px;

  
  
  @media (min-width: 596px) {
   display :none ;
}

ul {
     display: flex; flex-direction: column;
}
`
export const DropProd = styled(motion.div)`

position: fixed;
  top: 5.5em;
  right: 4em;
  z-index: 99;

  display: flex; flex-direction: column;
  width: 25vw;
  height: calc(85vh - 1rem);
  padding: 0.5rem;
  background-color: var(--sea-green);
  border-radius:  1rem 0 1rem 1rem;
  box-shadow: 0 0 10px 10px;
 
` 
export const DisplayQueryProd = styled.div`
width: auto; height: auto;
`

