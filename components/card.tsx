import Link from "next/link";
import { GolangIcon, ReactIcon, TerraformIcon } from "./icons";

interface CardProps {
  name: string;
  children: React.ReactNode;
  icons?: React.ReactNode;
}

const CardTemplate = ({ name, children, icons }: CardProps) => {
  return (
    <div className="h-full w-full grid grid-rows-card">
      {children}
      <div
        className={`flex ${
          name !== "projects" ? "justify-between" : "justify-center"
        } p-12 bg-black text-white`}
      >
        <div className="flex items-center">{icons}</div>
        {name !== "projects" ? (
          <h3 className="font-bold text-6xl">{name.toLowerCase()}</h3>
        ) : null}
      </div>
    </div>
  );
};

export const AboutCard = () => (
  <CardTemplate name="about">
    <div className="px-12 py-12 lg:py-0">
      <h3 className="text-white text-3xl">
        I&apos;m from Japan and I usually code or watch 90s movies during my
        free time! My favorite movies are Forrest Gump, Goodfellas and so on...
        I'm a pizza lover eating almost every week 🍕
      </h3>
    </div>
  </CardTemplate>
);

const projectIcons = [
  <ReactIcon width={45} height={45} />,
  <GolangIcon width={75} height={75} />,
  <div className="relative bottom-0.5">
    <TerraformIcon width={50} height={50} />
  </div>,
];

export const ProjectsCard = () => (
  <CardTemplate
    name="projects"
    icons={projectIcons.map((icon) => (
      <div className="mx-8">{icon}</div>
    ))}
  >
    <div className="px-12 py-12 lg:py-0">
      <p className="text-white text-3xl">
        A cool project I recently worked on is an app similar to airbnb but for
        renting storage. It uses React, Go, Terraform. Check it out{" "}
        <Link href="https://github.com/kokiebisu/rental-storage">
          <span>here</span>
        </Link>
        !
      </p>
    </div>
  </CardTemplate>
);

export const BackgroundCard = () => (
  <CardTemplate name="background">
    <div className="px-12 py-12 lg:py-0">
      <p className="text-white text-3xl">
        2020
        <span className="block">
          Graduated from BCIT (British Columbia Institute of Technology)
        </span>
      </p>
    </div>
  </CardTemplate>
);
