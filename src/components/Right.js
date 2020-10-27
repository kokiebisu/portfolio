import React from 'react';
import styled from 'styled-components';

export const Right = () => {
  return (
    <Wrapper>
      <HeaderRight></HeaderRight>
      <div>
        <Avatar>
          <img src='' />
        </Avatar>
        <Name>
          <h3>Kenichi Okiebisu</h3>
        </Name>
        <Role>
          <h4>Frontend Developer</h4>
        </Role>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 30%;
  padding: 20px;
  height: 100vh;
`;

const HeaderRight = styled.div`
  height: 70px;
  width: 100%;
`;

const Avatar = styled.div``;

const Name = styled.div`
  & h3 {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Role = styled.div`
  & h4 {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
