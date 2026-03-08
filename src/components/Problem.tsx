export default function Problem() {
    const problems = [
        {
            title: "The Silent $20k Leak",
            desc: "Every call you miss is a lottery ticket for your competitor. If you're at a showing and your phone rings — you just lost the lead.",
            icon: "💸"
        },
        {
            title: "Death by Delay",
            desc: "In the US market, 'Speed to Lead' isn't a suggestion. If you don't answer in 60 seconds, they've already called the next Zillow agent.",
            icon: "⏱️"
        },
        {
            title: "The Exhaustion Trap",
            desc: "You can't be 'on' 24/7. But the market is. Missing a 9 PM buyer call because you're actually having dinner? That was your closing.",
            icon: "🪫"
        }
    ];

    return (
        <section id="features" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        color: '#EF4444',
                        borderRadius: '2rem',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        marginBottom: '2rem',
                        textTransform: 'uppercase'
                    }}>The Hard Truth</div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                        You Are Losing Money <br />
                        <span style={{ color: 'var(--gold)' }}>While You Work.</span>
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        You spend thousands on lead gen, only to let the highest-intent buyers slip through your fingers because you&apos;re doing your job.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {problems.map((p, i) => (
                        <div key={i} className="glass" style={{
                            padding: '3.5rem',
                            border: '1px solid var(--border-card)',
                            background: 'var(--bg-card)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}>
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
                                border: '1px solid rgba(212, 175, 55, 0.2)'
                            }}>{p.icon}</div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{p.title}</h3>
                            <p style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                    <div className="glass" style={{ padding: '2rem 3rem', display: 'inline-block', border: '1px solid var(--gold)' }}>
                        <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                            “I thought my assistant was enough... until I realized we missed 4 calls last Sunday alone.”
                            <span style={{ color: 'var(--gold)', marginLeft: '1rem' }}>— Top 1% Houston Broker</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


