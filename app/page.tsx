import styles from './page.module.css'
import NavBar from './components/navBar'
import Hero from './components/hero'
import AboutECX from './components/aboutUs';
import WhatWeDo from './components/whatWeDo';
import Achievements from './components/achievements';
import Team from './components/our-team/team';
import ContactUs from './components/contact';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import BackToTop from './components/backToTop';
import Merch from './components/merch';


export default function Home() {
  return (
    <div className={styles.page}>
      <div id="head" className={styles.page_head}>
        <NavBar />
        <Hero />
      </div>
      <main className={styles.main}>
        <Achievements />
        <Merch />
        <Newsletter />
        <Footer /> 
        {/*
        <AboutECX />
        <WhatWeDo />
        <Team />
        <ContactUs />
        */}
      </main>
      {/* <BackToTop />*/}
    </div>
  )
}
