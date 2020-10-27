import React from 'react';
import styled from 'styled-components';

export const Right = () => {
  return (
    <Right>
      <HeaderRight></HeaderRight>
      <div>
        <Avatar>
          <img src='' />
        </Avatar>
        <Name>
          <h3>Kenichi Okiebisu</h3>
        </Name>
        <Role>
          <h3>Frontend Developer</h3>
        </Role>
      </div>
    </Right>
  );
};

const HeaderRight = styled.div`
  height: 70px;
  width: 100%;
`;

const Avatar = styled.div``;

const Name = styled.div``;

const Role = styled.div``;
