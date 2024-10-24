import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Application Developer/Consultant",
    duration: "8 month (Feb 2023 - Oct 2023)",
    details: [
      "Got my first professional job at Ernst & Young Global Delivery Service (CS) Philippines.",
      "Oracle Utilities C2M Bootcamp, configured the C2M environment using Spring Boot framework.",
      "Completed the Guidewire Fundamentals Bootcamp",
      "Got certifications for Guidewire including Guidewire Insurance Suite Developer Specialist, Guidewire Insurance Suite PolicyCenter Developer, Guidewire Insurance Suite ClaimCenter Developer, Guidewire Insurance Suite Digital Developer, Guidewire Insurance Suite BillingCenter Developer.",
    ],
  },
  {
    year: 2022,
    title: "Graduated",
    duration: "August 2022",
    details: [
      "Got my Bachelor's of Technology major in Computer Engineering Technology.",
    ],
  },
  {
    year: 2022,
    title: "Intern",
    duration: "720 Hours (April 2022 - August 2022)",
    details: [
      "Rendered 720 hours of internship as a Web Developer in PNP-ITMS.",
      "Rendered 720 hours of internship as a Web Developer in PNP-ITMS.",
      "Implemented a web application using PHP, HTML, CSS, JavaScript, Bootstrap, and Laravel Framework on the project: Human Rights Recording, Analysis, Information System, and Enforcement (HuRaise).",
      "Experienced debugging, testing, and error handling. Implemented the Create, Read, Update and Delete (CRUD) method.",
    ],
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto mdLpl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-cyan-900">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
