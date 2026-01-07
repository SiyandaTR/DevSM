"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
// import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"


// export default function ShaderShowcase() {
//   const [activeSection, setActiveSection] = useState<
//     "landing" | "academia" | "projects" | "blogOut"
//   >("landing")


export default function ShaderShowcase() {
  const [activeSection, setActiveSection] = useState<"landing"|"academia"|"projects"|"blogOut">("landing")
  return (
    <ShaderBackground>
      <Header 
      activeSection={activeSection} 
      onSectionChange={setActiveSection} />

      {/* Dynamic content sections with Framer Motion animations */}
      <HeroContent 
      activeSection={activeSection} />
      
      
      {/* <PulsingCircle /> */}
    </ShaderBackground>
  )
}
