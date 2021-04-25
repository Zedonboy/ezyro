import React from "react";

const Contact = () => {
  return (
    <div className="bg-blue-400">
      <div className="lg:px-10 md:px-5 lg:  lg:mx-10 md:mx-10 ">
        <div>
          <div className="flex flex-wrap lg:mx-10 md:mx-10 overflow-hidden ">
            <div className="my-2 lg:px-5 md:px-5 px-4 lg:w-1/2 md:w-full w-full overflow-hidden">
              <div className=" relative ">
                <img src="/image/award2.webp" className="" />
              </div>
              <div>
                <h1 className="text-3xl text-white font-bold tracking-wide">
                  Are you ready to build an ios app with a wow factor
                </h1>
                <br></br>
                <p className="text-white tracking-wide">
                  Need dedicated ios developer or ios App developer service?
                </p>
                <h2 className="text-white tracking-wide">let help you!</h2>

                <div className=" mr-2 mt-2">
                  <button
                    type="button"
                    className=" text-white text-lg tracking-wide py-2.5 px-5 rounded-md  flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    kingdavidmiles@gmail.com
                  </button>
                </div>

                <div className=" mr-2 mt-2">
                  <button
                    type="button"
                    className=" text-white  tracking-wide text-lg py-2.5 px-5 rounded-md  flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    +2349039172303
                  </button>
                </div>
              </div>
            </div>
            {/* form start here */}
            <div className="lg:my-2 lg:px-2 md:px-2  w-full md:w-full lg:w-1/2 overflow-hidden">
              <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                <form action="#">
                  <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                    <h1 className="font-bold text-xl text-center">Contact us</h1>

                    <div className="flex flex-col space-y-1">
                      <input
                        type="text"
                        name="username"
                        className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                        placeholder="Username"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <input
                        type="email"
                        name="email"
                        className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                        placeholder="Email"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <textarea
                        name="message"
                        className="border-2 rounded  h-20 px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                        placeholder="message"
                      />
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                      <button
                        type="submit"
                        className="bg-blue-500  w-full text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
