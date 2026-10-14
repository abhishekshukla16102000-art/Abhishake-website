import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-32 pb-20 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">Privacy Policy</h1>
          <div className="max-w-none">
            
      <p className="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">1. Information We Collect</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email. This may include your name, email address, company name, and any other details you choose to provide.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">2. How We Use Your Information</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">We use the information we collect to provide, maintain, and improve our consulting services, to process transactions, to send you related information, and to respond to your comments, questions, and requests.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">3. Information Sharing</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">4. Data Security</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">5. Contact Us</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:abhishek@iabhishekshukla.com" className="text-sky-600 hover:underline">abhishek@iabhishekshukla.com</a>.</p>
    
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
