import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  AirbnbLogo,
  SlackLogo,
  Cooking,
  SnowBoarding,
  Guitar,
  BCITLogo,
} from '../assets/svg/icon';
import japan1 from '../assets/img/japan1.png';

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
        <div
          style={{
            height: '100%',
            backgroundColor: '#003C71',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div>
            <BCITLogo width={75} />
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
              width: '100%',
              padding: '0 20px',
            }}>
            <Role>Fullstack Developer</Role>
          </div>
        </div>
      </ItemC>
      <ItemD whileHover={{ scale: 1.03 }}>
        <div
          style={{
            height: '100%',
            padding: '30px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
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
      </ItemD>
      <ItemE whileHover={{ scale: 1.03 }}>
        <div style={{ height: '100%' }}>
          <img
            src={japan1}
            style={{ height: '100%', verticalAlign: 'bottom', width: '100%' }}
          />
        </div>
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
  max-width: 400px;
  margin: 0 auto;
  grid-template-columns: minmax(auto, 38%) minmax(auto, 62%);
  display: grid;
  grid-gap: 20px;

  @media (min-width: 728px) {
    max-width: 600px;
    height: 250px;
  }

  & > div {
    border-radius: 10px;
  }
`;

const ItemA = styled(motion.div)`
  font-family: 'Walsheim';
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const ItemB = styled(motion.div)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
`;

const ItemC = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
`;

const ItemD = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 6;
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;

  @media (min-width: 728px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
  }
`;

const ItemE = styled(motion.div)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;

  @media (min-width: 728px) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const ItemF = styled(motion.div)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;

  @media (min-width: 728px) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

const Years = styled.h3`
  background: linear-gradient(to right, #f953c6, #cc2e8d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const Role = styled.h3`
  font-size: 38px;
  background: linear-gradient(to right, #11998e, #38ef7d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  line-height: 1;
  font-weight: 700;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
