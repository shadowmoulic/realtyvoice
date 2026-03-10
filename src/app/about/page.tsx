"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main style={{ background: 'var(--bg-primary)' }} suppressHydrationWarning={true}>
            <Navbar />
            <section className="section" style={{ paddingTop: '12rem', minHeight: '100vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem' }}>
                            Why <span style={{ color: 'var(--gold)' }}>RealtyVoice?</span>
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            We&apos;re real estate professionals first, and technology enthusiasts second.
                        </p>
                    </div>

                    <div className="grid-cols-2 hero-responsive" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '4rem', border: '1px solid var(--border-card)', background: 'var(--bg-card)' }}>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', fontWeight: 800 }}>Our Mission</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                We understand the hustle of a modern real estate agent. You&apos;re constantly on the move — from showings to closings, from the car to the driveway.
                            </p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Every time you can&apos;t answer your phone, you risk losing a potential client to someone else. RealtyVoice was born out of the need to bridge that gap.
                            </p>
                            <div style={{
                                padding: '2rem',
                                borderLeft: '4px solid var(--gold)',
                                background: 'rgba(212, 175, 55, 0.05)',
                                borderRadius: '0 1rem 1rem 0'
                            }}>
                                <p style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700, fontStyle: 'italic', color: 'var(--text-primary)' }}>
                                    &ldquo;We build the AI assistant we wanted for our own real estate careers.&rdquo;
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--bg-card)' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--gold)' }}>Dedicated</div>
                                <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Built Specifically for RE Agents</p>
                            </div>
                            <div className="glass" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--bg-card)' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', color: 'white' }}>24/7</div>
                                <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Never-Sleep AI Core</p>
                            </div>
                            <div className="glass" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--bg-card)' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--gold)' }}>Instant</div>
                                <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Zero Lead Response Delay</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 900 }}>Curious how we can help your team?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        Book a 10-minute strategy call and we&apos;ll build you a custom AI receptionist prototype on the spot.
                    </p>
                    <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{ padding: '1.2rem 3.5rem', fontSize: '1.15rem' }}>
                        Book Your Free Strategy Slot
                    </a>
                </div>
            </section>
            <Footer />
        </main>
    );
}

