import alexImg from "../assets/dp/alex.webp";
import davidImg from "../assets/dp/david.jpg";
import emilyImg from "../assets/dp/emily.jpg";
import sarahImg from "../assets/dp/sarah.jpg";

const Testimonal = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-[#FDF2EC] to-white">
      <div className="w-[80%] mx-auto py-14">
        <p className="mt-[100px] mb-[1.25rem] py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md">
          <span className="text-[18px]">🧡</span>TESTIMONIALS
        </p>
        <h2 className="mx-auto  pb-7 text-[3.5rem] text-[#1c1c1c] font-medium font-outfit leading-none ">
          Hear from our
          <span className="text-[#fe8162]"> Satisfied</span> clients
        </h2>
        <p className="text-[1.25rem] text-[#767575] font-inter font-medium max-w-[34.375rem] mb-[3.75rem] ">
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p>

        <div className="flex gap-3 justify-center items-center">
          <div className="w-[350px] bg-white px-10 pt-[50px] pb-[50px] border rounded-2xl ">
            <div className="">
              <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                "I can't imagine running my business without this product. The
                automation features have saved me hours of manual work, allowing
                me to focus on strategic tasks.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <img src={alexImg} alt="" className="w-[54px] rounded-full" />
              <div>
                <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                  Alex
                </p>
                <p className="text-[#767575] text-base font-inter font-medium">
                  IT Manager
                </p>
              </div>
            </div>
          </div>

          <div className="w-[350px] bg-white px-10 pt-[50px] pb-[50px] border rounded-2xl ">
            <div className="">
              <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                "Manage Wise transformed our team's productivity. The intuitive
                interface and powerful features have made a significant impact
                on our daily operations"
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <img src={emilyImg} alt="" className="w-[54px] rounded-full" />
              <div>
                <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                  Emily
                </p>
                <p className="text-[#767575] text-base font-inter font-medium">
                  Art Director
                </p>
              </div>
            </div>
          </div>

          <div className="w-[350px] bg-white px-10 pt-[50px] pb-[50px] border rounded-2xl ">
            <div className="">
              <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                "The customer support team behind this product is exceptional.
                They have been incredibly responsive and helpful, addressing any
                questions or concerns promptly.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <img src={sarahImg} alt="" className="w-[54px] rounded-full" />
              <div>
                <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                  Sarah
                </p>
                <p className="text-[#767575] text-base font-inter font-medium">
                  Project Manager
                </p>
              </div>
            </div>
          </div>

          <div className="w-[340px] bg-white px-10 pt-[50px] pb-[50px] border rounded-2xl ">
            <div className="">
              <p className="text-[#1c1c1c] text-xl font-inter font-medium">
              "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <img src={davidImg} alt="" className="w-[54px] rounded-full" />
              <div>
                <p className="text-[#1c1c1c] text-xl font-inter font-medium">
                  David
                </p>
                <p className="text-[#767575] text-base font-inter font-medium">
                  Freelancer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
