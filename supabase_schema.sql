-- schema.sql for RealtyVoice (Supabase)

-- 1. Create Blogs Table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    slug TEXT UNIQUE
);

-- 2. Create Leads Table (for Exit-Intent and Contact Forms)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    company_name TEXT,
    source TEXT DEFAULT 'direct', -- 'exit_intent', 'contact_page', etc.
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies
-- Blogs: Public read, and public CRUD (restricted by your app password for now)
CREATE POLICY "Public Read Access for Blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Public CRUD for Blogs" ON public.blogs FOR ALL USING (true);

-- Leads: Public insert, only admin (authenticated) can read
CREATE POLICY "Public Insert Access for Leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin Read Access for Leads" ON public.leads TO authenticated USING (true);

-- Indexes for performance
CREATE INDEX idx_blogs_slug ON public.blogs(slug);
CREATE INDEX idx_leads_email ON public.leads(email);
