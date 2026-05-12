import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Mic2, Users, GlassWater, Clock, Star } from 'lucide-react';

const Programming: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id'); // Get the 'id' parameter from the URL
  const utmSource = searchParams.get('utm_source');
  const eventbriteUrl = utmSource
    ? `https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523?aff=oddtdtcreator&utm_source=web-programming-${utmSource}`
    : `https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523?aff=oddtdtcreator&utm_source=web-programming`;

  // --- Function to send data to Apps Script ---
  const trackEventbriteClick = async () => {
    if (!userId) {
      console.warn("UserId not found in URL. Cannot track Eventbrite click for conversion.");
      return;
    }

    const appsScriptWebAppUrl = 'https://script.google.com/macros/s/AKfycby-udlmLJjEpHAEAfjQk_Qt0cK1Z99epQXsZnTkrBjGBgUr7FctjLDWU64hdk_7KmXxQQ/exec'; // <<< IMPORTANT: Paste your Apps Script Web App URL here!

    try {
      const response = await fetch(appsScriptWebAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          userId: userId,
          event: 'eventbrite_click',
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(`Eventbrite click tracked successfully for UserId: ${userId}`);
      } else {
        console.error(`Failed to track Eventbrite click for UserId: ${userId}`, data.error);
      }
    } catch (error) {
      console.error('Error sending Eventbrite click data to Apps Script:', error);
    }
  };

  // Optional: You can use useEffect to log the userId when the page loads
  useEffect(() => {
    if (userId) {
      console.log('User landed with ID:', userId);
      // You could also log this initial landing to a separate Apps Script doPost if needed,
      // but the main focus here is the Eventbrite conversion.
    }
  }, [userId]);

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
              <h2 className="text-3xl font-bold text-[#112E4A]">Featured Speakers & Experts</h2>
            </div>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              The program will include nationally recognized experts, seasoned inventors, leaders in intellectual property, Amazon sales, and successful entrepreneurs.
            </p>

            <div className="grid gap-4 mb-12">
              {[
                { name: "Barbara Kent and Joanna Serra", desc: "Founders of Fundraiser Blankets® (as seen on Shark Tank)" },
                { name: "Special Guest from USPTO", desc: "Get your questions answered from the US Patent and Trademark Office" },
                { name: "Dr. Brooks", desc: "Michigan State University leader in economic development and innovation" },
                { name: "Christopher Kaminsky", desc: "Grand River Makerspace, supporting inventors with prototyping and fabrication tools" },
                { name: "Steve Cantin", desc: "30+ years in pet industry; Sells to Petco, PetSmart, Chewy, and Pet Supply Plus." },
                { name: "Craig Fowler", desc: "Entrepreneur and angel investor" },
                { name: "Dennis Shaver", desc: "Entrepreneur and innovation leader" },
                { name: "Kevin Moran", desc: "Product development and retail strategist" },
                { name: "Other Expert Guests", desc: "Renowned inventors and licensing experts known for negotiating high-value licensing agreements." }
              ].map((speaker, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="bg-[#C6DA31]/20 p-2 rounded-lg mt-1">
                    <Star className="text-[#112E4A]" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#112E4A] text-lg leading-tight mb-1">{speaker.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{speaker.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 mb-12">
              <p className="text-gray-700 leading-relaxed mb-8">
                Past participants and affiliated inventors have secured retail placements, licensing agreements, national media exposure, and appearances on programs such as “Shark Tank.” The coalition also maintains partnerships with national inventor networks, including <span className="font-bold text-[#112E4A]">Inventor Groups of America</span>, and collaborates with inventor organizations in Texas, Kentucky, Florida, and many more states.
              </p>
              <blockquote className="border-l-4 border-[#C6DA31] pl-6 py-2 relative">
                <p className="text-xl text-[#112E4A] italic leading-relaxed mb-6 font-medium">
                  “This Summit is truly a must-attend for anyone serious about turning an idea into a real product. The Michigan Inventors Summit brings all of those critical resources together in one place. Whether you’re just starting out or ready to scale, this event can help move your idea forward in a meaningful way.”
                </p>
                <footer className="text-[#112E4A] font-bold flex items-center gap-2">
                  <div className="w-8 h-px bg-[#C6DA31]"></div>
                  Joanna Serra, founder of Fundraiser Blankets®
                </footer>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-[#C6DA31] p-3 rounded-xl">
                <Users className="text-[#112E4A]" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#112E4A]">Breakout Sessions & Panels</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#112E4A] uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C6DA31] rounded-full"></div>
                    Break-Out Sessions
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Leah Nauseada", topic: "Networking w/ Intention" },
                      { name: "Pete Brown", topic: "Ash Interactive" },
                      { name: "Jennifer Foster", topic: "Catalyst Media Factory" }
                    ].map((s, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <span className="font-bold text-[#112E4A] whitespace-nowrap">{s.name}</span>
                        <div className="w-px h-4 bg-gray-200"></div>
                        <span className="text-gray-600 italic">{s.topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#112E4A] uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#C6DA31] rounded-full"></div>
                    Featured Presentations
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <span className="font-bold text-[#112E4A]">US Patent & Trademark Office</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-[#C6DA31] shadow-sm border-l-4">
                      <span className="font-bold text-[#112E4A]">Saamer Mansoor</span>
                      <span className="mx-3 text-gray-300">|</span>
                      <span className="text-gray-600">AI Strategy for Business</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#112E4A] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6DA31] opacity-10 -mr-16 -mt-16 rounded-full"></div>
                <h3 className="text-xl font-bold text-[#C6DA31] uppercase tracking-widest mb-8">Expert Panelists</h3>
                <div className="flex flex-wrap gap-2">
                  {["Craig Fowler", "Kevin Moran", "Dennis Shaver", "Jake Ward", "Paula Macpherson", "Joe Finkler", "Wafa Dinero"].map((name, i) => (
                    <span key={i} className="bg-white/10 px-4 py-2 rounded-xl text-sm font-medium border border-white/5 hover:bg-white/20 transition-colors">
                      {name}
                    </span>
                  ))}
                </div>
                <p className="mt-10 text-sm opacity-60 leading-relaxed italic">
                  Our panelists bring decades of combined experience across intellectual property, investment, and market scaling.
                </p>
              </div>
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
                    href={eventbriteUrl}
                    onClick={trackEventbriteClick}
                    target="_blank">
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
