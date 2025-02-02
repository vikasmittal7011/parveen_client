import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-5 md:py-10 md:px-20">
      <div className="p-4 mx-auto text-white tracking-wider flex md:justify-between flex-col md:flex-row gap-3">
        <span className="text-2xl md:text-3xl font-bold w-1/4">Vikey</span>
        <div className="flex flex-wrap gap-5 justify-between w-3/4">
          <span className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <p>
              <Link to="/">My Course's</Link>
            </p>
            <p>
              <Link to="/">About Us</Link>
            </p>
          </span>
          <span className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="flex gap-2 items-center">
              <SlEnvolope /> xyz@gmail.com
            </p>
            <p className="flex gap-2 items-center">
              <IoIosCall /> +91 7011641548
            </p>
            <p className="flex gap-2 items-center">
              <CiLocationOn /> Delhi
            </p>
          </span>
          <span className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <p className="flex gap-2 items-center">
              <FaFacebook /> FaceBook
            </p>
            <p className="flex gap-2 items-center">
              <FaTwitter /> Twitter
            </p>
            <p className="flex gap-2 items-center">
              <FaInstagram /> Instagram
            </p>
            <p className="flex gap-2 items-center">
              <FaLinkedin /> Linkedin
            </p>
          </span>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400 my-4" />
      <div className="font-semibold space-x-2 flex justify-center items-center tracking-wider">
        <p className="text-center text-white my-2">
          &copy; 2021 Vikey. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
