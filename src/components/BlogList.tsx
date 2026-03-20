"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

interface Blog {
    id: string;
    slug: string;
    title: string;
    category?: string;
    meta_desc?: string;
    image_url?: string;
    content: string;
    created_at: string;
}

export default function BlogList({ initialBlogs }: { initialBlogs: Blog[] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = initialBlogs?.filter((blog: Blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.category && blog.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (blog.meta_desc && blog.meta_desc.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="reveal">
            {/* Search Bar */}
            <div style={{ maxWidth: '600px', margin: '0 auto 5rem', position: 'relative' }}>
                <div className="glass" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '3rem',
                    border: searchQuery ? '1px solid var(--gold)' : '1px solid var(--border-card)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    boxShadow: searchQuery ? '0 0 20px rgba(212, 175, 55, 0.1)' : '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                }}>
                    <Search size={20} style={{ color: searchQuery ? 'var(--gold)' : 'var(--text-muted)', marginRight: '1rem', transition: 'color 0.3s ease' }} />
                    <input
                        type="text"
                        placeholder="Search articles (e.g. lead gen, AI, speed)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none',
                            width: '100%',
                            fontFamily: 'inherit'
                        }}
                    />
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: searchQuery ? '80%' : '0',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                    transition: 'width 0.5s ease',
                    opacity: 0.5
                }}></div>
                {searchQuery && (
                    <div className="fade-in" style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Found {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} matching "{searchQuery}"
                    </div>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {filteredBlogs && filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
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
                        <p style={{ color: 'var(--text-muted)' }}>No articles found matching your search. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
