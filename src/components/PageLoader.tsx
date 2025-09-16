import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading on route change
    setIsLoading(true);
    
    // Show loader after 300ms delay to avoid flashes
    const showTimer = setTimeout(() => {
      if (isLoading) {
        setShowLoader(true);
      }
    }, 300);

    // Hide loader after a short delay to simulate loading
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      setShowLoader(false);
    }, 600);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [location]);

  if (!showLoader) return null;

  return (
    <>
      <style>
        {`
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 80%; }
            100% { width: 100%; }
          }
          .loading-bar {
            animation: loading 0.6s ease-out forwards;
          }
        `}
      </style>
      <div 
        className="fixed top-0 left-0 right-0 z-[9999] h-0.5 bg-transparent"
        aria-busy="true"
        role="progressbar"
        aria-label="Page loading"
      >
        <div className="h-full bg-accent loading-bar" />
      </div>
    </>
  );
};

export default PageLoader;