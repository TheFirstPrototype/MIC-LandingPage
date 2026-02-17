
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle2, Award, Presentation, Users as UsersIcon, Megaphone, HeartHandshake } from 'lucide-react';

const Summit: React.FC = () => {
  const expectations = [
    {
      title: 'Inspiring Speaker Panels & Breakout Sessions',
      desc: 'Hear from successful entrepreneurs and industry experts as they share real-world insights.',
      link: '/programming',
      icon: Presentation
    },
    {
      title: 'Exhibit your product | Invention Showcase',
      desc: 'Explore innovative products, prototypes, and ideas from inventors across the state.',
      link: '/attend',
      icon: LightbulbIcon
    },
    {
      title: 'Attend | Networking & Resource Connections',
      desc: 'Connect with fellow inventors, entrepreneurs, and service providers.',
      link: '/attend',
      icon: UsersIcon
    },
    {
      title: 'Live Pitch Competition | Spin, Pitch, & Sell',
      desc: 'Watch inventors compete in our signature pitch competition for cash prizes.',
      link: '/pitch-competition',
      icon: Award
    },
    {
      title: 'Reception & Awards Announcement',
      desc: 'Join us for an afternoon reception as winners are announced.',
      link: '/programming',
      icon: CheckCircle2
    },
    {
      title: 'Be a Sponsor',
      desc: 'Lend your support and be recognized on social media and at the event.',
      link: '/sponsor',
      icon: Megaphone
    },
    {
      title: 'Support & Volunteer',
      desc: 'Lend a hand, spread the word, and help us make the event a success.',
      link: '/sponsor',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
                                  {
                                    "@context": "https://schema.org",
                                    "@type": "Event",
                                    "name": "Michigan Inventors Coalition Expo 2026",
                                    "startDate": "2026-07-09T08:00:00-04:00",
                                    "endDate": "2026-07-09T17:00:00-04:00",
                                    "eventStatus": "https://schema.org/EventScheduled",
                                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                                    "location": {
                                      "@type": "Place",
                                      "name": "Kellogg Hotel & Conference Center",
                                      "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "219 S Harrison Rd",
                                        "addressLocality": "East Lansing",
                                        "addressRegion": "MI",
                                        "postalCode": "48824",
                                        "addressCountry": "US"
                                      }
                                    },
                                    "image": [
                                      "https://thefirstprototype.com/mic/2.png"
                                    ],
                                    "description": "The annual Michigan Inventors Coalition Expo brings together inventors, entrepreneurs, and resources from across the state for networking, education, and a pitch competition.",
                                    "organizer": {
                                      "@type": "Organization",
                                      "name": "Michigan Inventors Coalition",
                                      "url": "https://www.miinventors.org/"
                                    }
                                  }
                                ) 
                                }}
      />      
      <div className="bg-[#112E4A] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://thefirstprototype.com/mic/event.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#C6DA31]">2026 Inventors Summit</h1>
          <div className="flex flex-wrap justify-center gap-8 text-xl font-medium">
            <span className="flex items-center gap-2"><Calendar className="text-[#C6DA31]" /> Thursday, July 9, 2026</span>
            <span className="flex items-center gap-2"><MapPin className="text-[#C6DA31]" /> Kellogg Center, East Lansing, MI</span>
          </div>
          <p className="mt-8 text-2xl font-semibold opacity-90">9:00 AM – 4:00 PM</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700 mb-16">
            <p className="text-xl font-semibold text-[#112E4A] mb-4">Hosted by: The Michigan Inventors Coalition</p>
            <p className="bg-[#C6DA31]/10 border-l-4 border-[#C6DA31] p-6 rounded-r-xl italic">
              Supported in part by: a Michigan State University Regional Economic Innovation grant,
              the Michigan Inventors Coalition Expo captures innovation in motion, creating space for ideas
              to grow, connect, and take root in support of economic development across Michigan.
            </p>
            <p className="mt-8">
              Join inventors, entrepreneurs, and industry leaders for the 14th year of Michigan's premier event
              celebrating invention, creativity, and commercialization. The Michigan Inventors Coalition Expo
              brings together early-stage inventors, startups, and support organizations for a full day of
              learning, connection, and opportunity.
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#112E4A] mb-10 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                  <IconComp className="text-[#112E4A] mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold mb-3 text-[#112E4A]">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <Link to={item.link} className="text-[#112E4A] font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center bg-[#112E4A] p-12 rounded-3xl text-white">
            <p className="text-xl mb-8 leading-relaxed">
              Whether you're an aspiring inventor, a startup founder, an experienced business owner,
              or a professional supporting innovation, the Michigan Inventors Coalition Expo is where
              ideas gain momentum and connections turn into opportunities.
            </p>
            <p className="text-2xl font-bold text-[#C6DA31]">Mark your calendar and be part of Michigan's innovation community.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for the missing icon in the loop
const LightbulbIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
);
const ArrowRight = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

export default Summit;
