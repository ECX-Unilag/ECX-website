"use client"
import React, {useState} from "react"
import Image from "next/image"
import SkillCard from "./trainings/skillCard"
import styles from "./css/trainingskill.module.css"
import Trainings from "./trainings/trainings.json"


const TrainingSkills = () => {
    const [trainings] = useState(Trainings)
    const [currentSkillSection, setCurrentSkillSection] = useState("skillSection1")

    const handleNavigation = (skillSection : string) => {
        setCurrentSkillSection(skillSection)
    }
    return(
        <div className={styles.training_whole}>
            <div className={styles.vector3}><Image src={"/about/vector3.svg"} alt={"vector3"} width={202} height={202} /></div>
        <div className={styles.training_container}>
            <div>
                <h2 className={styles.training_title}>Training Tracks</h2>
            </div>
            <div className={styles.button_container}>
                <button className={`${styles.nav_button} ${(currentSkillSection === "skillSection1") ? styles.button : ""}`} onClick={() => handleNavigation("skillSection1")}>Technical Skill</button>
                <button className={`${styles.nav_button} ${(currentSkillSection === "skillSection2") ? styles.button : ""}`} onClick={() => handleNavigation("skillSection2")}>   Soft Skill   </button>
            </div>
            <div>
            {/* <div  className={styles.skills_arrangement}> */}
                {currentSkillSection === "skillSection1"  &&
            <div className={styles.skills_container}>
                {trainings.map((training) => {
                    if(training.isTechSkill) return <SkillCard {...training} key={training.text}/>
                })}
            </div>
        }
        {/* </div> */}
            {currentSkillSection === "skillSection2" &&
            <div className={styles.skills_container}>
               {trainings.map((training) => {
                    if(!training.isTechSkill) return <SkillCard {...training} key={training.text}/>
                })}
            </div>
            }
            </div>
        </div>
        </div>
    )
}

export default TrainingSkills