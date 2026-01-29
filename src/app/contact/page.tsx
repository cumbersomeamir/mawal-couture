"use client";
import { useState } from 'react';
import { 
  ChinarLeafSVG, 
  PaisleySVG,
  LotusSVG,
  EmbroideryLine, 
  ScrollReveal,
  ShikaraSVG,
  MountainSilhouette 
} from '../../components/KashmirElements';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 opacity-10 hidden lg:block">
        <PaisleySVG size={100} color="#722F37" />
      </div>
      
      <div className="container relative py-10 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Info */}
            <ScrollReveal>
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <ChinarLeafSVG size={18} color="#722F37" />
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                    Get in Touch
                  </span>
                </div>
                
                <h1 
                  className="text-4xl lg:text-6xl font-light tracking-tight mb-6 lg:mb-8 text-gray-900"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Contact
                </h1>
                
                <p className="text-[14px] text-gray-600 leading-relaxed mb-10">
                  We would love to hear from you. Visit our studio in Srinagar or reach out 
                  to discuss your custom requirements.
                </p>
                
                <EmbroideryLine className="max-w-[100px] mb-12" />
                
                {/* Contact Info */}
                <div className="space-y-10">
                  <div className="kashmir-card p-6">
                    <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
                      <span>◆</span> Visit Us
                    </h3>
                    <address className="not-italic text-[14px] leading-relaxed text-gray-700">
                      1st Floor, Aircel Building,<br />
                      Near Gurudwara, Baghat,<br />
                      Srinagar, J&K – 190005
                    </address>
                    
                    {/* Shikara icon */}
                    <div className="mt-4 opacity-30">
                      <ShikaraSVG size={60} color="#722F37" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="kashmir-card p-6">
                      <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
                        <span>◆</span> Call Us
                      </h3>
                      <p className="text-[14px]">
                        <a 
                          href="tel:+918899253285" 
                          className="text-gray-700 hover:text-[#722F37] transition-colors"
                        >
                          +91 88992 53285
                        </a>
                      </p>
                      <p className="text-[14px] mt-2">
                        <a 
                          href="mailto:contact@mawalcouture.com" 
                          className="text-gray-700 hover:text-[#722F37] transition-colors"
                        >
                          contact@mawalcouture.com
                        </a>
                      </p>
                    </div>

                    <div className="kashmir-card p-6">
                      <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
                        <span>◆</span> Hours
                      </h3>
                      <p className="text-[14px] text-gray-700 leading-relaxed">
                        Mon – Sat: 10am – 7pm<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal delay={100}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#D4AF37] opacity-40 hidden lg:block" />
                
                {submitted ? (
                  <div className="h-full min-h-[400px] flex items-center justify-center kashmir-card">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                        <LotusSVG size={40} color="#D4AF37" />
                      </div>
                      <h3 
                        className="text-2xl font-light mb-3 text-gray-900"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Thank you
                      </h3>
                      <p className="text-[14px] text-gray-600">
                        We&apos;ll be in touch soon.
                      </p>
                      
                      <EmbroideryLine className="mt-8 max-w-[100px] mx-auto" />
                    </div>
                  </div>
                ) : (
                  <div className="kashmir-card p-8 lg:p-10">
                    <h2 
                      className="text-xl lg:text-2xl font-light mb-8 text-gray-900"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Send us a message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label htmlFor="name" className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-primary w-full sm:w-auto"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Mountain silhouette */}
      <MountainSilhouette className="opacity-30" />
    </main>
  );
}
