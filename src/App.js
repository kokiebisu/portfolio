import styled from 'styled-components';
import {
  AirbnbLogo,
  Html,
  Css,
  Javascript,
  Typescript,
  ReactLogo,
  DockerLogo,
  NodejsLogo,
  CircleCILogo,
  GolangLogo,
  StorybookLogo,
  NextJSLogo,
  AWSLogo,
} from './assets/svg/icon';
import { Slider } from './components/Slider';

import './App.css';

function App() {
  const iconsA = [
    <Html width={50} />,
    <Css width={50} />,
    <Javascript width={50} />,
    <Typescript width={50} />,
    <ReactLogo width={50} />,
    <DockerLogo width={150} />,
    <NodejsLogo width={50} />,
    <Html width={50} />,
    <Css width={50} />,
    <Javascript width={50} />,
    <Typescript width={50} />,
    <ReactLogo width={50} />,
    <DockerLogo width={150} />,
    <NodejsLogo width={50} />,
  ];

  const iconsB = [
    <GolangLogo width={50} />,
    <StorybookLogo width={50} />,
    <CircleCILogo width={50} />,
    <NextJSLogo width={80} />,
    <AWSLogo width={70} />,
    <DockerLogo width={150} />,
    <NodejsLogo width={50} />,
    <Html width={50} />,
    <Css width={50} />,
    <Javascript width={50} />,
    <Typescript width={50} />,
    <ReactLogo width={50} />,
    <DockerLogo width={150} />,
    <NodejsLogo width={50} />,
  ];

  return (
    <Wrapper>
      <Left>
        <HeaderLeft>
          <div>Logo</div>
        </HeaderLeft>
        <Main>
          <Header>Welcome.</Header>
          <SubHeader>Try hovering below!</SubHeader>
          <div style={{ margin: '64px 0' }}>
            <Slider icons={iconsA} timing={40} />
            <Slider icons={iconsB} timing={25} />
          </div>
          <AboutMe>
            <ItemA>
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
            <ItemB>
              <div style={{ height: '100%', padding: 15 }}>first</div>
            </ItemB>
            <ItemC>
              <div style={{ height: '100%', padding: 15 }}>first</div>
            </ItemC>
            <ItemD>
              <div style={{ height: '100%', padding: 15 }}>first</div>
            </ItemD>
            <ItemE>
              <div style={{ height: '100%', padding: 15 }}></div>
            </ItemE>
            <ItemF>
              <div style={{ height: '100%', padding: 15 }}>
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AirbnbLogo width={30} />
                </div>
              </div>
            </ItemF>
          </AboutMe>
        </Main>
      </Left>
      <Right />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 70%;
`;

const HeaderLeft = styled.div`
  height: 70px;
  width: 100%;
  padding: 20px;
`;

const Main = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const AboutMe = styled.div`
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
    border-radius: 20px;
  }
`;

const Animation = styled.div`
  width: 100%;
  height: 250px;
`;

const Years = styled.h3`
  background: linear-gradient(to right, #f953c6, #cc2e8d);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const Header = styled.h3`
  font-size: 72px;
  font-family: 'Walsheim-Bold';
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const SubHeader = styled.p`
  margin: 15px 0;
  font-size: 32px;
  font-family: 'Walsheim';
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  background-color: #fafafa;
  width: 30%;
  padding: 20px;
  height: 100vh;
`;

const ItemA = styled.div`
  font-family: 'Walsheim';
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemB = styled.div`
  color: white;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemC = styled.div`
  color: white;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemD = styled.div`
  color: white;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemE = styled.div`
  color: white;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ItemF = styled.div`
  color: white;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

export default App;
