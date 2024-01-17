"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TeamStyles from './css/team.module.css';
import styles from './css/member.module.css'
import MemberObj from './member.json';
import MemberCard from './member';

const Team = () => {
    const [ members, setMembers ] = useState(MemberObj);
    return (
        <section id="team" className={TeamStyles.team}>
            <div className={TeamStyles.header}>
                <h2>Meet our Team</h2>
                <p>Meet the brains behind the operations of ECX</p>
            </div>
            <div className={styles.member_container}>
                <MemberCard expand={true} />
                <MemberCard expand={false} />
                <MemberCard expand={false} />
                <MemberCard expand={false} />
            </div>
            
            <Link 
                className={TeamStyles.ctaBtn} 
                href="http://bit.ly/volunteer4ecx" 
                target="_blank" rel="noopener noreferrer"
            >
                <span>Volunteer for ECX</span>
            </Link>
        </section>
    )
}
export default Team;
