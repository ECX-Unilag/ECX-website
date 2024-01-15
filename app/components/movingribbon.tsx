import React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee";
import styles from "./css/movingribbon.module.css"

const MovingRibbon = () => {
    return(
        <div  className={styles.ribbon_container}>
            <div className={styles.ribbon}>
          <Marquee>
            <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
            </div>
            <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           <div className={styles.ribbon_item}>
                <p className={styles.ribbon_text}>ECX 4.0</p>
                <Image src={"/icons/noto_confetti-ball.svg"} alt={"celebration"} width={24} height={24} className={styles.ribbon_image} />
           </div>
           </Marquee>  
           </div>
            </div>
    )
}

export default MovingRibbon;