import React from 'react';
import SlickSlider from 'react-slick';
import styled, { keyframes } from 'styled-components';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
      
    />
  );
}

const keyFrameRight = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -800px `;

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }

  &:hover{
    animation-delay:2s;
    animation-name: ${keyFrameRight} ;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: left;
      animation-timing-function: linear;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

 
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      focusOnSelect: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 