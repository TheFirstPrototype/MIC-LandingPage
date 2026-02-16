
import React from 'react';
import { User } from 'lucide-react';

const Board: React.FC = () => {
  const directors = [
    { name: "Joe Finkler", role: "Board Member" },
    { name: "Dennis Shaver", role: "Board Member" },
    { name: "Kevin Moran", role: "Board Member" },
    { name: "Paula Macpherson", role: "2026 Inventors Summit Event Chair" },
    { name: "John D. Hopkins", role: "Board Member" },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-[#16443A] py-20 text-center">
        <h1 className="text-5xl font-bold text-[#FFCB05] mb-4">Board of Directors</h1>
        <p className="text-white opacity-80 max-w-2xl mx-auto">The dedicated leaders driving MIC's mission forward.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-3xl text-center group hover:bg-[#FFCB05] transition-all duration-500">
                <div className="w-24 h-24 bg-[#16443A] rounded-full mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <User size={48} />
                </div>
                <h3 className="text-2xl font-bold text-[#16443A] mb-2">{director.name}</h3>
                <p className="text-gray-500 group-hover:text-[#16443A] font-medium">{director.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFCB05]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#16443A] mb-6">A Legacy of Innovation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Since 2011, our board has been composed of professionals who understand the unique 
            challenges faced by Michigan inventors. Together, they volunteer their expertise to 
            build a more robust, connected, and supportive state economy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Board;
