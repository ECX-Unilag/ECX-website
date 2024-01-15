"use client"
import Image from "next/image";
import { Nunito } from "next/font/google";
import aboutStyles from './css/about.module.css';
import ImageCard from "./about-ecx/imageCard";
import Content from "./about-ecx/content"
import React, { useState } from "react";

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    style: "normal",
    adjustFontFallback: false
})

const AboutECX = () => {
    const[currentAboutSection, setCurrentAboutSection] = useState("aboutSection1")

    const handleNavigation = (aboutSection :string) => {
        setCurrentAboutSection(aboutSection)
    }

    return (
        <div className={aboutStyles.about_container}>
        <div className={aboutStyles.vector1}><Image src={"/about/vector1.svg"} alt={"vector"} width={202} height={202}/></div>
        <div className={aboutStyles.about}>
        <div className={aboutStyles.images_section}>
            {currentAboutSection === "aboutSection1" && <ImageCard color={"dart"} alt={"who-we-are"} image={"/about/aboutImg1.jpg"}/>}
            {currentAboutSection === "aboutSection2" && <ImageCard color={"swift"} alt={"mission"} image={"/about/aboutImg2.jpg"}/>}
            {currentAboutSection === "aboutSection3" && <ImageCard color={"ruby"} alt={"vision"} image={"/about/aboutImg3.jpg"}/>}
        </div>
        <div className={aboutStyles.about_2}>
            <h2 className={aboutStyles.about_title}>About ECX</h2>
            <nav className={aboutStyles.nav_buttons}>
                <button className={`${aboutStyles.nav_button} ${(currentAboutSection === "aboutSection1") ? aboutStyles.button_dart : ""}`} onClick={() => handleNavigation("aboutSection1")}>Who we are </button>
                <button className={`${aboutStyles.nav_button} ${(currentAboutSection === "aboutSection2") ? aboutStyles.button_swift : ""}`} onClick={() => handleNavigation("aboutSection2")}>Mission</button>
                <button className={`${aboutStyles.nav_button} ${(currentAboutSection === "aboutSection3") ? aboutStyles.button_ruby : ""}`} onClick={() => handleNavigation("aboutSection3")}>Vision</button>
            </nav>
        <div>
            {currentAboutSection === "aboutSection1" && <Content text={"Engineering Career Expo (ECX) was established in 2019 by the University of Lagos Engineering Society (ULES), the primary student body of the Faculty of Engineering with the aim of empowering, training and mentoring students with skills for the outside world."}/>}
            {currentAboutSection === "aboutSection2" && <Content text={"We provide students with technical and soft skills training through live classes, interactive sessions, conferences, challenges, coding sprints, hackathons, and so much more."}/>}
            {currentAboutSection === "aboutSection3" && <Content text={"To develop student potentials by equipping them with the skills and knowledge required to ensure a smooth transition from the classroom to the industry."}/>}
        </div>
        </div>
        </div>
        <div className={aboutStyles.vector2}><Image src={"/about/vector2.svg"} alt={"vector"} width={202} height={202}/></div>
    </div>
    )
}

export default AboutECX;

         