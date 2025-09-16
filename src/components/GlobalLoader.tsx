import { useEffect, useRef, useState } from 'react';
import { Car } from 'lucide-react';

interface GlobalLoaderProps {
  isVisible: boolean;
  onAnimationComplete?: () => void;
}

const GlobalLoader = ({ isVisible, onAnimationComplete }: GlobalLoaderProps) => {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lottieRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Load Lottie animation
  useEffect(() => {
    if (!isVisible || reducedMotion) return;

    const loadLottie = async () => {
      try {
        const { default: lottie } = await import('lottie-web');
        
        if (lottieRef.current && !animationRef.current) {
          // Simple car animation data (fallback if external file not available)
          const animationData = {
            "v": "5.7.4",
            "fr": 30,
            "ip": 0,
            "op": 60,
            "w": 120,
            "h": 120,
            "nm": "Car Loader",
            "ddd": 0,
            "assets": [],
            "layers": [
              {
                "ddd": 0,
                "ind": 1,
                "ty": 4,
                "nm": "Car Path",
                "sr": 1,
                "ks": {
                  "o": {"a": 0, "k": 100},
                  "r": {"a": 1, "k": [
                    {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
                    {"t": 60, "s": [360]}
                  ]},
                  "p": {"a": 0, "k": [60, 60, 0]},
                  "a": {"a": 0, "k": [0, 0, 0]},
                  "s": {"a": 0, "k": [100, 100, 100]}
                },
                "ao": 0,
                "shapes": [
                  {
                    "ty": "gr",
                    "it": [
                      {
                        "ind": 0,
                        "ty": "sh",
                        "ks": {
                          "a": 0,
                          "k": {
                            "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                            "v": [[-15, -5], [15, -5], [10, 5], [-10, 5]],
                            "c": true
                          }
                        }
                      },
                      {
                        "ty": "st",
                        "c": {"a": 0, "k": [1, 0.6, 0.2, 1]},
                        "o": {"a": 0, "k": 100},
                        "w": {"a": 0, "k": 3},
                        "lc": 2,
                        "lj": 2
                      },
                      {
                        "ty": "tr",
                        "p": {"a": 0, "k": [0, -25]},
                        "a": {"a": 0, "k": [0, 0]},
                        "s": {"a": 0, "k": [100, 100]},
                        "r": {"a": 0, "k": 0},
                        "o": {"a": 0, "k": 100}
                      }
                    ]
                  }
                ],
                "ip": 0,
                "op": 60,
                "st": 0
              }
            ]
          };

          animationRef.current = lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData
          });
        }
      } catch (error) {
        console.warn('Failed to load Lottie animation:', error);
      }
    };

    loadLottie();

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [isVisible, reducedMotion]);

  // Handle visibility transitions
  useEffect(() => {
    if (isVisible) {
      setMounted(true);
      // Track analytics
      try {
        (window as any).gtag?.('event', 'loader_show', {
          event_category: 'ui',
          delay_ms: 2000
        });
      } catch (error) {
        // Ignore analytics errors
      }
    } else if (mounted) {
      // Delay unmount for fade out animation
      const timer = setTimeout(() => {
        setMounted(false);
        onAnimationComplete?.();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, mounted, onAnimationComplete]);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[1100] flex items-center justify-center transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        backgroundColor: 'rgba(10, 18, 40, 0.12)',
        backdropFilter: 'blur(4px)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      aria-hidden={!isVisible}
    >
      <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4 border border-border/50">
        {/* Lottie Animation Container */}
        <div className="relative">
          {reducedMotion ? (
            // Reduced motion fallback
            <div className="flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
              <div className="flex items-center space-x-2">
                <Car className="w-8 h-8 text-accent" />
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              </div>
            </div>
          ) : (
            // Lottie animation or CSS fallback
            <div className="w-24 h-24 md:w-28 md:h-28 relative">
              <div 
                ref={lottieRef} 
                className="w-full h-full"
              />
              {/* CSS Fallback Spinner */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              </div>
            </div>
          )}
        </div>

        {/* Brand Mark */}
        <div className="flex items-center space-x-2 opacity-60">
          <div className="flex items-center justify-center w-6 h-6 bg-accent rounded-md">
            <Car className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground font-heading">RentOnUs</span>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoader;