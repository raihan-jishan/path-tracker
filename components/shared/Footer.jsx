import { Facebook, Github, Linkedin, Radar, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-5   rounded-2xl shadow   bg-gray-200/50 border-2 border-black m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Radar />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              PathTracker
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-[1.2rem] font-medium text-gray-950 sm:mb-0  ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-between max-lg:flex-col">
          <span
            className="block text-xl text-gray-900  max-lg:text-lg p-2
        "
          >
            {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              PathTracker
            </a>
            . All Rights Reserved.
          </span>
          {/* social icons */}
          <div className="flex gap-8 rounded-full cursor-pointer max-lg:mt-1 max-lg:justify-between max-lg:items-center max-lg:flex">
            <Facebook />
            <Twitter />
            <Github />
            <Linkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
