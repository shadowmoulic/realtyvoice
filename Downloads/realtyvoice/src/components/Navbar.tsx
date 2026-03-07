"use client"
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass nav-fixed">
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span className="text-gradient">Realty</span>Voice
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="nav-links">
        <Link href="/how-it-works" style={{ fontSize: '0.85rem', opacity: 0.8 }}>How it Works</Link>
        <Link href="/about" style={{ fontSize: '0.85rem', opacity: 0.8 }}>About</Link>
        <Link href="/demo" style={{ fontSize: '0.85rem', opacity: 0.8 }}>Demo</Link>
        <Link href="/contact-us" style={{ fontSize: '0.85rem', opacity: 0.8 }}>Contact Us</Link>
        <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}
