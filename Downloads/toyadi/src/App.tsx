import { useState, useEffect } from 'react';
import {
  Sprout,
  Map,
  TrendingUp,
  CheckCircle,
  Calculator,
  Maximize,
  Layers,
  Home,
  Phone,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, sub }: { icon: any, label: string, value: string, sub: string }) => (
  <div className="glass-panel stat-card">
    <div className="stat-icon-wrapper">
      <Icon className="stat-icon" />
    </div>
    <h3 className="stat-value">{value}</h3>
    <p className="stat-label">{label}</p>
    <p className="stat-sub">{sub}</p>
  </div>
);

const ModelCard = ({ title, desc, icon: Icon, image }: { title: string, desc: string, icon: any, image: string }) => (
  <div className="glass-panel model-card">
    <div className="model-image-wrapper">
      <img src={image} alt={title} className="model-image" />
      <div className="model-image-overlay" />
      <div className="model-title-wrapper">
        <div className="model-icon-bg">
          <Icon className="model-title-icon" />
        </div>
        <h3 className="model-title">{title}</h3>
      </div>
    </div>
    <div className="model-content">
      <p className="model-desc">{desc}</p>
      <button className="btn-text">
        Explore Model <ArrowRight className="arrow-icon" />
      </button>
    </div>
  </div>
);

function App() {
  const [acres, setAcres] = useState(5);
  const [profit, setProfit] = useState(60);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Basic linear projection for UX: 5 acres -> 60L over 3 years
    const projection = (acres * 12); // Simple 12L per acre over cycle
    setProfit(projection);
  }, [acres]);

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container glass-panel">
          <div className="nav-brand">
            <div className="brand-icon-wrapper">
              <Sprout className="brand-icon" />
            </div>
            <span className="brand-name">Toyadhi</span>
          </div>

          <div className="nav-links">
            <a href="#models" className="nav-link">Models</a>
            <a href="#process" className="nav-link">Strategy</a>
            <a href="#calculator" className="nav-link">Calculator</a>
            <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Consultation</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu glass-panel">
            <a href="#models" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Models</a>
            <a href="#process" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Strategy</a>
            <a href="#calculator" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Calculator</a>
            <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary menu-btn">Book Consultation</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg-wrapper">
          <img
            src="/src/assets/hero-bg.png"
            className="hero-bg"
            alt="Farming"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-text-wrapper">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span className="badge-text">Premium Agri-Tech Consulting</span>
            </div>
            <h1 className="hero-title">
              Got land but don't know <br />
              <span className="gradient-text">what to do with it?</span>
            </h1>
            <p className="hero-subtitle">
              We turn your idle land into a high-yielding business. From soil testing to market supply, Toyadhi provides A to Z consulting. Sit back while we help you generate ₹50–60 Lakhs from just 5 acres in 2–3 years.
            </p>
            <div className="hero-actions">
              <a href="#calculator" className="btn btn-primary btn-large">
                Check My ROI <Calculator className="btn-icon" />
              </a>
              <button onClick={() => document.getElementById('models')?.scrollIntoView()} className="btn btn-outline btn-large">
                Our Models <Maximize className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features/Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard
              icon={TrendingUp}
              label="Profitability"
              value="₹50-60 Lakhs"
              sub="Expected returns on a 5-acre model over a 2-3 year cycle."
            />
            <StatCard
              icon={Map}
              label="Coverage"
              value="Pan-India"
              sub="Serving national clients with end-to-end consulting."
            />
            <StatCard
              icon={CheckCircle}
              label="End-to-End"
              value="A to Z Service"
              sub="You own the land, we handle the strategy and infrastructure."
            />
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section id="story" className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="brand-label">The Indian Land Paradox</div>
              <h2 className="section-title">You inherited the soil, but are you <span className="highlight">reaping the rewards?</span></h2>
              <div className="story-text">
                <p>
                  Right now, thousands of acres of prime Indian land are sitting completely idle. Traditional farming feels like a grueling, unpredictable gamble. Real estate development requires massive capital. So, you hold onto the asset, watching it collect dust while you work your 9-to-5.
                </p>
                <p>
                  But what if your 5 acres could be architected like a high-growth startup?
                </p>
                <p>
                  <strong>That's where Toyadhi steps in.</strong> We noticed a massive disconnect between landowners and modern agricultural science. We don't just 'farm' your land; we deploy proven, scientifically-backed, high-yield ecosystems. From hydroponics to aquaponics, we build decentralized, sustainable nodes that practically run themselves.
                </p>
              </div>
            </div>
            <div className="story-image-wrapper">
               <div className="story-image-backdrop" />
               <img src="/src/assets/hero-bg.png" alt="Indian Land" className="story-image" />
               <div className="story-stat-card glass-panel">
                 <p className="story-stat-value">6,780+</p>
                 <p className="story-stat-label">Acres optimized nationally compared to competitors</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="models-section">
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-text">
              <h2 className="section-title">Proven Farming Models<br /><span className="title-italic">For Maximum Yield</span></h2>
              <p className="section-desc">We don't just plant seeds; we engineer highly profitable ecosystems. Better than traditional farming, and strategically ahead of the competition.</p>
            </div>
            <div className="section-header-stat">
              <div className="glass-panel stat-box">
                <p className="stat-box-value">12L+</p>
                <p className="stat-box-label">Avg. Yearly Profit/Acre</p>
              </div>
            </div>
          </div>

          <div className="models-grid">
            <ModelCard
              title="Integrated Farming"
              image="/src/assets/integrated-farming.png"
              icon={Layers}
              desc="A holistic ecosystem combining horticulture, livestock, and aquaculture. Waste from one becomes nutrient for another."
            />
            <ModelCard
              title="Decentralized Nodes"
              image="/src/assets/hero-bg.png"
              icon={Home}
              desc="Modular farming units that operate independently but link into a wider supply chain. Perfect for village clusters."
            />
            <ModelCard
              title="In-House Farming"
              image="/src/assets/inhouse-farming.png"
              icon={Maximize}
              desc="High-density vertical farming and hydroponics within controlled environments. Maximum yield, minimum space."
            />
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="calculator-section">
        <div className="container">
          <div className="glass-panel calc-panel">
            <div className="calc-blur-right" />
            <div className="calc-blur-left" />

            <div className="calc-grid">
              <div className="calc-info">
                <h2 className="section-title">Calculate Your <span className="highlight">True Potential</span></h2>
                <p className="calc-desc">
                  Enter your land size below. See exactly how Toyadhi’s integrated farming approach can transform your unused property into a relentless profit engine.
                </p>

                <div className="calc-controls">
                  <div className="slider-group">
                    <div className="slider-header">
                      <label className="slider-label">Land Size (Acres)</label>
                      <span className="slider-value">{acres} Acres</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={acres}
                      onChange={(e) => setAcres(parseInt(e.target.value))}
                      className="calc-slider"
                    />
                  </div>

                  <div className="calc-info-grid">
                    <div className="calc-info-box">
                      <p className="info-box-label">Time to Peak</p>
                      <p className="info-box-value">2.5 - 3 Years</p>
                    </div>
                    <div className="calc-info-box">
                      <p className="info-box-label">Model Complexity</p>
                      <p className="info-box-value">Low to Med</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calc-result-box">
                <p className="result-label">Estimated Gross Profit</p>
                <h3 className="result-value">₹{profit}L</h3>
                <p className="result-desc">Calculated over a standard integrated cycle using Toyadhi proprietary models.</p>
                <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-large">
                  Discuss Your ROI – Book Call
                </a>
                <div className="result-verification">
                  <CheckCircle className="verify-icon" />
                  Verified against market competitors
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="container text-center">
          <h2 className="section-title process-title">We Handle Everything: <span className="title-italic">A to Z</span></h2>
          <div className="process-grid">
            <div className="process-line" />

            {[
              { step: "01", title: "Complete Site Audit", desc: "We answer 'What to do with the land?' based on soil, water, and climate." },
              { step: "02", title: "Strategic Design", desc: "We design a custom, high-ROI integrated farming model for you." },
              { step: "03", title: "Setup & Execution", desc: "We deploy the infrastructure, from polyhouses to smart irrigation." },
              { step: "04", title: "Scale & Profit", desc: "You sit back as we manage cycles, yield, and market supply chains." }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel process-card">
                <div className="process-step-icon">
                  {item.step}
                </div>
                <h4 className="process-card-title">{item.title}</h4>
                <p className="process-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-brand">
                <div className="footer-brand-icon">
                  <Sprout className="icon-small" />
                </div>
                <span className="brand-name">Toyadhi</span>
              </div>
              <h3 className="footer-title">Stop letting your land <br /><span className="highlight">sit idle.</span></h3>
              <p className="footer-desc">Join other smart landowners across India. Let our agriculture experts help you turn your investment into a thriving 50-Lakh a year business.</p>
              <div className="footer-contact">
                <Phone className="highlight" />
                <span className="contact-phone">+91 98XXX XXXXX</span>
              </div>
            </div>

            <div className="glass-panel footer-cta-card">
              <h4 className="footer-cta-title">Ready for A to Z Consulting?</h4>
              <p className="footer-cta-desc">
                Skip the back-and-forth emails. Schedule a direct 15-minute discovery call with our agriculture experts to immediately analyze your land's potential and ROI capacity.
              </p>
              <a href="https://cal.com/sayak-moulic/15min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-large">
                Book Your 15-Min Discovery Call
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Toyadhi Integrated Agriculture Consulting. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#terms" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
