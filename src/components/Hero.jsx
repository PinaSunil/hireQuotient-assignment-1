import heroImg from "../assets/images/hero-img.webp"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-center w-full h-full bg-gradient-to-t from-white to-[#FDF2EC]">
      
      <p className="mt-[100px] py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md"> <span className="text-[18px]">👋</span>  WELCOME TO MANAGE WISE!</p>
      <h1 className="mx-auto max-w-[75%] pb-7 text-[5.2rem] font-medium font-outfit leading-none "> 
        Empower your business with <span className="text-[#fe8162]"> Strategic </span> insights
      </h1>
      <p className="w-[50%] mx-auto text-[#767575] text-[1.25rem] font-inter font-medium ">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </p>
      <div className="flex justify-center items-center py-8 gap-4">
        <button className=" transition ease-in-out delay-150 flex  justify-center items-center gap-1  group py-4 px-8 bg-[#8247ff] text-[1.25rem] text-white font-inter font-normal rounded-2xl border-[10px] border-[#fdf2ec] relative hover:border-[#cbb4fd] "><span className="pr-5 ">Get Started</span>  <FaArrowAltCircleRight className="transition ease-linear delay-150 absolute right-7 invisible group-hover:visible "/> </button>
        <button className=" transition ease-in-out delay-150 flex  justify-center items-center gap-1 py-4 px-8 bg-white text-[1.25rem] text-[#1c1c1c]  font-inter font-normal rounded-2xl border border-gray-200 hover:border-[#1c1c1c]">Watch Demo <FaPlayCircle/> </button>
      </div>
     
     <img src= {heroImg} alt="dashbord image"  className="w-[80%]  rounded-[20px] mx-auto drop-shadow-xl"/>

     
    </div>
  );
};

export default Hero;
