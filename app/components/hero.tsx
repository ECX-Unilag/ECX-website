import { Poppins } from 'next/font/google';
import HeroStyles from './css/hero.module.css';

const poppins = Poppins({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false
})

const Hero = () => {
    return (
        <section className={HeroStyles.hero}>
            <h1 className={HeroStyles.hero__title}>
                Empowering the next generation of leaders
            </h1>
            <p className={HeroStyles.hero__paragraph}>
                Engineering Career Expo (ECX) is a student-led platform created to train, 
                guide and mentor undergraduates in relevant technical and soft skills.
            </p>
            <button className={HeroStyles.hero__button}>
                <span className={poppins.className}>Join our community</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#fff" />
                </svg>
            </button>
        </section>
    )
}
export default Hero;
