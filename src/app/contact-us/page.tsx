"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([{
                    full_name: name,
                    email,
                    company_name: company,
                    source: 'contact_page'
                }]);

            if (error) throw error;
            setSubmitted(true);
        } catch (err) {
            console.error('Error submitting contact form:', err);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

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
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                    <h3>Message Received!</h3>
                                    <p>Our team (or our AI) will get back to you shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1rem' }}>Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input
                                            placeholder="Full Name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                        />
                                        <input
                                            placeholder="Email Address"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                        />
                                    </div>
                                    <input
                                        placeholder="Company / Agency Name"
                                        type="text"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                    />
                                    <textarea
                                        placeholder="How can we help?"
                                        required
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none', resize: 'none' }}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isLoading}
                                        style={{ marginTop: '1rem', opacity: isLoading ? 0.7 : 1 }}
                                    >
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
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
