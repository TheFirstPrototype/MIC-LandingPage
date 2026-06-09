
import React from 'react';
import Link from '../src/components/LinkWithQuery';
import { Calendar, MapPin, CheckCircle2, Award, Presentation, Users as UsersIcon, Megaphone, HeartHandshake, Heart } from 'lucide-react';

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
      title: 'VIP Glow Party',
      desc: 'Hosted by Ward Law: food, cash bar, and pitch winners!',
      link: '/programming',
      icon: Heart
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "14th Annual Inventors Summit",
              "startDate": "2026-07-09T09:00:00-04:00",
              "endDate": "2026-07-09T16:00:00-04:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Kellogg Hotel and Conference Center",
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
                "https://thefirstprototype.com/mic/pitch.jpg"
              ],
              "description": "Hosted by the Michigan Inventors Coalition, the Summit will bring together more than 300 innovators, entrepreneurs, investors and industry experts for a day of education, networking and product discovery.",
              "offers": {
                "@type": "Offer",
                "url": "https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523",
                "availability": "https://schema.org/InStock"
              },
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
        <div className="absolute inset-0 bg-[url('https://thefirstprototype.com/mic/pitch.jpg')] bg-cover bg-center opacity-20" />
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
            <p className="text-xl leading-relaxed">
              The Michigan Inventors Coalition will host its <span className="font-bold text-[#112E4A]">14th Annual Inventors Summit</span> on <span className="font-semibold text-[#112E4A]">Thursday, July 9, 2026</span> at the Kellogg Hotel and Conference Center on the campus of Michigan State University.
            </p>

            <p className="bg-[#C6DA31]/10 border-l-4 border-[#C6DA31] p-6 rounded-r-xl italic text-gray-700">
              Hosted by the Michigan Inventors Coalition and supported in part by a Michigan State University Regional Economic Innovation grant, the Summit will bring together more than <span className="font-bold">300 innovators, entrepreneurs, investors and industry experts</span> for a day of education, networking and product discovery.
            </p>

            <blockquote className="my-12 border-l-4 border-gray-200 pl-8 italic text-gray-600">
              <p className="text-2xl font-medium text-[#112E4A] leading-relaxed mb-4">
                “The Michigan Inventors Summit is about turning ideas into action. Michigan has a long legacy of innovation. This event will continue that tradition by connecting inventors with the tools, relationships and real-world knowledge they need to move forward with confidence.”
              </p>
              <footer className="not-italic font-bold text-[#112E4A]">
                — Paula Macpherson, 2026 Inventors Summit Event Chair
              </footer>
            </blockquote>

            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 my-16">
              <h3 className="text-2xl font-bold text-[#112E4A] mb-6 flex items-center gap-2">
                <MapPin className="text-[#C6DA31]" /> Event Layout
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#112E4A] mb-2">Room Big Ten A</h4>
                  <p className="text-gray-600 text-sm">Exhibitor tables and the Invention Showcase.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#112E4A] mb-2">Room Big Ten B</h4>
                  <p className="text-gray-600 text-sm">Keynote presentations and panel discussions.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[#112E4A] mb-12 text-center">Summit Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectations.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#C6DA31] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 -mr-12 -mt-12 rounded-full group-hover:bg-[#C6DA31]/10 transition-colors"></div>
                  <IconComp className="text-[#112E4A] mb-6 group-hover:scale-110 transition-transform relative z-10" size={44} />
                  <h3 className="text-xl font-bold mb-3 text-[#112E4A] relative z-10 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm relative z-10 leading-relaxed">{item.desc}</p>
                  <Link to={item.link} className="text-[#112E4A] font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform relative z-10 text-sm">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-20 bg-[#112E4A] p-12 md:p-20 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#C6DA31] opacity-10 -ml-16 -mt-16 rounded-full"></div>
            <p className="text-2xl mb-10 leading-relaxed max-w-3xl mx-auto opacity-90">
              Whether you're an aspiring inventor, a startup founder, or a professional supporting innovation, the Michigan Inventors Summit is where ideas gain momentum.
            </p>
            <div className="inline-flex flex-col md:flex-row items-center gap-6">
              <span className="bg-[#C6DA31] text-[#112E4A] px-8 py-3 rounded-full font-black text-lg">
                <a href="https://www.eventbrite.com/e/michigan-inventors-coalition-2026-inventors-summit-tickets-1983324016523?aff=oddtdtcreator&utm_source=web-programming">Mark Your Calendar</a>
              </span>
              <p className="text-[#C6DA31] font-bold italic">
                Admission to the pitch competition and reception is included with each event ticket.
              </p>
            </div>
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
