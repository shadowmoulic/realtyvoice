import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from '@/lib/supabase';
import BlogList from '@/components/BlogList';

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
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }} className="text-gradient">The RealtyVoice Blog</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Insights, strategies, and industry secrets for high-volume real estate teams.
                        </p>
                    </div>

                    <BlogList initialBlogs={blogs || []} />
                </div>
            </section>
            <Footer />
        </main>
    );
}
