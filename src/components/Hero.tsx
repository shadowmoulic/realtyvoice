"use client"

export default function Hero() {
    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '6rem',
            position: 'relative',
            background: 'linear-gradient(to bottom, #0B0B12, #1A1333)',
            overflow: 'hidden'
        }}>
            {/* Ambient Violet Atmosphere */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid-cols-2 hero-responsive">
                    <div className="fade-in">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: 'var(--gold)',
                            marginBottom: '2rem',
                            marginTop: '2rem',
                            background: 'rgba(212, 175, 55, 0.1)',
                            border: '1px solid rgba(212, 175, 55, 0.2)'
                        }}>
                            <span style={{ color: 'var(--gold)' }}>★</span>
                            Only for High-Volume Real Estate Teams
                        </div>

                        <h1 className="hero-title" style={{ fontWeight: 900, color: 'var(--text-primary)' }}>
                            Never Miss Another <br />
                            <span style={{ color: 'var(--gold)' }}>$20,000</span> Commission Call.
                        </h1>

                        <p className="hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
                            Turn missed calls into closed deals with an AI receptionist that qualifies leads and books showings while you&apos;re in the field.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }} className="flex-center-mobile">
                            <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{
                                padding: '1.1rem 2.8rem',
                                fontSize: '1.1rem',
                                background: 'var(--primary)',
                                boxShadow: '0 0 40px rgba(124, 58, 237, 0.5), 0 0 15px rgba(212, 175, 55, 0.2)',
                            }}>
                                Start Your 7-Day Free Trial
                            </a>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                No credit card required. <br />
                                Cancel anytime.
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="flex-center-mobile">
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i} style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>★</span>
                                ))}
                            </div>
                            <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Authority Grade AI</strong> &nbsp; Purpose-built for Realtors
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Engineered to Outperform</p>
                            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', opacity: 0.6, filter: 'grayscale(1)' }} className="flex-center-mobile">
                                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>RE/MAX STANDARDS</span>
                                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>CENTURY 21 SPEED</span>
                                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>KW SYSTEMS</span>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in" style={{ position: 'relative' }}>
                        <div className="glass" style={{
                            padding: '2.5rem',
                            position: 'relative',
                            boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
                            background: 'rgba(20, 20, 28, 0.8)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '1.5rem',
                            minHeight: '450px'
                        }}>
                            {/* Chat UI Visual */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{
                                    alignSelf: 'flex-start',
                                    padding: '1rem 1.2rem',
                                    borderRadius: '1.2rem 1.2rem 1.2rem 0.2rem',
                                    background: 'rgba(124, 58, 237, 0.15)',
                                    border: '1px solid rgba(124, 58, 237, 0.3)',
                                    maxWidth: '85%'
                                }}>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', opacity: 1 }}>
                                        Hi, is the property at 122 Elm St still available?
                                    </p>
                                </div>
                                <div style={{
                                    alignSelf: 'flex-end',
                                    padding: '1rem 1.2rem',
                                    borderRadius: '1.2rem 1.2rem 0.2rem 1.2rem',
                                    background: 'var(--primary)',
                                    maxWidth: '85%',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                }}>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'white', opacity: 1 }}>
                                        Hi! I&apos;m Sophia. Yes it is! Sarah is at a closing right now. Are you pre-approved or a cash buyer?
                                    </p>
                                </div>

                                <div style={{
                                    alignSelf: 'flex-start',
                                    padding: '1rem 1.2rem',
                                    borderRadius: '1.2rem 1.2rem 1.2rem 0.2rem',
                                    background: 'rgba(124, 58, 237, 0.15)',
                                    border: '1px solid rgba(124, 58, 237, 0.3)',
                                    maxWidth: '85%'
                                }}>
                                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', opacity: 1 }}>
                                        Pre-approved. Budget is $800k.
                                    </p>
                                </div>
                                <div style={{
                                    padding: '1.2rem',
                                    borderRadius: '1rem',
                                    background: 'rgba(212, 175, 55, 0.05)',
                                    border: '1px solid var(--gold)',
                                    textAlign: 'center',
                                    marginTop: '1rem'
                                }}>
                                    <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>
                                        ✓ Showing Scheduled
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--gold-soft)' }}>
                                        Sarah has been notified. Check your calendar!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floaters - Realistic Stats */}
                        <div className="glass" style={{
                            position: 'absolute',
                            bottom: '-2rem',
                            right: '-1rem',
                            padding: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            animation: 'fadeInUp 1s ease 0.5s forwards',
                            opacity: 0,
                            zIndex: 2,
                            background: 'var(--bg-card)',
                            border: '1px solid var(--gold)',
                            boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
                        }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                📞
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>100%</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Capture Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
