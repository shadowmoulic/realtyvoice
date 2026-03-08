"use client"

export default function Comparison() {
    const comparisons = [
        { feature: "Availability", human: "9 AM – 5 PM", ai: "24/7 (Never Sleeps)" },
        { feature: "Response Time", human: "Minutes to Hours", ai: "Instant (< 2 Seconds)" },
        { feature: "Lead Qualification", human: "Inconsistent", ai: "Highly Qualified & Consistent" },
        { feature: "Appointment Booking", human: "Manually (Back & Forth)", ai: "Automatically (Cal.com)" },
        { feature: "CRM Data Entry", human: "Whenever they have time", ai: "Instant (Google Sheets/CRM)" },
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Is Your Receptionist <span className="text-gradient">Losing You Deals?</span>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                        Why top US agents are switching to AI for their first point of contact.
                    </p>
                </div>

                <div className="glass" style={{
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
                                <th style={{ padding: '2rem', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Comparison</th>
                                <th style={{ padding: '2rem', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Human Receptionist</th>
                                <th style={{
                                    padding: '2rem',
                                    color: 'var(--gold)',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    borderBottom: '2px solid var(--gold)'
                                }}>RealtyVoice AI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((c, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border-card)' }}>
                                    <td style={{ padding: '2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{c.feature}</td>
                                    <td style={{ padding: '2rem', color: 'var(--text-muted)' }}>{c.human}</td>
                                    <td style={{ padding: '2rem', fontWeight: 700, color: '#A78BFA' }}>{c.ai}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.2rem' }}>
                        Start Your 7-Day Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
}

