"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { X } from "lucide-react";

export function ServiceModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestService = searchParams.get("request");
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (requestService) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [requestService]);

  const closeModal = () => {
    setIsOpen(false);
    // Remove query param without scrolling
    router.push(window.location.pathname, { scroll: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-[#0f172a] mb-1">Request Service</h2>
        <p className="text-[#0284c7] font-medium mb-6">{requestService}</p>

        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          const name = String(data.get("name") ?? "").trim();
          const email = String(data.get("email") ?? "").trim();
          const message = String(data.get("message") ?? "").trim();
          const subject = encodeURIComponent(`Service request: ${requestService || "General enquiry"}`);
          const body = encodeURIComponent(`Service: ${requestService || "General enquiry"}\nName: ${name}\nCustomer email: ${email}\n\nMessage:\n${message}`);
          window.location.href = `mailto:abhishek@iabhishekshukla.com?subject=${subject}&body=${body}`;
        }}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea 
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition resize-none"
            ></textarea>
          </div>
          
          <p className="text-xs text-slate-500">Submitting opens your email app with the request addressed to <a href="mailto:abhishek@iabhishekshukla.com" className="text-[#0284c7] underline">abhishek@iabhishekshukla.com</a>. You must press Send in your email app.</p>
          <button 
            type="submit"
            className="w-full py-3 mt-2 bg-[#0284c7] text-white font-semibold rounded-xl hover:bg-sky-600 transition shadow-lg shadow-sky-200"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
