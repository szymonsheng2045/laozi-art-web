import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'observation' | 'insight' | 'essence' | 'void';
  excerpt: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  featured_image?: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  read_time: number;
  views: number;
}

export interface ScrapedItem {
  id: string;
  source: string;
  source_url: string;
  title: string;
  image_url?: string;
  content?: string;
  tags: string[];
  analysis?: {
    colors: string[];
    style: string[];
    mood: string[];
  };
  status: 'pending' | 'analyzed' | 'curated' | 'rejected';
  created_at: string;
}

export interface TrendReport {
  id: string;
  title: string;
  period: string;
  summary: string;
  key_findings: string[];
  color_trends: string[];
  style_trends: string[];
  data_sources: string[];
  status: 'generating' | 'ready' | 'published';
  created_at: string;
}
