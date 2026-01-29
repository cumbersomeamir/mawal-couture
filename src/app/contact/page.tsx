"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503342394128-480259e0d7d2?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h1 className="text-display">Book An Appointment</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Visit Our Store</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We invite you to experience our collections in person. Book an appointment 
                for a private viewing or simply drop by our store in Srinagar.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-3 text-gray-500">Store Location</h3>
                  <address className="not-italic text-gray-700 leading-relaxed">
                    1st Floor, Aircel Building, Near Gurudwara,<br />
                    Baghat, Srinagar,<br />
                    Jammu and Kashmir – 190005
                  </address>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-3 text-gray-500">Phone / WhatsApp</h3>
                  <p className="text-gray-700">
                    <a href="tel:+918899253285" className="hover:text-primary">+91-8899253285</a><br />
                    <a href="tel:+917006882929" className="hover:text-primary">+91-7006882929</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-3 text-gray-500">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:contact@mawalcouture.com" className="hover:text-primary">
                      contact@mawalcouture.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-3 text-gray-500">Store Hours</h3>
                  <p className="text-gray-700">
                    Monday - Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl mb-4">Thank You!</h3>
                  <p className="text-gray-600">
                    Your appointment request has been received. We&apos;ll contact you shortly to confirm.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl mb-6">Request an Appointment</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                        >
                          <option value="">Select a time</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about what you're looking for..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      REQUEST APPOINTMENT
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
