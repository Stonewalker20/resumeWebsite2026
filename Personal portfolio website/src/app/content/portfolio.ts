const assetUrl = (relativePath: string) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^\/+/, "")}`;

const portfolioPaths = {
  github: "https://github.com/Stonewalker20",
  resume: assetUrl("Cordell_Stonecipher_Resume.pdf"),
};

export const portfolio = {
  name: "Cordell Stonecipher",
  role: "Data Scientist / Machine Learning Engineer",
  focus: "Systems & Reliability",
  github: portfolioPaths.github,
  resumePath: portfolioPaths.resume,
  updated: "2026",
  heroHeadline: "I build reliable machine-learning systems for real-world constraints.",
  heroBody:
    "I combine applied ML with a hands-on systems background. My focus is turning messy inputs into stable pipelines, measuring outcomes with defensible evaluation, and diagnosing failure modes until results hold up under real operational constraints.",
  summary:
    "Data Scientist / Machine Learning Engineer with a systems background. I build end-to-end ML pipelines, validate outcomes with defensible evaluation, and troubleshoot failure modes until systems are stable and repeatable.",
  quickLinks: [
    "end-to-end ML pipelines",
    "evaluation and error analysis",
    "repeatable automation",
    "reliability under constraints",
  ],
  valueProps: [
    {
      title: "What I deliver",
      body: "end-to-end ML pipelines, evaluation discipline, and reliable automation",
    },
    {
      title: "What I optimize for",
      body: "repeatability, clarity, stability under constraints, and documented handoff",
    },
    {
      title: "Domains",
      body: "NLP, computer vision, time series, and applied analytics",
    },
  ],
  targetRoles: [
    "Machine Learning Engineer: pipelines, evaluation, reliability, deployment-aware decisions",
    "Data Scientist: modeling, experimentation, interpretation, and operational outcomes",
    "Applied Research / ML Systems: rigorous comparisons, ablations, and practical constraints",
  ],
  strengths: [
    "End-to-end execution: data prep, training, evaluation, and reporting",
    "Failure-mode thinking: diagnose root causes instead of symptoms",
    "Repeatability: controlled randomness, stable preprocessing, readable pipelines",
    "Systems mindset: comfortable across software, data, and operational constraints",
  ],
  operatingStyle: [
    "define data contracts and checks",
    "control randomness for reproducibility",
    "evaluate, inspect errors, and iterate",
    "document so the work survives handoff",
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "SQL", "Java", "C++", "PHP"],
    },
    {
      title: "ML / Data",
      items: [
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Transformers",
        "CRF",
        "CNN",
        "YOLOv8",
        "LSTM",
        "GRU",
        "ARIMA",
        "ETS",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Git",
        "Linux",
        "Jupyter",
        "REST APIs",
        "FastAPI",
        "Flask",
        "Django",
        "Windows",
        "macOS",
      ],
    },
    {
      title: "Methods",
      items: [
        "Evaluation",
        "Error analysis",
        "Ablations",
        "Model compression",
        "Pruning",
        "Distillation",
        "Quantization",
        "Data validation",
        "Automation",
        "BAS / Controls",
      ],
    },
  ],
  caseStudies: [
    {
      title: "ADE Detection (NLP)",
      summary:
        "Built a cross-domain sequence tagging pipeline with stable preprocessing and defensible evaluation.",
      details:
        "Focused on label harmonization, token alignment, and error analysis so results held up across clean and noisy text sources.",
      whyItMatters:
        "Noisy text pipelines fail silently. Evaluation discipline prevents false confidence.",
      tools: ["NLP", "Transformers", "Error analysis"],
      link: assetUrl("reports/crossDomain_ADE_report.pdf"),
      linkLabel: "Open report",
    },
    {
      title: "Algorithmic Trading Data Pipeline",
      summary:
        "Designed an incremental data update workflow with guardrails that prevents corruption at scale.",
      details:
        "Built around validation checks, safe updates, and repeatable modeling inputs for time-series work.",
      whyItMatters:
        "Pipeline reliability beats one good run. Safe updates keep models trustworthy over time.",
      tools: ["Python", "Pandas", "Automation"],
      link: portfolioPaths.github,
      linkLabel: "View GitHub",
    },
    {
      title: "Deep Learning Compression",
      summary:
        "Compared pruning, distillation, and quantization with ablation discipline and latency awareness.",
      details:
        "Framed compression choices against deployment constraints like speed, memory, and power instead of accuracy alone.",
      whyItMatters:
        "Performance claims only matter if they survive deployment constraints.",
      tools: ["CNN", "Ablations", "Latency"],
      link: assetUrl("reports/YOLOv8_report.pdf"),
      linkLabel: "Open report",
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
    "Long term, I want to build a product that helps people in a practical way. I am drawn to work where better tools mean better outcomes, especially in health and safety.",
};
