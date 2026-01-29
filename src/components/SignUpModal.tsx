"use client";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { signInSuccess } from '../store/slices/authSlice';
import { closeSignUp, openSignIn } from '../store/slices/uiSlice';

export default function SignUpModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s: RootState) => s.ui.signUpOpen);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign up
    dispatch(signInSuccess({ id: 'user-new', name, email }));
    dispatch(closeSignUp());
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={() => dispatch(closeSignUp())}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md mx-4 p-8">
        <button 
          onClick={() => dispatch(closeSignUp())}
          className="absolute top-4 right-4 p-2 hover:opacity-70"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 className="font-serif text-2xl mb-6 text-center">Create an Account</h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password *
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
            />
          </div>

          <p className="text-xs text-gray-500">
            Your personal data will be used to support your experience throughout this website, 
            to manage access to your account, and for other purposes described in our privacy policy.
          </p>

          <button type="submit" className="btn-primary w-full">
            CREATE ACCOUNT
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{' '}
          <button 
            onClick={() => {
              dispatch(closeSignUp());
              dispatch(openSignIn());
            }}
            className="text-primary hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
