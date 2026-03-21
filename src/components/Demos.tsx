"use client"
import { Play, Pause, ShieldCheck, UserCheck, Building2, PhoneCall, CalendarCheck, Music2, Volume2, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from 'next/link';

export default function Demos({ showAll = false }: { showAll?: boolean }) {
    const demos = [
        {
            id: "1gnMZllj8hy0LbEBCzrAqAYLgEj2SCFHA",
            localSrc: "/audio/vapi active listings.wav",
            title: "The Premium Concierge",
            role: "Inbound Relationship Lead (Sarah)",
            subtitle: "Warm, authoritative, and helpful",
            desc: "The ultimate first impression. Handles active listings with the expertise of a 10-year veteran. She leads with empathy while capturing every critical lead parameter.",
            icon: <UserCheck size={28} />,
            color: "var(--primary)"
        },
        {
            id: "1IwWA1BIKxJohy5nHQioU4OcFhXyrecxF",
            localSrc: "/audio/gate keeping realtyvoice.mp3",
            title: "The Portfolio Shield",
            role: "Protection & Spam Mitigation",
            subtitle: "Shielding your time 24/7/365",
            desc: "Deep-learning noise reduction for your business. Identifies and neutralizes fake solicitors before your phone even vibrates.",
            icon: <ShieldCheck size={28} />,
            color: "#6D28D9"
        },
        {
            id: "1Davj5TOYju0jlDrk0jEGh_1JLzjv6yGb",
            localSrc: "/audio/vapi leasing things.wav",
            title: "The Portfolio Manager",
            role: "High-End Lease Specialist (Jenny)",
            subtitle: "Professional, firm, politely dry",
            desc: "The 'Polite Bouncer' for luxury rentals. Jenny filters out low-intent inquiries and enforces strict qualification with high-end finesse.",
            icon: <Building2 size={28} />,
            color: "var(--gold)"
        },
        {
            id: "131R8fx9I3UQoY4u2Y2WOdQU2AjCaluf-",
            localSrc: "/audio/vapi outbound re-engagement.wav",
            title: "The Relationship Nurturer",
            role: "Outbound Strategic Follow-up (Sarah)",
            subtitle: "Relaxed, non-pushy, friend-to-friend",
            desc: "The antithesis of salesy follow-up. She checks in like a trusted advisor, reviving long-forgotten leads for your next listing opportunity.",
            icon: <PhoneCall size={28} />,
            color: "#A78BFA"
        },
        {
            id: "10auP1ijRaUmVpaNf2iWry7ribPGSMCuR",
            localSrc: "/audio/vapi inbound first.wav",
            title: "The Instant Booking Expert",
            role: "Speed-to-Lead Qualifier (Sophie)",
            subtitle: "Fast, efficient, results-driven",
            desc: "Sophie qualifies property inquiries in real-time and books showings directly onto your calendar while you monitor the lead dashboard.",
            icon: <CalendarCheck size={28} />,
            color: "var(--gold)"
        }
    ];

    const displayedDemos = showAll ? demos : demos.slice(0, 2);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [durations, setDurations] = useState<Record<string, string>>({});
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [errorId, setErrorId] = useState<string | null>(null);

    const formatDuration = (seconds: number) => {
        if (isNaN(seconds) || seconds === Infinity) return "";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')} min`;
    };

    const togglePlay = (index: number) => {
        const demo = displayedDemos[index];
        const audio = audioRef.current;
        if (!audio) return;

        if (playingId === demo.id) {
            audio.pause();
            setPlayingId(null);
            return;
        }

        setErrorId(null);
        setLoadingId(demo.id);

        // Remove current src to stop any pending loads
        audio.src = "";
        audio.load();

        // Set new src
        audio.src = demo.localSrc;
        setPlayingId(demo.id);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setLoadingId(null);
            }).catch(error => {
                console.warn("Playback failed, trying legacy Drive stream:", error);
                audio.src = `https://docs.google.com/uc?export=download&id=${demo.id}`;
                audio.play().then(() => {
                    setLoadingId(null);
                }).catch(e => {
                    console.error("All playback failed", e);
                    setLoadingId(null);
                    setPlayingId(null);
                    setErrorId(demo.id);
                });
            });
        }
    };

    return (
        <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <audio
                ref={audioRef}
                onEnded={() => setPlayingId(null)}
                onLoadedMetadata={(e) => {
                    const audio = e.currentTarget;
                    if (playingId && audio && !isNaN(audio.duration)) {
                        setDurations(prev => {
                            if (!playingId) return prev;
                            return {
                                ...prev,
                                [playingId]: formatDuration(audio.duration)
                            };
                        });
                    }
                }}
                onError={() => {
                    if (playingId) {
                        setErrorId(playingId);
                        setPlayingId(null);
                        setLoadingId(null);
                    }
                }}
                crossOrigin="anonymous"
                preload="metadata"
            />
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.2rem',
                        background: 'rgba(109, 41, 216, 0.1)',
                        border: '1px solid rgba(109, 41, 216, 0.2)',
                        color: 'var(--primary)',
                        borderRadius: '2rem',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase'
                    }}>{showAll ? 'The Full Personality Board' : 'AI Agents in Action'}</div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>
                        {showAll ? 'Experience the ' : ''}AI <span style={{ color: 'var(--gold)' }}>Authority</span>.
                    </h2>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        {showAll
                            ? "From the 'Polite Bouncer' to the 'Friendly Follow-up.' Hear how our specialized agents sound."
                            : "Listen to RealtyVoice handle cold callers and hot leads with authority."}
                    </p>
                </div>

                <div className="demo-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
                    {displayedDemos.map((demo, i) => (
                        <div key={demo.id} className={`glass reveal demo-card delay-${(i + 1) * 50}`} style={{
                            padding: '2.5rem',
                            border: `1px solid ${playingId === demo.id ? demo.color : 'rgba(255,255,255,0.05)'}`,
                            background: 'var(--bg-card)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            boxShadow: playingId === demo.id ? `0 0 40px ${demo.color}15` : '0 10px 30px rgba(0,0,0,0.2)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div style={{
                                    background: `${demo.color}11`,
                                    color: demo.color,
                                    padding: '1rem',
                                    borderRadius: '1.2rem',
                                    border: `1px solid ${demo.color}22`
                                }}>
                                    {demo.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>{demo.title}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            {durations[demo.id] && (
                                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <Volume2 size={12} /> {durations[demo.id]}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '0.7rem', color: demo.color, border: `1px solid ${demo.color}44`, padding: '0.2rem 0.6rem', borderRadius: '1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', display: 'inline-block' }}>{demo.role}</span>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>&ldquo;{demo.subtitle}&rdquo;</p>
                                </div>
                            </div>

                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', flex: 1 }}>
                                {demo.desc}
                            </p>

                            <button
                                onClick={() => togglePlay(i)}
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                    background: playingId === demo.id ? `${demo.color}15` : 'rgba(255,255,255,0.02)',
                                    border: playingId === demo.id ? `1px solid ${demo.color}` : '1px solid var(--border-card)',
                                    borderRadius: '1.2rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: errorId === demo.id ? 'var(--accent-red)' : demo.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}>
                                        {loadingId === demo.id ? (
                                            <div style={{ width: '12px', height: '12px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }}></div>
                                        ) : errorId === demo.id ? (
                                            <AlertCircle size={14} />
                                        ) : playingId === demo.id ? (
                                            <Pause size={14} />
                                        ) : (
                                            <Play size={14} fill="white" />
                                        )}
                                    </div>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white' }}>
                                        {loadingId === demo.id ? "Buffering..." : errorId === demo.id ? "Tap to Retry" : playingId === demo.id ? "Now Playing..." : "Direct Listen"}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                                    {[...Array(12)].map((_, j) => (
                                        <div key={j} style={{
                                            width: '2px',
                                            height: playingId === demo.id ? `${Math.sin((j + 1) * 20) * 8 + 12}px` : '8px',
                                            background: playingId === demo.id ? demo.color : 'rgba(255,255,255,0.1)',
                                            borderRadius: '2px',
                                            transition: 'height 0.2s ease',
                                            animation: playingId === demo.id ? `wave-${j % 3} 0.5s infinite alternate` : 'none'
                                        }}></div>
                                    ))}
                                </div>
                            </button>
                            {errorId === demo.id && (
                                <p style={{ color: 'var(--accent-red)', fontSize: '0.75rem', marginTop: '0.8rem', textAlign: 'center' }}>
                                    Browser blocked streaming. <a href={`https://drive.google.com/file/d/${demo.id}/view`} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Listen on Drive instead</a>
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="reveal" style={{ textAlign: 'center', marginTop: '5rem' }}>
                        <Link href="/demo" className="btn btn-primary" style={{ padding: '1rem 3rem', background: 'transparent', border: '1px solid var(--primary)', color: 'white' }}>
                            Meet the full agent roster →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
