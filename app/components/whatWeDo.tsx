import Image from "next/image";
import WWDStyles from './css/whatWeDo.module.css';

const WhatWeDo = () => {
    return (
        <section id="programs" className={WWDStyles.wwdSection}>
            <div className={WWDStyles.brief_info}>
                <h2>What We do</h2>
                <p>
                    We provide students with technical and soft skills training
                    through live classes, interactive sessions, conferences,
                    challenges, coding sprints, hackathons, and so much more.
                </p>
            </div>
            <div className={WWDStyles.container}>
                <h3>Trainings</h3>
                <div className={WWDStyles.trainings_group}>
                    <div className={WWDStyles.wwd_card}>
                        <Image src="/note.png" alt="" width={64} height={64} />
                        <div className={WWDStyles.wwd_card_list}>
                            <h4>Technical Skills</h4>
                            <ul>
                                <li>Python</li>
                                <li>UI/UX Design</li>
                                <li>Data Analytics</li>
                                <li>Game Development</li>
                                <li>Mobile Development</li>
                                <li>3D Modeling & Animation</li>
                                <li>Back-End Web Development</li>
                                <li>Front-End Web Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className={WWDStyles.wwd_card}>
                        <Image src="/bookmark.png" alt="" width={64} height={64} />
                        <div className={WWDStyles.wwd_card_list}>
                            <h4>Soft Skills</h4>
                            <ul>
                                <li>Time Management</li>
                                <li>LinkedIn Leveraging</li>
                                <li>Resume & CV Writing</li>
                                <li>Communication & Teamwork</li>
                                <li>Leadership & Critical Thinking</li>
                                <li>Public Speaking & Presentation</li>
                                <li>Negotiation & Conflict Resolution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={WWDStyles.container}>
                <h3>Other programs</h3>
                <ul className={WWDStyles.WWD_others_group}>
                    <li className={WWDStyles.wwd_card}>30 Days of Code &amp; Design</li>
                    <li className={WWDStyles.wwd_card}>Internships</li>
                    <li className={WWDStyles.wwd_card}>Hackathon</li>
                </ul>
            </div>
        </section>
    )
}
export default WhatWeDo;
