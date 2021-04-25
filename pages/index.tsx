import HomeLayout from "../layout/homeLayout";
import Award from "../components/Award";
import Contact from "../components/Contact";
export default function Home() {
  const item = [
    { title: "EDUCATION" },
    { title: "ENTERTAINMENT" },
    { title: "BUSINESS" },
    { title: "BOOKS" },

    { title: "FINANCE" },
    { title: "LIFESTYLE" },
    { title: "COMMUNICATION" },
    { title: "TRAVEL" },
    { title: "E-COMMERCE" },
    { title: "SOCIAL" },
    { title: "HEALTH & FITNESS" },
    { title: "MUSIC" },
  ];

  const list = [
    {
      title: "Project Requirements",
      content: "Collect all the necessary requirement details and briefs from the client.",
      img: "/image/one.webp",
    },
    {
      title: "Wireframing & Prototyping",
      content: "Initiate the wireframing and prototype building of the product.",
      img: "/image/two.webp",
    },
    {
      title: "Use Cases",
      content: "Prepare a use case draft containing all features and information on the app.",
      img: "/image/three.webp",
    },

    {
      title: "UI Design",
      content:
        "Once the use cases are approved, app’s design is created according to the wireframes.",
      img: "/image/four.webp",
    },

    {
      title: "Project plan",
      content: "Following the agile methodology, divide app development into different sprints",
      img: "/image/five.webp",
    },

    {
      title: "Development Phase",
      content: "App is moved to development phase where each use case is made functional.",
      img: "/image/six.webp",
    },

    {
      title: "Quality Assurance",
      content: "Manual and automated tests are performed to ensure the functionality of use cases.",
      img: "/image/eight.webp",
    },

    {
      title: "App Launch",
      content:
        "Once the app is tested in a closed group of testers, it is launched on the play store.",
      img: "/image/seven.webp",
    },

    {
      title: "Maintenance & Support",
      content:
        "Post app launch, we deliver maintenance, quality support and enhancement services as required.",
      img: "/image/nine.webp",
    },
  ];

  const app = [
    { image: "/image/react.webp" },
    { image: "/image/ionic.webp" },

    { image: "/image/flutter.webp" },
    { image: "/image/swift.webp" },
  ];
  return (
    <HomeLayout>
      <div>
        <div style={{ backgroundColor: "#f8faff", color: "black" }}>
          <div
            className="  px-4 lg:mx-20 md:mx-30"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="flex flex-wrap ">
              <div className="  w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 overflow-hidden md:px-10 sm:px-30 lg:px-32">
                <div className="lg:pt-40 xl:pt-40">
                  <h2 className=" lg:text-4xl tracking-wide md:text-5xl text-2xl font-bold text-center md:text-center lg:text-left">
                    Expand Your Reach by Choosing World-Class iOS App Development Services
                  </h2>

                  <h2 className="pt-7 tracking-wide text-2xl text-center md:text-center lg:text-left">
                    Elevate Your Business with Premium iOS Applications Built Using Swift &
                    Objective C.
                  </h2>

                  <div
                    className="inline-block mr-2 mt-5 pb-10"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="inline-block mr-2 mt-2">
                      <button
                        type="button"
                        className="focus:outline-none tracking-widest text-lg w-40 capitalize text-white  py-2.5 px-5  rounded-md bg-blue-500 hover:bg-blue-400"
                      >
                        let discuss
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2  ">
                <img
                  src={"image/ios.png"}
                  alt="image"
                  className="min-h-full lg:h-screen  lg:p-10 lg:px-32 md:px-32"
                />
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        {/*  */}

        <div className="pt-10">
          <div className="flex flex-wrap mx-3 overflow-hidden lg:px-32 md:px-4">
            <div className="my-3 lg:px-20 px-5 w-full md:w-full  lg:w-1/2 overflow-hidden">
              <h2 className="text-2xl lg:text-4xl md:text-3xl  tracking-widest font-semibold">
                Are you in search of an iOS App Development company which could amplify your market
                presence and broaden your reach to more Apple users?
              </h2>
            </div>

            <div className="my-3 lg:px-20 px-5 w-full md:w-full  lg:w-1/2 overflow-hidden">
              <h2 className="tracking-wide">
                At Origami Studios, our experienced iOS app developers cater your business demands
                exclusively while following the best practices and modern techniques of iOS app
                development. By aiming a future-centric and result-driven approach you can only
                expect robust iOS apps that improve brand awareness, increase consumer base and show
                <br></br>
                <br></br>
                significant business growth. After performing deep research and analysis, the
                developed iOS applications are not only visually captivating but also functionally
                robust with engaging user-experiences and intuitive navigational flows.
              </h2>
              <div
                className="inline-block mr-2 mt-5 pb-10"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="inline-block mr-2 mt-2">
                  <button
                    type="button"
                    className="focus:outline-none  text-lg w-40 capitalize text-white  py-2.5 px-5  rounded-md bg-blue-500 hover:bg-blue-400"
                  >
                    let discuss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="text-center p-5">
            <h2 className="font-bold lg:& md:text-4xl text-2xl">
              Customer-Centric iOS App Development Services
            </h2>
            <h2 className="pt-2 pb-5">
              Want to see your iOS apps topping the chart? With a diverse experience of Android app
              <br></br>
              development, Origami Studios cover various industries and niches.
            </h2>
          </div>

          <div>
            <div className="flex flex-wrap  overflow-hidden lg:px-20 ">
              {item.map((list, index) => (
                <div className="my-3 px-3  w-full md:w-full lg:w-1/3 overflow-hidden" key={index}>
                  <div className="bg-gray-50 h-16">
                    <div className="flex   text-black text-sm font-bold  py-3 lg:mx-36 mx-10">
                      <svg
                        className="w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                      </svg>
                      <p className="tracking-wide">{list.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="inline-block mr-2 mt-5 pb-10"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="inline-block mr-2 mt-2">
                <button
                  type="button"
                  className="focus:outline-none  tracking-wide text-lg  capitalize text-white  py-2.5 px-5  rounded-md bg-blue-500 hover:bg-blue-400"
                >
                  let role your ideal
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <h2 className="text-center text-3xl tracking-wide md:text-4xl lg:text-4xl font-bold pt-5 pb-10">
            Explore some of our impressive iOS App Development projects
          </h2>

          <div className="lg:px-32 md:px-20 ">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <img src={"/image/y4.png"} alt="image" />
              </div>

              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left">
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide ">
                    GMDY – A digital platform for sports lovers to shop their favorite sports wear
                    and connect with others
                  </h1>
                  <h2 className="tracking-wide">
                    Developed an interactive iOS application using Swift and Python with multiple
                    features and pixel-perfect UI.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="lg:px-32 md:px-32 ">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              {/* hidden on lg and bigger screens */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden pt-10  block md:block lg:hidden xl:hidden">
                <img src={"/image/y5.webp"} alt="image" />
              </div>
              {/*  */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left">
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide">
                    FitTogether – A socializing app that serves as a hub of fitness for fitness
                    enthusiasts
                  </h1>
                  <h2 className="tracking-wide">
                    Developed an iOS application for FitTogether using Swift. User Testing was
                    conducted and ensured smooth functioning of each feature.
                  </h2>
                </div>
              </div>
              {/* vissible only on lg and xl */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden  pt-10  hidden md:hidden lg:block xl:block">
                <img src={"/image/y5.webp"} alt="image" />
              </div>
              {/*  */}
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="lg:px-32 md:px-20 ">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <img src={"/image/y6.webp"} alt="image" />
              </div>

              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left">
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide">
                    Aplica – A digital platform for students interested in studying abroad
                  </h1>
                  <h2 className="tracking-wide">
                    Developed an iOS application for Aplica using PHP while keeping the factors like
                    ease-of-use, app security and data integrity on priority.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="lg:px-32 md:px-32 ">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              {/* hidden on lg and bigger screens */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden pt-10  block md:block lg:hidden xl:hidden">
                <img src={"/image/y7.png"} alt="image" />
              </div>
              {/*  */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left">
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide">
                    Kikkle – A loyalty app that allows user to redeem rewards and offers from
                    selected restaurants, bars etc
                  </h1>
                  <h2 className="tracking-wide">
                    Developed an iOS application for Kikkle using Swift and ensured its quality with
                    detailed testing.
                  </h2>
                </div>
              </div>
              {/* vissible only on lg and xl */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden  pt-10  hidden md:hidden lg:block xl:block">
                <img src={"/image/y7.png"} alt="image" />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div
          className="inline-block mr-2 mt-5 pb-10"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="inline-block mr-2 mt-2">
            <button
              type="button"
              className="focus:outline-none  text-lg tracking-wide capitalize text-white  py-2.5 px-5  rounded-md bg-blue-500 hover:bg-blue-400"
            >
              create your success story
            </button>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="text-center p-5">
            <h2 className="font-bold lg:& md:text-4xl text-2xl tracking-wide">
              Our iOS App Development Process
            </h2>
            <h2 className="pt-2 pb-5 tracking-wide">
              An experience ensuring best results, befitting your business needs.
            </h2>
          </div>

          <div>
            <div className="flex flex-wrap  overflow-hidden lg:px-32 ">
              {list.map((item, index) => (
                <div
                  className="my-3 px-3  w-full md:w-full lg:w-1/3 overflow-hidden"
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img src={item.img} alt="images" className="w-16" />
                    </div>
                    <div className="flex   text-black text-sm font-bold ">
                      <div className="max-w-md w-full lg:flex">
                        <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                          <div className="mb-8">
                            <div className="text-black font-bold text-xl mb-2 tracking-wide">
                              Can coffee make you a better developer?
                            </div>
                            <p className="text-grey-darker text-base tracking-wide">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                              nihil.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        {/* <img className="relative  w-full h-full " src={"/image/bg.webp"} alt="image" /> */}

        {/*  */}

        <div className="relative ">
          <div className="flex ">
            <div className="relative z-30 w-full  py-8  md:py-10 ">
              <div>
                <h1 className="text-center lg:text-5xl md:text-3xl text-3xl font-bold tracking-wide">
                  Our iOS App Development Toolkit
                </h1>
              </div>

              <div className="lg:px-20 pt-10 pb-10">
                <div className="flex flex-wrap  overflow-hidden  justify-center lg:px-36 lg:mx-36">
                  {app.map((item, index) => (
                    <div
                      className="my-2 px-2 lg:w-1/5 md:w-1/5 w-2/4 overflow-hidden"
                      key={index}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className="w-10">
                        <img src={item.image} alt="app_image" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
              <div
                className="inline-block mr-2 mt-5 pb-10"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="inline-block mr-2 mt-2">
                  <button
                    type="button"
                    className="focus:outline-none tracking-wide text-lg  capitalize text-white  py-2.5 px-5  rounded-md bg-blue-500 hover:bg-blue-400"
                  >
                    contact with us
                  </button>
                </div>
              </div>

              <div>
                <div className="lg:px-32 md:px-32 ">
                  <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
                    {/* hidden on lg and bigger screens */}
                    <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden pt-10  block md:block lg:hidden xl:hidden">
                      <img src={"/image/dev.png"} alt="image" />
                    </div>
                    {/*  */}
                    <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                      <div className="lg:px-10 text-center md:text-center lg:text-left">
                        <h1 className="lg:pt-24 font-bold md:text-3xl text-2xl lg:text-4xl pb-2 tracking-wide">
                          We Cater all iOS Devices
                        </h1>
                        <h2 className="tracking-wide">
                          Our services do not limit to only iPhone application development. Whether
                          its a fitness app, gaming app or a business app, with professional iOS
                          application development services, our team is geared up with the latest
                          domain that incorporates all Apple devices.
                        </h2>
                        <div className="flex flex-wrap -mx-2 overflow-hidden">
                          <div className="my-2 px-2 w-1/3 overflow-hidden font-bold tracking-wide">
                            i phone
                          </div>

                          <div className="my-2 px-2 w-1/3 overflow-hidden font-bold tracking-wide">
                            i pad
                          </div>

                          <div className="my-2 px-2 w-1/3 overflow-hidden font-bold tracking-wide">
                            mac book
                          </div>

                          <div className="my-2 px-2 w-1/3 overflow-hidden font-bold tracking-wide">
                            Apple TV
                          </div>

                          <div className="my-2 px-2 w-1/3 overflow-hidden font-bold tracking-wide">
                            Apple Watch
                          </div>
                        </div>
                        <div className="inline-block mr-2 mt-5 pb-10">
                          <div className="inline-block mr-2 mt-2">
                            <button
                              type="button"
                              className="focus:outline-none  tracking-wide text-lg  capitalize text-white  py-2.5 px-5  rounded-md bg-blue-500 hover:bg-blue-400"
                            >
                              SPEAK TO AN EXPERT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* vissible only on lg and xl */}
                    <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden  pt-10  hidden md:hidden lg:block xl:block">
                      <img src={"/image/dev.png"} alt="image" />
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0  w-screen h-screen">
            <img
              alt="Snowy mountain lake"
              className="object-cover w-full h-full"
              src="/image/bg.webp"
            />
          </div>
          <Award />
          <Contact />
        </div>
      </div>
    </HomeLayout>
  );
}
