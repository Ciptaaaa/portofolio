import certificate1 from "../assets/certificate-1.png";
import certificate2 from "../assets/certificate-2.png";
import certificate3 from "../assets/certificate-3.png";
const Certificate = () => {
  const certificates = [
    {
      img: certificate1,
      title: "Certificate1",
      description: "Certificate Cisco CCNAv7 Networking Fundamentals",
      links: {
        site: "https://drive.google.com/file/d/10U0UV84ywqYBAyo0HPbUqYNnDViQsREA/view?usp=sharing",
      },
    },
    {
      img: certificate2,
      title: "Certificate2",
      description: "Certificate Full Stack Web Developer",
      links: {
        site: "https://drive.google.com/file/d/1eM_eMTWGNUyDqJWiiQIISISmkfN75rZE/view?usp=sharing",
      },
    },
    {
      img: certificate3,
      title: "Certificate3",
      description: "Certificate Program RiseUP+ ",
      links: {
        site: "https://drive.google.com/file/d/1oI1S567zoNVerJX_GCueJbADe0i0I3V8/view?usp=sharing",
      },
    },
  ];
  return (
    <div className=" max-w-[1000px] mx-auto p-6 md:my-20 " id="certificate">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Certificate</h2>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={certificate.img}
              alt={certificate.title}
              className=" w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4 ">
              {certificate.tittle}
            </h3>
            <p className="text-gray-300 mb-4">{certificate.description}</p>
            <div className="flex space-x-4 ">
              <a
                href={certificate.links.site}
                className="px-2 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
