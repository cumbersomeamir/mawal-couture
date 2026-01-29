"use client";
import React, { ReactNode, createContext, useContext } from 'react';
import type { Store } from 'redux';
import { store } from './store';

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useStoreContext() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('StoreProvider is missing');
  return ctx;
}

