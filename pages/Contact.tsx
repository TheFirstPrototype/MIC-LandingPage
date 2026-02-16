
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#16443A] py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#FFCB05]">Contact Us</h1>
        <p className="text-xl opacity-90">Have questions? We're here to help.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-bold text-[#16443A] mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether you're looking for resources, interested in sponsorship, or want to 
                share your latest invention, reach out to us. We typically respond within 1-2 business days.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-[#FFCB05] p-4 rounded-2xl text-[#16443A]">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h4>
                    <p className="text-xl font-bold text-[#16443A]">ontvgrin@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="bg-[#FFCB05] p-4 rounded-2xl text-[#16443A]">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone</h4>
                    <p className="text-xl font-bold text-[#16443A]">616 402 4714</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#FFCB05] p-4 rounded-2xl text-[#16443A]">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Location</h4>
                    <p className="text-xl font-bold text-[#16443A]">Michigan, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="text-lg font-bold text-[#16443A] mb-2">Direct Contact</h4>
                <p className="text-gray-600 font-medium">Point of Contact: Kevin Moran</p>
              </div>
            </div>

            <div className="bg-[#16443A] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Send size={120} className="text-[#FFCB05]" />
              </div>
              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[#FFCB05] text-sm font-bold mb-2 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FFCB05] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[#FFCB05] text-sm font-bold mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FFCB05] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#FFCB05] text-sm font-bold mb-2 uppercase tracking-wide">Subject</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FFCB05] transition-colors appearance-none">
                    <option className="bg-[#16443A]">General Inquiry</option>
                    <option className="bg-[#16443A]">Summit Registration</option>
                    <option className="bg-[#16443A]">Sponsorship</option>
                    <option className="bg-[#16443A]">Volunteer Opportunities</option>
                    <option className="bg-[#16443A]">Pitch Competition</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#FFCB05] text-sm font-bold mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#FFCB05] transition-colors h-40"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                <button className="w-full bg-[#FFCB05] text-[#16443A] py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
