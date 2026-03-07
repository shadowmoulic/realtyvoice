"use client"
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Blog {
    id: number;
    title: string;
    content: string;
    image: string;
    date: string;
}

export default function AdminPortal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogImage, setBlogImage] = useState('');
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // Load blogs from local storage on mount - using microtask to avoid cascading renders error
    useEffect(() => {
        const savedBlogs = localStorage.getItem('realtyvoice_blogs');
        if (savedBlogs) {
            Promise.resolve().then(() => {
                setBlogs(JSON.parse(savedBlogs));
            });
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'realtyvoice' && password === 'RealtyVoice@2026') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid credentials. Access Denied.');
        }
    };

    const saveBlog = (e: React.FormEvent) => {
        e.preventDefault();
        const newBlog = {
            id: Date.now(),
            title: blogTitle,
            content: blogContent,
            image: blogImage || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            date: new Date().toLocaleDateString()
        };

        const updatedBlogs = [newBlog, ...blogs];
        setBlogs(updatedBlogs);
        localStorage.setItem('realtyvoice_blogs', JSON.stringify(updatedBlogs));

        // Reset form
        setBlogTitle('');
        setBlogContent('');
        setBlogImage('');
        alert('Blog saved successfully!');
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
                        <button onClick={() => setIsLoggedIn(false)} className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>Logout</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '4rem' }}>
                        <div className="glass" style={{ padding: '3.5rem' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>Create New Blog</h2>
                            <form onSubmit={saveBlog} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <input
                                    placeholder="Blog Title"
                                    value={blogTitle}
                                    onChange={(e) => setBlogTitle(e.target.value)}
                                    required
                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none', fontSize: '1.25rem' }}
                                />
                                <input
                                    placeholder="Feature Image URL (Unsplash or direct link)"
                                    value={blogImage}
                                    onChange={(e) => setBlogImage(e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none' }}
                                />
                                <textarea
                                    placeholder="Content (Markdown supported...)"
                                    value={blogContent}
                                    onChange={(e) => setBlogContent(e.target.value)}
                                    required
                                    rows={15}
                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'white', outline: 'none', fontFamily: 'monospace', resize: 'vertical' }}
                                ></textarea>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Blog Post</button>
                                    <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => { setBlogTitle(''); setBlogContent(''); setBlogImage(''); }}>Clear Draft</button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Recent Posts ({blogs.length})</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {blogs.length === 0 ? (
                                    <div className="glass" style={{ padding: '2.5rem', textAlign: 'center', opacity: 0.5 }}>
                                        No blogs created yet. Start typing on the left.
                                    </div>
                                ) : (
                                    blogs.map((blog) => (
                                        <div key={blog.id} className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                            <div style={{ width: '80px', height: '80px', backgroundSize: 'cover', backgroundImage: `url(${blog.image})`, borderRadius: '0.5rem' }}></div>
                                            <div>
                                                <h4 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{blog.title}</h4>
                                                <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.6 }}>Created: {blog.date}</p>
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
        </main>
    );
}
