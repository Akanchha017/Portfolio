import React from "react";

function Resume() {
  return (
    <div className="flex-col bg-slate-50 max-w-full max-h-full my-0 animate-slideUp  dark:bg-slate-900 ">
      <div className="flex lg:font-light text-3xl font-bold dark:text-slate-200  lg:text-5xl lg:ml-32 py-5 ml-5  lg:py-16 font-roboto text-gray-900">
        {" "}
        Resume
      </div>
      <label htmlFor="Experience ">
        <div className="flex lg:justify-between flex-wrap lg:flex-row flex-col lg:px-12   ">
          <div className="flex font-semibold text-xl lg:text-3xl pr-52 py-3 ml-5 lg:ml-24  lg:py-1 font-roboto dark:text-gray-200 text-gray-900">
            Experience
          </div>

          <div className="lg:flex-row flex-col lg:space-y-12 space-y-4  ml-5 lg:ml-20">
            <div className="lg:bg-slate-50  dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg ">
              <div className="flex lg:flex-row flex-col  ">

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    <a href="#" className="hover:underline">
                    Frontend Developer Intern | To Let Globe 
                    </a>
                    <br />
                    <div className="font-roboto font-light lg:text-base text-sm lg:px-6 my-1 italic ">
                  (Aug 2024 - Oct 2024)
                </div>
                  </span>
                  <div className="lg:mt-[-15px]">
                  <ul className="space-y-2  lg:px-6">
                    <li className="font-roboto font-light py-1 lg:text-sm text-xs">
                      {" "}
                      ✦ Collaborated with designers and backend developers to ensure seamless integration and user experience.
                    </li>
                    <li className="font-roboto font-light lg:text-sm text-xs py-1">
                      {" "}
                      ✦ Maintained and enhanced the company website by creating new features and optimizing performance.
                    </li>
                    <li className="font-roboto font-light py-1 lg:text-sm text-xs">
                      {" "}
                      ✦ Debugged and resolved UI issues, improving website functionality and user satisfaction.
                    </li>
                    <li className="font-roboto font-light  lg:text-sm text-xs py-1">
                      {" "}
                      ✦ Developed and implemented reusable, responsive, and modular UI components.
                    </li>
                  </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>

      <hr className="border-gray-600 lg:m-16 lg:flex hidden " />

      <label htmlFor="Skills & Expertise">
        <div className="flex lg:justify-between lg:flex-row flex-col lg:ml-40  ">
          <div className="flex font-semibold text-xl  lg:text-3xl lg:-ml-[20px] ml-5 py-3  font-roboto text-gray-900">
            <div className="flex lg:flex-col flex-row lg:mr-12 mt-3 dark:text-gray-200">
              <span> Skills </span> <span class="p-1"></span>{" "}
              <span> & Expertise</span>{" "}
            </div>
          </div>

          <div className="lg:flex flex-col lg:space-y-4 lg:ml-32  ">
            <div className="lg:flex lg:space-x-24"> 
            <div className="lg:flex-col">
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                Computer languages |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ C++</li>
                    <li>✦ Python</li>
                    <li>✦ HTML</li>
                    <li>✦ CSS</li>
                    <li>✦ Javascript</li>
                    <li>✦ Solidity</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 lg:my-0 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Frameworks and Libraries |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ ReactJs</li>
                    <li>✦ NodeJs</li>
                    <li>✦ ExpressJs</li>
                    <li>✦ Redux</li>
                    <li>✦ Tailwind CSS</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 lg:my-0 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Blockchain Development Tools |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ Smart Contracts</li>
                    <li>✦ Truffle</li>
                    <li>✦ Ganache</li>
                    <li>✦ EtherJs</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            </div>

            <div className="lg:flex-col">
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 lg:my-0 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Databases |
                <br />
                <div className=" font-roboto dark:bg-slate-900 dark:text-gray-300 font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ MongoDB</li>
                    <li>✦ MySQL </li>
                    <li>✦ InterPlanetary File System(IPFS)</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 lg:my-0 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Version Control and Collaboration |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ Git</li>
                    <li>✦ GitHub </li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] mx-5 lg:mr-5 my-3 lg:shadow-none shadow-lg">
              <div className=" font-roboto font-semibold lg:text-xl text-base  py-2  ">
                {" "}
                Languages Known |
                <br />
                <div className=" font-roboto font-light lg:text-base text-xs lg:py-4 py-1  italic">
                  <ul className="space-y-2">
                    <li>✦ English</li>
                    <li>✦ Hindi</li>
                  </ul>
                </div>
                <br />
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </label>
      <hr className="border-gray-600 lg:m-16 lg:flex hidden " />
      <label htmlFor="Education">
        <div className="flex lg:justify-evenly flex-wrap lg:flex-row flex-col ">
          <div className="flex font-semibold text-xl lg:text-3xl pr-52 py-3 ml-5 lg:ml-9  lg:py-1 font-roboto dark:text-gray-200 text-gray-900">
            Education
          </div>

          <div className="lg:flex-row flex-col lg:space-y-12 space-y-4   ml-5">
            <div className="lg:bg-slate-50 dark:bg-slate-900 dark:text-gray-300 bg-slate-100 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg ">
              <div className="flex lg:flex-row flex-col  ">
                <span className="font-roboto font-light lg:text-base text-sm lg:px-14 my-1">
                  2022 - 2026
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    Madhav Institute of Technology & Science, Gwalior (M.P) |
                    <br />
                    <span className=" font-roboto font-light lg:text-base test-sm lg:py-14 lg:px-6  italic">
                      {" "}
                      Btech in Artificial Intelligence & Robotics
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs lg:py-14 lg:px-6  italic">
                      {" "}
                      CGPA : 8
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:bg-slate-50 bg-slate-100 dark:bg-slate-900 dark:text-gray-300 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg">
              <div className="flex lg:flex-row flex-col  ">
                <span className="font-roboto font-light lg:text-base text-sm lg:px-14 my-1">
                  2021 - 2022
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    Kendriya Vidyalaya No.4, AFS Mahrajpura, Gwalior |
                    <br />
                    <span className=" font-roboto font-light lg:text-base test-sm lg:py-14 lg:px-6  italic">
                      {" "}
                      Higher Secondary Education ( 12th Grad )
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs lg:py-14 lg:px-6  italic">
                      {" "}
                      Percentage : 90% ( CBSE Board )
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:bg-slate-50 bg-slate-100 dark:bg-slate-900 dark:text-gray-300 rounded-lg px-1 lg:w-auto w-[320px] pb-2  lg:shadow-none shadow-lg ">
              <div className="flex lg:flex-row flex-col  ">
                <span className="font-roboto font-light lg:text-base text-sm lg:px-14 my-1">
                  2019 - 2020
                </span>

                <div className="flex-col">
                  <span className=" font-roboto font-semibold lg:text-xl text-base lg:py-5 lg:px-6 ">
                    {" "}
                    Kendriya Vidyalaya No.4, AFS Mahrajpura, Gwalior |
                    <br />
                    <span className=" font-roboto font-light lg:text-base test-sm lg:py-14 lg:px-6  italic">
                      {" "}
                      Secondary Education ( 10th Grade )
                    </span>
                    <br />
                    <span className=" font-roboto font-extralight text-xs lg:py-14 lg:px-6  italic">
                      {" "}
                      Percentage : 88% ( CBSE Board )
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
      <hr className="border-gray-600 lg:m-16 lg:flex hidden " />


      <div className="flex items-center justify-center p-4 ">
        <a href='/Resume.pdf' download="Akanchha_jadon_Resume.pdf" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
           Download Full Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
