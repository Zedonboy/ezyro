import React from "react";

const Award = () => {
  const awards = [
    { image: "/image/award1.webp", text: "2021 best mobile" },
    { image: "/image/award2.webp", text: "top developers all times  " },
    { image: "/image/award3.webp", text: "best sellers of book" },
    { image: "/image/award4.webp", text: "top mobile 2022" },
    { image: "/image/award5.webp", text: "top web developer" },
    { image: "/image/award6.webp", text: "best graphics 2020" },
  ];
  return (
    <div>
      <div className="text-center font-bold md:text-3xl text-3xl lg:text-4xl pt-5 pb-5">
        <h1 className="tracking-wide">Awards & Recognitions</h1>
      </div>
      <div className="">
        <div className="flex flex-wrap mx-4 overflow-hidden">
          {awards.map((item, index) => (
            <div className="my-2 px-2 w-full md:w-1/3 lg:w-1/3 overflow-hidden" key={index}>
              <div className=" flex items-center justify-center">
                <div>
                  <div className="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
                    <img className="w-20 rounded-md" src={item.image} alt="motivation" />
                    <p className="text-center leading-relaxed text-lg tracking-wide">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
