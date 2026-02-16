
import React from 'react';
import { Trophy, Send, Users, CheckCircle } from 'lucide-react';

const PitchCompetition: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#00274C] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Trophy className="mx-auto text-[#FFCB05] mb-6" size={64} />
          <h1 className="text-5xl font-bold mb-4">Pitch Competition</h1>
          <p className="text-2xl text-[#FFCB05] font-semibold">Spin, Pitch, & Sell</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-16">
            <h2 className="text-3xl font-bold text-[#00274C]">Watch the Action</h2>
            <p>
              Watch the event and cheer on your favorite inventor. Join us for a competitive pitch event 
              as inventors vie for cash prizes. Be a part of the action with real-time live audience Voting. 
              Attendance for the pitch is included with every attendee ticket.
            </p>
          </div>

          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-200 mb-16 shadow-inner">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#00274C] mb-4">Apply to Pitch</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Are you an inventor who is eager to showcase your product? Apply to pitch and get a 
                  chance to win! This is your moment to gain visibility and expert validation.
                </p>
                <div className="mb-8">
                  <h4 className="font-bold text-[#00274C] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} /> Selection Criteria:
                  </h4>
                  <ul className="bg-white p-4 rounded-xl border border-gray-200">
                    <li className="text-[#00274C] font-semibold">Must have a minimum viable product (MVP)</li>
                  </ul>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-[#00274C] text-[#FFCB05] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                >
                  Apply Now via Velocity <Send size={20} />
                </a>
              </div>
              <div className="md:w-1/3">
                <div className="bg-[#FFCB05] p-8 rounded-2xl text-center">
                  <h3 className="text-4xl font-black text-[#00274C] mb-2">$ CASH $</h3>
                  <p className="text-[#00274C] font-bold uppercase tracking-widest">Prizes for Winners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 italic">
            <p>Chair: Meghan Hubbs | Applications hosted by Velocity</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PitchCompetition;
