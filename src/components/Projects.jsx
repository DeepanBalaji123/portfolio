import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "BenkyoBox-勉強",
    description: "BenkyoBox (from the Japanese word 勉強 benkyō, meaning \"to study\") is a modern, interactive web application built using Next.js, React, and Tailwind CSS designed to help users study and master the Japanese language.",
    image: "/assets/benkyobox.png",
    link: "https://benkyo-box-japanese-app.vercel.app",
  },

   {
    id: 2,
    title: "Offline Tanglish-to-Tamil Transliteration",
    description: "Built an offline-first application that converts Tanglish text into  Tamil script in real time. Added fuzzy matching to handle different phonetic spellings and used local storage to support offline usage ",
    image: "/assets/tanglishtotamil.png",
    link: " https://tanglish-to-tamil.netlify.app",
  },

     {
    id: 3,
    title: "Offline Multi-Hop P2P Communication System",
    description: "Developed a decentralized MANET-based P2P messaging system enabling infrastructure-less communication across 10+ nodes using multi-hop routing.Implemented adaptive routing and fault-tolerant communication logic to handle node mobility and link failures ensuring reliable delivery under 30% network disconnections.",
    image: "/assets/meshrabiya.png",
    
  },
  
   {
    id: 4,
    title: "Tamil 1mark-2mark answer evaluation system",
    description: "Developed an automated web application to streamline exam grading from uploaded image scripts, mitigating human subjectivity and grading delays.Integrated the Google Gemini API to perform highly accurate Optical Character Recognition (OCR), extracting structured text from handwritten and printed answer sheets.",
    image: "/assets/tamil 1mark-2mark.png",
    link: "https://tamil-1mark-2mark-answer-evaluation.onrender.com",
  },
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>
      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>
              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">{project.description}</p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
