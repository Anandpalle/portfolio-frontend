export const personalInfo = {
  name: "Anand Reddy Palle",
  role: "Full-Stack Java Developer",
  headline: "Building scalable, modern web applications with Java, Spring Boot and React.",
  shortIntro:
    "Passionate software developer focused on building reliable, user-friendly and scalable full-stack applications.",
  email: "pallenanandreddy6@gmail.com",
  phone: "+91 8106015712",
  location: "Telangana, India",
  profilePhoto: "/profile.jpg",
  resumeUrl: "/ANAND_REDDY_PALLE_RESUME.pdf",
  socials: {
    github: "https://github.com/Anandpalle",
    linkedin: "https://linkedin.com/in/anand-reddy-palle",
    email: "mailto:pallenanandreddy6@gmail.com",
  },
  techBadges: ["Java", "Spring Boot", "React", "JavaScript", "MySQL"],
};

export const stats = [
  { label: "Full-Stack Project", value: "1 Featured", desc: "Enterprise-grade platform" },
  { label: "Technologies Used", value: "10+ Core", desc: "Java, React, SQL & Tools" },
  { label: "REST APIs", value: "15+ Endpoints", desc: "Structured CRUD & Status APIs" },
  { label: "Database", value: "MySQL", desc: "Relational schema & JPA persistence" },
];

export const aboutMe = {
  intro:
    "Hello! I am Anand Reddy Palle, a Full-Stack Java Developer with a deep interest in software engineering and end-to-end web system architecture. I specialize in building reliable backends using Java and Spring Boot, interactive frontends using React, and robust relational data models using MySQL.",
  points: [
    {
      title: "Backend Engineering",
      desc: "Architecting modular backend services with Java 21, Spring Boot, Spring Data JPA, and secure RESTful endpoints.",
    },
    {
      title: "Frontend Engineering",
      desc: "Creating component-driven, responsive user interfaces with React.js, Tailwind CSS, and state management.",
    },
    {
      title: "Database Modeling",
      desc: "Designing normalized relational schemas, entity relationships, and optimized SQL queries in MySQL.",
    },
    {
      title: "Real-World Problem Solving",
      desc: "Dedicated to solving tangible real-world challenges through clean code, scalable architecture, and continuous learning.",
    },
  ],
};

export const technicalSkills = [
  {
    category: "Programming",
    skills: [
      { name: "Java", level: "Advanced", desc: "OOP, Collections, Multithreading, Exception Handling, Java 21" },
      { name: "JavaScript", level: "Proficient", desc: "ES6+, Async/Await, DOM, Fetch, Functional Patterns" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: "Advanced", desc: "Semantic markup, Accessibility, SEO standards" },
      { name: "CSS3", level: "Advanced", desc: "Flexbox, CSS Grid, Responsive Breakpoints, Custom Properties" },
      { name: "React.js", level: "Proficient", desc: "Hooks, Component Architecture, State, React 19" },
      { name: "Tailwind CSS", level: "Proficient", desc: "Utility-first styling, Responsive layouts, Dark mode" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", level: "Proficient", desc: "Microservices architecture, Dependency Injection, Bootstrapping" },
      { name: "Spring Data JPA", level: "Proficient", desc: "Hibernate ORM, Entity mapping, Repositories, Pagination" },
      { name: "REST API", level: "Advanced", desc: "RESTful principles, HTTP status codes, JSON payload processing" },
      { name: "J2EE", level: "Proficient", desc: "Servlets, JSP, JDBC, MVC pattern fundamentals" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", desc: "Relational schema design, Indexing, Complex Joins, Integrity" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Advanced", desc: "Branching, Merging, Commits, Pull requests" },
      { name: "GitHub", level: "Advanced", desc: "Repository hosting, Code reviews, Collaboration" },
      { name: "Postman", level: "Advanced", desc: "REST API testing, Payload inspection, Environment configs" },
      { name: "VS Code", level: "Advanced", desc: "Frontend development, React debugging, Extensions" },
      { name: "IntelliJ IDEA", level: "Advanced", desc: "Java & Spring Boot development, Maven builds" },
    ],
  },
];

export const mechanicBuddyData = {
  title: "Mechanic Buddy",
  tagline: "Full-Stack Vehicle Service Platform",
  description:
    "Mechanic Buddy is a full-stack web application designed to connect vehicle owners with mechanics and simplify the vehicle service-request process through a centralized digital platform.",
  techStack: ["React.js", "Java", "Spring Boot", "Spring Data JPA", "REST API", "MySQL"],
  githubUrl: "https://github.com/Anandpalle",
  liveUrl: "#project",
  roles: [
    {
      id: "admin",
      name: "ADMIN",
      badge: "Platform Controller",
      description: "Admin manages the complete platform, oversees authorizations, and monitors real-time activities.",
      features: [
        "Admin secure login & unified control dashboard",
        "Comprehensive user management & verification",
        "Mechanic verification & authorization controls",
        "Service catalog & pricing definition",
        "System-wide service request monitoring",
        "Platform settings & configuration management",
        "System activity auditing & operational insight",
      ],
    },
    {
      id: "user",
      name: "USER",
      badge: "Vehicle Owner",
      description: "Vehicle owners discover nearby mechanics and manage service requests end-to-end.",
      features: [
        "Secure customer registration and authentication",
        "Personal profile & vehicle information management",
        "Search for verified nearby mechanics",
        "View detailed mechanic profiles & service pricing",
        "Submit vehicle repair and maintenance requests",
        "Live real-time service status tracking",
        "Historical service records and booking logs",
        "Submit honest reviews, ratings, and feedback",
      ],
    },
    {
      id: "mechanic",
      name: "MECHANIC",
      badge: "Service Specialist",
      description: "Mechanics manage incoming requests, accept jobs, and update repair progress.",
      features: [
        "Mechanic registration & professional verification",
        "Workshop profile, specialty, and contact setup",
        "Real-time notifications for incoming service requests",
        "Instant request acceptance or rejection decisioning",
        "Interactive service status progression (Pending → In Progress → Completed)",
        "Customer request details & diagnostic notes management",
        "Complete completed job history & earnings log",
      ],
    },
  ],
  features: [
    { title: "Secure Authentication", desc: "Encrypted credential handling and session isolation." },
    { title: "Role-Based Access Control", desc: "Strict privilege separation for Admin, User, and Mechanic." },
    { title: "User Management", desc: "Registration, profile editing, and account status tracking." },
    { title: "Mechanic Management", desc: "Mechanic onboarding, verification, and expertise categorization." },
    { title: "Service Requests", desc: "Digital booking workflow for vehicle repairs and breakdowns." },
    { title: "Request Tracking", desc: "Real-time visibility into the current stage of every vehicle repair." },
    { title: "Mechanic Discovery", desc: "Fast searching and filtering of available service specialists." },
    { title: "Service Status Management", desc: "Lifecycle state management from Request Sent to Completed." },
    { title: "User Profiles", desc: "Personalized dashboard showing active requests and vehicles." },
    { title: "Mechanic Profiles", desc: "Showcases mechanic ratings, skills, and workshop info." },
    { title: "Reviews and Feedback", desc: "Transparent review mechanism after completed service appointments." },
    { title: "Database Management", desc: "Normalized MySQL relational tables with JPA entity mappings." },
    { title: "REST API Integration", desc: "Seamless JSON-based communication between React and Spring Boot." },
  ],
  workflow: [
    { step: "01", title: "User Registration", desc: "Vehicle owner creates a secure account." },
    { step: "02", title: "User Login", desc: "Authenticated entry into the customer portal." },
    { step: "03", title: "Search Mechanic", desc: "Browses nearby available mechanics." },
    { step: "04", title: "Select Service", desc: "Chooses required repair or maintenance service." },
    { step: "05", title: "Send Service Request", desc: "Submits request with vehicle details." },
    { step: "06", title: "Mechanic Receives Request", desc: "Specialist is alerted with request parameters." },
    { step: "07", title: "Mechanic Accepts/Rejects", desc: "Mechanic evaluates and accepts or rejects." },
    { step: "08", title: "Service Processing", desc: "Repair begins; status updated to In Progress." },
    { step: "09", title: "Service Completed", desc: "Work is finished and verified by customer." },
    { step: "10", title: "User Feedback", desc: "Customer provides review and rating." },
  ],
  architectureLayers: [
    { name: "Frontend Clients", detail: "React.js SPA (Admin, User & Mechanic Dashboards)" },
    { name: "API Communication", detail: "REST APIs with JSON payloads over HTTPS" },
    { name: "Controller Layer", detail: "Spring Boot @RestController handling endpoints" },
    { name: "Service Layer", detail: "Spring @Service handling business workflows & authorization" },
    { name: "Repository Layer", detail: "Spring Data JPA Repositories & Hibernate ORM" },
    { name: "Database Layer", detail: "MySQL Relational Database with normalized schema" },
  ],
  caseStudy: {
    problem:
      "When a vehicle breaks down or requires maintenance, finding reliable local mechanics is typically chaotic and opaque. Vehicle owners struggle with unpredictable turnaround times and lack of real-time visibility, while mechanics lack a streamlined digital channel to receive, schedule, and track customer repair requests.",
    solution:
      "Mechanic Buddy introduces a centralized digital platform that bridges the communication gap between vehicle owners and mechanics. By providing role-specific dashboards, automated request routing, real-time lifecycle status tracking, and honest feedback, the platform makes vehicle servicing transparent, efficient, and reliable.",
    keyFeatures:
      "Role-Based Authentication (Admin, User, Mechanic), Real-Time Request Lifecycle Tracking, Mechanic Discovery, Dynamic Status Updates, Normalized Relational MySQL Persistence, and Robust RESTful Spring Boot Endpoints.",
    technologies: "React.js 19, Tailwind CSS, Java 21, Spring Boot 3, Spring Data JPA, Hibernate, REST APIs, MySQL 8.0.",
    backendArchitecture:
      "Built on a strict layered Spring Boot architecture: Controller layer exposes structured RESTful APIs, Service layer encapsulates core business logic, validation and workflow states, and Repository layer utilizes Spring Data JPA for type-safe database transactions.",
    frontendArchitecture:
      "Engineered with a modular React component architecture using functional components, hooks, Axios HTTP interceptors, responsive Tailwind layouts, and contextual state management.",
    databaseArchitecture:
      "Designed with relational integrity in MySQL, managing normalized tables for users, mechanics, services, requests, and feedback with foreign-key constraints and optimized indexes.",
    challenges: [
      {
        challenge: "Role-Based Access and Privilege Separation",
        solution: "Implemented discrete role authorization checks in Spring Boot to ensure strict data isolation between Admin, User, and Mechanic endpoints.",
      },
      {
        challenge: "Real-Time Service Request State Machine",
        solution: "Structured a deterministic lifecycle workflow (Requested → Accepted → In Progress → Completed) preventing invalid state jumps.",
      },
      {
        challenge: "Database Relationship & Foreign Key Integrity",
        solution: "Constructed normalized JPA entity associations (@OneToMany, @ManyToOne) with cascade controls and lazy-loading optimizations.",
      },
      {
        challenge: "Frontend & Backend Asynchronous Sync",
        solution: "Configured centralized Axios API services with standard error handling, HTTP status interpretation, and loading indicators.",
      },
    ],
    results:
      "Mechanic Buddy delivers a dependable, high-functioning full-stack solution that provides complete operational visibility for all three user personas, demonstrating robust end-to-end engineering from React components to relational SQL storage.",
  },
  screenshots: [
    {
      title: "Login Interface",
      description: "Secure role-based login gateway for Users, Mechanics, and Platform Administrators.",
      badge: "Auth",
    },
    {
      title: "Registration Page",
      description: "User and Mechanic onboarding with credential validation and detail capture.",
      badge: "Onboarding",
    },
    {
      title: "Admin Dashboard",
      description: "Comprehensive platform management view displaying active services and system oversight.",
      badge: "Admin",
    },
    {
      title: "User Dashboard",
      description: "Customer control center highlighting active requests, past services, and vehicle specs.",
      badge: "User",
    },
    {
      title: "Mechanic Dashboard",
      description: "Specialist workbench displaying incoming requests, action buttons, and active jobs.",
      badge: "Mechanic",
    },
    {
      title: "Mechanic Listing Directory",
      description: "Interactive directory enabling users to browse and filter nearby verified mechanics.",
      badge: "Discovery",
    },
    {
      title: "Service Request Page",
      description: "Intuitive booking form to specify breakdown details, vehicle model, and required services.",
      badge: "Booking",
    },
    {
      title: "Real-Time Service Status",
      description: "Live visual status tracker showing the progressive repair lifecycle from pending to completion.",
      badge: "Tracking",
    },
    {
      title: "User & Mechanic Profile",
      description: "Detailed profile management interface for updating contact details and specialization.",
      badge: "Profile",
    },
  ],
};

export const experience = [
  {
    role: "Full-Stack Java Developer (Entry-Level / Fresher)",
    status: "Open to Software Development Opportunities",
    period: "2025 - Present",
    desc: "Actively seeking full-time Software Engineer or Full-Stack Java Developer roles. Continuously developing full-stack enterprise web platforms utilizing Spring Boot, React, and MySQL with production deployments.",
    highlights: [
      "Completed end-to-end development of Mechanic Buddy Full-Stack Platform.",
      "Implemented RESTful microservices, JPA entity persistence, and React frontend workflows.",
      "Hands-on experience with containerization, cloud deployment on Render, and Git collaboration.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sree Chaitanya Institute of Technological Sciences",
    location: "Karimnagar, Telangana",
    year: "2021 - 2025",
    score: "CGPA: 6.91",
    badge: "Graduation: 2025",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "SR Junior College",
    location: "Hanmakonda, Telangana",
    year: "2019 - 2021",
    score: "Percentage: 94.6%",
    badge: "Academic Distinction",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Tetrahedron High School",
    location: "Huzurabad, Telangana",
    year: "2018 - 2019",
    score: "GPA: 9.7 / 10",
    badge: "Top Merit",
  },
];

export const certifications = [
  {
    title: "Java Full Stack Development",
    organization: "Specialized Training Program",
    date: "2024",
    credentialId: "JFS-2024-AP",
    description: "Comprehensive hands-on training in Core Java, Advanced Java, Spring Boot, Hibernate, MySQL, and React.",
    link: "https://github.com/Anandpalle",
  },
  {
    title: "Relational Database Design & MySQL",
    organization: "Technical Database Specialization",
    date: "2024",
    credentialId: "RDBMS-MYSQL-24",
    description: "Advanced SQL queries, normalization, table relationships, indexing, and transactional integrity.",
    link: "https://github.com/Anandpalle",
  },
  {
    title: "RESTful Web Services & Spring Boot",
    organization: "Backend Architecture Specialization",
    date: "2024",
    credentialId: "SB-REST-2024",
    description: "Designing, building, testing with Postman, and deploying scalable Spring Boot REST APIs.",
    link: "https://github.com/Anandpalle",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];