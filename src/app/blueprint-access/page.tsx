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
            content: "A robotic voice kills trust. Our AI uses advanced RVC (Retrieval-based Voice Conversion) to maintain a natural, empathetic tone. It identifies itself: 'Hi, I'm calling on behalf of [Agent Name]. I saw you were looking at homes in [Area]...' This immediate personalization builds an instant bridge of human-like rapport."
        },
        {
            title: "Phase 2: The Qualification Engine",
            content: "Not all leads are created equal. The blueprint reveals the 4 'Golden Questions' the AI asks: \n1. Motivation: 'Are you looking to move in the next 30, 60, or 90 days?' \n2. Financial: 'Have you been pre-approved yet, or do you need a local lender recommendation?' \n3. Specificity: 'Is there a specific property that caught your eye, or are you just starting your search?' \n4. The Appointment: 'Is tomorrow at 2 PM or 4 PM better for a quick showing?'"
        },
        {
            title: "Phase 3: The 'Sunday Afternoon' Problem",
            content: "You're at a family brunch or a showing. A hot Zillow lead calls. Usually, that goes to voicemail and they call the next agent. With this system, the AI handles the entire intake, qualifies them, and drops the appointment into your Google Calendar while you're still finishing your meal. You don't manage leads—you manage appointments."
        },
        {
            title: "The New Era: Outbound Resurrection",
            content: "Most CRMs have 500+ 'dead' leads. Calling them manually is soul-crushing. AI can call all 500 in a single morning, identify the 5-10 who are back in the market, qualify them, and hand them to you on a silver platter. This isn't just a phone system; it's a revenue-generation machine."
        }
    ];

    return (
        <main>
            <Navbar />
            <div style={{ background: 'var(--background)' }}>
                {/* Hero Section of the Blueprint */}
                <section className="section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>📖</div>
                        <h1 className="text-gradient" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
                            The 24/7 AI Lead Capture <br className="desktop-only" /> Master Blueprint
                        </h1>
                        <p style={{ fontSize: '1.4rem', marginTop: '1.5rem', opacity: 0.9 }}>
                            Stop working for your leads. Make your leads work for <strong>you</strong>.
                        </p>
                    </div>
                </section>

                {/* Main Content Sections */}
                <section className="section" style={{ padding: '0 0 5rem' }}>
                    <div className="container" style={{ maxWidth: '850px' }}>
                        <div className="glass" style={{ padding: '4rem', paddingBottom: '2rem' }}>
                            <div style={{ marginBottom: '4rem' }}>
                                <p style={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
                                    Welcome to the new standard of US Real Estate. In an era where attention is the most valuable currency,
                                    being "available" isn't enough. You have to be <strong>instant</strong>.
                                    This blueprint outlines how top-producing 1% agents are using AI voice technology to scale their
                                    outreach without adding to their headcount.
                                </p>
                            </div>

                            {chapters.map((chapter, i) => (
                                <div key={i} style={{ marginBottom: '5rem', animationDelay: `${i * 0.1}s` }} className="fade-in">
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: 'var(--primary)',
                                        borderRadius: '0.4rem',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        marginBottom: '1rem'
                                    }}>
                                        CHAPTER {i + 1}
                                    </div>
                                    <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: 'white' }}>{chapter.title}</h2>
                                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.85, whiteSpace: 'pre-line' }}>
                                        {chapter.content}
                                    </p>
                                </div>
                            ))}

                            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem', marginTop: '2rem' }}>
                                <h2 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>The Competitive Advantage</h2>
                                <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem' }}>
                                    In 24 months, every major agency will have an AI voice presence.
                                    Those who adopt it <strong>now</strong> will swallow the market share of those who wait.
                                    Which side of the line will you be on?
                                </p>

                                <div className="glass" style={{
                                    padding: '3rem',
                                    textAlign: 'center',
                                    background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.3), rgba(30, 64, 175, 0.3))',
                                    border: '1px solid var(--primary-light)',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                                }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>No More Missed Commissions</h3>
                                    <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                                        We are currently offering a limited 7-day trial where we set up a dedicated
                                        AI assistant for your agency. See the results before you spend a dime.
                                    </p>
                                    <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary pulse" style={{ padding: '1.25rem 3.5rem', fontSize: '1.2rem' }}>
                                        Secure Your Free Spot 🚀
                                    </Link>
                                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
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
