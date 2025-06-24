import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2 .png";
import Reveal from "./Reveal";

const Portofolio = () => {
  const projects = [
    {
      img: project1,
      tittle: "TakiPedia",
      description:
        "E-Commerce Website with react and tailwind CSS (Front-End) and ExpressJS, MongoDB, and Midtrans for Payment Gateway (Back-end)",
      links: {
        site: "https://under-construction-web.vercel.app",
        github: "https://github.com/Ciptaaaa/takipedia",
      },
    },
    {
      img: project2,
      tittle: "Video Belajar",
      description:
        "Video Belajar Website With React, Tailwind CSS, Zustand, Redux and Mock API (Front-End) ",
      links: {
        site: "https://videobelajar-cipta.vercel.app",
        github: "https://github.com/Ciptaaaa/VideoBelajar",
      },
    },
  ];
  return (
    <div className=" max-w-[1000px] mx-auto p-6 md:my-20 " id="portofolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portofolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.tittle}
                className=" w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 ">
                {project.tittle}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4 ">
                <a
                  href={project.links.site}
                  className="px-2 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-2 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portofolio;
