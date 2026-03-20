"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cal from "@calcom/embed-react";

export default function Pricing() {
    return (
        <main style={{ background: 'var(--bg-primary)' }} suppressHydrationWarning={true}>
            <Navbar />
            <section className="section" style={{
                paddingTop: '12rem',
                minHeight: '100vh',
                background: 'radial-gradient(circle at 50% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)'
            }}>
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
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
                        <h1 style={{ fontWeight: 900, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                            Built for solo agents who <span style={{ color: 'var(--gold)' }}>can't afford</span> to miss a single call.
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            Stop thinking about cost. Start thinking about the commission check you&apos;re currently leaving on the table.
                        </p>
                    </div>

                    <div className="reveal" style={{ marginBottom: '8rem', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-primary)', fontWeight: 800 }}>The $18/Hr <span style={{ color: 'var(--gold)' }}>Math</span> Challenge</h3>
                        <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            In states like California, the minimum wage is $18/hr. Even for a standard 9-5 shift, the overhead is staggering.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'stretch' }}>
                            <div className="glass pricing-card reveal-left" style={{ padding: '2.5rem 3rem', flex: 1, minWidth: '320px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                <div style={{ fontSize: '1rem', color: 'var(--accent-red)', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>Human Staffing (9-5 ONLY)</div>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>$3,096<span style={{ fontSize: '1.2rem', opacity: 0.5 }}>/mo</span></div>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', textAlign: 'left', opacity: 0.8 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>✕ $18/hr × 172 standard hours</li>
                                    <li style={{ marginBottom: '0.5rem' }}>✕ No weekends. No after-hours.</li>
                                    <li>✕ Still prone to sick days & coffee breaks.</li>
                                </ul>
                            </div>
                            <div className="roi-vs" style={{ fontSize: '3rem', alignSelf: 'center', color: 'var(--text-muted)' }}>vs</div>
                            <div className="glass pricing-card reveal-right" style={{ padding: '2.5rem 3rem', flex: 1, minWidth: '320px', border: '1px solid var(--gold)' }}>
                                <div style={{ fontSize: '1rem', color: 'var(--gold)', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}>RealtyVoice AI (24/7/365)</div>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: '1rem' }}>$97<span style={{ fontSize: '1.2rem', opacity: 0.5 }}>/mo</span></div>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', textAlign: 'left', opacity: 0.8 }}>
                                    <li style={{ marginBottom: '0.5rem' }}>✓ Coverage while you sleep/show/drive</li>
                                    <li style={{ marginBottom: '0.5rem' }}>✓ 4.2x cheaper than a single shift human</li>
                                    <li>✓ Never asks for a raise or a day off.</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ marginTop: '4rem', padding: '2rem', borderRadius: '1rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: 'var(--accent-red)', fontWeight: 800 }}>Crazy Mode:</span> To have a human answer 24/7/365, you&apos;d need to pay <strong style={{ color: 'white' }}>$13,140/mo</strong> for 4.2 full-time employees. <br />
                                Unless you plan on hiring a zombie, RealtyVoice is the only logical choice.
                            </p>
                        </div>
                    </div>

                    <div className="grid-cols-2 hero-responsive" style={{ gap: '4rem', alignItems: 'stretch' }}>
                        {/* Solo Agent Plan */}
                        <div className="glass pricing-card reveal-left" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-card)' }}>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 800 }}>Solo Agent</h2>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--gold)' }}>
                                    $97<span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>/mo</span>
                                </div>
                                <p style={{ color: 'var(--accent-red)', fontWeight: 700 }}>+$150 one-time setup fee</p>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> AI answers all calls 24/7
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Lead qualification
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Calendar booking
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Call transcripts + dashboard
                                </li>
                            </ul>

                            <a href="#booking" className="btn btn-outline" style={{ width: '100%', padding: '1.2rem' }}>
                                Get Started
                            </a>
                        </div>

                        {/* Team Plan */}
                        <div className="glass pricing-card" style={{
                            background: 'var(--bg-card)',
                            border: '2px solid var(--gold)',
                            position: 'relative',
                            boxShadow: '0 0 60px rgba(212, 175, 55, 0.1)'
                        }}>
                            <div className="authority-badge" style={{
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
                                boxShadow: '0 10px 20px rgba(212,175,55,0.3)',
                                whiteSpace: 'nowrap'
                            }}>MOST POPULAR</div>

                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--gold)', fontWeight: 800 }}>Team Plan</h2>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                                    $197<span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>/mo</span>
                                </div>
                                <p style={{ color: '#EF4444', fontWeight: 700 }}>+$150 one-time setup fee</p>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Everything in Solo Plan
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Multiple numbers (up to 3 agents)
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Live lead handoff to your mobile
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Priority onboarding
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem' }}>
                                    <span style={{ color: 'var(--gold)' }}>✓</span> Gatekeeper spam filter included
                                </li>
                            </ul>

                            <a href="#booking" className="btn btn-primary glow" style={{ width: '100%', padding: '1.2rem', background: 'var(--gold)', color: '#000', fontWeight: 800 }}>
                                Start Team Trial
                            </a>
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

