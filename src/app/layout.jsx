import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

/* 
=============================================================================
  📘 GOOGLE KNOWLEDGE PANEL & RICH SNIPPET (GAURAV ARVIND UPADHYAY):
=============================================================================
  Jab koi Google par "gaurav arvind upadhyay" search kare, to:
  1. Title me unka full name aur title aayega.
  2. Snippet me photo ke sath unka official intro bio quote hoga.
  3. Google Knowledge Graph ke liye detailed Schema.org 'Person' entity:
     - Full Name, Photo, Job Title, Organization (Savoire Media LLP),
     - College (VBS Purvanchal University), Skills, Social profiles.
=============================================================================
*/

const siteUrl = "https://gauravarvindupadhyay.vercel.app";
const imageUrl = `${siteUrl}/assets/gaurav-image.jpg`;

const metaTitle = "Gaurav Arvind Upadhyay | Full Stack Web Developer in Mumbai";
const metaDescription = "Gaurav Arvind Upadhyay is a professional Full Stack Web Developer in Mumbai specializing in React.js, Next.js, Python, Django, and PHP, building scalable e-commerce, healthcare, and high-performance responsive web applications.";

const metaKeywordsList = [
  "gaurav arvind upadhyay",
  "Gaurav Arvind Upadhyay",
  "Gaurav Upadhyay",
  "gaurav upadhyay",
  "Gaurav Arvind Upadhyay developer",
  "Gaurav Arvind Upadhyay portfolio",
  "Web Developer in Mumbai",
  "Full Stack Developer Mumbai",
  "React Developer Mumbai",
  "Django Developer Mumbai",
  "Freelance Web Developer Mumbai",
  "Website Developer Kalyan",
  "Web Designer Thane",
  "Frontend Developer Mumbai",
  "Backend Developer Mumbai",
  "SEO Website Developer",
  "Responsive Website Developer",
  "Hospital Website Developer India",
  "Business Website Developer Mumbai",
  "Portfolio Website Developer",
  "Lead Generation Website Developer",
  "Affordable Web Developer Mumbai",
  "Best Web Developer in Mumbai",
  "Freelance Developer India",
  "UI UX Designer Mumbai",
  "Website Development Services India",
  "HTML5",
  "CSS3",
  "JavaScript Developer",
  "React.js Developer",
  "Next.js Developer",
  "Python Developer",
  "Django Developer",
  "PHP Developer",
  "MySQL Database",
  "Shopify Developer",
  "WordPress Developer",
  "Wix Website Developer",
  "Razorpay API Integration",
  "Supabase",
  "Bootstrap 5 Developer",
  "Cpanel Hpanel Hosting Management",
  "DermaGLO Laser Skin Clinic",
  "Pink Empress E-commerce",
  "The Mentors Circle Consultancy"
];

const metaKeywordsString = metaKeywordsList.join(", ");

// Comprehensive Google Knowledge Graph & Profile Schema
const googleKnowledgeGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Gaurav Arvind Upadhyay",
      "givenName": "Gaurav",
      "familyName": "Upadhyay",
      "additionalName": "Arvind",
      "alternateName": ["Gaurav Upadhyay", "gaurav upadhyay", "gaurav arvind upadhyay"],
      "gender": "Male",
      "jobTitle": "Full Stack Web Developer",
      "description": metaDescription,
      "disambiguatingDescription": "Full Stack Web Developer in Mumbai specialized in React, Next.js, Python, Django, and PHP web development.",
      "image": {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#photo`,
        "url": imageUrl,
        "contentUrl": imageUrl,
        "caption": "Gaurav Arvind Upadhyay - Full Stack Web Developer in Mumbai",
        "representativeOfPage": true
      },
      "url": siteUrl,
      "sameAs": [
        "https://github.com/Gauravup",
        "https://github.com/Gauravup/Gaurav-Upadhyay",
        "https://www.instagram.com/gaurav_upadhyay2002/"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Veer Bahadur Singh Purvanchal University, Jaunpur",
        "sameAs": "http://www.vbspu.ac.in"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kalyan",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "knowsLanguage": ["Hindi", "English"],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Web Developer",
        "occupationalCategory": "15-1254.00",
        "skills": "React.js, Next.js, Python, Django, PHP, MySQL, WordPress, Shopify, Bootstrap 5, SEO Optimization"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      "url": siteUrl,
      "name": metaTitle,
      "description": metaDescription,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Gaurav Arvind Upadhyay Portfolio",
        "publisher": {
          "@id": `${siteUrl}/#person`
        }
      },
      "mainEntity": {
        "@id": `${siteUrl}/#person`
      },
      "about": {
        "@id": `${siteUrl}/#person`
      },
      "primaryImageOfPage": {
        "@id": `${siteUrl}/#photo`
      }
    }
  ]
};

export const metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: metaKeywordsList,
  authors: [{ name: "Gaurav Arvind Upadhyay", url: siteUrl }],
  creator: "Gaurav Arvind Upadhyay",
  publisher: "Gaurav Arvind Upadhyay",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    title: metaTitle,
    description: metaDescription,
    siteName: "Gaurav Arvind Upadhyay Portfolio",
    images: [
      {
        url: "/assets/gaurav-image.jpg",
        width: 800,
        height: 1000,
        alt: "Gaurav Arvind Upadhyay - Full Stack Web Developer in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: ["/assets/gaurav-image.jpg"],
    creator: "@gauravup",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Core Search Engine Meta Tags */}
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywordsString} />
        <meta name="author" content="Gaurav Arvind Upadhyay" />

        {/* Direct Image Tags for Google Search Snippets */}
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Gaurav Arvind Upadhyay - Full Stack Web Developer in Mumbai" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Gaurav Arvind Upadhyay - Full Stack Web Developer in Mumbai" />

        {/* Google Knowledge Graph & Profile Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(googleKnowledgeGraphSchema) }}
        />

        {/* Bootstrap 5 & Icons CDN Links */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" 
          crossOrigin="anonymous" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
