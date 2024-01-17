"use client"
import React, {useState} from "react"
import Image from "next/image"
import SkillCard from "./trainings/skillCard"
import styles from "./css/trainingskill.module.css"
import Trainings from "./trainings/trainings.json"


const TrainingSkills = () => {
    const [trainings] = useState(Trainings)
    const [currentSkillSection, setCurrentSkillSection] = useState("tech_skills")

    const handleNavigation = (skillSection : string) => {
        setCurrentSkillSection(skillSection)
    }
    return(
        <div className={styles.training_skills}>
			<div className={styles.vector_ctn}>
				<Image src={"/about/vector3.svg"} alt={"vector"} fill />
			</div>
			<h2 className={styles.training_title}>Training Tracks</h2>
			<nav className={styles.training_nav}>
				<button
					className={`${styles.training_nav_btn} ${(currentSkillSection === "tech_skills") && styles.btn_active}`}
					onClick={() => handleNavigation("tech_skills")}
				>
					Technical Skill
				</button>
				<button
					className={`${styles.training_nav_btn} ${(currentSkillSection === "soft_skills") && styles.btn_active}`}
					onClick={() => handleNavigation("soft_skills")}
				>
					Soft Skill
				</button>
			</nav>
			<div className={styles.skills_ctn}>
				{currentSkillSection === "tech_skills" && trainings
					.filter((training) => training.isTechSkill)
					.map((training, index) => (
						<SkillCard key={index} {...training} />
					))
				}
				{currentSkillSection === "soft_skills" && trainings
					.filter((training) => !(training.isTechSkill))
					.map((training, index) => (
						<SkillCard key={index} {...training} />
					))
				}
			</div>
        </div>
    )
}

export default TrainingSkills