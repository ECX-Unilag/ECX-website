import Image from "next/image";
import { Nunito } from "next/font/google";
import aboutStyles from './css/about.module.css';

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    style: "normal",
    adjustFontFallback: false
})

const AboutECX = () => {
    return (
        <section className={aboutStyles.about}>
            <h2 className={aboutStyles.about_title}>About Engineering Career Expo</h2>
            <div className={aboutStyles.about_cards}>
                <div className={aboutStyles.about_card}>
                    <Image src="/note.png" alt="" width={64} height={64} />
                    <div className={aboutStyles.about_texts}>
                        <h3 className={aboutStyles.about_sub_title}>How we started</h3>
                        <p className={aboutStyles.about_paragraph}>
                            Engineering Career Expo (ECX) was established in 2019 by the 
                            University of Lagos Engineering Society (ULES), 
                            the primary student body of the Faculty of Engineering. 
                            It was created to...
                        </p>
                    </div>
                    <button 
                        className={`
                            ${nunito.className} 
                            ${aboutStyles.read_more_btn} 
                            ${aboutStyles.bg_blue}
                        `}
                    >
                        <span>Read More</span>
                        <Image 
                            src="/icons/btn-arrow.png" alt="" width={16} height={8} 
                        />
                    </button>
                </div>

                <div className={aboutStyles.about_card}>
                    <Image src="/pen.png" alt="" width={64} height={64} />
                    <div className={aboutStyles.about_texts}>
                        <h3 className={aboutStyles.about_sub_title}>Mission and Vission</h3>
                        <p className={aboutStyles.about_paragraph}>
                            To develop student potentials by equipping them with the skills 
                            and knowledge required to ensure a smooth transition from the 
                            classroom to the industry. 
                        </p>
                    </div>
                    <button 
                        className={`
                            ${nunito.className} 
                            ${aboutStyles.read_more_btn} 
                            ${aboutStyles.bg_red}
                        `}
                    >
                        <span>Read More</span>
                        <Image 
                            src="/icons/btn-arrow.png" alt="" width={16} height={8} 
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default AboutECX;
