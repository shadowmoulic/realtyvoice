"use client"
export default function Solution() {
    const features = [
        {
            title: "Authority Transcription",
            desc: "Read every word the AI says. Stay in control without being on the call."
        },
        {
            title: "Zillow-Speed Response",
            desc: "Answering in < 2 seconds. Before they even think about calling the next agent."
        },
        {
            title: "Live Lead Handoff",
            desc: "If the AI detects a 'Hot Buyer', it can instantly patch the call through to your mobile."
        }
    ];

    return (
        <section id="solution" className="section" style={{ position: 'relative', background: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                        The <span style={{ color: 'var(--gold)' }}>Instant</span> Fix.
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
                        We plug Authority-Grade AI into your phone line. It qualifies, it books, and it ensures you never miss a commission check again.
                    </p>
                </div>

                <div style={{ marginBottom: '8rem' }}>
                    <div className="glass" style={{ padding: '1.5rem', maxWidth: '1000px', margin: '0 auto', overflow: 'hidden', border: '1px solid var(--border-card)', boxShadow: '0 50px 100px rgba(0,0,0,0.4)' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://www.loom.com/embed/454f7620c4b848e2b212c726f6531370"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '1rem', border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--gold)', fontWeight: 600 }}>↑ Watch how we capture a $1.2M lead in real-time.</p>
                    </div>
                </div>

                <div id="features">
                    <div className="grid-cols-3" style={{ gap: '2rem' }}>
                        {features.map((f, i) => (
                            <div key={i} className="glass" style={{ padding: '3rem', border: '1px solid var(--border-card)', background: 'rgba(255,255,255,0.02)' }}>
                                <h4 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', color: 'var(--text-primary)', fontWeight: 800 }}>{f.title}</h4>
                                <p style={{ marginBottom: 0, fontSize: '1.1rem', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

