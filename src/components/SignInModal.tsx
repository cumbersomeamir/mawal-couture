"use client";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeSignIn, openSignUp } from '../store/slices/uiSlice';
import { login } from '../store/slices/authSlice';
import { RootState } from '../store/store';

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
        className="absolute inset-0 bg-black/50" 
        onClick={() => dispatch(closeSignIn())}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-md p-6 sm:p-8 lg:p-12 rounded-t-2xl sm:rounded-none max-h-[90vh] overflow-y-auto">
        <button 
          onClick={() => dispatch(closeSignIn())}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label htmlFor="signin-email" className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">
              Email
            </label>
            <input
              type="email"
              id="signin-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="signin-password" className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">
              Password
            </label>
            <input
              type="password"
              id="signin-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
            />
          </div>

          <button type="submit" className="w-full py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors mt-6 sm:mt-8">
            Sign In
          </button>
        </form>

        <p className="text-center text-[12px] text-gray-500 mt-6 sm:mt-8">
          Don&apos;t have an account?{' '}
          <button 
            onClick={switchToSignUp}
            className="text-black underline hover:no-underline min-h-[44px] inline-flex items-center"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}
