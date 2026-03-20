"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // Re-run observer on path change in case new elements render

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Blueprint', href: '/how-it-works' },
    { name: 'ROI', href: '/pricing' },
    { name: 'Social Proof', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
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
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  opacity: isActive ? 1 : 0.7,
                  color: isActive ? 'var(--gold)' : 'white',
                  textShadow: isActive ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {link.name}
              </Link>
            );
          })}
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
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
                style={{
                  color: isActive ? 'var(--gold)' : 'white',
                  textShadow: isActive ? '0 0 20px rgba(212, 175, 55, 0.4)' : 'none'
                }}
              >
                {link.name}
              </Link>
            );
          })}
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
