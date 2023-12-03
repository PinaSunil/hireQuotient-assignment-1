const Pricing = () => {
  return (
    <div className="w-full h-full bg-white pt-[80px] pb-[100px]">
      <div className="w-[80%] mx-auto">
        <div className="text-center mx-auto">
          <p className="  py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md">
            <span className="text-[18px]">💲</span>PRICING
          </p>
          <h2 className="pb-7 mt-6 text-[3.5rem] font-medium font-outfit leading-none">
            Select your ideal <span className="text-[#fe8162]">Pricing</span>{" "}
            plan
          </h2>
          <p className="text-[#767575] mx-auto max-w-[500px] text-[1.25rem] font-inter font-medium">
            At Manage Wise, we believe in providing you with pricing plans that
            adapt to your unique needs.
          </p>
        </div>

        <div className="flex justify-between mt-20">
          <div className="w-[386.66px]  bg-[#ededfa] rounded-3xl">
            <div className="px-[30px] pt-[50px] pb-[40px]">
              <div className="text-[#fe8162] bg-white inline-block px-[10px] py-1 text-xs font-outfit font-semibold rounded-md">
                FREE
              </div>
              <p className="text-[#1c1c1c] text-base font-inter font-medium mt-8">
                <span className="text-[3.5rem] font-outfit font-medium text-[#1c1c1c]">
                  $0
                </span>
                /month
              </p>
              <ol className="mt-6">
                <li className="text-[#767575] text-base font-inter font-medium">
                  {" "}
                  <span className="text-green-600 ">✔</span> Access to all basic
                  features
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Reporting and
                  analytics
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Up to 5 individual
                  users
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Chat and email
                  support
                </li>
              </ol>

              <button className=" transition ease-in-out delay-150 mt-20 py-3 px-4 bg-white text-lg text-[#1c1c1c] font-inter font-normal rounded-2xl border border-gray-300  hover:border-[#1c1c1c] ">
                Get Started{" "}
              </button>
            </div>
          </div>

          <div className="w-[386.66px] bg-[#1c1c1c] rounded-3xl">
            <div className="px-[30px] pt-[50px] pb-[40px] ">
              <div className="text-[#fe8162] bg-white inline-block px-[10px] py-1 text-xs font-outfit font-semibold rounded-md">
                STANDARD
              </div>
              <p className="text-white text-base font-inter font-medium mt-8">
                <span className="text-[3.5rem] font-outfit font-medium text-white">
                  $25
                </span>
                /month
              </p>
              <ol className="mt-6">
                <li className="text-[#767575] text-base font-inter font-medium">
                  {" "}
                  <span className="text-green-600 ">✔</span> Access to all basic
                  features
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Reporting and
                  analytics
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Up to 5 individual
                  users
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Chat and email
                  support
                </li>
                 <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> 3+ integrations
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Account performance
                  reporting
                </li>
              </ol>

              <button className=" transition ease-in-out delay-150 mt-6 py-3 px-4 bg-[#8247ff] text-lg text-white font-inter font-normal rounded-2xl border-8 border-[#1c1c1c]  hover:border-[#cbb4fd] ">
                Get Started{" "}
              </button>
            </div>
          </div>

          <div className="w-[386.66px]  bg-[#ededfa] rounded-3xl">
            <div className="px-[30px] pt-[50px] pb-[40px]">
              <div className="text-[#fe8162] bg-white inline-block px-[10px] py-1 text-xs font-outfit font-semibold rounded-md">
                BUSINESS
              </div>
              <p className="text-[#1c1c1c] text-base font-inter font-medium mt-6">
                <span className="text-[3.5rem] font-outfit font-medium text-[#1c1c1c]">
                  $42
                </span>
                /month
              </p>
              <ol className="mt-6">
                <li className="text-[#767575] text-base font-inter font-medium">
                  {" "}
                  <span className="text-green-600 ">✔</span> Access to all basic
                  features
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Reporting and
                  analytics
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Up to 5 individual
                  users
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> Chat and email
                  support
                </li>
                <li className="text-[#767575] text-base font-inter font-medium">
                  <span className="text-green-600">✔</span> 3+ integrations
                </li>
              </ol>

              <button className=" transition ease-in-out delay-150 mt-16 py-3 px-4 bg-white text-lg text-[#1c1c1c] font-inter font-normal rounded-2xl border border-gray-300  hover:border-[#1c1c1c] ">
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
