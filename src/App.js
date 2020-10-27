import styled from 'styled-components';
import {
  AirbnbLogo,
  Javascript,
  Typescript,
  ReactLogo,
  DockerLogo,
  NodejsLogo,
  CircleCILogo,
  GolangLogo,
  NextJSLogo,
  AWSLogo,
  WebpackLogo,
  SassLogo,
  PostgresLogo,
  MongoDBLogo,
  ApolloLogo,
} from './assets/svg/icon';
import { Slider } from './components/Slider';
import './App.css';
import { RightContent } from './components/RightContent';
import { AboutMe } from './components/AboutMe';

function App() {
  const iconsA = [
    <Javascript width={50} />,
    <Typescript width={50} />,
    <ReactLogo width={50} />,
    <DockerLogo width={150} />,
    <NodejsLogo width={80} />,
    <GolangLogo width={80} />,
    <CircleCILogo width={50} />,
    <Javascript width={50} />,
    <Typescript width={50} />,
    <ReactLogo width={50} />,
    <DockerLogo width={150} />,
    <NodejsLogo width={80} />,
    <GolangLogo width={80} />,
    <CircleCILogo width={50} />,
  ];

  const iconsB = [
    <NextJSLogo width={80} />,
    <AWSLogo width={70} />,
    <ApolloLogo width={120} />,
    <WebpackLogo width={60} />,
    <SassLogo width={60} />,
    <PostgresLogo width={50} />,
    <MongoDBLogo width={100} />,
    <NextJSLogo width={80} />,
    <AWSLogo width={70} />,
    <ApolloLogo width={120} />,
    <WebpackLogo width={60} />,
    <SassLogo width={60} />,
    <PostgresLogo width={50} />,
    <MongoDBLogo width={100} />,
  ];

  return (
    <Wrapper>
      <Left>
        <HeaderLeft>
          <div>
            <h3 style={{ fontSize: 36, fontFamily: 'Sacramento' }}>kokoaj</h3>
          </div>
        </HeaderLeft>
        <Main>
          <Header>hi there.</Header>
          <SubHeader>Try hovering below!</SubHeader>
          <div style={{ margin: '64px 0 48px 0' }}>
            <Slider icons={iconsA} timing={40} />
            <Slider icons={iconsB} timing={25} />
          </div>
          <AboutMe />
        </Main>
      </Left>
      <Right>
        <RightContent />
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  @media (min-width: 1028px) {
    width: calc(100% - 400px);
  }
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

const Right = styled.div`
  display: none;

  @media (min-width: 1028px) {
    display: block;
    width: 400px;
  }
`;

const Header = styled.h3`
  font-size: 48px;
  font-family: 'Walsheim-Bold';
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 728px) {
    font-size: 72px;
  }
`;

const SubHeader = styled.p`
  margin: 8px auto;
  font-size: 20px;
  font-family: 'Walsheim';
  width: 100%;
  max-width: 600px;
  color: gray;
  text-align: left;

  @media (min-width: 728px) {
    font-size: 32px;
    margin: 15px auto;
    text-align: center;
  }
`;

export default App;
