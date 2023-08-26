"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './css/backToTop.module.css';

const BackToTop = () => {
    useEffect(() => {
        // Disable scroll restoration
        window.history.scrollRestoration = 'manual';
    }, []);
    const [ top, setTop ] = useState(0);

    const handleScroll = () => setTop(window.scrollY);
    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })
    return (top > 320) ? 
    <Link href="#head" className={styles.back_to_top}>
        <Image src="/icons/chevron-up.svg" alt="Back to top" width={40} height={40} layout='responsive' />
    </Link> : 
    null
}
export default BackToTop;
