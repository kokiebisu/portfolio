import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  AirbnbLogo,
  SlackLogo,
  Cooking,
  SnowBoarding,
  Guitar,
} from '../assets/svg/icon';

const Years = styled.h3`
  background: linear-gradient(to right, #f953c6, #cc2e8d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const AboutMe = () => {
  return (
    <Wrapper>
      <ItemA whileHover={{ scale: 1.03 }}>
        <div
          style={{
            height: '100%',
            padding: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <div></div>
          <div>
            <Years
              style={{
                fontSize: 48,
              }}>
              3
            </Years>
          </div>
        </div>
      </ItemA>
      <ItemB whileHover={{ scale: 1.03 }}>
        <div style={{ height: '100%', padding: 15 }}>
          <div>
            <h3>rst</h3>
          </div>
        </div>
      </ItemB>
      <ItemC whileHover={{ scale: 1.03 }}>
        <div
          style={{
            height: '100%',
            padding: 15,
            display: 'flex',
            alignItems: 'center',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0 20px',
            }}>
            <div style={{ width: 40 }}>
              <Cooking />
            </div>
            <div style={{ width: 40 }}>
              <SnowBoarding />
            </div>
            <div style={{ width: 40 }}>
              <Guitar />
            </div>
          </div>
        </div>
      </ItemC>
      <ItemD whileHover={{ scale: 1.03 }}>
        <div style={{ height: '100%', padding: 15 }}>first</div>
      </ItemD>
      <ItemE whileHover={{ scale: 1.03 }}>
        <div style={{ height: '100%', padding: 15 }}></div>
      </ItemE>
      <ItemF whileHover={{ scale: 1.03 }}>
        <div style={{ height: '100%', padding: 15 }}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 15px',
            }}>
            <div>
              <AirbnbLogo width={30} />
            </div>
            <div>
              <SlackLogo width={30} />
            </div>
          </div>
        </div>
      </ItemF>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 250px;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(auto, 18%) minmax(auto, 27%) minmax(auto, 30%) minmax(
      auto,
      25%
    );

  & > div {
    border-radius: 10px;
  }
`;

const ItemA = styled(motion.div)`
  font-family: 'Walsheim';
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemB = styled(motion.div)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemC = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemD = styled(motion.div)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemE = styled(motion.div)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemF = styled(motion.div)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;
