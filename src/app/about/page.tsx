"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: '3.5rem' }}>Why <span className="text-gradient">RealtyVoice?</span></h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem' }}>
                            We&apos;re real estate professionals first, and technology enthusiasts second.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>
                                We understand the hustle of a modern real estate agent. You&apos;re constantly on the move — from showings to closings, from the car to the driveway.
                            </p>
                            <p style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>
                                Every time you can&apos;t answer your phone, you risk losing a potential client to someone else. RealtyVoice was born out of the need to bridge that gap.
                            </p>
                            <p style={{ fontSize: '1.15rem', margin: 0, fontWeight: 700, color: 'var(--primary-light)' }}>
                                &ldquo;We build the AI assistant we wanted for our own real estate careers.&rdquo;
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }} className="text-gradient">Dedicated</div>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>Built Specifically for RE Agents</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }} className="text-gradient">24/7</div>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>Never-Sleep AI Core</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }} className="text-gradient">Instant</div>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>Zero Lead Response Delay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
