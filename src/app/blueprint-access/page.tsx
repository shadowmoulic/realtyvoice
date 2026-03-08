"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlueprintAccess() {
    const chapters = [
        {
            title: "The Silent Killer: The 'Speed to Lead' Myth",
            content: "Most agents think calling back in 15 minutes is 'fast'. Data from MIT shows that waiting just 5 minutes to respond to a new lead decreases your odds of qualifying them by 400%. AI doesn't wait. It answers the millisecond the lead hits your system, ensuring you are the FIRST person they talk to, not the third or fourth."
        },
        {
            title: "Phase 1: The 'Warm Greeting' Psychology",
            content: "A robotic voice kills trust. Our AI maintains a natural, empathetic tone. It identifies itself: 'Hi, I'm calling on behalf of Sarah. I saw you were looking at homes in Austin...' This immediate personalization builds an instant bridge of human-like rapport."
        },
        {
            title: "Phase 2: The Qualification Engine",
            content: "Not all leads are created equal. The blueprint reveals the 4 'Golden Questions' the AI asks: \n1. Motivation: 'Are you looking to move in the next 30, 60, or 90 days?' \n2. Financial: 'Have you been pre-approved yet, or do you need a local lender recommendation?' \n3. Specificity: 'Is there a specific property that caught your eye?' \n4. The Appointment: 'Is tomorrow at 2 PM or 4 PM better for a quick showing?'"
        },
        {
            title: "Phase 3: The 'Sunday Afternoon' Problem",
            content: "You're at a family brunch. A hot Zillow lead calls. Usually, that goes to voicemail. With this system, the AI handles the intake, qualifies them, and drops the appointment into your Google Calendar while you're still finishing your meal. You don't manage leads—you manage appointments."
        },
        {
            title: "The New Era: Outbound Resurrection",
            content: "Most CRMs have 500+ 'dead' leads. Calling them manually is soul-crushing. AI can call all 500 in a single morning, identify the 5-10 who are back in the market, qualify them, and hand them to you on a silver platter."
        }
    ];

    return (
        <main style={{ background: 'var(--bg-primary)' }}>
            <Navbar />
            <div>
                {/* Hero Section */}
                <section className="section" style={{ paddingTop: '12rem', textAlign: 'center', background: 'radial-gradient(circle at 50% 10%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <div style={{ fontSize: '1rem', color: 'var(--gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem' }}>INTERNAL ACCESS ONLY</div>
                        <h1 className="text-gradient" style={{ fontSize: '4.5rem', lineHeight: 1.1, fontWeight: 900 }}>
                            The 24/7 AI Lead Capture <br /> Master Blueprint
                        </h1>
                        <p style={{ fontSize: '1.5rem', marginTop: '2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '2rem auto' }}>
                            Stop working for your leads. Make your AI work for <strong>you</strong>. Never miss another $20,000 commission call.
                        </p>
                    </div>
                </section>

                {/* Main Content Sections */}
                <section className="section" style={{ padding: '0 0 8rem' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <div className="glass" style={{
                            padding: '5rem',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-card)',
                            borderRadius: '2rem',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
                        }}>
                            <div style={{ marginBottom: '5rem' }}>
                                <p style={{ fontSize: '1.3rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
                                    Welcome to the new standard of US Real Estate. In an era where attention is the most valuable currency,
                                    being \"available\" isn't enough. You have to be <strong>instant</strong>.
                                    This blueprint outlines how top-producing agents are using AI voice technology to scale.
                                </p>
                            </div>

                            {chapters.map((chapter, i) => (
                                <div key={i} style={{ marginBottom: '6rem' }} className="fade-in">
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.6rem 1.2rem',
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        color: 'var(--gold)',
                                        borderRadius: '0.5rem',
                                        fontSize: '0.85rem',
                                        fontWeight: 800,
                                        marginBottom: '1.5rem'
                                    }}>
                                        STRATEGY {i + 1}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 800 }}>{chapter.title}</h2>
                                    <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                                        {chapter.content}
                                    </p>
                                </div>
                            ))}

                            <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: '5rem', marginTop: '4rem' }}>
                                <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--text-primary)', fontWeight: 800 }}>The Competitive Advantage</h2>
                                <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--text-secondary)' }}>
                                    In 24 months, every major agency will have an AI voice presence.
                                    Those who adopt it <strong>now</strong> will swallow the market share of those who wait.
                                </p>

                                <div className="glass" style={{
                                    padding: '4rem',
                                    textAlign: 'center',
                                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(212, 175, 55, 0.05))',
                                    border: '2px solid var(--gold)',
                                    borderRadius: '2rem',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                                }}>
                                    <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--gold)' }}>No More Missed Commissions</h3>
                                    <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                                        We are currently offering a limited 7-day trial where we set up a dedicated
                                        AI assistant for your agency. See the results before you spend a dime.
                                    </p>
                                    <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{
                                        padding: '1.5rem 4rem',
                                        fontSize: '1.3rem',
                                        background: 'var(--gold)',
                                        color: 'black',
                                        fontWeight: 800
                                    }}>
                                        Secure Your Free Spot 🚀
                                    </Link>
                                    <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
                                        *Currently serving US Real Estate markets only.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}

