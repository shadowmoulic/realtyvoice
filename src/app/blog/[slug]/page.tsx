import SidebarTestimonials from "@/components/SidebarTestimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from '@/lib/supabase';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: blog } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!blog) return {};

    return {
        title: `${blog.seo_title || blog.title} | RealtyVoice Blog`,
        description: blog.meta_desc || blog.content.substring(0, 160).replace(/[#*`]/g, ''),
        openGraph: {
            title: blog.title,
            description: blog.meta_desc,
            images: [blog.image_url],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: blog } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!blog) notFound();

    return (
        <main style={{ overflow: 'visible' }}>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh', overflow: 'visible' }}>
                <div className="container" style={{ overflow: 'visible' }}>
                    <div style={{ marginBottom: '4rem' }} className="blog-header-container">
                        <Link href="/blog" style={{ color: 'var(--gold)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
                            ← ALL ARTICLES
                        </Link>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {blog.category || 'Real Estate AI'}
                            </span>
                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>
                        <h1 className="blog-post-title" style={{ maxWidth: '900px' }}>{blog.title}</h1>
                    </div>

                    <div style={{ display: 'flex', gap: '5rem', alignItems: 'stretch', overflow: 'visible' }} className="blog-content-layout">
                        {/* Main Content Column */}
                        <div className="main-content-column" style={{ flex: 1, minWidth: 0 }}>
                            <img
                                src={blog.image_url}
                                alt={blog.title}
                                className="blog-post-main-image"
                                style={{ width: '100%', height: 'auto', borderRadius: '2rem', marginBottom: '4rem', border: '1px solid var(--border-card)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                            />
                            <div className="markdown-content" style={{ fontSize: '1.15rem' }}>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {blog.content}
                                </ReactMarkdown>
                            </div>

                            <div style={{ marginTop: '6rem', padding: '4rem', background: 'var(--bg-secondary)', borderRadius: '2rem', border: '1px solid var(--border-card)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Want to scale without working more hours?</h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                                        RealtyVoice AI qualifies your leads and books listings while you're offline. Join the 1% of agents using automation to protect their commissions.
                                    </p>
                                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                                        <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ padding: '1rem 1rem' }}>Book A Strategy Call</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Sidebar Column */}
                        <aside className="sidebar-column" style={{ width: '340px', flexShrink: 0, position: 'relative' }}>
                            <div style={{ position: 'sticky', top: '8rem', height: 'fit-content' }}>
                                <div className="glass" style={{ padding: '1.75rem', border: '1px solid var(--gold-dark)', boxShadow: '0 10px 25px rgba(212, 175, 55, 0.08)' }}>
                                    <div style={{ marginBottom: '1rem', display: 'inline-block', padding: '0.3rem 0.8rem', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--gold)', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                                        LIMITED OPPORTUNITY
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.2 }}>Stop Missing $20k Commissions</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                                        Most agents lose <b>64% of leads</b> because they don't answer within 5 minutes.
                                    </p>

                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        <li style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                                            <span style={{ color: 'var(--gold)' }}>✓</span> 24/7 AI Lead Qualification
                                        </li>
                                        <li style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                                            <span style={{ color: 'var(--gold)' }}>✓</span> Custom Dashboard Only For You
                                        </li>
                                        <li style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                                            <span style={{ color: 'var(--gold)' }}>✓</span> Automated Showing Board
                                        </li>
                                    </ul>

                                    <Link href="https://cal.com/sayak-moulic/15min" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '0.9rem', boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)' }}>
                                        Start 7-Day Free Trial
                                    </Link>

                                    <div style={{ marginTop: '1.2rem', textAlign: 'center' }}>
                                        <Link href="/demo" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>
                                            Watch 2-min Demo first
                                        </Link>
                                    </div>
                                </div>

                                <SidebarTestimonials />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
