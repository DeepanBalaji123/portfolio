import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 mt-20 lg:mt-28 flex justify-between flex-col lg:flex-row"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
         Computer Science and Engineering undergraduate with a strong foundation in full-stack web development, data
        structures, and algorithms. Passionate about building scalable, secure web applications and leveraging emerging
        technologies to solve real-world problems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          In addition to my technical journey, I am currently learning Japanese
          and preparing for the JLPT examination, with a strong interest in
          expanding my global opportunities. My long-term goal is to build my
          career in Japan, contribute to innovative technology-driven
          environments, and grow both professionally and culturally in the
          international tech industry.
        </p>
      </motion.div>
    </div>
  );
}