
import React from 'react';
import { Ticket, Layout, Quote, ArrowUpRight } from 'lucide-react';

const AttendExhibit: React.FC = () => {
  const testimonials = [
    {
      text: "The MIC Summit is where creativity meets connection, it's a chance for inventors to learn from experts, build meaningful relationships, and fast-track their ideas into real-world success",
      author: "Paula Badalamente | Founder | Imagio Glass Design"
    },
    {
      text: "As a founder, the Summit is a must-attend for inventors, helping innovators grow their ideas, connect with peers, and discover the tools they need to bring products to market",
      author: "Renee Henderson | Founder | Scent Sactuary"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#C6DA31] py-24 text-[#112E4A]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 uppercase tracking-tight">Attend | Exhibit</h1>
          <p className="text-2xl font-medium max-w-3xl mx-auto">
            Connect with fellow inventors, entrepreneurs, service providers, and business support organizations
            offering expertise in funding, legal, manufacturing, and commercialization.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-[#112E4A] p-12 rounded-3xl text-white shadow-2xl flex flex-col justify-between transform hover:scale-[1.02] transition-transform">
              <div>
                <Ticket className="text-[#C6DA31] mb-6" size={56} />
                <h2 className="text-4xl font-bold mb-6">Attend as a Visitor</h2>
                <ul className="space-y-4 mb-10 text-lg opacity-90">
                  <li className="flex items-start gap-2">✓ Access to all keynote sessions</li>
                  <li className="flex items-start gap-2">✓ Breakfast included</li>
                  <li className="flex items-start gap-2">✓ Networking with 100+ exhibitors</li>
                  <li className="flex items-start gap-2">✓ Watch the Pitch Competition live</li>
                </ul>
              </div>
              <a
                href="https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
                className="bg-[#C6DA31] text-[#112E4A] py-5 rounded-xl font-bold text-center text-xl flex items-center justify-center gap-2"
              >
                Register to Attend <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="bg-gray-100 p-12 rounded-3xl border-2 border-[#112E4A] flex flex-col justify-between transform hover:scale-[1.02] transition-transform">
              <div>
                <Layout className="text-[#112E4A] mb-6" size={56} />
                <h2 className="text-4xl font-bold text-[#112E4A] mb-6">Exhibit Your Invention</h2>
                <ul className="space-y-4 mb-10 text-lg text-gray-700">
                  <li className="flex items-start gap-2">✓ Dedicated booth space for the day</li>
                  <li className="flex items-start gap-2">✓ Exposure to potential investors</li>
                  <li className="flex items-start gap-2">✓ 2 Attendee tickets included</li>
                  <li className="flex items-start gap-2">✓ Feature in the Summit Program</li>
                </ul>
              </div>
              <a
                href="https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
                className="bg-[#112E4A] text-[#C6DA31] py-5 rounded-xl font-bold text-center text-xl flex items-center justify-center gap-2"
              >
                Register as Exhibitor <ArrowUpRight size={20} />
              </a>
            </div>

          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-[#112E4A] mb-12">Hear From Our Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 italic relative">
                  <Quote className="absolute -top-4 -left-4 text-[#C6DA31]" size={40} />
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>
                  <p className="font-bold text-[#112E4A] not-italic">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttendExhibit;
