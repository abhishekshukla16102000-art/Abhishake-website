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
              className="mb-4 h-14 w-auto max-w-[250px] object-contain"
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
                E-Book
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#organizations" className="hover:text-white transition">Organizations</Link></li>
              <li><Link href="#professionals" className="hover:text-white transition">Professionals</Link></li>
              <li><Link href="#talent" className="hover:text-white transition">Talent & Hiring</Link></li>
              <li><Link href="#collaborations" className="hover:text-white transition">Collaborations</Link></li>
              <li><Link href="#resources" className="hover:text-white transition">Resources</Link></li>
              <li><Link href="#book" className="hover:text-white transition">Book</Link></li>
              <li><Link href="#insights" className="hover:text-white transition">Insights</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
              <li><Link href="/refund" className="hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
