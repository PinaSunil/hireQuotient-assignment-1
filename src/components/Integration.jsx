import { FaTools } from "react-icons/fa";

// ===== icons imports ======
import dropboxIcon from "../assets/icons/icons8-dropbox.svg";
import figmaIcon from "../assets/icons/icons8-figma.svg";
import githubIcon from "../assets/icons/icons8-github.svg";
import gmailIcon from "../assets/icons/icons8-gmail.svg";
import gitlabIcon from "../assets/icons/icons8-gitlab.svg";
import notionIcon from "../assets/icons/icons8-notion.svg";
import reactIcon from "../assets/icons/icons8-react.svg";
import slackIcon from "../assets/icons/icons8-slack.svg";
import vimeoIcon from "../assets/icons/icons8-vimeo.svg";
import zoomIcon from "../assets/icons/icons8-zoom.svg";

import searchImg from "../assets/images/searchImg.webp";
const Integration = () => {
  return (
    <div className="bg-[#1c1c1c]">
      <div className="w-[80%] h-[47.5rem] mx-auto flex justify-center items-center gap-24">

        <div className="w-[25%] h-full px-6  border-1 flex flex-col justify-between">
        <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 ">
            <img src={slackIcon} alt="" className="w-12" />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 self-end">
            <img src={figmaIcon} alt="" className="w-12" />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 ">
            <img src={dropboxIcon} alt="" className="w-12" />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 self-end">
            <img src={notionIcon} alt="" className="w-12" />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 ">
            <img src={gmailIcon} alt="" className="w-12" />
          </div>

        </div>

        <div className="w-[50%]">
          <p className="mt-[100px] mb-[1.25rem] py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md">
            <FaTools className="inline-block" /> INTEGRATIONS
          </p>

          <h2 className="mx-auto  pb-7 text-[3.5rem] text-[#FDF2EC] font-medium font-outfit leading-none ">
            Enable <span className="text-[#fe8162]"> integration </span> with
            other popular tools and platforms
          </h2>

          <p className="text-[1.25rem] text-[#767575] font-inter font-medium max-w-[34.375rem] mb-[3.75rem] ">
            Seamlessly connect and amplify your workflow by enabling integration
            with a diverse array of widely-used tools and platforms.
          </p>

          <img src={searchImg} alt="" />
        </div>

        <div className="w-[25%] h-full px-6 border-1 flex flex-col justify-between">
          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 self-end">
            <img src={reactIcon} alt=""  />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 ">
            <img src={vimeoIcon} alt=""  />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 self-end">
            <img src={zoomIcon} alt=""  />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 ">
            <img src={gitlabIcon} alt=""  />
          </div>

          <div className="bg-[#ffffff0D] p-3 rounded-3xl block w-16 self-end">
            <img src={githubIcon} alt="" className="rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Integration;
