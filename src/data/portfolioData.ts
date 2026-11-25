export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI / ML' | 'Multi-Platform' | 'Web';
  featured: boolean;
  techStack: string[];
  description: string;
  highlights: string[];
  architecture?: {
    backend?: string;
    database?: string;
    frontend?: string;
    aiMl?: string;
    desktopMobile?: string;
    devops?: string;
  };
  metrics?: string[];
  githubUrl?: string;
  liveUrl?: string;
  iconName: string;
  gradient: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    category: string;
    icon: string;
    highlight?: string;
  }[];
}

export interface CPPlatform {
  name: string;
  handle: string;
  rating?: string | number;
  solved: number;
  url: string;
  badge: string;
  accentColor: string;
  breakdown?: {
    easy?: number;
    medium?: number;
    hard?: number;
  };
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  score: string;
  scoreLabel: string;
  period: string;
  highlights: string[];
  status: 'Pursuing' | 'Completed';
}

export const portfolioData = {
  personal: {
    fullName: "Yadav Shivam Upendra",
    preferredName: "Shivam Yadav",
    alias: "sky",
    title: "Software Developer & Full Stack AI Engineer",
    subtitles: [
      "Software Developer",
      "Spring Boot & Microservices Architect",
      "Competitive Programmer (630+ DSA Solved)",
      "AI / Machine Learning Engineer",
      "Multi-Platform Application Builder"
    ],
    bio: "Computer Science undergraduate at Parul University (CGPA 8.32) with deep expertise in scalable Java Spring Boot backend ecosystems, multi-platform applications, context-aware AI pipelines with PyTorch, and rigorous algorithmic problem solving with 630+ solved problems across LeetCode, CodeChef, and GeeksforGeeks.",
    email: "Shivamm.30yadav@gmail.com",
    phone: "+91 97372 41405",
    whatsapp: "https://wa.me/919737241405?text=Hi%20Shivam,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
    location: "Surat, Gujarat, India",
    parulCampus: "Vadodara, Gujarat, India",
    status: "Available for Software Engineering Roles & High-Impact Projects",
    resumePdfUrl: "/sky-resume.pdf",
    socialLinks: {
      github: "https://github.com/shiivuuu",
      linkedin: "https://linkedin.com/in/yadav-shivam-45412a394",
      leetcode: "https://leetcode.com/u/Shivam3030",
      codechef: "https://codechef.com/users/sky2008",
      geeksforgeeks: "https://geeksforgeeks.org/profile/sky2008"
    }
  },

  stats: [
    { label: "DSA Problems Solved", value: "630+", detail: "Across LeetCode, CodeChef, GFG", color: "from-cyan-500 to-blue-500" },
    { label: "B.Tech CSE CGPA", value: "8.32", detail: "Parul University (2025-2029)", color: "from-indigo-500 to-purple-500" },
    { label: "CodeChef Rating", value: "1516", detail: "Active Competitive Programmer", color: "from-amber-500 to-orange-500" },
    { label: "Cross-Platform Platforms", value: "3+", detail: "Web, Native Android APK & Windows EXE", color: "from-emerald-500 to-teal-500" }
  ],

  competitiveProgramming: {
    totalSolved: "630+",
    platforms: [
      {
        name: "LeetCode",
        handle: "Shivam3030",
        solved: 372,
        rating: "Active Solver",
        url: "https://leetcode.com/u/Shivam3030",
        badge: "370+ Solved",
        accentColor: "#FFA116",
        description: "Consistent problem solver tackling complex algorithmic puzzles, dynamic programming, tree traversals, and graph algorithms.",
        breakdown: {
          easy: 154,
          medium: 186,
          hard: 32
        }
      },
      {
        name: "CodeChef",
        handle: "sky2008",
        rating: 1516,
        solved: 80,
        url: "https://codechef.com/users/sky2008",
        badge: "Rating 1516",
        accentColor: "#5B4638",
        description: "Competitive programming contests, high-efficiency algorithmic implementation under tight time constraints.",
        breakdown: {
          easy: 35,
          medium: 38,
          hard: 7
        }
      },
      {
        name: "GeeksforGeeks",
        handle: "sky2008",
        solved: 182,
        rating: "Consistent",
        url: "https://geeksforgeeks.org/profile/sky2008",
        badge: "180+ Solved",
        accentColor: "#2F8D46",
        description: "Deep dive into core DSA patterns, recursion, sorting, binary trees, and foundational computer science fundamentals.",
        breakdown: {
          easy: 85,
          medium: 82,
          hard: 15
        }
      }
    ] as CPPlatform[]
  },

  projects: [
    {
      id: "team-apex",
      title: "Team-Apex",
      subtitle: "Enterprise Multi-Platform Ecosystem & Intelligent AI Suite",
      category: "Full-Stack",
      featured: true,
      iconName: "Layers",
      gradient: "from-cyan-500 via-indigo-500 to-blue-600",
      description: "An enterprise-grade, multi-platform ecosystem integrating modern web interfaces, native Android (ApexInnovators.apk), and native Windows desktop client/admin applications (ApexInnovators-Windows.exe), powered by a high-throughput Java Spring Boot backend and PyTorch AI/ML models.",
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "MongoDB",
        "Android Native",
        "Windows Desktop",
        "PyTorch",
        "Hugging Face",
        "REST APIs"
      ],
      highlights: [
        "Multi-Platform Ecosystem: Architected and deployed web, native Android (ApexInnovators.apk), and native Windows desktop client/admin apps for seamless unified user engagement.",
        "Secure REST API Backend: Engineered high-security backend services using Java and Spring Boot with Spring Security for strict Role-Based Access Control (RBAC) and JWT authentication.",
        "Hybrid Polyglot Database Architecture: Designed optimized relational schemas in MySQL alongside document stores in MongoDB for ultra-low latency queries.",
        "Machine Learning Pipeline: Embedded PyTorch and Hugging Face Transformers models directly into client workflows to deliver intelligent automation."
      ],
      architecture: {
        backend: "Java 17+, Spring Boot, Spring Security, RESTful Microservices",
        database: "MySQL (Relational ACID data) + MongoDB (High-throughput NoSQL JSON)",
        frontend: "Modern Web UI with responsive cross-browser workflows",
        desktopMobile: "Android Native (.apk) + Windows C++ / Native (.exe Client & Admin)",
        aiMl: "PyTorch, Hugging Face Transformers, Neural Networks for intelligent inferences",
        devops: "Git, GitHub, Vercel & CI/CD deployment pipelines"
      },
      metrics: [
        "Cross-platform parity across 3 major operating systems",
        "Role-based authorization covering Client & Admin roles",
        "Hybrid schema handling high-concurrency read/write operations"
      ],
      githubUrl: "https://github.com/shiivuuu",
      liveUrl: "https://github.com/shiivuuu"
    },
    {
      id: "aether-study",
      title: "Aether Study",
      subtitle: "Futuristic AI-Powered Document Learning & Knowledge Testing Engine",
      category: "AI / ML",
      featured: true,
      iconName: "Cpu",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      description: "A futuristic AI-powered interactive learning platform engineered to process dense academic texts, extract foundational theories, and provide real-time interactive assessment with an intelligent conversational companion.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "AI Explanation Engine",
        "Document Parser",
        "MCQ Automation"
      ],
      highlights: [
        "High-Concurrency Digital Library: Built an interactive document panel supporting concurrent ingestion and parsing of up to 10 PDF textbooks/papers.",
        "Customized Explanation Engine: Engineered fine-tuned difficulty toggles (Easy, Medium, Hard) that dynamically distill complex topics into 10 key theoretical concepts.",
        "Automated Knowledge Testing: Implemented instant MCQ generation and auto-grading modules for rapid active recall practice.",
        "AetherBot AI Companion: Integrated an interactive AI chat widget for real-time, context-aware document question answering and instant citation."
      ],
      architecture: {
        backend: "Node.js & AI Inference Engine",
        database: "Local IndexedDB + Session Storage for instant document caching",
        frontend: "Modular Glassmorphic UI with responsive PDF viewer & reader controls",
        aiMl: "Context-aware LLM pipeline, semantic query analyzer, automated MCQ extractor",
        devops: "Vercel / GitHub Pages instant delivery"
      },
      metrics: [
        "Up to 10 concurrent PDF document uploads supported simultaneously",
        "3 difficulty levels (Easy, Medium, Hard) for conceptual breakdown",
        "10 key theoretical concepts auto-extracted per document"
      ],
      githubUrl: "https://github.com/shiivuuu",
      liveUrl: "https://github.com/shiivuuu"
    },
    {
      id: "personal-portfolio",
      title: "Sky Portfolio Engine",
      subtitle: "High-Performance Interactive Developer Showcase & Web Experience",
      category: "Web",
      featured: true,
      iconName: "Code2",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      description: "A fast, beautifully crafted engineering portfolio featuring a built-in interactive terminal CLI, live competitive programming stat visualizers, PDF resume viewer, and fluid micro-animations.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Web Audio API",
        "Canvas API"
      ],
      highlights: [
        "Designed and developed a responsive, lightweight personal portfolio website from scratch to showcase engineering projects, certifications, and technical proficiencies.",
        "Implemented semantic layout frameworks alongside clean CSS animations, fluid transitions, and media queries to deliver a cross-device mobile-first user experience.",
        "Integrated interactive terminal emulator, live search, audio micro-interactions, and instant resume preview/download mechanisms."
      ],
      architecture: {
        frontend: "React 19, TypeScript, Tailwind CSS, Vite",
        devops: "GitHub Pages, automated static builds, zero runtime latency"
      },
      metrics: [
        "Lighthouse 98+ Performance rating",
        "60fps hardware-accelerated canvas particle system",
        "Full keyboard accessible terminal emulator"
      ],
      githubUrl: "https://github.com/shiivuuu/portfolioo",
      liveUrl: "https://shiivuuu.github.io/portfolioo/"
    }
  ] as Project[],

  skills: [
    {
      category: "Languages",
      description: "Programming languages used for system design, algorithms, and applications",
      skills: [
        { name: "Java", level: 92, category: "Languages", icon: "Coffee", highlight: "Core Java, Multithreading, OOP" },
        { name: "C++", level: 88, category: "Languages", icon: "Code", highlight: "STL, DSA, Competitive Programming" },
        { name: "Python", level: 82, category: "Languages", icon: "Terminal", highlight: "AI/ML, PyTorch, Scripting" },
        { name: "JavaScript (ES6+)", level: 85, category: "Languages", icon: "FileCode", highlight: "DOM, Async/Await, Web APIs" },
        { name: "SQL", level: 85, category: "Languages", icon: "Database", highlight: "Queries, Normalization, Joins" },
        { name: "HTML5 & CSS3", level: 90, category: "Languages", icon: "Layout", highlight: "Semantic, Responsive, Animations" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Enterprise backend development, scalable APIs, and architectures",
      skills: [
        { name: "Spring Boot", level: 85, category: "Backend", icon: "Server", highlight: "REST APIs, Microservices, Dependency Injection" },
        { name: "Spring Security", level: 80, category: "Backend", icon: "ShieldCheck", highlight: "Authentication, RBAC, JWT Tokens" },
        { name: "Node.js & Express", level: 80, category: "Backend", icon: "Box", highlight: "Asynchronous APIs, Middleware, Routing" },
        { name: "RESTful API Design", level: 88, category: "Backend", icon: "Network", highlight: "Endpoint architecture, Status codes, Docs" },
        { name: "System Architecture", level: 82, category: "Backend", icon: "Cpu", highlight: "Scalability, Clean Code, Microservices" }
      ]
    },
    {
      category: "AI & Machine Learning",
      description: "Deep learning frameworks, transformers, and automated document analysis",
      skills: [
        { name: "PyTorch", level: 78, category: "AI/ML", icon: "Brain", highlight: "Neural Networks, Tensor operations, Model training" },
        { name: "Hugging Face Transformers", level: 76, category: "AI/ML", icon: "Sparkles", highlight: "Pre-trained LLMs, Embeddings, Inferences" },
        { name: "Neural Networks", level: 78, category: "AI/ML", icon: "Activity", highlight: "Feedforward, Backprop, Loss Optimization" },
        { name: "Document Q&A & Extraction", level: 85, category: "AI/ML", icon: "FileText", highlight: "Context-aware question answering, MCQ gen" }
      ]
    },
    {
      category: "Databases & DevOps",
      description: "Data storage engines, version control, and cloud deployment",
      skills: [
        { name: "MySQL", level: 86, category: "Database", icon: "Database", highlight: "Relational Schema, Indexing, ACID transactions" },
        { name: "MongoDB", level: 82, category: "Database", icon: "Layers", highlight: "NoSQL, Collections, Aggregations" },
        { name: "Git & GitHub", level: 90, category: "Tools", icon: "GitBranch", highlight: "Version control, branching, PR workflows" },
        { name: "Vercel & Netlify", level: 88, category: "Deployment", icon: "Cloud", highlight: "Continuous delivery, static hosting, DNS" },
        { name: "VS Code & Dev Tools", level: 94, category: "Tools", icon: "Wrench", highlight: "Extensions, Debugging, Environment tuning" }
      ]
    },
    {
      category: "Core Competencies",
      description: "Foundational computer science principles and engineering mindset",
      skills: [
        { name: "Data Structures & Algorithms", level: 92, category: "Core", icon: "Binary", highlight: "630+ Solved, DP, Graphs, Trees" },
        { name: "Object-Oriented Programming (OOP)", level: 90, category: "Core", icon: "PackageCheck", highlight: "Polymorphism, Inheritance, Encapsulation" },
        { name: "Multi-Platform Development", level: 80, category: "Core", icon: "Smartphone", highlight: "Web, Native Android APK, Windows Desktop" },
        { name: "Problem Solving & Analytical Thinking", level: 94, category: "Core", icon: "Compass", highlight: "Algorithmic contests & optimal complexity" }
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Parul University",
      location: "Vadodara, Gujarat, India",
      score: "8.32 CGPA",
      scoreLabel: "Current CGPA",
      period: "2025 – 2029 (Expected)",
      status: "Pursuing",
      highlights: [
        "Focused study in Data Structures, Advanced Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Software Design.",
        "Maintaining a competitive academic track record with 8.32 CGPA.",
        "Active contributor to software innovation projects, hackathons, and multi-platform engineering labs."
      ]
    },
    {
      degree: "Higher Secondary Certificate (Class XII - PCM)",
      institution: "DECENT CHILD HIGH SCHOOL",
      location: "Surat, Gujarat, India",
      score: "71.69%",
      scoreLabel: "GSEB Board",
      period: "2023 – 2025",
      status: "Completed",
      highlights: [
        "Specialized in Physics, Chemistry, and Mathematics (PCM).",
        "Formed rigorous mathematical foundations essential for algorithmic complexity and discrete computational problems."
      ]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "St Andrews Public Higher Secondary School",
      location: "Surat, Gujarat, India",
      score: "83.67%",
      scoreLabel: "GSEB Board",
      period: "2021 – 2023",
      status: "Completed",
      highlights: [
        "Achieved Distinction grade with 83.67% aggregate.",
        "Recognized for top performance in Mathematics and Science."
      ]
    }
  ] as Education[],

  certificationsAndHighlights: [
    { title: "630+ Algorithmic Challenges Solved", issuer: "LeetCode, CodeChef, GeeksforGeeks", date: "2024-Present", badge: "DSA Mastery" },
    { title: "CodeChef Rating: 1516", issuer: "CodeChef Division Contestant", date: "sky2008", badge: "Competitive Rating" },
    { title: "Enterprise Full-Stack Architecture", issuer: "Spring Boot + PyTorch Ecosystem", date: "Team-Apex", badge: "Production Architecture" },
    { title: "AI-Powered Learning Engine", issuer: "Aether Study AI Innovation", date: "Academic Research", badge: "AI Engineering" }
  ]
};
