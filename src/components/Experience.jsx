"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
  Swimlane,
  NTU,
  IITBHU,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Swimlane}
              title="Swimlane"
              subtitle="Software Engineer Intern"
              date="May 2024 - July 2024"
              para="- I was part of the core Turbine Cloud team in the engineering department and worked on both the backend and frontend. Built the Account Administration Portal, a powerful tool for overseeing and managing the entire Turbine Cloud platform, providing administrators with the control and visibility needed to ensure smooth operations within a specific region. Tech Stack: C#, SQL, .NET, Angular, PostgreSQL, MongoDB."
            />
            <Exp_prop
              img={NTU}
              title="Nanyang Technological University (NTU)"
              subtitle="MedEx"
              date="February 2023"
              para="- Participated in iNTUition 2023 hackathon physically at Nanyang Technological University, Singapore. This project was developed for MSD, a multinational pharmaceutical company. The app aims to reduce time browsing and consuming articles. Additionally, it serves as a one stop platform to generate slides and answer relevant questions thereafter. Tech Stack: Python, Flask, JavaScript, React JS."
            />
            <Exp_prop
              img={IITBHU}
              title="Indian Institute of Technology (IIT), Varanasi"
              subtitle="ML Research Intern"
              date="January 2023 - April 2023"
              para="- Build a model to predict phases and microstructures of alloys based on features like density, composition, enthalpy by using optimal Supervised Learning Algorithms i.e., Logistic Regression, Random Forest
 Classifier, etc. Tech Stack: Python, Pandas, NumPy, TensorFlow, Keras, Scikit-Learn, Machine Learning."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
