"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cal from "@calcom/embed-react";

export default function Pricing() {
    return (
        <main style={{ background: 'var(--bg-primary)' }}>
            <Navbar />
            <section className="section" style={{
                paddingTop: '12rem',
                minHeight: '100vh',
                background: 'radial-gradient(circle at 50% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.6rem 1.2rem',
                            background: 'rgba(212, 175, 55, 0.1)',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            color: 'var(--gold)',
                            borderRadius: '2rem',
                            fontSize: '0.9rem',
                            fontWeight: 800,
                            marginBottom: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>Internal Revenue Analysis</div>
                        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                            The ROI of <span style={{ color: 'var(--gold)' }}>Never Missing</span> a Call
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            Stop thinking about cost. Start thinking about the commission check you&apos;re currently leaving on the table.
                        </p>
                    </div>

                    <div className="grid-cols-2 hero-responsive" style={{ gap: '4rem', alignItems: 'stretch' }}>
                        {/* Human Receptionist Cost */}
                        <div className="glass" style={{ padding: '4rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-card)' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-primary)', fontWeight: 800 }}>Traditional Team</h2>
                            <div style={{ marginBottom: '3rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <span>Average Salary</span>
                                    <span style={{ fontWeight: 700 }}>$3,500/mo</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <span>Training & Software</span>
                                    <span style={{ fontWeight: 700 }}>$500/mo</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <span>Benefits & Tax</span>
                                    <span style={{ fontWeight: 700 }}>$800/mo</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#EF4444', fontWeight: 800, fontSize: '1.2rem', marginTop: '2rem' }}>
                                    <span>Total Monthly Burn</span>
                                    <span>~$4,800/mo</span>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                                <li style={{ marginBottom: '1rem' }}>✗ Limited to business hours</li>
                                <li style={{ marginBottom: '1rem' }}>✗ Missed calls during meetings/showings</li>
                                <li style={{ marginBottom: '1rem' }}>✗ Requires management & training</li>
                                <li style={{ marginBottom: '1rem' }}>✗ Prone to human error/burnout</li>
                            </ul>
                        </div>

                        {/* RealtyVoice AI */}
                        <div className="glass" style={{
                            padding: '4rem',
                            background: 'var(--bg-card)',
                            border: '2px solid var(--gold)',
                            position: 'relative',
                            boxShadow: '0 0 60px rgba(212, 175, 55, 0.1)'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-1.5rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'var(--gold)',
                                color: 'black',
                                padding: '0.5rem 2.5rem',
                                borderRadius: '2rem',
                                fontWeight: 900,
                                fontSize: '0.9rem',
                                boxShadow: '0 10px 20px rgba(212,175,55,0.3)'
                            }}>HIGH AUTHORITY</div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--gold)', fontWeight: 800 }}>RealtyVoice AI</h2>
                            <div style={{ marginBottom: '3rem' }}>
                                <div style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    <span style={{ fontSize: '2rem', verticalAlign: 'top', marginRight: '0.5rem', color: 'var(--gold)' }}>$</span>
                                    Fractional
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>of the cost of a single bad hire.</p>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>Infrastructure Included:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--gold)' }}>✓</span> <span style={{ color: 'var(--text-primary)' }}>24/7/365 availability (Instant response)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--gold)' }}>✓</span> <span style={{ color: 'var(--text-primary)' }}>Zero training required (Agent-specific)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--gold)' }}>✓</span> <span style={{ color: 'var(--text-primary)' }}>Instant CRM sync & Qualification</span>
                                    </li>
                                    <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--gold)' }}>✓</span> <span style={{ color: 'var(--text-primary)' }}>Automated Cal.com booking flow</span>
                                    </li>
                                    <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                        <span style={{ color: 'var(--gold)' }}>✓</span> <span style={{ color: 'var(--text-primary)' }}>7-Day Trial - Fully functional</span>
                                    </li>
                                </ul>
                            </div>

                            <a href="#booking" className="btn btn-primary glow" style={{ width: '100%', padding: '1.5rem', fontSize: '1.3rem', background: 'var(--gold)', color: '#000', fontWeight: 800 }}>
                                Secure My Spot Now
                            </a>
                        </div>
                    </div>

                    <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--text-primary)', fontWeight: 800 }}>If you miss just <span style={{ color: 'var(--gold)' }}>ONE</span> closing a year...</h3>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div className="glass" style={{ padding: '2.5rem 5rem' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#EF4444' }}>$20,000+</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>LOST COMMISSION</div>
                            </div>
                            <div style={{ fontSize: '4rem', alignSelf: 'center', color: 'var(--text-muted)' }}>vs</div>
                            <div className="glass" style={{ padding: '2.5rem 5rem', border: '1px solid var(--gold)' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--gold)' }}>Fractional</div>
                                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>AI INVESTMENT</div>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA / Calendar Section */}
                    <div id="booking" style={{ marginTop: '10rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Book Your Custom Setup Call</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                            In 15 minutes, we&apos;ll outline your custom AI flow and set up your 7-day trial.
                        </p>

                        <div className="glass" style={{
                            maxWidth: '1000px',
                            margin: '0 auto',
                            minHeight: '600px',
                            padding: '1rem',
                            borderRadius: '2rem',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                            background: 'var(--bg-card)'
                        }}>
                            <Cal namespace="15min"
                                calLink="sayak-moulic/15min"
                                style={{ width: "100%", height: "100%", minHeight: "600px", borderRadius: '1.5rem' }}
                                config={{ "layout": "month_view" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

