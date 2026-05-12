
import React from 'react';
import { Map, Bed, Coffee, Info } from 'lucide-react';
import { Link } from 'react-router';

const KnowBeforeYouGo: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#C6DA31] py-20 text-[#112E4A]">
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
                <Map className="text-[#112E4A]" size={32} />
                <h2 className="text-3xl font-bold text-[#112E4A]">Map and Parking</h2>
              </div>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-600 text-lg">
                  The Kellogg Center is located at <span className="font-semibold text-[#112E4A]">219 S Harrison Rd, East Lansing, MI 48824</span>.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-bold text-[#112E4A] mb-2 flex items-center gap-2">
                    <Info size={18} className="text-[#C6DA31]" />
                    Suggested Parking
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Kellogg Conference Center and Hotel Pay-By-Plate Parking, Ramp 4/Lot 66 <span className="font-bold text-[#112E4A]">($2/hour)</span>.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Payment kiosks are located in the hotel (two on the lobby level next to the ATM) and in the parking ramp (three on the ground level).
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href="https://parking.msu.edu/about/complimentary-parking-information" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#112E4A] hover:text-[#C6DA31] transition-colors font-semibold border-b-2 border-[#C6DA31]/30 hover:border-[#C6DA31] pb-0.5 w-fit"
                  >
                    Complimentary Parking Info
                  </a>
                  <a 
                    href="https://maps.msu.edu/interactive/index.php" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#112E4A] hover:text-[#C6DA31] transition-colors font-semibold border-b-2 border-[#C6DA31]/30 hover:border-[#C6DA31] pb-0.5 w-fit"
                  >
                    Interactive Campus Map
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 overflow-hidden hover:border-[#C6DA31] transition-all duration-300 group cursor-pointer">
                <a href="https://www.google.com/maps/dir//Kellogg+Hotel+and+Conference+Center,+219+S+Harrison+Rd,+East+Lansing,+MI+48824/@42.7317061,-84.4957553,17z/data=!3m1!5s0x8822e9d87f20f723:0x7de08a94fb5ef11c!4m18!1m8!3m7!1s0x8822e9d8800e0571:0x68fc00062e9c6b53!2sKellogg+Hotel+and+Conference+Center,+219+S+Harrison+Rd,+East+Lansing,+MI+48824!3b1!8m2!3d42.7317061!4d-84.4931804!16s%2Fg%2F11rp6f64nb!4m8!1m0!1m5!1m1!1s0x8822e9d8800e0571:0x68fc00062e9c6b53!2m2!1d-84.4931804!2d42.7317061!3e0" target="_blank" rel="noopener noreferrer">
                  <img src="https://thefirstprototype.com/mic/kellogg.png" alt="Summit Map" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bed className="text-[#112E4A]" size={32} />
                <h2 className="text-3xl font-bold text-[#112E4A]">Accommodations</h2>
              </div>
              <div className="bg-[#112E4A] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#C6DA31]">Kellogg Hotel Information</h3>
                <p className="mb-6 opacity-90">
                  Stay where the action is! We have secured a block of rooms at the Kellogg Hotel and Conference Center.
                </p>
                <div className="bg-[#C6DA31]/10 border border-[#C6DA31]/30 p-4 rounded-lg">
                  <p className="text-sm uppercase tracking-wide opacity-80 mb-1">Discount Code</p>
                  <p className="text-3xl font-mono font-bold text-[#C6DA31]">MIC2026invent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <Coffee className="text-[#112E4A]" size={32} />
              <h2 className="text-3xl font-bold text-[#112E4A]">Dining Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#C6DA31]">
                <h4 className="text-xl font-bold text-[#112E4A] mb-2">Breakfast</h4>
                <p className="text-gray-600">
                  Continental breakfast will be served starting at 8:30 AM in the main registration area.
                  Enjoy fresh coffee, pastries, and fruit before the opening keynote.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#C6DA31]">
                <h4 className="text-xl font-bold text-[#112E4A] mb-2">Lunch</h4>
                <p className="text-gray-600">
                  A catered buffet lunch is available on-site for an additional fee at 12:00 PM.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#112E4A] font-bold text-lg border-b-2 border-[#C6DA31] pb-1">
              <Info size={20} /> Need help? Visit our registration desk upon arrival.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default KnowBeforeYouGo;
