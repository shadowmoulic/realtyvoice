import { supabase } from '@/lib/supabase';

export async function GET() {
    // Fetch latest blog posts from Supabase for AI-readiness
    const { data: blogs } = await supabase
        .from('blogs')
        .select('title, slug')
        .order('created_at', { ascending: false });

    const baseUrl = 'https://realtyvoice.online';

    let content = `# RealtyVoice\n\n`;
    content += `RealtyVoice provides AI-powered voice answering and lead qualification services specifically designed for real estate agents in the United States.\n\n`;

    content += `## Core Features\n`;
    content += `- 24/7 AI Voice Receptionist: Never miss a lead again.\n`;
    content += `- Automated Lead Qualification: Asks about budget, timeline, and pre-approval.\n`;
    content += `- Calendar Integration: Directly books showings into the agent's calendar.\n`;
    content += `- Outbound Follow-up: Re-engages old leads automatically.\n`;
    content += `- CRM Sync: All data is instantly pushed to the agent's CRM.\n\n`;

    content += `## Main Pages\n`;
    content += `- [Home](${baseUrl}/)\n`;
    content += `- [Pricing](${baseUrl}/pricing)\n`;
    content += `- [How it Works](${baseUrl}/how-it-works)\n`;
    content += `- [About](${baseUrl}/about)\n`;
    content += `- [Demo](${baseUrl}/demo)\n`;
    content += `- [Testimonials](${baseUrl}/testimonials)\n`;
    content += `- [Contact Us](${baseUrl}/contact-us)\n\n`;

    if (blogs && blogs.length > 0) {
        content += `## Latest Insights & Blog Posts\n`;
        blogs.forEach(blog => {
            content += `- [${blog.title}](${baseUrl}/blog/${blog.slug})\n`;
        });
        content += `\n`;
    }

    content += `## Contact Information\n`;
    content += `- Email: sayak@afbf.in\n`;
    content += `- Technical Support: +1 (650) 252-4261\n`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59'
        },
    });
}
