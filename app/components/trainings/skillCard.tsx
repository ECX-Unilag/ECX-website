import Image from 'next/image';
import styles from "./skillCard.module.css"

interface skills{
    isTechSkill: boolean;
    text: string;
    image: string;
}

const SkillCard = ({text, image, isTechSkill}: skills) => {
    return(
        <div>
        <div className={styles.image_container}>
           <Image src={image} alt={`${text}`} width={244} height={202} className={styles.image}/>
            <div className={styles.backdrop}>
            <p className={styles.text}>{text}</p>  </div>
        </div>
       </div>
    )
}

export default SkillCard