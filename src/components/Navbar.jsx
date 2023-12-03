import logo from "../assets/images/logo.webp";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#fdf2ec] px-6 py-4 border-b-[1px] border-[#f7c8ad4e] ">
      <img src={logo} alt="logo" className="w-25 h-12 cursor-pointer" />
      <ul className="flex gap-11 ml-[600px] text-base font-semibold text-[#1c1c1c] ">
        <li className="hover:text-[#8247ff] cursor-pointer">Features</li>
        <li className="hover:text-[#8247ff] cursor-pointer">FAQ</li>
        <li className="hover:text-[#8247ff] cursor-pointer">Pricing</li>
        <li className="hover:text-[#8247ff] cursor-pointer">Testimonals</li>
      </ul>
      <button className="ease-linear duration-300 bg-[#ffffff] py-[10px] px-4 text-lg text-[#1c1c1c] font-semibold rounded-[10px] border border-white hover:border-[#1c1c1c]">
        Buy Template
      </button>
    </div>
  );
};

export default Navbar;
