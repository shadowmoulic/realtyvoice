import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="section" style={{
            background: 'rgba(5, 10, 20, 0.8)',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '6rem',
            paddingBottom: '3rem'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <span className="text-gradient">Realty</span>Voice
                        </h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                            Never miss a lead again. RealtyVoice AI answers your missed calls, qualifies leads, and books showings 24/7.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link href="/" style={{ fontSize: '0.9rem', opacity: 0.7 }}>Home</Link>
                            <Link href="/how-it-works" style={{ fontSize: '0.9rem', opacity: 0.7 }}>How it Works</Link>
                            <Link href="/demo" style={{ fontSize: '0.9rem', opacity: 0.7 }}>Demo Hub</Link>
                            <Link href="/about" style={{ fontSize: '0.9rem', opacity: 0.7 }}>About Us</Link>
                            <Link href="https://cal.com/sayak-moulic/15min" style={{ fontSize: '0.9rem', opacity: 0.7 }}>7-Day Trial</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem' }}>Contact & Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <p style={{ marginBottom: 0, fontSize: '0.9rem', opacity: 0.7 }}>Email: <a href="mailto:sayak@afbf.in" className="text-gradient">sayak@afbf.in</a></p>
                            <p style={{ marginBottom: 0, fontSize: '0.9rem', opacity: 0.7 }}>Direct: <a href="tel:+16502524261" className="text-gradient">+1 (650) 252-4261</a></p>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
                    © {new Date().getFullYear()} RealtyVoice. Built by Agents, For Agents. US Market Only.
                </div>
            </div>
        </footer>
    );
}
