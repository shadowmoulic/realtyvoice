"use client"

export default function Comparison() {
    const comparisons = [
        { feature: "Availability", human: "9 AM – 5 PM", ai: "24/7 (Never Sleeps)" },
        { feature: "Response Time", human: "Minutes to Hours", ai: "Instant (< 2 Seconds)" },
        { feature: "Lead Qualification", human: "Inconsistent", ai: "Highly Qualified & Consistent" },
        { feature: "Appointment Booking", human: "Manually (Back & Forth)", ai: "Automatically (Cal.com)" },
        { feature: "CRM Data Entry", human: "Whenever they have time", ai: "Instant (Google Sheets/CRM)" },
        { feature: "Monthly Cost (24/7)", human: "$13,140+ ($18/hr)", ai: "$97 (Flat Rate)" },
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Human Receptionist vs. <span className="text-gradient">AI</span>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        The math is clear. The speed is undeniable.
                    </p>
                </div>

                <div className="glass reveal" style={{
                    overflowX: 'auto',
                    padding: '0.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '1.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <th style={{ padding: '1.25rem', opacity: 0.7, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Comparison</th>
                                <th style={{ padding: '1.25rem', opacity: 0.7, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Human ($18/hr+)</th>
                                <th style={{
                                    padding: '1.25rem',
                                    color: 'var(--gold)',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    borderBottom: '2px solid var(--gold)'
                                }}>RealtyVoice AI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((c, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border-card)' }}>
                                    <td style={{ padding: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{c.feature}</td>
                                    <td style={{ padding: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{c.human}</td>
                                    <td style={{ padding: '1.25rem', fontWeight: 700, color: '#A78BFA', fontSize: '0.95rem' }}>{c.ai}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="reveal" style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <div style={{ padding: '2rem', borderRadius: '1rem', background: 'rgba(109, 41, 216, 0.05)', border: '1px solid rgba(109, 41, 216, 0.1)', marginBottom: '3rem' }}>
                        <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            <span style={{ color: 'var(--accent-red)', fontWeight: 800 }}>Zombie Alert:</span> To have a human answer your calls 24/7/365, you&apos;d need 4.2 full-time employees at a cost of <strong style={{ color: 'white' }}>$13,140/mo</strong>. <br />
                            Unless you plan on hiring a zombie, RealtyVoice is the only logical choice.
                        </p>
                    </div>
                    <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Start Your 7-Day Trial
                    </a>
                </div>
            </div>
        </section>
    );
}

