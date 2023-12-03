import { FaArrowAltCircleRight } from "react-icons/fa";
import emojiImg from "../assets/images/emojis.png";

const CallToAction = () => {
  return (
    <div className="w-full py-16 h-full bg-gradient-to-t from-[#FDF2EC] to-white">
      <div className="w-[80%] py-[100px] px-[80px] mx-auto border  h-full bg-white rounded-2xl flex items-center justify-around">
        <div className=" w-[50%]">
          <p className=" inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md">
            <span className="text-[18px]">👋</span> DON'T MISS OUT
          </p>
          <h2 className=" mt-4 max-w-[85%] pb-7 text-[3.5rem] font-medium font-outfit leading-none">
          Unleash your<span className="text-[#fe8162]"> Potential </span> with us
          </h2>
          <p className="max-w-[50%] text-[#767575] text-[1.25rem] font-inter font-medium">
          Join our community of ambitious individuals and organizations eager to make a difference.
          </p>

          <button className=" mt-4 ml-[-10px] transition ease-in-out delay-150 flex  justify-center items-center gap-1  group py-3 px-5 bg-[#8247ff] text-[1.25rem] text-white font-inter font-normal rounded-2xl border-[10px] border-white relative hover:border-[#cbb4fd] ">
            <span className="pr-5 ">Try out now</span>{" "}
            <FaArrowAltCircleRight className="transition ease-linear delay-150 absolute right-4 invisible group-hover:visible " />{" "}
          </button>
        </div>

        <div className="w-[45%]">
          <div className="bg-white border rounded-xl inline-block py-1 px-3 mx-[50px] ">
            <p className="text-[25px] text-[#1c1c1c] font-outfit font-medium \">
              <span className="text-[#8247ff]">200+</span> Happy users
            </p>
          </div>

          <div className="mt-10">
            <img src={emojiImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
