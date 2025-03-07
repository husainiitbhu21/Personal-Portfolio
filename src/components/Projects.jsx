import Project_prop from "./Project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
  Metro,
  Photoeditor,
  Bitcoin
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="MetroRoute"
            para="A web application to help you with your metro journey"
            img={Metro}
            link="https://www.youtube.com/watch?v=0kwI66hPsqo"
            github_link="https://github.com/husainiitbhu21/Metro-Route"
            techstack="Python, JavaScript, Flask, SQL, SQLite, HTML/CSS, Backend Development"
          />
          <Project_prop
            title="Fauxtoshop"
            para="A console-based advanced photo editor application"
            img={Photoeditor}
            link="https://www.youtube.com/watch?v=GWV4W_gEXoQ"
            github_link="https://github.com/husainiitbhu21/CS106X/tree/master/Assignment%201/Fauxtoshop"
            techstack="C++, GUI Libraries, Object Oriented Design, Application Development"
          />
          <Project_prop
            title="CoinVerse"
            para="A cryptocurrency exchange that allows users to register, authenticate, trade cryptocurrencies, and visualize real-time chart data"
            img={Bitcoin}
            link=""
            github_link="https://github.com/husainiitbhu21/CoinVerse"
            techstack="Go, Object Oriented Design, Blockchain Development, Backend Development"
          />
          <Project_prop
            title="StockVista"
            para="Frontend of the website for investing in the stock market"
            img={GPT4}
            link=""
            github_link="https://github.com/husainiitbhu21/StockVista-frontend"
            techstack="JavaScript, TypeScript, React JS, Redux, Chart.js, Tailwind CSS, Frontend Development"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
