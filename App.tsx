
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Import Pages
import Home from './pages/Home';
import Summit from './pages/Summit';
import KnowBeforeYouGo from './pages/KnowBeforeYouGo';
import Programming from './pages/Programming';
import AttendExhibit from './pages/AttendExhibit';
import PitchCompetition from './pages/PitchCompetition';
import SponsorVolunteer from './pages/SponsorVolunteer';
import Board from './pages/Board';
import Contact from './pages/Contact';
import ScrollToTop from './src/components/ScrollToTop';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: '2026 Inventors Summit',
      path: '/summit',
      submenu: [
        { name: 'Event Details', path: '/summit' },
        { name: 'Know before you go', path: '/know' },
        { name: 'Programming', path: '/programming' },
        { name: 'Attend | Exhibit', path: '/attend' },
        { name: 'Pitch Competition', path: '/pitch-competition' },
        { name: 'Sponsor | Volunteer', path: '/sponsor' },
      ]
    },
    { name: 'Board of Directors', path: '/board' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-[#16443A] text-white sticky top-0 z-50 shadow-lg border-b border-[#FFCB05]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 group">
            <img
              src="https://thefirstprototype.com/mic/2.png"
              alt="MIC Logo"
              className="h-20 w-auto brightness-200 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer py-2 hover:text-[#FFCB05] transition-colors"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                    <div className={`absolute top-full left-0 w-64 bg-[#16443A] border border-[#FFCB05]/20 rounded-b-lg shadow-xl py-2 overflow-hidden transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} onMouseLeave={() => setDropdownOpen(false)}>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-sm hover:bg-[#FFCB05] hover:text-[#16443A] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`py-2 hover:text-[#FFCB05] transition-colors ${location.pathname === link.path ? 'text-[#FFCB05] border-b-2 border-[#FFCB05]' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFCB05] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden bg-[#16443A] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t border-[#FFCB05]/20' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <>
                  <div className="font-bold text-[#FFCB05] px-3 py-2 text-base uppercase tracking-wider">{link.name}</div>
                  <div className="pl-6 space-y-1">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-3 py-2 text-sm text-white hover:text-[#FFCB05] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-[#FFCB05] transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#16443A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="https://thefirstprototype.com/mic/2.png" alt="MIC" className="h-16 w-auto brightness-200 mb-4" />
          <p className="text-gray-300 text-sm">
            Supporting Michigan’s early-stage inventors and innovators as they move ideas toward commercialization since 2011.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#FFCB05]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/summit" className="hover:text-[#FFCB05]">2026 Inventors Summit</Link></li>
            <li><Link to="/pitch-competition" className="hover:text-[#FFCB05]">Pitch Competition</Link></li>
            <li><Link to="/sponsor" className="hover:text-[#FFCB05]">Sponsor & Volunteer</Link></li>
            <li><Link to="/board" className="hover:text-[#FFCB05]">Board of Directors</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#FFCB05]">Contact</h4>
          <p className="text-sm text-gray-300">Kevin Moran</p>
          <p className="text-sm text-gray-300">ontvgrin@gmail.com</p>
          <p className="text-sm text-gray-300">616 402 4714</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-[#FFCB05]/20 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Michigan Inventors Coalition. All Rights Reserved. A 501(c)(3) Nonprofit.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summit" element={<Summit />} />
          <Route path="/know" element={<KnowBeforeYouGo />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/attend" element={<AttendExhibit />} />
          <Route path="/pitch-competition" element={<PitchCompetition />} />
          <Route path="/sponsor" element={<SponsorVolunteer />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
