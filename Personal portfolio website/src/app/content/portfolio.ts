const assetUrl = (relativePath: string) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^\/+/, "")}`;

const githubBase = "https://github.com/Stonewalker20";

const portfolioPaths = {
  github: githubBase,
  resume: assetUrl("Cordell_Stonecipher_Resume.pdf"),
};

const repoUrl = (repo: string) => `${githubBase}/${repo}`;

export const portfolio = {
  name: "Cordell Stonecipher",
  role: "Machine Learning Engineer / Applied AI Engineer",
  focus: "Reliability, Evaluation, and Product Systems",
  github: portfolioPaths.github,
  resumePath: portfolioPaths.resume,
  updated: "March 2026",
  heroHeadline: "I build AI and machine-learning systems that hold up under real use.",
  heroBody:
    "Recent work spans a full-stack career intelligence product, an open-source LLM reliability framework, numerical fragility experiments for MLOps, and notebook-based NLP and optimization projects. I work across frontend, backend, modeling, and evaluation when the product needs all four.",
  summary:
    "Machine Learning Engineer / Applied AI Engineer with hands-on experience across full-stack product delivery, LLM evaluation, MLOps reliability, and transformer-based NLP. I build systems end to end, measure failure modes directly, and turn experiments into repeatable engineering work.",
  quickLinks: [
    "full-stack AI products",
    "LLM evaluation and guardrails",
    "MLOps reproducibility",
    "transformer NLP and PyTorch",
  ],
  valueProps: [
    {
      title: "What I deliver",
      body: "repo-backed AI and ML systems that combine product UI, backend services, model logic, and evaluation",
    },
    {
      title: "What I optimize for",
      body: "reliability, useful metrics, clean interfaces, and work that can be reproduced after handoff",
    },
    {
      title: "Where I add value",
      body: "Applied AI products, ML systems, MLOps, evaluation harnesses, and engineering-focused experimentation",
    },
  ],
  targetRoles: [
    "Applied AI Engineer: ship product-facing AI features with sound evaluation and fallback behavior",
    "Machine Learning Engineer: own training, pipelines, APIs, and deployment-aware engineering decisions",
    "ML / AI Platform Engineer: build reliability tooling, evaluation harnesses, and reproducible workflows",
  ],
  strengths: [
    "Full-stack execution across React, FastAPI, Python ML, and deployment workflows",
    "Reliability mindset: measure drift, prompt injection, schema failures, and fragile behavior directly",
    "Modeling depth: PyTorch, transformers, optimization, and NLP experimentation",
    "Product framing: connect technical decisions to user workflows like job matching, evidence intake, and reporting",
  ],
  operatingStyle: [
    "start from the user workflow and define what success actually means",
    "build the data path, model path, and interface path together",
    "measure real failure modes instead of relying on a single headline metric",
    "leave behind reproducible repos, readable code, and clear documentation",
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
      detail: "backend APIs, ML pipelines, and frontend delivery",
    },
    {
      name: "React + FastAPI + MongoDB",
      detail: "user-facing products with API-driven workflows",
    },
    {
      name: "PyTorch + Transformers + MLflow",
      detail: "training, evaluation, and experiment tracking",
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
      summary:
        "Built a full-stack career intelligence platform for collecting evidence, confirming skills, analyzing job fit, and generating tailored resumes.",
      details:
        "Implemented a React/Vite frontend, FastAPI backend, MongoDB persistence, local transformer-backed semantic matching, and safe fallback behavior when models are unavailable.",
      whyItMatters:
        "Shows that I can ship AI product work across UI, API, data, and model logic instead of stopping at notebooks.",
      tools: ["React", "FastAPI", "MongoDB", "Transformers"],
      link: repoUrl("SkillBridge"),
      linkLabel: "View repo",
    },
    {
      title: "TrustStack",
      summary:
        "Created an open-source evaluation framework for LLM reliability and guardrail effectiveness in agentic workflows.",
      details:
        "Measures prompt injection, groundedness, schema and tool reliability, and stability while producing metrics JSON, HTML reports, and a dashboard surface.",
      whyItMatters:
        "Moves beyond model demos into operational risk measurement for real AI systems.",
      tools: ["LLM evaluation", "Guardrails", "Python", "Dashboard"],
      link: repoUrl("TrustStack"),
      linkLabel: "View repo",
    },
    {
      title: "Correct but Fragile",
      summary:
        "Built a reproducible ML pipeline to quantify prediction drift under random seed and batch-size perturbations.",
      details:
        "Added deterministic controls, artifact-backed experiments, MLflow tracking, DVC versioning, Docker support, and CI-ready stability workflows.",
      whyItMatters:
        "Accuracy is not enough if the system changes its predictions under normal operational variation.",
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
  researchReports: [
    {
      title: "Mining Reddit for ADE Detection",
      body:
        "Weak supervision and classical NLP pipelines using Reddit data, with careful preprocessing, TF-IDF features, and linear models.",
      link: assetUrl("reports/ADE_redditmining_report.pdf"),
    },
    {
      title: "Cross-Domain ADE Extraction",
      body:
        "Sequence labeling across clean and noisy domains, comparing CRFs and transformer models under real domain shift.",
      link: assetUrl("reports/crossDomain_ADE_report.pdf"),
    },
    {
      title: "Cancer Mortality Prediction (OLS Regression)",
      body:
        "Interpretable regression with diagnostics, assumption checking, and disciplined feature handling.",
      link: assetUrl("reports/OLS_Regression.pdf"),
    },
    {
      title: "Military Asset Detection (YOLOv8)",
      body:
        "End-to-end computer vision pipeline covering exploration, training, and evaluation on imbalanced data.",
      link: assetUrl("reports/YOLOv8_report.pdf"),
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
    "Long term, I want to build practical AI products that are both useful and trustworthy, especially where reliability matters as much as raw model performance.",
};
