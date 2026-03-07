"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlueprintAccess() {
    const pillars = [
        {
            title: "The 2-Second Rule",
            desc: "Why human response times are killing your deals and how AI cuts it to sub-2 seconds."
        },
        {
            title: "The Qualification Script",
            desc: "The 4 specific questions our AI asks to separate 'window shoppers' from high-intent buyers."
        },
        {
            title: "Direct Calendar Injection",
            desc: "How to bypass the 'let me check my schedule' dance by booking directly into your CRM."
        },
        {
            title: "The Outbound Resurrection",
            desc: "Using AI to call your 6-month-old stale leads and bringing them back into the pipeline."
        }
    ];

    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass" style={{ padding: '4rem', border: '1px solid var(--primary-light)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📜</div>
                            <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Your AI Lead Capture Blueprint</h1>
                            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                                You now have the exact framework used by top-performing US agencies.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
                            {pillars.map((p, i) => (
                                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--primary)' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary-light)' }}>
                                        {i + 1}. {p.title}
                                    </h3>
                                    <p style={{ margin: 0, opacity: 0.7 }}>{p.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="glass" style={{
                            padding: '3rem',
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.2), rgba(30, 64, 175, 0.2))',
                            border: '1px solid var(--primary-light)'
                        }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Want us to build this for you?</h2>
                            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                                Skip the manual setup. We can have your AI receptionist live and answering calls in less than 24 hours.
                            </p>
                            <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{ padding: '1rem 2.5rem' }}>
                                Start Your 7-Day Free Trial 🚀
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
