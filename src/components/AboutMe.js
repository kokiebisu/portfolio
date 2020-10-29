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
import './AboutMe.css';

export const AboutMe = ({ setState, setNumber }) => {
  return (
    <Wrapper>
      <ItemA
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          setState('3 years of experience');
          setNumber('first');
        }}>
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
      <ItemB
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          setState('Graduated from BCIT.');
          setNumber('second');
        }}>
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
      <ItemC
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          setState('Aspire to be a Fullstack Developer.');
          setNumber('third');
        }}>
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
              padding: '0 7px 30px',
            }}>
            <Role>
              Fullstack <br />
              Developer
            </Role>
          </div>
        </div>
      </ItemC>
      <ItemD
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          setState('These are the few of my favorite things.');
          setNumber('fourth');
        }}>
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
      <ItemE
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          setState('A developer from Japan.');
          setNumber('fifth');
        }}>
        <div style={{ height: '100%' }}>
          <img
            src={japan1}
            style={{ height: '100%', verticalAlign: 'bottom', width: '100%' }}
          />
        </div>
      </ItemE>
      <ItemF
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          setState('Check out my projects on Github!');
          setNumber('sixth');
        }}>
        <div style={{ height: '100%', padding: 15 }}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 8px',
            }}>
            <LogoWrapper>
              <AirbnbLogo width={30} />
            </LogoWrapper>
            <LogoWrapper>
              <SlackLogo width={30} />
            </LogoWrapper>
          </div>
        </div>
      </ItemF>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 30px auto 60px auto;
  padding: 0 45px;
  grid-template-columns: minmax(auto, 38%) minmax(auto, 62%);
  display: grid;
  grid-gap: 20px;

  @media (min-width: 560px) {
    max-width: 400px;
    margin: 0px auto;
    padding: 0;
  }

  @media (min-width: 728px) {
    max-width: 600px;
    height: 250px;
    grid-template-columns: minmax(auto, 17%) minmax(auto, 28%) minmax(auto, 35%) minmax(
        auto,
        20%
      );
  }

  & > div {
    border-radius: 10px;
  }
`;

const ItemA = styled(motion.div)`
  cursor: pointer;
  font-family: 'Walsheim';
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  border: none;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const ItemB = styled(motion.div)`
  cursor: pointer;
  border: none;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemC = styled(motion.div)`
  cursor: pointer;
  border: none;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
`;

const ItemD = styled(motion.div)`
  cursor: pointer;
  border: none;
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
  cursor: pointer;
  border: none;
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
  cursor: pointer;
  border: none;
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
  /* background: linear-gradient(to right, #f953c6, #cc2e8d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text; */

  background-image: repeating-linear-gradient(
    11deg,
    #c82e64,
    #c82e64 10px,
    #c95eb0 10px,
    #c95eb0 30px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Role = styled.h3`
  font-size: 32px;

  background-image: repeating-linear-gradient(
    287deg,
    #54ccd4,
    #54ccd4 10px,
    #85d6ba 10px,
    #85d6ba 30px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  line-height: 1;
  font-weight: 700;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const LogoWrapper = styled.div`
  margin: 0 24px;

  @media (min-width: 728px) {
    margin: 0 8px;
  }
`;
