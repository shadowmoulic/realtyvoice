"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Blueprint', href: '/how-it-works' },
    { name: 'ROI', href: '/pricing' },
    { name: 'Social Proof', href: '/testimonials' },
    { name: 'Our Why', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      <nav className="glass nav-fixed" style={{
        background: 'rgba(11, 11, 18, 0.8)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        borderRadius: '3rem'
      }}>
        <Link href="/" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white', display: 'flex', alignItems: 'center', gap: '0.6rem' }} onClick={() => setIsOpen(false)}>
          <span style={{ color: 'var(--gold)' }}>Realty</span>Voice
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="nav-links-desktop">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.9 }}>
              {link.name}
            </Link>
          ))}
          <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{
            padding: '0.6rem 1.4rem',
            fontSize: '0.9rem',
            background: 'var(--primary)',
            color: 'white'
          }}>
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label="Toggle menu"
          style={{ position: 'relative', zIndex: 3100 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://cal.com/sayak-moulic/15min"
            className="btn btn-primary"
            style={{ padding: '1rem 2rem', marginTop: '1rem' }}
            onClick={() => setIsOpen(false)}
          >
            Start Free Trial
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: '3rem',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: 'pointer'
            }}
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
}

