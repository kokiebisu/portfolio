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
import { Right } from './components/Right';
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

const Animation = styled.div`
  width: 100%;
  height: 250px;
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
  color: gray;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export default App;
