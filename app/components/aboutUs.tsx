"use client"
import Image from "next/image";
import aboutStyles from './css/about.module.css';
import ImageCard from "./about-ecx/imageCard";
import React, { SyntheticEvent, useState } from "react";


const AboutECX = () => {
  const [currentAboutSection, setCurrentAboutSection] = useState("who-we-are")

  const handleNavigation = (event: SyntheticEvent) => {
    const target = event.target as HTMLButtonElement
    const content = target.innerHTML.toLocaleLowerCase().replaceAll(" ", "-")
    setCurrentAboutSection(content)
  }

  return (
    <div className={aboutStyles.about}>
      <ImageCard color={
        currentAboutSection === "who-we-are" ? "dart" :
        currentAboutSection === "mission" ? "swift" : "ruby"
      }>
        <Image
          fill
          alt={
            currentAboutSection === "who-we-are" ? "who-we-are" :
            currentAboutSection === "mission" ? "mission" : "vision"
          }
          src={
            currentAboutSection === "who-we-are" ? "/about/who-we-are.jpg" :
            currentAboutSection === "mission" ? "/about/mission.jpg" : "/about/vision.jpg"
          }
        />
      </ImageCard>
      <div className={aboutStyles.about_content_ctn}>
        <h2 className={aboutStyles.about_title}>About ECX</h2>
        <nav className={`${aboutStyles.about_nav} ${aboutStyles[currentAboutSection]}`}>
          <button
            className={currentAboutSection==="aboutSection1"?aboutStyles.button_dart:""}
            onClick={handleNavigation}
          >
            Who we are
          </button>
          <button
            className={(currentAboutSection === "aboutSection2")?aboutStyles.button_swift:""}
            onClick={handleNavigation}
          >
            Mission
          </button>
          <button
            className={(currentAboutSection === "aboutSection3")?aboutStyles.button_ruby:""}
            onClick={handleNavigation}
          >
            Vision
          </button>
        </nav>
        <p className={aboutStyles.paragraph}>
          {currentAboutSection === "who-we-are" && 
            "Engineering Career Expo (ECX) was established in 2019 by the University of Lagos Engineering Society (ULES), the primary student body of the Faculty of Engineering with the aim of empowering, training and mentoring students with skills for the outside world."
          }
          {currentAboutSection === "mission" && 
            "We provide students with technical and soft skills training through live classes, interactive sessions, conferences, challenges, coding sprints, hackathons, and so much more."
          }
          {currentAboutSection === "vision" && 
            "To develop student potentials by equipping them with the skills and knowledge required to ensure a smooth transition from the classroom to the industry."
          }
        </p>
      </div>

      <div className={`${aboutStyles.about_vector} ${aboutStyles.about_vector_ruby}`}>
        <Image
          src={"/about/vector-ruby.svg"}
          alt={"vector"}
          width={260}
          height={260}
        />
      </div>
      <div className={`${aboutStyles.about_vector} ${aboutStyles.about_vector_dart}`}>
        <Image
          src={"/about/vector-dart.svg"}
          alt={"vector"}
          width={260}
          height={260}
        />
      </div>
    </div>
  )
}

export default AboutECX;
