"use client"

import { motion , AnimatePresence } from "motion/react"
import { act } from "react"

interface ContentSectionsProps {
  activeSection: "landing" | "academia" | "projects" | "blogOut"
}

export default function HeroContent({activeSection}: ContentSectionsProps) {

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <main className="absolute bottom-2 left-8 z-60 max-w-2xl">
      <AnimatePresence mode="wait">
        {activeSection === "landing" && (
          <motion.div>
            <div className="text-left">



              <div 
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">✨ Powered By AI </span>
              </div>

              {/* Main Heading */}
        
              <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">DevSM </span>, SIYA
          <br />
          <span className="font-light tracking-tight text-white">Software Developer</span>
              </h1>

              {/* Description */}
              <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
        I’m a developer who enjoys turning ideas into clear, reliable, and well-crafted digital experiences. I care deeply about clean design, thoughtful engineering, and building things that actually work for real people.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Projects
          </button>
          <a 
            href="https://github.com/SiyandaTR"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer inline-flex items-center justify-center"
          >
            GitHub
          </a>
              </div>


            </div>
          </motion.div>
        )}

        {activeSection === "academia" && (
          <motion.div>
            <h1 className="text-4xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
              <span className="text-right-2 font-medium italic instrument">Durban Univercity of Tecnology </span>, Information Communications Tecnhology 
                <br />
              <span className="font-light tracking-tight text-white">in Application Devlopment</span>
            </h1>
            <p className="text-xs font-light text-white/70 mb-4 leading-tight">
            Hi there! I am a Software Developer with 3 years studying in Durban University of Technology. I have a strong skill in Programming and Problem-solving skills and am passionate about using my skills to help and contribute to body of work to achieve goals.

            The past 3 year of learning, I have had the opportunity to work on projects in teams, in aims of making industry Web applications, and other variety project using C# in ASP.Net. I am skilled in JavaScript, Next.Js and
            Tailwindcss. And I enjoy collaborating with teams to find creative solutions to challenges.

            I enjoy playing video games on my spear time and have grown to have interest in awesome mod development communities online. Feel free to connect with me on LinkedIn to discuss potential collaborations. I look forward to connecting with you!
            </p>
            <br/>
            <p className="text-xs font-light text-white/70 mb-4 leading-tight">
            Hi there! I am a Software Developer with 3 years studying in Durban University of Technology. I have a strong skill in Programming and Problem-solving skills and am passionate about using my skills to help and contribute to body of work to achieve goals.
            </p>
            
          </motion.div>
        )}

        {activeSection === "projects" && (
          <motion.div>
            <div> Send Help</div>
          </motion.div>
        )}  

        {activeSection === "blogOut" && (
          <motion.div>
            <div>Pls ;)</div>
          </motion.div>
        )}

        
      </AnimatePresence>
    </main>
  )
}
