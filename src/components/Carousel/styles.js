import styled, { keyframes } from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

 const keyFrameExampleOne = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -800px `;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
 
  list-style: none;
  display: flex;
 
  flex-direction: row;
  overflow: hidden;
  margin: 32px auto;
  
  margin-right: 16px;

  &:hover{
    animation-name: ${keyFrameExampleOne};
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-direction: left;
      animation-timing-function: linear;
  }
       

  li {
   
    	
  }

  
`;



export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
