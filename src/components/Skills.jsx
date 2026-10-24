import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "Java" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "C++" },
    { id: 5, name: "SQL" },
    { id: 6, name: "React.js" },
    { id: 7, name: "Next.js" },
     { id: 7, name: "Node.js" },
      { id: 7, name: "HTML/CSS" },
       { id: 7, name: "Git/GitHub" },
        { id: 7, name: "DBMS" },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2 className="text-2xl lg:text-4xl text-center">
          My <span className="font-extrabold">Skills</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
            >
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
