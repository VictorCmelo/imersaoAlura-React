import styled from 'styled-components';



export const Info = styled.div`
  position: absolute;
 transform: translateX( -100%);
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
  background-color: var(--black);

  p {
    margin-left: 5px;
  }
`;

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
 
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  &:hover {
    --move: calc(var(50rem) * -1);
        transform: scale(1.015);
        & > ${Info} {
            transform: translateX(0);
            opacity: 1;
            transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
        }
  }
`;