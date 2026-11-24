'use client';

/* 
=============================================================================
  📘 NEXT.JS HOME PAGE EXPLANATION (सिखने के लिए जरूरी जानकारी):
=============================================================================
  1. 'showLoader' State:
     - Pehle 4 seconds ke liye IntroLoader (video + 10+ greetings) chalega.
  2. 'PortfolioCarousel':
     - Step 2 & 3 Update:
       - Home Section me Content LEFT me aur Image RIGHT me hai.
       - Navbar ke links (Home, About, Skills, Projects, Contact) par click karne
         se carousel track smoothly horizontal slide hokar usi same frame me naya 
         section reveal karta hai!
=============================================================================
*/

import { useState } from 'react';
import IntroLoader from '../components/IntroLoader';
import PortfolioCarousel from '../components/PortfolioCarousel';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <main className="min-vh-100 position-relative bg-dark text-light overflow-hidden">
      
      {/* 
        =====================================================================
        STEP 1: INTRO LOADER (Video + 10+ Languages Greetings in 4s)
        =====================================================================
      */}
      {showLoader && (
        <IntroLoader onFinish={() => setShowLoader(false)} />
      )}

      {/* 
        =====================================================================
        STEP 2 & 3: ANIMATED HORIZONTAL CAROUSEL PORTFOLIO
        - Content on LEFT, Image on RIGHT (Home Slide)
        - Seamless carousel slide transition on clicking any navlink!
        =====================================================================
      */}
      <PortfolioCarousel onReplayIntro={() => setShowLoader(true)} />

    </main>
  );
}
