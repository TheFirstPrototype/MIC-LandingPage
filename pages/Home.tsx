
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Users, Handshake } from 'lucide-react';

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    {
      url: 'https://thefirstprototype.com/mic/event.jpg',
      title: '2026 Innovator\'s Summit',
      subtitle: 'Join Michigan\'s premier event for invention and creativity.'
    },
    {
      url: 'https://thefirstprototype.com/mic/pitch.jpg',
      title: 'Connecting Innovators',
      subtitle: 'Building a collaborative network for Michigan inventors.'
    },
    {
      url: 'https://thefirstprototype.com/mic/paula.jpg',
      title: 'Empowering Ideas',
      subtitle: 'From concept to commercialization with expert guidance.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#C6DA31] mb-4 drop-shadow-lg uppercase tracking-tight">
              {img.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
              {img.subtitle}
            </p>
            <Link
              to="/summit"
              className="bg-[#C6DA31] text-[#112E4A] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              Explore the Summit <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#C6DA31]' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 bg-white rounded-2xl shadow-xl border-t-4 border-[#C6DA31] hover:-translate-y-2 transition-transform duration-300">
    <div className="bg-[#112E4A]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-[#112E4A]" size={32} />
    </div>
    <h3 className="text-2xl font-bold text-[#112E4A] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <HeroCarousel />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#112E4A] mb-8">
            Welcome to the <span className="text-[#112E4A]">Michigan Inventors Coalition</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Where ingenuity meets opportunity. We are the heartbeat of Michigan’s innovation ecosystem,
            providing a platform where bold ideas take flight. Whether you're sketching your first prototype
            or scaling a startup, MIC is your partner in turning vision into reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Lightbulb}
              title="Education"
              description="Learn the intricate steps of commercialization, from patenting to manufacturing."
            />
            <FeatureCard
              icon={Users}
              title="Mentorship"
              description="Connect with seasoned entrepreneurs who have successfully navigated the path to market."
            />
            <FeatureCard
              icon={Handshake}
              title="Network"
              description="Gain access to a collaborative web of local, statewide, and federal partners."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#112E4A] text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-[#C6DA31]">About Our Mission</h2>
            <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
              <p>
                The Michigan Inventors Coalition (MIC) is a statewide 501(c)(3) nonprofit dedicated to supporting Michigan’s early-stage inventors and innovators as they move ideas toward commercialization.
              </p>
              <p>
                Founded in 2011, MIC connects inventors to critical resources through education, mentorship, and a collaborative network of local, statewide, and federal partners.
              </p>
              <p>
                In partnership with Michigan State University and the EDA University Center, MIC hosts its annual Inventors Expo and year-round opportunities that bring together innovators, service providers, and industry experts—strengthening Michigan’s innovation ecosystem.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/id/442/800/600"
              alt="Inventor collaboration"
              className="rounded-2xl shadow-2xl border-4 border-[#C6DA31]/30"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Users size={120} className="text-[#112E4A]" />
            </div>
            <h2 className="text-4xl font-bold text-[#112E4A] mb-6">Want to get Involved?</h2>
            <p className="text-lg text-gray-600 mb-8">
              The Michigan Inventors Coalition is powered by passionate individuals. We offer numerous
              volunteer opportunities throughout the year, from event organization to mentoring.
              Join our community and help shape the future of Michigan innovation.
            </p>
            <Link
              to="/contact-us"
              className="inline-block bg-[#112E4A] text-[#C6DA31] px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
