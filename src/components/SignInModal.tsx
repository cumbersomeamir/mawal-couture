"use client";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeSignIn, openSignUp } from '../store/slices/uiSlice';
import { login } from '../store/slices/authSlice';
import { RootState } from '../store/store';
import { PaisleySVG, EmbroideryLine } from './KashmirElements';

export default function SignInModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.ui.signInOpen);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name: email.split('@')[0], email }));
    dispatch(closeSignIn());
  };

  const switchToSignUp = () => {
    dispatch(closeSignIn());
    dispatch(openSignUp());
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={() => dispatch(closeSignIn())}
      />
      
      {/* Modal */}
      <div className="relative bg-[#FBF9F4] w-full sm:max-w-md p-8 sm:p-10 lg:p-12 rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        {/* Background pattern */}
        <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none rounded-t-2xl sm:rounded-none" />
        
        {/* Decorative paisley */}
        <div className="absolute top-4 left-4 opacity-10">
          <PaisleySVG size={40} color="#722F37" />
        </div>
        
        {/* Close button */}
        <button 
          onClick={() => dispatch(closeSignIn())}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:text-[#722F37] transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="relative">
          <h2 
            className="text-2xl sm:text-3xl font-light mb-2 text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Welcome Back
          </h2>
          <p className="text-[12px] text-gray-500 mb-8">Sign in to your account</p>
          
          <EmbroideryLine className="max-w-[80px] mb-8" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="signin-email" className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
                Email
              </label>
              <input
                type="email"
                id="signin-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="signin-password" className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3">
                Password
              </label>
              <input
                type="password"
                id="signin-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-8">
              Sign In
            </button>
          </form>

          <p className="text-center text-[12px] text-gray-500 mt-8">
            Don&apos;t have an account?{' '}
            <button 
              onClick={switchToSignUp}
              className="text-[#722F37] hover:text-[#D4AF37] underline hover:no-underline min-h-[44px] inline-flex items-center transition-colors"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
