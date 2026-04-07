import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '../assets/logo.png';
import textLogo from '../assets/text.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="mmrrpay logo" className="h-10 md:h-12 w-auto object-contain" />
              <img src={textLogo} alt="mmrrpay text" className="h-6 md:h-8 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fast, Secure, and Efficient Digital Payment Solutions for the modern world. Empowering your financial journey with technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-light rounded-full hover:bg-accent transition-colors duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-primary-light rounded-full hover:bg-accent transition-colors duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-primary-light rounded-full hover:bg-accent transition-colors duration-300"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-l-4 border-accent pl-2">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-l-4 border-accent pl-2">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Bill Payments - Bharat Connect</li>
              <li>Education Fee Payments</li>
              <li>Insurance Payments</li>
              <li>Electricity Bill Payment</li>
              <li>LPG & Water Bill Payments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-l-4 border-accent pl-2">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>8106426368</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>mmrrhyd@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="leading-relaxed">h no -8-3-228/489, opp axis atm, rahmath Nagar, yousufguda Hyderabad 500045</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-primary-light text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} mmrrpay. All rights reserved. | Powered by Veggie Software Solutions Private Limited</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
