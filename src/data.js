// src/data.js
// Source of truth: Aatmaj Patro Resume & Portfolio Specification

export const personalInfo = {
  name: "Aatmaj Patro",
  role: "Full-Stack Developer & Generative AI Builder",
  headline: "Building Digital Products & AI Systems.",
  tagline: "Building full-stack applications, RAG systems, and AI-powered workflows that turn complex problems into practical software.",
  catchphrase: "Turning ideas into intelligent products.",
  about: "I'm Aatmaj Patro, a Computer Science Engineering undergraduate at New Horizon College of Engineering, Bengaluru. I build full-stack applications and practical Generative AI systems using technologies such as Java, Spring Boot, React.js, Node.js, Express.js, Python, LangChain, RAG, SQL, and modern backend tools.\n\nMy work focuses on building useful software end-to-end — from frontend interfaces and REST APIs to database design, authentication, AI workflows, document retrieval, and context-grounded applications. I'm particularly interested in combining strong software engineering fundamentals with Generative AI to build practical products and intelligent workflows.",
  email: "aatmajpatro@gmail.com",
  github: "https://github.com/AatmajP",
  linkedin: "https://linkedin.com/in/aatmajpatro",
  location: "Bengaluru, India",
  phone: "+91 8959258070",
  experienceHighlight: "Computer Science undergraduate with hands-on Full-Stack and Generative AI project experience.",
  educationHighlight: "B.Tech in Computer Science Engineering (2023 – 2027)",
  college: "New Horizon College of Engineering, Bengaluru",
  featuredProjectsCount: "5"
};

export const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Java", relatedProjects: ["SkyReserve"] },
      { name: "Python", relatedProjects: ["InsightFlow AI", "Mindscribe", "ScholarIQ"] },
      { name: "JavaScript", relatedProjects: ["AI Product Advertisement Generator", "SkyReserve"] },
      { name: "SQL", relatedProjects: ["SkyReserve", "AI Product Advertisement Generator"] }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", relatedProjects: ["SkyReserve"] },
      { name: "React.js", relatedProjects: ["SkyReserve", "AI Product Advertisement Generator"] },
      { name: "Node.js", relatedProjects: ["AI Product Advertisement Generator"] },
      { name: "Express.js", relatedProjects: ["AI Product Advertisement Generator"] },
      { name: "Streamlit", relatedProjects: ["InsightFlow AI", "Mindscribe", "ScholarIQ"] },
      { name: "LangChain", relatedProjects: ["InsightFlow AI", "Mindscribe", "ScholarIQ"] }
    ]
  },
  {
    category: "AI / Generative AI",
    items: [
      { name: "LangChain", relatedProjects: ["InsightFlow AI", "Mindscribe", "ScholarIQ"] },
      { name: "RAG", relatedProjects: ["InsightFlow AI", "ScholarIQ"] },
      { name: "LLM Applications", relatedProjects: ["InsightFlow AI", "Mindscribe", "ScholarIQ"] },
      { name: "Prompt Engineering", relatedProjects: ["InsightFlow AI", "Mindscribe", "ScholarIQ", "AI Product Advertisement Generator"] },
      { name: "NLP", relatedProjects: ["InsightFlow AI", "ScholarIQ"] },
      { name: "AI Workflow Automation", relatedProjects: ["Mindscribe", "InsightFlow AI"] }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", relatedProjects: ["AI Product Advertisement Generator"] },
      { name: "MySQL", relatedProjects: ["SkyReserve"] },
      { name: "MongoDB", relatedProjects: [] },
      { name: "Chroma", relatedProjects: ["ScholarIQ"] }
    ]
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "GitHub", relatedProjects: ["InsightFlow AI", "Mindscribe", "AI Product Advertisement Generator", "SkyReserve", "ScholarIQ"] },
      { name: "Docker", relatedProjects: ["SkyReserve"] },
      { name: "Postman", relatedProjects: ["SkyReserve", "AI Product Advertisement Generator"] },
      { name: "Maven", relatedProjects: ["SkyReserve"] }
    ]
  },
  {
    category: "Core Computer Science",
    items: [
      { name: "Data Structures & Algorithms", relatedProjects: [] },
      { name: "Object-Oriented Programming", relatedProjects: ["SkyReserve"] },
      { name: "DBMS", relatedProjects: ["SkyReserve", "AI Product Advertisement Generator"] },
      { name: "REST APIs", relatedProjects: ["AI Product Advertisement Generator", "SkyReserve"] },
      { name: "Software Testing", relatedProjects: ["SkyReserve"] }
    ]
  }
];

export const listProyek = [
  {
    id: 1,
    number: "01",
    title: "InsightFlow AI",
    subtitle: "Video Intelligence RAG System",
    category: "Generative AI / RAG",
    tags: ["Python", "LangChain", "RAG", "Streamlit"],
    description: "An AI-powered video intelligence system that processes YouTube videos or local video files and converts them into searchable meeting insights.",
    problem: "Long meeting recordings and video lectures are tedious to review, lack structured indexing, and make pinpointing key decisions or answers time-consuming.",
    solution: "Developed an automated pipeline that ingests videos, extracts audio transcriptions, generates structured summaries, and exposes a context-grounded conversational RAG interface.",
    features: [
      "Audio transcription from YouTube links and local video files",
      "Automated concise title generation and contextual summarization",
      "Action-item and key-decision extraction",
      "Open-question detection across discussions",
      "RAG-based conversational interface for interactive query answering",
      "Strict context-grounded answers citing video material"
    ],
    technicalImplementation: "Engineered with Python, LangChain, vector storage, and Streamlit. Employs document chunking, prompt templates, and conversational retrieval chains to guarantee factual grounding.",
    pipeline: [
      { step: "VIDEO", desc: "YouTube / Local MP4" },
      { step: "TRANSCRIPTION", desc: "Speech-to-text pipeline" },
      { step: "SUMMARY", desc: "LLM contextual synthesis" },
      { step: "ACTION ITEMS", desc: "Key decisions & questions" },
      { step: "RAG Q&A", desc: "Context-grounded query answering" }
    ],
    github: "https://github.com/AatmajP",
    liveDemo: ""
  },
  {
    id: 2,
    number: "02",
    title: "Mindscribe",
    subtitle: "Multi-Agent AI Research Pipeline",
    category: "AI Workflow / Agents",
    tags: ["Python", "LangChain", "Streamlit"],
    description: "A multi-stage AI research pipeline that coordinates search, content reading, report generation, and automated critique for research workflows.",
    problem: "Manual deep research requires hours of disparate web searches, reading through verbose articles, synthesizing findings, and self-critiquing draft quality.",
    solution: "Orchestrated an automated multi-stage pipeline where specialized tasks search, scrape, synthesize, critique, and produce comprehensive research reports.",
    features: [
      "Targeted web search and source gathering",
      "Intelligent content extraction and normalization",
      "LLM-based multi-perspective synthesis",
      "Automated critique and refinement stage",
      "Pipeline status visualization in real-time",
      "Session-state management across analysis cycles",
      "Downloadable Markdown research report generation"
    ],
    technicalImplementation: "Built using Python, LangChain, and Streamlit. Implements coordinated sequential stages with feedback loops and session state tracking to handle multi-step agentic workflows.",
    pipeline: [
      { step: "SEARCH", desc: "Automated query & source gathering" },
      { step: "READ", desc: "Web content extraction & cleanup" },
      { step: "SYNTHESIZE", desc: "LLM knowledge aggregation" },
      { step: "CRITIQUE", desc: "Automated review & refinement" },
      { step: "REPORT", desc: "Downloadable Markdown output" }
    ],
    github: "https://github.com/AatmajP",
    liveDemo: ""
  },
  {
    id: 3,
    number: "03",
    title: "AI Product Advertisement Generator",
    subtitle: "Full-Stack AI Creative Platform",
    category: "Full-Stack / GenAI",
    tags: ["React.js", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Clerk"],
    description: "A full-stack AI-assisted application for generating product advertisement creatives using prompt-driven image generation and multi-image input.",
    problem: "Creating high-converting visual advertising assets requires expensive studio photography, model casting, and lengthy manual design iterations.",
    solution: "Created an end-to-end web platform allowing brands to upload product photos, select model references, customize artistic prompts, and generate studio-quality ad assets in seconds.",
    features: [
      "Multi-image input combining product and model assets",
      "Prompt-driven AI advertisement generation engine",
      "Secure user authentication with Clerk",
      "8+ robust REST APIs with schema validation and error handling",
      "Relational persistence using Prisma ORM with PostgreSQL",
      "Cloud image storage workflows with Multer and Cloudinary",
      "JSON-based API communication and status tracking"
    ],
    technicalImplementation: "Full-stack architecture with React.js frontend and Node.js/Express.js backend. Utilizes Prisma ORM on PostgreSQL, Cloudinary CDN for assets, and Clerk for authentication.",
    pipeline: [
      { step: "PRODUCT IMAGE", desc: "Asset upload via Multer" },
      { step: "MODEL IMAGE", desc: "Reference style input" },
      { step: "PROMPT", desc: "Creative direction prompt" },
      { step: "AI AD CREATIVE", desc: "High-resolution output asset" }
    ],
    github: "https://github.com/AatmajP",
    liveDemo: ""
  },
  {
    id: 4,
    number: "04",
    title: "SkyReserve",
    subtitle: "Scalable Airline Booking System",
    category: "Backend / Distributed Systems",
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "Docker"],
    description: "A full-stack airline reservation application built using Java, Spring Boot, React.js, and MySQL for flight search and booking workflows.",
    problem: "Airline booking workflows require high data consistency, concurrency control for seat allocation, dynamic fare calculation, and robust transaction management.",
    solution: "Architected a scalable booking backend with normalized relational schema across 5+ tables, transactional validations, containerized deployment, and a responsive frontend.",
    features: [
      "Dynamic flight search by departure, destination, and dates",
      "Real-time seat selection and availability verification",
      "Booking management lifecycle and validation",
      "Dynamic fare calculation based on demand and seat tiers",
      "Normalized SQL schema with 5+ related tables",
      "REST APIs documented and tested with JUnit and Postman",
      "Containerized deployment using Docker and Docker Compose"
    ],
    technicalImplementation: "Java 17 and Spring Boot microservice design with Spring Data JPA/Hibernate on MySQL. Fully containerized with Docker Compose; tested with JUnit unit and integration tests.",
    pipeline: [
      { step: "FLIGHT SEARCH", desc: "Route & date queries" },
      { step: "FLIGHT RESULTS", desc: "Dynamic pricing & schedules" },
      { step: "SEAT SELECTION", desc: "Real-time cabin layout" },
      { step: "FARE", desc: "Dynamic price calculation" },
      { step: "BOOKING CONFIRMATION", desc: "Transactional ticket issuance" }
    ],
    github: "https://github.com/AatmajP",
    liveDemo: ""
  },
  {
    id: 5,
    number: "05",
    title: "ScholarIQ",
    subtitle: "RAG-Based AI Study Assistant",
    category: "Generative AI / Education",
    tags: ["Python", "LangChain", "Mistral", "Chroma", "Streamlit"],
    description: "A RAG-based AI study assistant that allows students to upload PDF study material and ask questions grounded in the provided content.",
    problem: "Students struggle to extract precise answers from massive academic textbooks and lecture notes without reading through hundreds of unstructured PDF pages.",
    solution: "Constructed a document ingestion and retrieval engine utilizing MMR search and Mistral LLM to provide verbatim-referenced answers directly from uploaded syllabus documents.",
    features: [
      "PDF upload and parsing with PyPDFLoader",
      "Document chunking via RecursiveCharacterTextSplitter",
      "Vector embeddings generated with OpenAI Embeddings",
      "Local vector persistence with Chroma DB",
      "Maximal Marginal Relevance (MMR) retrieval for diverse context",
      "Mistral LLM integration with grounded prompt engineering",
      "Interactive Streamlit chat UI with context citation"
    ],
    technicalImplementation: "Python pipeline combining LangChain document loaders, chunking strategies, Chroma vector store, MMR retrieval algorithm, and Mistral LLM via strict prompt guards.",
    pipeline: [
      { step: "PDF", desc: "PyPDFLoader extraction" },
      { step: "TEXT CHUNKS", desc: "RecursiveCharacterTextSplitter" },
      { step: "EMBEDDINGS", desc: "OpenAI Embeddings" },
      { step: "CHROMA", desc: "Vector indexing & persistence" },
      { step: "RETRIEVAL", desc: "MMR-based context selection" },
      { step: "MISTRAL", desc: "Grounded answer synthesis" }
    ],
    github: "https://github.com/AatmajP",
    liveDemo: ""
  }
];

export const experienceData = [
  {
    organization: "Skyscanner",
    role: "Software Engineering Job Simulation",
    provider: "Forage",
    date: "January 2026",
    isSimulation: true,
    points: [
      "Built and modified React.js components using component-based development practices.",
      "Integrated REST APIs into microservice-based features and performed debugging and functional verification.",
      "Applied clean coding practices, problem-solving, and software testing principles to improve application quality and reliability."
    ]
  }
];

export const educationData = [
  {
    institution: "New Horizon College of Engineering",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2023 – 2027",
    location: "Bengaluru, India"
  },
  {
    institution: "Ryan International School",
    degree: "Class 12 — Science (PCM with Computer Science)",
    duration: "2022 – 2023",
    location: "Raipur"
  },
  {
    institution: "Krishna Public School",
    degree: "Class 10",
    duration: "2020 – 2021",
    location: "Raipur"
  }
];

export const certificationsData = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL"
  },
  {
    title: "DBMS: Fundamentals, Relational Modeling & SQL Concepts",
    issuer: "Online Certification"
  }
];
