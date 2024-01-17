import Image from 'next/image';
import styles from "./imageCard.module.css"

interface aboutImage {
    image: string;
    color: string;
    alt: string
}

const ImageCard = ({ image, color, alt }:aboutImage) => {
    return (
        <div className={styles.image_container}>
            <div><Image src={image} alt={`${alt}`} width={396} height={481} className={styles.image}/>
            <div className={`${styles.bg} 
            ${(color === "dart") ? styles.bg_dart : null} 
            ${(color === "swift") ? styles.bg_swift : null}  
            ${(color === "ruby") ? styles.bg_ruby : null}
            `}
            ></div>
            <div className={`${styles.brdr}
            ${(color === "dart") ? styles.brdr_dart : null} 
            ${(color === "swift") ? styles.brdr_swift : null}  
            ${(color === "ruby") ? styles.brdr_ruby : null}
            `}></div>
            </div>
        </div>
    )
}

export default ImageCard;
