"use client"

import { Rotate3D } from "lucide-react";
import {animate, motion, scale} from "motion/react";
import ContactPopover from "@/components/popover/contact-popover";
import DirectMessagePopover from "@/components/popover/direct-message-popover"
import DownloadCVPopover from "@/components/popover/download-cv-popover";


interface HeaderProps {
  activeSection: "landing" | "academia" | "projects" | "blogOut"
  onSectionChange: (section: "landing" | "academia" | "projects" | "blogOut") => void
}


export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <motion.div 
        whileHover= {{scale : 1.3}}
        onClick={() => onSectionChange("landing")}
        className="flex items-center ">
        <img src="/ClubLogo.png"
          alt="Logo"
          className="size-10 translate-x-[-0.5px] text-white"
          width={40}
          height={40}
          draggable={false}
        />
      </motion.div>

      {/* Navigation */}

      

      <nav className="flex items-center space-x-2">
        <button
          onClick={() => onSectionChange("academia")}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Academia
        </button>
        <button
          onClick={() => onSectionChange("projects")}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Projects
        </button>
        <button
          onClick={() => onSectionChange("blogOut")}
          className="text-white/80 
          hover:text-white 
          text-xs 
          font-light 
          px-3 py-2 
          rounded-full 
          hover:bg-white/10 
          transition-all 
          duration-200"
        >
          Blog out
        </button>
      </nav>

      {/* Button Group with Arrow */}
      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        
          <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-27 z-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
            Contact Me
          </button>
        </div>

        <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <DirectMessagePopover>
          <motion.button
            whileHover={{ x: -5 }}
            className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-27 z-0"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.button>
        </DirectMessagePopover>
        <ContactPopover>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
          >
            Contact Me
          </motion.button>
        </ContactPopover>
        <DownloadCVPopover>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
          >
            Download CV
          </motion.button>
        </DownloadCVPopover>
      </div>
    </header>
  )
}

