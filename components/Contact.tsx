import React from "react";
import Icon from "@mdi/react";
import { mdiBookOpenVariant, mdiGmail, mdiPhoneRemove, mdiGoogleMaps } from "@mdi/js";

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
                    <Icon path={mdiGmail} size={1} horizontal color="white" />
                    theclicknetworksolutions@gmail.com
                  </button>
                </div>

                <div className=" mr-2 mt-2">
                  <button
                    type="button"
                    className=" text-white  tracking-wide text-lg py-2.5 px-5 rounded-md  flex items-center"
                  >
                    <Icon path={mdiPhoneRemove} size={1} color="white" />
                    +2349038240798
                  </button>
                </div>
                <div className=" mr-2 mt-2">
                  <button
                    type="button"
                    className=" text-white  tracking-wide text-lg py-2.5 px-5 rounded-md  flex items-center"
                  >
                    <Icon path={mdiGoogleMaps} size={1} color="white" />
                    Sinady Oil Services Opposite Smile more, Umuahia Abia State
                  </button>
                </div>
              </div>
            </div>
            {/* form start here */}
            <div className="lg:my-2 lg:px-2 md:px-2  w-full md:w-full lg:w-1/2 overflow-hidden">
              <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                <form action="#">
                  <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                    <h1 className="font-bold text-xl text-center">CONTACT CNS</h1>

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
                        style={{ backgroundColor: "#b9221b" }}
                        className="  w-full text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
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
