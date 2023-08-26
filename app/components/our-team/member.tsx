import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import styles from './css/member.module.css';
interface member {
    isChair: boolean;
    serial: number;
    team: string;
    image: string;
    fullName: string;
    title: string;
    color: string;
}

const dmSans = DM_Sans({
    weight: "500",
    subsets: ["latin"]
})

const MemberCard  = ({ isChair, serial, team, image, fullName, title, color }:member) => {
    return (
        <div className={styles.member_card}>
            <h3>{ team }</h3>
            <div className={styles.image_container}>
                <div className={styles.image}>
                    <div
                        className={`
                            ${styles.sn} ${dmSans.className}
                            ${(color === "blue") ? styles.blue : null}
                            ${(color === "yellow") ? styles.yellow : null}
                            ${(color === "red") ? styles.red : null}
                        `}
                    >
                        { serial }
                    </div>
                    <Image src={image} alt={`${fullName}`} width={230} height={172} />
                </div>
                <div className={`${styles.lead_name} ${isChair ? styles.center : null}`}>
                    <h4>{ fullName }</h4>
                    {title ? <h5>{ title }</h5> : null}
                </div>
            </div>
        </div>
    )
}
export default MemberCard;
