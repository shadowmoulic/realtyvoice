"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: '3.5rem' }}>Get in <span className="text-gradient">Touch</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>
                            Need immediate assistance or have a specific question about your agency setup?
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div className="glass" style={{ padding: '3.5rem' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Send Us a Message</h2>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input placeholder="Full Name" type="text" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }} />
                                    <input placeholder="Email Address" type="email" required style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }} />
                                </div>
                                <input placeholder="Company / Agency Name" type="text" style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }} />
                                <textarea placeholder="How can we help?" required rows={5} style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none', resize: 'none' }}></textarea>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
                            </form>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '2rem' }}>
                                <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}>Email Us</h4>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>sayak@afbf.in</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem' }}>
                                <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}>Call Our Front Desk</h4>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>+1 (650) 252-4261</p>
                            </div>
                            <div className="glass" style={{ padding: '2rem' }}>
                                <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}>Availability</h4>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>24/7 AI Receptionist / Mon-Fri (9AM-5PM) Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
