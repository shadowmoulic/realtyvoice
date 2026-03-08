"use client"
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

const featuredTestimonials = [
    {
        name: "Sarah Jenkins",
        role: "Luxury Listing Agent",
        location: "Austin, TX",
        content: "I used to panic every time my phone rang while I was with a client. Now, RealtyVoice handles everything. It qualified a $1.2M buyer while I was at my daughter's dance recital. Unbelievable.",
        rating: 5
    },
    {
        name: "Michael Rodriguez",
        role: "Broker/Owner",
        location: "Houston, TX",
        content: "The ROI is insane. We were missing about 30% of our inbound calls. RealtyVoice doesn't just answer; it actually books the showings. My team is closing 2 more deals a month on average.",
        rating: 5
    },
    {
        name: "Emily Chen",
        role: "Residential Specialist",
        location: "Dallas, TX",
        content: "Most AI sounds like a robot. This sounds like my actual assistant. Patients and polite, and it never forgets to ask about pre-approval. It's the best employee I've ever had.",
        rating: 5
    },
    {
        name: "David Thompson",
        role: "Commercial Agent",
        location: "San Antonio, TX",
        content: "The 7-day trial sold me. I thought it was hype, but seeing the transcripts and the qualified leads appearing in my Google Sheet was all the proof I needed.",
        rating: 5
    },
    {
        name: "Jessica Morales",
        role: "Top Producer",
        location: "El Paso, TX",
        content: "Texas real estate is fast. If you don't answer, you lose. RealtyVoice is my secret weapon. It handles the tire-kickers so I only talk to serious buyers.",
        rating: 5
    },
    {
        name: "Robert Wilson",
        role: "Independent Broker",
        location: "Fort Worth, TX",
        content: "I was skeptical about AI, but the setup took literally 10 minutes. I forwarded my missed calls and started getting appointment notifications the same day.",
        rating: 5
    },
    {
        name: "Amanda Blake",
        role: "New Construction Expert",
        location: "Plano, TX",
        content: "Never miss another $20k commission? It's true. I missed a call on a Sunday morning and RealtyVoice booked the showing for Monday afternoon. Closed that deal last week.",
        rating: 5
    }
];

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        location: '',
        content: '',
        rating: 5
    });

    useEffect(() => {
        const fetchTestimonials = async () => {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .eq('is_approved', true)
                .order('created_at', { ascending: false });

            if (data) setTestimonials(data);
        };
        fetchTestimonials();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');

        try {
            const { error } = await supabase
                .from('testimonials')
                .insert([{ ...formData, is_approved: false }]);

            if (error) throw error;

            // Send notification
            await fetch('/api/send-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: 'N/A',
                    company: formData.role,
                    message: formData.content,
                    source: 'Testimonial Submission'
                })
            });

            setSubmitStatus('success');
            setFormData({ name: '', role: '', location: '', content: '', rating: 5 });
        } catch (err) {
            setSubmitStatus('error');
        }
    };


    return (
        <main style={{ background: 'var(--bg-primary)' }}>
            <Navbar />
            <section className="section" style={{ paddingTop: '12rem', minHeight: '100vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem', color: 'var(--text-primary)' }}>
                            Trusted by <span style={{ color: 'var(--gold)' }}>Active Agents</span>
                        </h1>
                        <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.4rem', color: 'var(--text-secondary)' }}>
                            Join high-performing real estate professionals who never miss a high-value lead.
                        </p>

                    </div>

                    {/* Masonry-like Grid */}
                    <div style={{
                        columnCount: 3,
                        columnGap: '2rem',
                        breakInside: 'avoid'
                    }} className="testimonials-grid">
                        {[...featuredTestimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="glass" style={{
                                padding: '2.5rem',
                                marginBottom: '2rem',
                                breakInside: 'avoid',
                                display: 'inline-block',
                                width: '100%',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                borderRadius: '1.5rem',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>
                                    {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                                    &ldquo;{t.content}&rdquo;
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-deep)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 800
                                    }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role} • {t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Submission Block */}
                    <div style={{ marginTop: '8rem', maxWidth: '800px', margin: '8rem auto 0' }}>
                        <div className="glass" style={{ padding: '4rem', borderRadius: '2rem', border: '1px solid var(--primary-soft)' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Share Your Experience</h2>
                            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                                How has RealtyVoice changed your business? We&apos;d love to hear your story.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        className="glass"
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-card)', color: 'white' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Role (e.g. Broker)"
                                        required
                                        className="glass"
                                        style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-card)', color: 'white' }}
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Location (City, State)"
                                    required
                                    className="glass"
                                    style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-card)', color: 'white' }}
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                                <textarea
                                    placeholder="Your testimonial..."
                                    required
                                    rows={4}
                                    className="glass"
                                    style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-card)', color: 'white', resize: 'none' }}
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={submitStatus === 'loading'}
                                    style={{ padding: '1.2rem', fontSize: '1.1rem' }}
                                >
                                    {submitStatus === 'loading' ? 'Submitting...' : 'Submit Testimonial'}
                                </button>
                                {submitStatus === 'success' && (
                                    <p style={{ color: 'var(--gold)', textAlign: 'center', marginTop: '1rem' }}>✓ Thank you! Your testimonial has been submitted for review.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media (max-width: 992px) {
                    .testimonials-grid { column-count: 2 !important; }
                }
                @media (max-width: 600px) {
                    .testimonials-grid { column-count: 1 !important; }
                    input { grid-template-columns: 1fr !important; }
                }
            `}</style>

            <Footer />
        </main>
    );
}
