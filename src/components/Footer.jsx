import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sx md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Cipta</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl ">
          <a href="https://github.com/Ciptaaaa">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/eka_cipta1">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/diazekacipta">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="text-gray-400">@2025 Diaz Eka Cipta</p>
    </div>
  );
};

export default Footer;
