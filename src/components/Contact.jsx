import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
export const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div className="">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                A Bachelor of Informatics Engineering graduate with hands-on
                experience in full-stack development using HTML, CSS,
                JavaScript, and React.js. Currently working as a front-end web
                developer while attending a front-end web developer bootcamp to
                deepen technical expertise. Building scalable web applications
                and delivering seamless user experiences through well-crafted,
                responsive designs are passions of mine. A detail-oriented and
                growth-driven professional eager to secure a full-time role as a
                front-end web developer.
              </p>
            </div>
            <div className="flex mt-10 items-center gap-7">
              <div className=" bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md: text-4xl text-2xl  font-semibold text-white">
                  5<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>projects</span>
                </p>
              </div>
              <div className=" bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md: text-4xl text-2xl  font-semibold text-white">
                  1<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/bolorvza"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className=" text-gray-100 font-bold text-xl mb-2">
              {" "}
              Let's Connect!
            </p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="place your name... "
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="Email"
              name="email"
              id="email"
              placeholder="place your E-mail... "
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              row="4"
              placeholder="Your message... "
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};
