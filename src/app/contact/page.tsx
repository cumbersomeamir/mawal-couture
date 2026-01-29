"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20 lg:pt-32">
      <div className="container py-10 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            {/* Left - Info */}
            <div>
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-4 lg:mb-6">
                Get in Touch
              </p>
              <h1 className="text-3xl lg:text-5xl font-light tracking-tight mb-8 lg:mb-12">Contact</h1>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 mb-4">
                    Visit Us
                  </h3>
                  <address className="not-italic text-[14px] leading-relaxed">
                    1st Floor, Aircel Building,<br />
                    Near Gurudwara, Baghat,<br />
                    Srinagar, J&K – 190005
                  </address>
                </div>

                <div>
                  <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 mb-4">
                    Contact
                  </h3>
                  <p className="text-[14px] mb-2">
                    <a href="tel:+918899253285" className="hover:opacity-60 transition-opacity">
                      +91 88992 53285
                    </a>
                  </p>
                  <p className="text-[14px]">
                    <a href="mailto:contact@mawalcouture.com" className="hover:opacity-60 transition-opacity">
                      contact@mawalcouture.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 mb-4">
                    Hours
                  </h3>
                  <p className="text-[14px]">
                    Monday – Saturday: 10am – 7pm<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-light mb-2">Thank you</h3>
                    <p className="text-[13px] text-gray-600">
                      We&apos;ll be in touch soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 block mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 block mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full lg:w-auto px-8 py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
