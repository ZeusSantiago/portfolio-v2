import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdMail } from "react-icons/md";

function Home() {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1490481920145-fc78891bbb99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Backgrounud Image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Grazeus Santiago
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "Code with precision, deploy with care.",
                1000,
                "Turning ideas into digital reality.",
                1000,
                "Making the web a cooler place.",
                1000,
                "I am a person who likes to explore.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex gap-3 pt-6 max-w-[200px] w-full">
            <a href="https://linkedin.com/in/grazeus-santiago">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/ZeusSantiago">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="mailto:zeussantiago9@gmail.com">
              <MdMail className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
