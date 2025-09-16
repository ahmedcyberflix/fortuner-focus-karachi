import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface LoaderState {
  isVisible: boolean;
  startTime: number | null;
}

export const useGlobalLoader = () => {
  const [loaderState, setLoaderState] = useState<LoaderState>({
    isVisible: false,
    startTime: null
  });
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const hardStopRef = useRef<NodeJS.Timeout>();
  const isInitialLoad = useRef(true);

  const startLoader = useCallback(() => {
    const startTime = Date.now();
    
    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hardStopRef.current) clearTimeout(hardStopRef.current);

    // Show loader immediately on navigation start
    setLoaderState({ isVisible: true, startTime });

    // Hard stop at 20 seconds to prevent stuck state
    hardStopRef.current = setTimeout(() => {
      stopLoader();
    }, 20000);
  }, []);

  const stopLoader = useCallback(() => {
    setLoaderState(prev => {
      const duration = prev.startTime ? Date.now() - prev.startTime : 0;
      
      // Ensure minimum loading time of 2 seconds for smooth UX
      const minLoadTime = 2000;
      const remainingTime = minLoadTime - duration;
      
      if (remainingTime > 0 && prev.isVisible) {
        // Wait for minimum time before hiding
        timeoutRef.current = setTimeout(() => {
          setLoaderState({ isVisible: false, startTime: null });
          
          // Track analytics
          try {
            (window as any).gtag?.('event', 'loader_hide', {
              event_category: 'ui',
              duration_ms: minLoadTime
            });
          } catch (error) {
            // Ignore analytics errors
          }
        }, remainingTime);
        
        return prev; // Keep current state until timeout
      }
      
      // Hide immediately if minimum time already passed
      if (prev.isVisible) {
        try {
          (window as any).gtag?.('event', 'loader_hide', {
            event_category: 'ui',
            duration_ms: duration
          });
        } catch (error) {
          // Ignore analytics errors
        }
      }

      return { isVisible: false, startTime: null };
    });

    // Clear hard stop timeout
    if (hardStopRef.current) {
      clearTimeout(hardStopRef.current);
      hardStopRef.current = undefined;
    }
  }, []);

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad.current) {
      startLoader();
      
      // Stop loader when page is fully loaded
      const handleLoad = () => {
        stopLoader();
      };

      if (document.readyState === 'complete') {
        // Page already loaded
        setTimeout(stopLoader, 100);
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
      
      isInitialLoad.current = false;
    }
  }, [startLoader, stopLoader]);

  // Handle route changes
  useEffect(() => {
    if (!isInitialLoad.current) {
      startLoader();
      
      // Simulate route loading - minimum 2s for smooth UX
      const routeLoadTimer = setTimeout(() => {
        stopLoader();
      }, Math.random() * 1000 + 500); // Random between 0.5-1.5s but stopLoader ensures 2s minimum

      return () => {
        clearTimeout(routeLoadTimer);
      };
    }
  }, [location.pathname, startLoader, stopLoader]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hardStopRef.current) clearTimeout(hardStopRef.current);
    };
  }, []);

  // Update main element aria-busy attribute
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      if (loaderState.isVisible) {
        mainElement.setAttribute('aria-busy', 'true');
      } else {
        mainElement.removeAttribute('aria-busy');
      }
    }
  }, [loaderState.isVisible]);

  return {
    isLoaderVisible: loaderState.isVisible,
    startLoader,
    stopLoader
  };
};