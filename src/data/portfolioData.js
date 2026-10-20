export const portfolioData = {
  personal: {
    name: "Suchit Goled",
    role: "Electronics & Communication Engineer | Full Stack Developer | IoT & AI Innovator",
    location: "Bangalore, India",
    email: "suchitgoled@gmail.com",
    phone: "+91 7676716597",
    github: "https://github.com/suchit-goled",
    linkedin: "https://www.linkedin.com/in/suchit-goled-09a933339",
    resume: "/Suchit_Resume1%20(1).pdf",
    avatar: "/Suchit.jpeg",
    bio: "Electronics and Communication Engineering student at Acharya Institute of Technology, Bangalore. Passionate about bridging hardware and software — building scalable web applications with the MERN stack, designing real-time embedded IoT systems, and implementing intelligent AI workflows.",
    availability: "Available for Full-time Roles & Internships",
    stats: [
      { label: "Major Projects", value: "5+", desc: "Full Stack, IoT & AI Systems" },
      { label: "Hackathons", value: "2", desc: "Build for Bengaluru & Promptathon" },
      { label: "Academic CGPA", value: "7.9", desc: "Acharya Institute of Technology" },
      { label: "Certifications", value: "6+", desc: "Infosys, NPTEL, Coursera & Scaler" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        description: "Core languages for systems, algorithms, and application logic",
        items: [
          { name: "JavaScript", level: "Advanced", icon: "SiJavascript" },
          { name: "Python", level: "Advanced", icon: "FaPython" },
          { name: "C", level: "Intermediate", icon: "SiC" },
          { name: "C++", level: "Intermediate", icon: "SiCplusplus" },
          { name: "SQL", level: "Intermediate", icon: "SiMysql" }
        ]
      },
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Building responsive, modern, and accessible user interfaces",
        items: [
          { name: "React.js", level: "Advanced", icon: "FaReact" },
          { name: "HTML5", level: "Expert", icon: "SiHtml5" },
          { name: "CSS3 / Modern CSS", level: "Advanced", icon: "SiCss3" },
          { name: "Framer Motion", level: "Intermediate", icon: "SiFramer" },
          { name: "Responsive UI/UX", level: "Advanced", icon: "FaMobileAlt" }
        ]
      },
      {
        id: "backend",
        title: "Backend & APIs",
        description: "Server architecture, microservices, and RESTful web services",
        items: [
          { name: "Node.js", level: "Advanced", icon: "FaNodeJs" },
          { name: "Express.js", level: "Advanced", icon: "SiExpress" },
          { name: "RESTful APIs", level: "Advanced", icon: "FaServer" },
          { name: "API Integration", level: "Advanced", icon: "FaNetworkWired" }
        ]
      },
      {
        id: "database",
        title: "Databases & Storage",
        description: "Data modeling, schema design, and query optimization",
        items: [
          { name: "MongoDB", level: "Advanced", icon: "SiMongodb" },
          { name: "MySQL", level: "Intermediate", icon: "SiMysql" },
          { name: "Database Indexing", level: "Intermediate", icon: "FaDatabase" }
        ]
      },
      {
        id: "iot",
        title: "Embedded Systems & IoT",
        description: "Hardware interfacing, sensor integration, and microcontrollers",
        items: [
          { name: "ESP32", level: "Advanced", icon: "FaMicrochip" },
          { name: "Arduino Uno", level: "Advanced", icon: "SiArduino" },
          { name: "BLE Connectivity", level: "Intermediate", icon: "FaBluetooth" },
          { name: "MQ135 Gas Sensor", level: "Intermediate", icon: "FaSmog" },
          { name: "Electrochemical Biosensors", level: "Intermediate", icon: "FaVial" },
          { name: "MATLAB", level: "Intermediate", icon: "SiMathworks" },
          { name: "HFSS", level: "Intermediate", icon: "FaWaveSquare" }
        ]
      },
      {
        id: "ai",
        title: "AI, Machine Learning & Data",
        description: "Computer vision, agentic frameworks, and prompt engineering",
        items: [
          { name: "LangGraph", level: "Intermediate", icon: "FaBrain" },
          { name: "OpenCV", level: "Intermediate", icon: "SiOpencv" },
          { name: "Prompt Engineering", level: "Advanced", icon: "FaLightbulb" },
          { name: "Data Analytics", level: "Intermediate", icon: "FaChartBar" }
        ]
      },
      {
        id: "tools",
        title: "Developer Tools & Workflow",
        description: "Version control, development environments, and deployment",
        items: [
          { name: "Git", level: "Advanced", icon: "FaGitAlt" },
          { name: "GitHub", level: "Advanced", icon: "FaGithub" },
          { name: "VS Code", level: "Advanced", icon: "SiVisualstudiocode" },
          { name: "Arduino IDE", level: "Advanced", icon: "SiArduino" }
        ]
      }
    ]
  },

  experience: [
    {
      role: "Full Stack Web Development Intern",
      organization: "Web Development Internship",
      period: "Jan 2026 – May 2026",
      location: "Bangalore, India",
      type: "Internship",
      highlights: [
        "Architected and deployed responsive frontend user interfaces and scalable backend services using React.js, Node.js, and Express.",
        "Integrated secure REST APIs and handled client-server state synchronization with optimized rendering cycles.",
        "Gained hands-on practical exposure to MongoDB database schema design, document indexing, and CRUD pipelines.",
        "Collaborated on modern web application architecture, cross-browser compatibility, and modular component reusability."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"]
    }
  ],

  education: [
    {
      institution: "Acharya Institute of Technology",
      location: "Bangalore, Karnataka",
      degree: "Bachelor of Technology / Engineering in Electronics and Communication Engineering",
      period: "2022 – 2026",
      score: "CGPA: 7.9 / 10",
      description: "Comprehensive curriculum covering Embedded Systems, Microcontroller Architecture, Digital Signal Processing, Communication Networks, Object-Oriented Programming, and Data Structures.",
      badge: "Degree Program"
    },
    {
      institution: "Konnur Science PU College",
      location: "Bagalkote, Karnataka",
      degree: "Pre-University Course (PCMB - Physics, Chemistry, Mathematics, Biology)",
      period: "2020 – 2022",
      score: "Percentage: 88.6%",
      description: "Rigorous scientific foundation with strong analytical, mathematical, and logical problem-solving coursework.",
      badge: "Pre-University"
    }
  ],

  hackathons: [
    {
      title: "Build for Bengaluru Hackathon 2025",
      organizer: "City Innovation Council",
      role: "IoT & Hardware Lead",
      period: "2025",
      description: "Conceived, prototyped, and demonstrated the Smart Inhaler healthcare solution during an intense 12-hour rapid innovation hackathon, integrating MQ135 sensor telemetry and GPS tracking.",
      certificate: "/BuildForBangalore.png"
    },
    {
      title: "Promptathon by IVIS Labs 2025",
      organizer: "IVIS Labs",
      role: "AI Developer",
      period: "2025",
      description: "Engineered an AI-powered Product Catalog Generator utilizing prompt engineering workflows and computer vision image processing to automate structured metadata extraction.",
      certificate: "/Hackathon_Certificate.jpeg"
    }
  ],

  projects: [
    {
      id: "ai-smart-bandage",
      title: "AI + IoT Smart Bandage",
      category: "IoT & Hardware",
      tagline: "Real-time intelligent wound monitoring system combining electrochemical biosensors, BLE telemetry, and predictive AI.",
      description: "The AI-Powered Smart Bandage is an innovative healthcare system engineered to continuously monitor chronic wound healing conditions in real time without requiring painful or frequent manual bandage removals. By integrating an ESP32 microcontroller with customized pH and temperature sensors, it streams vital wound biomarkers over BLE and analyzes bacterial infection thresholds.",
      technologies: ["ESP32", "BLE", "IoT", "Arduino", "ThingSpeak", "Electrochemical Sensors", "Predictive AI"],
      github: "https://github.com/suchit-goled",
      featured: true,
      hasDetailsPage: true,
      images: [
        { src: "/Bandage_Layers.png", title: "Smart Bandage Layer Architecture" },
        { src: "/Testing_Sensors.png", title: "Electrochemical Sensor Testing Bench" },
        { src: "/Prototype.jpg", title: "Hardware Prototype Assembly" },
        { src: "/Presentation.jpg", title: "Technical Project Presentation" }
      ],
      highlights: [
        "Continuous non-invasive biomarker tracking (pH, temperature, moisture).",
        "ESP32 micro-circuit telemetry streaming telemetry over Bluetooth Low Energy (BLE).",
        "Predictive infection risk scoring algorithm alerting healthcare providers prior to visible sepsis.",
        "Cloud-connected dashboard logging temporal wound healing vectors."
      ],
      hardware: ["ESP32 Dev Module", "Electrochemical pH Sensor", "Precision Temperature Sensor", "H₂O₂ Detection Circuit", "LiPo Battery Management"]
    },
    {
      id: "electronova",
      title: "Electronova — MERN E-Commerce Platform",
      category: "Full Stack",
      tagline: "Full-stack electronics shopping platform with dynamic product catalog, cart management, and administrative portal.",
      description: "Electronova is an end-to-end full-stack e-commerce web application tailored for consumer electronics. Built with MongoDB, Express.js, React.js, and Node.js (MERN), it features dynamic inventory management, granular category filters, shopping cart synchronization, and an administrative control panel for real-time order and product updates.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "CSS3"],
      github: "https://github.com/suchit-goled/Project",
      featured: true,
      hasDetailsPage: true,
      highlights: [
        "Full-stack MERN architecture with clear model-view-controller separation.",
        "Dynamic product filtering, search, and category taxonomy for electronics items.",
        "Interactive shopping cart with persistent client-side state and inventory validation.",
        "Administrative dashboard for adding, editing, and managing product listings.",
        "Optimized MongoDB aggregations and indexing for rapid query execution."
      ]
    },
    {
      id: "product-catalog",
      title: "AI Product Catalog Generator",
      category: "AI & ML",
      tagline: "AI-driven automated catalog generation system extracting product attributes via OpenCV and structured prompt workflows.",
      description: "Developed during Promptathon by IVIS Labs, this system automates the creation of comprehensive e-commerce product catalogs from raw images. By combining OpenCV computer vision algorithms for feature localization with tuned LLM prompt engineering, it extracts visual attributes and generates structured product specifications, titles, and SEO-friendly copy.",
      technologies: ["Python", "OpenCV", "Prompt Engineering", "Image Processing", "REST API", "AI"],
      github: "https://github.com/suchit-goled/Product-Management",
      featured: true,
      hasDetailsPage: true,
      highlights: [
        "Automated extraction of visual product characteristics from unstructured imagery.",
        "Engineered prompt pipelines delivering deterministic JSON metadata specifications.",
        "Reduced manual cataloging time for merchant inventory by over 70%.",
        "Multi-modal pipeline designed for fast batch processing of retail inventory."
      ]
    },
    {
      id: "smart-inhaler",
      title: "Smart Inhaler Monitoring System",
      category: "IoT & Hardware",
      tagline: "IoT-enabled respiratory health assistant with MQ135 air quality detection, GPS geotagging, and emergency alerts.",
      description: "Developed during the Build for Bengaluru Hackathon 2025, the Smart Inhaler System addresses critical urban respiratory risks. Combining an Arduino Uno, MQ135 gas/particulate sensor, and GPS module, the device monitors ambient air quality index (AQI) during patient inhaler usage, logging geographic high-pollution hotspots and broadcasting emergency notifications upon abnormal CO2 and pollutant spikes.",
      technologies: ["Arduino Uno", "MQ135 Sensor", "GPS Module", "Embedded C++", "IoT Telemetry"],
      github: "https://github.com/suchit-goled",
      featured: true,
      hasDetailsPage: true,
      highlights: [
        "12-hour hackathon rapid hardware prototype engineered for urban respiratory safety.",
        "Real-time MQ135 air quality and particulate threshold monitoring.",
        "Integrated GPS coordinates to identify hazardous atmospheric triggers on asthma patients.",
        "Automated alert dispatch to emergency contacts when harmful pollutant concentrations are detected."
      ]
    },
    {
      id: "pharma-crm",
      title: "AI Pharma CRM with LangGraph",
      category: "AI & ML",
      tagline: "Agentic customer relationship management application for pharmaceutical pipelines built with LangGraph and React.",
      description: "An intelligent pharmaceutical CRM platform that orchestrates autonomous AI workflows using LangGraph and Python. Designed to manage healthcare provider relations, track prescription dynamics, and automate regulatory interaction logs with agentic memory and structured conversation states.",
      technologies: ["LangGraph", "Python", "React.js", "AI Agents", "State Machines", "REST APIs"],
      github: "https://github.com/suchit-goled/Pharmaceutical-CRM",
      featured: false,
      hasDetailsPage: true,
      highlights: [
        "Multi-agent LangGraph graph architecture coordinating specialized CRM operations.",
        "Stateful conversation flows tracking medical representative interactions.",
        "Clean React frontend for managing physician accounts, scheduling, and analytics.",
        "Automated compliance checking against pharmaceutical communication guidelines."
      ]
    }
  ],

  certificates: [
    {
      id: "cert-python-springboard",
      title: "Python Fundamentals",
      issuer: "Infosys Springboard",
      category: "Programming",
      image: "/Screenshot%202026-06-15%20165423.png",
      skills: ["Python", "Object-Oriented Programming", "Data Structures"],
      description: "Comprehensive verification of core Python syntax, algorithms, control flow, and data manipulation."
    },
    {
      id: "cert-sql-scaler",
      title: "Python and SQL for Data Science",
      issuer: "Scaler Topics",
      category: "Data & Databases",
      image: "/SQL.png",
      skills: ["SQL", "Relational Databases", "Data Querying", "Python Integration"],
      description: "Relational database modeling, complex JOIN queries, schema normalization, and programmatic SQL integration."
    },
    {
      id: "cert-data-coursera",
      title: "Data Analysis with Python",
      issuer: "Coursera",
      category: "Data & Databases",
      image: "/Data%20Analysis%20with%20python.png",
      skills: ["Python", "Data Analysis", "Pandas", "Statistical Modeling"],
      description: "Exploratory data analysis, statistical evaluation, data cleansing, and structured dataset transformations."
    },
    {
      id: "cert-arduino-coursera",
      title: "The Arduino Platform and C Programming",
      issuer: "Coursera",
      category: "Embedded & IoT",
      image: "/Arduino%20and%20C%20programming.png",
      skills: ["Arduino", "Embedded C", "Microcontrollers", "Hardware Interfacing"],
      description: "Hardware timers, analog/digital I/O, serial communications, and embedded microcontrollers."
    },
    {
      id: "cert-arm-nptel",
      title: "Embedded System Design with ARM",
      issuer: "NPTEL",
      category: "Embedded & IoT",
      image: "/Embedded%20System%20Design.png",
      skills: ["ARM Architecture", "Embedded Systems", "Low-level Firmware", "RTOS Concepts"],
      description: "Rigorous academic certification on ARM processor architectures, memory registers, interrupts, and peripherals."
    },
    {
      id: "cert-bangalore-hackathon",
      title: "Build for Bengaluru Hackathon 2025",
      issuer: "City Innovation Council",
      category: "Hackathons",
      image: "/BuildForBangalore.png",
      skills: ["Rapid Prototyping", "IoT Hardware", "Healthcare Tech", "Smart Inhaler"],
      description: "Awarded for conceiving and executing the Smart Inhaler prototype during an intensive 12-hour city innovation hackathon."
    },
    {
      id: "cert-promptathon",
      title: "Promptathon — IVIS Labs 2025",
      issuer: "IVIS Labs",
      category: "Hackathons",
      image: "/Hackathon_Certificate.jpeg",
      skills: ["Prompt Engineering", "OpenCV", "AI Vision", "Product Catalog AI"],
      description: "Recognition for engineering the AI-driven automated Product Catalog generation pipeline."
    },
    {
      id: "cert-fullstack-internship",
      title: "Full Stack Web Development Internship",
      issuer: "Full Stack Engineering Organization",
      category: "Internships",
      image: "/Internship%20Certifiacte.png",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      description: "Certificate of completion for full-stack engineering internship covering scalable web applications and REST APIs."
    }
  ]
};
