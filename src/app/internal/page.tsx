"use client"
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from '@/lib/supabase';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Eye, Save, Trash2, X, Plus, ExternalLink } from 'lucide-react';

interface Blog {
    id: string;
    title: string;
    content: string;
    image_url: string;
    created_at: string;
    slug: string;
    meta_desc?: string;
    seo_title?: string;
    category?: string;
    tags?: string;
}

export default function AdminPortal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogImage, setBlogImage] = useState('');
    const [blogSlug, setBlogSlug] = useState('');
    const [blogMetaDesc, setBlogMetaDesc] = useState('');
    const [blogSeoTitle, setBlogSeoTitle] = useState('');
    const [blogCategory, setBlogCategory] = useState('');
    const [blogTags, setBlogTags] = useState('');

    const [showPreview, setShowPreview] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // Fetch blogs from Supabase
    useEffect(() => {
        const fetchBlogs = async () => {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setBlogs(data);
            if (error) console.error('Error fetching blogs:', error);
        };

        fetchBlogs();
    }, []);

    // Auto-generate slug from title
    useEffect(() => {
        if (blogTitle && !blogSlug) {
            const generated = blogTitle.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            setBlogSlug(generated);
        }
    }, [blogTitle]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'realtyvoice' && password === 'RealtyVoice@2026') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid credentials. Access Denied.');
        }
    };

    const saveBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const newBlog = {
            title: blogTitle,
            content: blogContent,
            image_url: blogImage || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            slug: blogSlug,
            meta_desc: blogMetaDesc,
            seo_title: blogSeoTitle,
            category: blogCategory,
            tags: blogTags
        };

        try {
            const { data, error } = await supabase
                .from('blogs')
                .insert([newBlog])
                .select();

            if (error) throw error;

            if (data) {
                setBlogs([data[0], ...blogs]);
                // Reset form
                setBlogTitle('');
                setBlogContent('');
                setBlogImage('');
                setBlogSlug('');
                setBlogMetaDesc('');
                setBlogSeoTitle('');
                setBlogCategory('');
                setBlogTags('');
                alert('Blog saved successfully!');
            }
        } catch (err) {
            console.error('Error saving blog:', err);
            alert('Error saving blog. Check console.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isLoggedIn) {
        return (
            <main>
                <Navbar />
                <section className="section" style={{ paddingTop: '15rem', minHeight: '80vh' }}>
                    <div className="container" style={{ maxWidth: '450px' }}>
                        <div className="glass" style={{ padding: '3.5rem', textAlign: 'center', border: '1px solid var(--primary-light)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔐</div>
                            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Internal Access</h1>
                            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                />
                                {error && <p style={{ color: '#EF4444', fontSize: '0.9rem', margin: 0 }}>{error}</p>}
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Login to Dashboard</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem' }} className="text-gradient">Admin Portal</h1>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setIsLoggedIn(false)} className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Logout</button>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 350px)', gap: '4rem' }}>
                        <div className="glass" style={{ padding: '2.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Create New Blog</h2>
                                <button
                                    type="button"
                                    className={`btn ${showPreview ? 'btn-primary' : 'btn-outline'}`}
                                    onClick={() => setShowPreview(!showPreview)}
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    {showPreview ? <><X size={16} /> Close Preview</> : <><Eye size={16} /> Live Preview</>}
                                </button>
                            </div>

                            {showPreview ? (
                                <div style={{
                                    minHeight: '400px',
                                    padding: '2rem',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    color: 'white',
                                    overflowY: 'auto',
                                    maxHeight: '80vh'
                                }}>
                                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{blogTitle || 'Untitled Post'}</h1>
                                    {blogImage && <img src={blogImage} alt="Preview" style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '2rem' }} />}
                                    <div className="markdown-content">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {blogContent || '*No content yet...*'}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={saveBlog} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Blog Title</label>
                                            <input
                                                placeholder="Enter title..."
                                                value={blogTitle}
                                                onChange={(e) => setBlogTitle(e.target.value)}
                                                required
                                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>URL Slug</label>
                                            <input
                                                placeholder="url-slug-here"
                                                value={blogSlug}
                                                onChange={(e) => setBlogSlug(e.target.value)}
                                                required
                                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>SEO Title</label>
                                            <input
                                                placeholder="Title for search engines..."
                                                value={blogSeoTitle}
                                                onChange={(e) => setBlogSeoTitle(e.target.value)}
                                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Category</label>
                                            <input
                                                placeholder="e.g. Real Estate, AI, Trends"
                                                value={blogCategory}
                                                onChange={(e) => setBlogCategory(e.target.value)}
                                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Meta Description</label>
                                        <textarea
                                            placeholder="Brief summary for search results..."
                                            value={blogMetaDesc}
                                            onChange={(e) => setBlogMetaDesc(e.target.value)}
                                            rows={2}
                                            style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none', resize: 'vertical' }}
                                        ></textarea>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tags (comma separated)</label>
                                            <input
                                                placeholder="tag1, tag2..."
                                                value={blogTags}
                                                onChange={(e) => setBlogTags(e.target.value)}
                                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Feature Image URL</label>
                                            <input
                                                placeholder="Unsplash URL..."
                                                value={blogImage}
                                                onChange={(e) => setBlogImage(e.target.value)}
                                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Content (Markdown)</label>
                                        <textarea
                                            placeholder="Write your masterpiece..."
                                            value={blogContent}
                                            onChange={(e) => setBlogContent(e.target.value)}
                                            required
                                            rows={12}
                                            style={{ width: '100%', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none', fontFamily: 'monospace', resize: 'vertical' }}
                                        ></textarea>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ flex: 1, opacity: isLoading ? 0.7 : 1 }}>
                                            {isLoading ? 'Saving...' : 'Save Blog Post'}
                                        </button>
                                        <button type="button" className="btn btn-outline" style={{ flex: 0.5 }} onClick={() => {
                                            setBlogTitle(''); setBlogContent(''); setBlogImage('');
                                            setBlogSlug(''); setBlogMetaDesc(''); setBlogSeoTitle('');
                                            setBlogCategory(''); setBlogTags('');
                                        }}>Clear</button>
                                    </div>
                                </form>
                            )}
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent Posts ({blogs.length})</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {blogs.length === 0 ? (
                                    <div className="glass" style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>
                                        No blogs yet.
                                    </div>
                                ) : (
                                    blogs.map((blog) => (
                                        <div key={blog.id} className="glass" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{ minWidth: '60px', width: '60px', height: '60px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${blog.image_url})`, borderRadius: '0.4rem' }}></div>
                                            <div style={{ overflow: 'hidden' }}>
                                                <h4 style={{ margin: 0, fontSize: '0.95rem', marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.title}</h4>
                                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{new Date(blog.created_at).toLocaleDateString()}</span>
                                                    <a href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                                        View <ExternalLink size={10} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <style jsx global>{`
                .markdown-content {
                    line-height: 1.7;
                }
                .markdown-content h1, .markdown-content h2, .markdown-content h3 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: white;
                }
                .markdown-content p {
                    margin-bottom: 1.25rem;
                    color: rgba(255, 255, 255, 0.8);
                }
                .markdown-content ul, .markdown-content ol {
                    margin-bottom: 1.25rem;
                    padding-left: 1.5rem;
                }
                .markdown-content li {
                    margin-bottom: 0.5rem;
                }
                .markdown-content img {
                    max-width: 100%;
                    border-radius: 0.5rem;
                    margin: 1.5rem 0;
                }
                .markdown-content blockquote {
                    border-left: 4px solid var(--gold);
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: var(--text-muted);
                }
                .markdown-content pre {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    margin: 1.5rem 0;
                }
                .markdown-content code {
                    font-family: monospace;
                }
            `}</style>
        </main>
    );
}
