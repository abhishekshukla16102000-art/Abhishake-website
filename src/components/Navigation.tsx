"use client";

import { useState } from "react";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config";
import { motion, AnimatePresence } from "framer-motion";

const navGroups = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    items: [
      { label: "For Organizations", href: "#organizations" },
      { label: "For Professionals", href: "#professionals" },
      { label: "Talent & Hiring", href: "#talent" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Resources", href: "#resources" },
      { label: "Leadership", href: "#leadership" },
      { label: "Book", href: "#book" },
      { label: "All Insights", href: "/insights" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Overview", href: "#about" },
      { label: "Credentials", href: "#credentials" },
      { label: "Collaborations", href: "#collaborations" },
    ],
  },
  { label: "Outsourcing", href: "/customer-support-outsourcing" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 py-2 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        {/* Compact brand lockup: keep the supplied logo proportional and the header balanced. */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="group z-50 flex shrink-0 items-center gap-3"
        >
          <img
            src="/sps-nexus-tech-official-logo.png"
            alt="SPS Nexus Tech"
            className="h-[72px] w-[102px] object-contain sm:h-[76px] sm:w-[108px]"
          />
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#0284c7] sm:block">
            Abhishek Shukla
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navGroups.map((group, idx) => {
            if (group.items) {
              return (
                <div key={idx} className="group relative">
                  <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-[#0284c7]">
                    {group.label}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                      {group.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#0284c7]"
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
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#0284c7]"
              >
                {group.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={siteConfig.social.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-[#0284c7] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sky-600"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 p-2 text-slate-900 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="fixed inset-0 top-0 z-40 overflow-y-auto bg-white px-6 pb-10 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navGroups.map((group, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-4">
                  {group.items ? (
                    <>
                      <div className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                        {group.label}
                      </div>
                      <div className="flex flex-col gap-4 pl-4">
                        {group.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className="text-lg font-bold text-slate-900"
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
                      className="block text-lg font-bold text-slate-900"
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
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0284c7] py-4 text-base font-bold text-white shadow-md"
              >
                <Calendar className="h-5 w-5" />
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
