'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('s', window.scrollY > 40);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    
    // Intersection Observer for fade-in elements
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fi').forEach(el => obs.observe(el));
    
    // Hero elements immediate show
    setTimeout(() => {
      document.querySelectorAll('#hero .fi').forEach(el => el.classList.add('vis'));
    }, 80);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      obs.disconnect();
    };
  }, []);

  return null;
}
