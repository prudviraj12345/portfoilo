// ============================================================
//  portfolioData.js  –  EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// ============================================================

export const personal = {
  name: "Turaka Prudvi",
  title: "Computer Science & AI/ML Student",
  tagline:
    "Computer Science Engineering student specializing in AI/ML. Passionate about building scalable web applications, AI-powered solutions, and real-time collaboration platforms using modern technologies.",
  location: "Hyderbad,Telangana, India",
  email: "prudvir340@gmail.com",
  phone: "+91 6302376837",
  github: "https://github.com/prudviraj12345",
  linkedin: "https://www.linkedin.com/in/prudvi-turaka-4453a1352/",
  profileImage: "/profile.jpeg", // place your photo as public/profile.jpeg
  resumeLink: "/resume.pdf",    // link to your resume PDF
  bio:`Computer Science Engineering student specializing in AI/ML with a CGPA of 8.1. 
  I am passionate about developing AI-powered applications, fraud detection systems using AI, and cybersecurity
   solutions that solve real-world problems. My interests lie in building intelligent platforms that 
   combine web technologies with machine learning to create secure, scalable, and impactful systems.`,

  quote: "You cannot change your future, but you can change your habits, and surely your habits will change your future.”",
  quoteAuthor: " A.P.J. Abdul Kalam",
};

export const interests = [
  "AI & Machine Learning",
  "Web Development",
  "Software Engineering",
  "Generative AI",
  "Real-time Systems",
  "Healthcare Technology",
  "MLOps",
  "Game Development",
];

// Skills shown on the About page (compact view)
export const aboutSkills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "C#", level: 60 },
  { name: "React", level: 85 },
  { name: "Flask", level: 80 },
  { name: "Spring Boot", level: 55 },
  { name: "Node.js", level: 75 },
  { name: "MySQL", level: 80 },
  { name: "TensorFlow", level: 70 },
  { name: "Unity", level: 45 },
];

// Hero chip badges (shown on landing section)
export const heroTechChips = [
  "Python", "Java", "C#", "React", "Flask",
  "Spring Boot", "Node.js", "MySQL", "TensorFlow", "AI/ML",
];

// ── PROJECTS ────────────────────────────────────────────────
// categories: "Web Apps" | "Mobile Apps" | "AI/ML" — add more as needed
export const projects = [
  {
    title: "AI FireGuard – Intelligent Firewall with Blockchain Security",
    description:
      "AI-powered firewall system that detects cyber attacks such as SQL Injection, DDoS, and XSS using Machine Learning and stores tamper-proof attack logs securely on the Ethereum Sepolia blockchain.",
    image: "/fireguard.png",
    tags: ["Python", "Flask", "React", "Machine Learning", "Ethereum", "Web3"],
    category: "Cybersecurity",
    liveLink: "https://frontend-amber-pi-34.vercel.app",
    githubLink: "https://github.com/prudviraj12345/AI-Fireguard-with-Blockchain-Technology.git",
    featured: true,
  },

  {
  title: "Neuro Lung Cancer Detection using Deep Learning",
  description:
    "Deep learning based medical image analysis system that detects lung cancer from CT scan images using a CNN model trained with TensorFlow/Keras. The application integrates a Flask backend for model inference and an HTML interface for uploading scans and displaying predictions.",
  image: "/LungCancerDetection.png",
  tags: ["Python", "TensorFlow", "Flask", "OpenCV", "NumPy"],
  category: "AI/ML",
  liveLink: " https://prudviraj12345.github.io/Neuro-Lung-Cancer-Detection/",
  githubLink: "https://github.com/prudviraj12345/Neuro-Lung-Cancer-Detection",
  featured: true,
},
 {
  title: "Dense Passage Retrieval Open-Domain Question Answering",
  description:
    "An AI-powered question answering system that retrieves the most relevant passages from a large text corpus using Dense Passage Retrieval (DPR) and provides accurate answers to user queries.",
  image: "/DPR.png",
  tags: ["AI/ML", "NLP", "Python", "Flask"],
  category: "AI/ML",
  liveLink: " https://backend-flame-delta-60.vercel.app",
  githubLink: "https://github.com/prudviraj12345/prudviraj12345-Dense-Passage-Retrieval-for-Open-Domain-Question-Answering",
  featured: true,
},
{
  title: "MoveWithTraffic – Density-Based Smart Traffic Control System",
  description:
    "A smart traffic management web application that dynamically controls traffic signals based on real-time traffic density using computer vision. The system processes traffic video using OpenCV with Canny Edge Detection to estimate vehicle density and automatically adjust signal timing. It features a live dashboard displaying traffic feed, edge detection results, traffic density, signal status, and traffic level indicators.",
  image: "/MoveWithTraffic.png",
  tags: ["Python", "OpenCV", "Flask", "Computer Vision"],
  category: "AI Web Apps",
  liveLink: "https://move-with-traffic.onrender.com",
  githubLink: "https://github.com/prudviraj12345/Move-With-Traffic.git",
  featured: true,
},

{
  title: "Multi-Agent LLM Collaboration System – 1 problem statement, 4 agents, 1 solution",
  description:
    "An advanced multi-agent AI system built using CrewAI where multiple specialized agents collaborate to solve complex problems. The system includes Research, Coding, Review, and Explanation agents that work sequentially to analyze tasks, generate code, improve solutions, and provide human-friendly explanations. It demonstrates agent orchestration, task delegation, and AI-driven workflow automation using Large Language Models.",
  image: "/multiagentllm.png",
  tags: ["Python", "CrewAI", "LLM", "AI Agents", "Automation"],
  category: "AI Systems",
  liveLink: "https://vercelapp-ecru-omega.vercel.app",
  githubLink: "https://github.com/prudviraj12345/Multi-LLM-Collaboration-System.git",
  featured: true,
},
  {
  title: "MoodTunes – Mood-Based Music Recommendation System",
  description:
    "A modern music recommendation web app that suggests songs based on the user's mood and preferred language. Features a futuristic UI, mood selection, language filtering, and an integrated audio player for seamless music playback.",
  image: "/MoodTunes.png",
  tags: ["React", "Flask", "JavaScript", "Tailwind CSS"],
  category: "AI Web Apps",
  liveLink: "https://prudviraj12345.github.io/Mood-Tunes/",
  githubLink: "https://github.com/prudviraj12345/Mood-Tunes.git",
  featured: true,
},]
  
  

// ── SKILLS ──────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Flask", level: 90 },
      { name: "React", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Lightning Web Components", level: 80 },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Git", level: 85 },
      { name: "Postman API", level: 80 },
      { name: "Unity", level: 70 },
      { name: "Pandas", level: 75 },
    ],
  },
  
    
  
  {
    category: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Object-Oriented Programming", level: 95 },
      { name: "Computer Networks", level: 80 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
];

export const certifications = [
  {
    title: "Summer of AI Internship Swecha– VISWAM.AI",
    link: "https://drive.google.com/file/d/1pEwkzJXOl3QS5MpPMMF9a8GP_vOnDl9H/view?usp=sharing",
  },
  {
    title: "TechGyan at BITS Pilani: Generative AI & Security Workshop",
    link: "https://drive.google.com/file/d/1X8_bgNa58CLDzYPXPhvUOThkw8QXi_Ga/view?usp=sharing",
  },
  {
    title: "Google Gemini Academy: Transforming Higher Education with Google Gemini",
    link: "https://drive.google.com/file/d/1hUp1UtBP_u4BfuQherRdOr5ql_xMQ_hA/view?usp=sharing",
  },
  {
    title: "Web Design Workshop Certificate – D-Code Soft Tech Solutions Pvt. Ltd.",
    link: "https://drive.google.com/file/d/1vl_lC_FaRl4_3DQIz7Ts-8IhXLAcsGsA/view?usp=drive_link",
  },

 {
    title: "Coding Hackathon Participation – Aavishkaar 2024, MRCET",
    link: "https://drive.google.com/file/d/1wm2tZCh0DSlMSs0nbkIrV_4Fnha_S5ju/view?usp=drive_link",
  },

  {
    title: "Cambridge English Empower C1 Level Course",
    link: "https://drive.google.com/file/d/10CuJJlKkZq4Ta0c2MdEuoKOS6ESBQNay/view?usp=sharing",
  },



];


// ── EXPERIENCE & EDUCATION ───────────────────────────────────
// type: "education" | "work" | "certification"
export const timeline = [
  {
    type: "education",
    title: "Bachelor of Technology – Computer Science and Engineering (AI/ML)",
    organization: "Malla Reddy College of Engineering and Technology",
    location: "Telangana, India",
    period: "Sep 2023 – June 2027",
    current: true,
    description:
      "Currently pursuing B.Tech in CSE with specialization in AI/ML. Maintaining a CGPA of 8.3. Focus areas include software engineering, AI/ML algorithms, and web development.",
    tags: ["Python", "Java", "C", "Data Structures", "Algorithms", "AI/ML"],
  },
  {
    type: "work",
    title: "intern",
    organization: "Infosys springboard",
    location: "India",
    period: "february 2026 - present – ,",
    current: true,
    description:
      "Accurate industry trend forecasting based on current trends, consumer sentiment, and competitor actions. Detailed competitive positioning analysis relative to industry benchmarks and competitors. Real-time strategic opportunity and threat alerts for quick action by relevant teams. Enhanced strategic decision-making capabilities through data-driven insights and predictive analytics.",
    tags: ["Python", "AI/ML", "NLP", "Open Source"],
  },
  {
    type: "work",
    title: "Developer",
    organization: "IndicAI",
    location: "India",
    period: "june - agust 2025 – ,",
    current: false,
    description:
      "Trained LLM's.Contributing to open-source AI projects. Developing machine learning models for natural language processing.",
    tags: ["Python", "AI/ML", "NLP", "Open Source"],
  },
  {
    type: "work",
    title: "Intern",
    organization: "Swecha Foundation",
    location: "Telangana, India",
    period: "June 29 – July 27, 2025",
    current: false,
    description:
      "Contributed to open-source software development projects. Worked on educational technology solutions for rural communities. Participated in community outreach and digital literacy programs. Gained experience in collaborative software development.",
    tags: ["Python", "Web Development", "Open Source", "Community Engagement"],
  },
  {
    type: "certification",
    title: "TechGyan at BITS Pilani: Gen AI & Security Workshop",
    organization: "BITS Pilani",
    location: "India",
    period: "2024",
    current: false,
    description:
      "Participated in intensive workshop on GenAI . Learned about AI Tools best practices and AI safety. Worked on hands-on projects combining AI and security concepts. Networked with industry professionals and fellow students.",
    tags: ["AI/ML", "AI tools", "Gen AI", "Security AI"],
  },
];
