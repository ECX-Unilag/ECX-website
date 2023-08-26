"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TeamStyles from './css/team.module.css';
import MemberObj from './member.json';
import MemberCard from './member';

const Team = () => {
    const [ members, setMembers ] = useState(MemberObj);
    return (
        <section id="team" className={TeamStyles.team}>
            <div className={TeamStyles.header}>
                <h2>Meet our Team</h2>
                <p>Here are our Change Makers in this edition.</p>
            </div>
            <div className={TeamStyles.members}>
                <div className={TeamStyles.is_chair}>
                    {members.map((member) => {
                        if(member.isChair) return <MemberCard {...member} key={member.serial} />;
                    })}
                </div>
                <div className={TeamStyles.not_chair}>
                    {members.map((member) => {
                        if(!member.isChair) return <MemberCard {...member} key={member.serial} />;
                    })}
                </div>
            </div>
            <Link 
                className={TeamStyles.ctaBtn} 
                href="http://bit.ly/volunteer4ecx" 
                target="_blank" rel="noopener noreferrer"
            >
                <span>Volunteer for ECX</span>
                <Image src="/icons/btn-arrow.png" alt="" width={16} height={8} />
            </Link>
        </section>
    )
}
export default Team;
