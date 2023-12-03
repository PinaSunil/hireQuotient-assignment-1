import { FaMobileButton } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { FaFire } from "react-icons/fa6";

const MoreFeatures = () => {
  return (
    <div className="bg-[#1c1c1c] ">
      <div className="container w-[80%] mx-auto">
        <p className="mt-[100px] mb-[1.25rem] py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md">
          <span className="text-[18px]">🤩</span> AND MORE...
        </p>
        <h2 className="mx-auto  pb-7 text-[3.5rem] text-[#FDF2EC] font-medium font-outfit leading-none ">
          Explore an array of features that elevate your{" "}
          <span className="text-[#fe8162]"> Productivity</span> to new heights
        </h2>
        <p className="text-[1.25rem] text-[#767575] font-inter font-medium max-w-[34.375rem] mb-[3.75rem] ">
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p >

        {/* CARDS */}

        <div className="flex gap-10 pb-[5rem] ">
          <div className="text-center px-[1.875rem] pt-[3.125rem] pb-[3.125rem] bg-[#212121] border  border-[#ffffff08] rounded-[30px]">
            <div className="p-[0.813rem] bg-[#8247ff] inline-block rounded-[18px] ">
              <FaMobileButton size={35} className="text-white mx-auto" />
            </div>
            <p className="text-center text-[1.563rem] text-[#fdf2ec] font-outfit font-medium min-w-[19.584rem] leading-9 my-4 ">
              Cross-Platform Compatibility
            </p>
            <p className="text-base text-[#767575] font-inter font-medium ">
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </p>
          </div>

          <div className="text-center px-[1.875rem] pt-[3.125rem] pb-[3.125rem] bg-[#212121] border  border-[#ffffff08] rounded-[30px]">
            <div className="p-[0.813rem] bg-[#8247ff] inline-block rounded-[18px] ">
              <GoBellFill size={35} className=" text-white mx-auto" />
            </div>

            <p className="text-center text-[1.563rem] text-[#fdf2ec] font-outfit font-normal min-w-[19.584rem] leading-9 my-4">
              Stay Informed with Essential Notifications
            </p>
            <p className="text-base text-[#767575] font-inter font-medium ">
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </p>
          </div>

          <div className="text-center px-[1.875rem] pt-[3.125rem] pb-[3.125rem] bg-[#212121] border border-[#ffffff08] rounded-[30px]">
            <div className="p-[0.813rem] bg-[#8247ff] inline-block rounded-[18px] ">
              <FaFire size={35} className=" text-white  mx-auto  " />
            </div>

            <p className="text-center text-[1.563rem] text-[#fdf2ec] font-outfit font-medium min-w-[19.584rem] leading-9 my-4">
              Secure Data Encryption at all times
            </p>
            <p className="text-base text-[#767575] font-inter font-medium ">
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
