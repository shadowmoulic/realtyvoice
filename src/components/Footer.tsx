import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="section" style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-card)',
            paddingTop: '6rem',
            paddingBottom: '3rem'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <span style={{ color: 'var(--gold)' }}>Realty</span>Voice
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            Never miss another $20,000 commission call. RealtyVoice AI answers your missed calls, qualifies leads, and books showings 24/7.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 700 }}>Solutions</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Home</Link>
                            <Link href="/how-it-works" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>The Blueprint</Link>
                            <Link href="/pricing" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Investment ROI</Link>
                            <Link href="/blog" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Blog</Link>
                            <Link href="/testimonials" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Social Proof</Link>
                            <Link href="/about" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Our Why</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 700 }}>Contact & Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email: <a href="mailto:sayak@realtyvoice.online" style={{ color: 'white' }}>sayak@realtyvoice.online</a></p>
                            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Direct: <a href="tel:+16502524261" style={{ color: 'white' }}>+1 (650) 252-4261</a></p>
                            <div style={{ marginTop: '1rem' }}>
                                <div style={{ display: 'flex', gap: '4px', marginBottom: '0.5rem' }}>
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />)}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Exclusively for High-Volume US Teams</div>
                            </div>
                        </div>
                    </div>


                </div>

                <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '2.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    © {new Date().getFullYear()} RealtyVoice. Built by Agents, For Agents in US & Texas Markets.
                </div>
            </div>
        </footer>
    );
}

