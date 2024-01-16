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
import Community from './components/Community';
import Testimonials from './components/Testimonials/Testimonials';


export default function Home() {
  return (
    <div className={styles.page}>
      {/* <div id="head" className={styles.page_head}>
        <NavBar />
        <Hero />
      </div> */}
      <main>
        {/* <AboutECX />
        <WhatWeDo />
        <Achievements /> */}
        <div className={styles.team_community_container}>
          <Team />
          {/* <Community /> */}
        </div>
        {/* <Testimonials />
        <ContactUs />
        <Newsletter /> */}
      </main>
      {/* <BackToTop />
      <Footer /> */}
    </div>
  )
}
