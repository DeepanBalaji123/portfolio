import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Education() {
  const [education] = useState([
    {
      id: 1,
      degree: "Higher Secondary Education (CBSE)",
      institution: "VETRI VIKAAS PUBLIC SCHOOL (CBSE)",
      duration: "2022",
      grade: "Percentage - 80.4%",
    },
    {
      id: 2,
      degree: "Diploma in Engineering",
      institution: "MUTHAYAMMAL POLYTECHNIC COLLEGE",
      duration: "2022 - 2024",
      grade: "Percentage - 99.2%",
    },
    {
      id: 3,
      degree: "B.E. Computer Science and Engineering",
      institution: "ANNA UNIVERSITY, CHENNAI",
      duration: "2024 - 2027",
      grade: "CGPA - 7.5",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16 py-10" id="education">
      <div className="px-5 lg:px-28">
        <motion.h2 className="text-2xl lg:text-4xl text-center">
          My <span className="font-extrabold">Education</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg mt-7 lg:mt-16 w-full place-items-stretch">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
              viewport={{ once: true }}
              className="bg-white border-2 hover:bg-black hover:text-white text-black transition-all cursor-pointer border-black rounded p-6 flex flex-col justify-between gap-5 shadow-sm"
            >
              <div>
                <h3 className="font-extrabold text-xl tracking-tight leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm mt-3 font-semibold tracking-wide uppercase opacity-80">
                  {edu.institution}
                </p>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm border-t pt-4 border-current transition-colors duration-200">
                <span className="font-medium">({edu.duration})</span>
                <span className="font-bold border border-current px-2.5 py-1 rounded bg-black text-white text-xs uppercase">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
