
import React from 'react';
import { Mic2, Users, GlassWater, Clock, Star } from 'lucide-react';

const Programming: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#112E4A] py-20 text-white relative">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-[#C6DA31]">Programming</h1>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl">
            Inspiring Speaker Panels & Breakout Sessions featuring the brightest minds in Michigan innovation.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-24">

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-[#C6DA31] p-3 rounded-xl">
                <Mic2 className="text-[#112E4A]" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#112E4A]">Speaker List</h2>
            </div>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We invite the best speakers from all over the country to share their journey, from
              initial sparks of creativity to global market success. Our keynote and panelist slots
              are curated to provide actionable wisdom for every stage of invention.
            </p>
            <div className="bg-gray-100 p-16 rounded-3xl text-center border-4 border-dashed border-gray-200">
              <Star className="mx-auto text-[#C6DA31] mb-4 animate-pulse" size={48} />
              <h3 className="text-4xl font-bold text-[#112E4A] mb-4">Coming Soon!</h3>
              <p className="text-lg text-gray-500">Our stellar 2026 speaker lineup is currently being finalized.</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-[#C6DA31] p-3 rounded-xl">
                <Users className="text-[#112E4A]" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#112E4A]">Breakout Sessions</h2>
            </div>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Dive deep into specific topics like patent filing, prototype manufacturing, digital marketing
              for inventors, and venture capital readiness. These intimate sessions allow for direct Q&A
              with experts.
            </p>
            <div className="bg-[#112E4A]/5 p-12 rounded-3xl text-center border border-[#112E4A]/10">
              <h3 className="text-2xl font-bold text-[#112E4A] mb-4 uppercase tracking-widest">Announcing Soon</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                All breakout sessions will be on a drop-in basis. Stay tuned for the full program!
              </p>
            </div>
          </div>

          <div className="bg-[#112E4A] p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <div className="bg-[#C6DA31] w-24 h-24 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <GlassWater className="text-[#112E4A]" size={48} />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#C6DA31] mb-4">Reception</h2>
                <p className="text-xl opacity-90 mb-6">
                  Wrap up the day with our Grand Reception. Celebrate the winners of the Pitch Competition,
                  enjoy light refreshments, and solidify the connections made throughout the Summit.
                </p>
                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
                  <Clock size={16} /> After-Summit Event |
                  <a className="{py-2 hover:text-[#C6DA31] transition-colors ${location.pathname === link.path ? 'text-[#C6DA31] border-b-2 border-[#C6DA31]' : ''}"
                    href="https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523?aff=oddtdtcreator">
                    Register via Eventbrite
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Programming;
