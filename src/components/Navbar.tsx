"use client"
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass nav-fixed" style={{
      background: 'rgba(11, 11, 18, 0.8)',
      padding: '0.75rem 2.5rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      marginTop: '1rem',
      borderRadius: '3rem'
    }}>
      <Link href="/" style={{ fontSize: '1.6rem', fontWeight: 900, color: 'white', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ color: 'var(--gold)' }}>Realty</span>Voice
      </Link>


      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links">
        <Link href="/how-it-works" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>Blueprint</Link>
        <Link href="/pricing" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>ROI</Link>
        <Link href="/testimonials" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>Social Proof</Link>
        <Link href="/about" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>Our Why</Link>
        <Link href="/contact-us" style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.9 }}>Contact</Link>

        <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{
          padding: '0.7rem 1.8rem',
          fontSize: '0.95rem',
          background: 'var(--primary)',
          color: 'white'
        }}>
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}

