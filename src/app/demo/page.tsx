import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Demos from "@/components/Demos";
import { UserCheck, Play, Pause } from "lucide-react";
import Link from 'next/link';

export const metadata = {
    title: 'AI Demos | RealtyVoice - Hear the Future of Real Estate',
    description: 'Listen to our specialized AI agents (Sarah, Jenny, Sophie) handle property inquiries, lease negotiations, and re-engagement calls.',
};

export default function DemoPage() {
    return (
        <main style={{ background: 'var(--bg-primary)' }}>
            <Navbar />

            {/* Demo Hero: Main Inbound Assistant */}
            <section className="section" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'radial-gradient(circle at 10% 10%, rgba(109, 41, 216, 0.05) 0%, transparent 50%)' }}>
                <div className="container">
                    <div className="glass reveal demo-hero-content" style={{
                        padding: '4rem',
                        borderRadius: '2rem',
                        border: '1px solid var(--gold)',
                        boxShadow: '0 0 50px rgba(212, 175, 55, 0.1)'
                    }}>
                        <div className="demo-hero-grid">
                            <div>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(212, 175, 55, 0.1)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    color: 'var(--gold)',
                                    borderRadius: '2rem',
                                    fontSize: '0.8rem',
                                    fontWeight: 800,
                                    marginBottom: '1.5rem',
                                    textTransform: 'uppercase'
                                }}>Featured Agent</div>
                                <h1 className="demo-hero-title" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                    Meet <span style={{ color: 'var(--gold)' }}>The Premium Concierge</span>
                                </h1>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                    Sarah is our warm, authoritative inbound specialist. She handles active listings with the expertise of a 10-year veteran, ensuring every buyer feels prioritized and every detail is captured.
                                </p>

                                <div className="flex-center-mobile" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '3rem' }}>
                                    <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                                        Get Your Free AI Blueprint
                                    </Link>
                                    <Link href="/pricing" style={{ color: 'white', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '2px' }}>
                                        Setup in 15 Minutes →
                                    </Link>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    position: 'relative',
                                    width: '220px',
                                    height: '220px',
                                    margin: '0 auto 2rem',
                                    background: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '5px solid var(--gold)',
                                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)'
                                }}>
                                    <UserCheck size={100} color="var(--gold)" />
                                    <div className="pulse-slow" style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        border: '1px solid var(--gold)',
                                        opacity: 0.5
                                    }}></div>
                                </div>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2rem' }}>
                                    &ldquo;I&apos;m Sarah, how can I help you find your dream home today?&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ paddingTop: '2rem' }}>
                <Demos showAll={true} />
            </div>

            {/* Final CTA: Book an Appointment */}
            <section className="section" style={{ paddingBottom: '8rem' }}>
                <div className="container">
                    <div className="glass reveal" style={{
                        padding: '5rem 2rem',
                        textAlign: 'center',
                        borderRadius: '2rem',
                        background: 'linear-gradient(135deg, rgba(109, 41, 216, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>
                            Ready to Deploy Your <span style={{ color: 'var(--gold)' }}>AI Authority</span>?
                        </h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            Join 500+ agents who have reclaimed their time and multiplied their lead conversion with RealtyVoice.
                        </p>
                        <div className="flex-center-mobile" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                                Book Your Discovery Call
                            </Link>
                            <Link href="/pricing" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                                See Pricing & Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
