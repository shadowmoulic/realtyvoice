import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const metadata = {
    title: 'Blog | RealtyVoice - Real Estate AI Insights',
    description: 'Latest trends, tips, and insights on using AI to scale your real estate business and never miss a lead.',
};

export default async function BlogPage() {
    const { data: blogs } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }} className="text-gradient">The RealtyVoice Blog</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Insights, strategies, and industry secrets for high-volume real estate teams.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {blogs && blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <Link href={`/blog/${blog.slug}`} key={blog.id} className="glass blog-card" style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease',
                                    overflow: 'hidden',
                                    height: '100%'
                                }}>
                                    <div style={{
                                        height: '220px',
                                        backgroundImage: `url(${blog.image_url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transition: 'transform 0.5s ease'
                                    }} className="blog-card-image"></div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                {blog.category || 'Real Estate AI'}
                                            </span>
                                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></span>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3, fontWeight: 700 }}>{blog.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {blog.meta_desc || blog.content.substring(0, 160).replace(/[#*`]/g, '') + '...'}
                                        </p>
                                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontWeight: 600, fontSize: '0.9rem' }}>
                                            Read Article <span style={{ transition: 'transform 0.3s ease' }} className="arrow">→</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem' }}>
                                <p style={{ color: 'var(--text-muted)' }}>No articles published yet. Check back soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
