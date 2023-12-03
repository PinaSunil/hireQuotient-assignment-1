import taskManagementImg from "../assets/images/task-management.webp"
import scheduleImg from '../assets/images/schedule.webp'
import communicationImg from '../assets/images/easy-communications.webp'
import runningProjectsImg from '../assets/images/running-projects.webp'

const Features = () => {
  return (
    <div className="w-full h-full bg-white text-center ">
        <p className="mt-[100px] py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md"> <span className="text-[18px]">🔥</span> PREMIER FEATURES  </p>
        <h2 className="mx-auto max-w-[75%] pb-7 text-[3.5rem] font-medium font-outfit leading-none">Discover our product's <span className="text-[#fe8162]"> Capabilities</span> </h2>
        <p className="w-[40%] mx-auto text-[#767575] text-[1.25rem] font-inter font-medium">Don't settle for mediocrity - embrace the future of management with Manage Wise.</p>
         
         {/* div1 */}
        <div className="flex justify-evenly items-center w-[80%] mx-auto my-[3.725rem]">

            <div className="w-[45%] text-left pt-[4.7rem] px-10 pb-9 bg-[#ededfa] rounded-3xl">

            <div className="bg-white p-2 text-3xl inline-block rounded-2xl mb-2">⭐️</div>
            <h3 className="text-[2.63rem] text-[#1c1c1c] leading-tight font-outfit font-medium min-w-[80%]">Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</h3>
            </div>

            <div className="w-[45%] border rounded-3xl  ">
              <img src= {taskManagementImg} alt="task management image" className="py-2" />
              <div className="p-[1.9rem] text-left">
                 <p className="text-2xl text-[#1c1c1c] font-outfit font-normal">Smart Task Management</p>
                 <p className="mt-1 text-base text-[#767575] leading-6 font-inter font-normal">Say goodbye to chaos with our smart task management system</p>
              </div>
            </div>
        </div>

       {/* div2 */}

       <div className=" flex w-[80%] gap-14 mx-auto items-center mb-28">
         <div className="bg-white border rounded-2xl w-[373px]">
              <img src= {scheduleImg} alt="" />
              <div className="p-[1.875rem] text-left">
                <p className="text-[#1c1c1c] text-[1.563rem] font-outfit font-semibold">Flexible Scheduling</p>
                <p className="text-base font-inter text-[#767575] font-medium">Stay productive with our flexible scheduling system</p>
              </div>
         </div>
         <div className="bg-white border rounded-2xl w-[373px]">
              <img src= {communicationImg} alt="" />
              <div className="p-[1.875rem] text-left">
                <p className="text-[#1c1c1c] text-[1.563rem] font-outfit font-semibold">Easy Communication</p>
                <p className="text-base font-inter text-[#767575] font-medium">Collaborate seamlessly with your team in real-time</p>
              </div>
         </div>
         <div className="bg-white border rounded-2xl w-[373px]">
            <img src= {runningProjectsImg} alt="" />
             <div className="p-[1.875rem] text-left">
                <p className="text-[#1c1c1c] text-[1.563rem] font-outfit font-semibold">Analytics</p>
                <p className="text-base font-inter text-[#767575] font-medium">Gain valuable insights with our advanced analytics feature</p>
             </div>
         </div>
       </div>




    </div>
  )
}

export default Features