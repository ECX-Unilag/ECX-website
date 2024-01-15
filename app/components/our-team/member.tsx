import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import styles from './css/member.module.css';
// interface member {
//     isChair: boolean;
//     serial: number;
//     team: string;
//     image: string;
//     fullName: string;
//     title: string;
//     color: string;
// }

interface props {
    expand: boolean;
}

const dmSans = DM_Sans({
    weight: "500",
    subsets: ["latin"]
})

const MemberCard  = ({ expand }: props ) => {
    return (
        <div className={`${styles.member_card} ${expand ? styles.expand : ''}` }>
            <img src='/our-team/ifihan-oluseye.png' alt='photo' className={styles.member_image} />
            <div className={styles.member_content}>
                <h3>Ifihan Olusheye</h3>
                <h4>Chairperson</h4>
            </div>
        </div>
    )
}
export default MemberCard;
