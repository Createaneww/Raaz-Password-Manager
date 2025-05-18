import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-purple-800 mt-10 py-4 text-center border-t border-purple-300 fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} <span className="font-semibold">&lt;Raaz/&gt;</span> – Your own password manager.</p>
        <p className="text-xs mt-1">Made with 💜 by Manvar</p>
      </div>
    </footer>
  );
};

export default Footer;
