import { siteConfig } from "@/config";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/sps-nexus-tech-official-logo-dark.png"
              alt="SPS Nexus Tech"
              width="180"
              className="mb-4 block h-auto w-[180px] max-w-full object-contain object-left"
            />
            <p className="text-sm text-slate-400 max-w-md mb-6">
              CX & AI Leader | Consultant | Project Leader | Author
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                LinkedIn
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                X (Twitter)
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                Instagram
              </a>
              <a href={siteConfig.social.thinkers360} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                Thinkers360
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                YouTube
              </a>
              <a href={siteConfig.social.topmate} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                Topmate
              </a>
              <a href={siteConfig.book.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                Book
              </a>
              <a href="https://topmate.io/abhishek_shukla1610/new/I8kTKarXVh" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition">
                Schedule
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="#organizations" className="hover:text-white transition">Organizations</Link>
              <Link href="#professionals" className="hover:text-white transition">Professionals</Link>
              <Link href="#talent" className="hover:text-white transition">Talent & Hiring</Link>
              <Link href="#collaborations" className="hover:text-white transition">Collaborations</Link>
              <Link href="#resources" className="hover:text-white transition">Resources</Link>
              <Link href="#book" className="hover:text-white transition">Book</Link>
              <Link href="/insights" className="hover:text-white transition">Insights</Link>
              <Link href="#about" className="hover:text-white transition">About</Link>
              <Link href="#contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
              <Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
              <Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Abhishek Shukla. All rights reserved.</p>
          <p>Delhi, India (Global Remote)</p>
        </div>
      </div>
    </footer>
  );
}
