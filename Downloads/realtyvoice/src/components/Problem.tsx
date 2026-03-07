export default function Problem() {
    const problems = [
        {
            title: "Missed Calls",
            desc: "Every missed call is a lead you're paying for but not capturing.",
            icon: "📞"
        },
        {
            title: "Delayed Response",
            desc: "Wait 30 minutes to call back and lead conversion chances drop 40%.",
            icon: "⏰"
        },
        {
            title: "Busy at Showings",
            desc: "You can't be in a showing and answer a new lead at the same time.",
            icon: "🏠"
        }
    ];

    return (
        <section id="problem" className="section" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>The Revenue Killer: Missed Calls</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Real estate leads move fast. If you don&apos;t answer when they call, they move to the next agent.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {problems.map((p, i) => (
                        <div key={i} className="glass" style={{ padding: '2.5rem', transition: 'all 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{p.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
                            <p style={{ margin: 0 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
