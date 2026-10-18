"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Calendar, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config";
import { motion, AnimatePresence } from "framer-motion";

const navGroups = [
  { label: 'Home', href: '#home' },
  { 
    label: 'Services', 
    items: [
      { label: 'For Organizations', href: '#organizations' },
      { label: 'For Professionals', href: '#professionals' },
      { label: 'Talent & Hiring', href: '#talent' },
    ]
  },
  {
    label: 'Insights',
    items: [
      { label: 'Resources', href: '#resources' },
      { label: 'Leadership', href: '#leadership' },
      { label: 'Book', href: '#book' },
      { label: 'All Insights', href: '/insights' },
    ]
  },
  {
    label: 'About',
    items: [
      { label: 'Overview', href: '#about' },
      { label: 'Credentials', href: '#credentials' },
      { label: 'Collaborations', href: '#collaborations' },
    ]
  },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = siteConfig.navLinks.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    );
    
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="group flex items-center gap-2 z-50">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolled ? 'bg-slate-900' : 'bg-white/10 hover:bg-white/20'}`}>
            <span className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>AS</span>
          </div>
          <span className={`font-bold tracking-tight hidden sm:block ${isScrolled ? 'text-slate-900' : 'text-white'} group-hover:text-[#0284c7] transition-colors`}>
            Abhishek Shukla
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navGroups.map((group, idx) => {
            if (group.items) {
              return (
                <div key={idx} className="relative group">
                  <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-700 hover:text-[#0284c7]' : 'text-white/90 hover:text-white'}`}>
                    {group.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 flex flex-col">
                      {group.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="px-4 py-2.5 text-sm text-slate-600 hover:text-[#0284c7] hover:bg-slate-50 rounded-lg font-medium transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={idx}
                href={group.href!}
                onClick={(e) => handleLinkClick(e, group.href!)}
                className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-700 hover:text-[#0284c7]' : 'text-white/90 hover:text-white'}`}
              >
                {group.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.social.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md ${
              isScrolled 
                ? 'bg-[#0284c7] text-white hover:bg-sky-600' 
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 z-50 relative ${isMobileMenuOpen ? 'text-slate-900' : (isScrolled ? 'text-slate-900' : 'text-white')}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-white z-40 lg:hidden overflow-y-auto pt-24 pb-10 px-6"
          >
            <div className="flex flex-col gap-6">
              {navGroups.map((group, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-4">
                  {group.items ? (
                    <>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{group.label}</div>
                      <div className="flex flex-col gap-4 pl-4">
                        {group.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className="text-xl font-bold text-slate-900"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={group.href!}
                      onClick={(e) => handleLinkClick(e, group.href!)}
                      className="text-xl font-bold text-slate-900 block"
                    >
                      {group.label}
                    </a>
                  )}
                </div>
              ))}
              
              <a
                href={siteConfig.social.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 mt-4 bg-[#0284c7] text-white rounded-xl font-bold text-lg shadow-md"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
