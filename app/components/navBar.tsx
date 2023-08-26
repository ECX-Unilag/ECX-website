"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import navBarStyles from './css/navBar.module.css';
import { useState } from 'react';

const openSans = Open_Sans({
    weight: "700",
    style: ["normal"],
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false
}) 

const NavBar = ()=> {
    const [ mbNavItems, setMbNavItems ] = useState(false);

    return (
        <nav 
            className={`${openSans.className} ${navBarStyles.navBar}`}
        >
            <Link href="/">
                <Image
                src="/ecx.svg"
                alt="ECX Logo"
                width={157.41}
                height={49.36}
                priority
                />
            </Link>
            <div className={navBarStyles.nav_items}>
                <button 
                    className={navBarStyles.menuIcon}
                    onClick={() => { setMbNavItems(!mbNavItems);console.log(mbNavItems) }}
                >
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33333 14.0156H28" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 8.68164H28" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 19.3477H28" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.33333 24.6816H28" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className={
                    `
                    ${navBarStyles.nav_items_cnt} 
                    ${(!mbNavItems) ? navBarStyles.noDisplay: ""}
                    `
                    }>
                    <ul className={navBarStyles.nav_links}>
                        <li><Link href="#head">Home</Link></li>
                        <li><Link href="#about">About us</Link></li>
                        <li><Link href="#team">Team</Link></li>
                        <li><Link href="https://ecxunilag.medium.com/">Blog</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                    <button 
                        className={navBarStyles.nav_button_cta} 
                        // href="http://bit.ly/volunteer4ecx" 
                        // target="_blank" rel="noopener noreferrer"
                        disabled
                        title="Check back later. We'll announce on our socials."
                    >
                        Join ECX
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
