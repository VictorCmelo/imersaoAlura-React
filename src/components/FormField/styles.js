import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 80%;

  margin-bottom: 15px;
  `;

export const Label = styled.label`
 position: absolute;
  top: 0;
  display: block;
  transition:(line-height linear .2s) ;
  font-size: 1rem;
  color: #fff;
`;

export const Input = styled.input`
 &:required,&:invalid { box-shadow:none; }
font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
 
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${Label}{
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ ${Label}{
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--grayLight);
    font-weight:700; 
    }

    padding-bottom: 6px;  
   font-weight: 700;
    border-width: 3px;
  border-image: linear-gradient(to right, var(--grayLight), var(--grayMedium));
  border-image-slice: 1;
  }

`;