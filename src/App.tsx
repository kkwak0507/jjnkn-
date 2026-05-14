/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutGrid, ArrowUpRight, Instagram, Linkedin, Dribbble, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Types ---

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

// --- Constants ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MONOLITHIC DWELLING',
    category: 'ARCHITECTURE',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1518005020451-aba3a5a58d57?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'LUMINA SERIES',
    category: 'INDUSTRIAL DESIGN',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'KINETIC IDENTITY',
    category: 'BRANDING',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    title: 'FLUID INTERFACE',
    category: 'DIGITAL',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    title: 'SILENT SPACE',
    category: 'INTERIOR',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    title: 'ECO PAVILION',
    category: 'ARCHITECTURE',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200',
  },
];

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-dim">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <LayoutGrid className="w-5 h-5 text-brand-black" />
          <span className="font-display font-bold tracking-widest text-lg">PORTFOLIO</span>
        </div>
        <div className="flex items-center gap-8">
          <button className="hidden md:block btn-accent">HIRE ME</button>
          <Menu className="w-6 h-6 md:hidden text-brand-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="group cursor-pointer mb-24 last:mb-0"
    >
      <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5] md:aspect-[16/9]">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
            <ArrowUpRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="label-caps mb-2 tracking-widest">
            {project.category} / {project.year}
          </p>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight group-hover:text-brand-blue transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight className="w-8 h-8 text-brand-black group-hover:text-brand-blue transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 hidden md:block" />
      </div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-surface-dim pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold tracking-wider mb-6">PORTFOLIO</h2>
            <p className="text-muted leading-relaxed max-w-sm mb-6">
              Curating professional achievements through an architectural lens of minimalism and precision.
            </p>
            <p className="text-xs text-muted/60 uppercase tracking-widest">
              © 2024 QUIET CONFIDENCE. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div>
            <h4 className="label-caps mb-8 text-brand-black">WORK</h4>
            <ul className="space-y-4">
              {['SELECTED PROJECTS', 'CASE STUDIES', 'ARCHIVE', 'ABOUT'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-medium hover:text-brand-blue transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps mb-8 text-brand-black">STUDIO</h4>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium mb-1">010-4852-0045</p>
                <p className="text-xs text-muted">PHONE</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">kkwak524@naver.com</p>
                <p className="text-xs text-muted">EMAIL</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="label-caps mb-4 text-brand-black">FOLLOW</h4>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-muted hover:text-brand-blue cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-muted hover:text-brand-blue cursor-pointer transition-colors" />
                <Dribbble className="w-5 h-5 text-muted hover:text-brand-blue cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 md:pt-64 md:pb-32 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-12">
              SELECTED<br />WORK
            </h1>
            <p className="text-2xl md:text-3xl text-muted leading-tight font-light max-w-2xl">
              An archive of visual narratives and architectural digital solutions crafted with precision and quiet confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-32">
        <div className="container-custom">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-surface-dim/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-tight">
              READY TO START<br />A NEW CHAPTER?
            </h2>
            <button className="btn-primary px-12 py-5 text-lg flex items-center gap-3 mx-auto">
              LET'S CONNECT
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
