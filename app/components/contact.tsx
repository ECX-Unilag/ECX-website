import Image from 'next/image';
import { Nunito } from 'next/font/google';
import contactStyles from './css/contact.module.css';

const nunito = Nunito({
    weight: "400",
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false
});

const ContactUs = () => {
    return (
        <section id="contact" className={contactStyles.contact}>
            <div className={contactStyles.head}>
                <h2>Contact Us</h2>
                <p className={nunito.className}>
                    Have any questions? Send a message!
                    <br />
                    Someone will get back to you as soon as possible.
                </p>
            </div>
            <div className={contactStyles.body}>
                <form className={`${contactStyles.form} ${nunito.className}`}>
                    <div>
                        <input type="text" name="name" placeholder="Your Name:" required/>
                        <input type="text" name="email" placeholder="Your Email:" required/>
                    </div>
                    <textarea name="message" placeholder="Enter your message:" required></textarea>
                    <button type="submit">
                        <span>Send messages</span>
                        <Image 
                            src="/icons/btn-arrow.png" alt="" width={16} height={8} 
                        />
                    </button>
                </form>
                <div className={contactStyles.contact_details}>
                    <div>
                        <h3>Address</h3>
                        <p>
                            Faculty of Engineering,
                            <br />
                            University of Lagos, University Road Lagos Mainland Akoka, Yaba, Lagos
                        </p>
                    </div>
                    <div>
                        <h3>Opens</h3>
                        <p>Monday - Friday: 8:00 AM to 5:00PM</p>
                    </div>
                    <div>
                        <h3>Contact Info</h3>
                        <p className={contactStyles.contact_info_media}>
                            <span className={contactStyles.title}>Phone:</span> 
                            &nbsp; 
                            <span>+234 xxx xxxx xxx</span>
                            <br />
                            <span className={contactStyles.title}>Email:</span> 
                            &nbsp; 
                            <span className={contactStyles.email}>ecxunilag@gmail.com</span>
                             
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs;
