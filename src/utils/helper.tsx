export const MARKET_DATA_LIST = [
  { name: 'USDJPY', value: '143.651 / 143.637', isUp: false },
  { name: 'US30', value: '41048.38 / 41044.58', isUp: false },
  { name: 'NAS100', value: '18948.45 / 18945.15', isUp: true },
  { name: 'USDJPY', value: '143.651 / 143.637', isUp: false },
  { name: 'US30', value: '41048.38 / 41044.58', isUp: false },
  { name: 'USDJPY', value: '143.651 / 143.637', isUp: false },
  { name: 'US30', value: '41048.38 / 41044.58', isUp: false },
  { name: 'NAS100', value: '18948.45 / 18945.15', isUp: true },
  { name: 'USDJPY', value: '143.651 / 143.637', isUp: false },
  { name: 'US30', value: '41048.38 / 41044.58', isUp: false },
];

export const NAV_LINKS_LIST: { link: string; title: string; dropdownContent?: { link: string; title: string; }[] }[] = [
  { link: "/", title: "Home" },
  { link: "/learn", title: "Learn to Trade" },
  {
    link: "#promotions",
    title: "Promotions",
    dropdownContent: [
      { title: "link one", link: "#promotion1" },
      { title: "link two", link: "#promotion2" },
    ],
  },
  { link: "/arrowtrade", title: "Arrowtrade" },
  { link: "/blog", title: "Blog" }
];

export const FOOTER_LINKS_LIST = [
  { link: "#home", title: "Home" },
  { link: "#about", title: "About Us" },
  { link: "#howItWork", title: "How It Works" },
  { link: "#testimonials", title: "Testimonials" },
  { link: "#faqs", title: "FAQs" },
  { link: "#contact", title: "Contact Us" },
];

export const SOCIAL_LINKS_LIST = [
  { link: "https://www.facebook.com/", alt: "facebook-icon", image: "/assets/images/webp/facebook-logo.webp" },
  { link: "https://www.instagram.com/", alt: "instagram-icon", image: "/assets/images/webp/instagram-logo.webp" },
  { link: "https://www.youtube.com/", alt: "youtube-icon", image: "/assets/images/webp/youtube-logo.webp" },
  { link: "https://music.youtube.com/", alt: "music-icon", image: "/assets/images/webp/music-logo.webp" },
  { link: "https://x.com/", alt: "twitter-icon", image: "/assets/images/webp/twitter-logo.webp" },
  { link: "https://www.linkedin.com/", alt: "linkedin-icon", image: "/assets/images/webp/linkdeIn-logo.png" },
];

export const CARDS_DATA_LIST = [
  {
    id: 'real-time-market-insights',
    cardImage: "/assets/images/webp/card-img-1.webp",
    date: '31 Jan 2025',
    title: 'Real-Time Market Insights',
    description: 'Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.',
    readTime: '3 min read',
    authorImage: '/assets/images/webp/card-profile-img-1.webp',
    author: 'Darrell Steward',
    isFeatured: true,
  },
  {
    id: 'advanced-trading-platform',
    cardImage: "/assets/images/webp/card-img-2.webp",
    date: '29 Jan 2025',
    title: 'Advanced Trading Platform',
    description: 'Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.',
    readTime: '7 min read',
    authorImage: '/assets/images/webp/card-profile-img-2.webp',
    author: 'Jerome Bell',
    isFeatured: false,
  },
  {
    id: 'mastering-the-markets',
    cardImage: "/assets/images/webp/card-img-3.webp",
    date: '20 Dec 2025',
    title: 'Mastering the Markets',
    description: 'Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.',
    readTime: '4 min read',
    authorImage: '/assets/images/webp/card-profile-img-3.webp',
    author: 'Eleanor Pena',
    isFeatured: true,
  },
  {
    id: 'risk-management-in-trading',
    cardImage: "/assets/images/webp/card-img-4.webp",
    date: '17 Nov 2024',
    title: 'Risk Management In Trading',
    description: 'Risk management is a critical component of successful trading, without effective risk management strategies, traders.',
    readTime: '5 min read',
    authorImage: '/assets/images/webp/card-profile-img-4.webp',
    author: 'Leslie Alexander',
    isFeatured: false,
  },
  {
    id: 'building-a-diversified-portfolio',
    cardImage: "/assets/images/webp/card-img-5.webp",
    date: '22 Oct 2024',
    title: 'Building A Diversified Portfolio',
    description: 'Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.',
    readTime: '2 min read',
    authorImage: '/assets/images/webp/card-profile-img-5.webp',
    author: 'Wade Warren',
    isFeatured: true,
  },
  {
    id: 'the-psychology-of-trading',
    cardImage: "/assets/images/webp/card-img-6.webp",
    date: '27 Sep 2024',
    title: 'The Psychology Of Trading',
    description: 'Trading isn\'t just about numbers, charts, and market analysis—it\'s also a game of emotions and psychology.',
    readTime: '6 min read',
    authorImage: '/assets/images/webp/card-profile-img-6.webp',
    author: 'Kristin Watson',
    isFeatured: false,
  },
  {
    id: 'real-time-market-insights-2',
    cardImage: "/assets/images/webp/card-img-1.webp",
    date: '31 Jan 2025',
    title: 'Real-Time Market Insights',
    description: 'Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.',
    readTime: '3 min read',
    authorImage: '/assets/images/webp/card-profile-img-1.webp',
    author: 'Darrell Steward',
    isFeatured: true,
  },
  {
    id: 'advanced-trading-platform-2',
    cardImage: "/assets/images/webp/card-img-2.webp",
    date: '29 Jan 2025',
    title: 'Advanced Trading Platform',
    description: 'Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.',
    readTime: '7 min read',
    authorImage: '/assets/images/webp/card-profile-img-2.webp',
    author: 'Jerome Bell',
    isFeatured: false,
  },
  {
    id: 'mastering-the-market-2',
    cardImage: "/assets/images/webp/card-img-3.webp",
    date: '20 Dec 2025',
    title: 'Mastering the Markets',
    description: 'Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.',
    readTime: '4 min read',
    authorImage: '/assets/images/webp/card-profile-img-3.webp',
    author: 'Eleanor Pena',
    isFeatured: true,
  },
];

export const MARKET_HEADING_LIST: string[] = [
  "Real-Time Analytics",
  "News Updates",
  "Expert Market Research",
];

export const CHANGING_GAME_HEADING_LIST: string[] = [
  "Faster Decision-Making",
  "Enhanced Accuracy and Predictive Power",
  "Customized Insights for Individual Strategies",
];

export const MARKET_INSIGHTS_LIST = [
  {
    title: "Real-Time Analytics",
    description:
      "AI can process and analyze data from various sources, such as financial statements, price movements, market sentiment, and even social media trends, providing instant feedback and analysis.",
  },
  {
    title: "News Updates",
    description:
      "AI tools can sift through the noise of constant news flows and pinpoint stories that are most relevant to your investments. Whether it’s economic reports, geopolitical events, or corporate announcements, AI can identify which developments are likely to move markets.",
  },
  {
    title: "Expert Market Research",
    description:
      "Advanced algorithms can synthesize historical data with current market trends to forecast potential outcomes, offering the insights of seasoned market experts at your fingertips.",
  },
];
export const CHANGING_GAME_LIST = [
  {
    title: "1. Faster Decision-Making",
    description:
      "In the world of trading and investing, speed is critical. AI systems can analyze millions of data points in seconds, giving you an edge in making quick decisions. For example, when news breaks about a company’s earnings report, AI systems can immediately assess the market’s reaction and provide insights on whether it's a buying or selling opportunity.",
  },
  {
    title: "2. Enhanced Accuracy and Predictive Power",
    description:
      "Human traders and investors are often prone to cognitive biases, such as overconfidence or emotional decision-making. AI removes these limitations by relying solely on data and algorithms. With machine learning, AI can improve over time, identifying patterns and trends that humans may overlook. This leads to more accurate predictions about market movements, asset prices, and investment risks.",
  },
  {
    title: "3. Customized Insights for Individual Strategies",
    description:
      "AI-driven analytics can tailor insights to your specific trading or investment strategy. Whether you’re a day trader looking for short-term opportunities or a long-term investor analyzing market fundamentals, AI can filter out irrelevant information and deliver insights that align with your goals. This level of personalization was previously unavailable in traditional market research.",
  },
];

