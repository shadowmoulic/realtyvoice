"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Brain, Hash, Workflow, Gift, Zap } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            title: "10-Min Discovery",
            desc: "We hop on a quick call to understand your business, your tone, and your specific listings.",
            icon: <Phone size={32} />
        },
        {
            title: "Custom AI Agent",
            desc: "We build a bespoke AI voice agent trained specifically on your brand and service area.",
            icon: <Brain size={32} />
        },
        {
            title: "No-Cost Number",
            desc: "We provide a dedicated number at no extra cost. Simply forward your missed calls to it.",
            icon: <Hash size={32} />
        },
        {
            title: "Seamless Flow",
            desc: "Connected to Cal.com for events and Google Sheets for a simple, straightforward CRM.",
            icon: <Workflow size={32} />
        },
        {
            title: "7-Day Trial",
            desc: "Work with us for 7 days. If you don't love the results, you ditch us. No hard feelings.",
            icon: <Gift size={32} />
        },
        {
            title: "Scale Faster",
            desc: "Never miss a lead again. Focus on closings while your AI handles the first touch.",
            icon: <Zap size={32} />
        }
    ];

    return (
        <main style={{ background: 'var(--bg-primary)' }} suppressHydrationWarning={true}>
            <Navbar />
            <section className="section" style={{
                paddingTop: '12rem',
                minHeight: '100vh',
                background: 'radial-gradient(circle at 50% 10%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <div style={{
                            color: 'var(--gold)',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem'
                        }}>The Blueprint</div>
                        <h1 style={{ fontWeight: 800, marginBottom: '2rem' }}>
                            How It <span style={{ color: 'var(--gold)' }}>Works</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            We take the complexity out of AI so you can focus on building relationships and closing deals.
                        </p>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2.5rem',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {steps.map((step, i) => (
                                <div key={i} className="glass step-card" style={{
                                    border: '1px solid var(--border-card)',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '1.5rem',
                                        right: '2rem',
                                        fontSize: '3rem',
                                        opacity: 0.1,
                                        fontWeight: 900,
                                        color: 'var(--gold)'
                                    }}>0{i + 1}</div>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        marginBottom: '2rem',
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        width: '70px',
                                        height: '70px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '1.2rem',
                                        border: '1px solid rgba(212, 175, 55, 0.2)',
                                        color: 'var(--gold)'
                                    }}>{step.icon}</div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{step.title}</h3>
                                    <p style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{step.desc}</p>

                                    {/* Guiding Arrow for Desktop */}
                                    {i < steps.length - 1 && (
                                        <div className="desktop-only" style={{
                                            position: 'absolute',
                                            right: '-1.25rem',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 2,
                                            color: 'var(--gold)',
                                            fontSize: '1.5rem',
                                            opacity: 0.5
                                        }}>
                                            →
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                        <div className="glass" style={{
                            padding: '4rem',
                            border: '1px solid var(--primary-soft)',
                            background: 'linear-gradient(135deg, rgba(20, 20, 28, 0.9), rgba(26, 26, 36, 0.9))',
                            borderRadius: '2rem'
                        }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to automate your front desk?</h2>
                            <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                                Book your 10-minute discovery call today. No obligation, just value.
                            </p>
                            <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.3rem' }}>
                                Book Your Discovery Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

