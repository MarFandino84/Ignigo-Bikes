import styled from "styled-components";


export const FooterStyles = styled.footer`
 
 min-height: calc(20vh - 5px);
 margin-top: 0.5em;
 display: flex;
 padding: 0 1em;
 justify-content: space-between; align-items: center;
background-color: var(--sea-green);

span { 
   font-style: italic;
}

img {
     height: 5vh;
     border-radius: 6px;
}
ul { 
    display: flex; flex-direction: row;
}

li {
     margin: 0 1.2em;
     list-style: none;

}

`