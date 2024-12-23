import clsx from "clsx";
import { useEffect, useRef, useState, ChangeEvent } from "react";
import profilePic from "./assets/chidam_profile.jpg";
import useTheme from "./contexts/themeContext/ThemeContext.ts";

function App() {
  // #region NAV
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const [isSunMoonIconVisible, setIsSunMoonIconVisible] = useState<boolean>(false);
  const sunMoonIconVisibleTimeOutRef = useRef<number | null>(null);

  const { theme, toggleTheme } = useTheme();

  const lightDarkToggler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    return isChecked ? toggleTheme("dark") : toggleTheme("light");
  };

  useEffect(() => {
    setIsSunMoonIconVisible(true);
    sunMoonIconVisibleTimeOutRef.current = setTimeout(() => setIsSunMoonIconVisible(false), 1500);

    return () => {
      if (sunMoonIconVisibleTimeOutRef.current) {
        clearTimeout(sunMoonIconVisibleTimeOutRef.current);
        sunMoonIconVisibleTimeOutRef.current = null;
      }
    };
  }, [theme]);

  // #endregion NAV

  // #region Experience

  const [activeTab, setActiveTab] = useState("siemens");

  // #endregion Experience

  // #region Quote

  const [quote] = useState(() => generateRandomQuote());
  function generateRandomQuote() {
    const quotes = [
      {
        quote:"Websites promote you 24/7: No employee will do that.",
        author:"Paul Cookson"
      }
    ];
    const randomIndex = Math.floor(Math.random() * (quotes.length));
    return quotes[randomIndex];
  }

  // #endregion Quote

  const [isQuoteVisible, setIsQuoteVisible] = useState(true);



  return (
    <div className={clsx("bg-purple-heart-100 dark:bg-slate-900 transition-colors duration-1000 scroll-smooth",isQuoteVisible && "w-100 h-screen overflow-hidden")}>

      {/* QUOTE */}
      <section className={clsx("z-20 bg-purple-heart-100 dark:bg-slate-900 absolute top-0 left-0 w-full h-screen justify-center items-center", isQuoteVisible ?"flex":"hidden")} id="quote">
        <div className="container max-w-5xl text-center">
            <svg className="text-purple-heart-600 size-14 md:size-16 lg:size-20 inline-block mb-12" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
            <h1 className="text-purple-heart-800 text-3xl md:text-4xl lg:text-5xl sm:leading-normal md:leading-normal lg:leading-normal mb-12 ">{quote.quote}</h1>
            

            <div className="relative">
               <span className="vanish block w-1/4 h-1 bg-purple-heart-900 rounded-sm mx-auto absolute top-16 left-1/2 -translate-x-1/2 -z-10"></span>

                <button className="group" onClick={() => setIsQuoteVisible(false)}>
                  <svg className="appear text-purple-heart-900 group-hover:text-purple-heart-700  size-28 lg:size-32 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
                
            </div> 
            

            <p className="text-xl lg:text-xl mt-12 text-purple-heart-800">{quote.author}</p>
        </div>
      </section>


      {/* NAV */}
      <nav className="w-screen flex items-center h-20 p-3 sm:p-4 fixed top-0 shadow-sm z-10 bg-purple-heart-100 dark:bg-slate-900">
        <div className="w-1/5">
          <a href="#hero">
            <span className="text-lg font-bold text-purple-heart-900 dark:text-purple-heart-500">
              CHIDAM
            </span>
          </a>
        </div>

        <div className="w-4/5 flex justify-end items-center">
          <ul
            className={clsx(
              isNavOpen
                ? "absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center gap-10 z-10 bg-white dark:bg-slate-900"
                : "hidden",
              "md:flex md:w-auto md:h-auto md:flex-row md:static md:gap-10 xl:gap-20 md:m-auto md:mr-20",
              "transition-all",
              "text-purple-heart-800 dark:text-white "
            )}
          >
            <li
              className="cursor-pointer hover:scale-105 dark:hover:text-purple-heart-500"
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="cursor-pointer hover:scale-105 dark:hover:text-purple-heart-500"
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#experience">Experience</a>
            </li>
            <li
              className="cursor-pointer hover:scale-105 dark:hover:text-purple-heart-500"
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="cursor-pointer hover:scale-105 dark:hover:text-purple-heart-500"
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#contact">Contact</a>
            </li>
            <li
              className="cursor-pointer hover:scale-105 rounded-full py-4 px-8 border border-purple-heart-800 text-purple-heart-800 dark:border-white dark:text-white mt-20 md:rounded-none md:p-0 md:border-none md:mt-0 md:dark:hover:text-purple-heart-500"
              onClick={() => setIsNavOpen(false)}
            >
              <a href="#resume">Resume</a>
            </li>
          </ul>

          {/* dark & light hero popup icons */}
          <div className={clsx("absolute left-1/2 h-[200dvh] top-24 -translate-x-1/2 flex flex-col justify-between transition-all duration-1000 dark:rotate-180",isSunMoonIconVisible?"opacity-100":"opacity-0")} >
            <svg className="size-10 text-yellow-400 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>

            <svg className="size-10 text-white  rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Dark light toggler */}
          <div className="relative md:mr-4">
            <input
              className="w-0 h-0"
              type="checkbox"
              id="dark-light-toggler"
              onChange={lightDarkToggler}
            />
            <label
              className="cursor-pointer bg-white shadow-inner w-16 h-7 inline-block rounded-full align-bottom dark:bg-slate-600"
              htmlFor="dark-light-toggler"
              aria-label="Dark Light Toggler"
            >
              <svg
                className="text-yellow-400 transition-transform  duration-500 absolute top-1/2 -translate-y-1/2 left-1 size-6 dark:opacity-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>

              <svg
                className="text-white transition-transform duration-500 opacity-0 top-1/2 -translate-y-1/2 absolute right-1 size-6 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Hamburger Menu */}
          <button
            className="z-10 ms-10 block md:hidden cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div
              className={clsx(
                "w-8 h-1 bg-black transition-all dark:bg-white",
                isNavOpen && "translate-y-2 rotate-45"
              )}
            ></div>
            <div
              className={clsx("w-8 h-1 bg-black my-1 dark:bg-white", isNavOpen && "opacity-0")}
            ></div>
            <div
              className={clsx(
                "w-8 h-1 bg-black transition-all dark:bg-white",
                isNavOpen && "-translate-y-2 -rotate-45"
              )}
            ></div>
          </button>
        </div>
      </nav>

      {/* SECTION - HERO */}
      <section className="w-full h-screen flex justify-center items-center" id="hero">
        <div className="px-4 sm:px-0">
          <p className="text-lg sm:text-base mb-2 text-purple-heart-800 dark:text-purple-heart-700">
            Hi, my name is
          </p>

          {/* <h1 className="leading-none font-semibold text-5xl sm:text-7xl md:text-8xl mb-8">Chidambaram.</h1>
          <h2 className="leading-none font-medium text-3xl sm:text-5xl md:text-6xl mb-8">I build things for the web.</h2> */}

          <h1 className="leading-none font-semibold text-clamp-lg mb-8 dark:text-white">
            Chidambaram.
          </h1>
          <h2 className="leading-none font-normal text-clamp-md mb-8 text-purple-heart-500 dark:text-purple-heart-400">
            I build things for the web.
          </h2>

          <p className="max-w-md text-md text-xl text-purple-heart-800 dark:text-purple-heart-700">
            I am an accomplished Web Developer with a strong focus on Front-end technologies.
            Presently, I hold the role of Software Engineer at Siemens, where I continue to excel in
            my field.
          </p>

          <button className="mt-7 text-p rounded-full p-4 transition-all border border-black hover:bg-purple-heart-400 hover:text-white hover:border-white cursor-pointer font-semibold dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-purple-heart-400 dark:hover:border-black">
            Get in Touch
          </button>
        </div>
      </section>

      {/* SECTION - ABOUT ME */}
      <section className="w-full h-screen flex justify-center items-center" id="about">
        <div className="max-w-5xl container">
          <article className="text-lg ">
            <h3 className="text-4xl font-bold mb-8 dark:text-white">About Me</h3>
            <p className=" text-purple-heart-800 dark:text-purple-heart-700">
              Hello! My name is Chidam, I enjoy creating things that live on the internet. An
              enthusiastic explorer with a strong foundation in ReactJs development. Familiar with
              the MERN stack. Passionate about learning and thriving in web technologies to deliver
              impactful digital solutions.
            </p>

            <img
              alt="profile"
              src={profilePic}
              className="hidden float-right md:inline-block object-cover rounded-3xl object-left-top shadow-2xl w-[194px] h-60"
            />

            <p className="mb-5 mt-8 text-purple-heart-800 dark:text-purple-heart-700">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="list-inside ml-5 inline-flex flex-col flex-wrap max-h-32 gap-1 dark:text-white text-base">
              <li className="">
                <a href="#" target="_blank" className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-purple-heart-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>React Js</span>
                </a>
              </li>

              <li className="">
                <a href="#" target="_blank" className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-purple-heart-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Typescript</span>
                </a>
              </li>

              <li className="">
                <a href="#" target="_blank" className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-purple-heart-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Node Js</span>
                </a>
              </li>

              <li className="">
                <a href="#" target="_blank" className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-purple-heart-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Tailwind CSS</span>
                </a>
              </li>

              <li className="ml-5 sm:ml-20">
                <a href="#" target="_blank" className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-purple-heart-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>Vue Js</span>
                </a>
              </li>
            </ul>

            <div className="clear-both"></div>
          </article>
        </div>
      </section>

      {/* SECTION - EXPERIENCE */}
      <section className="w-full md:h-screen py-20 md:py-0" id="experience">
        
        {/* minSize Md */}
        <div className="max-w-5xl container h-full py-40 hidden md:block">
          <h3 className="text-4xl font-bold mb-8 dark:text-white">Where I've worked</h3>
          {/* TABS */}
          <div className="tabs flex lg:gap-4">
            {/* TAB-LIST */}
            <ul className="tab-list flex flex-col basis-1/4 shrink-0">
              <li
                onClick={() => setActiveTab("siemens")}
                className={clsx(
                  "px-4 py-2  cursor-pointer  hover:bg-purple-heart-200 border-l-2",
                  activeTab === "siemens"
                    ? "font-semibold border-purple-heart-900 text-purple-heart-900 dark:border-purple-heart-300 dark:text-purple-heart-500"
                    : "border-purple-heart-300 text-purple-heart-500 dark:border-purple-heart-900 dark:text-purple-heart-900"
                )}
              >
                Siemens
              </li>
              <li
                onClick={() => setActiveTab("GTT")}
                className={clsx(
                  "px-4 py-2 cursor-pointer   hover:bg-purple-heart-200 border-l-2",
                  activeTab === "GTT"
                    ? "font-semibold border-purple-heart-900 text-purple-heart-900 dark:border-purple-heart-300 dark:text-purple-heart-500"
                    : "border-purple-heart-300 text-purple-heart-500 dark:border-purple-heart-900 dark:text-purple-heart-900 "
                )}
              >
                GTT
              </li>
              <li
                onClick={() => setActiveTab("prematix")}
                className={clsx(
                  "px-4 py-2 cursor-pointer  hover:bg-purple-heart-200 border-l-2 ",
                  activeTab === "prematix"
                    ? " font-semibold border-purple-heart-900 text-purple-heart-900 dark:border-purple-heart-300 dark:text-purple-heart-500"
                    : "border-purple-heart-300 text-purple-heart-500 dark:border-purple-heart-900 dark:text-purple-heart-900"
                )}
              >
                Prematix
              </li>
            </ul>

            {/* TAB-CONTENT */}
            <div className="tab-content">

              {/* Siemens  */}
              <div data-tab-content="siemens" className={clsx(activeTab==="siemens"?"block":"hidden")}>

                <p className="flex md:items-start lg:items-center text-2xl font-bold">
                  <span className="dark:text-white text-nowrap">Software Engineer</span>
                  <span className="ml-1 font-normal text-purple-heart-900">@</span>
                  <span className="ml-1 text-purple-heart-500">Siemens</span>
                </p>

                <p className="text-base text-purple-heart-500 mb-5">May 2023 - Present</p>

                <ul className="list-inside ml-5 flex-col gap-1 dark:text-white text-base">
                  <li className="flex gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">Designed and implemented user friendly UI to validate bussiness logic developed using javascript and typescript using VUE Js Frontend web framework.</p>
                  </li>

                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Transitioned a Node.js API project to align with the latest ECMAScript Module (ESM) system, modernizing the codebase and improving maintainability and future-proofing.
                      </p>
                  </li>

                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Developed scalable and type-safe business logic, ensuring reliability and maintainability through TypeScript's strong typing features.
                      </p>
                  </li>
                </ul>

              </div>

              {/* GTT */}
              <div data-tab-content="GTT" className={clsx(activeTab==="GTT"?"block":"hidden")}>
                <p className="flex md:items-start lg:items-center text-2xl font-bold">
                  <span className="dark:text-white text-nowrap">Software Engineer</span>
                  <span className="ml-1 font-normal text-purple-heart-900">@</span>
                  <span className="ml-1 text-purple-heart-500">Germantown Technologies</span>
                </p>

                <p className="text-base text-purple-heart-500 mb-5">May 2022 - Feb 2023</p>

                <ul className="list-inside ml-5 flex-col gap-1 dark:text-white text-base">
                  <li className="flex gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">Collaborated with team members to develop a large-scale health care web application using the MERN stack.</p>
                  </li>

                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Utilized redux for state management and Redux Sagas to handle asynchronous events/side effects. Hands-on experience in RTK (React Tool Kit).
                      </p>
                  </li>

                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Developed RESTful APIs using Node.js, Express framework and MongoDB.
                      </p>
                  </li>
                </ul>
              </div>

              {/* prematix */}
              <div data-tab-content="prematix" className={clsx(activeTab==="prematix"?"block":"hidden")}>
                <p className="flex md:items-start lg:items-center text-2xl font-bold">
                  <span className="dark:text-white text-nowrap">Software Trainee</span>
                  <span className="ml-1 font-normal text-purple-heart-900">@</span>
                  <span className="ml-1 text-purple-heart-500">Prematix Software Solutions</span>
                </p>

                <p className="text-base text-purple-heart-500 mb-5">July 2020 - April 2022</p>

                <ul className="list-inside ml-5 flex-col gap-1 dark:text-white text-base">
                  <li className="flex gap-2 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">Involved designing web pages using HTML 5, CSS, Bootstrap</p>
                  </li>

                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3"> Developed SPA(Single Page Application) using ReactJS along with UI libraries like reactstrap, Antd, Material UI. </p>
                  </li>

                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3"> Integrated RESTful APIs with ReactJS for seamless data exchange between front-end and back-end systems. </p>
                  </li>
                  
                  <li className="flex  gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3"> Implemented stable react form components to be added to any future pages. </p>
                  </li>
                </ul>
              </div>



            </div>
          </div>
        </div>


        {/* maxSize Md */}
        <div className="max-w-5xl container md:hidden">
          <h3 className="text-4xl font-bold mb-8 dark:text-white">Where I've worked</h3>
          


          <div className="timeline">
            
            {/* SIEMENS */}
            <div className="flex">
              
              <p className="w-9 text-purple-heart-500 self-start sticky top-20 text-sm">May 2023</p>
              
              <div className="ml-5 sm:ml-10 relative border-l-2 border-purple-heart-400">
                
                <ul className="ml-5 mb-4 sm:ml-10 before:content-[''] before:inline-block before:w-4 before:h-4 before:rounded-full before:absolute before:left-0 before:top-2 before:-translate-x-1/2 before:border-2 before:border-white before:bg-purple-heart-800">
                  {/* Header li element */}
                  <li>
                    <p className=" flex flex-wrap md:items-start lg:items-center text-lg font-bold mb-4">
                      <span className="dark:text-white text-nowrap">Software Engineer</span>
                      <span className="ml-1 font-normal text-purple-heart-900">@</span>
                      <span className="ml-1 text-purple-heart-500">Siemens</span>
                    </p>
                  </li>

                  <li className="flex gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">Designed and implemented user friendly UI to validate bussiness logic developed using javascript and typescript using VUE Js Frontend web framework.</p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Transitioned a Node.js API project to align with the latest ECMAScript Module (ESM) system, modernizing the codebase and improving maintainability and future-proofing.
                      </p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Developed scalable and type-safe business logic, ensuring reliability and maintainability through TypeScript's strong typing features.
                      </p>
                  </li>
                </ul>

              </div>

            </div>



            {/* GTT */}
            <div className="flex">
              
              <p className="w-9 text-purple-heart-500 self-start sticky top-20 text-sm">May 2022</p>
              
              <div className="ml-5 sm:ml-10 relative border-l-2 border-purple-heart-400">
                
                <ul className="ml-5 mb-4 sm:ml-10 before:content-[''] before:inline-block before:w-4 before:h-4 before:rounded-full before:absolute before:left-0 before:top-2 before:-translate-x-1/2 before:border-2 before:border-white before:bg-purple-heart-800">
                  {/* Header li element */}
                  <li>
                    <p className=" flex flex-wrap md:items-start lg:items-center text-lg font-bold mb-4">
                      <span className="dark:text-white text-nowrap">Software Engineer</span>
                      <span className="ml-1 font-normal text-purple-heart-900">@</span>
                      <span className="ml-1 text-purple-heart-500">Germantown Technologies</span>
                    </p>
                  </li>

                  <li className="flex gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3 text-base">Collaborated with team members to develop a large-scale health care web application using the MERN stack.</p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                      Utilized redux for state management and Redux Sagas to handle asynchronous events/side effects. Hands-on experience in RTK (React Tool Kit).
                      </p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Developed RESTful APIs using Node.js, Express framework and MongoDB.
                      </p>
                  </li>
                </ul>

              </div>

            </div>


            {/* Prematix */}
            <div className="flex">
              
              <p className="w-9 text-purple-heart-500 self-start sticky top-20 text-sm">July 2020</p>
              
              <div className="ml-5 sm:ml-10 relative border-l-2 border-purple-heart-400">
                
                <ul className="ml-5 mb-4 sm:ml-10 before:content-[''] before:inline-block before:w-4 before:h-4 before:rounded-full before:absolute before:left-0 before:top-2 before:-translate-x-1/2 before:border-2 before:border-white before:bg-purple-heart-800">
                  {/* Header li element */}
                  <li>
                    <p className=" flex flex-wrap md:items-start lg:items-center text-lg font-bold mb-4">
                      <span className="dark:text-white text-nowrap">Software Trainee</span>
                      <span className="ml-1 font-normal text-purple-heart-900">@</span>
                      <span className="ml-1 text-purple-heart-500">Prematix Software Solutions</span>
                    </p>
                  </li>

                  <li className="flex gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3 text-base">Involved designing web pages using HTML 5, CSS, Bootstrap</p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Developed SPA(Single Page Application) using ReactJS along with UI libraries like reactstrap, Antd, Material UI. 
                      </p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Integrated RESTful APIs with ReactJS for seamless data exchange between front-end and back-end systems. 
                      </p>
                  </li>
                  <li className="flex  gap-2 ml-2 sm:ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-purple-heart-800 shrink-0 mt-[6px]" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p className="text-purple-heart-800 dark:text-purple-heart-700 mb-3">
                        Implemented stable react form components to be added to any future pages.
                      </p>
                  </li>
                </ul>

              </div>

            </div>
            

          </div>



        </div>

      </section>

      {/* SECTION - PROJECTS */}
      <section className="w-full h-screen flex justify-center items-center py-20" id="projects">
        <div className="max-w-5xl container">
        <h3 className="text-4xl font-bold mb-10 dark:text-white">Some things I've built</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* PROJECT CARD */}
            <div className="will-change-transform rounded-lg group hover:-translate-y-2 hover:shadow-lg transition-transform duration-500 bg-purple-heart-300 flex flex-col min-h-80 justify-between px-3 py-5">

              <div className="flex justify-between">
                <svg className="size-12 text-purple-heart-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>

                <span className="my-auto">
                  {/* github-icon */}
                  <svg className="transition-transform hover:scale-105 cursor-pointer size-7 inline-block " stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  {/* arrow-icon */}
                  <svg className="transition-transform hover:scale-105 cursor-pointer size-7 inline-block ml-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </div>

              <article className="flex-auto mt-4">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-heart-800">Portfolio</h3>
                <p className=" text-purple-heart-800 dark:text-purple-heart-700">A single-page application where you can know more about me and my career.</p>
              </article>

              <div className="overflow-x-auto flex gap-2 w-full">
                <span className="whitespace-nowrap text-xs text-purple-heart-800 dark:text-purple-heart-700 ml-auto">React Js</span>
                <span className="whitespace-nowrap text-xs text-purple-heart-800 dark:text-purple-heart-700">Typescript</span>
                <span className="whitespace-nowrap text-xs text-purple-heart-800 dark:text-purple-heart-700">Tailwind CSS</span>
              </div>

            </div>
            
          </div>


        </div>
      </section>


      {/* SECTION -  GET IN TOUCH */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center py-20" id="contact">
        <div className="max-w-5xl container text-center mb-10 lg-mb-0">
          <h6 className="mb-1 text-lg text-purple-heart-500">What's Next?</h6>
          <h1 className="text-4xl font-bold mb-6 dark:text-white">Get In Touch</h1>
          <p className="m-auto max-w-xl text-xl text-purple-heart-800 dark:text-purple-heart-700">Currently, I'm looking forward to challenging opportunities and I'm open to your call! My mailbox always welcomes your interest. I’ll try my best to get back to you!</p>
          <button className="mt-7 text-lg rounded-full py-4 px-5 transition-all border border-black hover:bg-purple-heart-400 hover:text-white hover:border-white cursor-pointer font-semibold dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-purple-heart-400 dark:hover:border-black">
            Say Hello
          </button>
        </div>  
        <div className="absolute bottom-5 text-center text-sm text-purple-heart-700">
          <div className="inline-flex gap-3 lg:hidden mb-5">
            {/* github icon */}
            <div>
              <div key="email" className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
                  <span>
                    <svg className="size-6 text-purple-heart-900 dark:text-purple-heart-500" stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </span>
                  <span className="hidden lg:group-hover:inline-block dark:text-white">
                    GitHub
                  </span>      
              </div> 
            </div>
            {/* linkedln icon */}
            <div>
              <div key="phoneNo" className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
                  <span>
                    <svg className="size-6 text-purple-heart-900 dark:text-purple-heart-500" stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </span>
                    <span className="hidden lg:group-hover:inline-block dark:text-white">
                      Linkedln
                    </span>      
              </div> 
            </div>
            {/* Email */}
            <div>
              <div className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer flex-row-reverse hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
                  <span>
                    <svg  className="size-6 text-purple-heart-900 dark:text-purple-heart-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="hidden lg:group-hover:inline-block dark:text-white">
                    chidamanbu@gmail.com
                  </span>      
              </div> 
            </div>
            {/* Phone no */}
            <div>
              <div className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer flex-row-reverse hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-purple-heart-900 dark:text-purple-heart-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                    <span className="hidden lg:group-hover:inline-block dark:text-white">
                      +91 9444 999 468
                    </span>      
              </div> 
            </div>
          </div>
          <p>Designed by Chidam</p>
          <p className="inline-flex gap-1 items-center mt-1"><span>Built with</span>
            <span className="bg-purple-heart-700 rounded-full p-1">
              <svg className="size-3 text-purple-heart-100" stroke="currentColor"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="none"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
              </svg>
            </span>
          </p>
        </div>    
      </section>


      {/* FOOTER */}
      <div className="fixed bottom-0 left-3 hidden flex-col gap-3 lg:inline-flex">

        <div>
          <div key="email" className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
              <span>
                <svg className="size-6 text-purple-heart-900 dark:text-purple-heart-500" stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </span>
              <span className="hidden lg:group-hover:inline-block dark:text-white">
                GitHub
              </span>      
          </div> 
        </div>


        <div>
          <div key="phoneNo" className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
              <span>
                <svg className="size-6 text-purple-heart-900 dark:text-purple-heart-500" stroke="currentColor" fill="none" strokeWidth={1.5} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
                <span className="hidden lg:group-hover:inline-block dark:text-white">
                  Linkedln
                </span>      
          </div> 
        </div>

        <div className="border h-40 w-0 border-purple-heart-500 translate-x-5"></div>

      </div>

      <div className="fixed bottom-0 right-3 hidden flex-col gap-3 items-end lg:inline-flex">

        <div>
            <div className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer flex-row-reverse hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
                <span>
                  <svg  className="size-6 text-purple-heart-900 dark:text-purple-heart-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="hidden lg:group-hover:inline-block dark:text-white">
                  chidamanbu@gmail.com
                </span>      
            </div> 
        </div>


        <div>
          <div className="group border-2 border-purple-heart-500 rounded-full inline-flex p-2 gap-2  cursor-pointer flex-row-reverse hover:border-purple-heart-900 dark:hover:border-purple-heart-400">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-purple-heart-900 dark:text-purple-heart-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
                <span className="hidden lg:group-hover:inline-block dark:text-white">
                  +91 9444 999 468
                </span>      
          </div> 
        </div>

        <div className="border h-40 w-0 border-purple-heart-500 -translate-x-5"></div>

      </div>


    </div>
  );
}

export default App;
