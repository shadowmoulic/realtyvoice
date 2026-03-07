"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoHub() {
    const recordings = [
        {
            title: "Cold Call Inbound",
            agent: "AI Sarah",
            duration: "2:14",
            desc: "Lead inquiry about property availability and price. Qualifies on budget and books showing.",
            status: "Qualified & Booked"
        },
        {
            title: "Lease Inquiry",
            agent: "AI John",
            duration: "1:45",
            desc: "Rental property inquiry. Qualifies on credit score and pet status.",
            status: "Qualified"
        },
        {
            title: "Buyer Follow-up",
            agent: "AI Sarah",
            duration: "3:02",
            desc: "Outbound call to old lead from CRM. Checks if still searching and updates preferences.",
            status: "Re-engaged"
        },
        {
            title: "Listing Presentation Hook",
            agent: "AI Front Desk",
            duration: "1:20",
            desc: "Prospect calling for appraisal. Qualifies on timeline and motivation.",
            status: "High Intent"
        }
    ];

    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5.5rem' }}>
                        <h1 style={{ fontSize: '3.5rem' }}>The Demo <span className="text-gradient">Hub</span></h1>
                        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.25rem' }}>
                            Hear the difference. Real calls, real leads, qualified by RealtyVoice in seconds.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        {recordings.map((rec, i) => (
                            <div key={i} className="glass" style={{ padding: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', background: 'rgba(109, 40, 217, 0.3)', padding: '0.3rem 0.8rem', borderRadius: '1rem', color: 'var(--primary-light)' }}>
                                        {rec.agent}
                                    </span>
                                    <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>{rec.duration} mins</span>
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{rec.title}</h3>
                                <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', minHeight: '3rem' }}>{rec.desc}</p>

                                <div style={{
                                    padding: '1.5rem',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '0.5rem',
                                    marginBottom: '1.5rem',
                                    textAlign: 'center',
                                    border: '1px dashed rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>⏺️</div>
                                    <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.5 }}>Audio player placeholder. Pushing recording soon...</p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%' }}></div>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{rec.status}</span>
                                    </div>
                                    <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Read Transcript</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '6.5rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>Want a custom demo for your agency?</h2>
                        <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                            Book Yours Now ☎️
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
