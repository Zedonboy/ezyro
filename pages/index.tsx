import HomeLayout from "../layout/homeLayout";
import Award from "../components/Award";
import Contact from "../components/Contact";
import Icon from "@mdi/react";
import { mdiBookOpenVariant } from "@mdi/js";

export default function Home() {
  const item = [
    { title: "EDUCATION", icon: mdiBookOpenVariant },
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
      title: "Maintenance & Support",
      content: "Collect all the necessary requirement details and briefs from the client.",
      img: "/image/one.webp",
    },
    {
      title: "Automation and Embedded systems",
      content: "Initiate the wireframing and prototype building of the product.",
      img: "/image/two.webp",
    },
    {
      title: "Graphics design & Video Editing",
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
    { image: "/image/react.webp", title: "React js", link: "https://reactjs.org" },
    { image: "/image/vue.png", title: "Vue js", link: "https://vuejs.org" },

    { image: "/image/next.png", link: "https://nextjs.org", title: "Next js" },
    { image: "/image/tailwind.png", title: "tailwind css", link: "https://tailwindcss.com" },
    { image: "/image/boostrap.png", link: "https://getbootstrap.com", title: "bootstrap" },
    { image: "/image/quasar.png", title: "Quasar", link: "https://quasar.dev" },

    { image: "/image/vuetify.png", title: "Vuetify", link: "https://vuetifyjs.com" },
    {
      image: "/image/ts.png",
      title: "TS && JS",
      link: "https://www.typescriptlang.org",
      link2: "https://javascript.info",
    },
    { image: "/image/node.png", title: "Node.js", link: "https://nodejs.org/en" },
    { image: "/image/graphql.png", title: "GraphQl", link: "https://graphql.org" },
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
                  <h2 className=" lg:text-4xl tracking-wide capitalize md:text-5xl text-2xl font-bold text-center md:text-center lg:text-left">
                    Click network solutions
                  </h2>

                  <h2 className="pt-7 tracking-wide text-2xl text-center md:text-center lg:text-left">
                    We provide tech internship trainings for internship/ bootcamp students eager to
                    grow or enchance skills in different information technology fields.
                  </h2>

                  <div
                    className="inline-block mr-2 mt-5 pb-10"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="inline-block mr-2 mt-2">
                      <button
                        style={{ backgroundColor: "#b9221b" }}
                        type="button"
                        className="focus:outline-none tracking-widest text-lg w-40 capitalize text-white  py-2.5 px-5  rounded-md hover:bg-blue-400"
                      >
                        learn more
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
            <div className="my-3 lg:px-20 px-5   w-full md:w-full  lg:w-1/2 overflow-hidden">
              <h1 className="text-center font-bold text-2xl pb-3">COMPANY PROFILE</h1>
              <h2 className="text-lg lg:text-lg   md:text-lg    tracking-widest ">
                CLICK NETWORK SOLUTIONS LIMITED is an indigenous ICT (information Communication
                Technology) company incorporated under the laws of the federal republic of Nigeria.
                It was incorporated on 14 October 2002 under the companies and Allied matters Act
                1990. It has further met all other criteria by other enabling laws guiding the
                regulation and setting up of such company. This company is committed to providing
                cost effectives information technology and communication solutions to both
                individuals and corporation organizations.
              </h2>
            </div>

            <div className="my-3 lg:px-20 px-5 w-full md:w-full  lg:w-1/2 overflow-hidden">
              <h1 className="text-center font-bold text-2xl pb-3">MISSION STATEMENT</h1>
              <h2 className="tracking-wide">
                Click Network Solution will provide its corporate customers both in the public and
                private sectors, and the international community with innovative, premium Network
                Support Solution, consulting services, and customized technology Training and
                advisory Service. We have customers and support sites in 6 African countries
                including Sierra lone, Congo, Democratic, Morocco, Liberia, cote-voire, and Ghana
                and local partner Network. At Click Network Solutions, we recognize the impact and
                importance of information technology both in the public and private sectors. Large
                public sector organizations are exploring veritable ways to reduce the high cost of
                ICT ownership as address the issue of obsolescence. Click Network solutions offers
                an outsourcing solution to ease the burden of public and private sector organization
                seeking to reduce run away IT expenditure.
              </h2>
              <div
                className="inline-block mr-2 mt-5 pb-10"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="inline-block mr-2 mt-2">
                  <button
                    style={{ backgroundColor: "#b9221b" }}
                    type="button"
                    className="focus:outline-none  text-lg w-40 capitalize text-white  py-2.5 px-5  rounded-md hover:bg-blue-400"
                  >
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* <div>
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
                      <Icon path={list.icon} size={1} horizontal vertical color="red" />
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
        </div> */}
        {/*  */}
        <div>
          <h2 className="text-center text-3xl tracking-wide md:text-4xl lg:text-4xl font-bold pt-5 pb-10">
            Interested in doing your SIWES with us?
          </h2>

          <div className="lg:px-32 md:px-20 ">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <img src={"/image/y4.png"} alt="image" />
              </div>

              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left">
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide text-center ">
                    What We Do
                  </h1>
                  <h2 className="tracking-wide">
                    We implement SIWES in a pragmatic manner to empower you to succeed in life. We
                    equip students with the required industry attitude, skills, knowledge and
                    experience to become more productive in today’s workplace.
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
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide text-center">
                    Find your path and your calling.
                  </h1>
                  <h2 className="tracking-wide">
                    Our goal is to prepare undergraduates for the IT industry both locally and
                    internationally in such a manner as to become employer’s preferred choice for
                    jobs.
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
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide text-center">
                    What makes us different?
                  </h1>
                  <h2 className="tracking-wide">
                    We train SIWES Students of different technical abilities in a holistic way.We
                    focus on both technical proficiency and personal growth to ensure that students
                    become effective learners, contributors, well rounded employees and leaders.
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
                  <h1 className="lg:pt-60 font-bold text-2xl pb-2 tracking-wide text-center">
                    Why choose click network solutions
                  </h1>
                  <h2 className="tracking-wide">
                    We are an innovation-driven enterprise providing IT solutions that are scalable,
                    proven, secure, easy to use with support provided.
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
              style={{ backgroundColor: "#b9221b" }}
              type="button"
              className="focus:outline-none  text-lg tracking-wide capitalize text-white  py-2.5 px-5  rounded-md  hover:bg-blue-400"
            >
              create your success story
            </button>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="text-center p-5">
            <h2 className="font-bold lg:& md:text-4xl text-2xl tracking-wide">
              INTENSIVE TRAINING ON
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
                <h1 className="text-center lg:text-5xl md:text-3xl text-3xl font-bold tracking-wide">
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
                        <h2 className="font-bold text-center t">{item.title}</h2>

                        <a href={item.link}>
                          <img src={item.image} alt="app_image" />
                        </a>
                        <div style={{ display: "flex", justifyContent: "center" }}></div>
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
                    style={{ backgroundColor: "#b9221b" }}
                    className="focus:outline-none tracking-wide text-lg  capitalize text-white  py-2.5 px-5  rounded-md  hover:bg-blue-400"
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
                          Applications are now open
                        </h1>
                        <h2 className="tracking-wide pb-5">We are now taking SIWES applications</h2>
                        <h2 className="tracking-wide pb-5">
                          Participants are 80% more likely to secure immediate
                        </h2>
                        <h2 className="tracking-wide pb-5">
                          employment after Graduating from University.
                        </h2>

                        <div className="inline-block mr-2 mt-5 pb-10">
                          <div className="inline-block mr-2 mt-2">
                            <button
                              style={{ backgroundColor: "#b9221b" }}
                              type="button"
                              className="focus:outline-none  tracking-wide text-lg  capitalize text-white  py-2.5 px-5  rounded-md  hover:bg-blue-400"
                            >
                              APPLY NOW
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
          {/* TODO  put testimony here */}
          {/* <Award /> */}
          <Contact />
        </div>
      </div>
    </HomeLayout>
  );
}
