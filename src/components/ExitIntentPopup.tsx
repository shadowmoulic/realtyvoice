"use client"
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Gift, FireExtinguisher, Zap } from "lucide-react";

export default function ExitIntentPopup() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Check if user has already seen it this session
        const hasSeen = localStorage.getItem('realtyvoice_popup_seen');
        if (hasSeen) return;

        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 && !isVisible && !isDismissed) {
                setIsVisible(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseOut);
        return () => document.removeEventListener('mouseleave', handleMouseOut);
    }, [isVisible, isDismissed]);

    const closePopup = () => {
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem('realtyvoice_popup_seen', 'true');
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([{ email, source: 'exit_intent' }]);

            if (error) throw error;

            setSubmitted(true);
            localStorage.setItem('realtyvoice_popup_optin', 'true');

            // Reliable redirect to blueprint access page
            console.log("Lead captured, redirecting...");
            setTimeout(() => {
                window.location.href = '/blueprint-access';
            }, 1500);

        } catch (err) {
            console.error('Error saving lead:', err);
            // Even on error, we want to redirect to provide value
            setSubmitted(true);
            setTimeout(() => {
                window.location.href = '/blueprint-access';
            }, 1000);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 2000, padding: '1rem'
        }}>
            <div className="glass fade-in" style={{
                maxWidth: '500px', width: '100%', padding: '3.5rem', textAlign: 'center',
                position: 'relative', border: '1px solid var(--primary-light)',
                boxShadow: '0 0 50px rgba(109, 40, 217, 0.3)'
            }}>
                <button
                    onClick={closePopup}
                    style={{
                        position: 'absolute', top: '1rem', right: '1rem', background: 'none',
                        border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', opacity: 0.5
                    }}
                > × </button>

                {submitted ? (
                    <div className="fade-in">
                        <div style={{ color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><Zap size={64} /></div>
                        <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Redirecting...</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Your blueprint is ready. Hang tight while we take you there.
                        </p>
                    </div>
                ) : (
                    <>
                        <div style={{ color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><Gift size={64} /></div>
                        <h2 className="text-gradient" style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>The 24/7 AI Lead Capture Blueprint</h2>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.15rem' }}>
                            Stop losing commissions to missed calls. Get the <strong>exact</strong> system top agents use.
                        </p>

                        <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your professional email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%', padding: '1rem', borderRadius: '0.6rem',
                                    background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)',
                                    color: 'white', marginBottom: '1.25rem', outline: 'none', fontSize: '1rem'
                                }}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoading}
                                style={{ width: '100%', padding: '1rem', opacity: isLoading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                {isLoading ? 'Sending...' : 'Get Instant Access'} <Zap size={18} />
                            </button>
                        </form>
                        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.6 }}>No spam. Just value for real estate professionals.</p>
                    </>
                )}
            </div>
        </div>
    );
}
