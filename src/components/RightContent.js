import React from 'react';
import styled from 'styled-components';
import { GithubLogo, LinkedinLogo, GmailLogo } from '../assets/svg/icon';

export const RightContent = () => {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Avatar>
            <img src='' />
          </Avatar>
          <Name>
            <h3 style={{ fontFamily: 'AirbnbCereal' }}>Kenichi Okiebisu</h3>
          </Name>
          <Role>
            <h4 style={{ fontFamily: 'AirbnbCereal-Book' }}>
              Software Developer
            </h4>
          </Role>
        </div>
        <div style={{ width: 150, margin: '15px auto' }}>
          <a
            href='https://github.com/kokiebisu'
            style={{ display: 'inline-block', margin: '0 10px' }}>
            <GithubLogo width={25} />
          </a>
          <a
            href='https://www.linkedin.com/in/kokiebisu'
            style={{ display: 'inline-block', margin: '0 10px' }}>
            <LinkedinLogo width={25} />
          </a>
          <div style={{ display: 'inline-block', margin: '0 10px' }}>
            <GmailLogo width={25} />
          </div>
        </div>
        <div>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'AirbnbCereal-Light',
              color: '#9b9b7a',
            }}>
            Hi! I'm Ken and I am currently looking for a frontend or fullstack
            developer position. Please reach me out if your interested!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: #fafafa; */
  /* background-color: #fff1e6; */
  background-color: #f0efeb;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const HeaderRight = styled.div`
//   height: 70px;
//   width: 100%;
// `;

const Avatar = styled.div``;

const Name = styled.div`
  text-align: center;
  & h3 {
    color: #6b705c;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Role = styled.div`
  text-align: center;
  & h4 {
    color: #9b9b7a;
    font-weight: 300;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
