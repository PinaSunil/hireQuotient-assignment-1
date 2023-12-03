import { RxCross2 } from "react-icons/rx";
import { TiPlus } from "react-icons/ti";
import { useState } from "react";

const Faq = () => {
  const [contents, setContents] = useState([
    {
      id: 1,
      question: "What is Manage Wise and what does it offer?",
      answer:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
      showContent: false,
    },
    {
      id: 2,
      question:
        "Is Manage Wise suitable for small businesses and larger enterprises alike?",
      answer:
        "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
      showContent: false,
    },
    {
      id: 3,
      question:
        "Can I access Manage Wise from different devices and platforms?",
      answer:
        "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
      showContent: false,
    },
    {
      id: 4,
      question: "What kind of support options do you offer to users?",
      answer:
        "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
      showContent: false,
    },
    {
      id: 5,
      question: "How secure is the data stored within Manage Wise?",
      answer:
        "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
      showContent: false,
    },
  ]);

  const handleClick = (index) => {
    setContents((prevContents) => {
      const updatedContents = [...prevContents];
      updatedContents[index].showContent = !updatedContents[index].showContent;
      return updatedContents;
    });
  };

  return (
    <div className="w-full h-full bg-white py-36">
      <div className="w-[80%] mx-auto flex justify-between items-center ">
        <div className="w-[38%] relative ">
               
          <p className="mt-[100px] py-1 px-[10px] inline-block text-[#8247ff] text-sm font-bold bg-white border-2  rounded-md">
            <span className="text-[18px]">🙋‍♀️</span>FAQ
          </p>
          <h2 className=" max-w-[75%] pb-7 text-[3.5rem] font-medium font-outfit leading-none">
            Need <span className="text-[#fe8162]">Answers?</span>
          </h2>
          <p className="w-[40%] text-[#767575] text-[1.25rem] font-inter font-medium">
            Check out our most commonly asked questions below to find the
            information you need.
          </p>

        </div>

        <div className="w-[60%] flex flex-col gap-4 ">
          {
            contents.map((content, index) => (
              <div
                key={content.id}
                className="flex bg-[#f7f8fd] px-6 py-4  rounded-2xl relative"
              >
                <div>
                  <p
                    className={`text-[1.563rem] ${
                      content.showContent
                        ? "text-[#8247ff] "
                        : " text-[#1c1c1c] "
                    }  font-outfit font-semibold`}
                  >
                    {content.question}
                  </p>
                  {content.showContent && (
                    <p className="text-base text-[#767575] font-inter font-normal mt-4">
                      {content.answer}
                    </p>
                  )}
                </div>
                <div
                  className="absolute right-5 top-3 "
                  onClick={() => handleClick(index)}
                >
                  {content.showContent ? (
                    <RxCross2 size={30} className="text-[#8247ff]" />
                  ) : (
                    <TiPlus size={30} className="text-[#8247ff]" />
                  )}
                </div>
              </div>
            ))
          }

          
        </div>
      </div>
    </div>
  );
};

export default Faq;
