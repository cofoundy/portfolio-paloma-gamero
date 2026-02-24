export const siteConfig = {
  name: "Paloma Gamero",
  title: "Bilingual Marketing Creative",
  description: "Portfolio of Paloma Gamero — Bilingual Marketing Creative based in Kansas City. Graphic design, social media strategy, and visual storytelling for multicultural brands.",
  accentColor: "#0d9488",

  colors: {
    primaryDark: "#111827",
    primary: "#374151",
    primaryLight: "#e5e7eb",
    accent: "#0d9488",
    surface: "#f9fafb",
    surfaceLight: "#ffffff",
  },

  tagline: "Connecting brands with multicultural communities through visual storytelling.",

  stats: [
    { value: "10", label: "Accounts Managed" },
    { value: "3", label: "Languages" },
    { value: "3+", label: "Years in Marketing" },
  ],

  social: {
    email: "palomaapgk@yahoo.com",
    linkedin: "https://www.linkedin.com/in/paloma-gamero/",
  },

  aboutMe: "Hey there! I'm a bilingual marketing professional with 2 years of experience as a Digital Marketing Associate, working with brands to reach diverse audiences across the United States. I manage business accounts at Fresco Marketing while completing my B.S. in Marketing and Professional Selling at the University of Kansas (Class of 2026). My work includes custom graphics, photo shoots, commercial video production, brand management, and bilingual campaign strategy.",

  languages: [
    { name: "English", level: "Native", percent: 100 },
    { name: "Spanish", level: "Native", percent: 100 },
    { name: "German", level: "Advanced", percent: 75 },
  ],

  // Campaign showcase organized by brand
  brands: [
    {
      name: "El Torito I & III",
      type: "Ethnic Supermarket",
      description: "El Torito I & III are community-based supermarkets serving multicultural neighborhoods. As Account Manager, I create and manage social media content for both locations, including posts, stories, reels, community interaction, and campaign execution. My work has generated over 9,000 organic views on Reels and more than 700 comments on high-performing posts, while supporting in-store sales.",
      images: [
        { src: "/work/el-torito-superbowl.jpg", alt: "Super Bowl snack promotion for El Torito" },
        { src: "/work/el-torito-beer.jpg", alt: "Dos Equis beer product photography for El Torito" },
        { src: "/work/el-torito-valentines.jpg", alt: "Valentine's Day campaign graphic for El Torito" },
      ],
    },
    {
      name: "Sido's Cuisine",
      type: "Local Restaurant",
      description: "Sido's Cuisine is a locally owned restaurant in Kansas City. As Account Manager, I managed social media content including posts, stories, reels, community interaction, and campaign execution. I also developed the brand board, defining brand elements such as colors and fonts to establish visual consistency across social content and marketing materials. During this time, the brand expanded to three locations, strengthening its local presence.",
      images: [
        { src: "/work/sidos-shawarma.jpg", alt: "Shawarma food photography for Sido's Cuisine" },
        { src: "/work/sidos-chicken.jpg", alt: "Charcoal grilled chicken for Sido's Cuisine" },
        { src: "/work/sidos-brand-board.jpg", alt: "Brand board design for Sido's Cuisine" },
      ],
    },
    {
      name: "El Mercado Fresco",
      type: "Fresh Market",
      description: "El Mercado Fresco is a community-based supermarket serving multicultural neighborhoods. As Account Manager, I lead social media strategy and execution, managing posts, stories, reels, community engagement, and campaign rollouts. My work has driven strong organic performance, supported in-store promotions, and helped increase visibility and engagement for the brand across platforms.",
      images: [
        { src: "/work/el-mercado-fresco-frutas.jpg", alt: "Fresh fruits promotion for El Mercado Fresco" },
        { src: "/work/el-mercado-fresco-snacks.jpg", alt: "Mexican snacks product display for El Mercado Fresco" },
      ],
    },
    {
      name: "World Fresh Market",
      type: "Grocery & Fresh Foods",
      description: "World Fresh Market is a community-based supermarket known for offering a wide variety of international and culturally diverse products. As Account Manager, I manage social media content for the brand, including posts, stories, reels, community interaction, and campaign execution. My work has generated more than 10,000 organic views on Reels while supporting in-store promotions and increasing local engagement.",
      images: [
        { src: "/work/world-fresh-meat.jpg", alt: "Fresh meat selection for World Fresh Market" },
        { src: "/work/world-fresh-vegetables.jpg", alt: "Fresh vegetables display for World Fresh Market" },
        { src: "/work/world-fresh-fruits.jpg", alt: "Fresh fruits selection for World Fresh Market" },
      ],
    },
  ],

  // YouTube video reels
  videos: [
    { url: "https://www.youtube.com/shorts/6vuWCA-6AcI", title: "Campaign Reel 1" },
    { url: "https://www.youtube.com/shorts/5YbC9hTc2DQ", title: "Campaign Reel 2" },
    { url: "https://www.youtube.com/shorts/PnoKZIjHiZY", title: "Campaign Reel 3" },
  ],

  experience: [
    {
      company: "Fresco Marketing",
      title: "Marketing Associate",
      dateRange: "Jun 2025 — Present",
      location: "Kansas City, MO",
      bullets: [
        "Manage 10 business accounts for major ethnic supermarkets in Kansas City",
        "Develop bilingual (EN/ES) marketing campaigns to boost engagement and sales",
        "Design custom graphics for each store, collaborating closely with clients",
        "Organize photoshoots and direct commercial videos for marketing ads",
      ],
    },
    {
      company: "The University Daily Kansan",
      title: "Sales Team",
      dateRange: "Sep 2025 — Present",
      location: "Lawrence, KS",
      bullets: [
        "Collaborate with the sales team to identify and reach out to potential clients for advertising opportunities",
        "Gain hands-on experience in client communication, relationship building, and marketing strategy",
      ],
    },
    {
      company: "Hispanic Business Student Association",
      title: "Marketing Director",
      dateRange: "Aug 2023 — Present",
      location: "Lawrence, KS",
      bullets: [
        "Create promotional materials: flyers, posters, and digital graphics",
        "Lead and execute comprehensive marketing campaigns for events",
        "Communicate strategies to team members and stakeholders",
      ],
    },
    {
      company: "KU Peruvian Student Association",
      title: "Marketing Director",
      dateRange: "Jan 2023 — Present",
      location: "Lawrence, KS",
      bullets: [
        "Execute campaigns raising awareness of association events and initiatives",
        "Manage social media platforms, creating and scheduling content",
        "Design eye-catching graphics and visuals to increase engagement",
      ],
    },
  ],

  tools: [
    { name: "Photoshop", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "Excel", category: "Analytics" },
    { name: "Asana", category: "Management" },
    { name: "Microsoft Teams", category: "Collaboration" },
  ],

  competencies: [
    "Bilingual Marketing",
    "Graphic Design",
    "Social Media Strategy",
    "Video Production",
    "Photography Direction",
    "Content Creation",
    "Client Management",
    "Event Marketing",
  ],

  education: [
    {
      school: "University of Kansas",
      degree: "B.S. in Marketing",
      extra: "Certificate in Professional Selling",
      dateRange: "Graduating May 2026",
      location: "Lawrence, Kansas",
      gpa: "3.3",
    },
  ],
};
