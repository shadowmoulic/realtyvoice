"use client"
export default function Solution() {
    const steps = [
        {
            title: "Step 1: Always Available",
            desc: "Our AI answers instantly whenever you're busy or away. Your brand, your voice, 24/7.",
            icon: "⚡"
        },
        {
            title: "Step 2: Qualify the Lead",
            desc: "Instant qualification on budget, timeline, and pre-approval status. No more tyre-kickers.",
            icon: "📋"
        },
        {
            title: "Step 3: Book the Showing",
            desc: "AI directly books a time on your calendar and sends the lead a confirmation text.",
            icon: "📅"
        }
    ];

    const features = [
        {
            title: "CRM Integration",
            desc: "Data is automatically synced to your CRM. No more manual data entry. All conversations are logged and ready for review."
        },
        {
            title: "Outbound AI Follow-up",
            desc: "Bring old leads back to life. Our AI can call your stale pipeline, check interest levels, and re-engage buyers."
        },
        {
            title: "Real Human Tone",
            desc: "Leads won&apos;t even know they&apos;re talking to an AI. It&apos;s warm, professional, and sounds exactly like a real assistant."
        },
        {
            title: "Instant Text Follow-up",
            desc: "Immediately following every call, a text message is sent to the lead with your contact details and next steps."
        },
        {
            title: "Live Transfer",
            desc: "If a lead is high-priority or requests to speak with you directly, the AI can instantly transfer the call to your mobile.",
            isExtra: true
        }
    ];

    return (
        <section id="solution" className="section" style={{ position: 'relative' }}>
            {/* Glow behind */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'var(--primary)',
                filter: 'blur(200px)',
                opacity: 0.1,
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Your 24/7 AI Receptionist</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
                        We plug our AI directly into your phone number. Your leads don&apos;t wait, and you don&apos;t miss a beat.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', position: 'relative', marginBottom: '6rem' }}>
                    {steps.map((step, i) => (
                        <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                            <div className="glass" style={{
                                width: '100px',
                                height: '100px',
                                margin: '0 auto 2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                border: '1px solid var(--primary-light)',
                                boxShadow: '0 0 30px rgba(109, 40, 217, 0.2)'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>{step.title}</h3>
                            <p style={{ margin: 0 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginBottom: '6rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>See It In Action</h2>
                    <div className="glass" style={{ padding: '1rem', maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://www.loom.com/embed/454f7620c4b848e2b212c726f6531370"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '0.5rem', border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div id="features">
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Why RealtyVoice?</h2>
                    <div className="grid-cols-5">
                        {features.map((f, i) => (
                            <div key={i} className={`glass feature-card ${f.isExtra ? 'desktop-only' : ''}`} style={{ padding: '2.5rem' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-light)' }}>{f.title}</h4>
                                <p style={{ marginBottom: 0 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
