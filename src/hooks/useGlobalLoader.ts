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

    // Set the start time immediately but don't show loader yet
    setLoaderState({ isVisible: false, startTime });

    // Show loader after 2 second delay
    timeoutRef.current = setTimeout(() => {
      setLoaderState(prev => ({ ...prev, isVisible: true }));
    }, 2000);

    // Hard stop at 20 seconds to prevent stuck state
    hardStopRef.current = setTimeout(() => {
      stopLoader();
    }, 20000);
  }, []);

  const stopLoader = useCallback(() => {
    setLoaderState(prev => {
      const duration = prev.startTime ? Date.now() - prev.startTime : 0;
      
      // Track analytics if loader was visible
      if (prev.isVisible && duration > 2000) {
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

    // Clear timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
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
        stopLoader();
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
      
      // Simulate route loading time - in a real app this would be tied to actual route resolution
      const routeLoadTimer = setTimeout(() => {
        stopLoader();
      }, Math.random() * 1000 + 500); // Random load time between 500ms and 1.5s

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