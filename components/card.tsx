import Link from "next/link";

interface CardProps {
  name: string;
  children: React.ReactNode;
}

const CardTemplate = ({ name, children }: CardProps) => {
  return (
    <div className="h-full w-full grid grid-rows-card">
      {children}
      <div className="flex justify-end">
        <h3 className="font-bold text-4xl">{name.toUpperCase()}</h3>
      </div>
    </div>
  );
};

export const AboutCard = () => (
  <CardTemplate name="about">
    <div className="w-full h-full">
      <h3 className="text-white text-4xl">
        I'm from Japan and I usually code or watch movies during my free time!
        My favorite movies are Forrest Gump, Goodfellas and so on...
      </h3>
    </div>
  </CardTemplate>
);

export const ProjectsCard = () => (
  <CardTemplate name="projects">
    <div className="text-white text-4xl">
      A cool project I recently worked on is an app similar to airbnb but for
      renting storage. It uses React, Go, Terraform. Check it out{" "}
      <Link href="https://github.com/kokiebisu/rental-storage">
        <span>here</span>
      </Link>
      !
    </div>
  </CardTemplate>
);

export const BackgroundCard = () => (
  <CardTemplate name="background">
    <div className="text-white text-4xl">background</div>
  </CardTemplate>
);
