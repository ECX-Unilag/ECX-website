import Link from "next/link";
import AchievementStyles from './css/achievements.module.css';

const Achievements = () => {
    return (
        <section className={AchievementStyles.achievements}>
            <div>
                <div className={AchievementStyles.achievements_head}>
                    <h2>Our Achievements</h2>
                    <p>A measure of our growth over the years</p>
                </div>
                <ul className={AchievementStyles.achievements_list}>
                    <li className={AchievementStyles.achievements_item}>
                        <h3>Registered</h3>
                        <p>6700+</p>
                    </li>
                    <li className={AchievementStyles.achievements_item}>
                        <h3>Trained</h3>
                        <p>2300+</p>
                    </li>
                    <li className={AchievementStyles.achievements_item}>
                        <h3>Certified</h3>
                        <p>900+</p>
                    </li>
                </ul>
            </div>
            <Link href="#" className={AchievementStyles.stats}>
                <span>Read our stats</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="8" viewBox="0 0 17 8" fill="none">
                    <path d="M12.51 3H0.5V5H12.51V8L16.5 4L12.51 0V3Z" fill="#4284F7"/>
                </svg>
            </Link>
        </section>
    )
}
export default Achievements;
