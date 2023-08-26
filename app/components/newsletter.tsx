import { Nunito } from "next/font/google";
import NewsletterStyles from './css/newsletter.module.css';

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false
});

const Newsletter = () => {
    return (
        <aside className={NewsletterStyles.newsletter}>
            <h2 className={NewsletterStyles.heading}>Subscribe to our newsletter</h2>
            <form className={`${nunito.className} ${NewsletterStyles.form}`}>
                <input name="email" type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
            </form>
        </aside>
    )
}
export default Newsletter;
