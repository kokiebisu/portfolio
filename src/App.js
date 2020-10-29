import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
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
import { motion } from 'framer-motion';

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
  const [state, setState] = useState('hi there.');
  const [number, setNumber] = useState('zero');
  let string = state.split(/(\s+)/);

  useEffect(() => {
    string = state.split(/(\s+)/);
  }, [state]);

  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.1 } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      // y: 20,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      // y: 0,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 200,
      },
    },
  };

  return (
    <Wrapper>
      <Left>
        <HeaderLeft>
          <div>
            <h3 style={{ fontSize: 36, fontFamily: 'Sacramento' }}>kokoaj</h3>
          </div>
        </HeaderLeft>
        <Main>
          <div style={{ height: 190 }}>
            <motion.div>
              <Header
                variants={containerVariants}
                initial={'before'}
                animate={'after'}>
                {string.map((word, index) => {
                  return (
                    <motion.h1
                      className={number}
                      style={{
                        display: 'inline-block',
                        fontSize: '100%',
                        letterSpacing: 0.001,
                      }}
                      // width={'auto'}
                      key={index}
                      variants={letterVariants}>
                      {/* {letter === ' ' ? '\u00A0' : letter} */}

                      {word === ' ' ? '\u00A0' : word}
                    </motion.h1>
                  );
                })}
              </Header>
            </motion.div>
            <SubHeader>Try clicking below!</SubHeader>
          </div>
          <div style={{ margin: '72px 0 48px 0' }}>
            <Slider icons={iconsA} timing={40} />
            <Slider icons={iconsB} timing={25} />
          </div>
          <AboutMe state={state} setState={setState} setNumber={setNumber} />
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
  @media (min-width: 1200px) {
    width: calc(100% - 400px);
  }
`;

const HeaderLeft = styled.div`
  width: 100%;
  padding: 20px;
`;

const Main = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const Right = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    width: 400px;
  }
`;

const Header = styled(motion.div)`
  padding: 0 35px;
  width: 100%;
  font-family: 'AirbnbCereal-ExtraBold';
  font-size: 48px;
  letter-spacing: 0.7px;

  line-height: 1.1;

  @media (min-width: 728px) {
    padding: 0;
    font-size: 56px;
    max-width: 600px;
    margin: 0 auto;

    line-height: 1.2;
  }
`;

const SubHeader = styled.p`
  margin: 8px auto;
  font-size: 20px;
  font-family: 'Walsheim';
  width: 100%;
  padding: 0 35px;
  color: gray;

  @media (min-width: 728px) {
    padding: 0;
    font-size: 32px;
    margin: 15px auto;

    max-width: 600px;
  }
`;

const Overlay = styled.div`
  background: white;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default App;
