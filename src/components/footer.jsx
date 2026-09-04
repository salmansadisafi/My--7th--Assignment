import React from 'react';
import facebookIcon from '../../Assets/instagram.png';
import instagramIcon from '../../Assets/facebook.png';
import twitterIcon from '../../Assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#1E4D40] text-white mt-20 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Logo and Subtitle */}
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">
          KeenKeeper
        </h2>

        <p className="text-emerald-100/80 text-xs sm:text-sm mb-6 whitespace-nowrap overflow-x-auto">
  Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
       </p>


        <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-3">
          Social Links
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-3 mb-10">

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-emerald-50 transition-colors"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-4 h-4"
            />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-emerald-50 transition-colors"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-4 h-4"
            />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-emerald-50 transition-colors"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-4 h-4"
            />
          </a>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>

            <a href="#" className="hover:underline">
              Terms of Service
            </a>

            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;