import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import RoMobile from "../../assets/rocareMobile.webp";
import googlePlay from "../../assets/googleplay.png";

const testimonials = [
  {
    id: 1,
    name: "Neha Singh",
    location: "Pune",
    review:
      "Fantastic RO service experience! My Pureit stopped working suddenly. Their technician came same day, identified the problem quickly, and fixed it professionally. Clean drinking water restored for my family. Trustworthy service provider I'll definitely call again.",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  },
  {
    id: 2,
    name: "Vikash Verma",
    location: "Gurgaon",
    review:
      "Excellent AMC plan benefits! Regular maintenance visits keep my RO running smoothly. Technicians are trained and use quality parts. Annual contract saves money and ensures continuous pure water supply. Smart investment for long-term water purifier care.",
    rating: 4,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    id: 3,
    name: "Kavita Jain",
    location: "Noida",
    review:
      "Best AMC plan decision ever! Monthly maintenance visits prevent major breakdowns. Professional service team handles everything from filter changes to deep cleaning. My family always has safe drinking water. Affordable annual maintenance contract with great value.",
    rating: 4,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    location: "Delhi",
    review:
      "Outstanding service! My Aquaguard was making strange noises. The technician arrived on time, diagnosed the issue perfectly, and replaced the necessary parts. Water tastes fresh again. Highly recommended for all RO repair needs!",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140045.png",
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Mumbai",
    review:
      "Great emergency service! When our RO leaked overnight, they sent a technician first thing in the morning. Quick fix with genuine parts. The team is professional and prices are transparent. Will continue with their AMC plan.",
    rating: 4,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    id: 6,
    name: "Amit Patel",
    location: "Bangalore",
    review:
      "Reliable and efficient! Our Kent RO needed urgent repair. The service was prompt and the technician was knowledgeable. Fixed the issue in no time. Great customer support and follow-up. Very satisfied!",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140039.png",
  },
  {
    id: 7,
    name: "Sonia Reddy",
    location: "Hyderabad",
    review:
      "Professional team with excellent skills! My Livpure RO was not purifying water properly. They did complete servicing and replaced filters. Water quality improved significantly. Good value for money service.",
    rating: 4,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
  },
  {
    id: 8,
    name: "Rajesh Kumar",
    location: "Chennai",
    review:
      "Timely and efficient service! Our Blue Star RO had electrical issues. Technician came with all necessary tools and parts. Completed the repair quickly. Very polite and explained everything clearly. Great work!",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140044.png",
  },
];

const CustomerReviewCard = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-4">
  

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={800}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-12"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white my-2 rounded-xl shadow-lg p-6 flex flex-col justify-between w-full border border-gray-100 hover:shadow-xl transition-all duration-300">
               <div>
                  <h5 className="font-bold text-gray-800">{item.name}</h5>
                  <p className="text-sm text-gray-600">{item.location}</p>
                </div>
                 <div className="flex items-center gap-3 mt-auto  border-t border-gray-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-100"
                />
               
              </div>
              <div className="mb-2">
                <div className="text-yellow-500 text-lg mb-3">
                  {"★".repeat(item.rating)}
                  <span className="text-gray-300">
                    {"☆".repeat(5 - item.rating)}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.review}
                </p>
              </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
   
    </div>
  );
};

export default CustomerReviewCard;
