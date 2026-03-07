"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorks() {
    const steps = [
        {
            title: "1. Connect",
            desc: "We plug our AI directly into your professional phone number. No complex setup or new numbers required."
        },
        {
            title: "2. Customize",
            desc: "The AI is trained on your brand, your standard answers, and your specific service area."
        },
        {
            title: "3. Go Live",
            desc: "Instantly start capturing leads you were previously missing. The AI works 24/7, year-round."
        },
        {
            title: "4. Book Showings",
            desc: "Serious prospects are booked directly into your calendar. You&apos;ll receive instant notifications via SMS & email."
        }
    ];

    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: '3.5rem' }}>How It <span className="text-gradient">Works</span></h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>
                            Setting up RealtyVoice is faster than answering a single missed call.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
                        {steps.map((step, i) => (
                            <div key={i} className="glass" style={{ padding: '3rem', borderTop: i % 2 === 0 ? '4px solid var(--primary-light)' : '4px solid var(--accent)' }}>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>{step.title}</h3>
                                <p style={{ margin: 0, fontSize: '1.1rem' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <a href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                            Book Your Setup Call ☎️
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
