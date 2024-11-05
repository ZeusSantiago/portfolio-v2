import React from "react";
import ProjectsItem from "./ProjectsItem";
import fortune from "../assets/fortune-codies.png";
import shopsuey from "../assets/shop-suey.png";
import stictactoe from "../assets/stictactoe.png";
import portv1 from "../assets/soming-soon.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-teal-800">Projects</h1>
      <p className="text-center py-8 font-bold">
        Here are the projects that I made and Collaborated with.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem
          img={shopsuey}
          title="Shop-Suey"
          link={"https://shop-suey.vercel.app/"}
          details={"More Info"}
          stacks={["react", "vite", "tailwind"]}
        />
        <ProjectsItem
          img={fortune}
          title="Fortune-Codies"
          link={"https://fortune-codies.vercel.app/"}
          details={"More Info"}
          stacks={["react", "vite", "tailwind"]}
        />
        <ProjectsItem
          img={stictactoe}
          title="Super Tic-Tac-Toe"
          link={"https://s-tic-tac-toe.vercel.app/"}
          details={"More Info"}
          stacks={["react", "vite", "tailwind"]}
        />
        <ProjectsItem
          img={portv1}
          title="Blog Website"
          details={"Coming Soon"}
          stacks={["node", "express", "monggo"]}
        />
      </div>
    </div>
  );
};

export default Projects;
