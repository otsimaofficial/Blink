import React, { useState } from 'react';

const SignUpModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-8 md:pt-20 p-4 bg-black/30 backdrop-blur-[2px]"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-[500px] md:max-w-[625px] rounded-2xl overflow-y-auto max-h-[90vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Background Image Area - Hidden on mobile */}
        <div className="hidden md:block w-full h-32  opacity-20"></div>

        {/* Modal Content */}
        <div className="px-6 md:px-12 pb-8 md:pb-12 pt-6 md:pt-0">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8">
            Sign up to Blink
          </h2>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 md:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors text-sm md:text-base"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors mb-4 text-sm md:text-base">
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-xs md:text-sm uppercase">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Gmail Button */}
          <button className="w-full py-3 md:py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors mb-3 flex items-center justify-center gap-2 text-sm md:text-base">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.17 8.36c.07.38.11.78.11 1.19 0 4.85-3.25 8.3-8.17 8.3A8.33 8.33 0 0 1 10 1.37c2.24 0 4.27.89 5.77 2.33l-2.34 2.25A4.94 4.94 0 0 0 10 4.58a5.42 5.42 0 1 0 3.83 9.25c1.48-1.48 1.95-3.57 2.03-5.41l-5.86-.06z" fill="#4285F4"/>
              <path d="M10 1.37v3.21c1.82 0 3.47.74 4.66 1.93l2.34-2.25A8.28 8.28 0 0 0 10 1.37z" fill="#EA4335"/>
              <path d="M10 17.85v-3.21a5.4 5.4 0 0 1-3.83-1.56l-2.34 2.25A8.28 8.28 0 0 0 10 17.85z" fill="#34A853"/>
              <path d="M4.58 10c0-1.03.29-1.99.79-2.81L3.03 4.94A8.26 8.26 0 0 0 1.67 10c0 1.85.61 3.56 1.64 4.94l2.34-2.25a5.35 5.35 0 0 1-.79-2.69z" fill="#FBBC05"/>
            </svg>
            Gmail
          </button>

          {/* Discord Button */}
          <button className="w-full py-3 md:py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors mb-5 md:mb-6 flex items-center justify-center gap-2 text-sm md:text-base">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5865F2">
              <path d="M19.73 5.09a16.47 16.47 0 0 0-4.09-1.27.06.06 0 0 0-.07.03c-.18.31-.37.72-.51 1.04a15.2 15.2 0 0 0-4.57 0 10.39 10.39 0 0 0-.52-1.04.06.06 0 0 0-.07-.03c-1.44.25-2.81.69-4.09 1.27a.06.06 0 0 0-.03.02C2.71 8.57 2.05 11.95 2.36 15.29a.07.07 0 0 0 .03.04 16.6 16.6 0 0 0 5.01 2.53.06.06 0 0 0 .07-.02c.39-.53.74-1.09 1.03-1.68a.06.06 0 0 0-.03-.09 10.9 10.9 0 0 1-1.56-.75.06.06 0 0 1-.01-.11c.1-.08.21-.16.31-.24a.06.06 0 0 1 .06-.01c3.27 1.49 6.81 1.49 10.04 0a.06.06 0 0 1 .06.01c.1.08.21.16.31.24a.06.06 0 0 1-.01.11c-.5.29-1.02.54-1.56.75a.06.06 0 0 0-.03.09c.3.59.65 1.15 1.03 1.68a.06.06 0 0 0 .07.02 16.55 16.55 0 0 0 5.02-2.53.06.06 0 0 0 .03-.04c.37-3.86-.62-7.22-2.63-10.18a.05.05 0 0 0-.03-.02zM8.94 13.38c-.88 0-1.6-.81-1.6-1.8s.71-1.8 1.6-1.8c.9 0 1.62.82 1.6 1.8 0 .99-.71 1.8-1.6 1.8zm6.14 0c-.88 0-1.6-.81-1.6-1.8s.71-1.8 1.6-1.8c.9 0 1.62.82 1.6 1.8 0 .99-.7 1.8-1.6 1.8z"/>
            </svg>
            Discord
          </button>

          {/* Promo Code Link */}
          <button className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 md:mb-8 w-full text-sm md:text-base">
            I have promo code
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Terms and Privacy */}
          <p className="text-center text-xs md:text-sm text-gray-500">
            By creating an account you agree to our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;