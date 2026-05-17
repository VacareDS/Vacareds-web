'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BlogCard from '@/components/ui/BlogCard';
import SectionHeader from '@/components/ui/SectionHeader';

export interface BlogPost {
  category: string;
  categoryColor?: 'tofu' | 'bofu' | 'default';
  title: string;
  excerpt: string;
  href: string;
}

export interface BlogPreviewProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  posts: BlogPost[];
  ctaText: string;
  ctaHref: string;
}

export default function BlogPreview({
  eyebrow,
  title,
  subtitle,
  posts,
  ctaText,
  ctaHref
}: BlogPreviewProps) {
  return (
    <section id="blog" className="bg-[var(--cream)] py-[80px] md:py-[100px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[52px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-[48px] gap-[20px]"
        >
          <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <Link
            href={ctaHref}
            className="inline-block text-[14px] font-bold text-[var(--mg)] no-underline border-b-[1.5px] border-[rgba(232,65,122,0.3)] pb-[2px] transition-colors hover:border-[var(--mg)] whitespace-nowrap shrink-0"
          >
            {ctaText}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <BlogCard
                category={post.category}
                categoryColor={post.categoryColor}
                title={post.title}
                excerpt={post.excerpt}
                href={post.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
