"use client"
import { useState, useEffect } from 'react';

const testimonials = [
    {
        stars: 5,
        text: "The spam filter is a godsend. My phone used to ring 20x a day for 'GMB' scams. This kills them in 0.5s before I even hear a ring.",
        author: "Agent Dave, FL"
    },
    {
        stars: 5,
        text: "Was in a listing meeting and missed 3 calls. AI John booked two of them before I even saw the notifications. F***ing legendary.",
        author: "Top Producer, TX"
    },
    {
        stars: 5,
        text: "Finally, a bot that doesn't sound like a call center from Mars. My leads actually like talking to Sarah. Conversion is up 40%.",
        author: "Team Lead, CA"
    },
    {
        stars: 5,
        text: "I hate manual CRM entry. This pushes everything to my personal dashboard while I'm sleeping. No more spreadsheets, just listings.",
        author: "Broker Owner, NY"
    }
];

export default function SidebarTestimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const t = testimonials[index];

    return (
        <div className="glass" style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            textAlign: 'center',
            opacity: 1,
            minHeight: '140px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.5s ease'
        }}>
            <div key={index} className="slide-fade">
                <div style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.6rem' }}>
                    {"★".repeat(t.stars)}
                </div>
                <p style={{ fontSize: '0.85rem', margin: 0, fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    "{t.text}"
                </p>
                <p style={{ fontSize: '0.7rem', margin: '0.6rem 0 0 0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gold)' }}>
                    — {t.author}
                </p>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginTop: '1rem' }}>
                {testimonials.map((_, i) => (
                    <div key={i} style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: i === index ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                        transition: 'background 0.3s ease'
                    }}></div>
                ))}
            </div>
        </div>
    );
}
