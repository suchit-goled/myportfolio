export const portfolioData = {
  branding: {
    name: "SUCHIT ORIGINALS",
    leadWord: "SUCHIT",
    accentWord: "ORIGINALS",
    tagline: "EVERY PROJECT HAS A STORY.",
    seriesLabel: "THE SERIES",
    heroTitle: "SUCHIT GOLED",
    heroSubtitle: "FULL-STACK DEVELOPER · ECE ENGINEER · AI & IoT ENTHUSIAST",
    heroDescription:
      "An engineer driven by curiosity, building software, intelligent systems and real-world technology solutions."
  },

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

  profiles: [
    {
      id: "recruiter",
      title: "Recruiter",
      subtitle: "Quick view of my skills, experience & achievements.",
      theme: "red",
      icon: "user",
      jumpTo: "top-moments",
      pill: "Verified Candidate"
    },
    {
      id: "developer",
      title: "Developer",
      subtitle: "Explore my projects, code & tech stack.",
      theme: "cyan",
      icon: "code",
      jumpTo: "projects",
      pill: "Architecture & Code"
    },
    {
      id: "explorer",
      title: "Explorer",
      subtitle: "Discover my experiments, AI & IoT innovations.",
      theme: "teal",
      icon: "flask",
      jumpTo: "journey",
      pill: "Hardware & AI Lab"
    },
    {
      id: "everyone",
      title: "Everyone",
      subtitle: "The complete portfolio experience.",
      theme: "purple",
      icon: "users",
      jumpTo: "home",
      pill: "Full Originals Tour"
    }
  ],

  continueExploring: [
    {
      id: "story",
      episode: "EPISODE 01",
      title: "THE FULL STORY",
      gradient: "linear-gradient(135deg, #4A00E0 0%, #8E2DE2 100%)",
      glowColor: "rgba(142, 45, 226, 0.4)",
      target: "full-story"
    },
    {
      id: "achievements",
      episode: "EPISODE 02",
      title: "MY ACHIEVEMENTS",
      gradient: "linear-gradient(135deg, #B70000 0%, #E50914 100%)",
      glowColor: "rgba(229, 9, 20, 0.45)",
      target: "top-moments"
    },
    {
      id: "skills",
      episode: "EPISODE 03",
      title: "MY SKILLS",
      gradient: "linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)",
      glowColor: "rgba(67, 100, 247, 0.4)",
      target: "skills"
    },
    {
      id: "projects",
      episode: "EPISODE 04",
      title: "MY PROJECTS",
      gradient: "linear-gradient(135deg, #D31027 0%, #EA384D 50%, #F77737 100%)",
      glowColor: "rgba(234, 56, 77, 0.4)",
      target: "projects"
    },
    {
      id: "experience",
      episode: "EPISODE 05",
      title: "MY EXPERIENCE",
      gradient: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      glowColor: "rgba(44, 83, 100, 0.4)",
      target: "full-story"
    },
    {
      id: "contact",
      episode: "EPISODE 06",
      title: "CONTACT ME",
      gradient: "linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)",
      glowColor: "rgba(225, 0, 255, 0.35)",
      target: "contact"
    }
  ],

  topMoments: [
    {
      id: "moment-paper",
      category: "RESEARCH",
      title: "ICoICET 2026",
      description: "Research paper accepted with minor revisions on AI-Powered Smart Bandage.",
      badge: "RESEARCH",
      icon: "trophy",
      accent: "gold",
      link: "/project/ai-smart-bandage"
    },
    {
      id: "moment-internship",
      category: "INTERNSHIP",
      title: "Full Stack Development",
      description: "4-month internship at Prinston Smart Engineers, building ElectroMart (MERN).",
      badge: "INTERNSHIP",
      icon: "briefcase",
      accent: "gold",
      link: "/project/electronova"
    },
    {
      id: "moment-academic",
      category: "ACADEMIC",
      title: "B.Tech – ECE",
      description: "Acharya Institute of Technology, Bangalore CGPA: 7.9",
      badge: "ACADEMIC",
      icon: "star",
      accent: "gold",
      link: "#full-story"
    },
    {
      id: "moment-innovation",
      category: "INNOVATION",
      title: "IoT & AI Projects",
      description: "Smart Inhaler, Smart Bandage and other real-world engineering solutions.",
      badge: "INNOVATION",
      icon: "cpu",
      accent: "gold",
      link: "/project/smart-inhaler"
    }
  ],

  journeyCards: [
    {
      season: "S01",
      title: "THE AI BUILDER",
      subtitle: "Autonomous Agents & Machine Intelligence",
      description:
        "Building intelligent workflows using LangGraph state machines, OpenCV computer vision pipelines, and LLM prompt engineering for automated systems.",
      tags: ["AI", "ML", "Python", "Flask"],
      theme: "red",
      visual: "brain",
      projectId: "pharma-crm",
      features: ["Pharmaceutical CRM", "Product Catalog Generator", "LangGraph Statecharts", "Computer Vision"]
    },
    {
      season: "S02",
      title: "THE ENGINEER",
      subtitle: "Embedded Electronics & Bio-Telemetry",
      description:
        "Rooted in Electronics and Communication Engineering. Interfacing microcontrollers with electrochemical sensors, Bluetooth Low Energy, and hardware telemetry.",
      tags: ["ECE", "IoT", "Embedded", "Sensors"],
      theme: "blue",
      visual: "chip",
      projectId: "ai-smart-bandage",
      features: ["Smart Bandage Bio-Sensors", "Smart Inhaler AQI", "ESP32 & Arduino", "Proteus & Circuit Simulation"]
    },
    {
      season: "S03",
      title: "THE FULL-STACK DEVELOPER",
      subtitle: "High-Performance Web Platforms",
      description:
        "Architecting production-ready web applications with React, Node.js, Express, and MongoDB. Scalable REST APIs, responsive UIs, and real-time state management.",
      tags: ["MERN", "React", "Node.js", "MongoDB"],
      theme: "purple",
      visual: "code",
      projectId: "electronova",
      features: ["ElectroMart Platform", "JWT Secure Auth", "Admin Dashboard", "Responsive Layouts"]
    },
    {
      season: "S04",
      title: "THE INNOVATOR",
      subtitle: "Peer-Reviewed Research & Rapid Prototypes",
      description:
        "Transforming experimental engineering concepts into tested, demonstrated prototypes. Winner at city hackathons and author of international conference research.",
      tags: ["Research", "Experiments", "Concepts", "Personal innovations"],
      theme: "amber",
      visual: "spark",
      projectId: "smart-inhaler",
      features: ["ICoICET 2026 Paper", "Build for Bengaluru", "Promptathon IVIS", "Continuous Exploration"]
    }
  ],

  projects: [
    {
      id: "ai-smart-bandage",
      episode: "S01 E01",
      series: "SUCHIT ORIGINALS",
      title: "AI-POWERED SMART BANDAGE",
      shortTitle: "Smart Bandage",
      subtitle: "Real-Time Wound Monitoring & Automated Healing",
      category: "IoT & Healthcare AI",
      badges: ["AI/ML", "IoT", "Healthcare", "Research"],
      tagline:
        "An intelligent wound-care solution using ZnO nanoparticles, DS18B20, pH sensors and AI (EfficientNet) for real-time wound monitoring and automated healing insights.",
      description:
        "The AI-Powered Smart Bandage is an intelligent bio-sensing wearable engineered to monitor chronic wound environments in real time. By continuously tracking physiological biomarkers including pH level, temperature, and moisture dynamics without removing the sterile dressing, the system predicts infection onsets and accelerates clinical decision-making.",
      featured: true,
      hasDetailsPage: true,
      github: "https://github.com/suchit-goled",
      demoUrl: "https://github.com/suchit-goled",
      videoUrl: "#",
      hudData: {
        woundStatus: "Healing (78%)",
        healingPercentage: 78,
        temperature: "36.5 °C",
        phLevel: "7.1",
        status: "Stable",
        trend: "Positive Recovery"
      },
      tabs: {
        overview:
          "An AI-powered smart bandage that monitors wound conditions in real time using biosensors and computer vision, enabling early detection of infection and personalized healing support. Incorporates embedded micro-circuitry on a flexible substrate for non-invasive patient care.",
        problem:
          "Traditional wound care requires frequent bandage removals for visual inspection, causing acute patient discomfort, disruption of epithelial tissue, and heightened risk of secondary bacterial infection. Healthcare providers currently lack non-invasive telemetry to detect early sepsis prior to visible symptoms.",
        solution:
          "We engineered a multi-layer smart dressing integrating electrochemical pH sensors and precision DS18B20 temperature probes connected to an ultra-low-power ESP32 microcontroller. Real-time telemetry streams over Bluetooth Low Energy (BLE) to a predictive AI model that computes infection indices and automated healing analytics.",
        architecture:
          "Layer 1: Biocompatible ZnO nanoparticle sensing substrate in direct contact with wound exudate. Layer 2: Signal conditioning amplifier circuit. Layer 3: ESP32 telemetry controller with sleep-wake power gating. Layer 4: Mobile/Cloud ingestion dashboard running EfficientNet inference.",
        myRole:
          "Led system design, embedded hardware prototyping, sensor circuit calibration, C++ firmware programming, BLE GATT profile configuration, and empirical validation for the ICoICET 2026 research submission.",
        results:
          "Successfully maintained continuous 24-hour non-invasive telemetry logging in laboratory testing. Detects pH alkalinity shifts (>7.4) associated with bacterial colonisation hours before visible symptoms. Research paper accepted with minor revisions at ICoICET 2026."
      },
      techStackChips: [
        { name: "Python", icon: "FaPython", role: "AI & Data Pipeline" },
        { name: "TensorFlow", icon: "SiTensorflow", role: "Model Training" },
        { name: "Arduino", icon: "SiArduino", role: "Hardware Control" },
        { name: "NanoEdge AI", icon: "FaBrain", role: "Edge Inference" },
        { name: "ESP32", icon: "FaMicrochip", role: "BLE Microcontroller" }
      ],
      technologies: ["ESP32", "BLE", "IoT", "Arduino", "ThingSpeak", "Electrochemical Sensors", "Predictive AI"],
      images: [
        { src: "/Bandage_Layers.png", title: "Smart Bandage Layer Architecture" },
        { src: "/Testing_Sensors.png", title: "Electrochemical Sensor Testing Bench" },
        { src: "/Prototype.jpg", title: "Hardware Prototype Assembly" },
        { src: "/Presentation.jpg", title: "Technical Project Presentation" }
      ],
      hardware: [
        "ESP32 Dev Module",
        "Electrochemical pH Sensor",
        "Precision DS18B20 Temperature Probe",
        "ZnO Nanoparticle Substrate",
        "LiPo Battery Management Circuit"
      ]
    },
    {
      id: "smart-inhaler",
      episode: "S01 E02",
      series: "SUCHIT ORIGINALS",
      title: "SMART INHALER SYSTEM",
      shortTitle: "Smart Inhaler",
      subtitle: "Urban Air Quality Detection & Emergency Geolocation",
      category: "IoT & Hardware",
      badges: ["IoT", "Hardware", "Healthcare", "Emergency"],
      tagline:
        "IoT-enabled respiratory assistant combining MQ135 air quality detection, GPS geotagging, and automated emergency alerts for chronic asthma patients.",
      description:
        "Conceived and prototyped during the Build for Bengaluru Hackathon 2025, the Smart Inhaler System addresses urban air pollution and respiratory vulnerabilities. By integrating an Arduino Uno with an MQ135 air quality sensor and GPS module, the device correlates inhaler actuation timestamps with localized particulate/gas data, alerting emergency contacts when hazardous triggers are detected.",
      featured: true,
      hasDetailsPage: true,
      github: "https://github.com/suchit-goled",
      demoUrl: "https://github.com/suchit-goled",
      hudData: {
        woundStatus: "Air Quality Index: 64",
        healingPercentage: 64,
        temperature: "28.2 °C",
        phLevel: "AQI: Moderate",
        status: "Normal",
        trend: "GPS Geofenced"
      },
      tabs: {
        overview:
          "A connected respiratory inhaler add-on that continuously monitors particulate air pollution (CO, smoke, NOx) during patient medication dosage, recording geographic coordinates of respiratory attacks to identify urban pollution triggers.",
        problem:
          "Asthma and COPD patients often suffer acute respiratory attacks without knowing the environmental atmospheric trigger. Doctors lack contextual exposure history regarding where and under what AQI levels the patient required emergency doses.",
        solution:
          "Equipped the inhaler canister collar with a micro-switch trigger, an MQ135 electrochemical gas sensor, and a high-precision GPS module. Whenever the inhaler is depressed, the system logs the exact air quality readings and coordinates, broadcasting SMS alerts if toxic thresholds are exceeded.",
        architecture:
          "Arduino microcontroller unit coupled to analog MQ135 sensor array, NMEA GPS receiver, GSM/SMS module, and on-device buzzer for immediate patient hazard notification.",
        myRole:
          "Hardware Lead: Designed circuit schematic, breadboard prototype, sensor calibration routines, and rapid 12-hour hackathon firmware implementation.",
        results:
          "Demonstrated working live prototype at Build for Bengaluru Hackathon 2025; successfully transmitted simulated emergency telemetry and geotagged asthma triggers within seconds."
      },
      techStackChips: [
        { name: "Arduino Uno", icon: "SiArduino", role: "Microcontroller" },
        { name: "MQ135 Gas Sensor", icon: "FaSmog", role: "Air Quality Telemetry" },
        { name: "GPS Module", icon: "FaMapMarkerAlt", role: "Geotagging" },
        { name: "Embedded C++", icon: "SiCplusplus", role: "Firmware Logic" }
      ],
      technologies: ["Arduino Uno", "MQ135 Sensor", "GPS Module", "Embedded C++", "IoT Telemetry"],
      images: [
        { src: "/BuildForBangalore.png", title: "Build for Bengaluru Hackathon Certificate" }
      ],
      hardware: ["Arduino Uno R3", "MQ135 Gas Sensor", "NEO-6M GPS Module", "Piezo Buzzer", "9V Power Pack"]
    },
    {
      id: "pharma-crm",
      episode: "S01 E03",
      series: "SUCHIT ORIGINALS",
      title: "PHARMACEUTICAL CRM",
      shortTitle: "Pharma CRM",
      subtitle: "Agentic Healthcare Workflow & LangGraph Automation",
      category: "AI & Full Stack",
      badges: ["AI/ML", "LangGraph", "Python", "Full Stack"],
      tagline:
        "Agentic customer relationship management application for pharmaceutical pipelines built with LangGraph, Python, and React.",
      description:
        "An intelligent pharmaceutical CRM platform that orchestrates autonomous AI workflows using LangGraph and Python. Designed to manage healthcare provider relations, track prescription dynamics, and automate regulatory interaction logs with agentic memory and structured conversation states.",
      featured: true,
      hasDetailsPage: true,
      github: "https://github.com/suchit-goled/Pharmaceutical-CRM",
      demoUrl: "https://github.com/suchit-goled/Pharmaceutical-CRM",
      hudData: {
        woundStatus: "Agents Active: 4",
        healingPercentage: 92,
        temperature: "Graph: Stable",
        phLevel: "Compliance: 100%",
        status: "Online",
        trend: "Low Latency"
      },
      tabs: {
        overview:
          "An agentic workflow platform built for pharmaceutical field representatives and compliance officers. It automates prescription tracking, interaction logging, and clinical guideline checks using LangGraph state machines.",
        problem:
          "Pharmaceutical representatives face strict compliance regulations and manual data entry overhead. Traditional CRMs lack conversational intelligence, automatic transcription auditing, and dynamic workflow branching.",
        solution:
          "Constructed a stateful multi-agent system where specialized LLM nodes validate medical claims against regulatory guidelines, schedule representative calls, and update physician profiles without human data-entry latency.",
        architecture:
          "React frontend communication layer + FastAPI / Python backend + LangGraph cyclical graph orchestrator + SQLite/PostgreSQL persistent state checkpointer.",
        myRole:
          "Designed state machine schemas, wrote custom LangGraph node functions, created physician profile interface in React, and tested automated compliance guardrails.",
        results:
          "Eliminated manual logging friction by over 60%, delivering automated structured meeting summaries with zero compliance violation warnings in trial simulations."
      },
      techStackChips: [
        { name: "LangGraph", icon: "FaBrain", role: "Agentic Orchestration" },
        { name: "Python", icon: "FaPython", role: "Backend & Logic" },
        { name: "React.js", icon: "FaReact", role: "User Interface" },
        { name: "FastAPI", icon: "SiFastapi", role: "REST Services" }
      ],
      technologies: ["LangGraph", "Python", "React.js", "AI Agents", "State Machines", "REST APIs"],
      images: []
    },
    {
      id: "product-catalog",
      episode: "S01 E04",
      series: "SUCHIT ORIGINALS",
      title: "PRODUCT CATALOG GENERATOR",
      shortTitle: "Catalog Generator",
      subtitle: "Automated Visual Attribute Extraction & Prompt Workflows",
      category: "AI & Computer Vision",
      badges: ["AI/ML", "OpenCV", "Prompt Engineering", "Retail"],
      tagline:
        "AI-driven automated catalog generation system extracting product attributes via OpenCV and structured prompt workflows.",
      description:
        "Developed during Promptathon by IVIS Labs, this system automates the creation of comprehensive e-commerce product catalogs from raw images. By combining OpenCV computer vision algorithms for feature localization with tuned LLM prompt engineering, it extracts visual attributes and generates structured product specifications, titles, and SEO-friendly copy.",
      featured: true,
      hasDetailsPage: true,
      github: "https://github.com/suchit-goled/Product-Management",
      demoUrl: "https://github.com/suchit-goled/Product-Management",
      hudData: {
        woundStatus: "Extraction: Complete",
        healingPercentage: 88,
        temperature: "Inference: 140ms",
        phLevel: "Accuracy: 94%",
        status: "Ready",
        trend: "Batch Optimized"
      },
      tabs: {
        overview:
          "An automated e-commerce cataloging pipeline that ingests unlabelled product images, segments key visual features with OpenCV, and invokes structured prompt templates to output verified e-commerce listing specifications.",
        problem:
          "Manual product cataloging for high-volume retail merchants requires tedious manual measurement, colour tagging, and copy writing, introducing human error and prolonged time-to-market.",
        solution:
          "Formulated a dual-stage vision-prompt pipeline: OpenCV preprocesses and crops high-resolution product images, identifying boundaries and dominant colors; prompt templates then structure attributes into clean JSON schemas for instant database ingestion.",
        architecture:
          "OpenCV image preprocessing pipeline + Python Flask REST API + Structured LLM Prompt Orchestration + Dynamic schema validator.",
        myRole:
          "Developed image processing modules, designed few-shot prompt templates, and integrated the Flask API for batch processing during Promptathon 2025.",
        results:
          "Reduced merchant catalog listing turnaround by over 70%, successfully processing multi-category items with 94% attribute accuracy."
      },
      techStackChips: [
        { name: "Python", icon: "FaPython", role: "Core Language" },
        { name: "OpenCV", icon: "SiOpencv", role: "Computer Vision" },
        { name: "Prompt Eng", icon: "FaLightbulb", role: "LLM Pipeline" },
        { name: "Flask", icon: "SiFlask", role: "REST Microservice" }
      ],
      technologies: ["Python", "OpenCV", "Prompt Engineering", "Image Processing", "REST API", "AI"],
      images: [
        { src: "/Hackathon_Certificate.jpeg", title: "Promptathon IVIS Labs Certificate" }
      ]
    },
    {
      id: "electronova",
      episode: "S01 E05",
      series: "SUCHIT ORIGINALS",
      title: "ELECTROMART / ELECTRONOVA",
      shortTitle: "ElectroMart",
      subtitle: "Full-Stack Electronics E-Commerce & Administrative Hub",
      category: "Full Stack MERN",
      badges: ["Full Stack", "MERN", "React", "Node.js"],
      tagline:
        "Full-stack electronics shopping platform with dynamic product catalog, cart management, and administrative portal.",
      description:
        "Electronova (ElectroMart) is an end-to-end full-stack e-commerce web application tailored for consumer electronics. Built with MongoDB, Express.js, React.js, and Node.js (MERN), it features dynamic inventory management, granular category filters, shopping cart synchronization, and an administrative control panel for real-time order and product updates.",
      featured: true,
      hasDetailsPage: true,
      github: "https://github.com/suchit-goled/Project",
      demoUrl: "https://github.com/suchit-goled/Project",
      hudData: {
        woundStatus: "Database: Connected",
        healingPercentage: 100,
        temperature: "API: 200 OK",
        phLevel: "Auth: JWT Valid",
        status: "Production",
        trend: "Full CRUD"
      },
      tabs: {
        overview:
          "A comprehensive full-stack e-commerce ecosystem built from scratch with the MERN stack during the 4-month Prinston Smart Engineers internship, providing robust customer storefront and admin controls.",
        problem:
          "Electronics retail web apps require low latency filtering across multiple hardware specs, reliable cart management, atomic inventory checks, and administrative security.",
        solution:
          "Constructed a clean Model-View-Controller architecture with Express and Node.js, indexed MongoDB document stores, and dynamic React components backed by JWT authorization.",
        architecture:
          "React Single Page Application + Express.js REST API + MongoDB Atlas cloud database with Mongoose ORM + secure authentication middleware.",
        myRole:
          "Built full application stack: front-end UI state, shopping cart actions, backend CRUD routing, and administrative product inventory management.",
        results:
          "Successfully implemented end-to-end purchasing flows, responsive product catalogs, and zero-latency client cart updates."
      },
      techStackChips: [
        { name: "React.js", icon: "FaReact", role: "Frontend UI" },
        { name: "Node.js", icon: "FaNodeJs", role: "Backend Runtime" },
        { name: "Express.js", icon: "SiExpress", role: "API Framework" },
        { name: "MongoDB", icon: "SiMongodb", role: "Document Database" }
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "CSS3"],
      images: [
        { src: "/Internship%20Certifiacte.png", title: "Full Stack Internship Certificate" }
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Responsive, high-performance, and accessible web interfaces",
        items: [
          { name: "React.js", level: "Advanced", icon: "FaReact", desc: "Hooks, SPA routing & component architecture" },
          { name: "JavaScript (ES6+)", level: "Advanced", icon: "SiJavascript", desc: "Async/await, closures, modern syntax" },
          { name: "HTML5 & CSS3", level: "Expert", icon: "SiHtml5", desc: "Semantic markup, modern grid & flexbox" },
          { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", desc: "Utility-first design systems" },
          { name: "Framer Motion", level: "Intermediate", icon: "SiFramer", desc: "Cinematic fluid transitions" }
        ]
      },
      {
        id: "backend",
        title: "Backend Development & APIs",
        description: "Scalable server architectures and microservices",
        items: [
          { name: "Node.js", level: "Advanced", icon: "FaNodeJs", desc: "Event-driven runtime & asynchronous pipelines" },
          { name: "Express.js", level: "Advanced", icon: "SiExpress", desc: "RESTful API routes, middleware & auth" },
          { name: "Flask", level: "Intermediate", icon: "SiFlask", desc: "Python lightweight web microservices" },
          { name: "FastAPI", level: "Intermediate", icon: "SiFastapi", desc: "High-performance Python asynchronous APIs" }
        ]
      },
      {
        id: "database",
        title: "Databases & Storage",
        description: "Data modeling, schema design, and query optimization",
        items: [
          { name: "MongoDB", level: "Advanced", icon: "SiMongodb", desc: "Document schemas, aggregations & indexing" },
          { name: "SQLite & SQL", level: "Intermediate", icon: "SiMysql", desc: "Relational queries, JOINs & normalization" }
        ]
      },
      {
        id: "ai",
        title: "AI & Machine Learning",
        description: "Intelligent workflows, computer vision, and agent frameworks",
        items: [
          { name: "TensorFlow", level: "Intermediate", icon: "SiTensorflow", desc: "Model architecture & edge inference" },
          { name: "TensorFlow Lite", level: "Intermediate", icon: "FaBrain", desc: "Embedded on-device AI models" },
          { name: "LangGraph", level: "Intermediate", icon: "FaBrain", desc: "Stateful agentic graph workflows" },
          { name: "OpenCV", level: "Intermediate", icon: "SiOpencv", desc: "Computer vision & image preprocessing" },
          { name: "Prompt Engineering", level: "Advanced", icon: "FaLightbulb", desc: "Deterministic multi-modal prompting" }
        ]
      },
      {
        id: "embedded",
        title: "Embedded Systems & IoT",
        description: "Microcontroller architecture, telemetry, and hardware integration",
        items: [
          { name: "ESP32", level: "Advanced", icon: "FaMicrochip", desc: "Dual-core WiFi/BLE IoT telemetry" },
          { name: "Arduino Uno", level: "Advanced", icon: "SiArduino", desc: "Hardware timers & analog/digital sensors" },
          { name: "Proteus Simulation", level: "Intermediate", icon: "FaMicrochip", desc: "Circuit schematic & simulation" },
          { name: "Bio & Gas Sensors", level: "Advanced", icon: "FaVial", desc: "MQ135, DS18B20 & pH probe telemetry" }
        ]
      },
      {
        id: "tools",
        title: "Development Tools & Workflow",
        description: "Version control, build tools, and hardware IDEs",
        items: [
          { name: "Git", level: "Advanced", icon: "FaGitAlt", desc: "Distributed version control & branches" },
          { name: "GitHub", level: "Advanced", icon: "FaGithub", desc: "Repositories, collaboration & releases" },
          { name: "Arduino IDE", level: "Advanced", icon: "SiArduino", desc: "Firmware flashing & serial monitor" },
          { name: "VS Code", level: "Expert", icon: "VscVscode", desc: "Development workflow & debugging" }
        ]
      }
    ]
  },

  experience: [
    {
      role: "Full Stack Web Development Intern",
      organization: "Prinston Smart Engineers",
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
      description:
        "Comprehensive curriculum covering Embedded Systems, Microcontroller Architecture, Digital Signal Processing, Communication Networks, Object-Oriented Programming, and Data Structures.",
      badge: "Degree Program"
    },
    {
      institution: "Konnur Science PU College",
      location: "Bagalkote, Karnataka",
      degree: "Pre-University Course (PCMB - Physics, Chemistry, Mathematics, Biology)",
      period: "2020 – 2022",
      score: "Percentage: 88.6%",
      description:
        "Rigorous scientific foundation with strong analytical, mathematical, and logical problem-solving coursework.",
      badge: "Pre-University"
    }
  ],

  hackathons: [
    {
      title: "Build for Bengaluru Hackathon 2025",
      organizer: "City Innovation Council",
      role: "IoT & Hardware Lead",
      period: "2025",
      description:
        "Conceived, prototyped, and demonstrated the Smart Inhaler healthcare solution during an intense 12-hour rapid innovation hackathon, integrating MQ135 sensor telemetry and GPS tracking.",
      certificate: "/BuildForBangalore.png"
    },
    {
      title: "Promptathon by IVIS Labs 2025",
      organizer: "IVIS Labs",
      role: "AI Developer",
      period: "2025",
      description:
        "Engineered an AI-powered Product Catalog Generator utilizing prompt engineering workflows and computer vision image processing to automate structured metadata extraction.",
      certificate: "/Hackathon_Certificate.jpeg"
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
      issuer: "Prinston Smart Engineers",
      category: "Internships",
      image: "/Internship%20Certifiacte.png",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      description: "Certificate of completion for 4-month full-stack engineering internship covering scalable web applications and REST APIs."
    }
  ]
};
