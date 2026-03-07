"use client"
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

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
        setIsLoading(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([{ email, source: 'exit_intent' }]);

            if (error) throw error;

            setSubmitted(true);
            localStorage.setItem('realtyvoice_popup_optin', 'true');

            // Redirect to blueprint access page after 1.5 seconds
            setTimeout(() => {
                router.push('/blueprint-access');
                isVisible && setIsVisible(false);
            }, 1500);
        } catch (err) {
            console.error('Error saving lead:', err);
            setSubmitted(true);
            setTimeout(() => {
                router.push('/blueprint-access');
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
                        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔥</div>
                        <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Check Your Inbox!</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Your blueprint is on its way. In the meantime, see it in action.
                        </p>
                        <button onClick={closePopup} className="btn btn-outline" style={{ width: '100%' }}>
                            Return to RealtyVoice
                        </button>
                    </div>
                ) : (
                    <>
                        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🎁</div>
                        <h2 className="text-gradient" style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>The 24/7 AI Lead Capture Blueprint</h2>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.15rem' }}>
                            Stop losing commissions to missed calls. Get the <strong>exact</strong> system top agents use to 2x their conversion rates.
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
                                style={{ width: '100%', padding: '1rem', opacity: isLoading ? 0.7 : 1 }}
                            >
                                {isLoading ? 'Sending...' : 'Send Me the Blueprint 🚀'}
                            </button>
                        </form>
                        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.6 }}>No spam. Just value for real estate professionals.</p>
                    </>
                )}
            </div>
        </div>
    );
}
