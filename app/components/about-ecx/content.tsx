import React from "react";
import styles from "./imageCard.module.css"

interface contents{
    text: string
}
const Content = ({text}: contents) => {
    return(
       <div className={styles.text_container}>
        <p className={styles.text}>{text}</p>
       </div>
    )
}

export default Content