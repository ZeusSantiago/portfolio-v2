import React from "react";
import temp from "../assets/temp.jpg";
import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-teal-800">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque
        repudiandae magni quos. Harum dolor, voluptatibus veritatis molestiae
        praesentium unde?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={temp} title="Sample App" />
        <ProjectsItem img={temp} title="Sample App" />
        <ProjectsItem img={temp} title="Sample App" />
        <ProjectsItem img={temp} title="Sample App" />
      </div>
    </div>
  );
};

export default Projects;
