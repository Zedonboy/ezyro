import HomeLayout from "../layout/homeLayout";
import Contact from "../components/Contact";
import Image from "next/image";

export default function Home() {
  const list = [
    {
      title: "Maintenance & Support",
      content:
        "Collect all the necessary requirement details and briefs from the client.",
      img: "/image/one.webp",
    },
    {
      title: "Automation and Embedded systems",
      content:
        "Initiate the wireframing and prototype building of the product.",
      img: "/image/two.webp",
    },
    {
      title: "Graphics design & Video Editing",
      content:
        "Prepare a use case draft containing all features and information on the app.",
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
      content:
        "Following the agile methodology, divide app development into different sprints",
      img: "/image/five.webp",
    },

    {
      title: "Development Phase",
      content:
        "App is moved to development phase where each use case is made functional.",
      img: "/image/six.webp",
    },

    {
      title: "Quality Assurance",
      content:
        "Manual and automated tests are performed to ensure the functionality of use cases.",
      img: "/image/eight.webp",
    },

    {
      title: "full stack web development",
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
    {
      image: "/image/react.webp",
      title: "React js",
      link: "https://reactjs.org",
    },
    { image: "/image/vue.png", title: "Vue js", link: "https://vuejs.org" },

    { image: "/image/next.png", link: "https://nextjs.org", title: "Next js" },
    {
      image: "/image/tailwind.png",
      title: "tailwind css",
      link: "https://tailwindcss.com",
    },
    {
      image: "/image/boostrap.png",
      link: "https://getbootstrap.com",
      title: "bootstrap",
    },
    { image: "/image/quasar.png", title: "Quasar", link: "https://quasar.dev" },

    {
      image: "/image/vuetify.png",
      title: "Vuetify",
      link: "https://vuetifyjs.com",
    },
    {
      image: "/image/ts.png",
      title: "TS && JS",
      link: "https://www.typescriptlang.org",
      link2: "https://javascript.info",
    },
    {
      image: "/image/node.png",
      title: "Node.js",
      link: "https://nodejs.org/en",
    },
    {
      image: "/image/graphql.png",
      title: "GraphQl",
      link: "https://graphql.org",
    },
  ];
  return (
    <HomeLayout>
      <div>
        <div className="py-3">
          <div
            className="  px-4 lg:mx-20 md:mx-30"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="flex flex-wrap bg-fixed text-black"
              style={{
                background: "url('/circle-scatter-haikei.svg')",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 overflow-hidden md:px-10 sm:px-30 lg:px-32">
                <div className="lg:pt-40 xl:pt-40">
                  <h2 className=" lg:text-5xl tracking-wide capitalize md:text-5xl text-2xl font-bold text-center md:text-center lg:text-left">
                    Click network solutions
                  </h2>

                  <h2 className="pt-7 font-mono tracking-tight text-center md:text-center lg:text-left">
                    We make it easy for you to do your SIWES in Nigeria - At
                    Click Network Solutions, we recognize the impact and
                    importance of information technology both in the public and
                    private sectors.
                  </h2>
                </div>
              </div>

              <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
                <Image
                  src="/undraw_dev_productivity_umsq.svg"
                  width="500"
                  height="600"
                />
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        <div>
          <div className="text-center p-5 mt-12">
            <h2 className="font-bold lg:& md:text-4xl text-2xl tracking-wide">
              INTENSIVE TRAINING ON
            </h2>
            <h2 className="pt-2 pb-5 tracking-wide">
              An experience ensuring best results, befitting your business
              needs.
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
                    <div className="flex">
                      <div className="max-w-md w-full lg:flex">
                        <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                          <div className="mb-8">
                            <div className="text-black font-bold text-xl mb-2 tracking-wide">
                              {item.title}
                            </div>
                            <p className="text-grey-darker text-base tracking-wide">
                              {item.content}
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
                <h1 className="text-center text-3xl font-bold tracking-wide">
                  Our Design & Development Toolkit
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
                      <div className="w-20">
                        <img src={item.image} alt="app_image" />
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
              <div
                className="inline-block mr-2 mt-5 pb-10"
                style={{ display: "flex", justifyContent: "center" }}
              ></div>

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
                          Applications are now open
                        </h1>
                        <p className="tracking-wide pb-5">
                          We are now taking SIWES applications Participants are
                          80% more likely to secure immediate employment after
                          Graduating from University.
                        </p>
                      </div>
                    </div>

                    {/* Vissible only on lg and xl */}
                    <div className="my-3 px-3 w-full lg:w-1/2 overflow-hidden pt-10">
                      <Image
                        src="/undraw_welcome_cats_thqn.svg"
                        width="500"
                        height="200"
                        alt="image"
                      />
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
          {/* TODO  put testimony here */}
          {/* <Award /> */}
          <Contact />
        </div>
      </div>
    </HomeLayout>
  );
}
