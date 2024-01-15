import React from 'react'
import styles from '@/app/components/css/community.module.css'

const Community = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Community</h2>
      <div className={styles.boxes_container}>
        <div className={`${styles.boxLayout} ${styles.boxBG_sponsor}`}>
          <h3>Sponsorship</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi quis molestie mattis mattis ultrices ipsum. Lobortis euismod ultrices porta vitae risu</p>
          <button className={`${styles.BtnLayout} ${styles.BtnBlue}`}>Sponsor</button>
        </div>
        <div className={`${styles.boxLayout} ${styles.boxBG_blog}`}>
          <h3>Blog</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi quis molestie mattis mattis ultrices ipsum. Lobortis euismod ultrices porta vitae risu</p>
          <button className={`${styles.BtnLayout} ${styles.BtnRed}`}>Read Now</button>
        </div>
        <div className={`${styles.boxLayout} ${styles.boxBG_sponsor} ${styles.box_center}`}>
          <h3>Chat series</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi quis molestie mattis mattis ultrices ipsum. Lobortis euismod ultrices porta vitae risu</p>
          <button className={`${styles.BtnLayout} ${styles.BtnBlue}`}>Begin</button>
        </div>
      </div>
    </section>
  )
}

export default Community
