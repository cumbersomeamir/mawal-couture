"use client";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { signInSuccess } from '../store/slices/authSlice';
import { closeSignIn } from '../store/slices/uiSlice';

export default function SignInModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s: RootState) => s.ui.signInOpen);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock sign in
    dispatch(signInSuccess({ id: 'user-1', name: 'Demo User', email }));
    dispatch(closeSignIn());
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={() => dispatch(closeSignIn())}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md mx-4 p-8">
        <button 
          onClick={() => dispatch(closeSignIn())}
          className="absolute top-4 right-4 p-2 hover:opacity-70"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 className="font-serif text-2xl mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSignIn} className="space-y-4">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-primary hover:underline">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn-primary w-full">
            SIGN IN
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don&apos;t have an account?{' '}
          <button className="text-primary hover:underline">
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}
