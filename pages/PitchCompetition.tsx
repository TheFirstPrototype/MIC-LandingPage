
import React from 'react';
import { Trophy, Users, CheckCircle } from 'lucide-react';

const PitchCompetition: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#112E4A] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Trophy className="mx-auto text-[#C6DA31] mb-6" size={64} />
          <h1 className="text-5xl font-bold mb-4">Pitch Competition</h1>
          <p className="text-2xl text-[#C6DA31] font-semibold">Spin, Pitch, & Sell</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#112E4A] mb-6">Spin, Pitch, & Sell</h2>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  The Summit’s signature pitch competition, <span className="font-semibold text-[#112E4A]">“Spin, Pitch, & Sell,”</span> invites inventors with a minimum viable product to present live for a chance to win cash prizes and gain visibility.
                </p>
                <p>
                  Sponsored by the <span className="font-semibold text-[#112E4A]">New Economy Initiative (NEI)</span>, the competition provides winners with significant funding and expert support to accelerate their journey to market.
                </p>
                <div className="bg-gray-50 border-l-4 border-[#C6DA31] p-6 rounded-r-xl italic text-gray-600">
                  "The competition will feature real-time audience voting, with winners announced during the afternoon reception."
                  <p className="mt-2 font-bold not-italic text-[#112E4A] text-sm">— Meghan Hubbs, Pitch Chair</p>
                </div>
              </div>
            </div>

            <div className="bg-[#112E4A] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6DA31] opacity-10 -mr-16 -mt-16 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-[#C6DA31]" />
                Technical Assistance
              </h3>
              <p className="mb-8 opacity-80">Expert guidance provided by our partners:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {[
                  { name: "Ward Law" },
                  { name: "Kevin Moran" },
                  { name: "Ash Creative" },
                  { name: "Velocity" },
                  { name: "Catalyst Media Factory" },
                  { name: "Saamer Mansoor", link: "https://linkedin.com/in/saamer" },
                  { name: "Joe Finkler" },
                  { name: "Leah Nauseda" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#C6DA31] hover:text-[#112E4A] px-4 py-1.5 rounded-full text-sm font-medium transition-all">
                        {item.name}
                      </a>
                    ) : (
                      <span className="bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium">
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#112E4A] mb-10 text-center">Cash Prizes & Support</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 1st Place */}
              <div className="bg-white p-8 rounded-3xl border-2 border-[#C6DA31] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-[#C6DA31] text-[#112E4A] px-6 py-2 font-black rounded-bl-2xl uppercase text-xs tracking-tighter">Winner</div>
                <div className="text-gray-400 font-bold uppercase text-xs mb-2">First Prize</div>
                <h3 className="text-5xl font-black text-[#112E4A] mb-4">$3,000</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Includes complimentary technical assistance to help finalize your MVP.
                </p>
              </div>

              {/* 2nd Place */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="text-gray-400 font-bold uppercase text-xs mb-2">Second Prize</div>
                <h3 className="text-4xl font-black text-[#112E4A] mb-4">$1,500</h3>
                <p className="text-gray-600 leading-relaxed">
                  Two months of complimentary technical assistance.
                </p>
              </div>

              {/* 3rd Place */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="text-gray-400 font-bold uppercase text-xs mb-2">Third Prize</div>
                <h3 className="text-4xl font-black text-[#112E4A] mb-4">$500</h3>
                <p className="text-gray-600 leading-relaxed">
                  One month of complimentary technical assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#112E4A] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#C6DA31]"></div>
            <h2 className="text-4xl font-bold mb-6">Applications are Closed</h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Thank you to everyone who submitted their application! Pitch competition applications are now closed.
              Please watch this page closely as we will be announcing the teams that made it to the finals soon.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-3 bg-white/10 text-white/50 border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl cursor-not-allowed">
                Applications Closed
              </div>
              <p className="flex items-center gap-2 text-[#C6DA31] font-bold uppercase tracking-widest text-sm">
                <CheckCircle size={18} /> Finalists Will Be Announced Here
              </p>
            </div>
          </div>

          <div className="mt-16 text-center text-gray-400 text-sm">
            <p>Applications hosted by Velocity | Pitch Competition Chair: Meghan Hubbs</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PitchCompetition;
