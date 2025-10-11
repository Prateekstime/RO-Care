import { Link, NavLink } from "react-router-dom";
import InstagramIcon from "../../assets/Instagram.png";
import FaceBookIcon from "../../assets/Facebook.png";
import LinkedinIcon from "../../assets/Linkedin.png";
import AppStoreIcon from "../../assets/appstore.png";
import logo from "../../assets/logo.png";
import GooglePlayIcon from "../../assets/googleplay.png";
import X from "../../assets/x.png";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden bg-[#1D283A] text-gray-200">
      {/* Waves */}
      {/* <div className="waveContainer absolute w-full z-10 -top-12 h-[800px] overflow-hidden bg-gradient-to-b from-blue-800 via-blue-600 to-cyan-600">
        <Wave
          className="wave absolute top-0"
          fill="#1e3a8a"
          paused={false}
          options={{ height: 60, amplitude: 80, speed: 0.15, points: 4 }}
        />
        <Wave
          className="wave absolute top-0"
          fill="#1e40af"
          paused={false}
          options={{ height: 90, amplitude: 65, speed: 0.13, points: 5 }}
        />
        <Wave
          className="wave absolute top-0"
          fill="#115dd1"
          paused={false}
          options={{ height: 120, amplitude: 50, speed: 0.15, points: 6 }}
        />
      </div> */}

      {/* Footer Content */}
      <div className="footerContent relative z-10 pt-6 w-11/12 mx-auto">
        {/* Logo */}
        <div className="footer-log">
          <NavLink to="/" className="footer-brand flex items-center gap-2">
            <img src={logo} alt="Techno RO" className="footer-logo w-30 h-14 m-4" />
          </NavLink>
        </div>

        {/* Main Sections */}
        <div className="footer-container grid grid-cols-1 md:grid-cols-4 gap-10 mt-6">
          {/* Company Description */}
          <div className="footer-section">
            <p className="text-xs leading-relaxed">
              RO Care India is one of the trusted & independent water purifier service providers in India.
              We offer a complete solution such as RO installation, RO repair, maintenance and AMC services 
              for domestic, commercial & industrial water purifiers. We deal in all brands at a relatively 
              low price. RO Care India is a unit of 3D Logic Pvt. Ltd.
            </p>
            {/* Social Icons */}
           
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3 className="font-bold text-xl mb-2">Categories</h3>
            <ul className="space-y-0 text-sm">
              <li>RO Plant</li>
              <li>Water Softener</li>
              <li>Water Dispenser</li>
              <li>Water ATM</li>
              <li>Water Ionizer</li>
              <li>Water Cooler</li>
              <li>Spare Parts</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-section">
            <h3 className="font-bold text-xl mb-2">Useful Links</h3>
            <ul className="space-y-0  text-sm">
              <li>RO Service</li>
              <li>Buy Water Purifier</li>
              <li>Water Purifier Installation</li>
              <li>Water Purifier AMC</li>
              <li>RO Customer Care</li>
              <li>Contact</li>
              <li>Store Locator</li>
              <li>Careers</li>
              <li>Franchise</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3 className="font-bold text-xl mb-2">Contact Us</h3>
            <ul className="space-y-1 text-sm">
              <li>📍 Unit No. 831, 8th Floor, JMD Megapolis, Gurgaon, Haryana 122018</li>

              <li>📞 ‪+91-9268887770‬</li>
              <li>📞 ‪+91-9311587744‬</li>
              <li>🌐 rocareindia.com</li>
              <li>✉ info@rocareindia.com</li>

              <li>📞 +91-9268887770</li>
              <li>📞 +91-9311587744</li>
              <li>🌐 rocareindia.com</li>
              <li>✉️ info@rocareindia.com</li>

            </ul>
             {/* Social Links */}
          <div className="mt-4 ">
          
            <ul className="footer-social-links flex gap-3 mb-4">
              <li>
                <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                  <img src={X} alt="X" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src={FaceBookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
              </li>
            </ul>

            <div className="footer-app-links flex gap-4">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={AppStoreIcon} alt="App Store" className="w-24 h-auto" />
              </a>
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={GooglePlayIcon} alt="Google Play" className="w-24 h-auto" />
              </a>
            </div>
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-5/6 mx-auto h-[2px] bg-gray-500 rounded-full mt-6"></div>

        {/* Bottom Note */}
        <div className="mx-auto mt-2 mb-8 text-sm text-gray-200 text-center w-5/6">
          <p>
            &copy; Copyright Techno RO. All rights reserved. | CIN: UID2584937HDR20250101
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;