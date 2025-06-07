import React from "react";
import Card from "./Card/Card";
import blog from "../assets/ImgResources/blog.jpg";
import currency from '../assets/ImgResources/currencyConverter.jpg'
import edu from '../assets/ImgResources/edu.jpeg'
import profile from '../assets/ImgResources/profile.png'
import vote from '../assets/ImgResources/vote.png'
import dropbox from '../assets/ImgResources/dropbox.png'
import crowd  from '../assets/ImgResources/Crowd.jpg'

function Projects() {
  return (
    <div className="flex-col bg-slate-50 dark:bg-slate-900  max-w-full max-h-full my-0 animate-slideUp">
      <div className="flex lg:font-light text-3xl font-bold  lg:text-5xl lg:ml-40 py-5 ml-5  lg:py-16 font-roboto dark:text-slate-100  text-gray-900">
        {" "}
        Projects
      </div>
      <div>
      <div className="flex items-center justify-center pb-5 mb-7">
        <Card
          title="Personal Portfolio"
          pic={profile}
          link="https://github.com/taruntiwari08/Portfolio"
          content="A living showcase of my skills and experience, this portfolio is a reflection of my ongoing journey in the world of web development. Here, you'll find a selection of my most recent and notable projects, highlighting my expertise in frontend, backend,blockchain and full-stack development. Each project is a testament to my dedication to delivering cutting-edge solutions. "
          deployLink='/'
        />
      </div> 

      <div className="flex items-center justify-center pb-5 mb-7">
        <Card
          title="Currency Converter"
          pic={currency}
          link="https://github.com/taruntiwari08/Currency-Converter"
          content="A sleek web app built with React.js and Tailwind CSS for a smooth, intuitive user experience. Convert between currencies effortlessly with real-time exchange rates, powered by reliable APIs. Streamlined design and responsive layout ensure seamless usage across devices. Start converting currencies hassle-free today!"
          deployLink='https://currency-converter-coral-five.vercel.app/'
        />
      </div>

      <div className="flex items-center justify-center pb-5 mb-7">
        <Card
          title="Edu Skills (Fully Responsive)"
          pic={edu}
          link="https://github.com/taruntiwari08/Megablog/tree/main"
          content="This application features a fully responsive user interface for an educational site, ensuring an optimal experience across all devices. Built with modern web technologies such as HTML, Tailwind CSS, and JavaScript, the design is both sleek and scalable. Key functionalities include user signup and login forms with dynamic state changes, providing a seamless and interactive user experience."
          deployLink='https://edu-skills-qegqskaha-tarun-tiwaris-projects-d17ea02d.vercel.app/'
        />
      </div>

      </div>
    </div>
  );
}

export default Projects;
