import React from "react";
import DownloadResume from "../assets/GDSantiago_CV.pdf";

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-teal-800">Resume</h1>
      <h2 className="text-2xl font-bold text-teal-700">Profile</h2>
      <p className="text-justify py-2 mb-6">
        Experienced application developer with a strong command of Spring Boot,
        Guidewire InsuranceSuite, and Laravel frameworks. Currently focusing on
        web full stack development. Proficient in React.js, Tailwind CSS,
        Express.js. Eager to apply my skills as my current situation,
        characterized by an overabundance of upskilling and a lack of project
        opportunities, has fueled my desire to make an immediate impact in a
        dynamic role.
      </p>
      <a
        className=" border-teal-900 rounded-md border-2 p-2 font-semibold hover:bg-teal-700 hover:text-white"
        href={DownloadResume}
      >
        Click to download my CV
      </a>
    </div>
  );
};

export default Resume;
