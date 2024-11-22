import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-[#C91C1C] text-white py-4">
      <div className="max-w-[1920px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="text-[#C91C1C] text-2xl font-bold">+</div>
          </div>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-white/80 ${location.pathname === '/' ? 'font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/hospital" 
            className={`text-white hover:text-white/80 ${location.pathname === '/hospital' ? 'font-bold' : ''}`}
          >
            Hospital
          </Link>
          <Link 
            to="/booking" 
            className={`bg-white text-[#C91C1C] px-6 py-2 rounded-full font-medium ${
              ['/booking', '/schedule'].includes(location.pathname) 
                ? 'font-bold' 
                : ''
            }`}
          >
            Online Booking
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-white/80 ${location.pathname === '/about' ? 'font-bold' : ''}`}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center">
          <UserCircle2 className="w-8 h-8 text-white" />
        </div>
      </div>
    </header>
  );
}
