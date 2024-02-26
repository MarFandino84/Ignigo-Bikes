import styled from "styled-components";

export const Container = styled.div`
display: flex; justify-content: center; align-content:center;
margin-top: 3em;

`

export const UserFormStyled = styled.form`
display: flex; flex-direction: column;
justify-content: center; align-items: center;
max-width: 15em;
padding: 2em;

border: 1px solid var(--sea-green);
border-radius: 15px; box-shadow: 0 0 10px 10px silver;

input {
     border: none;
     border-radius: 5px;
         min-width: 12em; height: 3em; text-align: center;
     margin: 2em;
     &:hover {
         background-color: var(--sea-green);
         transform: var(--sea-green);
     }
}
button {
    height: 3em;
    min-width: 12em; border-radius: 10px; text-align: center;
    padding: 2px;
    border: 1px solid var(--sea-green);
    &:hover {
         background-color: var(--sea-green);
    }
     
}


`