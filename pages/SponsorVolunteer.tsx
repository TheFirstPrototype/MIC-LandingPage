
import React from 'react';
import { DollarSign, Check, HandHeart, CalendarCheck } from 'lucide-react';

// Fix: Use React.FC to handle React-specific props like 'key' and provide proper typing for the component
const SponsorCard: React.FC<{ tier: string; price: string; features: string[]; available: string }> = ({ tier, price, features, available }) => (
  <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 flex flex-col shadow-lg hover:border-[#FFCB05] transition-all relative overflow-hidden">
    <div className="absolute top-0 right-0 bg-[#FFCB05] text-[#00274C] px-4 py-1 text-xs font-bold uppercase rounded-bl-xl">
      {available} Available
    </div>
    <h3 className="text-2xl font-bold text-[#00274C] mb-2">{tier}</h3>
    <p className="text-3xl font-black text-[#00274C] mb-6">{price}</p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
          <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className="w-full bg-[#00274C] text-[#FFCB05] py-3 rounded-xl font-bold hover:bg-[#003d7c] transition-colors">
      Select {tier}
    </button>
  </div>
);

const SponsorVolunteer: React.FC = () => {
  const sponsorships = [
    {
      tier: "GOLD",
      price: "$10,000.00",
      available: "1",
      features: [
        "1 XL exhibit booth", "4 tickets to attend", "4 lunch tickets",
        "Recognition on all communications (Print & Electronic)",
        "Swag Bag Co-branded with MIC",
        "3 minutes on main stage (60s video + 2m speech)",
        "Your name on every centerpiece"
      ]
    },
    {
      tier: "SILVER",
      price: "$5,000.00",
      available: "2",
      features: [
        "1 exhibit booth", "2 attendee tickets", "2 lunch tickets",
        "Recognition on all communications",
        "Swag Bag Inclusion item", "Your name on every centerpiece"
      ]
    },
    {
      tier: "BRONZE",
      price: "$2,500.00",
      available: "4",
      features: [
        "1 exhibit booth", "2 attendee tickets",
        "Recognition on communications & website",
        "Swag Bag Inclusion item", "Your name on every centerpiece"
      ]
    },
    {
      tier: "DJ",
      price: "$3,000.00",
      available: "1",
      features: [
        "1 exhibit booth", "2 attendee tickets", "2 lunch tickets",
        "Recognition on website & print", "Name on centerpiece & DJ Booth"
      ]
    },
    {
      tier: "PHOTO BOOTH",
      price: "$3,000.00",
      available: "1",
      features: [
        "1 exhibit booth", "2 attendee tickets", "2 lunch tickets",
        "Your logo on every photo printed at event"
      ]
    },
    {
      tier: "RECEPTION",
      price: "$1,000.00",
      available: "4",
      features: [
        "1 exhibit booth", "2 attendee/lunch tickets", "Recognition on website", "Swag bag inclusion"
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#00274C] py-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#FFCB05]">Sponsor & Volunteer</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Partner with MIC to empower Michigan's future.</p>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <DollarSign className="text-[#00274C]" size={36} />
            <h2 className="text-4xl font-bold text-[#00274C]">Sponsorship Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Fix: Passed props explicitly to ensure key is handled correctly by JSX transform */}
            {sponsorships.map((s, idx) => (
              <SponsorCard 
                key={idx} 
                tier={s.tier} 
                price={s.price} 
                features={s.features} 
                available={s.available} 
              />
            ))}
          </div>

          <div id="volunteer" className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-[#FFCB05]/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <HandHeart size={200} className="text-[#00274C]" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <CalendarCheck className="text-[#00274C]" size={36} />
                <h2 className="text-4xl font-bold text-[#00274C]">Join Our Volunteer Team</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Michigan Inventors Coalition is seeking volunteers to make the 2026 Inventors Summit a success! 
                It takes a village to put on an event of this size and we can’t do it alone. Please consider 
                donating 2-3 hours of your time at the event to help us make it a great day.
              </p>
              <div className="space-y-4">
                <button className="bg-[#00274C] text-[#FFCB05] px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
                  Volunteer Sign-up <HandHeart size={20} />
                </button>
                <p className="text-sm text-gray-400 italic">Chair: Katie Nida | Volunteer signup hosted by Velocity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorVolunteer;
