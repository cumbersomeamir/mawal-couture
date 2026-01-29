 "use client";
import { useSyncExternalStore } from 'react';
import { useStoreContext } from './StoreProvider';
import type { RootState, AppDispatch } from './store';

export function useAppDispatch(): AppDispatch {
  const store = useStoreContext();
  return store.dispatch as AppDispatch;
}

export function useAppSelector<T>(selector: (s: RootState) => T) {
  const store = useStoreContext();
  return useSyncExternalStore(
    (cb) => {
      const unsubscribe = store.subscribe(cb);
      return unsubscribe;
    },
    () => selector(store.getState() as RootState),
    () => selector(store.getState() as RootState)
  );
}

