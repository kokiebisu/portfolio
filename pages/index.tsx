import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import githubLogo from "../public/logo-github.png";
import linkedinLogo from "../public/logo-linkedin.png";

import { useEffect, useState } from "react";
import {
  AboutCard,
  BackgroundCard,
  ProjectsCard,
  Category,
} from "../components";

export default function Home() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setPhase(phase === 2 ? 0 : phase + 1);
    }, 10000);

    return () => {
      clearTimeout(timer1);
    };
  }, [phase]);

  return (
    <div className="h-screen w-screen grid grid-rows-layout">
      <Head>
        <title>Ken&apos;s portfolio</title>
        <meta name="description" content="Ken's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center px-3">
        <div className="font-bold">献一　沖胡</div>
        <div className=""></div>
      </header>
      <main className="lg:flex grid grid-rows-mobile lg:grid-rows-content ">
        <div className="max-w-[500px] w-full pl-3">
          <div className="py-2">
            <h3 className="font-bold text-xl">ケン　オキエビス</h3>
          </div>
          <h3 className="font-bold text-4xl">Ken Okiebisu</h3>
          <div className="py-8">
            <h4 className="font-bold text-lg">
              Software Engineer. Based in Vancouver, Canada
            </h4>
          </div>
        </div>
        {phase === 0 ? (
          <div className="w-full bg-purple-400 lg:pt-12 lg:p-0 border-t-4 lg:border-l-4 border-black">
            <AboutCard />
          </div>
        ) : null}
        {phase === 1 ? (
          <div className="w-full bg-purple-400 lg:pt-12 lg:p-0 border-t-4 lg:border-l-4 border-black">
            <ProjectsCard />
          </div>
        ) : null}
        {phase === 2 ? (
          <div className="w-full bg-purple-400 lg:pt-12 lg:p-0 border-t-4 lg:border-l-4 border-black">
            <BackgroundCard />
          </div>
        ) : null}
      </main>
      <footer className="bg-yellow-400 border-t-4 border-black">
        <div className="flex justify-center items-center py-7">
          <div className="mx-2">
            <Link href="https://github.com/kokiebisu">
              <Image
                src={githubLogo}
                width={25}
                height={25}
                alt="Github Icon"
              />
            </Link>
          </div>
          <div className="mx-2">
            <Link href="https://github.com/kokiebisu">
              <Image
                src={linkedinLogo}
                width={25}
                height={25}
                alt="LinkedIn Icon"
              />
            </Link>
          </div>
        </div>
        <div className="px-3 flex justify-between items-center">
          <div>
            <button
              onClick={() => {
                setPhase(0);
              }}
              className="mx-3 inline-block relative"
            >
              <Category shouldRun={phase === 0} name="about" />
            </button>
            <button
              onClick={() => {
                setPhase(1);
              }}
              className="mx-3 inline-block relative"
            >
              <Category shouldRun={phase === 1} name="projects" />
            </button>
            <button
              onClick={() => {
                setPhase(2);
              }}
              className="mx-3 inline-block relative"
            >
              <Category shouldRun={phase === 2} name="background" />
            </button>
          </div>
          <div className="mx-3 font-bold">ver.2022_canary</div>
        </div>
      </footer>
    </div>
  );
}
