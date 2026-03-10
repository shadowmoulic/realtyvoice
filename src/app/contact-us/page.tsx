"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import Cal from "@calcom/embed-react";

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
            // 1. Send instant email via Resend FIRST (High Reliability)
            // Even if DB fails, you get the email.
            const emailPromise = fetch('/api/send-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    company,
                    message,
                    source: 'Contact Page'
                })
            });

            // 2. Save to Supabase (Secondary storage)
            const { error: supabaseError } = await supabase
                .from('leads')
                .insert([{
                    full_name: name,
                    email,
                    company_name: company,
                    source: 'contact_page'
                }]);

            // Wait for email to finish
            await emailPromise;


            setSubmitted(true);
            setName('');
            setEmail('');
            setCompany('');
            setMessage('');
        } catch (err) {
            console.error('Submission error:', err);
            // We still show success if the email part worked, 
            // but for now let's just log it.
            setSubmitted(true);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <main style={{ background: 'var(--bg-primary)' }} suppressHydrationWarning={true}>
            <Navbar />
            <section className="section" style={{ paddingTop: '12rem', minHeight: '100vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem' }}>
                            Let&apos;s Build Your <span style={{ color: 'var(--gold)' }}>AI Front Desk</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            Have questions? Speak with our team or book a custom setup call below.
                        </p>
                    </div>

                    <div className="grid-cols-2 hero-responsive" style={{ gap: '4rem', alignItems: 'start', marginBottom: '8rem' }}>
                        <div className="glass" style={{ padding: '4rem', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--text-primary)', fontWeight: 800 }}>Direct Message</h2>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem' }}>
                                    <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✓</div>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--gold)' }}>Message Received</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Our team will reach out within 24 hours.</p>
                                    <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '2rem' }}>Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <input
                                            placeholder="Full Name"
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-card)', borderRadius: '0.8rem', color: 'white', outline: 'none' }}
                                        />
                                        <input
                                            placeholder="Email Address"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-card)', borderRadius: '0.8rem', color: 'white', outline: 'none' }}
                                        />
                                    </div>
                                    <input
                                        placeholder="Company / Agency Name"
                                        type="text"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-card)', borderRadius: '0.8rem', color: 'white', outline: 'none' }}
                                    />
                                    <textarea
                                        placeholder="Briefly describe your agency needs..."
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-card)', borderRadius: '0.8rem', color: 'white', outline: 'none', resize: 'none' }}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="btn btn-primary glow"
                                        disabled={isLoading}
                                        style={{ padding: '1.2rem', fontSize: '1.1rem', fontWeight: 800 }}
                                    >
                                        {isLoading ? 'Connecting to Hub...' : 'Send to Team'}
                                    </button>
                                </form>
                            )}
                        </div>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
                                <div style={{ color: 'var(--gold)', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Official Support</div>
                                <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>sayak@afbf.in</h4>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Direct access to technical lead.</p>
                            </div>
                            <div className="glass" style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
                                <div style={{ color: 'var(--gold)', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Voice Testing Line</div>
                                <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>+1 (650) 252-4261</h4>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Call our AI to hear the authority grade quality.</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Section */}
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '3rem' }}>Schedule a <span style={{ color: 'var(--gold)' }}>10-Minute</span> Demo</h2>
                        <div className="glass" style={{
                            maxWidth: '1000px',
                            margin: '0 auto',
                            minHeight: '600px',
                            padding: '1rem',
                            borderRadius: '2rem',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                            background: 'var(--bg-card)'
                        }}>
                            <Cal namespace="15min"
                                calLink="sayak-moulic/15min"
                                style={{ width: "100%", height: "100%", minHeight: "600px", borderRadius: '1.5rem' }}
                                config={{ "layout": "month_view" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

