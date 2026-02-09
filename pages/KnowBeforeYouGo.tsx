
import React from 'react';
import { Map, Bed, Coffee, Info } from 'lucide-react';

const KnowBeforeYouGo: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#FFCB05] py-20 text-[#00274C]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Know Before You Go</h1>
          <p className="text-xl opacity-80 uppercase tracking-widest font-bold">2026 Inventors Summit Essentials</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Map className="text-[#00274C]" size={32} />
                <h2 className="text-3xl font-bold text-[#00274C]">Map and Parking</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                The Kellogg Center is located at 219 S Harrison Rd, East Lansing, MI 48824. 
                Complimentary parking is available in the ramp adjacent to the hotel for all Summit attendees.
              </p>
              <div className="bg-gray-100 p-4 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center h-64 text-gray-400 italic">
                [Map visualization here - map.jpg]
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bed className="text-[#00274C]" size={32} />
                <h2 className="text-3xl font-bold text-[#00274C]">Accommodations</h2>
              </div>
              <div className="bg-[#00274C] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#FFCB05]">Kellogg Hotel Information</h3>
                <p className="mb-6 opacity-90">
                  Stay where the action is! We have secured a block of rooms at the Kellogg Hotel and Conference Center.
                </p>
                <div className="bg-[#FFCB05]/10 border border-[#FFCB05]/30 p-4 rounded-lg">
                  <p className="text-sm uppercase tracking-wide opacity-80 mb-1">Discount Code</p>
                  <p className="text-3xl font-mono font-bold text-[#FFCB05]">MIC2026invent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <Coffee className="text-[#00274C]" size={32} />
              <h2 className="text-3xl font-bold text-[#00274C]">Dining Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FFCB05]">
                <h4 className="text-xl font-bold text-[#00274C] mb-2">Breakfast</h4>
                <p className="text-gray-600">
                  Continental breakfast will be served starting at 8:30 AM in the main registration area. 
                  Enjoy fresh coffee, pastries, and fruit before the opening keynote.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FFCB05]">
                <h4 className="text-xl font-bold text-[#00274C] mb-2">Lunch</h4>
                <p className="text-gray-600">
                  A catered buffet lunch is included with your registration and will be served at 12:00 PM. 
                  Please notify us of any dietary restrictions during registration.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#00274C] font-bold text-lg border-b-2 border-[#FFCB05] pb-1">
              <Info size={20} /> Need help? Visit our registration desk upon arrival.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default KnowBeforeYouGo;
