const assetUrl = (relativePath: string) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^\/+/, "")}`;

const githubBase = "https://github.com/Stonewalker20";
const emailAddress = "stoneciphercordell@gmail.com";
const linkedinUrl = "https://linkedin.com/in/cordell-stonecipher-27a54a14a";
const schedulingUrl = "https://calendar.app.google/5XGtbua7ZWXBU3Z27";

const portfolioPaths = {
  github: githubBase,
  email: `mailto:${emailAddress}`,
  linkedin: linkedinUrl,
  resume: assetUrl("Cordell_Stonecipher_Resume.pdf"),
  headshot: assetUrl("images/cordell-headshot.jpeg"),
  scheduling: schedulingUrl,
};

const repoUrl = (repo: string) => `${githubBase}/${repo}`;

export const portfolio = {
  name: "Cordell Stonecipher",
  role: "Machine Learning Engineer / Applied AI Engineer",
  focus: "Reliability, Evaluation, and Product Systems",
  github: portfolioPaths.github,
  email: emailAddress,
  contactPath: portfolioPaths.email,
  linkedin: portfolioPaths.linkedin,
  contributionCount: 291,
  resumePath: portfolioPaths.resume,
  headshotPath: portfolioPaths.headshot,
  schedulingPath: portfolioPaths.scheduling,
  updated: "March 2026",
  heroHeadline: "I build AI and machine-learning systems that are useful, reliable, and ready for real-world use.",
  seeking:
    "Open to ML Engineer and Applied AI roles where thoughtful product work, strong evaluation, and reliability all matter.",
  schedulingNote:
    "Happy to chat for 15 minutes about roles, current projects, or ways we might work together.",
  heroBody:
    "My recent work includes a full-stack career intelligence product, an open-source LLM reliability framework, numerical stability experiments for MLOps, and notebook-based NLP and optimization projects. I enjoy working across frontend, backend, modeling, and evaluation when the product needs all of them.",
  summary:
    "Machine Learning Engineer / Applied AI Engineer with hands-on experience across full-stack product delivery, LLM evaluation, MLOps reliability, and transformer-based NLP. I like building systems end to end, understanding where they fail, and turning experiments into dependable engineering work.",
  proofPoints: [
    {
      label: "Current focus",
      value: "Applied AI products, LLM reliability, and practical ML systems",
    },
    {
      label: "Public repos",
      value: "7 GitHub projects spanning frontend, backend, and machine learning",
    },
    {
      label: "Research base",
      value: "4 report-backed projects across NLP, computer vision, and applied analytics",
    },
  ],
  quickLinks: [
    "full-stack AI products",
    "LLM evaluation and guardrails",
    "MLOps reproducibility",
    "transformer NLP and PyTorch",
  ],
  valueProps: [
    {
      title: "What I deliver",
      body: "AI and ML systems that bring together product UI, backend services, model logic, and evaluation",
    },
    {
      title: "What I optimize for",
      body: "reliability, useful metrics, clean interfaces, and work that is easy for others to pick up",
    },
    {
      title: "Where I add value",
      body: "Applied AI products, ML systems, MLOps, evaluation tooling, and engineering-focused experimentation",
    },
  ],
  targetRoles: [
    "Applied AI Engineer: build product-facing AI features with strong evaluation and thoughtful fallback behavior",
    "Machine Learning Engineer: own training, pipelines, APIs, and practical deployment decisions",
    "ML / AI Platform Engineer: create reliability tooling, evaluation workflows, and reproducible systems",
  ],
  strengths: [
    "Full-stack execution across React, FastAPI, Python ML, and deployment workflows",
    "A reliability mindset that looks directly at drift, prompt injection, schema failures, and fragile behavior",
    "Strong modeling depth across PyTorch, transformers, optimization, and NLP experimentation",
    "Product thinking that connects technical decisions to real user workflows like job matching, evidence intake, and reporting",
  ],
  operatingStyle: [
    "Start with the user workflow and get clear on what success really looks like",
    "Build the data path, model path, and interface path together",
    "Measure real failure modes instead of relying on one headline metric",
    "Leave behind reproducible repos, readable code, and clear documentation",
  ],
  projectDomains: [
    "Full-stack AI",
    "LLM reliability",
    "MLOps",
    "Transformers",
    "Optimization",
    "Applied NLP",
  ],
  recentStack: [
    {
      name: "Python + TypeScript",
      detail: "for backend APIs, ML pipelines, and frontend delivery",
    },
    {
      name: "React + FastAPI + MongoDB",
      detail: "for user-facing products with API-driven workflows",
    },
    {
      name: "PyTorch + Transformers + MLflow",
      detail: "for training, evaluation, and experiment tracking",
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS", "Shell", "LaTeX"],
    },
    {
      title: "ML / AI",
      items: [
        "PyTorch",
        "Transformers",
        "Hugging Face",
        "scikit-learn",
        "DistilBERT",
        "Semantic matching",
        "Skill extraction",
        "Prompt injection evaluation",
        "Groundedness testing",
      ],
    },
    {
      title: "Product / Backend",
      items: [
        "React",
        "Vite",
        "React Router",
        "Tailwind CSS",
        "FastAPI",
        "MongoDB",
        "Pydantic",
        "REST APIs",
        "PDF/DOCX ingestion",
      ],
    },
    {
      title: "MLOps / Reliability",
      items: [
        "Docker",
        "DVC",
        "MLflow",
        "GitHub Actions",
        "Experiment tracking",
        "Deterministic training",
        "Drift analysis",
        "Schema validation",
        "Guardrails",
      ],
    },
  ],
  caseStudies: [
    {
      title: "SkillBridge",
      year: "2026",
      summary:
        "Built a full-stack career intelligence platform for collecting evidence, confirming skills, analyzing job fit, and generating tailored resumes.",
      details:
        "Implemented a React/Vite frontend, FastAPI backend, MongoDB persistence, local transformer-backed semantic matching, and safe fallback behavior when models are unavailable.",
      impact:
        "Demonstrates end-to-end product ownership across interface design, backend APIs, document ingestion, AI-assisted matching, and PDF export.",
      whyItMatters:
        "Shows that I can ship AI product work across UI, API, data, and model logic instead of stopping at notebooks.",
      highlights: [
        "Evidence ingestion from text, PDF, and DOCX",
        "Skill confirmations, job-fit analysis, and resume generation",
        "Safe rule-based fallback when transformer models are unavailable",
      ],
      previewImages: [
        {
          src: assetUrl("images/SB_LandingPage.png"),
          alt: "SkillBridge landing page",
        },
        {
          src: assetUrl("images/SB_Dashboard.png"),
          alt: "SkillBridge dashboard",
        },
        {
          src: assetUrl("images/SB_Analytics.png"),
          alt: "SkillBridge analytics view",
        },
      ],
      preview: ["Landing UI", "FastAPI routes", "MongoDB records", "Matching pipeline"],
      tools: ["React", "FastAPI", "MongoDB", "Transformers"],
      link: repoUrl("SkillBridge"),
      linkLabel: "View repo",
    },
    {
      title: "TrustStack",
      year: "2026",
      summary:
        "Created an open-source evaluation framework for LLM reliability and guardrail effectiveness in agentic workflows.",
      details:
        "Measures prompt injection, groundedness, schema and tool reliability, and stability while producing metrics JSON, HTML reports, and a dashboard surface.",
      impact:
        "Frames LLM evaluation as operational risk measurement, not just benchmark accuracy, with outputs that teams can inspect and compare.",
      whyItMatters:
        "Moves beyond model demos into operational risk measurement for real AI systems.",
      highlights: [
        "Injection, groundedness, schema, and tool reliability suites",
        "Reproducible JSON metrics and HTML report generation",
        "Dashboard-ready output for leaderboard and monitoring workflows",
      ],
      preview: ["Eval harness", "Metrics JSON", "HTML report", "Dashboard MVP"],
      tools: ["LLM evaluation", "Guardrails", "Python", "Dashboard"],
      link: repoUrl("TrustStack"),
      linkLabel: "View repo",
    },
    {
      title: "Correct but Fragile",
      year: "2026",
      summary:
        "Built a reproducible ML pipeline to quantify prediction drift under random seed and batch-size perturbations.",
      details:
        "Added deterministic controls, artifact-backed experiments, MLflow tracking, DVC versioning, Docker support, and CI-ready stability workflows.",
      impact:
        "Shows how to turn numerical stability from an academic concern into a measurable engineering gate for production ML workflows.",
      whyItMatters:
        "Accuracy is not enough if the system changes its predictions under normal operational variation.",
      highlights: [
        "Prediction-level drift checks across seeds and batch sizes",
        "Artifact-backed runs with MLflow and DVC traceability",
        "CI-ready structure for future stability gating",
      ],
      preview: ["Train sweep", "Prediction artifacts", "MLflow runs", "Drift comparisons"],
      tools: ["PyTorch", "MLflow", "DVC", "Docker"],
      link: repoUrl("numerical-fragility-mlops"),
      linkLabel: "View repo",
    },
  ],
  githubProjects: [
    {
      name: "SkillBridge",
      tagline: "Full-stack career intelligence platform for skill evidence, job-fit analysis, and tailored resume generation.",
      details:
        "React/Vite frontend, FastAPI backend, MongoDB persistence, transformer-backed matching, and file ingestion for PDF and DOCX evidence.",
      tools: ["TypeScript", "Python", "FastAPI", "MongoDB"],
      link: repoUrl("SkillBridge"),
    },
    {
      name: "TrustStack",
      tagline: "Open-source framework for LLM reliability and guardrail effectiveness.",
      details:
        "Evaluates prompt injection, groundedness, schema and tool reliability, and stability with reproducible reports and a dashboard MVP.",
      tools: ["Python", "LLM eval", "Guardrails", "HTML reports"],
      link: repoUrl("TrustStack"),
    },
    {
      name: "numerical-fragility-mlops",
      tagline: "Operational stability project that tests whether a model can be correct but still fragile.",
      details:
        "Uses deterministic training, MLflow, DVC, Docker, and comparison artifacts to quantify reproducibility drift.",
      tools: ["PyTorch", "MLflow", "DVC", "Docker"],
      link: repoUrl("numerical-fragility-mlops"),
    },
    {
      name: "optimization-in-deep-learning",
      tagline: "Notebook experiments on learning rates, optimization stability, generalization, and concept drift.",
      details:
        "Compares optimizer behavior and shows how training choices and data shift affect outcomes in practice.",
      tools: ["PyTorch", "Optimization", "Concept drift", "Notebook"],
      link: repoUrl("optimization-in-deep-learning"),
    },
    {
      name: "pytorch-regression-classification",
      tagline: "End-to-end PyTorch work for regression and multi-class classification on high-dimensional tabular data.",
      details:
        "Implements framework-native MLP models with early stopping, scheduling, gradient clipping, and reproducible prediction outputs.",
      tools: ["PyTorch", "Tabular ML", "AdamW", "Notebook"],
      link: repoUrl("pytorch-regression-classification"),
    },
    {
      name: "sentiment-analysis-distilbert",
      tagline: "Fine-tuned DistilBERT for binary sentiment classification on IMDB reviews.",
      details:
        "Covers tokenization, transfer learning, evaluation metrics, and inference on custom inputs using Hugging Face tooling.",
      tools: ["DistilBERT", "Transformers", "PyTorch", "NLP"],
      link: repoUrl("sentiment-analysis-distilbert"),
    },
    {
      name: "resumeWebsite2026",
      tagline: "Portfolio and resume site deployed with React/Vite and GitHub Pages.",
      details:
        "Refactored the site into a framework-based frontend, multi-page static routes, and GitHub Actions deployment for a cleaner public presence.",
      tools: ["React", "TypeScript", "Vite", "GitHub Pages"],
      link: repoUrl("resumeWebsite2026"),
    },
  ],
  buildTimeline: [
    {
      period: "2026",
      title: "Portfolio and public positioning",
      body:
        "Rebuilt the portfolio as a React/Vite site on GitHub Pages with clearer project storytelling, easier contact, and a cleaner deployment flow.",
    },
    {
      period: "2026",
      title: "SkillBridge product build",
      body:
        "Built a full-stack AI product for evidence ingestion, skills data, job-fit analysis, and tailored resume generation.",
    },
    {
      period: "2026",
      title: "TrustStack reliability work",
      body:
        "Started an open-source LLM evaluation framework focused on guardrails, prompt injection, groundedness, and reproducible reporting.",
    },
    {
      period: "2025-2026",
      title: "ML systems and research base",
      body:
        "Built PyTorch, NLP, optimization, and computer vision projects that strengthened the modeling and experimentation side of my work.",
    },
  ],
  researchReports: [
    {
      title: "Mining Reddit for ADE Detection",
      body:
        "Weak supervision and classical NLP pipelines using Reddit data, with careful preprocessing, TF-IDF features, and linear models.",
      link: assetUrl("reports/ADE_redditmining_report.pdf"),
      thumbnail: assetUrl("reports/thumbnails/ADE_redditmining_report.pdf.png"),
    },
    {
      title: "Cross-Domain ADE Extraction",
      body:
        "Sequence labeling across clean and noisy domains, comparing CRFs and transformer models under real domain shift.",
      link: assetUrl("reports/crossDomain_ADE_report.pdf"),
      thumbnail: assetUrl("reports/thumbnails/crossDomain_ADE_report.pdf.png"),
    },
    {
      title: "Cancer Mortality Prediction (OLS Regression)",
      body:
        "Interpretable regression with diagnostics, assumption checking, and disciplined feature handling.",
      link: assetUrl("reports/OLS_Regression.pdf"),
      thumbnail: assetUrl("reports/thumbnails/OLS_Regression.pdf.png"),
    },
    {
      title: "Military Asset Detection (YOLOv8)",
      body:
        "End-to-end computer vision pipeline covering exploration, training, and evaluation on imbalanced data.",
      link: assetUrl("reports/YOLOv8_report.pdf"),
      thumbnail: assetUrl("reports/thumbnails/YOLOv8_report.pdf.png"),
    },
  ],
  hobbies: [
    {
      title: "Cars",
      body:
        "I like working on cars for the same reason I like debugging: there is always a story behind the symptom.",
      highlights: [
        "diagnose before guessing",
        "fix the root cause",
        "learn how systems behave under stress",
      ],
    },
    {
      title: "Custom PCBs and microcontrollers",
      body:
        "I enjoy small hardware builds that do one job well and pair cleanly with software.",
      highlights: [
        "practical tools",
        "real-world constraints",
        "builder mindset",
      ],
    },
    {
      title: "Nature and paddleboarding",
      body:
        "Trails, lakes, and time on the water keep my head clear. It is my reset for quiet focus and balance.",
      highlights: [
        "steady pace",
        "outside regularly",
        "better thinking after moving",
      ],
    },
    {
      title: "Learning instruments",
      body:
        "It is a different kind of practice: patience, repetition, and listening. Showing up consistently matters.",
      highlights: ["patience", "repetition", "slow improvement"],
    },
  ],
  longTermDirection:
    "Long term, I want to build practical AI products that feel genuinely useful and trustworthy, especially in places where reliability matters as much as model performance.",
};
