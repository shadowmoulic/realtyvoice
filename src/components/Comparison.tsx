"use client"

export default function Comparison() {
    const comparisons = [
        { feature: "Response Time", human: "5-30 Minutes", ai: "Instant (< 2 Secs)" },
        { feature: "24/7 Availability", human: "No (9-5 mostly)", ai: "Yes (Always On)" },
        { feature: "Cost per Lead", human: "$15 - $25", ai: "$0.50 - $1.00" },
        { feature: "Lead Qualification", human: "Inconsistent", ai: "100% Consistent" },
        { feature: "CRM Integration", human: "Manual Entry", ai: "Instant & Automatic" },
    ];

    return (
        <section className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Human vs. RealtyVoice AI</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Why top US agents are switching to AI for their first point of contact.
                    </p>
                </div>

                <div className="glass" style={{ overflowX: 'auto', padding: '1rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '1.5rem', opacity: 0.7 }}>Feature</th>
                                <th style={{ padding: '1.5rem', opacity: 0.7 }}>Traditional Assistant</th>
                                <th style={{ padding: '1.5rem', color: 'var(--primary-light)' }}>RealtyVoice AI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((c, i) => (
                                <tr key={i} style={{ borderBottom: i === comparisons.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: 600 }}>{c.feature}</td>
                                    <td style={{ padding: '1.5rem', opacity: 0.6 }}>{c.human}</td>
                                    <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>{c.ai}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <div className="glass" style={{ display: 'inline-block', padding: '2rem 4rem', border: '1px solid var(--primary-light)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Ready to stop losing deals?</h3>
                        <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary">
                            Grab Your 7-Day Free Trial 🚀
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
