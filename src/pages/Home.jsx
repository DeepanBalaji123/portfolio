import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* Left Content */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello,
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <TypeAnimation
                sequence={["I am Deepanbalaji S.", 2000, "CEG '27", 2000, "Tech Enthusiast", 2000]}
                speed={40}
                style={{ fontWeight: 700 }}
                repeat={Infinity}
              />
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5 leading-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology and continuous learning, I specialize in
            full-stack web development with strong foundations in Java, DBMS, C, C++,etc,.
            <br /><br />
            Currently, I am learning Japanese and preparing for the JLPT
            examination, with the goal of building my career in Japan and
            contributing to impactful projects in the global tech industry.
            <br /><br />
            I focus on building innovative and efficient solutions while
            constantly improving my technical skills. Alongside development,
            I also have experience in photo/video editing and content creation,
            blending creativity with technology.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
              href="mailto:deepanbalajis21112004@gmail.com"
              aria-label="Send email"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/deepanbalaji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>

            {/* Fixed: was IoLogoTwitter icon pointing to Instagram URL */}
            <motion.a
              href="https://www.instagram.com/mr.jinx____/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoInstagram className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/DeepanBalaji123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
            >
              <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
