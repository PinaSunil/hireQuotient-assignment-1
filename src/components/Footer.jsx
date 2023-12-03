import logo from "../assets/images/logo.webp";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#FDF2EC]">
        <div className="w-[80%] mx-auto flex justify-between items-center">
            <img src= {logo} alt="" className="w-[193px] self-start" />
            <ol>
                <li className="text-base leading-8 font-normal font-inter text-[#1c1c1c]">Features</li>
                <li className="text-base leading-8 font-normal font-inter text-[#1c1c1c]">FAQ</li>
                <li className="text-base leading-8 font-normal font-inter text-[#1c1c1c]">Pricing</li>
                <li className="text-base leading-8 font-normal font-inter text-[#1c1c1c]">Testimonials</li>
            </ol>

        </div>

        <div className="w-[80%] py-10 mx-auto mt-28 border-t border-[#857166] flex justify-between ">
            <p className="text-base text-[#1c1c1c] font-medium ">© 2022 ManageWise, Inc.</p>
             <div className="flex gap-3">
                <FaInstagram size={25}/>
                <FaSquareXTwitter size={25}/>
                <FaLinkedinIn size={25}/>
             </div>

        </div>
        
    </footer>
  )
}

export default Footer