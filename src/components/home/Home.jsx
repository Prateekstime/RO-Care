import Repair from "../../assets/Repair.png";
import Maintenance from "../../assets/Maintenance.png";
import Servicing from "../../assets/Servicing.png";
import Uninstallation from "../../assets/Uninstallation.png";
import WaterQuality from "../../assets/WaterQualityTesting.png";
import SystemCheckup from "../../assets/SystemCheckup.png";
import Banner from "../home/Banner";
import ProductCard from "../home/ProductCard";
import ServiceCard from "./ServiceCard.jsx";
import QuickLinkCard from "./QuickLinkCard.jsx";
import CustomerReviewCard from "./CustomerReviewCard.jsx";
import BrandCarousel from "./BrandCorousel.jsx";
import EngineerCard from "./EngineerCard.jsx";
import ServiceSection from "./ServiceSection.jsx";
import ProductsSection from "./ProductsSection.jsx";
import CertifiedLogo from '../../assets/certifiedLogo.svg'
import CategoryCard from "../home/CategoryCard.jsx";
import tagLogo from "../../assets/TagLogo.svg"
import satisfactionLogo from "../../assets/satisfyCustomerLogo.svg"
import { FaPhoneAlt } from "react-icons/fa";


const Home = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center px-1"> 
      <Banner />
      <div className="w-full max-w-[1420px] h-auto ">
        <h2 className="text-sm sm:text-xl md:text-3xl font-semibold text-start p-5 text-gray-900">
          What are you looking for?
        </h2>

<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-10 px-2 sm:px-6 py-6 max-w-[1440px] mx-auto">
  {/* Card 1 */}
  <div className="flex sm:flex-col h-fit sm:h-auto items-center justify-center gap-2 rounded-2xl sm:rounded-full bg-gradient-to-r from-green-200 to-emerald-300 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
    <img
      src={Repair}
      alt="Repair"
      className="h-8 sm:h-14 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
    />
    <p className="text-xs sm:text-lg font-semibold text-green-900 text-center">
      Repair
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex sm:flex-col h-fit sm:h-auto items-center gap-2 rounded-2xl sm:rounded-full bg-gradient-to-r from-amber-200 to-orange-300 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
    <img
      src={Servicing}
      alt="Servicing"
      className="h-8 sm:h-14 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm sm:text-lg font-semibold text-amber-900 text-center">
      Servicing
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex sm:flex-col h-fit sm:h-auto items-center gap-2 rounded-2xl sm:rounded-full bg-gradient-to-r from-red-200 to-pink-300 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
    <img
      src={Uninstallation}
      alt="Installation/Uninstallation"
      className="h-8 sm:h-14 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm sm:text-lg font-semibold text-red-900 text-center">
      Installation / <br /> Uninstallation
    </p>
  </div>

  {/* Card 4 */}
  <div className="flex sm:flex-col h-fit sm:h-auto items-center gap-2 rounded-2xl sm:rounded-full bg-gradient-to-r from-purple-200 to-indigo-300 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
    <img
      src={Maintenance}
      alt="Maintenance"
      className="h-8 sm:h-14 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm sm:text-lg font-semibold text-purple-900 text-center">
      Maintenance
    </p>
  </div>

  {/* Card 5 */}
  <div className="flex sm:flex-col h-fit sm:h-auto items-center gap-2 rounded-2xl sm:rounded-full bg-gradient-to-r from-blue-200 to-cyan-300 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
    <img
      src={WaterQuality}
      alt="Water Quality Testing"
      className="h-8 sm:h-14 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm sm:text-lg font-semibold text-blue-900 text-center">
      Water Quality Testing
    </p>
  </div>

  {/* Card 6 */}
  <div className="flex sm:flex-col h-fit sm:h-auto items-center gap-2 rounded-2xl sm:rounded-full bg-gradient-to-r from-pink-200 to-rose-300 p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
    <img
      src={SystemCheckup}
      alt="System Checkup"
      className="h-8 sm:h-14 lg:h-20 object-contain transition-transform duration-300 hover:scale-110"
    />
    <p className="text-sm sm:text-lg font-semibold text-pink-900 text-center">
      System Checkup
    </p>
  </div>
</div>
      </div>
     
    <div className="w-full flex flex-col max-w-[1440px] rounded-2xl  justify-between items-center">
  <div className="w-full text-left">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold p-1 sm:p-5 whitespace-nowrap text-gray-900">
      Shop from <span className="text-blue-700 whitespace-nowrap">Top Categories</span>
    </h2>
  </div>
  <CategoryCard />
</div>

      <div className=" w-full max-w-[1440px]  bg-cyan-50 rounded-2xl p-3 flex justify-between items-center ">
        <ServiceSection />
      </div>
      <div className=" w-full max-w-[1440px]  rounded-2xl  flex justify-between items-center ">
        <ProductsSection />
      </div>
      <div className=" w-full max-w-[1440px] flex justify-between items-center ">
        <ProductCard />
      </div>

      {/* <div className="w-full max-w-[1440px] ">
        <EngineerCard />
      </div> */}
      <div className="w-full max-w-[1440px] ">
              <h2 className="text-3xl text-center  font-semibold  mb-2">
                Trusted By Top Brands
              </h2>
        <BrandCarousel />
         </div>

        <div className="w-full max-w-[1440px] flex flex-col justify-center ">
            <h1 className="text-sm sm:text-3xl font-semibold text-center pb-6">Why Choose Us</h1>
          <div className="flex flex-col sm:flex-row m-2 gap-2">
            <div className="shadow-lg border rounded-2xl p-4">
              <img src={CertifiedLogo} alt="" />
              <h1 className="font-medium pb-4 text-xl">Cartified Professionals</h1>
              <p>Our experts handle all services with precision and care.</p>
            </div>
           <div className="shadow-lg border rounded-2xl p-4">
              <img src={satisfactionLogo} alt="" className="object-cover" />
              <h1 className="font-medium pb-4 text-xl">Customer Satisfaction</h1>
              <p>Our priority is your satisfaction; we strive to exceed expectations.</p>
            </div>
              <div className="shadow-lg border rounded-2xl p-4">
              <img src={tagLogo} alt="" />
              <h1 className="font-medium pb-4 text-xl">Affordable Pricing</h1>
              <p>Get competitive rates without compromising on quality</p>
            </div>
             

          </div>
          <h2 className="text-3xl mt-6 font-semibold text-center mb-4 ">
            What Our Customers Say
          </h2>
          {/* <div className="w-[340px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-2 from-blue-700 via-blue-400 to-blue-700"></div> */}

          <p className="text-center mx-auto  text-gray-600 mb-10 max-w-[1440px] ">
            Don't just take our word for it. See what our satisfied customers
            have to say about RO Care India services.
          </p>
          <CustomerReviewCard />

      <div className="w-full py-10 px-6 flex justify-center items-center relative overflow-">
      <div className="max-w-5xl w-full bg-[#BCBBFF] rounded-xl shadow-md text-center text-gray-900 p-10 relative overflow-hidden">

        {/* Decorative background circles (BEHIND CONTENT) */}
        <div className="absolute inset-0 z-10">
          {/* Top Right Circle */}
          <div className="absolute top-[-100px] right-[50px] w-80 h-80 border border-[#94A6ED] rounded-full "></div>
          <div className="absolute top-[-84px] right-[64px] w-72 h-72 border border-[#94A6ED] rounded-full bg-[#C5C4FF]"></div>

          {/* Bottom Left Circle */}
          <div className="absolute bottom-[-180px] right-[200px] w-72 h-72 border border-[#94A6ED]  rounded-full "></div>
          <div className="absolute bottom-[-166px] right-[216px] w-64 h-64 border border-[#94A6ED] rounded-full bg-[#C5C4FF]"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">
          Get the AMC Plan and Save Money
        </h2>

        {/* Description */}
        <p className="text-gray-900 leading-relaxed mb-4 max-w-3xl mx-auto relative z-10">
          Our experts are ready to assist you 24/7. Call us now for personalized
          guidance and special offers on water purifier services.
        </p>
        <p className="text-gray-900 leading-relaxed max-w-3xl mx-auto mb-6 relative z-10">
          Whether you need emergency repairs, routine maintenance, or a brand new system,
          our certified professionals will recommend the perfect solution for your
          specific needs. Don’t guess — get expert advice that saves you time and money.
        </p>

        {/* Button */}
        <button className="mt-3 flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition relative z-10">
          <FaPhoneAlt /> Contact Us Now
        </button>
      </div>
    </div>
      <QuickLinkCard />

      <div className="relative w-full max-w-[1420px] justify-between items-center ">
        <h2 className="text-3xl font-semibold text-center p-5 text-blue-900">
          Our Most Booked Services
        </h2>
        <div className="w-[300px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-8 from-blue-700 via-blue-400 to-blue-700"></div>

        {/* Container for Cards */}
        <ServiceCard />
      </div>

      {/*Rewards & Gifts */}
    </div>
   </div>
  );
};

export default Home ;
 