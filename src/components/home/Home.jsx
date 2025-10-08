import Repair from "../../assets/Repair.png";
import Maintenance from "../../assets/Maintenance.png";
import Servicing from "../../assets/Servicing.png";
import Uninstallation from "../../assets/Uninstallation.png";
import WaterQuality from "../../assets/WaterQualityTesting.png";
import SystemCheckup from "../../assets/SystemCheckup.png";
import Banner from "../home/Banner";
import ProductCard from "../home/ProductCard";
import ServiceCard from "./ServiceCard.jsx";
import CategoryCard from "./CategoryCard.jsx";
import QuickLinkCard from "./QuickLinkCard.jsx";
import CustomerReviewCard from "./CustomerReviewCard.jsx";
import BrandCarousel from "./BrandCorousel.jsx";
import EngineerCard from "./EngineerCard.jsx";
import ServiceSection from "./ServiceSection.jsx";
import ProductsSection from "./ProductsSection.jsx";

const Home = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center px-1">
   
      <Banner />
       <div className=" w-full max-w-[1440px]  bg-cyan-50 rounded-2xl p-3 flex justify-between items-center ">
        <ServiceSection />
      </div>
      <div className=" w-full max-w-[1440px]  rounded-2xl p-3 flex justify-between items-center ">
        <ProductsSection />
      </div>
      <div className=" w-full max-w-[1440px] flex justify-between items-center ">
        <ProductCard />
      </div>

      <div className="w-full max-w-[1420px] h-auto px-4">
        <h2 className="text-3xl font-semibold text-center p-5 text-blue-900">
          What are you looking for?
        </h2>
         <div className="w-[360px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-8 from-blue-700 via-blue-400 to-blue-700"></div>


        <div className="grid grid-cols-6 gap-4 mb-10 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 h-auto px-[40px] py-[20px] rounded-lg shadow-md">
  {/* Card 1 */}
  <div className="flex flex-col items-center justify-between  p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28 flex items-center justify-center mb-2  rounded-full bg-gradient-to-r from-green-200 to-emerald-300">
      <img
        src={Repair}
        alt="Repair"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-green-900 text-center">
      Repair
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center justify-between p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2  rounded-full bg-gradient-to-r from-amber-200 to-orange-300 ">
      <img
        src={Servicing}
        alt="Servicing"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-amber-900 text-center">
      Servicing
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center justify-between p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2  rounded-full  bg-gradient-to-r from-red-200 to-pink-300">
      <img
        src={Uninstallation}
        alt="Installation/Uninstallation"
        className="h-12  object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-red-900 text-center">
      Installation / <br /> Uninstallation
    </p>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center justify-betweenrounded-[20px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2  bg-gradient-to-r from-purple-200 to-indigo-300  rounded-full">
      <img
        src={Maintenance}
        alt="Maintenance"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-purple-900 text-center">
      Maintenance
    </p>
  </div>

  {/* Card 5 */}
  <div className="flex flex-col items-center justify-betweenp-6 p-6  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28  flex items-center justify-center mb-2 bg-gradient-to-r from-blue-200 to-cyan-300 rounded-full">
      <img
        src={WaterQuality}
        alt="Water Quality Testing"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-blue-900 text-center">
      Water Quality Testing
    </p>
  </div>

  {/* Card 6 */}
  <div className="flex flex-col items-center justify-betweenrounded-[40px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 overflow-hidden">
    <div className="w-28 h-28 flex items-center justify-center mb-4  bg-gradient-to-r from-pink-200 to-rose-300 rounded-full ">
      <img
        src={SystemCheckup}
        alt="System Checkup"
        className="h-14 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    <p className="text-lg font-semibold text-pink-900 text-center">
      System Checkup
    </p>
  </div>
</div>

      </div>


      {/*   Services by product category */}
      {/* <div className="relative w-full max-w-[1420px] "> */}
        {/* Left Arrow Button */}
{/*        
        <h2 className="text-3xl font-semibold text-center p-5 text-blue-900">
          Services by Product Category
        </h2> */}
         {/* <div className="w-[360px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-8 from-blue-700 via-blue-400 to-blue-700"></div> */}

       {/* <div className=" w-full max-w-[1440px] ">
        <CategoryCard />
       </div> */}
      {/* </div> */}

      <div className="w-full max-w-[1440px] ">
        <EngineerCard />
      </div>
      <div className="w-full max-w-[1440px] ">
      <BrandCarousel />

      <div>
            <h2 className="text-3xl font-semibold text-center mb-4 text-blue-800">
        What Our Customers Say
      </h2>
       <div className="w-[340px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-2 from-blue-700 via-blue-400 to-blue-700"></div>

      <p className="text-center mx-auto  text-blue-500 mb-10 max-w-2xl ">
        Don't just take our word for it. See what our satisfied customers have
        to say about RO Care India services.
      </p>
      <CustomerReviewCard />
         <div className="mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-xl border border-gray-200">
        {/* Left Side - Mobile Image Section */}
        <div className="flex items-center justify-center  overflow-hidden bg-gradient-to-r from-blue-600   to-blue-800 text-white md:w-1/2">
          {/* Decorative Circles */}
          <div className="bg-blue-500 h-40 w-40 rounded-full relative -top-52 -left-20 opacity-20"></div>

          <div className="">
            <div
              className="bg-blue-700  
           rounded-2xl shadow-xl"
            >
              <img
                src={RoMobile}
                alt="Mobile image"
                className=" md:w-[400px]   h-auto "
              />
            </div>
          </div>
          <div className="bg-blue-500 h-40 w-40 rounded-full relative -bottom-56 left-20 opacity-20"></div>
        </div>
        {/* Right Side - Text Section */}
        <div className="flex flex-col justify-center md:w-1/2 p-6 md:p-8 text-center md:text-center bg-slate-200">
          {/* App Description Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              The #1 Water Purifier Service App
            </h3>
            <p className="text-gray-600 text-lg md:text-sm leading-relaxed">
              RO Care India mobile app gives you peace of mind at your
              fingertips. Managing your water purifier has never been easier -
              from instant bookings to live tracking, everything is just one tap
              away. Download our app and experience hassle-free water purifier
              services.
            </p>
          </div>

          <div className="mt-6 bg-gray-100 rounded-xl p-6 text-center flex justify-center ">
            <div className="w-40">
              <img src={googlePlay} alt="google play" />
            </div>
            <div className="mx-4 h-14 bg-slate-500 w-[1px] rounded-lg"></div>
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white w-40 h-12 rounded-lg font-semibold text-lg md:text-xl transition-colors duration-200 shadow-md hover:shadow-lg">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default Home;
