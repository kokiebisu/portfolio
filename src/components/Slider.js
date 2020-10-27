import React from 'react';
import styled, { keyframes } from 'styled-components';
import './styles.css';

export const Slider = ({ icons, timing }) => {
  return (
    <div>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div class='slider'>
          <SlideTrack timing={timing}>
            {icons.map((icon) => {
              return <Slide>{icon}</Slide>;
            })}
          </SlideTrack>
        </div>
      </div>
    </div>
  );
};

const Slide = styled.div`
  height: 100px;
  width: 250px;
`;

const SlideTrack = styled.div`
  -webkit-animation: scroll ${(props) => props.timing && props.timing}s linear
    infinite;
  animation: scroll ${(props) => props.timing && props.timing}s linear infinite;
  display: -webkit-box;
  display: flex;
  width: calc(250px * 14);
`;
