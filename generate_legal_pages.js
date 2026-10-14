const fs = require('fs');
const path = require('path');

const pages = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p class="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">1. Information We Collect</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email. This may include your name, email address, company name, and any other details you choose to provide.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">2. How We Use Your Information</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">We use the information we collect to provide, maintain, and improve our consulting services, to process transactions, to send you related information, and to respond to your comments, questions, and requests.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">3. Information Sharing</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">4. Data Security</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">5. Contact Us</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:abhishek@iabhishekshukla.com" class="text-sky-600 hover:underline">abhishek@iabhishekshukla.com</a>.</p>
    `
  },
  terms: {
    title: 'Terms of Service',
    content: `
      <p class="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">1. Agreement to Terms</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">By accessing our website and using our consulting services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">2. Consulting Services</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">Our consulting services are provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any part of the services at any time.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">3. Intellectual Property</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">The original content, features, and functionality of this website are and will remain the exclusive property of Abhishek Shukla and its licensors. Our frameworks, methodologies, and materials shared during consulting engagements remain our intellectual property unless explicitly transferred in a signed agreement.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">4. Limitation of Liability</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">In no event shall Abhishek Shukla, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">5. Governing Law</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
    `
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `
      <p class="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Professional Guidance Disclaimer</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">The information provided on this website and during our consulting, coaching, or advisory sessions is for educational and informational purposes only. It does not constitute formal legal, financial, or certified professional advice.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Career Support Disclaimer</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">Career support is intended to provide strategy, preparation, and professional guidance. Job placement, hiring decisions, compensation, and selection outcomes are determined by employers and are strictly not guaranteed.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Business Results</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">While we use proven methodologies and frameworks to improve Customer Experience (CX), Operations, and AI adoption, specific business results, ROI, or operational improvements are dependent on various factors including organizational execution, market conditions, and team adoption. We do not guarantee specific financial outcomes.</p>
    `
  },
  refund: {
    title: 'Refund Policy',
    content: `
      <p class="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Consulting and Advisory Services</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">For project-based consulting engagements, refund terms are governed by the specific Statement of Work (SOW) or consulting agreement signed prior to the commencement of the project. Generally, fees paid for completed milestones or delivered advisory sessions are non-refundable.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Coaching and Strategy Sessions</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">For one-on-one professional coaching, interview preparation, or strategy sessions, cancellations or rescheduling requests must be made at least 24 hours in advance. Sessions cancelled with less than 24 hours notice may not be eligible for a refund.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Digital Products</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">Any digital products, templates, or downloadable resources purchased directly through this website are generally non-refundable due to the nature of digital goods. If you experience technical issues accessing your purchase, please contact us for support.</p>
    `
  }
};

const layoutTemplate = (title, htmlContent) => `import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-32 pb-20 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">${title}</h1>
          <div className="max-w-none">
            ${htmlContent}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;

Object.keys(pages).forEach(page => {
  const dirPath = path.join(__dirname, 'src/app', page);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), layoutTemplate(pages[page].title, pages[page].content));
});

console.log('Legal pages created successfully');
