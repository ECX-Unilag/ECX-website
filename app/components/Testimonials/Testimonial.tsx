import React from 'react'
import styles from './css/testimonials.module.css'

interface props {
  Bg: string
}

const Testimonial = ({Bg}:props) => {
  return (
    <div className={`${Bg} ${styles.BoxLayout}`}>
      <div className={styles.Box_UpperContentLayout}>
        <div>
          <img src='/our-team/ifihan-oluseye.png' alt='photo' className={styles.Box_Img}/>
        </div>
        <div>
          <h3 className={styles.Box_Name}>Azeem Lanre</h3>
          <p className={styles.Box_Role}>Web Developer</p>
        </div>
      </div>
      <p className={styles.Box_Para}>Lorem ipsum dolor sit amet consectetur. Morbi quis molestie mattis mattis ultrices ipsum. Lobortis euismod ultrices porta vitae risu</p>
    </div>
  )
}

export default Testimonial
