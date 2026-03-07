"use client"

export default function Hero() {
    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '8rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Blur Orbs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--primary)',
                filter: 'blur(120px)',
                opacity: 0.2,
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--secondary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                zIndex: -1
            }}></div>

            <div className="container">
                <div className="grid-cols-2 hero-responsive">
                    <div className="fade-in">
                        <div className="glass" style={{
                            display: 'inline-block',
                            padding: '0.4rem 1rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: 'var(--primary-light)',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(167, 139, 250, 0.2)'
                        }}>
                            🚀 Only for Real Estate Professionals
                        </div>

                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Stop Losing <span className="text-gradient">High-Value</span> Leads to Missed Calls.
                        </h1>

                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '540px' }}>
                            &ldquo;If you miss just one closing a year from missed calls, this pays for itself.&rdquo;
                            AI answers instantly, qualifies the lead, and books the showing directly into your calendar.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }} className="flex-center-mobile">
                            <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Start Your 7-Day Free Trial
                            </a>
                        </div>

                        <div className="glass" style={{ padding: '1rem', display: 'inline-block', border: '1px solid var(--primary-light)' }}>
                            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
                                ☎️ Test it live! Call our front desk: <a href="tel:+16502524261" className="text-gradient">+1 (650) 252-4261</a>
                            </p>
                        </div>

                        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }} className="flex-center-mobile">
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i} style={{ color: '#FCD34D' }}>★</span>
                                ))}
                            </div>
                            <span style={{ fontSize: '0.9rem' }}>The #1 AI Answering Service for US Real Estate Agents.</span>
                        </div>
                    </div>

                    <div className="glass fade-in" style={{
                        padding: '2rem',
                        position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        minHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        {/* Visual Representation of the AI Chat/Voice */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div className="glass" style={{
                                padding: '1rem',
                                marginBottom: '1rem',
                                maxWidth: '80%',
                                marginLeft: 'auto',
                                background: 'rgba(109, 40, 217, 0.2)',
                                borderBottomRightRadius: '0.2rem'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 1 }}>Hi, I saw your listing on Main St. Is it still available for a showing tomorrow at 2 PM?</p>
                            </div>
                            <div className="glass" style={{
                                padding: '1rem',
                                marginBottom: '1rem',
                                maxWidth: '80%',
                                background: 'rgba(30, 64, 175, 0.2)',
                                borderBottomLeftRadius: '0.2rem'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 1 }}>Hi! I&apos;m RealtyVoice, answering for Sarah. Yes, it&apos;s available! To confirm, are you pre-approved or a cash buyer? </p>
                            </div>
                            <div className="glass" style={{
                                padding: '1rem',
                                marginBottom: '1rem',
                                maxWidth: '80%',
                                marginLeft: 'auto',
                                background: 'rgba(109, 40, 217, 0.2)',
                                borderBottomRightRadius: '0.2rem'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 1 }}>Pre-approved. Budget is $800k. </p>
                            </div>
                            <div className="glass" style={{
                                padding: '1rem',
                                maxWidth: '80%',
                                background: 'rgba(30, 64, 175, 0.2)',
                                borderBottomLeftRadius: '0.2rem',
                                border: '1px solid var(--success)'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', opacity: 1 }}>Perfect. I&apos;ve scheduled your showing for tomorrow at 2 PM. Sarah has been notified!</p>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div className="text-gradient" style={{ fontWeight: 800, fontSize: '1.2rem' }}>
                                Lead Captured & Qualified in 45 seconds.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
