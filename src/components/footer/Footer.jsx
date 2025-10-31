import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import FacebookIcon from "../../assets/Facebook.png";
import InstagramIcon from "../../assets/Instagram.png";
import LinkedinIcon from "../../assets/Linkedin.png";
import X from "../../assets/X.png";
import GooglePlayIcon from "../../assets/googleplay.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D283A] text-gray-300"> 
      <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Column 1 - Logo & About */}
        <div className="col-span-1 ">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Techno RO" className="h-10" />
          
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted partner Techno RO Care <br />
            for pure water solution. Professional RO service, repair, and
            maintenance across major cities.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            <a href="#" target="_blank">
              <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank">
              <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank">
              <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank">
              <img src={X} alt="X" className="w-5 h-5" />
            </a>
            <a href="#" target="_blank">
              <img src={GooglePlayIcon} alt="YouTube" className="w-auto h-5" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="w-full grid grid-cols-2  col-span-2">

        <div className="sm:mx-auto ">
          <h4 className="text-white font-semibold text-lg mb-3 sm:mb-6">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/amc">AMC Plans</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 className="text-white font-semibold text-lg  mb-3 sm:mb-6">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 9823208362</li>
            <li>✉️ info@talentricetechnokrate.com</li>
            <li>
              📍 4th floor,Prince Complex, Chatrapati Nagar, Nagpur, Maharastra, 440015
            </li>
          </ul>
        </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 w-11/12 mx-auto mt-6"></div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm py-4">
        © Copyright 2025 Techno RO. All rights reserved. | CIN: UID2584937HDR20250101
      </div>
    </footer>
  );
};

export default Footer;
