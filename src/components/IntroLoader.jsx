'use client';

/* 
=============================================================================
  📘 REACT & NEXT.JS CONCEPTS EXPLANATION (सिखने के लिए जरूरी बातें):
=============================================================================
  1. 'use client': Next.js 13+ App Router me by default components Server Components 
     hote hain. Agar hume hooks (jaise useState, useEffect) ya browser events (onClick)
     use karne hain, to file ke sabse top par 'use client' likhna mandatory hota hai.

  2. useState: Ye React ka ek Hook hai jo component ke andar dynamic data (State) 
     store karta hai. Jab bhi state change hoti hai, React screen ko re-render (update) karta hai.
     
  3. useEffect: Ye Hook component ke load hone (Mount), update hone, ya hatne (Unmount) 
     par side-effects (jaise timer, API call, DOM manipulation) run karne ke liye use hota hai.

  4. useRef: Ye bina re-render trigger kiye kisi DOM element (jaise video tag) ko 
     directly control karne ke liye use hota hai.
=============================================================================
*/

import { useState, useEffect, useRef } from 'react';

export default function IntroLoader({ onFinish }) {
  // -------------------------------------------------------------------------
  // 1. GREETINGS LIST (10+ Languages)
  // Har object me greeting text aur language ka naam hai
  // -------------------------------------------------------------------------
  const greetings = [
    { text: "नमस्ते", lang: "Hindi" },
    { text: "नमस्कार", lang: "Marathi" },
    { text: "Hello", lang: "English" },
    { text: "નમસ્તે", lang: "Gujarati" },
    { text: "নমস্কার", lang: "Bengali" },
    { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "Punjabi" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "నమస్కారం", lang: "Telugu" },
    { text: "ನಮಸ್ಕಾರ", lang: "Kannada" },
    { text: "നമസ്കാരം", lang: "Malayalam" },
    { text: "آداب", lang: "Urdu" },
    { text: "प्रणामः", lang: "Sanskrit" }
  ];

  // -------------------------------------------------------------------------
  // 2. REACT STATES (Component ki sthiti ko track karne ke liye)
  // -------------------------------------------------------------------------
  
  // currentIndex: Abhi screen par konsa greeting dikh raha hai (0 se shuru hoga)
  const [currentIndex, setCurrentIndex] = useState(0);

  // progress: 4-second progress bar (0% se 100% tak badhega)
  const [progress, setProgress] = useState(0);

  // isExiting: Jab 4 second pure ho jayein to fade/slide-up animation trigger karne ke liye
  const [isExiting, setIsExiting] = useState(false);

  // videoRef: HTML5 <video> element ko directly access karne ke liye
  const videoRef = useRef(null);

  // -------------------------------------------------------------------------
  // 3. EFFECT HOOK (4-Second Timer & Greeting Changer)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const totalDuration = 4000; // 4 seconds total time
    const intervalTime = totalDuration / greetings.length; // ~333ms per greeting

    // 🕒 Greeting text ko har ~333ms me change karne wala timer
    const greetingInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < greetings.length - 1) {
          return prevIndex + 1;
        } else {
          return prevIndex; // Sabhi greetings dikhane ke baad last par ruke
        }
      });
    }, intervalTime);

    // ⏱️ Progress bar ko smoothly 0 se 100% update karne wala timer
    const progressStartTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - progressStartTime;
      const calculatedProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(calculatedProgress);

      if (elapsed >= totalDuration) {
        clearInterval(progressInterval);
        handleLoaderComplete();
      }
    }, 50);

    // 🎬 Auto-play video safely (Mobile browsers me autoplay allow karne ke liye muted zaruri hota hai)
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay permission note:", err);
      });
    }

    // 🧹 Cleanup function: Agar component unmount ho to timers ko band karna zaruri hai
    // isase memory leaks nahi hote.
    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
    };
  }, []);

  // -------------------------------------------------------------------------
  // 4. LOADER COMPLETION FUNCTION
  // -------------------------------------------------------------------------
  const handleLoaderComplete = () => {
    setIsExiting(true); // Pehle CSS slide-up animation start karo
    setTimeout(() => {
      if (onFinish) {
        onFinish(); // Parent component (page.jsx) ko batao ki loader complete ho gaya
      }
    }, 800); // 800ms CSS transition finish hone ke baad
  };

  return (
    /* 
      Bootstrap + Custom CSS:
      - 'loader-container': full-screen overlay (position: fixed, inset: 0)
      - 'loader-hidden': jab isExiting true hoga tab screen upar slide ho jayegi
    */
    <div className={`loader-container ${isExiting ? 'loader-hidden' : ''}`}>
      
      {/* 
        =====================================================================
        🎥 STEP 1.1: ASSETS VIDEO (Background me chalne wala video)
        =====================================================================
        - muted: Audio mute rakha hai taki browser bina user click ke autoplay allow kare
        - autoPlay: Page open hote hi video start ho jaye
        - loop: Continuous chal sake
        - playsInline: iOS mobile safari me full-screen player khulne se rokta hai
      */}
      <video
        ref={videoRef}
        className="intro-bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Futuristic Dark Overlay & Cyberpunk Grid Pattern */}
      <div className="video-overlay"></div>
      <div className="grid-pattern"></div>

      {/* 
        =====================================================================
        🌐 STEP 1.2: 10+ LANGUAGES GREETINGS LOADER (Center Content)
        =====================================================================
      */}
      <div className="loader-content container d-flex flex-column align-items-center justify-content-center">
        
        {/* Language Indicator Badge (Current language name dikhata hai) */}
        <div className="mb-3">
          <span className="lang-badge">
            <i className="bi bi-translate text-info"></i>
            {greetings[currentIndex].lang}
          </span>
        </div>

        {/* 
          Greeting Text Animation:
          'key={currentIndex}' use karne se har text change par React naya element 
          banta hai, jisse CSS animation (greetingPop) har greeting par repeat hoti hai!
        */}
        <div className="my-2" style={{ minHeight: '90px' }}>
          <h1 key={currentIndex} className="greeting-text m-0">
            {greetings[currentIndex].text}
          </h1>
        </div>

        {/* 4-Second Dynamic Progress Bar */}
        <div className="loader-progress-track">
          <div 
            className="loader-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Small Percentage & Subtitle */}
        <div className="d-flex justify-content-between align-items-center w-100" style={{ maxWidth: '280px' }}>
          <small className="text-secondary" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
            INITIALIZING PORTFOLIO
          </small>
          <small className="text-info fw-bold" style={{ fontSize: '0.75rem' }}>
            {Math.round(progress)}%
          </small>
        </div>

        {/* Skip Button (Agar koi 4 second wait nahi karna chahta) */}
        <div className="mt-4">
          <button 
            onClick={handleLoaderComplete} 
            className="btn btn-skip d-inline-flex align-items-center gap-2"
          >
            <span>Skip Intro</span>
            <i className="bi bi-chevron-double-right"></i>
          </button>
        </div>

      </div>

    </div>
  );
}

