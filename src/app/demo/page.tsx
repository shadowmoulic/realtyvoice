"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from 'react';
import { Play, Shield, X, MessageSquare, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function DemoHub() {
    const [activeTranscript, setActiveTranscript] = useState<number | null>(null);

    const recordings = [
        {
            title: "Cold Call Inbound",
            agent: "AI Sarah",
            duration: "2:14",
            desc: "Lead inquiry about property availability and price. Qualifies on budget and books showing.",
            status: "Qualified & Booked",
            transcript: [
                { role: "Prospect", text: "Hi, I'm calling about the property on 742 Evergreen Terrace. Just wanted to see if it's still on the market and what the firm price is?" },
                { role: "AI Sarah", text: "Yes, it's still available! It's currently listed at $585,000. Before I check for showing times, are you looking to move within the next 60 days?" },
                { role: "Prospect", text: "Yeah, my lease is up in July so I'm hoping to close by then." },
                { role: "AI Sarah", text: "Got it. Perfect timeline. And do you have your pre-approval letter ready to go with an offer?" }
            ]
        },
        {
            title: "Lease Inquiry",
            agent: "AI John",
            duration: "1:45",
            desc: "Rental property inquiry. Qualifies on credit score and pet status.",
            status: "Qualified",
            transcript: [
                { role: "Prospect", text: "Hey, I saw the 2-bedroom rental downtown. Do you guys allow German Shepherds? And what's the minimum credit score?" },
                { role: "AI John", text: "We do allow pets with a $350 pet deposit. For this building, the owner requires a 680+ credit score. Is that something yours currently meets?" },
                { role: "Prospect", text: "Yeah, I'm around 710. Can I see it tomorrow?" },
                { role: "AI John", text: "Excellent. I have a 2:00 PM and a 4:30 PM available tomorrow. Which works better for you?" }
            ]
        },
        {
            title: "Buyer Follow-up",
            agent: "AI Sarah",
            duration: "3:02",
            desc: "Outbound call to old lead from CRM. Checks if still searching and updates preferences.",
            status: "Re-engaged",
            transcript: [
                { role: "AI Sarah", text: "Hi Mark! This is Sarah from RealtyVoice. You were looking for a 3-bedroom in Austin last year. Are you still in the market for a home?" },
                { role: "Prospect", text: "Oh hey. Actually, we paused because of the rates, but we're starting to look again. Our budget is closer to $500k now though." },
                { role: "AI Sarah", text: "That makes sense. I'll update your criteria to $500k max. Are you still looking for that specific school district?" }
            ]
        },
        {
            title: "Listing Presentation Hook",
            agent: "AI Front Desk",
            duration: "1:20",
            desc: "Prospect calling for appraisal. Qualifies on timeline and motivation.",
            status: "High Intent",
            transcript: [
                { role: "Prospect", text: "Hi, I'm curious what my house might go for. My neighbor just sold for $1.2M and we're thinking of downsizing." },
                { role: "AI Front Desk", text: "That's a great time to evaluate your equity. If we found a buyer at 1.2M, how soon would you be ready to move?" },
                { role: "Prospect", text: "Probably late summer. Once the kids are done with school." },
                { role: "AI Front Desk", text: "Understood. I'll have our listing specialist call you this afternoon with a preliminary equity report." }
            ]
        }
    ];

    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }} className="text-gradient">The Demo Hub</h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            Experience the future of real estate operations. Real calls, real qualifications, zero human overhead.
                        </p>
                    </div>

                    {/* NEW: Spam Filter Section */}
                    <div className="glass" style={{ marginBottom: '6rem', padding: '4rem', overflow: 'hidden', border: '1px solid var(--primary-soft)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-responsive">
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-soft)', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    <Shield size={20} /> Smart Defense System
                                </div>
                                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Automated Spam Filter</h2>
                                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                                    Stop wasting time on "Extended Warranty" and "Google My Business" scams. Our AI analyzes the first 0.5 seconds of a call to identify telemarketers and terminates the connection before your phone even rings.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <CheckCircle2 color="var(--gold)" size={20} />
                                        <span>Reduces Junk Calls by 94%</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <CheckCircle2 color="var(--gold)" size={20} />
                                        <span>AI Voice Analysis (VAD) Technology</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    aspectRatio: '16/9',
                                    background: 'rgba(0,0,0,0.5)',
                                    borderRadius: '1.5rem',
                                    border: '1px solid var(--border-card)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    position: 'relative',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                                }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 30px var(--primary)' }}>
                                        <Play fill="white" size={32} />
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>[Loom Video: AI vs Telemarketers]</p>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-2rem',
                                    right: '-2rem',
                                    background: 'var(--bg-card)',
                                    padding: '1.5rem',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-card)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'center'
                                }}>
                                    <AlertCircle color="#EF4444" />
                                    <div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#EF4444' }}>SPAM TERMINATED</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>"Warranty SCAM" filtered in 0.4s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>AI Agent Capability Recordings</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        {recordings.map((rec, i) => (
                            <div key={i} className="glass" style={{ padding: '3rem', border: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'var(--primary-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>
                                            {rec.agent.split(' ')[1][0]}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>{rec.agent}</div>
                                            <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{rec.duration} mins</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--gold)', padding: '0.3rem 0.8rem', borderRadius: '2rem' }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }}></div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase' }}>{rec.status}</span>
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>{rec.title}</h3>
                                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '3.5rem', lineHeight: 1.6 }}>{rec.desc}</p>

                                <div style={{
                                    padding: '2rem',
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                                    borderRadius: '1rem',
                                    marginBottom: '2rem',
                                    textAlign: 'center',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{ marginBottom: '1rem', fontSize: '2rem' }}>⏺️</div>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Audio proof coming soon...</p>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button
                                        className="btn btn-outline"
                                        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
                                        onClick={() => setActiveTranscript(i)}
                                    >
                                        <MessageSquare size={16} /> Read Transcript
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '8rem', padding: '6rem 2rem', background: 'var(--bg-secondary)', borderRadius: '3rem', border: '1px solid var(--border-card)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Ready to automate your desk?</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                            Book a 15-minute strategy session to see how AI can transform your specific workflow.
                        </p>
                        <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem', boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}>
                            Book Strategy Session ☎️
                        </a>
                    </div>
                </div>
            </section>

            {/* Transcript Modal */}
            {activeTranscript !== null && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <div className="glass" style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{recordings[activeTranscript].title}</h2>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gold)' }}>Call Transcript • {recordings[activeTranscript].agent}</p>
                            </div>
                            <button onClick={() => setActiveTranscript(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}>
                                <X size={24} />
                            </button>
                        </div>
                        <div style={{ padding: '2.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {recordings[activeTranscript].transcript.map((line, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', flexDirection: line.role === 'AI Sarah' || line.role === 'AI John' || line.role === 'AI Front Desk' ? 'row-reverse' : 'row' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        minWidth: '40px',
                                        borderRadius: '50%',
                                        background: line.role.startsWith('AI') ? 'var(--primary)' : '#444',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        fontWeight: 800
                                    }}>
                                        {line.role[0]}
                                    </div>
                                    <div style={{
                                        padding: '1.2rem 1.5rem',
                                        background: line.role.startsWith('AI') ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.05)',
                                        borderRadius: '1rem',
                                        border: line.role.startsWith('AI') ? '1px solid var(--primary-soft)' : '1px solid transparent',
                                        maxWidth: '85%',
                                        lineHeight: 1.6
                                    }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--gold)', marginBottom: '0.4rem', textAlign: line.role.startsWith('AI') ? 'right' : 'left' }}>
                                            {line.role.toUpperCase()}
                                        </div>
                                        {line.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '2rem', borderTop: '1px solid var(--border-card)', background: 'rgba(0,0,0,0.2)' }}>
                            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                <Info size={16} />
                                <span>This transcript is generated from a live AI agent call.</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
