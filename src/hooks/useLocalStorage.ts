'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Hook for localStorage management
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsClient(true);
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`localStorage error for key "${key}":`, error);
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (isClient) {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`localStorage error for key "${key}":`, error);
      }
    },
    [key, storedValue, isClient]
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (isClient) {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`localStorage error for key "${key}":`, error);
    }
  }, [key, initialValue, isClient]);

  return [storedValue, setValue, removeValue] as const;
}
