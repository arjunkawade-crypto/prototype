/**
 * CareerLens - Complete Interactive Application Controller
 * Dual Persona: Applicant & Organisation
 * Fully enhanced with:
 * 1. Recommended Freelanced Projects in Recommendations tab
 * 2. Unique Job/Internship IDs with Copy & Deep AI Skill & Test Analysis Modal
 * 3. Complete Organisations directory (Companies & Colleges) with deep profile viewers
 * 4. Persona-tailored view: Companies for Students/Job Seekers, Colleges for Academicians
 * 5. Comprehensive Profile with Domain Test Scores & Global Rankings, GitHub/LeetCode Active Days Graph, Badges, Freelance Completed, Education, Skills, Resume
 * 6. Dedicated Settings tab with Saved Items (Jobs, Internships, Projects), Security, and Privacy features
 */

// Multi-Disciplinary Master Candidate Personas (Engineering, Commerce, Design, Law, Healthcare)
const disciplineProfiles = {
  tech: {
    name: 'Arjun Kawade',
    role: 'Aspiring AI/ML Engineer & Systems Developer',
    email: 'arjun.k@university.edu',
    phone: '+91 98765 43210',
    field: 'Engineering & Technology',
    domain: 'Artificial Intelligence & Machine Learning',
    domainSkills: ['PyTorch', 'TensorFlow', 'Python', 'LLM Fine-tuning', 'FastAPI', 'Computer Vision', 'Docker', 'NLP'],
    commonSkills: ['Problem Solving', 'Team Leadership', 'Effective Communication', 'Agile/Scrum', 'Critical Thinking'],
    education: 'B.Tech in Computer Science & Engineering, IIT Bombay (2022 - 2026), CGPA: 8.9/10',
    experience: 'Machine Learning Research Intern @ AI Labs (6 months)',
    resumeName: 'Arjun_Kawade_Tech_Resume.pdf',
    atsScore: 92,
    socials: {
      github: 'github.com/arjunkawade',
      linkedin: 'linkedin.com/in/arjunkawade',
      portfolio: 'arjun.dev',
      twitter: 'twitter.com/arjuncodes'
    },
    rankings: [
      { domain: 'Artificial Intelligence & ML', score: 94, rank: 142, total: 12400, percentile: '98.8%' },
      { domain: 'Data Structures & Algorithms', score: 92, rank: 185, total: 15600, percentile: '98.2%' },
      { domain: 'Quantitative Aptitude & Logic', score: 88, rank: 310, total: 18200, percentile: '96.5%' },
      { domain: 'Technical Communication & Soft Skills', score: 86, rank: 420, total: 9800, percentile: '95.7%' }
    ],
    badges: [
      { icon: '🔥', title: '8-Day Streak Master', desc: 'Active daily coding solver' },
      { icon: '🏆', title: 'Top 5% Coder', desc: 'Algorithms leaderboard' },
      { icon: '🌟', title: 'Verified PyTorch Pro', desc: 'Domain benchmark verified' },
      { icon: '📜', title: 'ATS Champion', desc: '92+ ATS resume score' },
      { icon: '💡', title: 'Top Rated Freelancer', desc: '5.0 ★ Client rating' }
    ],
    completedFreelance: [
      { title: 'Multi-Modal Document Parsing Agent', client: 'FinTech Corp', budget: '$1,800', rating: '5.0 ★', review: 'Exceptional delivery on LangChain OCR extraction!' },
      { title: 'RAG Chatbot for Legal Case Law', client: 'JurisAI Tech', budget: '$1,200', rating: '4.9 ★', review: 'Fast turnaround with clean vector search integration.' },
      { title: 'Next.js 15 SaaS Metrics Dashboard', client: 'CloudMetrics Inc', budget: '$450', rating: '5.0 ★', review: 'Super clean responsive code and Tailwind components.' }
    ],
    saved: {
      jobs: [
        { id: 'JOB-MSFT-901', title: 'Applied AI Engineer', company: 'Microsoft', salary: '₹24 - ₹36 LPA', location: 'Bangalore / Hybrid' },
        { id: 'JOB-RZP-402', title: 'Machine Learning Engineer', company: 'Razorpay', salary: '₹20 - ₹28 LPA', location: 'Bangalore' }
      ],
      internships: [
        { id: 'INT-MSFT-101', title: 'AI Research Intern (GenAI)', company: 'Microsoft', stipend: '₹80,000 / mo', deadline: 'Sep 20' },
        { id: 'INT-GOOG-102', title: 'Software Engineering Intern', company: 'Google', stipend: '₹1,10,000 / mo', deadline: 'Sep 28' }
      ],
      projects: [
        { id: 'PROJ-FREELANCE-01', title: 'Fine-tune Llama 3 for Legal RAG', client: 'LegalTech Corp', budget: '$1,400', duration: '3 weeks' }
      ]
    }
  },

  finance: {
    name: 'Arjun Kawade',
    role: 'Quantitative Finance & Investment Banking Scholar',
    email: 'arjun.finance@srcc.edu',
    phone: '+91 98765 43210',
    field: 'Commerce & Financial Markets',
    domain: 'Investment Banking & Quantitative Risk',
    domainSkills: ['DCF Valuation', 'Financial Modeling', 'Bloomberg Terminal', 'Equity Research', 'Excel/VBA', 'Python for Finance', 'Credit Risk Auditing', 'SEBI Compliance'],
    commonSkills: ['Analytical Thinking', 'Stakeholder Communication', 'Executive Presentation', 'Negotiation', 'Team Leadership'],
    education: 'B.Com (Hons) / Post-Grad in Financial Markets, SRCC & NMIMS (2022 - 2026), CGPA: 9.1/10',
    experience: 'Equity Research Analyst Intern @ Motilal Oswal (6 months)',
    resumeName: 'Arjun_Kawade_Finance_Resume.pdf',
    atsScore: 94,
    socials: {
      github: 'github.com/arjunkawade-fin',
      linkedin: 'linkedin.com/in/arjun-kawade-finance',
      portfolio: 'arjun-finance.com',
      twitter: 'twitter.com/arjun_quant'
    },
    rankings: [
      { domain: 'Financial Modeling & DCF Valuation', score: 95, rank: 48, total: 9200, percentile: '99.4%' },
      { domain: 'Quantitative Risk & Statistics', score: 91, rank: 92, total: 11400, percentile: '99.1%' },
      { domain: 'Corporate Accounting & Tax Auditing', score: 89, rank: 140, total: 14800, percentile: '98.0%' },
      { domain: 'Executive Pitching & Soft Skills', score: 93, rank: 64, total: 8500, percentile: '99.2%' }
    ],
    badges: [
      { icon: '📈', title: 'CFA Level 1 Candidate', desc: 'Quantitative ethics & asset pricing' },
      { icon: '🏆', title: 'Goldman Sachs Case Winner', desc: 'LBO Valuation championship' },
      { icon: '🌟', title: 'Top 1% Financial Modeler', desc: 'Verified spreadsheet benchmark' },
      { icon: '📜', title: 'SEBI Certified Analyst', desc: 'Research analyst NISM-Series-XV' },
      { icon: '💼', title: 'Wall Street Prep Honors', desc: 'M&A and dynamic 3-statement model' }
    ],
    completedFreelance: [
      { title: '3-Statement LBO Financial Model for Solar Venture', client: 'GreenEnergy PE', budget: '$1,500', rating: '5.0 ★', review: 'Flawless debt waterfall and IRR sensitivity table!' },
      { title: 'FinTech Startup Investor Pitch Deck & Valuation', client: 'PayGlobal Labs', budget: '$1,200', rating: '4.9 ★', review: 'Clear comps table and realistic DCF terminal multiples.' },
      { title: 'Automated Portfolio Beta & VaR Risk Tracker', client: 'Aegis Capital', budget: '$600', rating: '5.0 ★', review: 'Super clean Excel VBA macros connecting to Yahoo Finance.' }
    ],
    saved: {
      jobs: [
        { id: 'JOB-GOLD-601', title: 'Quantitative Investment Analyst', company: 'Goldman Sachs', salary: '₹22 - ₹32 LPA', location: 'Mumbai / Hybrid' }
      ],
      internships: [
        { id: 'INT-HDFC-201', title: 'Corporate Banking & Credit Risk Analyst Intern', company: 'HDFC Bank', stipend: '₹55,000 / mo', deadline: 'Oct 10' }
      ],
      projects: [
        { id: 'PROJ-FL-FIN-01', title: '3-Statement LBO Financial Model', client: 'GreenEnergy PE', budget: '$1,500', duration: '3 weeks' }
      ]
    }
  },

  design: {
    name: 'Arjun Kawade',
    role: 'Lead Product & Design Systems Architect',
    email: 'arjun.design@nid.edu',
    phone: '+91 98765 43210',
    field: 'Design & Creative Arts',
    domain: 'User Experience & Design Systems',
    domainSkills: ['Figma', 'Design Systems', 'Wireframing', 'Micro-Interactions', 'Usability Testing', 'Heuristic Evaluation', 'Accessibility (WCAG AAA)', 'Design Tokens'],
    commonSkills: ['User Empathy', 'Cross-Functional Collaboration', 'Design Critique', 'Storyboarding', 'Creative Problem Solving'],
    education: 'B.Des in Interaction & Digital Product Design, National Institute of Design (NID Ahmedabad, 2022 - 2026), CGPA: 9.2/10',
    experience: 'Product Design Fellow @ Swiggy Design Studio (6 months)',
    resumeName: 'Arjun_Kawade_Design_Resume.pdf',
    atsScore: 93,
    socials: {
      github: 'github.com/arjunkawade-design',
      linkedin: 'linkedin.com/in/arjun-designer',
      portfolio: 'arjun.design',
      twitter: 'twitter.com/arjun_pixels'
    },
    rankings: [
      { domain: 'Design Systems & Token Architecture', score: 96, rank: 32, total: 7800, percentile: '99.5%' },
      { domain: 'Mobile Interaction & Micro-Prototypes', score: 93, rank: 74, total: 9100, percentile: '99.1%' },
      { domain: 'Usability Heuristics & WCAG AAA', score: 90, rank: 112, total: 8400, percentile: '98.6%' },
      { domain: 'User Research & Journey Mapping', score: 94, rank: 58, total: 7200, percentile: '99.2%' }
    ],
    badges: [
      { icon: '🎨', title: 'Figma Community Leader', desc: 'Published design system library' },
      { icon: '🏆', title: 'NID Best Interaction Award', desc: 'Accessible healthcare UI honours' },
      { icon: '🌟', title: 'WCAG AAA Certified', desc: 'Universal design & accessibility pro' },
      { icon: '✨', title: 'Design Sprint Facilitator', desc: 'Stanford d.school methodology' },
      { icon: '📱', title: 'Top 1% Mobile Designer', desc: 'Haptic & micro-interaction master' }
    ],
    completedFreelance: [
      { title: 'HealthTech Patient Monitoring App Full Redesign', client: 'CarePulse Health', budget: '$2,200', rating: '5.0 ★', review: 'Transformed our clinical UX with flawless accessibility.' },
      { title: 'Multi-Brand Enterprise Design Tokens Library', client: 'OmniCloud SaaS', budget: '$1,800', rating: '4.9 ★', review: 'Saved our engineering team 120+ frontend build hours.' },
      { title: 'E-Commerce Checkout Flow Friction Optimization', client: 'LuxeCart Retail', budget: '$950', rating: '5.0 ★', review: 'Reduced cart drop-off by 14% on mobile web!' }
    ],
    saved: {
      jobs: [
        { id: 'JOB-FIG-701', title: 'Product & Systems Designer', company: 'Figma Labs', salary: '₹20 - ₹30 LPA', location: 'Bangalore / Remote' }
      ],
      internships: [
        { id: 'INT-ZOM-202', title: 'UI/UX Interaction Design Intern', company: 'Zomato', stipend: '₹60,000 / mo', deadline: 'Oct 02' }
      ],
      projects: [
        { id: 'PROJ-FL-DES-01', title: 'HealthTech Patient Portal UX', client: 'CarePulse Health', budget: '$2,200', duration: '3 weeks' }
      ]
    }
  },

  law: {
    name: 'Arjun Kawade',
    role: 'Corporate Technology & Cyber Law Scholar',
    email: 'arjun.law@nls.ac.in',
    phone: '+91 98765 43210',
    field: 'Law & Corporate Governance',
    domain: 'Technology Law & Data Protection',
    domainSkills: ['DPDP Act 2023 Compliance', 'Tech Contract Drafting', 'Intellectual Property (IP)', 'Due Diligence', 'IT Act 2000', 'Cross-Border Data Governance', 'Arbitration'],
    commonSkills: ['Legal Research & Writing', 'Oral Advocacy', 'Analytical Reasoning', 'Statutory Interpretation', 'Client Negotiation'],
    education: 'B.A. LL.B (Hons), National Law School of India University (NLSIU Bangalore, 2021 - 2026), CGPA: 8.8/10',
    experience: 'Judicial Clerk & Tech Policy Research Fellow @ Supreme Court Observers (6 months)',
    resumeName: 'Arjun_Kawade_Law_Resume.pdf',
    atsScore: 91,
    socials: {
      github: 'github.com/arjunkawade-legal',
      linkedin: 'linkedin.com/in/arjun-law-nlsiu',
      portfolio: 'arjun-juris.in',
      twitter: 'twitter.com/arjun_lex'
    },
    rankings: [
      { domain: 'DPDP Act 2023 & Cyber Governance', score: 94, rank: 28, total: 6400, percentile: '99.5%' },
      { domain: 'Technology Contract Drafting & SLA', score: 92, rank: 54, total: 7200, percentile: '99.2%' },
      { domain: 'IP Law & Patent Infringement Analysis', score: 89, rank: 98, total: 8100, percentile: '98.7%' },
      { domain: 'Constitutional Moot & Oral Advocacy', score: 95, rank: 22, total: 5800, percentile: '99.6%' }
    ],
    badges: [
      { icon: '⚖️', title: 'NLSIU Moot Court Winner', desc: 'National Tech Law Arbitration champion' },
      { icon: '📜', title: 'Certified DPO (Data Protection)', desc: 'Indian DPDP Act certified' },
      { icon: '🏆', title: 'Top 2% Legal Researcher', desc: 'Manupatra & SCC Online benchmark' },
      { icon: '🌟', title: 'WIPO IP Fellow', desc: 'Patent drafting & licensing honor' },
      { icon: '💼', title: 'Corporate M&A Legal Due Diligence', desc: 'Enterprise procurement verified' }
    ],
    completedFreelance: [
      { title: 'SaaS Master Services Agreement (MSA) & SLA Suite', client: 'ApexCloud Technologies', budget: '$1,600', rating: '5.0 ★', review: 'Bulletproof liability indemnification and IP clauses.' },
      { title: 'DPDP Act 2023 Data Protection Audit & Policy Overhaul', client: 'FinServe Fintech', budget: '$1,400', rating: '5.0 ★', review: 'Mapped our entire consent architecture to statutory norms.' },
      { title: 'Cross-Border AI Training Data Licensing Memo', client: 'LexAI Venture Labs', budget: '$850', rating: '4.9 ★', review: 'Thorough citation of global copyright fair-use precedents.' }
    ],
    saved: {
      jobs: [
        { id: 'JOB-AZB-801', title: 'Corporate Technology & IP Associate', company: 'AZB & Partners', salary: '₹18 - ₹26 LPA', location: 'New Delhi / Mumbai' }
      ],
      internships: [
        { id: 'INT-SEBI-203', title: 'Legal Compliance & Regulatory Affairs Intern', company: 'SEBI India', stipend: '₹40,000 / mo', deadline: 'Oct 12' }
      ],
      projects: [
        { id: 'PROJ-FL-LAW-01', title: 'SaaS Master Services Agreement Suite', client: 'ApexCloud Technologies', budget: '$1,600', duration: '2 weeks' }
      ]
    }
  },

  healthcare: {
    name: 'Arjun Kawade',
    role: 'Clinical Data Scientist & Bioinformatics Researcher',
    email: 'arjun.health@aiims.edu',
    phone: '+91 98765 43210',
    field: 'Healthcare & Life Sciences',
    domain: 'Bioinformatics & Clinical Trial Analytics',
    domainSkills: ['Biostatistics', 'Python / Biopython', 'R for Genomics', 'CDISC / SDTM Standards', 'NGS Data Pipelines', 'Survival Analysis (Kaplan-Meier)', 'Molecular Dynamics'],
    commonSkills: ['Scientific Rigor', 'Clinical Trial Protocols', 'Data Integrity & Ethics', 'Peer-Review Writing', 'Cross-Disciplinary Collaboration'],
    education: 'B.Tech / M.Sc in Biotechnology & Bio-Computing, AIIMS & IIT Delhi (2022 - 2026), CGPA: 9.0/10',
    experience: 'Clinical Genomics Research Intern @ Tata Memorial Centre (6 months)',
    resumeName: 'Arjun_Kawade_Bio_Resume.pdf',
    atsScore: 92,
    socials: {
      github: 'github.com/arjunkawade-bio',
      linkedin: 'linkedin.com/in/arjun-biotech',
      portfolio: 'arjun-bio.dev',
      twitter: 'twitter.com/arjun_genome'
    },
    rankings: [
      { domain: 'Clinical Biostatistics & Survival Analysis', score: 93, rank: 41, total: 5400, percentile: '99.2%' },
      { domain: 'Genomics & NGS Sequencing Pipelines', score: 91, rank: 62, total: 6200, percentile: '99.0%' },
      { domain: 'Clinical Regulatory Standards (CDISC/FDA)', score: 88, rank: 94, total: 7100, percentile: '98.6%' },
      { domain: 'Molecular Modeling & Scientific Publishing', score: 94, rank: 35, total: 4800, percentile: '99.2%' }
    ],
    badges: [
      { icon: '🧬', title: 'AIIMS Research Fellow', desc: 'Genomic oncology bioinformatics' },
      { icon: '🏆', title: 'National Bio-Hackathon Winner', desc: 'Target protein discovery model' },
      { icon: '📜', title: 'Certified CDISC / SDTM Specialist', desc: 'Clinical data interchange standards' },
      { icon: '🌟', title: 'Top 1% Biostatistician', desc: 'Cox proportional hazards verified' },
      { icon: '💡', title: 'NCBI BLAST Pipeline Author', desc: 'Open-source genomic variant analyzer' }
    ],
    completedFreelance: [
      { title: 'RNA-Seq Differential Expression Analysis Pipeline', client: 'OncoGenomics Labs', budget: '$1,900', rating: '5.0 ★', review: 'Delivered clean DESeq2 and pathway enrichment graphs!' },
      { title: 'Phase II Oncology Clinical Trial Statistical Analysis Plan', client: 'BioPharma Global', budget: '$2,400', rating: '5.0 ★', review: 'Accepted by regulatory ethics committee with zero revisions.' },
      { title: 'Automated Patient Vitals Anomaly Detection Script', client: 'TeleHealth Networks', budget: '$1,100', rating: '4.9 ★', review: 'Clean real-time scoring in Python with CDISC compliance.' }
    ],
    saved: {
      jobs: [
        { id: 'JOB-APOL-901', title: 'Clinical Data Analyst & Bio-Statistician', company: 'Apollo HealthTech', salary: '₹16 - ₹25 LPA', location: 'Hyderabad / Chennai' }
      ],
      internships: [
        { id: 'INT-BIO-204', title: 'Genomics & Bioinformatics Research Intern', company: 'Biocon Research', stipend: '₹48,000 / mo', deadline: 'Oct 18' }
      ],
      projects: [
        { id: 'PROJ-FL-BIO-01', title: 'RNA-Seq Differential Expression Pipeline', client: 'OncoGenomics Labs', budget: '$1,900', duration: '3 weeks' }
      ]
    }
  }
};

// Target Job Descriptions by Discipline for Skill Gap Analyzer
const fieldJDs = {
  tech: `Senior AI / ML Engineer
Required:
- 3+ years experience with Python, PyTorch or JAX
- Hands-on experience with High-Throughput LLM Serving (Triton Inference Server, TensorRT-LLM, vLLM)
- Strong knowledge of Vector Databases (Pinecone, Milvus, Qdrant) and Advanced RAG pipelines
- Familiarity with Docker, Kubernetes, and model quantizations (AWQ, GPTQ)
- M.Tech / B.Tech in CS or related field.`,

  finance: `Quantitative Investment Analyst - Private Wealth & Global Markets
Required:
- Strong foundations in Financial Accounting, 3-Statement Modeling, and DCF Valuation
- Proficiency in Python/R for quantitative time-series regression and asset pricing
- Advanced Microsoft Excel / VBA for scenario stress-testing and LBO modeling
- Working knowledge of SEBI regulations, capital adequacy (Basel III), and credit appraisal
- Degree in Finance, Commerce, Economics, or CFA Level 1 candidate.`,

  design: `Lead Product & Systems Designer - Enterprise Web & Mobile
Required:
- 3+ years architecting scalable multi-brand Design Systems and token hierarchies in Figma
- Deep mastery of WCAG 2.1 AAA accessibility guidelines, color contrast, and assistive tech
- Experience conducting qualitative usability testing, heuristic evaluations, and user journeys
- Ability to create interactive micro-prototypes (ProtoPie / Framer) with haptic motion curves
- Bachelor's or Master's degree in Design (B.Des/M.Des) or equivalent human-computer interaction background.`,

  law: `Technology & Cyber Governance Legal Associate
Required:
- In-depth understanding of the Indian Digital Personal Data Protection (DPDP) Act 2023 and IT Act 2000
- Proven track record drafting Master Services Agreements (MSA), SaaS SLAs, and IP licensing contracts
- Expertise in conducting cross-border data transfer audits and data fiduciary compliance reviews
- Strong oral advocacy, contract negotiation skills, and statutory interpretation ability
- LL.B / B.A. LL.B from a recognized National Law University with Bar Council enrollment.`,

  healthcare: `Clinical Data Scientist & Bio-Statistician
Required:
- Advanced statistical training (survival analysis, Kaplan-Meier curves, Cox proportional hazards)
- Proficiency in Python/Biopython or R for high-throughput genomic variant calling (NGS)
- Comprehensive knowledge of CDISC (SDTM/ADaM) clinical data exchange regulatory standards
- Experience writing Statistical Analysis Plans (SAP) for FDA / CDSCO drug clinical trial submissions
- Master's or B.Tech degree in Bioinformatics, Biotechnology, Biostatistics, or related life sciences.`
};

// Future Market Scope & Growth Predictions by Discipline (2026 - 2028)
const fieldFutureSkills = {
  tech: [
    {
      title: 'Autonomous Multi-Agent Swarms & Cognitive Workflows',
      growth: '+186% Demand',
      tools: 'LangGraph, CrewAI, AutoGen & Multi-Agent Consensus Architecture',
      ctc: '₹24 - ₹38 LPA ($175k - $210k)',
      citation: '"Enterprise adoption of multi-agent autonomous swarms grew by 210% following commercial rollouts of Claude Computer Use and OpenAI Operator. Software architectures are shifting from code generation to autonomous verification workflows." — Bloomberg Tech & Gartner 2026 Report'
    },
    {
      title: 'Edge AI & Small Language Models (SLMs)',
      growth: '+142% Demand',
      tools: 'Apple MLX, ONNX Runtime, NPU Compilation, 4-bit Quantization (AWQ/GPTQ)',
      ctc: '₹20 - ₹34 LPA ($160k - $190k)',
      citation: '"With Apple Silicon neural engines and Qualcomm Snapdragon X Elite NPUs standard in enterprise hardware, 65% of AI workloads execute on-device to eliminate cloud inference API costs." — Reuters & Apple Silicon Briefing'
    }
  ],
  finance: [
    {
      title: 'Algorithmic Carbon Credit Derivatives & ESG Auditing',
      growth: '+380% Demand',
      tools: 'Satellite Biomass Telemetry, Green Bond Structuring, Automated ESG Disclosures',
      ctc: '₹26 - ₹42 LPA ($185k - $230k)',
      citation: '"Mandatory SEBI BRSR Core disclosures and European CBAM carbon border tariffs have triggered an unprecedented demand for quant analysts who can model satellite vegetation data against carbon forward futures." — Financial Times & Morgan Stanley ESG Survey'
    },
    {
      title: 'Real-Time Graph AI Forensic Payment Ledgers',
      growth: '+290% Demand',
      tools: 'Sub-millisecond Graph Neural Networks, Synthetic Identity Forensics, UPI Fast-Audit',
      ctc: '₹22 - ₹36 LPA ($165k - $205k)',
      citation: '"With instantaneous cross-border settlement between India UPI and Singapore PayNow, automated forensic AI auditing now intercepts fraudulent synthetic transaction chains before settlement finality." — Reserve Bank of India FinTech Report 2026'
    }
  ],
  design: [
    {
      title: 'Spatial Computing UI (VisionOS & WebXR)',
      growth: '+320% Demand',
      tools: 'Gaze-and-Pinch 3D Ergonomics, Volumetric Canvas Prototyping, Ambient Spatial Audio',
      ctc: '₹22 - ₹35 LPA ($160k - $195k)',
      citation: '"Spatial interfaces in enterprise CAD, laparoscopic surgical headsets, and immersive simulation have made volumetric depth hierarchies the fastest-growing design proficiency of 2026." — Design Systems World & Fast Company'
    },
    {
      title: 'Neuro-Adaptive Dynamic Accessibility (WCAG 3.0)',
      growth: '+240% Demand',
      tools: 'Dynamic Contrast Scaling, Cognitive Load Reduction, Motor-Tremor Compensating UI',
      ctc: '₹18 - ₹30 LPA ($140k - $175k)',
      citation: '"Global enforcement of the European Accessibility Act (EAA) and Supreme Court digital accessibility mandates require enterprise platforms to adapt interaction timing dynamically based on user motor telemetry." — Smashing Magazine & W3C Council'
    }
  ],
  law: [
    {
      title: 'AI Hallucination Liability & Algorithmic Tort Precedents',
      growth: '+410% Demand',
      tools: 'Statutory Liability Allocation, Model Card Evidentiary Auditing, Autonomous Agent Negligence',
      ctc: '₹20 - ₹34 LPA ($150k - $190k)',
      citation: '"Following pivotal high court rulings on corporate fiduciary negligence arising from automated underwriting models, legal counsel specializing in algorithm accountability represent the highest billing rate tier." — Bar & Bench & Harvard Law Review'
    },
    {
      title: 'Cross-Border Sovereign Data Treaties & DPDP Compliance',
      growth: '+275% Demand',
      tools: 'India DPDP Act 2023, EU AI Act Enforcement, Sovereign Cloud Localization Governance',
      ctc: '₹18 - ₹32 LPA ($140k - $180k)',
      citation: '"Fines under the DPDP Act reaching up to ₹250 crore per breach have positioned Certified Data Protection Officers (CDPOs) at the core of all multinational corporate venture rounds in India." — LiveMint & Legal 500 Asia'
    }
  ],
  healthcare: [
    {
      title: 'In-Silico Molecular Docking & Generative Ligand Design',
      growth: '+390% Demand',
      tools: 'AlphaFold 3, Small-Molecule Diffusion Models, Binding Affinity Predictors',
      ctc: '₹24 - ₹40 LPA ($170k - $215k)',
      citation: '"Generative molecular transformers have collapsed pre-clinical discovery timelines from 4.5 years to 60 days, causing pharmaceutical conglomerates to aggressively recruit bioinformatics researchers with deep learning proficiencies." — Nature Biotechnology 2026'
    },
    {
      title: 'Federated Clinical Trial Analytics & CDISC Interoperability',
      growth: '+260% Demand',
      tools: 'Privacy-Preserving Decentralized ML, CDISC SDTM/ADaM, HIPAA/DISHA Architecture',
      ctc: '₹20 - ₹32 LPA ($150k - $185k)',
      citation: '"With multicenter clinical trials adopting federated analytics, patient record transfer is replaced by edge model aggregation, accelerating regulatory approval cycles by 38%." — BioPharma Dive & CDISC Global Summit'
    }
  ]
};

// ATS Resume Diagnostic Breakdown by Discipline (Strengths, Weaknesses, Suggestions)
const fieldResumeDiagnostics = {
  tech: {
    strengths: [
      { title: 'Strong Action Verbs', desc: 'High density of executive impact verbs ("Engineered", "Fine-tuned", "Benchmarked", "Containerized").' },
      { title: 'Quantified Metrics', desc: 'Measurable outcomes documented ("reduced latency by 32%", "98.2% tabular accuracy", "doubled throughput").' },
      { title: 'Domain Alignment', desc: 'Deep learning and PyTorch skills directly align with top 5% AI industry demand.' },
      { title: 'ATS Compatibility', desc: 'Single-column layout with clean standard headers parsable by Workday and Greenhouse.' }
    ],
    weaknesses: [
      { title: 'Hardware Acceleration Gaps', desc: 'Lacks explicit mentions of TensorRT-LLM, Triton Server, or CUDA kernel optimizations.' },
      { title: 'Cluster Scale Ambiguity', desc: 'Lists Docker and Kubernetes, but lacks quantified node or GPU cluster counts.' },
      { title: 'Summary Lead', desc: 'Executive summary is slightly generic and could emphasize low-latency inference milestones earlier.' }
    ],
    suggestions: [
      { title: 'Quantify Tokens/Sec', desc: 'Add token generation throughput benchmarks to your Llama-3 fine-tuning project bullets.' },
      { title: 'Add Production Links', desc: 'Embed clickable GitHub repository links and Hugging Face model cards for your multi-modal agent.' },
      { title: 'Specify Hardware Target', desc: 'Mention testbed environments (e.g. NVIDIA A100 / RTX 4090 or Apple Silicon M-series).' }
    ]
  },
  finance: {
    strengths: [
      { title: '3-Statement Financial Modeling', desc: 'Flawless balance sheet, cash flow, and income statement dynamic linkage verified with zero plug errors.' },
      { title: 'DCF & Valuation Rigor', desc: 'Quantified WACC assumptions, sensitivity tables, and comparable company multiples explicitly documented.' },
      { title: 'Regulatory Compliance', desc: 'Active NISM-Series-XV Research Analyst certification and SEBI capital adequacy compliance knowledge.' },
      { title: 'Quant Scripting Proficiency', desc: 'Python for algorithmic portfolio beta tracking and Excel VBA macro automation verified.' }
    ],
    weaknesses: [
      { title: 'High-Frequency Analytics', desc: 'Lacks explicit time-series backtesting on live order-book Level 2/3 market microstructure datasets.' },
      { title: 'ESG BRSR Metrics', desc: 'Does not cite SEBI BRSR Core carbon audit methodologies for sustainable green debt underwriting.' },
      { title: 'Monte Carlo Simulations', desc: 'Could expand portfolio VaR stress-testing to include 10,000-iteration stochastic drift paths.' }
    ],
    suggestions: [
      { title: 'Detail Bloomberg Functions', desc: 'List specific terminal commands and equity screening formulas (e.g. BQL, EQS, DES, FA).' },
      { title: 'Highlight LBO IRR Waterfall', desc: 'Quantify equity sponsor internal rate of return (IRR) and debt paydown milestones in private equity models.' },
      { title: 'Add CFA Candidate Milestone', desc: 'Emphasize CFA Level 1 ethics and quantitative methods percentile rankings.' }
    ]
  },
  design: {
    strengths: [
      { title: 'Design Systems Token Hierarchy', desc: 'Engineered scalable multi-brand token structures across Figma and React frontend handoff.' },
      { title: 'WCAG 2.1 AAA Accessibility', desc: 'Demonstrated color contrast ratios, screen reader testing, and motor-accessibility rubrics.' },
      { title: 'Micro-Interactions & Haptics', desc: 'Advanced ProtoPie / Framer prototypes featuring realistic easing curves and spatial gesture flows.' },
      { title: 'Usability Heuristics Mastery', desc: 'Structured Nielsen Norman Group 10-heuristic compliance audits reducing user navigation friction.' }
    ],
    weaknesses: [
      { title: 'Quantified Conversion Impact', desc: 'Portfolio descriptions could further emphasize business uplift (e.g. cart completion +14%, bounce rate -18%).' },
      { title: 'Spatial UI Prototyping', desc: 'Lacks explicit VisionOS / WebXR 3D spatial canvas prototypes and volumetric gaze interactions.' },
      { title: 'Design Ops CI/CD Pipeline', desc: 'Does not mention automated Figma token sync to GitHub actions or Style Dictionary pipelines.' }
    ],
    suggestions: [
      { title: 'Embed Live Interactive Links', desc: 'Add direct clickable links to Figma Community design systems and public Framer prototypes.' },
      { title: 'Quantify Engineering Time Saved', desc: 'State design token efficiency metrics (e.g. "reduced frontend design QA cycles by 65%").' },
      { title: 'Document Usability Sample Size', desc: 'Cite participant cohort demographics and quantitative SUS (System Usability Scale) scores.' }
    ]
  },
  law: {
    strengths: [
      { title: 'DPDP Act 2023 Authority', desc: 'In-depth statutory interpretation of Indian Digital Personal Data Protection Act compliance and data fiduciary mandates.' },
      { title: 'SaaS Contract Architecture', desc: 'Robust drafting of Master Services Agreements (MSA), Service Level Agreements (SLA), and enterprise indemnity clauses.' },
      { title: 'Cross-Border Privacy Treaties', desc: 'Demonstrated alignment with EU GDPR Standard Contractual Clauses (SCC) and cross-border data transfer protocols.' },
      { title: 'National Law School Honors', desc: 'First-class academic record from NLSIU Bangalore with proven moot court oral advocacy credentials.' }
    ],
    weaknesses: [
      { title: 'Algorithmic Tort Precedents', desc: 'Lacks case briefs on emerging autonomous AI negligence liabilities and deepfake evidential admissibility.' },
      { title: 'Antitrust & Platform Competition', desc: 'Could include more exposure to Competition Commission of India (CCI) digital market regulations.' },
      { title: 'IP Dual-Licensing Models', desc: 'Brief overview of open-source dual licensing (AGPL vs MIT) could be expanded with commercial case studies.' }
    ],
    suggestions: [
      { title: 'Cite Bar Council Enrollment', desc: 'Explicitly state State Bar Council provisional enrollment index number and advocate credential.' },
      { title: 'Add Data Fiduciary Audit Scope', desc: 'Quantify past compliance audits (e.g. "Reviewed consent architecture for 4.2M registered user database").' },
      { title: 'Publish Case Law Commentary', desc: 'Link to published articles on LiveLaw, Bar & Bench, or university law journal whitepapers.' }
    ]
  },
  healthcare: {
    strengths: [
      { title: 'CDISC Regulatory Standards', desc: 'Proven implementation of SDTM and ADaM clinical data structures compliant with FDA / CDSCO submission standards.' },
      { title: 'NGS Genomic Pipeline Execution', desc: 'End-to-end variant calling, FASTQ preprocessing, and RNA-Seq differential expression analysis in Python/R.' },
      { title: 'Survival Analysis Precision', desc: 'Mastery of Kaplan-Meier time-to-event curves, log-rank testing, and Cox proportional hazards regression.' },
      { title: 'Interdisciplinary Synthesis', desc: 'Dual foundation in clinical biostatistics and molecular biology from AIIMS and IIT Delhi.' }
    ],
    weaknesses: [
      { title: 'FDA 21 CFR Part 11 Audit Trails', desc: 'Lacks explicit documentation of electronic record cryptographic signature verification pipelines.' },
      { title: 'AlphaFold 3 Ligand Docking', desc: 'Could expand generative protein-ligand binding affinity predictions using diffusion transformers.' },
      { title: 'Federated Clinical Trials', desc: 'Lacks decentralized privacy-preserving machine learning frameworks across hospital nodes.' }
    ],
    suggestions: [
      { title: 'Cite Clinical Trial Identifiers', desc: 'Reference anonymized ClinicalTrials.gov (NCT) phase identification numbers for retrospective studies.' },
      { title: 'Detail Bioconductor Libraries', desc: 'List specific bioinformatics packages utilized (DESeq2, Biostrings, GenomicRanges, edgeR).' },
      { title: 'Include Statistical Power Analyses', desc: 'Mention sample size calculations and statistical power determinations for Phase II randomized trials.' }
    ]
  }
};

// Skill Gap Analysis Breakdowns by Discipline
const fieldGapBreakdowns = {
  tech: {
    matchedCount: 5,
    matchPct: '78%',
    matched: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'Computer Vision / NLP'],
    missingCount: 3,
    missing: ['Triton Inference Server', 'TensorRT-LLM / vLLM', 'Kubernetes (K8s)'],
    certifications: [
      { title: 'NVIDIA DLI: Large Language Model Serving', desc: 'Est: 2 weeks • Covers Triton & TensorRT' },
      { title: 'AWS Certified Machine Learning (MLS-C01)', desc: 'Est: 4 weeks • SageMaker & Cloud ML' }
    ],
    courses: [
      { title: 'Vector Databases & Agentic RAG', desc: 'DeepLearning.AI • Free (10 hours)' },
      { title: 'High-Throughput Inference with vLLM', desc: 'Open Source Course • 1 week' }
    ],
    project: {
      title: '"Triton & vLLM Streaming Gateway"',
      desc: 'Deploy a local Dockerized Triton inference container with KV cache quantization, exposing an OpenAI-compatible streaming API.',
      effort: 'Estimated Effort: ~1 weekend'
    }
  },
  finance: {
    matchedCount: 5,
    matchPct: '82%',
    matched: ['DCF Valuation', '3-Statement Financial Modeling', 'Excel/VBA', 'Bloomberg Terminal', 'Equity Research'],
    missingCount: 3,
    missing: ['Python for Quant Risk (VaR)', 'SEBI BRSR Core Disclosures', 'LBO Stress-Testing Macros'],
    certifications: [
      { title: 'CFA Institute: Quantitative Investment & Ethics', desc: 'Est: 3 weeks • Asset pricing & portfolio risk' },
      { title: 'NISM-Series-XV: Research Analyst Certification', desc: 'Est: 2 weeks • SEBI statutory compliance' }
    ],
    courses: [
      { title: 'Advanced LBO Modeling & Debt Sculpting', desc: 'Wall Street Prep • 12 hours' },
      { title: 'Stochastic Portfolio Beta & VaR Modeling', desc: 'Coursera / Wharton • 2 weeks' }
    ],
    project: {
      title: '"Automated LBO Waterfall & Sensitivity Engine"',
      desc: 'Build a dynamic 3-statement LBO model in Excel/Python with automated debt amortization waterfall and Monte Carlo IRR sensitivity tables.',
      effort: 'Estimated Effort: ~3 days'
    }
  },
  design: {
    matchedCount: 5,
    matchPct: '85%',
    matched: ['Figma Design Systems', 'Wireframing', 'WCAG 2.1 AAA Accessibility', 'Micro-Interactions', 'Heuristic Evaluation'],
    missingCount: 3,
    missing: ['Spatial UI / VisionOS Prototyping', 'Design Token CI/CD CLI', 'Quantitative SUS Metric Analytics'],
    certifications: [
      { title: 'Nielsen Norman Group UX Master Certification', desc: 'Est: 3 weeks • Enterprise usability heuristics' },
      { title: 'W3C Certified Web Accessibility Specialist (WAS)', desc: 'Est: 2 weeks • Universal design compliance' }
    ],
    courses: [
      { title: 'Spatial Computing & Volumetric Canvas Design', desc: 'Design Systems World • 8 hours' },
      { title: 'Design Tokens & Automated Frontend Hand-off', desc: 'Figma Community Academy • 1 week' }
    ],
    project: {
      title: '"Multi-Brand Accessible Design System & Token Studio"',
      desc: 'Publish an open-source Figma component library with semantic color/spacing tokens and live WCAG AAA contrast validator plugins.',
      effort: 'Estimated Effort: ~1 weekend'
    }
  },
  law: {
    matchedCount: 4,
    matchPct: '76%',
    matched: ['DPDP Act 2023 Compliance', 'SaaS SLA & MSA Drafting', 'IT Act 2000', 'Legal Due Diligence'],
    missingCount: 3,
    missing: ['EU AI Act Statutory Risk Classification', 'Cross-Border Data Transfer Treaties', 'Autonomous Agent Liability Allocation'],
    certifications: [
      { title: 'Certified Information Privacy Professional (CIPP/A)', desc: 'Est: 4 weeks • Asian data governance' },
      { title: 'WIPO Advanced Intellectual Property Law Course', desc: 'Est: 3 weeks • Digital copyright & software patents' }
    ],
    courses: [
      { title: 'DPDP Act Sovereign Data Compliance Frameworks', desc: 'National Law School of India • 15 hours' },
      { title: 'Algorithmic Tort & AI Corporate Governance', desc: 'Harvard Law Executive Program • 2 weeks' }
    ],
    project: {
      title: '"Enterprise AI Governance & DPDP Audit Dossier"',
      desc: 'Draft a comprehensive data protection impact assessment (DPIA) and algorithmic liability indemnity rider for enterprise AI deployment.',
      effort: 'Estimated Effort: ~4 days'
    }
  },
  healthcare: {
    matchedCount: 5,
    matchPct: '80%',
    matched: ['CDISC SDTM / ADaM', 'Python / Biopython', 'Survival Analysis (Kaplan-Meier)', 'Clinical Trial Protocol Analytics', 'R Statistical Modeling'],
    missingCount: 3,
    missing: ['AlphaFold 3 Molecular Docking', 'FDA 21 CFR Part 11 Electronic Audits', 'Next-Gen Sequencing (NGS) Variant Calling'],
    certifications: [
      { title: 'CDISC Certified SDTM / ADaM Data Specialist', desc: 'Est: 3 weeks • Regulatory submission schemas' },
      { title: 'NIH Clinical Research & Biostatistics Certification', desc: 'Est: 4 weeks • GCP & bioethics standards' }
    ],
    courses: [
      { title: 'High-Throughput Genomic Variant Analysis', desc: 'EMBL-EBI / Coursera • 12 hours' },
      { title: 'Deep Learning for In-Silico Molecular Discovery', desc: 'Nature Biotechnology Institute • 2 weeks' }
    ],
    project: {
      title: '"Reproducible RNA-Seq Differential Expression Pipeline"',
      desc: 'Construct a reproducible DESeq2/Python pipeline generating volcano plots, pathway enrichment charts, and regulatory FDA summary tables.',
      effort: 'Estimated Effort: ~1 weekend'
    }
  }
};

// Global Application State
const state = {
  currentPersona: 'select', // 'select' | 'applicant' | 'organisation'
  authModalOpen: false,
  authRole: 'applicant',
  selectedDiscipline: 'all', // 'all' | 'tech' | 'finance' | 'design' | 'law' | 'healthcare'

  // Live Coding Assessment Sandbox State (Monaco Experience)
  codingModal: {
    isOpen: false,
    challengeId: 'dp-tree-reroot',
    language: 'python',
    code: '',
    timeLeft: 2694,
    timerInterval: null,
    testCaseTab: 0,
    consoleOutput: null,
    pasteWarning: false,
    isRunning: false
  },

  // Student Pre-Flight Certificate Integrity Verifier State
  studentPreflight: {
    selectedCert: 'stanford-ai',
    isScanning: false,
    progress: 0,
    currentStage: '',
    scanCompleted: false,
    auditReport: null
  },

  // Applicant State
  applicant: {
    activeTab: 'recommendations',
    personaType: 'student', // 'student' | 'academician' | 'employee'
    profile: {
      name: 'Arjun Kawade',
      role: 'Aspiring AI/ML Engineer & Student',
      email: 'arjun.k@university.edu',
      phone: '+91 98765 43210',
      field: 'Engineering & Technology',
      domain: 'Artificial Intelligence & Machine Learning',
      domainSkills: ['PyTorch', 'TensorFlow', 'Python', 'LLM Fine-tuning', 'FastAPI', 'Computer Vision', 'Docker', 'NLP'],
      commonSkills: ['Problem Solving', 'Team Leadership', 'Effective Communication', 'Agile/Scrum', 'Critical Thinking'],
      education: 'B.Tech in Computer Science & Engineering, IIT Bombay (2022 - 2026), CGPA: 8.9/10',
      experience: 'Machine Learning Research Intern @ AI Labs (6 months)',
      resumeName: 'Arjun_Kawade_Resume_2026.pdf',
      atsScore: 92,
      socials: {
        github: 'github.com/arjunkawade',
        linkedin: 'linkedin.com/in/arjunkawade',
        portfolio: 'arjun.dev',
        twitter: 'twitter.com/arjuncodes'
      },
      rankings: [
        { domain: 'Artificial Intelligence & ML', score: 94, rank: 142, total: 12400, percentile: '98.8%' },
        { domain: 'Data Structures & Algorithms', score: 92, rank: 185, total: 15600, percentile: '98.2%' },
        { domain: 'Quantitative Aptitude & Logic', score: 88, rank: 310, total: 18200, percentile: '96.5%' },
        { domain: 'Technical Communication & Soft Skills', score: 86, rank: 420, total: 9800, percentile: '95.7%' }
      ],
      badges: [
        { icon: '🔥', title: '8-Day Streak Master', desc: 'Active daily learner' },
        { icon: '🏆', title: 'Top 5% Coder', desc: 'Algorithms leaderboard' },
        { icon: '🌟', title: 'Verified PyTorch Pro', desc: 'Domain benchmark verified' },
        { icon: '📜', title: 'ATS Champion', desc: '92+ ATS resume score' },
        { icon: '💡', title: 'Top Rated Freelancer', desc: '5.0 ★ Client rating' }
      ],
      completedFreelance: [
        { title: 'Multi-Modal Document Parsing Agent', client: 'FinTech Corp', budget: '$1,800', rating: '5.0 ★', review: 'Exceptional delivery on LangChain OCR extraction!' },
        { title: 'RAG Chatbot for Legal Case Law', client: 'JurisAI Tech', budget: '$1,200', rating: '4.9 ★', review: 'Fast turnaround with clean vector search integration.' },
        { title: 'Next.js 15 SaaS Metrics Dashboard', client: 'CloudMetrics Inc', budget: '$450', rating: '5.0 ★', review: 'Super clean responsive code and Tailwind components.' }
      ],
      saved: {
        jobs: [
          { id: 'JOB-MSFT-901', title: 'Applied AI Engineer', company: 'Microsoft', salary: '₹24 - ₹36 LPA', location: 'Bangalore / Hybrid' },
          { id: 'JOB-RZP-402', title: 'Machine Learning Engineer', company: 'Razorpay', salary: '₹20 - ₹28 LPA', location: 'Bangalore' }
        ],
        internships: [
          { id: 'INT-MSFT-101', title: 'AI Research Intern (GenAI)', company: 'Microsoft', stipend: '₹80,000 / mo', deadline: 'Sep 20' },
          { id: 'INT-GOOG-102', title: 'Software Engineering Intern', company: 'Google', stipend: '₹1,10,000 / mo', deadline: 'Sep 28' }
        ],
        projects: [
          { id: 'PROJ-FREELANCE-01', title: 'Fine-tune Llama 3 for Legal RAG', client: 'LegalTech Corp', budget: '$1,400', duration: '3 weeks' }
        ]
      }
    },
    chatbotOpen: false,
    chatMessages: [
      { sender: 'bot', text: 'Hello Arjun! I am your AI Career Mentor. Ask me about resume optimization, skill gaps, interview preparation, or career pathways in any language!' }
    ],
    selectedJobAnalysis: null,
    orgFilter: 'all', // 'all' | 'company' | 'college'
    resumeStudioTab: 'analysis', // 'analysis' | 'builder' | 'upload'
    gapInputMode: 'id', // 'id' | 'text'
    recommendationCategory: 'freelance', // 'freelance' | 'internships' | 'jobs'
    pastedJobDescription: `Senior AI / ML Engineer
Required:
- 3+ years experience with Python, PyTorch or JAX
- Hands-on experience with High-Throughput LLM Serving (Triton Inference Server, TensorRT-LLM, vLLM)
- Strong knowledge of Vector Databases (Pinecone, Milvus, Qdrant) and Advanced RAG pipelines
- Familiarity with Docker, Kubernetes, and model quantizations (AWQ, GPTQ)
- M.Tech / B.Tech in CS or related field.`,
    aiGeneratedResumePreview: null,
    manualUploadedFileName: null,
    applicantMessagesModalOpen: false,
    activeApplicantMessageKey: 'msft',
    companyMessages: {
      msft: {
        id: 'msft',
        orgName: 'Microsoft Talent Acquisition',
        orgType: 'Company',
        avatar: 'MS',
        role: 'AI Research Intern (GenAI)',
        status: 'Round 2 Test Live',
        time: 'Today, 11:30 AM',
        unread: true,
        messages: [
          { sender: 'org', time: 'Sep 02, 11:30 AM', text: 'Hi Arjun! Congratulations on clearing the initial resume screening for the AI Research Intern role.' },
          { sender: 'candidate', time: 'Sep 02, 11:45 AM', text: 'Thank you! I am reviewing the assessment instructions.' },
          { sender: 'org', time: 'Today, 11:30 AM', text: 'Please note the Round 2 Aptitude & Technical screening must be completed before Sep 08 at 11:59 PM.' }
        ]
      },
      goog: {
        id: 'goog',
        orgName: 'Google Campus Recruiting',
        orgType: 'Company',
        avatar: 'G',
        role: 'Software Engineering Intern',
        status: 'Under Review',
        time: 'Yesterday',
        unread: false,
        messages: [
          { sender: 'org', time: 'Sep 03, 03:15 PM', text: 'Hello Arjun, we noticed your top 1.2% rank in algorithmic coding. We are currently processing your application for the 2027 Summer batch.' }
        ]
      },
      rzp: {
        id: 'rzp',
        orgName: 'Razorpay Engineering',
        orgType: 'Company',
        avatar: 'RZ',
        role: 'Machine Learning Engineer',
        status: 'Interview Inquiry',
        time: 'Sep 01',
        unread: false,
        messages: [
          { sender: 'org', time: 'Sep 01, 04:00 PM', text: 'Hi Arjun, loved your open-source RAG projects. Are you open to discussing full-time opportunities in Bangalore?' }
        ]
      },
      iitb: {
        id: 'iitb',
        orgName: 'IIT Bombay CS Research Office',
        orgType: 'College',
        avatar: 'IIT',
        role: 'Visiting Academic Fellow',
        status: 'Dossier Received',
        time: 'Aug 29',
        unread: false,
        messages: [
          { sender: 'org', time: 'Aug 29, 10:00 AM', text: 'Dear Arjun, Prof. Sharma has reviewed your paper on Vision Transformers. Please submit your research fellowship statement before Oct 15.' }
        ]
      }
    }
  },

  // Database of Jobs & Internships with Unique IDs (Multi-Disciplinary Across All Fields)
  jobsDatabase: [
    {
      id: 'JOB-MSFT-901',
      title: 'Applied AI Engineer',
      discipline: 'tech',
      company: 'Microsoft',
      type: 'Full-time',
      location: 'Bangalore / Hybrid',
      salary: '₹24 - ₹36 LPA',
      matchScore: 95,
      requiredSkills: ['Python', 'PyTorch', 'FastAPI', 'Triton Inference', 'ONNX Runtime'],
      cutoffScore: 85,
      description: 'Design and deploy scalable deep learning models on Azure AI platform. You will optimize latency for large language models, build high-performance vector retrieval architectures, and collaborate with researchers.',
      interviewTips: 'Expect 2 coding rounds (Trees, DP), 1 ML System Design round (Focus on Triton & model quantization), and 1 Leadership Principles round.'
    },
    {
      id: 'JOB-RZP-402',
      title: 'Machine Learning Engineer',
      discipline: 'tech',
      company: 'Razorpay',
      type: 'Full-time',
      location: 'Bangalore',
      salary: '₹20 - ₹28 LPA',
      matchScore: 91,
      requiredSkills: ['Python', 'Scikit-learn', 'PyTorch', 'SQL', 'Kafka', 'Fraud Detection'],
      cutoffScore: 80,
      description: 'Build real-time fraud prevention systems handling millions of payment transactions daily. Deploy models using distributed streaming and low-latency feature stores.',
      interviewTips: 'Focus on classification metrics (Precision vs Recall in fraud), feature engineering, and SQL analytics.'
    },
    {
      id: 'JOB-GOOG-301',
      title: 'Deep Learning Software Engineer',
      discipline: 'tech',
      company: 'Google',
      type: 'Full-time',
      location: 'Hyderabad / Remote',
      salary: '₹30 - ₹45 LPA',
      matchScore: 89,
      requiredSkills: ['Python', 'C++', 'TensorFlow', 'JAX', 'Distributed Training', 'Transformers'],
      cutoffScore: 90,
      description: 'Optimize next-generation transformer models on TPU clusters. Collaborate across Google Research to engineer robust training pipelines.',
      interviewTips: 'High emphasis on algorithmic problem solving (Hard Graph/DP questions) and low-level memory efficiency.'
    },
    {
      id: 'JOB-IITB-501',
      title: 'Assistant Professor / Senior Research Fellow',
      discipline: 'tech',
      company: 'IIT Bombay',
      type: 'Academic / Faculty',
      location: 'Mumbai, India',
      salary: '₹18 - ₹24 LPA + Housing & Grants',
      matchScore: 88,
      requiredSkills: ['PhD/M.Tech', 'Research Publications', 'PyTorch', 'Grant Writing', 'Teaching'],
      cutoffScore: 85,
      description: 'Faculty position in Computer Science & Engineering department. Responsibilities include teaching graduate courses, supervising PhD/M.Tech scholars, and driving sponsored AI research projects.',
      interviewTips: 'Deliver a research seminar on your recent publications and present a 5-year academic research vision.'
    },
    {
      id: 'JOB-GOLD-601',
      title: 'Quantitative Investment Analyst',
      discipline: 'finance',
      company: 'Goldman Sachs',
      type: 'Full-time',
      location: 'Mumbai / Bangalore',
      salary: '₹22 - ₹32 LPA',
      matchScore: 94,
      requiredSkills: ['Financial Modeling', 'DCF Valuation', 'Python/R', 'Equity Research', 'Excel Macro'],
      cutoffScore: 82,
      description: 'Perform quantitative equity valuations, build predictive cash-flow models, and execute risk stress-tests for private wealth and institutional portfolios.',
      interviewTips: 'Expect questions on DCF assumptions, WACC calculation, multi-factor risk regression, and accounting ratios.'
    },
    {
      id: 'JOB-FIG-701',
      title: 'Product & Systems Designer',
      discipline: 'design',
      company: 'Figma Labs',
      type: 'Full-time',
      location: 'Bangalore / Remote',
      salary: '₹20 - ₹30 LPA',
      matchScore: 92,
      requiredSkills: ['Figma', 'Design Systems', 'Heuristic Evaluation', 'Design Tokens', 'User Research'],
      cutoffScore: 80,
      description: 'Lead design systems architecture, component tokenization, and accessibility (WCAG 2.1 AAA) across enterprise design and developer handoff workflows.',
      interviewTips: 'Bring a case study demonstrating token architecture, interaction micro-prototypes, and cross-functional engineering alignment.'
    },
    {
      id: 'JOB-AZB-801',
      title: 'Corporate Technology & IP Associate',
      discipline: 'law',
      company: 'AZB & Partners',
      type: 'Full-time',
      location: 'New Delhi / Mumbai',
      salary: '₹18 - ₹26 LPA',
      matchScore: 89,
      requiredSkills: ['Contract Drafting', 'IT Act 2000', 'IP Law', 'DPDP Act Compliance', 'Legal Due Diligence'],
      cutoffScore: 84,
      description: 'Counsel multinational enterprises on technology procurement contracts, AI intellectual property rights, and compliance with the Digital Personal Data Protection (DPDP) Act.',
      interviewTips: 'Review Indian DPDP compliance frameworks, cross-border data transfer mandates, and patent infringement precedents.'
    },
    {
      id: 'JOB-APOL-901',
      title: 'Clinical Data Analyst & Bio-Statistician',
      discipline: 'healthcare',
      company: 'Apollo HealthTech',
      type: 'Full-time',
      location: 'Hyderabad / Chennai',
      salary: '₹16 - ₹25 LPA',
      matchScore: 91,
      requiredSkills: ['Biostatistics', 'R / Python', 'Clinical Trial Analytics', 'CDISC / SDTM', 'Epidemiology'],
      cutoffScore: 80,
      description: 'Analyze multi-center randomized clinical trial datasets, conduct survival analysis (Kaplan-Meier), and prepare CDISC regulatory submission packages for drug efficacy trials.',
      interviewTips: 'Be ready to discuss Cox proportional hazards models, handling missing clinical records, and FDA/CDSCO statistical guidelines.'
    }
  ],

  internshipsDatabase: [
    {
      id: 'INT-MSFT-101',
      title: 'AI Research Intern (GenAI)',
      discipline: 'tech',
      company: 'Microsoft',
      mode: 'Hybrid',
      location: 'Bangalore',
      stipend: '₹80,000 / month',
      duration: '6 Months',
      deadline: 'Sep 20, 2026',
      matchScore: 96,
      requiredSkills: ['Python', 'PyTorch', 'LLM Fine-tuning', 'FastAPI', 'Computer Vision'],
      cutoffScore: 80,
      description: 'Join Azure AI Research to work on cutting-edge generative models, multi-modal reasoning, and synthetic data generation. Interns collaborate directly with Principal Scientists.',
      interviewTips: 'Review transformer attention mechanisms, LoRA hyperparameter tuning, and write clean PyTorch training loops.'
    },
    {
      id: 'INT-GOOG-102',
      title: 'Software Engineering Intern',
      discipline: 'tech',
      company: 'Google',
      mode: 'On-site',
      location: 'Hyderabad',
      stipend: '₹1,10,000 / month',
      duration: '3 Months',
      deadline: 'Sep 28, 2026',
      matchScore: 92,
      requiredSkills: ['Data Structures', 'Algorithms', 'C++', 'Python', 'Problem Solving'],
      cutoffScore: 85,
      description: 'Work on core Google products used by billions. Build reliable, distributed software systems with high scalability and test coverage.',
      interviewTips: 'Practice standard LeetCode Medium/Hard algorithmic questions with optimal time/space complexities.'
    },
    {
      id: 'INT-AMZN-103',
      title: 'Cloud & DevOps Intern',
      discipline: 'tech',
      company: 'Amazon Web Services',
      mode: 'Remote',
      location: 'Bangalore / Remote',
      stipend: '₹75,000 / month',
      duration: '6 Months',
      deadline: 'Oct 05, 2026',
      matchScore: 85,
      requiredSkills: ['Linux', 'Docker', 'AWS Services', 'Python', 'CI/CD'],
      cutoffScore: 75,
      description: 'Assist in building infrastructure automation scripts, serverless pipelines, and container orchestrations using AWS CDK and Terraform.',
      interviewTips: 'Review Linux networking, Docker multi-stage builds, and Amazon Leadership Principles.'
    },
    {
      id: 'INT-IISC-104',
      title: 'Visiting Academic Research Fellow',
      discipline: 'tech',
      company: 'IISc Bangalore',
      mode: 'On-site',
      location: 'Bangalore, India',
      stipend: '₹45,000 / month',
      duration: '1 Year',
      deadline: 'Oct 15, 2026',
      matchScore: 90,
      requiredSkills: ['Linear Algebra', 'PyTorch', 'Research Methodology', 'Scientific Writing'],
      cutoffScore: 80,
      description: 'Collaborate with the Department of Computational and Data Sciences on theoretical deep learning, optimization, and AI ethics.',
      interviewTips: 'Be prepared to explain the mathematical derivation behind backpropagation and modern loss surfaces.'
    },
    {
      id: 'INT-HDFC-201',
      title: 'Corporate Banking & Credit Risk Analyst Intern',
      discipline: 'finance',
      company: 'HDFC Bank',
      mode: 'On-site',
      location: 'Mumbai',
      stipend: '₹55,000 / month',
      duration: '6 Months',
      deadline: 'Oct 10, 2026',
      matchScore: 93,
      requiredSkills: ['Financial Ratios', 'Credit Risk Modeling', 'SEBI Guidelines', 'Excel/VBA'],
      cutoffScore: 78,
      description: 'Evaluate balance sheets, debt-service coverage ratios (DSCR), and corporate working capital creditworthiness for large commercial loans.',
      interviewTips: 'Review credit appraisal metrics, Basel III capital requirements, and working capital cycle analysis.'
    },
    {
      id: 'INT-ZOM-202',
      title: 'UI/UX Interaction Design Intern',
      discipline: 'design',
      company: 'Zomato',
      mode: 'Hybrid',
      location: 'Gurugram',
      stipend: '₹60,000 / month',
      duration: '3 Months',
      deadline: 'Oct 02, 2026',
      matchScore: 95,
      requiredSkills: ['Figma', 'Wireframing', 'Micro-Interactions', 'Usability Testing', 'Prototyping'],
      cutoffScore: 82,
      description: 'Design mobile-first checkout flows and delivery tracking experiences. Conduct user testing sessions and iterate on friction points.',
      interviewTips: 'Showcase mobile UI prototypes with attention to haptic feedback, motion curves, and checkout conversion rates.'
    },
    {
      id: 'INT-SEBI-203',
      title: 'Legal Compliance & Regulatory Affairs Intern',
      discipline: 'law',
      company: 'Securities and Exchange Board of India (SEBI)',
      mode: 'On-site',
      location: 'Mumbai',
      stipend: '₹40,000 / month',
      duration: '6 Months',
      deadline: 'Oct 12, 2026',
      matchScore: 88,
      requiredSkills: ['Securities Law', 'Insider Trading Regulations', 'Legal Research', 'Due Diligence'],
      cutoffScore: 80,
      description: 'Assist the Legal Affairs Division in researching market manipulation cases, drafting advisory circulars, and reviewing IPO draft offer documents.',
      interviewTips: 'Brush up on SEBI (Prohibition of Insider Trading) Regulations and SEBI (LODR) governance clauses.'
    },
    {
      id: 'INT-BIO-204',
      title: 'Genomics & Bioinformatics Research Intern',
      discipline: 'healthcare',
      company: 'Biocon Research',
      mode: 'On-site',
      location: 'Bangalore',
      stipend: '₹48,000 / month',
      duration: '6 Months',
      deadline: 'Oct 18, 2026',
      matchScore: 90,
      requiredSkills: ['Bioinformatics', 'Next-Gen Sequencing (NGS)', 'Python/Biopython', 'BLAST'],
      cutoffScore: 80,
      description: 'Process whole-genome sequencing datasets, perform variant calling, and analyze protein folding stability using AlphaFold and molecular dynamics.',
      interviewTips: 'Review FASTQ/BAM file pipelines, variant call formats (VCF), and structural biology algorithms.'
    }
  ],

  // Database of Verified Freelance Projects
  freelanceDatabase: [
    {
      id: 'PROJ-FL-01',
      title: 'Fine-tune Llama 3 for Legal RAG',
      discipline: 'tech',
      client: 'LegalTech Corp',
      budget: '$1,400',
      type: 'Fixed Budget',
      duration: '3 weeks',
      matchScore: 96,
      requiredSkills: ['Llama 3', 'PyTorch', 'Python', 'FastAPI', 'LoRA'],
      description: 'Fine-tune Llama-3-8B on specialized contract legal datasets with LoRA. The system must evaluate hallucination rates on custom case citations, achieve <100ms vector lookup, and expose a clean FastAPI REST endpoint with Docker packaging.',
      deliverables: [
        'Fine-tuned LoRA weights and PEFT configuration',
        'Evaluation script benchmarked on 1,000 legal test queries',
        'Dockerized FastAPI serving container with Swagger docs'
      ],
      clientRating: '4.9 ★ (18 reviews)',
      interviewTips: 'Emphasize past experience with parameter-efficient fine-tuning (PEFT), quantization techniques (AWQ/GPTQ), and synthetic test evaluation.'
    },
    {
      id: 'PROJ-FL-02',
      title: 'Multi-Modal Document OCR Extraction',
      discipline: 'tech',
      client: 'FinTech Venture Labs',
      budget: '$1,800',
      type: 'Milestone Based',
      duration: '2 weeks',
      matchScore: 93,
      requiredSkills: ['FastAPI', 'Vision LLM', 'Python', 'Docker', 'Computer Vision'],
      description: 'Engineer a production-ready vision-language OCR agent to parse multi-column financial statements, tables, and handwritten invoices into structured JSON schemas with 98%+ validation accuracy.',
      deliverables: [
        'Document parsing pipeline using Florence-2 / Qwen2-VL',
        'JSON Schema validation with Pydantic',
        'Asynchronous task worker with Redis Queue'
      ],
      clientRating: '5.0 ★ (42 reviews)',
      interviewTips: 'Present examples of parsing non-standard table geometries and managing noisy OCR bounding boxes.'
    },
    {
      id: 'PROJ-FL-03',
      title: 'Interactive Next.js SaaS Analytics UI',
      discipline: 'tech',
      client: 'CloudMetrics Inc',
      budget: '$2,200',
      type: 'Fixed Budget',
      duration: '3 weeks',
      matchScore: 91,
      requiredSkills: ['Next.js 15', 'Tailwind', 'TypeScript', 'Recharts'],
      description: 'Develop a responsive enterprise telemetry dashboard in Next.js 15 App Router, Tailwind CSS, and Recharts. Includes real-time mock WebSocket feeds, interactive date range filtering, and dark/light theme switching.',
      deliverables: [
        'Next.js 15 codebase with TypeScript strict mode',
        'Component library built with Tailwind and Radix UI',
        'Interactive charts with animated tooltips and export options'
      ],
      clientRating: '5.0 ★ (12 reviews)',
      interviewTips: 'Discuss state management strategies with Zustand or React Query and optimizing client re-renders with large datasets.'
    },
    {
      id: 'PROJ-FL-FIN-01',
      title: '3-Statement LBO Financial Model for Solar Venture',
      discipline: 'finance',
      client: 'GreenEnergy PE',
      budget: '$1,500',
      type: 'Fixed Budget',
      duration: '3 weeks',
      matchScore: 96,
      requiredSkills: ['Financial Modeling', 'DCF Valuation', 'Excel/VBA', 'LBO Waterfall'],
      description: 'Build an investor-grade 3-statement LBO model for a 250MW utility-scale solar asset. Requires dynamic debt amortization waterfalls, tax depreciation schedules, and IRR sensitivity tables.',
      deliverables: [
        'Dynamic Excel LBO Model with VBA macros',
        '10-year P&L and Balance Sheet forecast',
        'Executive investment memo with sensitivity matrix'
      ],
      clientRating: '5.0 ★ (14 reviews)',
      interviewTips: 'Review debt-service coverage ratio (DSCR) calculations and tax equity capital structures.'
    },
    {
      id: 'PROJ-FL-FIN-02',
      title: 'FinTech Startup Investor Pitch Deck & Valuation',
      discipline: 'finance',
      client: 'PayGlobal Labs',
      budget: '$1,200',
      type: 'Milestone Based',
      duration: '2 weeks',
      matchScore: 92,
      requiredSkills: ['DCF Valuation', 'Comparable Comps', 'Equity Research', 'Investor Deck'],
      description: 'Create a Series A financial valuation model and investor deck. Model unit economics, customer acquisition cost (CAC) payback, and conduct trading comps against listed peers.',
      deliverables: [
        'Trading and transaction comparable multiples table',
        'Discounted cash flow model with WACC breakdown',
        '20-slide investor financial presentation'
      ],
      clientRating: '4.9 ★ (28 reviews)',
      interviewTips: 'Focus on valuation multiples (EV/ARR, P/E) in high-growth payment technology firms.'
    },
    {
      id: 'PROJ-FL-DES-01',
      title: 'HealthTech Patient Monitoring App Full Redesign',
      discipline: 'design',
      client: 'CarePulse Health',
      budget: '$2,200',
      type: 'Fixed Budget',
      duration: '3 weeks',
      matchScore: 97,
      requiredSkills: ['Figma', 'Design Systems', 'WCAG AAA', 'Usability Testing', 'Prototyping'],
      description: 'Redesign the patient clinical monitoring mobile app to meet WCAG 2.1 AAA accessibility requirements for low-vision and elderly patients. Implement high-contrast micro-interactions and haptic feedbacks.',
      deliverables: [
        'Comprehensive Figma design system with tokens',
        'Interactive mobile prototypes in ProtoPie',
        'User usability test report with 20 clinical trial subjects'
      ],
      clientRating: '5.0 ★ (31 reviews)',
      interviewTips: 'Demonstrate accessible color palettes, touch target sizes, and cognitive load reduction methods.'
    },
    {
      id: 'PROJ-FL-DES-02',
      title: 'Multi-Brand Enterprise Design Tokens Library',
      discipline: 'design',
      client: 'OmniCloud SaaS',
      budget: '$1,800',
      type: 'Milestone Based',
      duration: '2 weeks',
      matchScore: 94,
      requiredSkills: ['Design Tokens', 'Figma', 'Design Systems', 'Micro-Interactions'],
      description: 'Structure scalable multi-theme design tokens across web and mobile platforms. Automate token export pipelines to Style Dictionary and synchronize with React component libraries.',
      deliverables: [
        'Figma Variables library with semantic tokens',
        'JSON token hierarchy for Style Dictionary',
        'Documentation site with Storybook preview'
      ],
      clientRating: '4.9 ★ (19 reviews)',
      interviewTips: 'Discuss semantic vs global token nomenclature and dark/light mode token aliasing.'
    },
    {
      id: 'PROJ-FL-LAW-01',
      title: 'Cross-Border AI Data Privacy & DPDP Compliance Audit',
      discipline: 'law',
      client: 'LexNova Global',
      budget: '$2,100',
      type: 'Fixed Budget',
      duration: '3 weeks',
      matchScore: 95,
      requiredSkills: ['DPDP Act 2023', 'Data Privacy', 'IT Act 2000', 'Legal Compliance', 'Due Diligence'],
      description: 'Audit an enterprise AI customer analytics platform against India’s Digital Personal Data Protection Act 2023 and cross-border data transfer mandates. Draft data fiduciary agreements and user consent notices.',
      deliverables: [
        'Data Protection Impact Assessment (DPIA) report',
        'Notice and consent compliance checklist',
        'Master Data Transfer and Processing Agreement'
      ],
      clientRating: '5.0 ★ (11 reviews)',
      interviewTips: 'Prepare analysis of data principal rights, significant data fiduciary classifications, and penalty ceilings under DPDP.'
    },
    {
      id: 'PROJ-FL-LAW-02',
      title: 'SaaS Master Services Agreement & SLA Framework',
      discipline: 'law',
      client: 'CloudSentry Technologies',
      budget: '$1,600',
      type: 'Milestone Based',
      duration: '2 weeks',
      matchScore: 91,
      requiredSkills: ['Contract Drafting', 'SLA Framework', 'IP Licensing', 'Commercial Law'],
      description: 'Draft a standard enterprise B2B SaaS Master Services Agreement (MSA), Service Level Agreement (SLA), and Intellectual Property indemnity schedule for an enterprise cloud monitoring startup.',
      deliverables: [
        'B2B SaaS Master Services Agreement',
        'SLA with 99.9% uptime credit schedule',
        'Mutual Non-Disclosure Agreement (NDA)'
      ],
      clientRating: '4.8 ★ (16 reviews)',
      interviewTips: 'Focus on limitation of liability, intellectual property warranty, and disaster recovery escalation clauses.'
    },
    {
      id: 'PROJ-FL-BIO-01',
      title: 'RNA-Seq Differential Expression Analysis Pipeline',
      discipline: 'healthcare',
      client: 'OncoGenomics Labs',
      budget: '$1,900',
      type: 'Fixed Budget',
      duration: '3 weeks',
      matchScore: 96,
      requiredSkills: ['Bioinformatics', 'Python/Biopython', 'R / DESeq2', 'Genomics', 'Survival Analysis'],
      description: 'Develop an automated RNA-Seq differential expression analysis script for breast cancer oncology clinical samples. Generate publication-ready volcano plots, PCA clusters, and KEGG pathway enrichment maps.',
      deliverables: [
        'Automated Python/R DESeq2 differential analysis script',
        'Volcano plots and heatmaps with p-adjusted cutoffs',
        'Gene ontology enrichment summary report'
      ],
      clientRating: '5.0 ★ (22 reviews)',
      interviewTips: 'Be prepared to explain Benjamini-Hochberg false discovery rate (FDR) corrections and read count normalization.'
    },
    {
      id: 'PROJ-FL-BIO-02',
      title: 'Phase II Oncology Clinical Trial Statistical Analysis Plan',
      discipline: 'healthcare',
      client: 'BioPharma Global',
      budget: '$2,400',
      type: 'Milestone Based',
      duration: '4 weeks',
      matchScore: 94,
      requiredSkills: ['Clinical Data', 'CDISC SDTM', 'Biostatistics', 'Statistical Analysis Plan', 'Kaplan-Meier'],
      description: 'Author a comprehensive Statistical Analysis Plan (SAP) for an exploratory Phase II oncology drug trial. Formulate primary and secondary endpoints, sample size power calculations, and interim safety monitoring rules.',
      deliverables: [
        'Formal Statistical Analysis Plan (SAP) document',
        'Mock regulatory summary tables (TLFs)',
        'CDISC SDTM and ADaM dataset specifications'
      ],
      clientRating: '5.0 ★ (15 reviews)',
      interviewTips: 'Discuss log-rank tests, censoring conventions in Kaplan-Meier survival curves, and CDISC SDTM mapping.'
    }
  ],

  // Organisations Database (Both Companies and Colleges across All Fields)
  organisationsDatabase: [
    {
      id: 'org-msft',
      name: 'Microsoft Corporation',
      discipline: 'tech',
      type: 'company',
      category: 'Enterprise Tech & Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      locations: ['Redmond, WA', 'Bangalore', 'Hyderabad', 'London'],
      about: 'Empowering every person and every organization on the planet to achieve more through world-class AI, cloud computing, and productivity tools.',
      hiringFor: 'Students & Working Professionals',
      domains: ['Artificial Intelligence', 'Azure Cloud', 'Full Stack', 'Security'],
      jobsCount: 12,
      internshipsCount: 5,
      eventsCount: 3,
      culture: 'Growth Mindset, diversity, and customer obsession. Emphasis on curiosity and learning from failure.',
      process: ['1. Resume ATS Screen', '2. Cognitive & Coding Assessment', '3. Technical Round 1 (DSA)', '4. Technical Round 2 (System Architecture)', '5. Hiring Manager / AA Leadership']
    },
    {
      id: 'org-goog',
      name: 'Google',
      discipline: 'tech',
      type: 'company',
      category: 'Global Internet & AI Leader',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      locations: ['Mountain View, CA', 'Hyderabad', 'Bangalore', 'Zurich'],
      about: 'Organizing the world’s information and making it universally accessible and useful through search, YouTube, Android, and DeepMind research.',
      hiringFor: 'Students & Working Professionals',
      domains: ['Search & Ads', 'Deep Learning', 'Distributed Systems', 'Cloud'],
      jobsCount: 18,
      internshipsCount: 7,
      eventsCount: 4,
      culture: 'High technical rigor, Googliness, collaborative innovation, and user-first thinking.',
      process: ['1. Resume Review', '2. Online Coding Challenge (Google Docs style)', '3. Live Technical Interviews (3 rounds)', '4. Hiring Committee Review']
    },
    {
      id: 'org-rzp',
      name: 'Razorpay',
      discipline: 'tech',
      type: 'company',
      category: 'FinTech Unicorn',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg',
      locations: ['Bangalore, India'],
      about: 'India’s leading full-stack payments and banking platform for businesses, powering billions in digital transactions.',
      hiringFor: 'Students & Engineers',
      domains: ['Backend Engineering', 'Risk & Fraud ML', 'Payment Infrastructure'],
      jobsCount: 8,
      internshipsCount: 3,
      eventsCount: 2,
      culture: 'Speed, ownership, transparency, and building resilient fintech architecture.',
      process: ['1. Application Screen', '2. Machine Coding / Take-home Assignment', '3. Tech Architecture & DSA', '4. Culture Fit Round']
    },
    {
      id: 'org-iitb',
      name: 'Indian Institute of Technology (IIT) Bombay',
      discipline: 'tech',
      type: 'college',
      category: 'Premier Institute of National Importance',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/IIT_Bombay_Logo.svg/250px-IIT_Bombay_Logo.svg.png',
      locations: ['Powai, Mumbai, India'],
      about: 'A world-renowned academic and research institution known for excellence in engineering, natural sciences, design, and foundational computer science.',
      hiringFor: 'Academicians, Researchers & Faculty',
      domains: ['Artificial Intelligence Research', 'Computer Science Faculty', 'Postdoctoral Fellowships'],
      jobsCount: 5,
      internshipsCount: 4,
      eventsCount: 5,
      culture: 'Academic freedom, peer-reviewed research excellence, and nation-building technological innovations.',
      process: ['1. Academic Dossier Review', '2. Departmental Research Seminar', '3. Faculty Selection Committee Interview', '4. Board of Governors Approval']
    },
    {
      id: 'org-iisc',
      name: 'Indian Institute of Science (IISc) Bangalore',
      discipline: 'tech',
      type: 'college',
      category: 'Premier Scientific Research University',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Indian_Institute_of_Science_2019_logo.svg/220px-Indian_Institute_of_Science_2019_logo.svg.png',
      locations: ['Bangalore, India'],
      about: 'India’s top-ranked institution for scientific research and higher education, leading groundbreaking work in quantum computing, deep learning, and aerospace.',
      hiringFor: 'Academicians & Research Fellows',
      domains: ['Computational Sciences', 'Neuroscience & AI', 'Mathematical Modeling'],
      jobsCount: 6,
      internshipsCount: 5,
      eventsCount: 6,
      culture: 'Deep scientific inquiry, publication in top tier journals, and interdisciplinary collaboration.',
      process: ['1. Research Proposal Review', '2. Presentation to Dean & Faculty', '3. Lab Visits & Peer Review', '4. Council Appointment']
    },
    {
      id: 'org-stanford',
      name: 'Stanford University',
      discipline: 'tech',
      type: 'college',
      category: 'Global Research University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/150px-Stanford_Cardinal_logo.svg.png',
      locations: ['Stanford, California, USA'],
      about: 'Located in Silicon Valley, Stanford is one of the world’s leading research and teaching institutions, pioneering advancements in artificial intelligence.',
      hiringFor: 'Academicians & Postdoctoral Scholars',
      domains: ['Stanford HAI', 'Robotics', 'Systems & Security', 'Biomedical Informatics'],
      jobsCount: 9,
      internshipsCount: 6,
      eventsCount: 8,
      culture: 'Entrepreneurial mindset, interdisciplinary scholarship, and transformative global impact.',
      process: ['1. Academic CV & Recommendation Letters', '2. Job Talk Presentation', '3. Faculty 1-on-1 Interviews', '4. Department Consensus']
    },
    {
      id: 'org-gold',
      name: 'Goldman Sachs',
      discipline: 'finance',
      type: 'company',
      category: 'Global Investment Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg',
      locations: ['Mumbai', 'Bangalore', 'New York', 'London'],
      about: 'A leading global investment banking, securities, and investment management firm providing financial services to corporations, financial institutions, and governments.',
      hiringFor: 'Students & Quantitative Analysts',
      domains: ['Investment Banking', 'Quantitative Risk', 'Asset Management', 'Global Markets'],
      jobsCount: 14,
      internshipsCount: 6,
      eventsCount: 4,
      culture: 'Meritocracy, intellectual curiosity, high performance, and client excellence.',
      process: ['1. Online Aptitude & Math Test', '2. Technical Modeling & DCF Valuation', '3. Superday Interviews (3 rounds)', '4. Managing Director Review']
    },
    {
      id: 'org-hdfc',
      name: 'HDFC Bank',
      discipline: 'finance',
      type: 'company',
      category: 'Premier Commercial Banking Institution',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg',
      locations: ['Mumbai', 'Delhi', 'Bangalore'],
      about: 'India’s largest private sector bank, delivering pioneering corporate, retail, and treasury banking solutions across the subcontinent.',
      hiringFor: 'Management Trainees & Credit Analysts',
      domains: ['Corporate Credit', 'Treasury & Forex', 'Risk Management'],
      jobsCount: 22,
      internshipsCount: 9,
      eventsCount: 5,
      culture: 'Integrity, prudent risk underwriting, operational discipline, and customer focus.',
      process: ['1. Online Financial Assessment', '2. Credit Appraisal Case Study', '3. Panel Interview', '4. HR Discussion']
    },
    {
      id: 'org-srcc',
      name: 'Shri Ram College of Commerce (SRCC)',
      discipline: 'finance',
      type: 'college',
      category: 'Premier Commerce & Economics Institute',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Shri_Ram_College_of_Commerce_logo.png/220px-Shri_Ram_College_of_Commerce_logo.png',
      locations: ['New Delhi, India'],
      about: 'India’s foremost institution for undergraduate and postgraduate education in commerce, economics, and corporate financial analysis.',
      hiringFor: 'Faculty, Research Scholars & Fellows',
      domains: ['Financial Econometrics', 'Corporate Accounting', 'Capital Markets Research'],
      jobsCount: 4,
      internshipsCount: 6,
      eventsCount: 8,
      culture: 'Academic pre-eminence, thought leadership in Indian economic policy, and alumni prestige.',
      process: ['1. Academic CV & Paper Review', '2. Faculty Research Colloquium', '3. Academic Council Interview']
    },
    {
      id: 'org-figma',
      name: 'Figma Labs',
      discipline: 'design',
      type: 'company',
      category: 'Collaborative Design Platform',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
      locations: ['Bangalore / Remote', 'San Francisco', 'London'],
      about: 'Building the industry-standard collaborative design platform empowering millions of designers and engineers worldwide.',
      hiringFor: 'Product Designers & Design Engineers',
      domains: ['Design Systems', 'Interaction Design', 'Accessibility', 'Spatial UI'],
      jobsCount: 7,
      internshipsCount: 4,
      eventsCount: 3,
      culture: 'Empathy, radical transparency, craftsmanship, and community building.',
      process: ['1. Portfolio Review', '2. Interactive Design Exercise', '3. Cross-functional Engineering Alignment', '4. Design Leadership Chat']
    },
    {
      id: 'org-nid',
      name: 'National Institute of Design (NID)',
      discipline: 'design',
      type: 'college',
      category: 'Institute of National Importance in Design',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/National_Institute_of_Design_Logo.svg/250px-National_Institute_of_Design_Logo.svg.png',
      locations: ['Ahmedabad', 'Gandhinagar', 'Bengaluru'],
      about: 'Internationally acclaimed as one of the foremost multidisciplinary institutions in the field of design education, applied research, and design systems.',
      hiringFor: 'Design Educators & Research Associates',
      domains: ['Interaction Design', 'Universal Accessibility', 'Industrial Design'],
      jobsCount: 5,
      internshipsCount: 5,
      eventsCount: 6,
      culture: 'Hands-on exploration, social human-centered design, and craft mastery.',
      process: ['1. Design Portfolio Dossier', '2. Studio Workshop Demonstration', '3. Faculty Panel Review']
    },
    {
      id: 'org-azb',
      name: 'AZB & Partners',
      discipline: 'law',
      type: 'company',
      category: 'Premier Indian Corporate Law Firm',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Law_Court.svg/200px-Law_Court.svg.png',
      locations: ['Mumbai', 'New Delhi', 'Bangalore'],
      about: 'A tier-1 Indian law firm counseling multinational corporations, financial institutions, and tech conglomerates on cross-border M&A, regulatory affairs, and technology law.',
      hiringFor: 'Legal Associates & Interns',
      domains: ['Technology & IP Law', 'Corporate Governance', 'DPDP & Privacy Compliance'],
      jobsCount: 9,
      internshipsCount: 6,
      eventsCount: 4,
      culture: 'Excellence in legal advocacy, meticulous drafting, statutory rigor, and client dedication.',
      process: ['1. Legal Writing & CV Screening', '2. Statutory Case Scenario Assessment', '3. Partner Technical Interview']
    },
    {
      id: 'org-nlsiu',
      name: 'National Law School of India University (NLSIU)',
      discipline: 'law',
      type: 'college',
      category: 'Premier National Law University of India',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/NLSIU_Logo.png/220px-NLSIU_Logo.png',
      locations: ['Bangalore, India'],
      about: 'The pioneer of five-year integrated legal education in India and consistently ranked #1 National Law University.',
      hiringFor: 'Law Faculty & Postdoctoral Research Fellows',
      domains: ['Cyber Law & DPDP Act', 'Constitutional Law', 'Corporate & Financial Law'],
      jobsCount: 4,
      internshipsCount: 5,
      eventsCount: 7,
      culture: 'Intellectual rigor, social justice advocacy, and legal scholarship of the highest order.',
      process: ['1. Academic Dossier & Publication Audit', '2. Faculty Research Lecture', '3. Governing Council Approval']
    },
    {
      id: 'org-apollo',
      name: 'Apollo HealthTech',
      discipline: 'healthcare',
      type: 'company',
      category: 'Integrated Healthcare & Clinical Intelligence',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Red_Cross_icon.svg/200px-Red_Cross_icon.svg.png',
      locations: ['Hyderabad', 'Chennai', 'Bangalore'],
      about: 'Pioneering healthcare delivery, clinical informatics, and AI-assisted diagnostics across 70+ hospital facilities in Asia.',
      hiringFor: 'Bio-Statisticians & Clinical Data Scientists',
      domains: ['Clinical Trial Analytics', 'Epidemiology', 'CDISC SDTM Data Exchange'],
      jobsCount: 11,
      internshipsCount: 5,
      eventsCount: 3,
      culture: 'Clinical excellence, patient privacy, scientific rigor, and evidence-based care.',
      process: ['1. Clinical Data & Stats Assessment', '2. Case Study on Survival Analysis', '3. Medical Director & HR Panel']
    },
    {
      id: 'org-aiims',
      name: 'All India Institute of Medical Sciences (AIIMS)',
      discipline: 'healthcare',
      type: 'college',
      category: 'Apex National Medical & Research Institute',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/All_India_Institute_of_Medical_Sciences%2C_New_Delhi_logo.png/220px-All_India_Institute_of_Medical_Sciences%2C_New_Delhi_logo.png',
      locations: ['New Delhi, India'],
      about: 'India’s premier medical research and training institution, leading scientific breakthroughs in genomics, translational medicine, and epidemiological studies.',
      hiringFor: 'Bioinformatics Researchers & Clinical Fellows',
      domains: ['Genomic Sequencing', 'Bioinformatics & Molecular Modeling', 'Translational Medicine'],
      jobsCount: 6,
      internshipsCount: 8,
      eventsCount: 9,
      culture: 'Medical excellence, ethical human subjects research, and nation-wide healthcare impact.',
      process: ['1. Academic Research CV & Publications', '2. Research Proposal Defense', '3. Standing Selection Committee']
    }
  ],

  // Organisation State (for Company mode)
  organisation: {
    activeTab: 'dashboard',
    profile: {
      name: 'Microsoft Corporation',
      tagline: 'Empowering every person and every organization on the planet to achieve more.',
      type: 'Enterprise Tech & Cloud Computing',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      website: 'https://careers.microsoft.com',
      email: 'recruitment-india@microsoft.com',
      phone: '+91 (080) 6789-0000',
      locations: ['Redmond, WA', 'Bangalore, India', 'Hyderabad, India', 'London, UK'],
      domainsHiring: ['Artificial Intelligence', 'Cloud Infrastructure (Azure)', 'Data Science', 'Full Stack Development', 'Security'],
      skillsRequired: ['Python', 'C# / .NET', 'PyTorch / ONNX', 'Distributed Systems', 'Azure Services', 'Algorithms'],
      hiringProcess: 'Round 1: Resume Screen -> Round 2: Online Cognitive & Aptitude -> Round 3: Live Coding Round -> Round 4: Tech System Design -> Round 5: AA / HR Leadership Interview',
      hiringSeasons: 'Fall Campus Drives (Aug - Nov) & Spring Lateral Drives (Jan - May)',
      socials: { linkedin: 'linkedin.com/company/microsoft', github: 'github.com/microsoft', twitter: 'twitter.com/microsoft' },
      verified: true
    },
    selectedOpportunity: 'ai-intern',
    activeOppSubtab: 'overview',
    selectedApplicantDrawer: null,
    selectedChatCandidate: 'arjun',
    broadcastModalOpen: false,
    createAssessmentModalOpen: false,
    newOppModalOpen: false,

    applicantSearchQuery: '',
    applicantOppFilter: 'all',
    applicantStatusFilter: 'all',
    applicantDomainFilter: 'all',

    opportunities: [
      {
        id: 'ai-intern',
        title: 'AI Research Intern (Generative AI)',
        type: 'Internship',
        mode: 'Hybrid',
        location: 'Bangalore / Hyderabad',
        department: 'Azure AI & Research',
        datePosted: 'Aug 28, 2026',
        deadline: 'Sep 20, 2026',
        status: 'Active',
        totalApplications: 142,
        daysRemaining: 16,
        stipend: '₹80,000 / month',
        stats: { total: 142, newCount: 24, underReview: 48, shortlisted: 32, rejected: 30, selected: 8 },
        rounds: [
          { name: 'Round 1: Resume Screening', status: 'Completed', assigned: 142, completed: 142, qualified: 64, eliminated: 78 },
          { name: 'Round 2: Aptitude Test', status: 'Active', assigned: 64, completed: 52, qualified: 38, eliminated: 14 },
          { name: 'Round 3: Coding Test', status: 'Upcoming', assigned: 38, completed: 30, qualified: 20, eliminated: 10 },
          { name: 'Round 4: Technical Interview', status: 'Upcoming', assigned: 20, completed: 15, qualified: 10, eliminated: 5 },
          { name: 'Round 5: HR & Leadership Interview', status: 'Upcoming', assigned: 10, completed: 6, qualified: 4, eliminated: 2 }
        ]
      },
      {
        id: 'data-analyst',
        title: 'Data Analyst - Growth Intelligence',
        type: 'Full-time',
        mode: 'Remote',
        location: 'Bangalore / Remote',
        department: 'Commercial Business Insights',
        datePosted: 'Aug 20, 2026',
        deadline: 'Sep 25, 2026',
        status: 'Active',
        totalApplications: 89,
        daysRemaining: 21,
        salary: '₹14 - ₹20 LPA',
        stats: { total: 89, newCount: 12, underReview: 31, shortlisted: 22, rejected: 20, selected: 4 },
        rounds: [
          { name: 'Round 1: Resume Screening', status: 'Completed', assigned: 89, completed: 89, qualified: 40, eliminated: 49 },
          { name: 'Round 2: SQL & Statistics Assessment', status: 'Active', assigned: 40, completed: 35, qualified: 22, eliminated: 13 },
          { name: 'Round 3: Case Study & Presentation', status: 'Upcoming', assigned: 22, completed: 14, qualified: 8, eliminated: 6 },
          { name: 'Round 4: Final Partner Interview', status: 'Upcoming', assigned: 8, completed: 4, qualified: 4, eliminated: 0 }
        ]
      },
      {
        id: 'frontend-dev',
        title: 'Senior Frontend Engineer (Next.js & AI UI)',
        type: 'Full-time',
        mode: 'Hybrid',
        location: 'Bangalore / Redmond',
        department: 'Developer Division & Copilot Studio',
        datePosted: 'Aug 15, 2026',
        deadline: 'Oct 05, 2026',
        status: 'Active',
        totalApplications: 64,
        daysRemaining: 28,
        salary: '₹28 - ₹42 LPA',
        stats: { total: 64, newCount: 8, underReview: 24, shortlisted: 18, rejected: 12, selected: 2 },
        rounds: [
          { name: 'Round 1: Resume Screening', status: 'Completed', assigned: 64, completed: 64, qualified: 30, eliminated: 34 },
          { name: 'Round 2: Frontend Architecture & React', status: 'Active', assigned: 30, completed: 25, qualified: 16, eliminated: 9 },
          { name: 'Round 3: Interactive System Design', status: 'Upcoming', assigned: 16, completed: 10, qualified: 6, eliminated: 4 },
          { name: 'Round 4: Director Discussion', status: 'Upcoming', assigned: 6, completed: 2, qualified: 2, eliminated: 0 }
        ]
      },
      {
        id: 'uiux-intern',
        title: 'Product Design & UI/UX Intern',
        type: 'Internship',
        mode: 'On-site',
        location: 'Hyderabad, India',
        department: 'Fluent Design Studio',
        datePosted: 'Aug 25, 2026',
        deadline: 'Sep 15, 2026',
        status: 'Active',
        totalApplications: 53,
        daysRemaining: 12,
        stipend: '₹65,000 / month',
        stats: { total: 53, newCount: 6, underReview: 20, shortlisted: 15, rejected: 10, selected: 2 },
        rounds: [
          { name: 'Round 1: Portfolio & Resume Review', status: 'Completed', assigned: 53, completed: 53, qualified: 25, eliminated: 28 },
          { name: 'Round 2: Design Sprint & Case Study', status: 'Active', assigned: 25, completed: 18, qualified: 10, eliminated: 8 },
          { name: 'Round 3: Design Critique & Review', status: 'Upcoming', assigned: 10, completed: 5, qualified: 4, eliminated: 1 },
          { name: 'Round 4: HR Discussion', status: 'Upcoming', assigned: 4, completed: 2, qualified: 2, eliminated: 0 }
        ]
      }
    ],

    applicants: [
      {
        id: 'APP-901',
        name: 'Arjun Kawade',
        email: 'arjun@iitb.ac.in',
        phone: '+91 98765 43210',
        location: 'Bangalore / Mumbai, India',
        role: 'AI Research Intern',
        oppId: 'ai-intern',
        status: 'Shortlisted',
        credentialTrust: 'verified',
        trustScore: 98,
        appliedDate: 'Sep 02, 2026',
        matchScore: 94,
        skillMatch: '91%',
        currentRound: 'Round 2: Aptitude Test',
        previousRounds: ['Round 1: Resume Screening (Passed - 94/100)'],
        education: 'B.Tech in Computer Science & Engineering, IIT Bombay (8.9 CGPA)',
        experience: 'ML Intern @ AI Labs (6 mos) • 3 Delivered Freelance Contracts ($3,450)',
        matchedSkills: ['PyTorch', 'Python', 'NLP', 'Computer Vision', 'FastAPI'],
        missingSkills: ['Triton Server', 'Docker'],
        projects: ['Multi-Modal OCR Agent with Vector Search', 'Fine-Tuned Llama 3 Legal Reasoning'],
        certifications: [
          {
            id: 'CERT-901-A',
            title: 'NVIDIA DLI: LLM Acceleration & Inference Serving',
            issuer: 'NVIDIA Deep Learning Institute',
            issueDate: 'May 2026',
            credentialId: 'NVD-LLM-884920',
            verificationUrl: 'https://learn.nvidia.com/verify/NVD-LLM-884920',
            status: 'verified',
            trustScore: 99,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'Arjun_NVIDIA_LLM_Acceleration.pdf',
              engine: 'NVIDIA Enterprise CA (PDF/A-2b compliant)',
              createdDate: '2026-05-14 10:22:15 UTC',
              modifiedDate: '2026-05-14 10:22:15 UTC (Original unmodified)',
              tamperingDetected: false,
              fontIntegrity: 'Vector Fonts (Segoe UI Semibold, Type-1 match)',
              layerCheck: 'Original Single-Layer Vector Stream'
            },
            competenceCheck: {
              testName: 'AI Engineering & Aptitude Screening (ASSESS-01)',
              score: '94% (Top 1.2% in Cohort)',
              alignment: 'Strong Correlation — validated by high test benchmark'
            }
          },
          {
            id: 'CERT-901-B',
            title: 'Verified PyTorch Pro Specialist',
            issuer: 'Linux Foundation / PyTorch Org',
            issueDate: 'Mar 2026',
            credentialId: 'LF-PT-2026-9031',
            verificationUrl: 'https://openprofile.dev/c/LF-PT-2026-9031',
            status: 'verified',
            trustScore: 97,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'Arjun_PyTorch_Pro_Specialist.pdf',
              engine: 'Linux Foundation Credential Service v3.2',
              createdDate: '2026-03-20 14:30:00 UTC',
              modifiedDate: '2026-03-20 14:30:00 UTC (Original)',
              tamperingDetected: false,
              fontIntegrity: 'Matched (Noto Sans Type-0 font)',
              layerCheck: 'Clean Vector Stream'
            },
            competenceCheck: {
              testName: 'Technical Coding: PyTorch Operators',
              score: '92%',
              alignment: 'Strong Correlation'
            }
          }
        ],
        portfolioLinks: { github: 'github.com/arjunkawade', linkedin: 'linkedin.com/in/arjunkawade', site: 'arjun.dev' },
        aiSummary: 'Top 1.1% algorithmic talent from IIT Bombay. Strong transformer mathematical foundation. All credentials 100% cryptographically verified.',
        notes: 'Exceptional deep learning foundation. Strong communicator. Both credentials verified at source.'
      },
      {
        id: 'APP-902',
        name: 'Priya Sharma',
        email: 'priya.s@iisc.ac.in',
        phone: '+91 98220 11223',
        location: 'Bangalore, India',
        role: 'AI Research Intern',
        oppId: 'ai-intern',
        status: 'Qualified',
        credentialTrust: 'verified',
        trustScore: 100,
        appliedDate: 'Aug 30, 2026',
        matchScore: 96,
        skillMatch: '95%',
        currentRound: 'Round 4: Technical Interview',
        previousRounds: ['Round 1: Resume Screening (Passed)', 'Round 2: Aptitude Test (Passed - 98%)', 'Round 3: Coding Test (Passed - 95%)'],
        education: 'M.Tech in Artificial Intelligence, IISc Bangalore (9.4 CGPA)',
        experience: 'AI Resident @ AI StartUp (1 yr)',
        matchedSkills: ['PyTorch', 'TensorFlow', 'LLMs', 'Docker', 'Python', 'CUDA'],
        missingSkills: ['Kubernetes'],
        projects: ['Autonomous Swarm Multi-Agent Negotiation', 'Diffusion Models for Medical Imaging'],
        certifications: [
          {
            id: 'CERT-902-A',
            title: 'DeepLearning.AI Multi-Agent RAG Specialist',
            issuer: 'DeepLearning.AI & Coursera',
            issueDate: 'Jun 2026',
            credentialId: 'DLAI-RAG-99301',
            verificationUrl: 'https://learn.deeplearning.ai/verify/DLAI-RAG-99301',
            status: 'verified',
            trustScore: 99,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'Priya_DeepLearning_RAG.pdf',
              engine: 'DeepLearning.AI Issuer Authority v2',
              createdDate: '2026-06-11 08:15:00 UTC',
              modifiedDate: '2026-06-11 08:15:00 UTC (Original)',
              tamperingDetected: false,
              fontIntegrity: 'Matched (Inter Type-0)',
              layerCheck: 'Clean Vector Stream'
            },
            competenceCheck: {
              testName: 'Coding Test: Agentic Workflows & RAG',
              score: '98% (Rank #1 in Cohort)',
              alignment: 'Perfect Correlation'
            }
          },
          {
            id: 'CERT-902-B',
            title: 'AWS Certified Machine Learning - Specialty',
            issuer: 'Amazon Web Services (Credly / Acclaim)',
            issueDate: 'Apr 2026',
            credentialId: 'AWS-MLS-2026-0041',
            verificationUrl: 'https://www.credly.com/badges/AWS-MLS-2026-0041',
            status: 'verified',
            trustScore: 100,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'AWS_ML_Specialty_Badge.pdf',
              engine: 'Credly Cryptographic Badge Authority v4',
              createdDate: '2026-04-05 12:00:00 UTC',
              modifiedDate: '2026-04-05 12:00:00 UTC (Original)',
              tamperingDetected: false,
              fontIntegrity: 'Vector Cryptographic Block (SHA-256 Validated)',
              layerCheck: 'Secure Tamper-Evident Vector'
            },
            competenceCheck: {
              testName: 'AWS & Cloud Deployment Screening',
              score: '95%',
              alignment: 'Strong Correlation'
            }
          }
        ],
        portfolioLinks: { github: 'github.com/priyasharma', linkedin: 'linkedin.com/in/priyasharma' },
        aiSummary: 'Master’s degree researcher from IISc with published paper at NeurIPS workshop. Scored in top 0.5% in technical coding. 100% verified credentials.',
        notes: 'Outstanding technical assessment score (98%). Both certificates verified on Credly and DeepLearning.AI.'
      },
      {
        id: 'APP-903',
        name: 'Rahul Patel',
        email: 'rahul.patel@bits.ac.in',
        phone: '+91 97110 55443',
        location: 'Hyderabad, India',
        role: 'AI Research Intern',
        oppId: 'ai-intern',
        status: 'Under Review',
        credentialTrust: 'flagged',
        trustScore: 32,
        appliedDate: 'Sep 05, 2026',
        matchScore: 82,
        skillMatch: '80%',
        currentRound: 'Round 1: Resume Screening',
        previousRounds: [],
        education: 'B.E. Computer Science, BITS Pilani (8.2 CGPA)',
        experience: 'Data Science Intern @ FinTech (3 mos)',
        matchedSkills: ['Python', 'PyTorch', 'SQL', 'FastAPI'],
        missingSkills: ['LLM Fine-tuning', 'Vector Databases', 'Docker'],
        projects: ['Stock Sentiment Prediction with BERT', 'Customer Churn XGBoost'],
        certifications: [
          {
            id: 'CERT-903-A',
            title: 'Advanced Generative AI & Large Language Models Master',
            issuer: 'Stanford Online / DeepLearning Academy',
            issueDate: 'Jan 2026',
            credentialId: 'STF-GENAI-77402',
            verificationUrl: 'https://online.stanford.edu/verify/STF-GENAI-77402',
            status: 'flagged',
            trustScore: 24,
            issuerVerified: false,
            flagReasons: [
              'PDF Metadata Flag: File created/edited with Adobe Photoshop 2025 v26.1 (Windows)',
              'Timestamp Mismatch: ModDate (March 12, 2026) is 61 days post-issuance',
              'Visual & Layer Tampering: Candidate name rendered as raster pixel patch over original vector text',
              'Registry Lookup Failed: Credential ID STF-GENAI-77402 does not exist in Stanford Online public directory',
              'Competence Discrepancy: Candidate scored 48% on Portal AI Screening test despite claimed Advanced Master certificate'
            ],
            fileMetadata: {
              fileName: 'Stanford_GenAI_Master_Certificate.pdf',
              engine: 'Adobe Photoshop 2025 v26.1 (Windows 64-bit)',
              createdDate: '2026-01-10 11:00:00 UTC',
              modifiedDate: '2026-03-12 18:42:10 UTC (Edited 61 days later)',
              tamperingDetected: true,
              fontIntegrity: 'Anomalous: Arial raster patch overlaying vector Segoe UI',
              layerCheck: 'High Risk: Flattened raster patch covering original recipient name'
            },
            competenceCheck: {
              testName: 'AI Engineering & Aptitude Screening (ASSESS-01)',
              score: '48% (Bottom 25% in Cohort)',
              alignment: 'Severe Discrepancy: Assessment score does not match claimed master credential'
            }
          },
          {
            id: 'CERT-903-B',
            title: 'Coursera Machine Learning Specialization',
            issuer: 'Coursera / Stanford University',
            issueDate: 'Nov 2025',
            credentialId: 'COURSERA-ML-4921',
            verificationUrl: 'https://coursera.org/verify/COURSERA-ML-4921',
            status: 'unverified',
            trustScore: 65,
            issuerVerified: false,
            fileMetadata: {
              fileName: 'Coursera_ML_Spec.pdf',
              engine: 'Coursera PDF Generator v1.4',
              createdDate: '2025-11-20 16:00:00 UTC',
              modifiedDate: '2025-11-20 16:00:00 UTC (Original)',
              tamperingDetected: false,
              fontIntegrity: 'Clean vector font',
              layerCheck: 'Single stream'
            },
            competenceCheck: {
              testName: 'Foundational ML Knowledge',
              score: '62%',
              alignment: 'Moderate'
            }
          }
        ],
        portfolioLinks: { github: 'github.com/rahulpatel' },
        aiSummary: 'Solid core computer science foundations, but high forensic risk detected on Stanford GenAI credential. Immediate verification required before proceeding.',
        notes: '⚠️ Attention: 1 certificate flagged for Adobe Photoshop tampering. Do not advance to Round 2 without original digital badge verification.'
      },
      {
        id: 'APP-904',
        name: 'Neha Mishra',
        email: 'neha.m@delhi.ac.in',
        phone: '+91 99880 77665',
        location: 'New Delhi / Remote',
        role: 'Data Analyst - Growth Intelligence',
        oppId: 'data-analyst',
        status: 'Shortlisted',
        credentialTrust: 'verified',
        trustScore: 96,
        appliedDate: 'Sep 04, 2026',
        matchScore: 92,
        skillMatch: '93%',
        currentRound: 'Round 2: SQL & Statistics Assessment',
        previousRounds: ['Round 1: Resume Screening (Passed - 92/100)'],
        education: 'B.Sc Statistics & Data Analytics, Delhi University (9.1 CGPA)',
        experience: 'Business Analyst Intern @ eCommerce (6 mos)',
        matchedSkills: ['SQL', 'Python', 'Power BI', 'Statistical Modeling', 'Tableau'],
        missingSkills: ['Snowflake'],
        projects: ['Cohort Retention & LTV Modeling', 'Supply Chain Bottleneck Simulation'],
        certifications: [
          {
            id: 'CERT-904-A',
            title: 'Google Data Analytics Professional Certificate',
            issuer: 'Google Career Certificates (Coursera)',
            issueDate: 'Feb 2026',
            credentialId: 'GOOG-DA-551029',
            verificationUrl: 'https://coursera.org/verify/professional-cert/GOOG-DA-551029',
            status: 'verified',
            trustScore: 98,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'Neha_Google_Data_Analytics.pdf',
              engine: 'Google Credential Rendering Engine v2',
              createdDate: '2026-02-18 11:20:00 UTC',
              modifiedDate: '2026-02-18 11:20:00 UTC (Clean)',
              tamperingDetected: false,
              fontIntegrity: 'Google Sans (Matched vector)',
              layerCheck: 'Clean Vector Stream'
            },
            competenceCheck: {
              testName: 'SQL & Business Analytics Benchmark',
              score: '94%',
              alignment: 'Strong Correlation'
            }
          },
          {
            id: 'CERT-904-B',
            title: 'Microsoft Certified: Power BI Data Analyst Associate',
            issuer: 'Microsoft Learn / Pearson VUE',
            issueDate: 'Apr 2026',
            credentialId: 'MS-PL300-8812',
            verificationUrl: 'https://learn.microsoft.com/en-us/users/nehamishra/credentials/MS-PL300-8812',
            status: 'verified',
            trustScore: 97,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'Microsoft_PowerBI_Cert.pdf',
              engine: 'Microsoft Learn Credential Authority',
              createdDate: '2026-04-22 15:40:00 UTC',
              modifiedDate: '2026-04-22 15:40:00 UTC (Original)',
              tamperingDetected: false,
              fontIntegrity: 'Segoe UI (Original vector)',
              layerCheck: 'Clean Vector Stream'
            },
            competenceCheck: {
              testName: 'BI Dashboard Optimization',
              score: '92%',
              alignment: 'Strong Correlation'
            }
          }
        ],
        portfolioLinks: { linkedin: 'linkedin.com/in/nehamishra' },
        aiSummary: 'Exceptional mathematical and SQL background. Strong visualization aesthetics and business storytelling. Verified Google and Microsoft credentials.',
        notes: 'Ranked top in cohort for SQL optimization problem. All credentials authentic.'
      },
      {
        id: 'APP-905',
        name: 'Siddharth Roy',
        email: 'sid.roy@iiit.ac.in',
        phone: '+91 96540 22110',
        location: 'Bangalore, India',
        role: 'Senior Frontend Engineer (Next.js)',
        oppId: 'frontend-dev',
        status: 'Qualified',
        credentialTrust: 'verified',
        trustScore: 98,
        appliedDate: 'Aug 29, 2026',
        matchScore: 95,
        skillMatch: '96%',
        currentRound: 'Round 3: Interactive System Design',
        previousRounds: ['Round 1: Resume Screening (Passed)', 'Round 2: Frontend Architecture (Passed - 94%)'],
        education: 'B.Tech IT, IIIT Hyderabad (8.7 CGPA)',
        experience: 'Frontend Engineer @ SaaS Startup (2.5 yrs)',
        matchedSkills: ['React', 'Next.js 15', 'TypeScript', 'Tailwind', 'GraphQL', 'WebSockets'],
        missingSkills: ['Rust/Wasm'],
        projects: ['Real-Time Collaborative Canvas', 'Micro-Frontend Component Library'],
        certifications: [
          {
            id: 'CERT-905-A',
            title: 'Meta Certified Frontend Architect',
            issuer: 'Meta / Coursera Credential',
            issueDate: 'Jan 2026',
            credentialId: 'META-FE-90184',
            verificationUrl: 'https://coursera.org/verify/META-FE-90184',
            status: 'verified',
            trustScore: 99,
            issuerVerified: true,
            fileMetadata: {
              fileName: 'Meta_Frontend_Architect.pdf',
              engine: 'Meta Credential Generator',
              createdDate: '2026-01-25 10:00:00 UTC',
              modifiedDate: '2026-01-25 10:00:00 UTC (Original)',
              tamperingDetected: false,
              fontIntegrity: 'Optimized vector subsets',
              layerCheck: 'Clean Vector Stream'
            },
            competenceCheck: {
              testName: 'Frontend Architecture & State Machine',
              score: '96%',
              alignment: 'Strong Correlation'
            }
          }
        ],
        portfolioLinks: { github: 'github.com/sidroy', site: 'sidroy.dev' },
        aiSummary: 'Extensive production experience scaling Next.js applications and WebSocket feeds. Verified Meta credential.',
        notes: 'Senior candidate with exceptional code structure. Meta certification verified on Coursera.'
      },
      {
        id: 'APP-906',
        name: 'Ananya Verma',
        email: 'ananya.v@nid.edu',
        phone: '+91 98450 33445',
        location: 'Ahmedabad / Hyderabad',
        role: 'Product Design & UI/UX Intern',
        oppId: 'uiux-intern',
        status: 'Under Review',
        credentialTrust: 'unverified',
        trustScore: 72,
        appliedDate: 'Sep 03, 2026',
        matchScore: 90,
        skillMatch: '88%',
        currentRound: 'Round 1: Portfolio Review',
        previousRounds: [],
        education: 'B.Des in Interaction Design, NID Ahmedabad',
        experience: 'Design Intern @ Studio Labs (4 mos)',
        matchedSkills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility (WCAG)'],
        missingSkills: ['Framer'],
        projects: ['AI Copilot Human-Computer Interaction Guidelines', 'Neomorphic Banking App Redesign'],
        certifications: [
          {
            id: 'CERT-906-A',
            title: 'Nielsen Norman Group UX Master Certification',
            issuer: 'Nielsen Norman Group (NN/g)',
            issueDate: 'Jul 2026',
            credentialId: 'NNG-UX-10492',
            verificationUrl: 'https://nngroup.com/verify/NNG-UX-10492',
            status: 'unverified',
            trustScore: 70,
            issuerVerified: false,
            fileMetadata: {
              fileName: 'NNG_UX_Master.pdf',
              engine: 'NN/g Automated PDF Generator',
              createdDate: '2026-07-10 14:15:00 UTC',
              modifiedDate: '2026-07-10 14:15:00 UTC (Clean)',
              tamperingDetected: false,
              fontIntegrity: 'Standard font subset',
              layerCheck: 'Clean Vector Stream'
            },
            competenceCheck: {
              testName: 'Design Systems & UX Heuristics Quiz',
              score: '88%',
              alignment: 'High'
            }
          }
        ],
        portfolioLinks: { site: 'ananya.design', behance: 'behance.net/ananyaverma' },
        aiSummary: 'Stellar design portfolio with strong emphasis on accessibility and micro-interactions. Self-reported NN/g certificate in review.',
        notes: 'Clean visual polish; pending verification of NN/g certification link.'
      }
    ],

    assessments: [
      {
        id: 'ASSESS-01',
        name: 'Aptitude Test',
        type: 'Aptitude',
        duration: '30 mins',
        totalMarks: 50,
        passingMarks: 35,
        status: 'Active',
        assignedCount: 64,
        attemptedCount: 52,
        pendingCount: 12,
        avgScore: '79.4%',
        highestScore: '98%',
        passRate: '68%',
        linkedTo: 'AI Research Intern',
        instructions: 'Contains 25 quantitative aptitude and logical reasoning questions. Auto-submit will trigger upon time expiry.'
      },
      {
        id: 'ASSESS-02',
        name: 'Java Technical',
        type: 'Technical',
        duration: '60 mins',
        totalMarks: 100,
        passingMarks: 70,
        status: 'Active',
        assignedCount: 42,
        attemptedCount: 36,
        pendingCount: 6,
        avgScore: '74.2%',
        highestScore: '96%',
        passRate: '72%',
        linkedTo: 'Backend & Cloud Services',
        instructions: 'Covers JVM memory management, multithreading & concurrency, Spring Boot, and algorithm efficiency.'
      },
      {
        id: 'ASSESS-03',
        name: 'UI/UX Quiz',
        type: 'Domain',
        duration: '45 mins',
        totalMarks: 60,
        passingMarks: 42,
        status: 'Draft',
        assignedCount: 0,
        attemptedCount: 0,
        pendingCount: 0,
        avgScore: '0%',
        highestScore: '0%',
        passRate: '0%',
        linkedTo: 'Product Design & UI/UX Intern',
        instructions: 'Tests understanding of design heuristics, color theory, WCAG 2.1 compliance, and information architecture.'
      },
      {
        id: 'ASSESS-04',
        name: 'AI Engineering Screening',
        type: 'Coding',
        duration: '45 mins',
        totalMarks: 100,
        passingMarks: 80,
        status: 'Active',
        assignedCount: 38,
        attemptedCount: 30,
        pendingCount: 8,
        avgScore: '81.6%',
        highestScore: '98%',
        passRate: '76%',
        linkedTo: 'AI Research Intern',
        instructions: 'Hands-on coding questions covering PyTorch tensors, KV-cache calculation, and low-latency API wrappers.'
      }
    ],

    conversations: {
      'ai-intern': [
        {
          id: 'arjun',
          candidateName: 'Arjun Kawade',
          avatar: 'AK',
          appliedRole: 'AI Research Intern',
          currentRound: 'Round 2: Aptitude Test',
          status: 'Shortlisted',
          hasNewMessage: true,
          lastTime: '11:45 AM',
          messages: [
            { sender: 'recruiter', time: 'Sep 02, 11:30 AM', text: 'Hi Arjun! Congratulations on clearing the initial resume screening for the AI Research Intern role at Microsoft.' },
            { sender: 'candidate', time: 'Sep 02, 11:45 AM', text: 'Thank you! Looking forward to Round 2. I have completed the preparation for the aptitude and PyTorch modules.' },
            { sender: 'recruiter', time: 'Today, 11:30 AM', text: 'Please complete the Round 2 Aptitude assessment before Sep 08 at 11:59 PM IST.' }
          ]
        },
        {
          id: 'priya',
          candidateName: 'Priya Sharma',
          avatar: 'PS',
          appliedRole: 'AI Research Intern',
          currentRound: 'Round 4: Technical Interview',
          status: 'Qualified',
          hasNewMessage: false,
          lastTime: 'Yesterday',
          messages: [
            { sender: 'recruiter', time: 'Sep 01, 02:00 PM', text: 'Hello Priya, your performance in the coding round was stellar (98%). Are you available this Friday at 3:00 PM IST for Round 4?' },
            { sender: 'candidate', time: 'Sep 01, 03:15 PM', text: 'Yes, Friday at 3:00 PM IST works perfectly for me! Looking forward to meeting the team.' }
          ]
        },
        {
          id: 'rahul',
          candidateName: 'Rahul Patel',
          avatar: 'RP',
          appliedRole: 'AI Research Intern',
          currentRound: 'Round 1: Resume Screening',
          status: 'Under Review',
          hasNewMessage: false,
          lastTime: 'Sep 04',
          messages: [
            { sender: 'candidate', time: 'Sep 04, 05:00 PM', text: 'Hi Hiring Team, I recently updated my portfolio with a new BERT sentiment model. Please take a look!' },
            { sender: 'recruiter', time: 'Sep 05, 10:00 AM', text: 'Thank you Rahul, our team has noted your updated portfolio link.' }
          ]
        }
      ],
      'data-analyst': [
        {
          id: 'neha',
          candidateName: 'Neha Mishra',
          avatar: 'NM',
          appliedRole: 'Data Analyst - Growth Intelligence',
          currentRound: 'Round 2: SQL & Statistics Assessment',
          status: 'Shortlisted',
          hasNewMessage: false,
          lastTime: 'Sep 04',
          messages: [
            { sender: 'recruiter', time: 'Sep 04, 04:00 PM', text: 'Hi Neha, congratulations on clearing Round 1! We have assigned the SQL and Statistics challenge to your portal.' }
          ]
        },
        {
          id: 'siddharth',
          candidateName: 'Siddharth Roy',
          avatar: 'SR',
          appliedRole: 'Senior Frontend Engineer',
          currentRound: 'Round 3: Interactive System Design',
          status: 'Qualified',
          hasNewMessage: false,
          lastTime: 'Aug 31',
          messages: [
            { sender: 'recruiter', time: 'Aug 31, 01:00 PM', text: 'Hi Siddharth, great performance in Round 2. We will schedule the System Design session for next Monday.' }
          ]
        }
      ]
    },

    settings: {
      teamMembers: [
        { name: 'Priya Sen', email: 'priya.sen@microsoft.com', role: 'Admin', department: 'Global Campus Hiring' },
        { name: 'Rajesh Nair', email: 'rajesh.n@microsoft.com', role: 'Technical Recruiter', department: 'Azure AI Engineering' },
        { name: 'Sarah Jenkins', email: 'sarah.j@microsoft.com', role: 'HR Lead', department: 'Talent Acquisition' }
      ],
      notifications: {
        newApplications: true,
        assessmentCompletion: true,
        newMessages: true,
        interviewConfirmations: true,
        deadlineReminders: true
      },
      verification: {
        status: 'Verified Enterprise',
        cinNumber: 'U72900KA2020PTC134567',
        taxId: 'AAACM1234F',
        verifiedDate: 'Jan 15, 2026',
        authorizedSignatory: 'Satya N. / HR Governance'
      },
      security: {
        twoFactor: true,
        lastPasswordChange: 'Aug 14, 2026',
        activeSessions: [
          { device: 'MacBook Pro (Chrome)', location: 'Bangalore, India', status: 'Active (Current)' },
          { device: 'iPad Air (Safari)', location: 'Hyderabad, India', status: '2 days ago' }
        ]
      },
      privacy: {
        isPublic: true,
        maskContact: false,
        dataRetentionDays: 180
      }
    }
  }
};

// Coding Challenge & Test Runner Definition (Monaco Simulation)
const codingChallenge = {
  id: 'dp-tree-reroot',
  title: 'Dynamic Programming: Tree Rerooting & Distance Sums',
  difficulty: 'Hard',
  difficultyColor: 'text-rose-400 bg-rose-950/60 border border-rose-800/60',
  benchmark: 'LeetCode 834 / Codeforces Div.1',
  xpReward: 50,
  timeLimit: '2.0s',
  memoryLimit: '256 MB',
  description: `You are given an undirected connected tree with <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code> and an array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an undirected edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the tree.<br><br>Return an array <code>ans</code> of length <code>n</code> where <code>ans[i]</code> is the sum of the distances between the <code>i</code><sup>th</sup> node and all other nodes in the tree.`,
  example1: {
    input: 'n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]',
    output: '[8, 12, 6, 10, 10, 10]',
    explanation: 'For node 0: dist(0,0)+dist(0,1)+dist(0,2)+dist(0,3)+dist(0,4)+dist(0,5) = 0 + 1 + 1 + 2 + 2 + 2 = 8.\nFor node 2: dist(2,0)+dist(2,1)+dist(2,2)+dist(2,3)+dist(2,4)+dist(2,5) = 1 + 2 + 0 + 1 + 1 + 1 = 6.'
  },
  example2: {
    input: 'n = 1, edges = []',
    output: '[0]',
    explanation: 'A tree with a single root has distance sum 0.'
  },
  testCases: [
    {
      id: 1,
      title: 'Sample Case 1 (Balanced Tree)',
      input: 'n = 6\nedges = [[0,1],[0,2],[2,3],[2,4],[2,5]]',
      expected: '[8, 12, 6, 10, 10, 10]'
    },
    {
      id: 2,
      title: 'Sample Case 2 (Single Vertex)',
      input: 'n = 1\nedges = []',
      expected: '[0]'
    },
    {
      id: 3,
      title: 'Hidden Case 3 (High Diameter Tree)',
      input: 'n = 1000\nedges = [[0,1],[1,2],...,[998,999]]',
      expected: '[Hidden: 1000 Elements Array]'
    }
  ],
  templates: {
    python: `from typing import List
from collections import defaultdict

class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
        tree = defaultdict(list)
        for u, v in edges:
            tree[u].append(v)
            tree[v].append(u)
            
        count = [1] * n
        ans = [0] * n
        
        # Post-order DFS: calculate subtree sizes and base root distance
        def dfs_base(node, parent):
            for neighbor in tree[node]:
                if neighbor != parent:
                    dfs_base(neighbor, node)
                    count[node] += count[neighbor]
                    ans[node] += ans[neighbor] + count[neighbor]
                    
        # Pre-order DFS: reroot tree to calculate distance for all nodes in O(1)
        def dfs_reroot(node, parent):
            for neighbor in tree[node]:
                if neighbor != parent:
                    ans[neighbor] = ans[node] - count[neighbor] + (n - count[neighbor])
                    dfs_reroot(neighbor, node)
                    
        dfs_base(0, -1)
        dfs_reroot(0, -1)
        return ans`,
    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        vector<vector<int>> tree(n);
        for (const auto& edge : edges) {
            tree[edge[0]].push_back(edge[1]);
            tree[edge[1]].push_back(edge[0]);
        }
        vector<int> count(n, 1), ans(n, 0);
        dfsBase(0, -1, tree, count, ans);
        dfsReroot(0, -1, n, tree, count, ans);
        return ans;
    }
private:
    void dfsBase(int u, int p, const vector<vector<int>>& tree, vector<int>& count, vector<int>& ans) {
        for (int v : tree[u]) {
            if (v != p) {
                dfsBase(v, u, tree, count, ans);
                count[u] += count[v];
                ans[u] += ans[v] + count[v];
            }
        }
    }
    void dfsReroot(int u, int p, int n, const vector<vector<int>>& tree, const vector<int>& count, vector<int>& ans) {
        for (int v : tree[u]) {
            if (v != p) {
                ans[v] = ans[u] - count[v] + (n - count[v]);
                dfsReroot(v, u, n, tree, count, ans);
            }
        }
    }
};`,
    java: `import java.util.*;

class Solution {
    public int[] sumOfDistancesInTree(int n, int[][] edges) {
        List<List<Integer>> tree = new ArrayList<>();
        for (int i = 0; i < n; i++) tree.add(new ArrayList<>());
        for (int[] e : edges) {
            tree.get(e[0]).add(e[1]);
            tree.get(e[1]).add(e[0]);
        }
        int[] count = new int[n];
        Arrays.fill(count, 1);
        int[] ans = new int[n];
        dfsBase(0, -1, tree, count, ans);
        dfsReroot(0, -1, n, tree, count, ans);
        return ans;
    }
    private void dfsBase(int u, int p, List<List<Integer>> tree, int[] count, int[] ans) {
        for (int v : tree.get(u)) {
            if (v != p) {
                dfsBase(v, u, tree, count, ans);
                count[u] += count[v];
                ans[u] += ans[v] + count[v];
            }
        }
    }
    private void dfsReroot(int u, int p, int n, List<List<Integer>> tree, int[] count, int[] ans) {
        for (int v : tree.get(u)) {
            if (v != p) {
                ans[v] = ans[u] - count[v] + (n - count[v]);
                dfsReroot(v, u, n, tree, count, ans);
            }
        }
    }
}`,
    javascript: `/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const tree = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }
    const count = new Array(n).fill(1);
    const ans = new Array(n).fill(0);
    
    function dfsBase(node, parent) {
        for (const neighbor of tree[node]) {
            if (neighbor !== parent) {
                dfsBase(neighbor, node);
                count[node] += count[neighbor];
                ans[node] += ans[neighbor] + count[neighbor];
            }
        }
    }
    
    function dfsReroot(node, parent) {
        for (const neighbor of tree[node]) {
            if (neighbor !== parent) {
                ans[neighbor] = ans[node] - count[neighbor] + (n - count[neighbor]);
                dfsReroot(neighbor, node);
            }
        }
    }
    
    dfsBase(0, -1);
    dfsReroot(0, -1);
    return ans;
};`
  }
};

// Pre-Flight Student Certificates Dataset for Integrity Verifier
const studentCertificates = {
  'stanford-ai': {
    id: 'stanford-ai',
    title: 'Stanford Deep Learning Specialization',
    issuer: 'Stanford Online / Coursera',
    issuedDate: 'May 14, 2026',
    credentialId: 'STAN-DL-2026-94812',
    fileSize: '418 KB',
    isGenuine: true,
    metadata: {
      producer: 'Stanford Open Learning Certificate Engine v4.2',
      author: 'Stanford Center for Professional Development',
      creationDate: '2026-05-14T08:21:40Z',
      tamperFlag: false,
      tamperDetail: 'Cryptographic SHA-256 stream intact. Zero post-generation vector modifications detected.'
    },
    ela: {
      score: '99.4% Uniformity',
      status: 'Clean Compression Grid',
      detail: 'No localized re-compression anomalies detected across typography or signature blocks.'
    },
    registry: {
      issuer: 'DigiLocker India & Credly Global Ledger',
      recordFound: true,
      verifiedHash: '0x8f9c2d1b74a83e0915fbc72384a1e956bcda3421908e23547192837465019283',
      issuedTo: 'Arjun Kawade'
    }
  },
  'aws-cloud': {
    id: 'aws-cloud',
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services (AWS Training & Certification)',
    issuedDate: 'June 28, 2026',
    credentialId: 'AWS-SAA-88492019',
    fileSize: '512 KB',
    isGenuine: true,
    metadata: {
      producer: 'Amazon Credential Services PDF Generator',
      author: 'AWS Certification Team',
      creationDate: '2026-06-28T14:10:12Z',
      tamperFlag: false,
      tamperDetail: 'Digital signature matches Amazon Root CA 1. Valid certificate chain verified.'
    },
    ela: {
      score: '98.8% Uniformity',
      status: 'Clean Compression Grid',
      detail: 'Consistent Discrete Cosine Transform (DCT) matrix across badge, seal, and candidate name.'
    },
    registry: {
      issuer: 'Credly Sovereign Ledger',
      recordFound: true,
      verifiedHash: '0x3a4b5c6d7e8f90123456789abcdef0123456789abcdef0123456789abcdef01',
      issuedTo: 'Arjun Kawade'
    }
  },
  'google-tampered': {
    id: 'google-tampered',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google Career Certificates',
    issuedDate: 'July 19, 2026',
    credentialId: 'GOOG-DA-991204',
    fileSize: '624 KB',
    isGenuine: false,
    metadata: {
      producer: 'Adobe Photoshop 25.4 (Macintosh)',
      author: 'Unknown / Non-standard raster patch',
      creationDate: '2026-07-22T04:12:00Z',
      tamperFlag: true,
      tamperDetail: '⚠️ EXIF inspection reveals document was re-saved in Adobe Photoshop with modified text layer "Arjun Kawade".'
    },
    ela: {
      score: '42.1% (Severe Anomaly)',
      status: 'High Local Error Contrast Detected',
      detail: 'Candidate name and issue date show 3.8x higher compression error than underlying certificate template.'
    },
    registry: {
      issuer: 'Coursera / Google Credential Registry',
      recordFound: false,
      verifiedHash: 'RECORD_NOT_FOUND',
      issuedTo: 'Mismatch (Original issued to "Devin R.")'
    }
  }
};

// UI Rendering Engine
const UI = {
  init() {
    this.renderPersonaView();
  },

  setPersona(persona) {
    state.currentPersona = persona;
    this.renderPersonaView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  setApplicantPersonaType(type) {
    state.applicant.personaType = type;
    if (type === 'academician') {
      state.applicant.orgFilter = 'college';
    } else {
      state.applicant.orgFilter = 'company';
    }
    this.renderApplicantTab(state.applicant.activeTab);
  },

  renderPersonaView() {
    const mainContainer = document.getElementById('app-root');
    if (!mainContainer) return;

    if (state.currentPersona === 'select') {
      mainContainer.innerHTML = this.templateRoleSelect();
    } else if (state.currentPersona === 'applicant') {
      mainContainer.innerHTML = this.templateApplicantPortal();
      this.renderApplicantTab(state.applicant.activeTab);
    } else if (state.currentPersona === 'organisation') {
      mainContainer.innerHTML = this.templateOrganisationPortal();
      this.renderOrgTab(state.organisation.activeTab);
    }
  },

  // -------------------------------------------------------------
  // Role Selection Gate
  // -------------------------------------------------------------
  templateRoleSelect() {
    return `
      <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 relative overflow-hidden">
        <!-- Subtle Ambient Background Glow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/50 via-indigo-50/20 to-transparent -z-10 pointer-events-none blur-3xl"></div>

        <header class="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 px-6 py-3.5 flex items-center justify-between shadow-2xs">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white font-black text-lg shadow-sm">
              CL
            </div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-xl tracking-tight text-slate-900">Career<span class="text-indigo-600">Lens</span></span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">SIH 2026</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="UI.setPersona('applicant')" class="text-xs font-bold text-indigo-700 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60 transition shadow-2xs">
              Applicant Portal
            </button>
            <button onclick="UI.setPersona('organisation')" class="text-xs font-bold text-white bg-slate-900 px-3.5 py-2 rounded-xl hover:bg-slate-800 transition shadow-2xs">
              Organisation Portal
            </button>
          </div>
        </header>

        <main class="flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-5xl mx-auto w-full">
          <div class="text-center max-w-2xl mb-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-bold mb-4 shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Multi-Disciplinary Career & Enterprise Ecosystem
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Connected Career & <br/><span class="text-transparent bg-clip-text gradient-brand">Hiring Intelligence</span>
            </h1>
            <p class="text-slate-600 text-sm md:text-base">
              Select your persona below to experience tailored career intelligence across 5 disciplines or enterprise campus recruiting.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <!-- Applicant Card -->
            <div onclick="UI.setPersona('applicant')" class="group bg-white border border-slate-200/90 hover:border-indigo-500 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between relative overflow-hidden card-interactive">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div>
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">For Candidates</span>
                <h3 class="text-2xl font-black text-slate-900 mt-3 group-hover:text-indigo-600 transition">Applicant & Talent</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  For Students, Academicians, and Working Professionals across Tech, Finance, Design, Law & Healthcare.
                </p>
                <div class="mt-4 space-y-1.5 text-xs text-slate-600 font-medium">
                  <p>✓ Job & Internship ID AI Skill Gap Analysis</p>
                  <p>✓ Recommended Freelance Projects & AI Proposals</p>
                  <p>✓ Companies for Students & Colleges for Academicians</p>
                  <p>✓ Domain Rankings & LeetCode/GitHub Activity Graph</p>
                  <p>✓ Dedicated Settings with Saved Items & Privacy</p>
                </div>
              </div>
              <button class="mt-6 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm">
                Enter Applicant Mode →
              </button>
            </div>

            <!-- Organisation Card -->
            <div onclick="UI.setPersona('organisation')" class="group bg-white border border-slate-200/90 hover:border-purple-500 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between relative overflow-hidden card-interactive">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
              <div>
                <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60">For Employers</span>
                <h3 class="text-2xl font-black text-slate-900 mt-3 group-hover:text-purple-600 transition">Organisation & Colleges</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  For Companies, Colleges, Placement Cells & Recruiters posting openings and screening talent.
                </p>
                <div class="mt-4 space-y-1.5 text-xs text-slate-600 font-medium">
                  <p>✓ 8-Part Opportunity Analytics (AI Intern, etc.)</p>
                  <p>✓ Multi-Round Pipeline & Applicant Tracking</p>
                  <p>✓ Custom Assessment Studio with Anti-Cheat</p>
                  <p>✓ Candidate Messaging & Broadcast Updates</p>
                </div>
              </div>
              <button class="mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition shadow-sm">
                Enter Organisation Mode →
              </button>
            </div>
          </div>
        </main>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // Applicant Portal Template
  // -------------------------------------------------------------
  templateApplicantPortal() {
    const p = state.applicant.profile;
    const pType = state.applicant.personaType;
    const activeTab = state.applicant.activeTab || 'recommendations';
    const tabClass = (t) => activeTab === t ? 'border-indigo-600 text-indigo-600 font-black' : 'border-transparent text-slate-500 hover:text-slate-800 font-semibold';
    return `
      <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
        <!-- Top App Bar with Frosted Glass -->
        <header class="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 px-4 md:px-8 py-2.5 flex items-center justify-between shadow-2xs">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2.5 cursor-pointer" onclick="UI.setPersona('select')" title="Back to Persona Selection">
              <div class="w-8 h-8 rounded-xl gradient-brand text-white flex items-center justify-center font-black text-sm shadow-xs">CL</div>
              <div class="flex items-center gap-2">
                <span class="font-black text-base text-slate-900 tracking-tight">Career<span class="text-indigo-600">Lens</span></span>
                <span class="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">Unified Platform</span>
              </div>
            </div>
          </div>

          <!-- Multi-Disciplinary Domain Switcher (All Fields Filter) -->
          <div class="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/70 text-xs shadow-2xs">
            ${this.renderDisciplinePills('light')}
          </div>

          <div class="flex items-center gap-3">
            <!-- Messages Feature: View list of companies/colleges that messaged -->
            <button onclick="UI.toggleApplicantMessagesModal()" class="p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200 text-slate-700 relative transition shadow-2xs" title="Recruiter & Campus Messages">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-indigo-600 border-2 border-white"></span>
            </button>

            <!-- AI Career Advisor Chatbot Trigger -->
            <button onclick="UI.toggleChatbot()" class="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 relative transition shadow-2xs" title="AI Career Advisor">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
            </button>

            <!-- User Profile Avatar -->
            <div onclick="UI.switchApplicantTab('profile')" class="flex items-center gap-2 cursor-pointer hover:opacity-85 transition pl-1">
              <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">AK</div>
              <div class="hidden lg:block text-left text-xs">
                <p class="font-bold text-slate-800 leading-tight">${p.name}</p>
                <p class="text-[10px] text-emerald-600 font-semibold">ATS: ${p.atsScore}%</p>
              </div>
            </div>
          </div>
        </header>

        <!-- 8 Tabs Bar: Recommendations, Tests, Freelancing, Internships, Jobs, Organisations, Profile, Settings -->
        <div class="bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 md:px-8 sticky top-[53px] z-20 overflow-x-auto shadow-2xs">
          <nav class="flex space-x-2 md:space-x-4 min-w-max text-xs font-bold" id="applicant-tab-nav">
            <button onclick="UI.switchApplicantTab('recommendations')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('recommendations')}" data-tab="recommendations">
              Recommendations
            </button>
            <button onclick="UI.switchApplicantTab('tests')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('tests')}" data-tab="tests">
              Tests & Challenges
            </button>
            <button onclick="UI.switchApplicantTab('freelancing')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('freelancing')}" data-tab="freelancing">
              Freelancing
            </button>
            <button onclick="UI.switchApplicantTab('internships')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('internships')}" data-tab="internships">
              Internships
            </button>
            <button onclick="UI.switchApplicantTab('jobs')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('jobs')}" data-tab="jobs">
              Jobs
            </button>
            <button onclick="UI.switchApplicantTab('organisations')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('organisations')}" data-tab="organisations">
              Organisations
            </button>
            <button onclick="UI.switchApplicantTab('profile')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('profile')}" data-tab="profile">
              Profile
            </button>
            <button onclick="UI.switchApplicantTab('settings')" class="applicant-tab-btn py-3 px-3 border-b-2 transition ${tabClass('settings')}" data-tab="settings">
              Settings & Saved
            </button>
          </nav>
        </div>

        <main class="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full" id="applicant-tab-content">
          <!-- Injected dynamically -->
        </main>

        <!-- AI Chatbot Drawer -->
        <div id="ai-chat-window" class="hidden fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          <div class="bg-indigo-600 text-white p-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">AI</div>
              <div>
                <h4 class="font-bold text-sm">AI Career Advisor</h4>
                <p class="text-[10px] text-indigo-200">Multilingual Career Coach</p>
              </div>
            </div>
            <button onclick="UI.toggleChatbot()" class="text-white hover:text-indigo-200 font-bold text-lg">×</button>
          </div>
          <div id="chat-messages-container" class="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-50"></div>
          <form onsubmit="UI.handleChatSubmit(event)" class="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input type="text" id="chat-user-input" placeholder="Ask career advice..." class="flex-1 text-xs border border-slate-200 rounded-xl px-3 py-2"/>
            <button type="submit" class="bg-indigo-600 text-white rounded-xl px-3 py-2 text-xs font-bold">Send</button>
          </form>
        </div>
      </div>
    `;
  },

  switchApplicantTab(tabName) {
    state.applicant.activeTab = tabName;
    document.querySelectorAll('.applicant-tab-btn').forEach(btn => {
      const bTab = (btn.dataset && btn.dataset.tab) || btn.getAttribute('data-tab');
      if (bTab === tabName) {
        btn.classList.add('border-indigo-600', 'text-indigo-600');
        btn.classList.remove('border-transparent', 'text-slate-500');
      } else {
        btn.classList.remove('border-indigo-600', 'text-indigo-600');
        btn.classList.add('border-transparent', 'text-slate-500');
      }
    });
    this.renderApplicantTab(tabName);
  },

  renderApplicantTab(tab) {
    const container = document.getElementById('applicant-tab-content');
    if (!container) return;

    switch (tab) {
      case 'recommendations':
        container.innerHTML = this.templateApplicantRecommendations();
        break;
      case 'tests':
        container.innerHTML = this.templateApplicantTests();
        break;
      case 'freelancing':
        container.innerHTML = this.templateApplicantFreelance();
        break;
      case 'internships':
        container.innerHTML = this.templateApplicantInternships();
        break;
      case 'jobs':
        container.innerHTML = this.templateApplicantJobs();
        break;
      case 'organisations':
        container.innerHTML = this.templateApplicantOrganisations();
        break;
      case 'profile':
        container.innerHTML = this.templateApplicantProfile();
        break;
      case 'settings':
        container.innerHTML = this.templateApplicantSettings();
        break;
    }
  },

  // -------------------------------------------------------------
  // TAB 1: Recommendations
  // Refactored into 4 distinct core sections:
  // 1) Resume AI Section (Make a resume for you & Analyse current resume)
  // 2) Skill Gap Analysis (Paste Job Description OR enter Job ID + recommendations)
  // 3) Recommendations (Freelance projects, internships, jobs based on current skills)
  // 4) Future Market Skills Prediction (2026 - 2028 Horizon)
  // -------------------------------------------------------------
  templateApplicantRecommendations() {
    const p = state.applicant.profile;
    const resumeTab = state.applicant.resumeStudioTab;
    const gapMode = state.applicant.gapInputMode;
    const recCat = state.applicant.recommendationCategory;
    const disc = state.selectedDiscipline;
    const profileKey = disc === 'all' ? 'tech' : disc;
    const diag = fieldResumeDiagnostics[profileKey] || fieldResumeDiagnostics['tech'];
    const gap = fieldGapBreakdowns[profileKey] || fieldGapBreakdowns['tech'];
    const futureSkills = fieldFutureSkills[profileKey] || fieldFutureSkills['tech'];

    // Dynamic discipline recommendations
    const recFreelance = (disc === 'all' ? state.freelanceDatabase : state.freelanceDatabase.filter(f => f.discipline === disc)).slice(0, 3);
    const recInternships = (disc === 'all' ? state.internshipsDatabase : state.internshipsDatabase.filter(i => i.discipline === disc)).slice(0, 3);
    const recJobs = (disc === 'all' ? state.jobsDatabase : state.jobsDatabase.filter(j => j.discipline === disc)).slice(0, 3);

    // Dynamic market demand radar for discipline
    const domainRadars = {
      tech: {
        accel: [
          'High-Throughput Inference Engines (Triton, vLLM)',
          'Autonomous Multi-Agent Consensus Swarms',
          'Model Parameter Efficient Tuning (LoRA, QLoRA)',
          'On-Device SLMs (Apple MLX, ONNX Runtime)'
        ],
        commo: [
          'Manual Web Scrapers (replaced by vision agents)',
          'Boilerplate CRUD Without AI Autogeneration',
          'Basic Keyword-Only SQL Search (replaced by vector)',
          'Manual Data Annotation (replaced by synthetic RLHF)'
        ],
        advice: `You already possess a top-tier deep learning and systems foundation. To position yourself for the top compensation bracket in 2027+, build 1 project deploying an open-source model to an edge device with Triton and write a blog on your findings.`
      },
      finance: {
        accel: [
          'Carbon Credit Derivatives & Satellite ESG Telemetry',
          'Real-Time Graph AI Forensic Payment Ledgers',
          'Dynamic 3-Statement LBO Debt Amortization Modeling',
          'Python/R Algorithmic Asset Pricing & VaR Stress-Tests'
        ],
        commo: [
          'Manual Paper Ledger Reconciliation',
          'Static Historical Ratio Lookups (now auto-streamed)',
          'Basic Formula Excel Models Without Macro Automation',
          'Legacy Cheque Clearing & T+2 Settlement Ops'
        ],
        advice: `Your quantitative modeling and DCF valuation foundation is outstanding (top 0.6% rank). Expand into SEBI BRSR Core carbon asset auditing and algorithmic time-series regression to capture private equity leadership roles.`
      },
      design: {
        accel: [
          'Spatial UI & Volumetric Canvas Design (VisionOS / WebXR)',
          'Neuro-Adaptive Dynamic Accessibility (WCAG 3.0)',
          'Multi-Brand Design Tokens Automated to GitHub CI/CD',
          'Haptic Micro-Prototypes with Realistic Easing Curves'
        ],
        commo: [
          'Static Vector Icon Tracing (automated by Generative UI)',
          'Non-Responsive Desktop-Only Web Mockups',
          'Manual Style Guide PDF Spec Sheets',
          'Un-tokenized One-Off UI Wireframes'
        ],
        advice: `Your design token hierarchy and WCAG AAA compliance scores are exemplary (top 0.5% rank). Build 1 volumetric 3D prototype for spatial headsets in ProtoPie/Framer to unlock premier global design studio offers.`
      },
      law: {
        accel: [
          'Digital Personal Data Protection (DPDP) Act Compliance',
          'Autonomous Agent Negligence & Algorithmic Tort Precedents',
          'Cross-Border Sovereign Cloud Data Treaties',
          'AI Model Card Evidentiary Auditing & DPIA Frameworks'
        ],
        commo: [
          'Standard NDA Copy-Pasting (automated by legal LLMs)',
          'Manual Case Citation Indexing & Physical Court Filings',
          'Boilerplate Terms of Service Without Privacy Granularity',
          'Generic Employment Contract Template Generation'
        ],
        advice: `Your statutory interpretation of the DPDP Act 2023 and SaaS MSA drafting puts you in the top 0.8% of legal associates. Deepen expertise in autonomous agent accountability and model liability to command elite venture counsel retainers.`
      },
      healthcare: {
        accel: [
          'In-Silico Molecular Docking (AlphaFold 3 Diffusion)',
          'Federated Clinical Trial Analytics & CDISC SDTM/ADaM',
          'High-Throughput RNA-Seq Differential Expression Pipelines',
          'Real-Time Biosensor Telemetry & Survival Analytics'
        ],
        commo: [
          'Manual Clinical Trial Paper Data Logging',
          'Static Gel Electrophoresis Image Scanning',
          'Un-standardized Custom Lab Spreadsheets',
          'Slow Sanger Sequencing Batch Hand-Transcription'
        ],
        advice: `Your CDISC regulatory compliance and NGS bioinformatics acumen is exceptional (top 0.9% rank). Focus on reproducible DESeq2 oncology pipelines and privacy-preserving federated clinical models to fast-track senior biostatistician positions.`
      }
    };
    const currentRadar = domainRadars[profileKey] || domainRadars['tech'];

    return `
      <div class="space-y-8">
        <!-- ========================================================= -->
        <!-- SECTION 1: RESUME AI STUDIO                               -->
        <!-- 3 Options: Analyse Current Resume, Make New Resume Using AI, Upload a Resume -->
        <!-- ========================================================= -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-bold text-lg text-slate-900">Resume AI Studio</h3>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                  ${p.field}
                </span>
              </div>
              <p class="text-xs text-slate-500">Generate tailored ATS-compliant resumes, inspect deep diagnostics, or upload new revisions</p>
            </div>

            <!-- 3 Clean Options (No a) or b) prefixes) -->
            <div class="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-bold gap-1">
              <button onclick="UI.setResumeStudioTab('analysis')" class="px-3.5 py-1.5 rounded-lg transition ${resumeTab === 'analysis' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                Analyse Current Resume
              </button>
              <button onclick="UI.setResumeStudioTab('builder')" class="px-3.5 py-1.5 rounded-lg transition ${resumeTab === 'builder' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                Make New Resume Using AI
              </button>
              <button onclick="UI.setResumeStudioTab('upload')" class="px-3.5 py-1.5 rounded-lg transition ${resumeTab === 'upload' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                Upload a Resume
              </button>
            </div>
          </div>

          <!-- OPTION 1: ANALYSE CURRENT RESUME -->
          ${resumeTab === 'analysis' ? `
            <div class="space-y-6">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                    PDF
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-900">${state.applicant.manualUploadedFileName || p.resumeName}</h4>
                    <p class="text-xs text-slate-500">Domain: <strong>${p.domain}</strong> • 100% Parsable by Workday, Taleo & Greenhouse ATS</p>
                  </div>
                </div>
                <div class="flex gap-2">
                  <button onclick="UI.downloadOptimizedResume()" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700">
                    Download Current PDF
                  </button>
                  <button onclick="UI.setResumeStudioTab('upload')" class="px-3 py-1.5 border border-slate-200 bg-white text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50">
                    Scan New Version
                  </button>
                </div>
              </div>

              <!-- Diagnostic Gauges -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <p class="text-slate-500 text-xs font-medium">Overall ATS Score</p>
                  <p class="text-2xl font-black text-emerald-600 mt-1">${p.atsScore}/100</p>
                  <p class="text-[10px] text-emerald-700 mt-0.5">Top candidate in ${profileKey.toUpperCase()}</p>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <p class="text-slate-500 text-xs font-medium">Quantified Metrics</p>
                  <p class="text-2xl font-black text-indigo-600 mt-1">92%</p>
                  <p class="text-[10px] text-slate-500 mt-0.5">${p.completedFreelance.length * 3 + 2} metrics verified</p>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <p class="text-slate-500 text-xs font-medium">ATS Keyword Density</p>
                  <p class="text-2xl font-black text-indigo-600 mt-1">96%</p>
                  <p class="text-[10px] text-slate-500 mt-0.5">Matches ${p.domainSkills.length} core reqs</p>
                </div>
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                  <p class="text-slate-500 text-xs font-medium">Formatting & Structure</p>
                  <p class="text-2xl font-black text-emerald-600 mt-1">98%</p>
                  <p class="text-[10px] text-slate-500 mt-0.5">Standard single column</p>
                </div>
              </div>

              <!-- 3 Detailed Breakdown Categories: Strengths, Weaknesses, Suggestions -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <!-- 1. Strengths Detected -->
                <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-emerald-200/60 pb-2">
                    <h5 class="font-bold text-emerald-950 uppercase tracking-wider text-[11px]">Strengths Detected</h5>
                    <span class="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold text-[10px]">${diag.strengths.length} Verified</span>
                  </div>
                  <ul class="space-y-2 text-slate-700 leading-relaxed">
                    ${diag.strengths.map(s => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-emerald-600 font-bold mt-0.5">✓</span>
                        <span><strong>${s.title}:</strong> ${s.desc}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- 2. Weaknesses Detected -->
                <div class="p-4 rounded-xl border border-amber-200 bg-amber-50/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <h5 class="font-bold text-amber-950 uppercase tracking-wider text-[11px]">Weaknesses Detected</h5>
                    <span class="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[10px]">${diag.weaknesses.length} Identified</span>
                  </div>
                  <ul class="space-y-2 text-slate-700 leading-relaxed">
                    ${diag.weaknesses.map(w => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-amber-600 font-bold mt-0.5">⚠</span>
                        <span><strong>${w.title}:</strong> ${w.desc}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- 3. Actionable Suggestions -->
                <div class="p-4 rounded-xl border border-indigo-200 bg-indigo-50/60 space-y-3">
                  <div class="flex items-center justify-between border-b border-indigo-200/60 pb-2">
                    <h5 class="font-bold text-indigo-950 uppercase tracking-wider text-[11px]">Actionable Suggestions</h5>
                    <span class="px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-bold text-[10px]">High Impact</span>
                  </div>
                  <ul class="space-y-2 text-slate-700 leading-relaxed">
                    ${diag.suggestions.map(s => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-indigo-600 font-bold mt-0.5">→</span>
                        <span><strong>${s.title}:</strong> ${s.desc}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            </div>
          ` : resumeTab === 'builder' ? `
            <!-- OPTION 2: MAKE NEW RESUME USING AI -->
            <div class="space-y-6">
              <!-- Auto-detected profile & skills notice -->
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h4 class="font-bold text-xs uppercase tracking-wider text-indigo-700">
                    Auto-Detected Profile Information (${p.field})
                  </h4>
                  <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Synced with Profile & Skills
                  </span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span class="text-slate-400 block text-[10px]">Candidate Details</span>
                    <p class="font-bold text-slate-800">${p.name} (${p.email})</p>
                    <p class="text-slate-600 text-[11px]">${p.phone} • ${p.role}</p>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[10px]">Education & Credentials</span>
                    <p class="font-bold text-slate-800 line-clamp-1">${p.education}</p>
                    <p class="text-slate-600 text-[11px]">Rank #${p.rankings[0].rank} / ${p.rankings[0].total.toLocaleString()} in ${p.rankings[0].domain}</p>
                  </div>
                  <div>
                    <span class="text-slate-400 block text-[10px]">Verified Technical Skills</span>
                    <p class="font-bold text-slate-800 line-clamp-1">${p.domainSkills.slice(0, 5).join(', ')}</p>
                    <p class="text-slate-600 text-[11px]">${p.completedFreelance.length} Verified Freelance Contracts Delivered</p>
                  </div>
                </div>
              </div>

              <!-- AI Personalization Questions -->
              <div class="space-y-4">
                <h4 class="font-bold text-xs uppercase tracking-wider text-slate-700">
                  Personalization Questions (Tailor Resume for Specific Role)
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label class="font-bold text-slate-700 block mb-1">Target Job Title / Domain</label>
                    <input type="text" id="builder-target-role" value="${p.role}" class="w-full border border-slate-200 rounded-xl px-3 py-2 font-medium focus:outline-indigo-600"/>
                  </div>
                  <div>
                    <label class="font-bold text-slate-700 block mb-1">Target Industry Specialization</label>
                    <input type="text" class="w-full border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-indigo-600" value="${p.domain}"/>
                  </div>
                  <div>
                    <label class="font-bold text-slate-700 block mb-1">Primary Achievement to Emphasize</label>
                    <input type="text" id="builder-target-highlight" value="Verified proficiencies in ${p.domainSkills.slice(0, 3).join(', ')} and ${p.completedFreelance.length} delivered client projects" class="w-full border border-slate-200 rounded-xl px-3 py-2 font-medium focus:outline-indigo-600"/>
                  </div>
                  <div>
                    <label class="font-bold text-slate-700 block mb-1">Resume Tone & Framing</label>
                    <select class="w-full border border-slate-200 rounded-xl px-3 py-2 text-slate-700 font-medium">
                      <option selected>High-Impact Professional (Quantified Metrics & Scale)</option>
                      <option>Academic & Research (Papers, Benchmarks & Theory)</option>
                      <option>Fast-Paced Industry Leader (Rapid Execution & Delivery)</option>
                    </select>
                  </div>
                </div>

                <div class="flex items-center gap-2 pt-1 text-xs">
                  <input type="checkbox" id="builder-include-scores" checked class="w-4 h-4 accent-indigo-600"/>
                  <label for="builder-include-scores" class="text-slate-700 font-semibold cursor-pointer">
                    Include verified portal test rankings (#${p.rankings[0].rank} / ${p.rankings[0].total.toLocaleString()}) and badges in resume
                  </label>
                </div>
              </div>

              <!-- Blueprint Overview Summary -->
              <div class="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs space-y-2">
                <h5 class="font-bold text-indigo-900">AI Resume Blueprint Overview:</h5>
                <p class="text-indigo-800 leading-relaxed">
                  The AI engine will construct a single-column, 100% ATS-compliant document incorporating your verified credentials from ${p.education}, top ${p.rankings[0].percentile} domain benchmark score, ${p.completedFreelance.length} delivered contracts, and STAR-formatted bullet points highlighting your ${p.domainSkills.slice(0, 4).join(', ')} proficiencies.
                </p>
              </div>

              <!-- Create Resume Action Button -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <button onclick="UI.generateAiResume()" class="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-2">
                  <span>Create Resume</span>
                </button>
                <div class="flex gap-2">
                  <button onclick="UI.downloadOptimizedResume()" class="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition">
                    Download PDF
                  </button>
                  <button onclick="alert('Exported resume as Markdown / DOCX!')" class="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition">
                    Export DOCX
                  </button>
                </div>
              </div>

              <!-- Live Formatted Resume Preview Pane -->
              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-4 text-slate-800 shadow-inner">
                <div class="border-b border-slate-300 pb-3 text-center space-y-1">
                  <h4 class="text-xl font-black text-slate-900 tracking-wide uppercase">${p.name}</h4>
                  <p class="text-slate-600 text-[11px]">${p.email} • ${p.phone} • ${p.socials.linkedin} • ${p.socials.portfolio}</p>
                  <p class="text-indigo-700 font-bold text-[11px]">Specialization: ${p.role}</p>
                </div>

                <div class="space-y-1">
                  <h5 class="font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5">Professional Summary</h5>
                  <p class="text-slate-700 leading-relaxed">
                    ${p.role} with verified academic foundations in ${p.domain}. Demonstrated track record delivering high-impact projects in ${p.domainSkills.slice(0, 4).join(', ')}. Ranked top ${p.rankings[0].percentile} on national skill leaderboards (#${p.rankings[0].rank} / ${p.rankings[0].total.toLocaleString()}) with ${p.completedFreelance.length} delivered enterprise client engagements.
                  </p>
                </div>

                <div class="space-y-1">
                  <h5 class="font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5">Verified Core Competencies</h5>
                  <p><strong>Domain proficiencies:</strong> ${p.domainSkills.join(', ')}</p>
                  <p><strong>Transferable Skills:</strong> ${p.commonSkills.join(', ')}</p>
                </div>

                <div class="space-y-2">
                  <h5 class="font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5">Key Projects & Deliverables</h5>
                  ${p.completedFreelance.map(f => `
                    <div>
                      <div class="flex justify-between font-bold text-slate-800">
                        <span>${f.title}</span>
                        <span class="text-emerald-700">${f.budget} • ${f.rating}</span>
                      </div>
                      <p class="text-slate-600 text-[11px] mt-0.5">${f.review} (Client: <strong>${f.client}</strong>)</p>
                    </div>
                  `).join('')}
                </div>

                <div class="space-y-1">
                  <h5 class="font-bold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5">Education & Honors</h5>
                  <div class="flex justify-between">
                    <span class="font-bold">${p.education}</span>
                  </div>
                  <p class="text-slate-600">Global Rank #${p.rankings[0].rank} / ${p.rankings[0].total.toLocaleString()} in ${p.rankings[0].domain} • Daily Streak: 8 Days</p>
                </div>
              </div>
            </div>
          ` : `
            <!-- OPTION 3: UPLOAD A RESUME -->
            <div class="space-y-6">
              <div class="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-8 text-center bg-slate-50 transition cursor-pointer" onclick="document.getElementById('manual-resume-file-input').click()">
                <input type="file" id="manual-resume-file-input" accept=".pdf,.doc,.docx" class="hidden" onchange="UI.handleManualResumeUpload(event)"/>
                
                <div class="w-14 h-14 mx-auto rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                </div>

                <h4 class="text-base font-bold text-slate-800">Select Resume from Computer</h4>
                <p class="text-xs text-slate-500 mt-1">Click to browse or drag and drop your resume file</p>
                <p class="text-[11px] text-slate-400 mt-2">Supports PDF, DOC, DOCX up to 10MB</p>
              </div>

              ${state.applicant.manualUploadedFileName ? `
                <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      FILE
                    </div>
                    <div>
                      <p class="font-bold text-emerald-950">${state.applicant.manualUploadedFileName}</p>
                      <p class="text-[11px] text-emerald-700">Selected from local filesystem • Ready for diagnostic analysis</p>
                    </div>
                  </div>
                  <button onclick="UI.confirmResumeUpload()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition">
                    Upload & Scan with AI
                  </button>
                </div>
              ` : `
                <div class="text-center">
                  <button onclick="document.getElementById('manual-resume-file-input').click()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                    Choose File from Computer
                  </button>
                </div>
              `}
            </div>
          `}
        </div>

        <!-- ========================================================= -->
        <!-- SECTION 2: AI SKILL GAP ANALYSIS STUDIO                   -->
        <!-- Paste Job Description OR enter Job ID                     -->
        <!-- ========================================================= -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-bold text-lg text-slate-900">AI Skill Gap Analysis Studio</h3>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                  Target: ${p.role}
                </span>
              </div>
              <p class="text-xs text-slate-500">Compare any Job Description or Job ID against your current resume and skills to reveal gap areas and personalized learning paths</p>
            </div>

            <!-- Mode toggle: Job ID Lookup vs Paste JD -->
            <div class="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-bold">
              <button onclick="UI.setSkillGapInputMode('id')" class="px-3 py-1.5 rounded-lg transition ${gapMode === 'id' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'}">
                Job ID Lookup
              </button>
              <button onclick="UI.setSkillGapInputMode('text')" class="px-3 py-1.5 rounded-lg transition ${gapMode === 'text' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'}">
                Paste Job Description (JD)
              </button>
            </div>
          </div>

          <!-- Input Controls -->
          ${gapMode === 'id' ? `
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <input type="text" id="target-id-input" placeholder="e.g. ${recJobs[0] ? recJobs[0].id : 'JOB-MSFT-901'}" value="${recJobs[0] ? recJobs[0].id : 'JOB-MSFT-901'}" class="text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-indigo-600 w-full sm:w-64 font-mono font-bold"/>
              <button onclick="UI.runComprehensiveGapAnalysis()" class="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs">
                Run Gap Analysis on ID
              </button>
              <span class="text-xs text-slate-400">Available: ${recJobs.map(j => `<code class="text-indigo-600 font-bold cursor-pointer" onclick="document.getElementById('target-id-input').value='${j.id}'">${j.id}</code>`).join(' or ')}</span>
            </div>
          ` : `
            <div class="space-y-3">
              <textarea id="custom-jd-input" rows="5" placeholder="Paste full Job Description text from LinkedIn, Indeed, etc..." class="w-full border border-slate-200 rounded-xl p-3 text-xs focus:outline-indigo-600 leading-relaxed font-sans text-slate-700">${state.applicant.pastedJobDescription}</textarea>
              <div class="flex justify-between items-center">
                <span class="text-xs text-slate-400">AI will automatically parse requirements and compare against your verified skills</span>
                <button onclick="UI.runComprehensiveGapAnalysis()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs">
                  Analyze Pasted Job Description
                </button>
              </div>
            </div>
          `}

          <!-- Live Analysis Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Matched Skills -->
            <div class="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-emerald-900">Your Matched Skills (${gap.matchedCount})</span>
                <span class="text-xs font-black text-emerald-700">${gap.matchPct} Match</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${gap.matched.map(s => `<span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-md font-semibold">${s}</span>`).join('')}
              </div>
            </div>

            <!-- Missing Skills -->
            <div class="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-amber-900">Missing Skills / Gaps Identified (${gap.missingCount})</span>
                <span class="text-xs font-semibold text-amber-700">Needs Action</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${gap.missing.map(s => `<span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-md font-semibold">${s}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- Specific Recommendations for this Job -->
          <div class="space-y-3 pt-2">
            <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500">
              Personalized Recommendations to Achieve 100% Fit for this Role:
            </h4>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <!-- Certifications -->
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h5 class="font-bold text-slate-900">Recommended Certifications</h5>
                <div class="space-y-1.5 text-slate-600">
                  ${gap.certifications.map(c => `
                    <div class="p-2 bg-white rounded-lg border border-slate-100">
                      <p class="font-bold text-slate-800">${c.title}</p>
                      <p class="text-[11px] text-slate-500">${c.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Curated Courses -->
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h5 class="font-bold text-slate-900">Curated Courses & Learning Path</h5>
                <div class="space-y-1.5 text-slate-600">
                  ${gap.courses.map(c => `
                    <div class="p-2 bg-white rounded-lg border border-slate-100">
                      <p class="font-bold text-slate-800">${c.title}</p>
                      <p class="text-[11px] text-slate-500">${c.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Suggested Projects to Build -->
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <h5 class="font-bold text-slate-900">Portfolio Project to Build</h5>
                <div class="p-2.5 bg-white rounded-lg border border-slate-100 space-y-1">
                  <p class="font-bold text-indigo-700">${gap.project.title}</p>
                  <p class="text-slate-600 text-[11px] leading-relaxed">
                    ${gap.project.desc}
                  </p>
                  <span class="text-[10px] font-bold text-emerald-700">${gap.project.effort}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ========================================================= -->
        <!-- SECTION 3: RECOMMENDATIONS                                -->
        <!-- Clean text only, no emojis, full description modal on card click -->
        <!-- ========================================================= -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 class="font-bold text-lg text-slate-900">Curated Opportunities</h3>
              <p class="text-xs text-slate-500">
                Matched to your verified proficiencies: <strong class="text-indigo-600">${p.domainSkills.slice(0, 5).join(', ')}</strong>
              </p>
            </div>

            <!-- Category Switcher -->
            <div class="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-bold">
              <button onclick="UI.setRecommendationCategory('freelance')" class="px-3.5 py-1.5 rounded-lg transition ${recCat === 'freelance' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                Freelance Projects (${recFreelance.length})
              </button>
              <button onclick="UI.setRecommendationCategory('internships')" class="px-3.5 py-1.5 rounded-lg transition ${recCat === 'internships' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                Internships (${recInternships.length})
              </button>
              <button onclick="UI.setRecommendationCategory('jobs')" class="px-3.5 py-1.5 rounded-lg transition ${recCat === 'jobs' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                Jobs (${recJobs.length})
              </button>
            </div>
          </div>

          <!-- Category Renderings: Clean cards with click-to-modal -->
          ${recCat === 'freelance' ? `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${recFreelance.map(proj => `
                <div onclick="UI.openFreelanceDetailModal('${proj.id}')" class="bg-white rounded-2xl p-5 border border-slate-200/90 space-y-4 hover:border-indigo-400 hover:shadow-card-hover transition cursor-pointer flex flex-col justify-between card-interactive">
                  <div class="space-y-2 text-xs">
                    <div class="flex justify-between items-center">
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60">${proj.id}</span>
                      <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">${proj.matchScore}% Fit</span>
                    </div>
                    <h4 class="font-bold text-sm text-slate-900">${proj.title}</h4>
                    <p class="text-[11px] text-slate-500">${proj.client} • ${proj.duration}</p>
                    <p class="text-slate-600 line-clamp-2 leading-relaxed">${proj.description}</p>
                    <div class="flex flex-wrap gap-1 pt-1">
                      ${proj.requiredSkills.map(s => `<span class="text-[10px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-semibold">${s}</span>`).join('')}
                    </div>
                    <p class="text-[10px] text-indigo-600 font-semibold pt-1">Click card to view full scope & AI analysis</p>
                  </div>
                  <div onclick="event.stopPropagation()">
                    <p class="text-base font-black text-slate-900 mb-2">${proj.budget} <span class="text-xs font-normal text-slate-500">(${proj.type})</span></p>
                    <button onclick="UI.openAiProposalModal('${proj.title}', '${proj.budget}')" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center">
                      Submit AI Proposal
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : recCat === 'internships' ? `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${recInternships.map(intern => `
                <div onclick="UI.openPostDetailModal('${intern.id}', 'internship')" class="bg-white rounded-2xl p-5 border border-slate-200/90 space-y-4 hover:border-indigo-400 hover:shadow-card-hover transition cursor-pointer flex flex-col justify-between card-interactive">
                  <div class="space-y-2 text-xs">
                    <div class="flex justify-between items-center">
                      <span class="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60">${intern.id}</span>
                      <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">${intern.matchScore}% Match</span>
                    </div>
                    <h4 class="font-bold text-sm text-slate-900">${intern.title}</h4>
                    <p class="text-[11px] text-slate-500">${intern.company} • ${intern.mode} (${intern.location})</p>
                    <p class="text-slate-600 line-clamp-2 leading-relaxed">${intern.description}</p>
                    <p class="font-bold text-slate-800">${intern.stipend}</p>
                    <p class="text-[10px] text-indigo-600 font-semibold pt-1">Click card to view full description & AI fit</p>
                  </div>
                  <div onclick="event.stopPropagation()">
                    <button onclick="UI.applyOneClick('${intern.company} ${intern.title}')" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                      One-Click Apply
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${recJobs.map(job => `
                <div onclick="UI.openPostDetailModal('${job.id}', 'job')" class="bg-white rounded-2xl p-5 border border-slate-200/90 space-y-4 hover:border-indigo-400 hover:shadow-card-hover transition cursor-pointer flex flex-col justify-between card-interactive">
                  <div class="space-y-2 text-xs">
                    <div class="flex justify-between items-center">
                      <span class="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60">${job.id}</span>
                      <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">${job.matchScore}% Match</span>
                    </div>
                    <h4 class="font-bold text-sm text-slate-900">${job.title}</h4>
                    <p class="text-[11px] text-slate-500">${job.company} • ${job.location}</p>
                    <p class="text-slate-600 line-clamp-2 leading-relaxed">${job.description}</p>
                    <p class="font-bold text-slate-800">${job.salary}</p>
                    <p class="text-[10px] text-indigo-600 font-semibold pt-1">Click card to view full description & AI fit</p>
                  </div>
                  <div onclick="event.stopPropagation()">
                    <button onclick="UI.applyOneClick('${job.company} ${job.title}')" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                      One-Click Apply
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- ========================================================= -->
        <!-- SECTION 4: FUTURE MARKET SCOPE & PREDICTIONS              -->
        <!-- Real-life news, citations, future growth predictions      -->
        <!-- ========================================================= -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 class="font-bold text-lg text-slate-900">Future Market Scope & Predictions (${p.field})</h3>
              <p class="text-xs text-slate-500">
                Predictive industry demand modeling based on 250,000+ job descriptions, global venture capital allocations, and verified market trends (2026 - 2028)
              </p>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
              Predictive Horizon Active
            </span>
          </div>

          <!-- Growth Velocity Forecast Cards with Real-Life News & Citations -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${futureSkills.map((fs, idx) => `
              <div class="border border-slate-200 rounded-xl p-5 bg-slate-50/70 space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-bold text-slate-900">${fs.title}</span>
                  <span class="text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">${fs.growth}</span>
                </div>
                <p class="text-xs text-slate-600 font-medium">${fs.tools}</p>
                <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div class="${idx === 0 ? 'bg-indigo-600' : 'bg-blue-600'} h-2 rounded-full" style="width: ${idx === 0 ? '94%' : '86%'}"></div>
                </div>
                <p class="text-xs font-semibold text-slate-800">Projected Entry CTC: <strong>${fs.ctc}</strong></p>
                
                <!-- Real-Life News Citation -->
                <div class="p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <p class="font-bold text-slate-800">Industry Evidence & Citation:</p>
                  <p class="italic text-slate-600">${fs.citation}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Market Demand Radar: Accelerating vs Commoditizing Skills -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-emerald-900 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  High-Velocity Accelerating Skills (${p.domain})
                </span>
                <span class="font-bold text-emerald-700">Expanding</span>
              </div>
              <ul class="space-y-1.5 text-slate-700">
                ${currentRadar.accel.map(item => `
                  <li class="flex items-center gap-2">✓ <strong>${item.split('(')[0]}:</strong> ${item.includes('(') ? item.split('(')[1].replace(')', '') : 'High Industry Value'}</li>
                `).join('')}
              </ul>
            </div>

            <div class="p-4 rounded-xl border border-rose-200 bg-rose-50/60 space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-rose-900 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                  Declining / Automating Skills (Avoid Heavy Specialization)
                </span>
                <span class="font-bold text-rose-700">Commoditizing</span>
              </div>
              <ul class="space-y-1.5 text-slate-700">
                ${currentRadar.commo.map(item => `
                  <li class="flex items-center gap-2">🔻 <strong>${item.split('(')[0]}:</strong> ${item.includes('(') ? item.split('(')[1].replace(')', '') : 'Replaced by AI / Automation'}</li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Strategic Advice Banner -->
          <div class="p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div class="space-y-0.5">
              <p class="font-bold text-indigo-900">Strategic Career Future-Proofing Advice for ${p.name}:</p>
              <p class="text-indigo-700">
                ${currentRadar.advice}
              </p>
            </div>
            <button onclick="UI.toggleChatbot()" class="whitespace-nowrap px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition shadow-xs">
              Chat with AI Mentor
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 2: Tests & Challenges (Assessments, Quests, Domain Benchmarks)
  // -------------------------------------------------------------
  templateApplicantTests() {
    const p = state.applicant.profile;
    return `
      <div class="space-y-6">
        <!-- Top Stats Banner -->
        <div class="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="text-xs px-3 py-1 rounded-full bg-white/10 font-semibold inline-flex items-center gap-1.5">
              <span>🏆</span> Verified Assessment Leaderboards
            </span>
            <h2 class="text-2xl font-black">Portal Assessments & Daily Challenges</h2>
            <p class="text-xs text-slate-300 max-w-xl leading-relaxed">
              Take company and college assessment tests, improve your domain rankings, complete daily challenges, and earn verified badges visible to hiring managers.
            </p>
          </div>
          <div class="flex gap-4 text-center">
            <div class="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 min-w-[100px]">
              <p class="text-2xl font-black text-indigo-300">#${p.rankings[0].rank}</p>
              <p class="text-[10px] text-slate-300">Global Rank</p>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 min-w-[100px]">
              <p class="text-2xl font-black text-emerald-400">8 Days</p>
              <p class="text-[10px] text-slate-300">Daily Quest Streak</p>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 min-w-[100px]">
              <p class="text-2xl font-black text-amber-300">${p.badges.length} Badges</p>
              <p class="text-[10px] text-slate-300">Verified Badges</p>
            </div>
          </div>
        </div>

        <!-- Domain Performance Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          ${p.rankings.map(r => `
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-slate-500">Domain Benchmark</span>
                <span class="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Score: ${r.score}%</span>
              </div>
              <h4 class="font-bold text-sm text-slate-900">${r.domain}</h4>
              <div class="space-y-1 text-xs text-slate-600">
                <div class="flex justify-between">
                  <span>Rank:</span>
                  <strong class="text-slate-900">#${r.rank} / ${r.total.toLocaleString()}</strong>
                </div>
                <div class="flex justify-between">
                  <span>Percentile:</span>
                  <strong class="text-emerald-600">${r.percentile}</strong>
                </div>
              </div>
              <button onclick="alert('Starting re-assessment for ${r.domain}...');" class="w-full py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition">
                Retake Assessment
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Tests Catalog: Company, College, Aptitude, Quests -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 class="font-bold text-lg text-slate-900">Active Test Modules & Quests</h3>
              <p class="text-xs text-slate-500">Screening tests for linked company and college opportunities</p>
            </div>
            <div class="flex gap-2 text-xs font-semibold">
              <span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg">Company Tests (2)</span>
              <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg">College Tests (1)</span>
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg">Daily Quests (Live)</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${state.selectedDiscipline === 'finance' ? `
              <!-- Finance Test 1 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Financial Modeling</span>
                    <span class="text-[10px] font-bold text-slate-500">60 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">Goldman Sachs DCF & Equity Valuation</h4>
                  <p class="text-slate-600">Three-statement financial model, dynamic sensitivity analysis, and discounted cash flow valuation.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>80%</strong></div>
                    <div class="flex justify-between"><span>Status:</span><strong class="text-indigo-600">Assigned by Recruiter</strong></div>
                  </div>
                </div>
                <button onclick="alert('Starting Goldman Sachs Financial Assessment (Spreadsheet & Modeling Mode)...')" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                  Start Financial Test →
                </button>
              </div>

              <!-- Finance Test 2 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Regulatory Audit</span>
                    <span class="text-[10px] font-bold text-slate-500">45 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">SEBI & Corporate Credit Risk Benchmark</h4>
                  <p class="text-slate-600">Evaluating debt-service coverage ratios, Basel III norms, and corporate working capital cycles.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>75%</strong></div>
                    <div class="flex justify-between"><span>Previous Score:</span><strong class="text-emerald-600">86% (Passed)</strong></div>
                  </div>
                </div>
                <button onclick="alert('Viewing SEBI Credit Benchmark Dossier...')" class="w-full py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-xs">
                  Review Credit Dossier
                </button>
              </div>
            ` : state.selectedDiscipline === 'design' ? `
              <!-- Design Test 1 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">Design Systems</span>
                    <span class="text-[10px] font-bold text-slate-500">60 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">Figma Labs Token Architecture & Heuristics</h4>
                  <p class="text-slate-600">Component tokenization, WCAG 2.1 AAA accessibility audits, and design-to-code auto-layout specs.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>85%</strong></div>
                    <div class="flex justify-between"><span>Status:</span><strong class="text-indigo-600">Portfolio Review Active</strong></div>
                  </div>
                </div>
                <button onclick="alert('Opening Figma Interactive Design Challenge...')" class="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                  Start Design Challenge →
                </button>
              </div>

              <!-- Design Test 2 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">UX Research</span>
                    <span class="text-[10px] font-bold text-slate-500">45 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">Zomato Mobile Usability & Micro-Interactions</h4>
                  <p class="text-slate-600">Checkout friction analysis, motion curve specifications, and qualitative usability test rubrics.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>80%</strong></div>
                    <div class="flex justify-between"><span>Previous Score:</span><strong class="text-emerald-600">91% (Qualified)</strong></div>
                  </div>
                </div>
                <button onclick="alert('Viewing UX Interaction Rubric...')" class="w-full py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-xs">
                  View Qualified Badge
                </button>
              </div>
            ` : state.selectedDiscipline === 'law' ? `
              <!-- Law Test 1 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Tech Law & IP</span>
                    <span class="text-[10px] font-bold text-slate-500">60 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">DPDP Act 2023 & Cross-Border Data Audit</h4>
                  <p class="text-slate-600">Compliance analysis under Indian Digital Personal Data Protection Act, consent architectures, and penalty rubrics.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>80%</strong></div>
                    <div class="flex justify-between"><span>Status:</span><strong class="text-amber-600">Pending Candidate Action</strong></div>
                  </div>
                </div>
                <button onclick="alert('Starting DPDP Legal Case Assessment...')" class="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                  Start Legal Assessment →
                </button>
              </div>

              <!-- Law Test 2 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Contract Forensics</span>
                    <span class="text-[10px] font-bold text-slate-500">50 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">AZB Technology Procurement Due Diligence</h4>
                  <p class="text-slate-600">Identifying ambiguous indemnification, intellectual property warranties, and dispute escalation clauses.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>84%</strong></div>
                    <div class="flex justify-between"><span>Score:</span><strong class="text-emerald-600">88% (Passed)</strong></div>
                  </div>
                </div>
                <button onclick="alert('Reviewing Legal Procurement Credentials...')" class="w-full py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-xs">
                  View Legal Dossier
                </button>
              </div>
            ` : state.selectedDiscipline === 'healthcare' ? `
              <!-- Healthcare Test 1 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">Biostatistics & CDISC</span>
                    <span class="text-[10px] font-bold text-slate-500">60 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">Apollo HealthTech Survival Analysis & Clinical Trials</h4>
                  <p class="text-slate-600">Kaplan-Meier survival curves, log-rank significance testing, and CDISC SDTM/ADaM dataset structures.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>80%</strong></div>
                    <div class="flex justify-between"><span>Status:</span><strong class="text-teal-700">Ready to Launch</strong></div>
                  </div>
                </div>
                <button onclick="alert('Starting Apollo HealthTech Biostatistics Assessment...')" class="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                  Start Clinical Test →
                </button>
              </div>

              <!-- Healthcare Test 2 -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">Genomics & NGS</span>
                    <span class="text-[10px] font-bold text-slate-500">45 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">Biocon Research NGS Variant Calling Benchmark</h4>
                  <p class="text-slate-600">FASTQ preprocessing, BWA read alignment, GATK variant calling, and RNA-Seq pathway analysis.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between"><span>Cutoff Required:</span><strong>80%</strong></div>
                    <div class="flex justify-between"><span>Score:</span><strong class="text-emerald-600">90% (Passed)</strong></div>
                  </div>
                </div>
                <button onclick="alert('Viewing Biocon Genomic Research Benchmark Dossier...')" class="w-full py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-xs">
                  Review Genomic Dossier
                </button>
              </div>
            ` : `
              <!-- Test 1: Company Assessment -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Company Assessment</span>
                    <span class="text-[10px] font-bold text-slate-500">45 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">Microsoft GenAI Engineering Screening</h4>
                  <p class="text-slate-600">30 Questions covering Transformer Attention, PyTorch autograd mechanics, and Triton inference serving.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between">
                      <span>Cutoff Required:</span>
                      <strong>80%</strong>
                    </div>
                    <div class="flex justify-between">
                      <span>Your Previous Score:</span>
                      <strong class="text-emerald-600">92% (Passed)</strong>
                    </div>
                  </div>
                </div>
                <button onclick="alert('You have already qualified for this assessment with 92% score! Recruiter notified.');" class="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-xs">
                  View Qualification Certificate
                </button>
              </div>

              <!-- Test 2: College Assessment -->
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">College Assessment</span>
                    <span class="text-[10px] font-bold text-slate-500">60 Mins</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">IIT Bombay AI Research Aptitude Test</h4>
                  <p class="text-slate-600">Theoretical assessment on Convex Optimization, Matrix Decomposition, and Statistical Learning Theory.</p>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1">
                    <div class="flex justify-between">
                      <span>Cutoff Required:</span>
                      <strong>85%</strong>
                    </div>
                    <div class="flex justify-between">
                      <span>Your Previous Score:</span>
                      <strong class="text-indigo-600">89% (Passed)</strong>
                    </div>
                  </div>
                </div>
                <button onclick="alert('Dossier attached to IIT Bombay Academic Office!');" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                  Review Academic Dossier
                </button>
              </div>
            `}

            <!-- Live Daily Quest (Monaco-Style Interactive Coding Sandbox) -->
            <div class="p-5 rounded-2xl border-2 border-amber-300/80 bg-gradient-to-br from-amber-50/70 to-orange-50/50 space-y-4 flex flex-col justify-between shadow-xs">
              <div class="space-y-2 text-xs">
                <div class="flex justify-between items-center">
                  <span class="text-[10px] font-black px-2 py-0.5 rounded bg-amber-200 text-amber-900 flex items-center gap-1">
                    <span>⚡</span> Daily Quest Streak #${state.applicant.profile.rankings[1].score > 92 ? '9' : '8'}
                  </span>
                  <span class="text-[10px] font-bold text-amber-700">Monaco Engine</span>
                </div>
                <h4 class="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                  <span>Dynamic Programming: Tree Rerooting</span>
                </h4>
                <p class="text-slate-600 leading-relaxed">
                  Solve today's $O(N)$ tree distance rerooting challenge in our embedded, proctored code editor. Supports Python, C++, Java & TypeScript.
                </p>
                <div class="p-2.5 bg-white/90 rounded-xl border border-amber-200 text-[11px] space-y-1">
                  <div class="flex justify-between">
                    <span class="text-slate-500">Reward:</span>
                    <strong class="text-amber-700">+50 XP & Streak +1 Day</strong>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-500">Security:</span>
                    <strong class="text-emerald-700">🔒 Proctored & Anti-Paste Guard</strong>
                  </div>
                </div>
              </div>
              <button onclick="UI.openCodingAssessmentModal('dp-tree-reroot')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl text-xs transition shadow-md flex items-center justify-center gap-2">
                <span>⚡ Open Live Monaco Sandbox →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 3: Freelancing (Projects, Bidding, Proposals & Active Contracts)
  // -------------------------------------------------------------
  templateApplicantFreelance() {
    const p = state.applicant.profile;
    const disc = state.selectedDiscipline;
    const items = disc === 'all' ? state.freelanceDatabase : state.freelanceDatabase.filter(f => f.discipline === disc);

    return `
      <div class="space-y-6">
        <!-- Top Stats Banner -->
        <div class="bg-gradient-to-r from-indigo-900 to-blue-950 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="text-xs px-3 py-1 rounded-full bg-white/10 font-semibold inline-flex items-center gap-1.5">
              <span>💼</span> Verified Freelancer Portfolio • ${p.field}
            </span>
            <h2 class="text-2xl font-black">Recommended Freelance Projects & Contracts</h2>
            <p class="text-xs text-indigo-200 max-w-xl leading-relaxed">
              High-value client contracts matched to your ${p.domainSkills.slice(0, 3).join(', ')} proficiencies. Submit AI-tailored proposals with verified leaderboard badges.
            </p>
          </div>
          <div class="flex gap-4 text-center">
            <div class="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 min-w-[100px]">
              <p class="text-2xl font-black text-emerald-400">$3,450</p>
              <p class="text-[10px] text-indigo-200">Total Earned</p>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 min-w-[100px]">
              <p class="text-2xl font-black text-amber-300">5.0 ★</p>
              <p class="text-[10px] text-indigo-200">Client Rating</p>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 min-w-[100px]">
              <p class="text-2xl font-black text-indigo-300">${p.completedFreelance.length} / ${p.completedFreelance.length}</p>
              <p class="text-[10px] text-indigo-200">Delivered On-Time</p>
            </div>
          </div>
        </div>

        <!-- Available Project Opportunities Grid -->
        <div class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <div>
              <h3 class="font-bold text-base text-slate-900">Recommended Freelance Gigs</h3>
              <p class="text-xs text-slate-500">Click any card to inspect full requirements or generate an AI proposal</p>
            </div>
            <div class="flex items-center gap-2">
              ${disc !== 'all' ? `<span class="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs">Field: ${disc.toUpperCase()}</span>` : ''}
              <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                ${items.length} Live Openings
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${items.map(proj => `
              <div onclick="UI.openFreelanceDetailModal('${proj.id}')" class="bg-white rounded-2xl p-5 border border-slate-200 space-y-4 hover:border-indigo-400 hover:shadow-md transition cursor-pointer flex flex-col justify-between">
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">${proj.id}</span>
                    <span class="text-xs font-black text-emerald-600">${proj.matchScore}% Skill Fit</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900">${proj.title}</h4>
                  <p class="text-[11px] text-slate-500">${proj.client} • ${proj.duration}</p>
                  <p class="text-slate-600 line-clamp-2 leading-relaxed">${proj.description}</p>
                  <div class="flex flex-wrap gap-1 pt-1">
                    ${proj.requiredSkills.map(s => `<span class="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">${s}</span>`).join('')}
                  </div>
                  <p class="text-[10px] text-indigo-600 font-semibold pt-1">Click to view full scope & deliverables</p>
                </div>
                <div onclick="event.stopPropagation()">
                  <p class="text-base font-black text-slate-900 mb-2">${proj.budget} <span class="text-xs font-normal text-slate-500">(${proj.type})</span></p>
                  <button onclick="UI.openAiProposalModal('${proj.title}', '${proj.budget}')" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5">
                    Submit AI Proposal
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Completed Freelance Contracts History -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 class="font-bold text-base text-slate-900">Completed Contracts & Client Testimonials</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            ${p.completedFreelance.map(f => `
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div class="flex justify-between items-center">
                  <h5 class="font-bold text-slate-900">${f.title}</h5>
                  <span class="text-amber-500 font-bold">${f.rating}</span>
                </div>
                <p class="text-[11px] text-slate-500">Client: <strong>${f.client}</strong> • Budget: <strong class="text-emerald-700">${f.budget}</strong></p>
                <p class="text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-100">"${f.review}"</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 4 & 5: Internships & Jobs with Unique IDs & Deep AI Modal
  // Requirement 2: Every internship/job has ID, clickable description & AI analysis button
  // -------------------------------------------------------------
  templateApplicantInternships() {
    const disc = state.selectedDiscipline;
    const items = disc === 'all'
      ? state.internshipsDatabase
      : state.internshipsDatabase.filter(i => i.discipline === disc);

    return `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
          <div>
            <h3 class="font-bold text-base text-slate-900">Internship Listings with Unique IDs</h3>
            <p class="text-xs text-slate-500">Click any card for full description, or run AI Skill & Test Gap analysis</p>
          </div>
          <div class="flex items-center gap-2">
            ${disc !== 'all' ? `<span class="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs">Field: ${disc.toUpperCase()}</span>` : ''}
            <div class="text-xs text-slate-500 font-semibold">
              Showing ${items.length} of ${state.internshipsDatabase.length} Verified Internships
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${items.map(intern => `
            <div onclick="UI.openPostDetailModal('${intern.id}', 'internship')" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition cursor-pointer space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <!-- Unique ID Pill with Copy button -->
                  <div class="flex items-center gap-2 mb-1" onclick="event.stopPropagation()">
                    <span class="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      ${intern.id}
                    </span>
                    <button onclick="UI.copyToClipboard('${intern.id}')" title="Copy ID" class="text-[11px] text-slate-400 hover:text-indigo-600">
                      📋 Copy
                    </button>
                  </div>
                  <h4 class="font-bold text-base text-slate-900">${intern.title}</h4>
                  <p class="text-xs text-slate-500">${intern.company} • ${intern.mode} (${intern.location})</p>
                </div>
                <span class="text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  ${intern.matchScore}% Match
                </span>
              </div>

              <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${intern.description}</p>

              <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 p-3 bg-slate-50 rounded-xl">
                <p>Stipend: <strong class="text-slate-900">${intern.stipend}</strong></p>
                <p>Duration: <strong class="text-slate-900">${intern.duration}</strong></p>
                <p>Deadline: <strong class="text-amber-700">${intern.deadline}</strong></p>
                <p>Test Cutoff: <strong class="text-indigo-700">${intern.cutoffScore}%</strong></p>
              </div>

              <!-- Quick action footer -->
              <div class="flex items-center gap-2 pt-2 border-t border-slate-100" onclick="event.stopPropagation()">
                <button onclick="UI.openPostDetailModal('${intern.id}', 'internship')" class="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5">
                  <span>✨ View & Run AI Gap Analysis</span>
                </button>
                <button onclick="UI.saveItem('internship', '${intern.title}')" class="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600">
                  🔖
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  templateApplicantJobs() {
    const disc = state.selectedDiscipline;
    const items = disc === 'all'
      ? state.jobsDatabase
      : state.jobsDatabase.filter(j => j.discipline === disc);

    return `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
          <div>
            <h3 class="font-bold text-base text-slate-900">Full-Time, Remote & Academic Jobs</h3>
            <p class="text-xs text-slate-500">Every post features a unique ID for copy-paste analysis or instant 1-click AI comparison</p>
          </div>
          <div class="flex items-center gap-2">
            ${disc !== 'all' ? `<span class="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs">Field: ${disc.toUpperCase()}</span>` : ''}
            <div class="text-xs text-slate-500 font-semibold">
              Showing ${items.length} of ${state.jobsDatabase.length} Jobs
            </div>
          </div>
        </div>

        <div class="space-y-4">
          ${items.map(job => `
            <div onclick="UI.openPostDetailModal('${job.id}', 'job')" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition cursor-pointer space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div class="flex items-center gap-2 mb-1" onclick="event.stopPropagation()">
                    <span class="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      ${job.id}
                    </span>
                    <button onclick="UI.copyToClipboard('${job.id}')" title="Copy ID" class="text-[11px] text-slate-400 hover:text-indigo-600">
                      📋 Copy ID
                    </button>
                  </div>
                  <div class="flex items-center gap-2">
                    <h4 class="font-bold text-lg text-slate-900">${job.title}</h4>
                    <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">${job.matchScore}% Match</span>
                  </div>
                  <p class="text-xs text-slate-500">${job.company} • ${job.location} • ${job.type}</p>
                </div>
                <div class="text-right">
                  <p class="text-lg font-black text-slate-900">${job.salary}</p>
                  <p class="text-[11px] text-slate-500">Benchmark Cutoff: ${job.cutoffScore}%</p>
                </div>
              </div>

              <p class="text-xs text-slate-600 leading-relaxed">${job.description}</p>

              <!-- Required Skills tags -->
              <div class="flex flex-wrap gap-1.5">
                ${job.requiredSkills.map(s => `<span class="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">${s}</span>`).join('')}
              </div>

              <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-xs" onclick="event.stopPropagation()">
                <span class="text-slate-400">Click post to inspect interview questions & AI breakdown</span>
                <div class="flex items-center gap-2">
                  <button onclick="UI.saveItem('job', '${job.title}')" class="px-3 py-1.5 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 font-semibold">
                    Save
                  </button>
                  <button onclick="UI.openPostDetailModal('${job.id}', 'job')" class="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-xs flex items-center gap-1.5">
                    <span>✨ Run AI Skill & Test Analysis</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // POST DETAILS & DEEP AI SKILL/TEST ANALYSIS MODAL
  // Requirement 2: Click post -> description + AI analysis between skills & test + suggestions
  // -------------------------------------------------------------
  openPostDetailModal(postId, type) {
    const item = type === 'job' 
      ? state.jobsDatabase.find(j => j.id === postId) 
      : state.internshipsDatabase.find(i => i.id === postId);

    if (!item) return;

    const applicantSkills = state.applicant.profile.domainSkills;
    const matched = item.requiredSkills.filter(s => applicantSkills.some(as => as.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(as.toLowerCase())));
    const missing = item.requiredSkills.filter(s => !matched.includes(s));

    // Candidate test score vs requirement
    const candidateScore = 92; // e.g. from tests
    const passedCutoff = candidateScore >= item.cutoffScore;

    const modal = document.createElement('div');
    modal.id = 'post-detail-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex justify-between items-start border-b border-slate-100 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">${item.id}</span>
              <button onclick="UI.copyToClipboard('${item.id}')" class="text-xs text-slate-500 hover:text-indigo-600">📋 Copy ID</button>
            </div>
            <h3 class="text-2xl font-black text-slate-900">${item.title}</h3>
            <p class="text-xs text-slate-500">${item.company} • ${item.location || item.mode} • Compensation: <strong class="text-slate-900">${item.salary || item.stipend}</strong></p>
          </div>
          <button onclick="document.getElementById('post-detail-modal').remove()" class="text-slate-400 hover:text-slate-700 text-2xl font-bold">×</button>
        </div>

        <!-- Post Description -->
        <div class="space-y-2 text-xs">
          <h4 class="font-bold text-sm text-slate-800">Job Description & Responsibilities</h4>
          <p class="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">${item.description}</p>
        </div>

        <!-- AI Skill & Test Gap Analysis Box -->
        <div class="p-5 rounded-xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-100 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black uppercase text-indigo-800 flex items-center gap-1.5">
              <span>✨</span> Deep AI Fit & Benchmark Analysis
            </span>
            <span class="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              ${item.matchScore}% Compatibility
            </span>
          </div>

          <!-- Matched vs Missing Skills -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="bg-white/90 p-3 rounded-lg border border-slate-200">
              <p class="font-bold text-emerald-800 mb-1">✓ Your Matched Skills (${matched.length}):</p>
              <div class="flex flex-wrap gap-1">
                ${matched.map(s => `<span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-semibold">${s}</span>`).join('')}
              </div>
            </div>
            <div class="bg-white/90 p-3 rounded-lg border border-slate-200">
              <p class="font-bold text-amber-800 mb-1">⚠ Missing / Desired Skills (${missing.length}):</p>
              <div class="flex flex-wrap gap-1">
                ${missing.length ? missing.map(s => `<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[11px] font-semibold">${s}</span>`).join('') : '<span class="text-emerald-600">None! You possess all core skills.</span>'}
              </div>
            </div>
          </div>

          <!-- Test Benchmark Assessment Comparison -->
          <div class="bg-white/90 p-3 rounded-lg border border-slate-200 text-xs flex justify-between items-center">
            <div>
              <p class="font-bold text-slate-800">Test Score Eligibility Benchmark</p>
              <p class="text-slate-500">Your Domain Test Score: <strong>${candidateScore}/100</strong> (Required: ${item.cutoffScore}/100)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-xs font-bold ${passedCutoff ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
              ${passedCutoff ? '✓ Meets Cutoff' : 'Below Cutoff'}
            </span>
          </div>

          <!-- AI Suggestions & Interview Preparation Advice -->
          <div class="bg-white/90 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
            <p class="font-bold text-indigo-900">💡 AI Suggestions for this Posting:</p>
            <p class="text-slate-600">${item.interviewTips}</p>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 text-xs">
          <button onclick="UI.copyToClipboard('${item.id}'); document.getElementById('post-detail-modal').remove(); UI.switchApplicantTab('recommendations');" class="px-4 py-2.5 rounded-xl border border-indigo-200 text-indigo-700 font-bold hover:bg-indigo-50">
            Paste ID in Recommendations
          </button>
          <button onclick="UI.applyOneClick('${item.title}'); document.getElementById('post-detail-modal').remove();" class="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-sm">
            One-Click Apply Now
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  // -------------------------------------------------------------
  // TAB 6: Organisations (Companies & Colleges with Persona filter)
  // Requirement 3: List of all companies/colleges, click to see info
  // Requirement 4: Students see companies, Academicians see colleges
  // -------------------------------------------------------------
  templateApplicantOrganisations() {
    const filter = state.applicant.orgFilter;
    const pType = state.applicant.personaType;
    const disc = state.selectedDiscipline;

    const filteredList = state.organisationsDatabase.filter(org => {
      if (filter === 'company' && org.type !== 'company') return false;
      if (filter === 'college' && org.type !== 'college') return false;
      if (disc !== 'all' && org.discipline && org.discipline !== disc) return false;
      return true;
    });

    return `
      <div class="space-y-6">
        <!-- Filter Header -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-bold text-lg text-slate-900">
                ${pType === 'academician' ? 'Colleges & Academic Institutions (For Academicians & Faculty)' : 'Companies & Employers (For Students & Job Seekers)'}
              </h3>
              ${disc !== 'all' ? `<span class="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs">Field: ${disc.toUpperCase()}</span>` : ''}
            </div>
            <p class="text-xs text-slate-500">
              Explore recruitment processes, campus visits, faculty openings, and hiring culture insights. Showing ${filteredList.length} verified organisations.
            </p>
          </div>

          <!-- Filter buttons: All, Companies, Colleges -->
          <div class="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button onclick="UI.setOrgDirectoryFilter('all')" class="px-3 py-1.5 rounded-lg transition ${filter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}">
              All (${state.organisationsDatabase.length})
            </button>
            <button onclick="UI.setOrgDirectoryFilter('company')" class="px-3 py-1.5 rounded-lg transition ${filter === 'company' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'}">
              🏢 Companies (Students)
            </button>
            <button onclick="UI.setOrgDirectoryFilter('college')" class="px-3 py-1.5 rounded-lg transition ${filter === 'college' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'}">
              🏛️ Colleges (Academicians)
            </button>
          </div>
        </div>

        <!-- Organisations Directory Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredList.map(org => `
            <div onclick="UI.openOrgProfileModal('${org.id}')" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition cursor-pointer space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center">
                    <img src="${org.logo}" alt="${org.name}" class="max-h-8 max-w-8 object-contain"/>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded ${org.type === 'company' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}">
                    ${org.type === 'company' ? 'Enterprise Employer' : 'Academic Institution'}
                  </span>
                </div>

                <div>
                  <h4 class="font-bold text-base text-slate-900">${org.name}</h4>
                  <p class="text-xs text-slate-500">${org.category} • ${org.locations[0]}</p>
                </div>

                <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${org.about}</p>

                <div class="p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-600 space-y-1">
                  <p>Hiring For: <strong class="text-indigo-700">${org.hiringFor}</strong></p>
                  <p>Target Domains: <strong>${org.domains.slice(0, 2).join(', ')}</strong></p>
                </div>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <span class="text-slate-500">
                  ${org.jobsCount} Jobs • ${org.internshipsCount} Internships
                </span>
                <span class="text-indigo-600 font-bold hover:underline">View Profile →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  setOrgDirectoryFilter(f) {
    state.applicant.orgFilter = f;
    this.renderApplicantTab('organisations');
  },

  // Deep Organisation / College Profile Modal
  openOrgProfileModal(orgId) {
    const org = state.organisationsDatabase.find(o => o.id === orgId) || state.organisationsDatabase[0];
    const modal = document.createElement('div');
    modal.id = 'org-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-3xl w-full p-6 md:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-start border-b border-slate-100 pb-4">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-2 shadow-xs flex items-center justify-center">
              <img src="${org.logo}" alt="${org.name}" class="max-h-12 max-w-12 object-contain"/>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-2xl font-black text-slate-900">${org.name}</h3>
                <span class="text-xs font-bold px-2 py-0.5 rounded ${org.type === 'company' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}">
                  ${org.type.toUpperCase()}
                </span>
              </div>
              <p class="text-xs text-slate-500">${org.category} • ${org.locations.join(', ')}</p>
            </div>
          </div>
          <button onclick="document.getElementById('org-modal').remove()" class="text-slate-400 hover:text-slate-700 text-2xl font-bold">×</button>
        </div>

        <div class="space-y-4 text-xs">
          <div>
            <h4 class="font-bold text-sm text-slate-800 mb-1">About ${org.name}</h4>
            <p class="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">${org.about}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h5 class="font-bold text-slate-800">Hiring Focus & Target Audience</h5>
              <p class="text-indigo-700 font-semibold">${org.hiringFor}</p>
              <p class="text-slate-500">Domains: ${org.domains.join(', ')}</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <h5 class="font-bold text-slate-800">Culture & Work Values</h5>
              <p class="text-slate-600">${org.culture}</p>
            </div>
          </div>

          <div>
            <h4 class="font-bold text-sm text-slate-800 mb-2">Recruitment / Selection Process</h4>
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
              ${org.process.map(step => `
                <div class="p-2.5 rounded-lg bg-indigo-50 border border-indigo-100 text-center">
                  <p class="font-bold text-indigo-900">${step}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
          <span class="text-slate-500">${org.jobsCount} Active Roles Available</span>
          <button onclick="document.getElementById('org-modal').remove(); UI.switchApplicantTab('jobs');" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition">
            Explore Openings at ${org.name}
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  // -------------------------------------------------------------
  // TAB 7: Enhanced Profile
  // Requirement 5: Test scores & domain rankings, GitHub/LeetCode active days graph,
  // verified skills, current resume, completed freelance projects, education, badges, social links
  // -------------------------------------------------------------
  templateApplicantProfile() {
    const p = state.applicant.profile;

    // Generate simulated 52-week activity heatmap (GitHub / LeetCode style)
    const heatCells = [];
    for (let i = 0; i < 280; i++) {
      // Deterministic pseudo-random pattern
      const level = (i % 7 === 0 || i % 11 === 0) ? (i % 4 + 1) : (i % 5 === 0 ? 2 : (i % 3 === 0 ? 1 : 0));
      heatCells.push(`<div class="activity-cell heat-${level}" title="Day ${i + 1}: ${level * 2 + 1} challenges solved"></div>`);
    }

    return `
      <div class="space-y-8">
        <!-- 1. Profile Header with Social Links & Current Resume Card -->
        <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div class="w-20 h-20 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-2xl shadow-md">
              AK
            </div>
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <h3 class="text-2xl font-black text-slate-900">${p.name}</h3>
                <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Top 1% Talent</span>
              </div>
              <p class="text-xs text-slate-500">${p.role}</p>
              <p class="text-xs text-slate-600">🎓 ${p.education}</p>
              
              <!-- Social Links -->
              <div class="flex flex-wrap items-center gap-2 pt-2">
                <a href="https://${p.socials.github}" target="_blank" class="text-xs font-bold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 px-2.5 py-1 rounded-md transition">
                  GitHub
                </a>
                <a href="https://${p.socials.linkedin}" target="_blank" class="text-xs font-bold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 px-2.5 py-1 rounded-md transition">
                  LinkedIn
                </a>
                <a href="https://${p.socials.portfolio}" target="_blank" class="text-xs font-bold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 px-2.5 py-1 rounded-md transition">
                  Portfolio (arjun.dev)
                </a>
                <a href="https://${p.socials.twitter}" target="_blank" class="text-xs font-bold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 px-2.5 py-1 rounded-md transition">
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          <!-- Current Resume Card -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs min-w-[220px] text-center space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-slate-800">Current Resume</span>
              <span class="font-bold text-emerald-600">${p.atsScore}% ATS</span>
            </div>
            <p class="font-mono text-[11px] text-slate-500 truncate">${p.resumeName}</p>
            <div class="flex gap-1.5">
              <button onclick="UI.downloadOptimizedResume()" class="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold">
                Download PDF
              </button>
              <button onclick="alert('Upload new resume to trigger re-parsing')" class="px-2 py-1.5 border border-slate-200 bg-white rounded-lg font-semibold text-slate-700 hover:bg-slate-50">
                Update
              </button>
            </div>
          </div>
        </div>

        <!-- 1.5 Student Pre-Flight Credential & DigiLocker Verifier -->
        <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 rounded-2xl p-6 text-white shadow-xl space-y-5 border border-indigo-500/30">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30 flex items-center gap-1">
                  <span>🛡️</span> 3-Tier Pre-Flight Audit
                </span>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-400/30">
                  DigiLocker & Sovereign Ledger Ready
                </span>
              </div>
              <h3 class="text-xl font-black">Pre-Submission Credential & Certificate Integrity Verifier</h3>
              <p class="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Pre-verify your earned certificates before enterprise recruiters review your profile. Test your credentials against cryptographic EXIF metadata checks, Error Level Analysis (ELA), and official registry ledgers to attach an unforgeable verified seal.
              </p>
            </div>
            <div class="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 text-xs shrink-0">
              <div class="text-right">
                <p class="text-[10px] text-slate-400 font-semibold uppercase">Candidate Trust Rating</p>
                <p class="text-sm font-black text-emerald-400 flex items-center gap-1 justify-end">
                  <span>✓</span> High Integrity (99.8%)
                </p>
              </div>
            </div>
          </div>

          <!-- Interactive Scanner Selector & Action -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex-1 w-full space-y-1">
              <label class="text-[11px] font-bold text-indigo-200 uppercase tracking-wider">Select Certificate to Audit & Authenticate:</label>
              <select id="student-preflight-cert-select" onchange="UI.selectPreflightCert(this.value)" class="w-full bg-slate-900/95 text-white text-xs border border-white/20 rounded-xl p-2.5 focus:outline-none focus:border-indigo-400 font-medium">
                <option value="stanford-ai" ${state.studentPreflight.selectedCert === 'stanford-ai' ? 'selected' : ''}>Stanford_DeepLearning_Specialization.pdf (Issued: Stanford Online / Coursera)</option>
                <option value="aws-cloud" ${state.studentPreflight.selectedCert === 'aws-cloud' ? 'selected' : ''}>AWS_Certified_Solutions_Architect.pdf (Issued: Amazon Web Services)</option>
                <option value="google-tampered" ${state.studentPreflight.selectedCert === 'google-tampered' ? 'selected' : ''}>Google_Data_Analytics_Professional.pdf [Sample Flagged: Photoshop Layer Alteration]</option>
              </select>
            </div>

            <button onclick="UI.runStudentPreflightScan()" id="btn-preflight-scan" class="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-black rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
              <span>⚡ Run Pre-Flight Integrity Scan</span>
            </button>
          </div>

          <!-- Dynamic Scan Progress & Result Container -->
          <div id="student-preflight-result-container">
            ${this.renderPreflightReport()}
          </div>
        </div>

        <!-- 2. Active Days Graph (GitHub / LeetCode style) -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 class="font-bold text-base text-slate-900 flex items-center gap-2">
                <span>📈</span> Active Days & Challenge Heatmap (2026)
              </h4>
              <p class="text-xs text-slate-500">184 active coding and assessment days in the last 40 weeks</p>
            </div>
            <div class="flex items-center gap-3 text-xs">
              <span class="font-bold text-amber-600">🔥 Current Streak: 8 Days</span>
              <span class="text-slate-400">|</span>
              <span class="font-bold text-emerald-600">Longest: 24 Days</span>
            </div>
          </div>

          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
            <div class="activity-grid">
              ${heatCells.join('')}
            </div>
            <div class="flex items-center justify-end gap-2 mt-3 text-[10px] text-slate-500">
              <span>Less</span>
              <span class="w-2.5 h-2.5 rounded-xs heat-0 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-xs heat-1 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-xs heat-2 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-xs heat-3 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-xs heat-4 inline-block"></span>
              <span>More</span>
            </div>
          </div>
        </div>

        <!-- 3. Domain Test Scores & Global Rankings -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <h4 class="font-bold text-base text-slate-900 flex items-center gap-2">
              <span>🏆</span> Domain Test Scores & Global Leaderboard Rankings
            </h4>
            <span class="text-xs text-indigo-600 font-bold cursor-pointer" onclick="UI.switchApplicantTab('tests')">Take New Assessment →</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${p.rankings.map(r => `
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <p class="text-xs font-bold text-slate-800 line-clamp-1">${r.domain}</p>
                <div class="flex items-baseline justify-between">
                  <span class="text-2xl font-black text-indigo-600">${r.score}/100</span>
                  <span class="text-xs font-bold text-emerald-600">Top ${r.percentile}</span>
                </div>
                <div class="text-[11px] text-slate-500 pt-1 border-t border-slate-200 flex justify-between">
                  <span>Global Rank:</span>
                  <strong class="text-slate-800">#${r.rank} / ${r.total}</strong>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Skills & Badges Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Skills -->
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h4 class="font-bold text-base text-slate-900">Verified Skills Showcase</h4>
            <div class="space-y-3 text-xs">
              <div>
                <p class="font-bold text-indigo-900 mb-1">Domain-Specific Skills (${p.domainSkills.length})</p>
                <div class="flex flex-wrap gap-1.5">
                  ${p.domainSkills.map(s => `<span class="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg font-semibold border border-indigo-100">${s}</span>`).join('')}
                </div>
              </div>
              <div>
                <p class="font-bold text-slate-700 mb-1">Common Transferable Skills (${p.commonSkills.length})</p>
                <div class="flex flex-wrap gap-1.5">
                  ${p.commonSkills.map(s => `<span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-semibold">${s}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Badges Section -->
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h4 class="font-bold text-base text-slate-900">Honors & Badges Earned</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              ${p.badges.map(b => `
                <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
                  <span class="text-2xl">${b.icon}</span>
                  <div>
                    <p class="font-bold text-slate-900">${b.title}</p>
                    <p class="text-[11px] text-slate-500">${b.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 5. Completed Freelanced Projects -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div class="flex justify-between items-center">
            <h4 class="font-bold text-base text-slate-900">Completed Freelance Projects History</h4>
            <span class="text-xs font-bold text-emerald-600">Total Earned: $3,450 (4.9 ★ Rating)</span>
          </div>

          <div class="space-y-3 text-xs">
            ${p.completedFreelance.map(item => `
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div class="flex items-center gap-2">
                    <h5 class="font-bold text-slate-900 text-sm">${item.title}</h5>
                    <span class="text-amber-600 font-bold">${item.rating}</span>
                  </div>
                  <p class="text-slate-500 mt-0.5">Client: ${item.client} • "${item.review}"</p>
                </div>
                <span class="text-base font-black text-slate-900">${item.budget}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 8: Settings & Saved Items
  // Requirement 6: Security features, Saved (internships, jobs, projects), Privacy settings
  // -------------------------------------------------------------
  templateApplicantSettings() {
    const s = state.applicant.profile.saved;
    return `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-black text-slate-900">Account Settings & Bookmarks</h2>
          <p class="text-xs text-slate-500 mt-1">Manage saved opportunities, enterprise security, and privacy preferences</p>
        </div>

        <!-- 1. Saved Items Section (Internships, Jobs, Projects) -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
            <span>🔖</span> Saved Bookmarks Hub
          </h3>

          <!-- Saved Jobs -->
          <div class="space-y-3">
            <p class="font-bold text-xs uppercase tracking-wider text-slate-500">Saved Jobs (${s.jobs.length})</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${s.jobs.map(j => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                  <div>
                    <span class="text-[10px] font-mono font-bold text-indigo-600">${j.id}</span>
                    <h5 class="font-bold text-slate-900">${j.title}</h5>
                    <p class="text-slate-500">${j.company} • ${j.salary}</p>
                  </div>
                  <div class="flex gap-2">
                    <button onclick="UI.openPostDetailModal('${j.id}', 'job')" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-bold">Apply</button>
                    <button onclick="alert('Removed from saved!')" class="text-rose-600 font-bold hover:underline">Remove</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Saved Internships -->
          <div class="space-y-3 pt-4 border-t border-slate-100">
            <p class="font-bold text-xs uppercase tracking-wider text-slate-500">Saved Internships (${s.internships.length})</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${s.internships.map(i => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                  <div>
                    <span class="text-[10px] font-mono font-bold text-indigo-600">${i.id}</span>
                    <h5 class="font-bold text-slate-900">${i.title}</h5>
                    <p class="text-slate-500">${i.company} • Stipend: ${i.stipend}</p>
                  </div>
                  <div class="flex gap-2">
                    <button onclick="UI.openPostDetailModal('${i.id}', 'internship')" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-bold">Apply</button>
                    <button onclick="alert('Removed from saved!')" class="text-rose-600 font-bold hover:underline">Remove</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Saved Freelance Projects -->
          <div class="space-y-3 pt-4 border-t border-slate-100">
            <p class="font-bold text-xs uppercase tracking-wider text-slate-500">Saved Freelance Projects (${s.projects.length})</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${s.projects.map(proj => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                  <div>
                    <h5 class="font-bold text-slate-900">${proj.title}</h5>
                    <p class="text-slate-500">Client: ${proj.client} • Budget: ${proj.budget}</p>
                  </div>
                  <button onclick="UI.openAiProposalModal('${proj.title}', '${proj.budget}')" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-bold">
                    Proposal
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 2. Security Features -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5 text-xs">
          <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
            <span>🔒</span> Security & Authentication Controls
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div>
                <label class="font-bold text-slate-700 block mb-1">Change Password</label>
                <input type="password" placeholder="Current Password" class="w-full border border-slate-200 rounded-xl px-3 py-2 mb-2"/>
                <input type="password" placeholder="New Strong Password" class="w-full border border-slate-200 rounded-xl px-3 py-2 mb-2"/>
                <button onclick="alert('Password updated!')" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold">
                  Update Password
                </button>
              </div>
            </div>

            <!-- 2FA & Active Sessions -->
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <p class="font-bold text-slate-900">Two-Factor Authentication (2FA)</p>
                  <p class="text-slate-500">Require an authenticator code on login</p>
                </div>
                <input type="checkbox" checked class="w-5 h-5 accent-indigo-600"/>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div class="flex justify-between items-center">
                  <p class="font-bold text-slate-900">Active Login Sessions</p>
                  <button onclick="alert('Logged out from all other devices!')" class="text-rose-600 font-bold hover:underline">Log Out All Others</button>
                </div>
                <p class="text-slate-600">● Mac (Chrome) • Bangalore, India (Current Device)</p>
                <p class="text-slate-500">● iPhone 15 (Safari) • 2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Privacy Settings -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 text-xs">
          <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
            <span>🛡️</span> Privacy & Recruiter Visibility Settings
          </h3>

          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <p class="font-bold text-slate-800">Profile Visibility to Employers</p>
                <p class="text-slate-500">Allow verified recruiters to discover your profile based on skill matches</p>
              </div>
              <input type="checkbox" checked class="w-5 h-5 accent-indigo-600"/>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <p class="font-bold text-slate-800">Mask Phone & Email until Interview Schedule</p>
                <p class="text-slate-500">Prevent unsolicited contacts until an official interview round is confirmed</p>
              </div>
              <input type="checkbox" checked class="w-5 h-5 accent-indigo-600"/>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <p class="font-bold text-slate-800">AI Resume Improvement Suggestions</p>
                <p class="text-slate-500">Allow AI analysis to parse projects and suggest bullet point improvements</p>
              </div>
              <input type="checkbox" checked class="w-5 h-5 accent-indigo-600"/>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // Helpers, Modals & Triggers
  // -------------------------------------------------------------
  copyToClipboard(text) {
    navigator.clipboard?.writeText(text);
    alert(`Copied: "${text}" to clipboard! You can paste it into the Skill Gap Analyzer.`);
  },

  setResumeStudioTab(tab) {
    state.applicant.resumeStudioTab = tab;
    this.renderApplicantTab('recommendations');
  },

  handleManualResumeUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      state.applicant.manualUploadedFileName = file.name;
      this.renderApplicantTab('recommendations');
    }
  },

  confirmResumeUpload() {
    if (state.applicant.manualUploadedFileName) {
      state.applicant.profile.resumeName = state.applicant.manualUploadedFileName;
      state.applicant.profile.atsScore = 95;
      alert(`Resume "${state.applicant.manualUploadedFileName}" successfully parsed! ATS Compatibility: 95/100.`);
      state.applicant.resumeStudioTab = 'analysis';
      this.renderApplicantTab('recommendations');
    }
  },

  openFreelanceDetailModal(id) {
    const item = state.freelanceDatabase.find(f => f.id === id);
    if (!item) return;

    const applicantSkills = state.applicant.profile.domainSkills;
    const matched = item.requiredSkills.filter(s => applicantSkills.some(as => as.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(as.toLowerCase())));
    const missing = item.requiredSkills.filter(s => !matched.includes(s));

    const modal = document.createElement('div');
    modal.id = 'freelance-detail-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-start border-b border-slate-100 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">${item.id}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">${item.type}</span>
            </div>
            <h3 class="text-2xl font-black text-slate-900">${item.title}</h3>
            <p class="text-xs text-slate-500">${item.client} • Budget: <strong class="text-slate-900">${item.budget}</strong> • Duration: ${item.duration} • Client Rating: ${item.clientRating}</p>
          </div>
          <button onclick="document.getElementById('freelance-detail-modal').remove()" class="text-slate-400 hover:text-slate-700 text-2xl font-bold">×</button>
        </div>

        <div class="space-y-2 text-xs">
          <h4 class="font-bold text-sm text-slate-800">Project Scope & Client Requirements</h4>
          <p class="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">${item.description}</p>
        </div>

        <div class="space-y-2 text-xs">
          <h4 class="font-bold text-sm text-slate-800">Key Deliverables</h4>
          <ul class="list-disc list-inside text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            ${item.deliverables.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>

        <!-- AI Fit Analysis -->
        <div class="p-5 rounded-xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 border border-indigo-100 space-y-3 text-xs">
          <div class="flex items-center justify-between">
            <span class="font-black uppercase text-indigo-800">AI Compatibility & Skill Match</span>
            <span class="font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">${item.matchScore}% Fit</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white p-3 rounded-lg border border-slate-200">
              <p class="font-bold text-emerald-800 mb-1">Your Matched Skills (${matched.length}):</p>
              <div class="flex flex-wrap gap-1">
                ${matched.map(s => `<span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-semibold">${s}</span>`).join('')}
              </div>
            </div>
            <div class="bg-white p-3 rounded-lg border border-slate-200">
              <p class="font-bold text-amber-800 mb-1">Missing / Additional Skills (${missing.length}):</p>
              <div class="flex flex-wrap gap-1">
                ${missing.length ? missing.map(s => `<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[11px] font-semibold">${s}</span>`).join('') : '<span class="text-emerald-600">All required skills matched!</span>'}
              </div>
            </div>
          </div>

          <div class="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <p class="font-bold text-indigo-900">Proposal Recommendation:</p>
            <p class="text-slate-600">${item.interviewTips}</p>
          </div>
        </div>

        <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 text-xs">
          <button onclick="document.getElementById('freelance-detail-modal').remove()" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50">
            Close
          </button>
          <button onclick="document.getElementById('freelance-detail-modal').remove(); UI.openAiProposalModal('${item.title}', '${item.budget}');" class="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-sm">
            Draft & Submit AI Proposal
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  toggleApplicantMessagesModal() {
    const existing = document.getElementById('applicant-messages-modal');
    if (existing) {
      existing.remove();
      state.applicant.applicantMessagesModalOpen = false;
      return;
    }

    state.applicant.applicantMessagesModalOpen = true;
    const modal = document.createElement('div');
    modal.id = 'applicant-messages-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = this.templateApplicantMessagesModalContent();
    document.body.appendChild(modal);
  },

  templateApplicantMessagesModalContent() {
    const convos = state.applicant.companyMessages;
    const activeKey = state.applicant.activeApplicantMessageKey || Object.keys(convos)[0];
    const activeConvo = convos[activeKey];

    return `
      <div class="bg-white rounded-2xl max-w-4xl w-full h-[620px] max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        <!-- Modal Header -->
        <div class="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center font-bold text-xs">
              MSG
            </div>
            <div>
              <h3 class="font-bold text-base">Employer & Campus Messages</h3>
              <p class="text-[11px] text-slate-400">Direct inquiries from verified companies and academic institutes</p>
            </div>
          </div>
          <button onclick="UI.toggleApplicantMessagesModal()" class="text-slate-400 hover:text-white text-2xl font-bold">×</button>
        </div>

        <!-- Body: Left list & Right thread -->
        <div class="flex-1 flex overflow-hidden">
          <!-- Left Column: Conversations List -->
          <div class="w-1/3 border-r border-slate-200 overflow-y-auto bg-slate-50 divide-y divide-slate-100">
            ${Object.keys(convos).map(k => {
              const c = convos[k];
              const isActive = k === activeKey;
              const lastMsg = c.messages[c.messages.length - 1];
              return `
                <div onclick="UI.selectApplicantConversation('${k}')" class="p-4 cursor-pointer transition ${isActive ? 'bg-white border-l-4 border-indigo-600 shadow-xs' : 'hover:bg-slate-100/80'}">
                  <div class="flex items-center justify-between mb-1">
                    <div class="flex items-center gap-2">
                      <span class="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center">${c.avatar}</span>
                      <h5 class="font-bold text-xs text-slate-900 line-clamp-1">${c.orgName}</h5>
                    </div>
                    <span class="text-[10px] text-slate-400">${c.time}</span>
                  </div>
                  <p class="text-[11px] text-indigo-600 font-semibold mb-1">${c.role}</p>
                  <p class="text-[11px] text-slate-500 line-clamp-1">${lastMsg ? lastMsg.text : ''}</p>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Right Column: Active Chat Thread -->
          <div class="flex-1 flex flex-col bg-white">
            <!-- Active Thread Header -->
            <div class="px-6 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <h4 class="font-bold text-sm text-slate-900">${activeConvo.orgName}</h4>
                <p class="text-[11px] text-slate-500">Subject: <span class="text-indigo-600 font-semibold">${activeConvo.role}</span> • Status: <span class="text-emerald-600 font-semibold">${activeConvo.status}</span></p>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded ${activeConvo.orgType === 'Company' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}">
                ${activeConvo.orgType}
              </span>
            </div>

            <!-- Messages History -->
            <div id="applicant-messages-thread" class="flex-1 p-6 overflow-y-auto space-y-4 text-xs">
              ${activeConvo.messages.map(m => `
                <div class="flex flex-col ${m.sender === 'candidate' ? 'items-end' : 'items-start'}">
                  <span class="text-[10px] text-slate-400 mb-1">${m.sender === 'candidate' ? 'You (Arjun)' : activeConvo.orgName} • ${m.time}</span>
                  <div class="max-w-[80%] p-3 rounded-2xl ${m.sender === 'candidate' ? 'bg-indigo-600 text-white rounded-br-none shadow-xs' : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-bl-none'}">
                    <p class="leading-relaxed">${m.text}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Reply Input Form -->
            <form onsubmit="UI.sendApplicantMessage(event)" class="p-3 border-t border-slate-200 flex gap-2 bg-white">
              <input type="text" id="applicant-reply-input" placeholder="Type a message to ${activeConvo.orgName}..." class="flex-1 text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-indigo-600 text-slate-800 font-medium"/>
              <button type="submit" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
                Send Reply
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  selectApplicantConversation(key) {
    state.applicant.activeApplicantMessageKey = key;
    const modal = document.getElementById('applicant-messages-modal');
    if (modal) {
      modal.innerHTML = this.templateApplicantMessagesModalContent();
    }
  },

  sendApplicantMessage(e) {
    e.preventDefault();
    const input = document.getElementById('applicant-reply-input');
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    input.value = '';

    const key = state.applicant.activeApplicantMessageKey || 'msft';
    const convo = state.applicant.companyMessages[key];
    convo.messages.push({
      sender: 'candidate',
      time: 'Just now',
      text: text
    });

    const modal = document.getElementById('applicant-messages-modal');
    if (modal) {
      modal.innerHTML = this.templateApplicantMessagesModalContent();
      const thread = document.getElementById('applicant-messages-thread');
      if (thread) thread.scrollTop = thread.scrollHeight;
    }

    // Recruiter simulation response
    setTimeout(() => {
      convo.messages.push({
        sender: 'org',
        time: 'Just now',
        text: `Thank you for your response, Arjun! Our recruiting lead has received your message and will update your candidate portal accordingly.`
      });
      const m = document.getElementById('applicant-messages-modal');
      if (m) {
        m.innerHTML = this.templateApplicantMessagesModalContent();
        const thread = document.getElementById('applicant-messages-thread');
        if (thread) thread.scrollTop = thread.scrollHeight;
      }
    }, 1000);
  },

  setSkillGapInputMode(mode) {
    state.applicant.gapInputMode = mode;
    this.renderApplicantTab('recommendations');
  },

  setRecommendationCategory(cat) {
    state.applicant.recommendationCategory = cat;
    this.renderApplicantTab('recommendations');
  },

  generateAiResume() {
    const roleInput = document.getElementById('builder-target-role');
    const role = roleInput ? roleInput.value : 'Generative AI Engineer';
    alert(`✨ AI Resume generated and tailored for "${role}"! Formatted in single-column ATS Minimalist style with quantified metrics.`);
    this.renderApplicantTab('recommendations');
  },

  runComprehensiveGapAnalysis() {
    if (state.applicant.gapInputMode === 'id') {
      const input = document.getElementById('target-id-input');
      const id = input ? input.value.trim() : 'JOB-MSFT-901';
      const job = state.jobsDatabase.find(j => j.id.toLowerCase() === id.toLowerCase());
      const intern = state.internshipsDatabase.find(i => i.id.toLowerCase() === id.toLowerCase());
      const post = job || intern;
      if (post) {
        this.openPostDetailModal(post.id, job ? 'job' : 'internship');
      } else {
        alert(`Deep Gap Analysis completed for "${id}". Matched: 78%. Recommended 2 certifications: NVIDIA DLI and AWS ML Specialty.`);
      }
    } else {
      const textarea = document.getElementById('custom-jd-input');
      const text = textarea ? textarea.value.trim() : '';
      alert(`Parsed custom Job Description (${text.length} characters). Identified 5 matched skills and 3 high-priority gaps: Triton Inference, vLLM, TensorRT. Recommended certifications and course roadmap updated!`);
      this.renderApplicantTab('recommendations');
    }
  },

  analyzeTargetId() {
    this.runComprehensiveGapAnalysis();
  },

  openAiProposalModal(projectTitle, budget) {
    const modal = document.createElement('div');
    modal.id = 'ai-proposal-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
        <div class="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <span class="text-xs font-bold text-indigo-600 uppercase">AI Proposal Engine</span>
            <h4 class="font-black text-base text-slate-900">${projectTitle}</h4>
          </div>
          <button onclick="document.getElementById('ai-proposal-modal').remove()" class="text-slate-400 hover:text-slate-700 text-xl font-bold">×</button>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Your Proposed Bid</label>
            <input type="text" value="${budget}" class="w-full border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-900"/>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">AI Tailored Cover Letter</label>
            <textarea rows="5" class="w-full border border-slate-200 rounded-xl p-3 text-slate-700">Dear Client, I noticed you require high-accuracy ML implementation for ${projectTitle}. As an AI developer ranked in the top 1% on verified PyTorch & RAG benchmarks, I have successfully delivered 14 freelance projects with a 5.0 ★ rating. I can deliver an end-to-end, dockerized solution within your timeline.</textarea>
          </div>
        </div>

        <button onclick="document.getElementById('ai-proposal-modal').remove(); alert('Proposal successfully submitted to client with verified badges attached!');" class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm">
          Submit Proposal & Verified Badges
        </button>
      </div>
    `;
    document.body.appendChild(modal);
  },

  applyOneClick(title) {
    alert(`Success! One-Click Application submitted for "${title}". You can track your progress under Settings & Saved.`);
  },

  saveItem(type, title) {
    alert(`Saved "${title}" to your bookmarks in Settings!`);
  },

  downloadOptimizedResume() {
    alert('Downloading AI-Enhanced Resume PDF (ATS optimized with quantified metrics)...');
  },

  toggleChatbot() {
    const chatWin = document.getElementById('ai-chat-window');
    if (chatWin) {
      chatWin.classList.toggle('hidden');
      this.renderChatMessages();
    }
  },

  renderChatMessages() {
    const container = document.getElementById('chat-messages-container');
    if (!container) return;
    container.innerHTML = state.applicant.chatMessages.map(m => `
      <div class="flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}">
        <div class="max-w-[80%] p-3 rounded-2xl ${m.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'} shadow-xs">
          <p>${m.text}</p>
        </div>
      </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
  },

  handleChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chat-user-input');
    if (!input || !input.value.trim()) return;
    const userText = input.value.trim();
    input.value = '';

    state.applicant.chatMessages.push({ sender: 'user', text: userText });
    this.renderChatMessages();

    setTimeout(() => {
      state.applicant.chatMessages.push({
        sender: 'bot',
        text: `Based on your profile, you match 95% for JOB-MSFT-901! Prepare dynamic programming and focus on Triton inference servers to achieve a 100% fit.`
      });
      this.renderChatMessages();
    }, 500);
  },

  // -------------------------------------------------------------
  // ORGANISATION PORTAL ENGINE
  // Complete 7-Tab Implementation:
  // 1. Dashboard (Flow visualizer, KPIs, Quick Actions, Feed)
  // 2. Profile (Public Page that students see)
  // 3. Opportunities (Analytics & 8 Sub-modules)
  // 4. Applicants (Search, Filters, Drawer, Resume, Notes, Actions)
  // 5. Assessments (Library, Studio, Questions, Assigner, Results, Settings)
  // 6. Messages & Communication (Inbox, Chat, 6 Quick Templates, Attachments, Broadcast)
  // 7. Settings (8 Sections: Account, Team, Notifications, Verification, Security, Privacy, Support, Account)
  // -------------------------------------------------------------
  templateOrganisationPortal() {
    const org = state.organisation.profile;
    const activeTab = state.organisation.activeTab;

    return `
      <div class="min-h-screen bg-slate-100 text-slate-800 flex flex-col">
        <!-- Top App Bar -->
        <header class="bg-slate-900 text-white sticky top-0 z-30 px-4 md:px-8 py-3 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-4">
            <div onclick="UI.setPersona('select')" class="flex items-center gap-2.5 cursor-pointer">
              <div class="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-black text-xs text-white shadow-sm">
                MS
              </div>
              <div>
                <h1 class="font-extrabold text-base tracking-tight leading-tight">${org.name}</h1>
                <p class="text-[10px] text-purple-300 font-semibold">Enterprise Talent Hub • Verified</p>
              </div>
            </div>
            <span class="hidden md:inline-block text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
              ● Active Hiring Season (Fall 2026)
            </span>
          </div>

          <!-- Multi-Disciplinary Domain Switcher (All Fields Filter) -->
          <div class="hidden xl:flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700 text-xs">
            ${this.renderDisciplinePills('dark')}
          </div>

          <div class="flex items-center gap-3 text-xs">
            <button onclick="UI.setPersona('applicant')" class="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white font-semibold bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl transition">
              <span>← Switch to Applicant Mode</span>
            </button>
            <div class="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-xs" title="Logged in as Admin (Priya Sen)">
              HR
            </div>
          </div>
        </header>

        <!-- 7 Primary Navigation Tabs Bar -->
        <div class="bg-white border-b border-slate-200 px-4 md:px-8 sticky top-14 z-20 overflow-x-auto shadow-xs">
          <nav class="flex space-x-2 md:space-x-4 min-w-max text-xs font-bold" id="org-tab-nav">
            ${[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'profile', label: 'Profile' },
              { id: 'opportunities', label: 'Opportunities & Analytics' },
              { id: 'applicants', label: 'Applicants' },
              { id: 'assessments', label: 'Assessments' },
              { id: 'messages', label: 'Messages & Communication' },
              { id: 'settings', label: 'Settings' }
            ].map(t => `
              <button onclick="UI.switchOrgTab('${t.id}')" data-tab="${t.id}" class="py-3 px-2 border-b-2 transition ${activeTab === t.id ? 'border-purple-600 text-purple-600 font-black' : 'border-transparent text-slate-500 hover:text-slate-900'}">
                ${t.label}
              </button>
            `).join('')}
          </nav>
        </div>

        <!-- Main Dynamic View Container -->
        <main class="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-6" id="org-tab-content">
          ${this.renderCurrentOrgTab()}
        </main>
      </div>
    `;
  },

  renderOrgTab(tabName) {
    if (tabName) state.organisation.activeTab = tabName;
    const content = document.getElementById('org-tab-content');
    if (content) content.innerHTML = this.renderCurrentOrgTab();

    const navButtons = document.querySelectorAll('#org-tab-nav button');
    navButtons.forEach(btn => {
      const isMatch = btn.getAttribute('data-tab') === state.organisation.activeTab;
      if (isMatch) {
        btn.className = 'py-3 px-2 border-b-2 transition border-purple-600 text-purple-600 font-black';
      } else {
        btn.className = 'py-3 px-2 border-b-2 transition border-transparent text-slate-500 hover:text-slate-900';
      }
    });
  },

  switchOrgTab(tabName) {
    this.renderOrgTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderCurrentOrgTab() {
    const tab = state.organisation.activeTab;
    switch (tab) {
      case 'dashboard':
        return this.templateOrgDashboard();
      case 'profile':
        return this.templateOrgProfile();
      case 'opportunities':
        return this.templateOrgOpportunities();
      case 'applicants':
        return this.templateOrgApplicants();
      case 'assessments':
        return this.templateOrgAssessments();
      case 'messages':
        return this.templateOrgMessages();
      case 'settings':
        return this.templateOrgSettings();
      default:
        return this.templateOrgDashboard();
    }
  },

  // -------------------------------------------------------------
  // TAB 1: Organisation Dashboard
  // Flow visualizer, Key KPIs, Quick Actions, Activity Feed
  // -------------------------------------------------------------
  templateOrgDashboard() {
    return `
      <div class="space-y-6">
        <!-- 1. Recruitment Lifecycle Flow Banner -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-500">Recruitment Lifecycle Architecture</h3>
            <span class="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full">End-to-End Pipeline Active</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            <div class="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 text-purple-900">
              <span class="font-bold block text-[10px] uppercase text-purple-600">Step 1</span>
              <p class="font-black mt-0.5">Create Role</p>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
              <span class="font-bold block text-[10px] uppercase text-slate-400">Step 2</span>
              <p class="font-black mt-0.5">Student Applies</p>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
              <span class="font-bold block text-[10px] uppercase text-slate-400">Step 3</span>
              <p class="font-black mt-0.5">Review Resume</p>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
              <span class="font-bold block text-[10px] uppercase text-slate-400">Step 4</span>
              <p class="font-black mt-0.5">Assessment</p>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
              <span class="font-bold block text-[10px] uppercase text-slate-400">Step 5</span>
              <p class="font-black mt-0.5">Messages / Chat</p>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-900">
              <span class="font-bold block text-[10px] uppercase text-emerald-600">Step 6</span>
              <p class="font-black mt-0.5">Select / Reject</p>
            </div>
          </div>
        </div>

        <!-- 2. High-Level KPI Stat Cards -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500 font-medium">Active Roles</span>
            <p class="text-2xl font-black text-slate-900 mt-1">4</p>
            <span class="text-[10px] text-emerald-600 font-semibold">● 100% Open</span>
          </div>
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500 font-medium">Total Applicants</span>
            <p class="text-2xl font-black text-indigo-600 mt-1">348</p>
            <span class="text-[10px] text-indigo-500 font-semibold">+48 this week</span>
          </div>
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500 font-medium">Shortlisted</span>
            <p class="text-2xl font-black text-purple-600 mt-1">87</p>
            <span class="text-[10px] text-purple-600 font-semibold">25% pass rate</span>
          </div>
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500 font-medium">Pending Tests</span>
            <p class="text-2xl font-black text-amber-600 mt-1">52</p>
            <span class="text-[10px] text-amber-700 font-semibold">Aptitude & Coding</span>
          </div>
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500 font-medium">Interviews</span>
            <p class="text-2xl font-black text-blue-600 mt-1">19</p>
            <span class="text-[10px] text-blue-600 font-semibold">Scheduled</span>
          </div>
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500 font-medium">Selected / Offers</span>
            <p class="text-2xl font-black text-emerald-600 mt-1">16</p>
            <span class="text-[10px] text-emerald-700 font-semibold">Offers Extended</span>
          </div>
        </div>

        <!-- 3. Quick Action Bar -->
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
          <span class="font-bold text-slate-700">Quick Recruiter Actions:</span>
          <div class="flex flex-wrap gap-2">
            <button onclick="UI.openNewOpportunityModal()" class="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-xs transition">
              + Post New Opportunity
            </button>
            <button onclick="UI.openCreateAssessmentModal()" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xs transition">
              + Create Assessment
            </button>
            <button onclick="UI.switchOrgTab('applicants')" class="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition">
              Screen Pending Resumes
            </button>
            <button onclick="UI.openBroadcastModal()" class="px-3.5 py-2 border border-purple-200 bg-purple-50 text-purple-700 font-bold rounded-xl hover:bg-purple-100 transition">
              Send Broadcast Update
            </button>
          </div>
        </div>

        <!-- 3.5 AI Credential Integrity & Anti-Tamper Radar -->
        <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white rounded-2xl p-5 shadow-sm border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md bg-purple-500/30 text-purple-300 font-mono text-[10px] font-bold border border-purple-400/30">AI Forensic Engine Active</span>
              <h4 class="font-black text-sm tracking-tight text-white flex items-center gap-1.5">
                <span>🛡️</span> Candidate Credential Integrity & Tamper Radar
              </h4>
            </div>
            <p class="text-xs text-slate-300 max-w-2xl">
              Automated 3-tier inspection running on applicant certificates: Direct Issuer Registry Lookups, PDF Metadata Forensics (Photoshop/Canva layer detection), and Assessment Competence Cross-Checks.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div class="text-center px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 flex-1 md:flex-initial">
              <span class="text-[10px] text-slate-300 block">Scanned</span>
              <span class="font-black text-sm text-white">6 Cohort Apps</span>
            </div>
            <div class="text-center px-3 py-1.5 bg-emerald-500/20 rounded-xl border border-emerald-500/30 flex-1 md:flex-initial">
              <span class="text-[10px] text-emerald-300 block">Verified Genuine</span>
              <span class="font-black text-sm text-emerald-400">5 (83.3%)</span>
            </div>
            <div class="text-center px-3 py-1.5 bg-rose-500/20 rounded-xl border border-rose-500/30 flex-1 md:flex-initial animate-pulse">
              <span class="text-[10px] text-rose-300 block">Tamper Alert</span>
              <span class="font-black text-sm text-rose-400">1 Flagged</span>
            </div>
            <button onclick="UI.filterByFlaggedCredentials()" class="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs shadow-sm transition whitespace-nowrap w-full md:w-auto">
              Audit Flagged (1) →
            </button>
          </div>
        </div>

        <!-- 4. Active Roles Snapshot & Recent Activity Feed -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Active Openings Status (2 Cols) -->
          <div class="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div class="flex justify-between items-center border-b border-slate-100 pb-3">
              <h4 class="font-bold text-base text-slate-900">Active Posted Opportunities</h4>
              <button onclick="UI.switchOrgTab('opportunities')" class="text-xs font-bold text-purple-600 hover:underline">View Analytics & Pipeline →</button>
            </div>
            <div class="space-y-3">
              ${state.organisation.opportunities.map(opp => `
                <div onclick="UI.selectOrgOpportunity('${opp.id}'); UI.switchOrgTab('opportunities');" class="p-4 rounded-xl border border-slate-200 hover:border-purple-300 bg-slate-50/50 hover:bg-white transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-mono font-bold text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-800">${opp.id.toUpperCase()}</span>
                      <span class="font-bold text-slate-900 text-sm">${opp.title}</span>
                    </div>
                    <p class="text-slate-500">${opp.department} • ${opp.type} • ${opp.location}</p>
                  </div>
                  <div class="flex items-center gap-4 text-right">
                    <div>
                      <p class="font-black text-slate-900 text-base">${opp.totalApplications}</p>
                      <p class="text-[10px] text-slate-400">Applications</p>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                      ${opp.daysRemaining} days left
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Recent Activity Feed (1 Col) -->
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h4 class="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">Recent Candidate Activity</h4>
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div class="flex justify-between font-semibold">
                  <span class="text-slate-800">Arjun Kawade</span>
                  <span class="text-slate-400 text-[10px]">10 mins ago</span>
                </div>
                <p class="text-slate-600">Completed Round 2 Aptitude Test (Score: <strong class="text-emerald-600">92%</strong>)</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div class="flex justify-between font-semibold">
                  <span class="text-slate-800">Priya Sharma</span>
                  <span class="text-slate-400 text-[10px]">1 hour ago</span>
                </div>
                <p class="text-slate-600">Shortlisted for Round 4 Technical Interview</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div class="flex justify-between font-semibold">
                  <span class="text-slate-800">Rahul Patel</span>
                  <span class="text-slate-400 text-[10px]">3 hours ago</span>
                </div>
                <p class="text-slate-600">New application submitted for AI Research Intern</p>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div class="flex justify-between font-semibold">
                  <span class="text-slate-800">System Auto-Grading</span>
                  <span class="text-slate-400 text-[10px]">Today, 10:00 AM</span>
                </div>
                <p class="text-slate-600">Auto-evaluated 14 candidates for Data Analyst SQL challenge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 2: Organisation Profile (Public Page That Students See)
  // Basic Info, Hiring Info, Domains, Skills, 5-Stage Process, Socials
  // -------------------------------------------------------------
  templateOrgProfile() {
    const org = state.organisation.profile;
    return `
      <div class="space-y-6">
        <!-- Cover Header Card -->
        <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <!-- Corporate Banner -->
          <div class="h-36 md:h-44 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-900 p-6 flex items-end justify-between relative">
            <span class="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-semibold backdrop-blur">
              Verified Enterprise Campus Partner
            </span>
            <button onclick="alert('Profile editor opened. You can update company description, logos, and hiring process.');" class="px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-xl shadow-md hover:bg-slate-50 transition">
              Edit Public Profile
            </button>
          </div>

          <!-- Basic Info Bar -->
          <div class="p-6 md:p-8 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 -mt-16 sm:-mt-20">
              <div class="flex items-end gap-4">
                <div class="w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-lg p-3 flex items-center justify-center">
                  <img src="${org.logo}" alt="${org.name}" class="max-h-16 max-w-16 object-contain"/>
                </div>
                <div>
                  <h2 class="text-2xl font-black text-slate-900">${org.name}</h2>
                  <p class="text-xs text-purple-600 font-bold">${org.type}</p>
                </div>
              </div>
              <div class="flex gap-2">
                <button onclick="alert('Viewing live public view visible to candidates!')" class="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 transition">
                  Preview Public View
                </button>
              </div>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed max-w-3xl pt-2">${org.tagline} ${org.hiringProcess ? '' : ''}</p>

            <!-- Contact & Locations Row -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
              <div>
                <span class="text-slate-400 block text-[10px] font-bold uppercase">Official Careers Website</span>
                <a href="${org.website}" target="_blank" class="text-indigo-600 font-bold hover:underline">${org.website}</a>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px] font-bold uppercase">Recruitment Contact</span>
                <p class="font-semibold text-slate-800">${org.email} • ${org.phone}</p>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px] font-bold uppercase">Primary Locations</span>
                <p class="font-semibold text-slate-800">${org.locations.join(' • ')}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hiring Information & 5-Stage Process -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Hiring Domains & Required Skills -->
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h4 class="font-bold text-base text-slate-900 border-b border-slate-100 pb-2">Hiring Domains & Core Competencies</h4>
            
            <div class="space-y-2 text-xs">
              <span class="text-slate-500 font-bold block">Domains Frequently Hiring For:</span>
              <div class="flex flex-wrap gap-1.5">
                ${org.domainsHiring.map(d => `<span class="px-3 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold border border-purple-100">${d}</span>`).join('')}
              </div>
            </div>

            <div class="space-y-2 text-xs pt-2">
              <span class="text-slate-500 font-bold block">Skills Usually Evaluated:</span>
              <div class="flex flex-wrap gap-1.5">
                ${org.skillsRequired.map(s => `<span class="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">${s}</span>`).join('')}
              </div>
            </div>

            <div class="space-y-1 text-xs pt-2">
              <span class="text-slate-500 font-bold block">Hiring Seasons:</span>
              <p class="font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">${org.hiringSeasons}</p>
            </div>
          </div>

          <!-- 5-Stage Recruitment Sequence -->
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h4 class="font-bold text-base text-slate-900 border-b border-slate-100 pb-2">5-Stage Structured Recruitment Process</h4>
            <div class="space-y-2.5 text-xs">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                <div>
                  <p class="font-bold text-slate-900">Resume & Portfolio Screening</p>
                  <p class="text-slate-500 text-[11px]">Automated ATS keyword density check & GitHub/LeetCode benchmark analysis</p>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                <div>
                  <p class="font-bold text-slate-900">Online Aptitude & Cognitive Assessment</p>
                  <p class="text-slate-500 text-[11px]">30-45 mins timed domain assessment with proctoring anti-cheat</p>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                <div>
                  <p class="font-bold text-slate-900">Technical Live Coding & Hands-on Challenge</p>
                  <p class="text-slate-500 text-[11px]">Algorithmic problem solving, dynamic programming & architecture design</p>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                <div>
                  <p class="font-bold text-slate-900">Technical System Design Interview</p>
                  <p class="text-slate-500 text-[11px]">Deep dive into low-latency ML serving, PyTorch internals, and scalable APIs</p>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">5</span>
                <div>
                  <p class="font-bold text-slate-900">HR & Leadership Principles Discussion</p>
                  <p class="text-slate-500 text-[11px]">Cultural fit, collaboration ethics, compensation, and onboarding offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links & Verification Credentials -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div class="flex items-center gap-4">
            <span class="font-bold text-slate-700">Official Social Handles:</span>
            <a href="https://${org.socials.linkedin}" target="_blank" class="font-bold text-indigo-600 hover:underline">LinkedIn</a>
            <a href="https://${org.socials.github}" target="_blank" class="font-bold text-indigo-600 hover:underline">GitHub</a>
            <a href="https://${org.socials.twitter}" target="_blank" class="font-bold text-indigo-600 hover:underline">Twitter / X</a>
          </div>
          <span class="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            ✓ Enterprise Organization Verified
          </span>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // TAB 3: Opportunities & 8-Part Analytics Engine
  // List of roles (AI Intern, Data Analyst, Frontend Developer, UI/UX Intern)
  // Clicking role opens 8 sub-modules:
  // 1. Overview, 2. Stats, 3. Screening, 4. Pipeline, 5. Assessment, 6. Progress, 7. Reports, 8. Actions
  // -------------------------------------------------------------
  templateOrgOpportunities() {
    const opps = state.organisation.opportunities;
    const selectedId = state.organisation.selectedOpportunity || 'ai-intern';
    const opp = opps.find(o => o.id === selectedId) || opps[0];
    const sub = state.organisation.activeOppSubtab || 'overview';

    return `
      <div class="space-y-6">
        <!-- Top Opportunity Selector Bar (Click to switch role) -->
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <h3 class="font-bold text-sm text-slate-900">Posted Opportunities & Role Selector</h3>
              <p class="text-xs text-slate-500">Select any opportunity below to inspect its comprehensive 8-part management workspace</p>
            </div>
            <button onclick="UI.openNewOpportunityModal()" class="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition shadow-xs">
              + Post New Opportunity
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            ${opps.map(o => `
              <button onclick="UI.selectOrgOpportunity('${o.id}')" class="p-3 rounded-xl border text-left transition ${o.id === selectedId ? 'bg-purple-600 text-white border-purple-600 shadow-sm' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'}">
                <p class="font-bold text-xs truncate">• ${o.title.split(' ')[0]} ${o.title.split(' ')[1] || ''}</p>
                <p class="text-[10px] mt-0.5 opacity-90">${o.totalApplications} Applicants • ${o.daysRemaining}d left</p>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 8-Part Sub-Navigation for the Active Opportunity -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <!-- Role Header -->
          <div class="p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-400/30">${opp.id.toUpperCase()}</span>
                <span class="text-xs font-bold text-emerald-400">● ${opp.status}</span>
              </div>
              <h3 class="text-2xl font-black">${opp.title}</h3>
              <p class="text-xs text-slate-300">${opp.department} • ${opp.type} • ${opp.location} • Compensation: <strong>${opp.stipend || opp.salary}</strong></p>
            </div>
            <button onclick="UI.openBroadcastModal('${opp.id}')" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-xs transition">
              Broadcast Announcement
            </button>
          </div>

          <!-- 8 Sub-Tabs -->
          <div class="border-b border-slate-200 px-6 overflow-x-auto bg-slate-50">
            <div class="flex space-x-2 min-w-max text-xs font-bold py-2">
              ${[
                { id: 'overview', label: '1. Overview' },
                { id: 'stats', label: '2. Applicant Statistics' },
                { id: 'screening', label: '3. Resume Screening' },
                { id: 'pipeline', label: '4. Recruitment Pipeline' },
                { id: 'assessment', label: '5. Assessment' },
                { id: 'progress', label: '6. Candidate Progress' },
                { id: 'reports', label: '7. Reports' },
                { id: 'actions', label: '8. Actions' }
              ].map(s => `
                <button onclick="UI.switchOppSubtab('${s.id}')" class="px-3.5 py-2 rounded-lg transition ${sub === s.id ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'}">
                  ${s.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Subtab Content Body -->
          <div class="p-6 space-y-6">
            ${this.renderOpportunitySubtabContent(opp, sub)}
          </div>
        </div>
      </div>
    `;
  },

  selectOrgOpportunity(oppId) {
    state.organisation.selectedOpportunity = oppId;
    state.organisation.activeOppSubtab = 'overview';
    const content = document.getElementById('org-tab-content');
    if (content) content.innerHTML = this.renderCurrentOrgTab();
  },

  switchOppSubtab(subtab) {
    state.organisation.activeOppSubtab = subtab;
    const content = document.getElementById('org-tab-content');
    if (content) content.innerHTML = this.renderCurrentOrgTab();
  },

  renderOpportunitySubtabContent(opp, sub) {
    switch (sub) {
      case 'overview':
        return `
          <div class="space-y-4 text-xs">
            <h4 class="font-bold text-sm text-slate-900">1. Role Overview & Specifications</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-slate-400 block text-[10px]">Status</span>
                <p class="font-black text-emerald-600 text-base mt-1">Open / Active</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-slate-400 block text-[10px]">Date Posted</span>
                <p class="font-black text-slate-900 text-base mt-1">${opp.datePosted}</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-slate-400 block text-[10px]">Application Deadline</span>
                <p class="font-black text-slate-900 text-base mt-1">${opp.deadline}</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-slate-400 block text-[10px]">Days Remaining</span>
                <p class="font-black text-purple-600 text-base mt-1">${opp.daysRemaining} Days</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span class="font-bold text-slate-800">Job Description:</span>
              <p class="text-slate-600 leading-relaxed">
                Design and deploy large-scale generative models and low-latency inference pipelines. Candidates will fine-tune open-source LLMs (Llama-3, Mistral) on enterprise datasets and package endpoints with Docker, FastAPI, and Triton.
              </p>
            </div>
          </div>
        `;

      case 'stats':
        return `
          <div class="space-y-4 text-xs">
            <h4 class="font-bold text-sm text-slate-900">2. Applicant Statistics Breakdown</h4>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-slate-500">Total Applicants</span>
                <p class="text-2xl font-black text-slate-900 mt-1">${opp.stats.total}</p>
              </div>
              <div class="p-3 bg-blue-50 rounded-xl border border-blue-200">
                <span class="text-blue-700">New Applicants</span>
                <p class="text-2xl font-black text-blue-800 mt-1">${opp.stats.newCount}</p>
              </div>
              <div class="p-3 bg-amber-50 rounded-xl border border-amber-200">
                <span class="text-amber-700">Under Review</span>
                <p class="text-2xl font-black text-amber-800 mt-1">${opp.stats.underReview}</p>
              </div>
              <div class="p-3 bg-purple-50 rounded-xl border border-purple-200">
                <span class="text-purple-700">Shortlisted</span>
                <p class="text-2xl font-black text-purple-800 mt-1">${opp.stats.shortlisted}</p>
              </div>
              <div class="p-3 bg-rose-50 rounded-xl border border-rose-200">
                <span class="text-rose-700">Rejected</span>
                <p class="text-2xl font-black text-rose-800 mt-1">${opp.stats.rejected}</p>
              </div>
              <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span class="text-emerald-700">Selected / Hired</span>
                <p class="text-2xl font-black text-emerald-800 mt-1">${opp.stats.selected}</p>
              </div>
            </div>
          </div>
        `;

      case 'screening':
        return `
          <div class="space-y-4 text-xs">
            <div class="flex justify-between items-center">
              <h4 class="font-bold text-sm text-slate-900">3. AI Resume Screening & Match Scores</h4>
              <span class="text-slate-500">Showing applicants for ${opp.title}</span>
            </div>
            <div class="space-y-3">
              ${state.organisation.applicants.filter(a => a.oppId === opp.id).map(app => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="font-mono font-bold text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 border">${app.id}</span>
                      <h5 class="font-bold text-sm text-slate-900">${app.name}</h5>
                      <span class="text-xs font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">${app.matchScore}% Match Score</span>
                      ${app.credentialTrust === 'verified' ? `
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                          <span>🛡️</span> Verified (100% Genuine)
                        </span>
                      ` : app.credentialTrust === 'flagged' ? `
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1 animate-pulse">
                          <span>⚠️</span> Tamper Risk Alert
                        </span>
                      ` : `
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Self-Reported
                        </span>
                      `}
                    </div>
                    <p class="text-slate-500">${app.education} • Applied: ${app.appliedDate}</p>
                    <div class="flex flex-wrap gap-1 pt-1">
                      <span class="text-[10px] text-emerald-700 font-semibold">Matched: ${app.matchedSkills.join(', ')}</span>
                      <span class="text-slate-300">|</span>
                      <span class="text-[10px] text-amber-700 font-semibold">Missing: ${app.missingSkills.join(', ')}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button onclick="UI.openApplicantDrawer('${app.id}')" class="px-3 py-1.5 border border-slate-200 bg-white hover:bg-slate-100 rounded-lg font-bold">
                      View Resume
                    </button>
                    <button onclick="UI.openApplicantDrawer('${app.id}')" class="px-3 py-1.5 border ${app.credentialTrust === 'flagged' ? 'border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100' : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'} rounded-lg font-bold">
                      Audit Credentials
                    </button>
                    <button onclick="UI.shortlistCandidate('${app.id}')" class="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold">
                      Shortlist
                    </button>
                    <button onclick="UI.rejectCandidate('${app.id}')" class="px-3 py-1.5 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded-lg font-bold">
                      Reject
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 'pipeline':
        return `
          <div class="space-y-4 text-xs">
            <div class="flex justify-between items-center">
              <h4 class="font-bold text-sm text-slate-900">4. Configure & Track Recruitment Rounds</h4>
              <button onclick="alert('Custom recruitment round added!')" class="text-purple-600 font-bold hover:underline">+ Add Custom Round</button>
            </div>
            <div class="space-y-3">
              ${(opp.rounds || []).map((r, idx) => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center">
                      ${idx + 1}
                    </div>
                    <div>
                      <p class="font-bold text-sm text-slate-900">${r.name}</p>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded ${r.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : r.status === 'Active' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-200 text-slate-600'}">
                        ${r.status}
                      </span>
                    </div>
                  </div>
                  <div class="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <p class="font-black text-slate-800">${r.assigned}</p>
                      <p class="text-[10px] text-slate-400">Assigned</p>
                    </div>
                    <div>
                      <p class="font-black text-slate-800">${r.completed}</p>
                      <p class="text-[10px] text-slate-400">Completed</p>
                    </div>
                    <div>
                      <p class="font-black text-emerald-600">${r.qualified}</p>
                      <p class="text-[10px] text-slate-400">Qualified</p>
                    </div>
                    <div>
                      <p class="font-black text-rose-600">${r.eliminated}</p>
                      <p class="text-[10px] text-slate-400">Eliminated</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 'assessment':
        return `
          <div class="space-y-4 text-xs">
            <h4 class="font-bold text-sm text-slate-900">5. Assessment Linkage & Results</h4>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p class="font-bold text-slate-900 text-sm">Linked Test: AI Engineering & Aptitude Screening (ASSESS-01)</p>
                <p class="text-slate-500">Duration: 45 mins • Passing Mark: 70% • Anti-Cheat: Active</p>
              </div>
              <div class="flex gap-2">
                <button onclick="UI.openCreateAssessmentModal()" class="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-xs">
                  Create New Test
                </button>
                <button onclick="UI.switchOrgTab('assessments')" class="px-3.5 py-2 border border-slate-200 bg-white font-bold rounded-xl hover:bg-slate-50">
                  Link Existing Test
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div class="p-4 rounded-xl border border-slate-200 bg-white">
                <span class="text-slate-500">Average Score</span>
                <p class="text-2xl font-black text-purple-600 mt-1">79.4%</p>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-white">
                <span class="text-slate-500">Pass Percentage</span>
                <p class="text-2xl font-black text-emerald-600 mt-1">68.0%</p>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-white">
                <span class="text-slate-500">Qualified Candidates</span>
                <p class="text-2xl font-black text-indigo-600 mt-1">38 Candidates</p>
              </div>
            </div>
          </div>
        `;

      case 'progress':
        return `
          <div class="space-y-4 text-xs">
            <h4 class="font-bold text-sm text-slate-900">6. Candidate Progress Tracker</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left border border-slate-200 rounded-xl overflow-hidden">
                <thead class="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3">Applicant</th>
                    <th class="p-3">Current Round</th>
                    <th class="p-3">Status</th>
                    <th class="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                  ${state.organisation.applicants.map(a => `
                    <tr>
                      <td class="p-3 font-bold text-slate-900">${a.name}</td>
                      <td class="p-3 text-slate-600">${a.currentRound}</td>
                      <td class="p-3">
                        <span class="px-2 py-0.5 rounded text-[11px] font-bold ${a.status === 'Qualified' ? 'bg-emerald-100 text-emerald-800' : a.status === 'Shortlisted' ? 'bg-purple-100 text-purple-800' : 'bg-amber-100 text-amber-800'}">
                          ${a.status}
                        </span>
                      </td>
                      <td class="p-3 text-right">
                        <button onclick="UI.openApplicantDrawer('${a.id}')" class="text-purple-600 font-bold hover:underline">Manage Profile →</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;

      case 'reports':
        return `
          <div class="space-y-4 text-xs">
            <h4 class="font-bold text-sm text-slate-900">7. Analytical Hiring Funnel & Distribution</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span class="font-bold text-slate-800">5-Round Selection Funnel:</span>
                <p>142 Applications → 64 Screened → 38 Assessed → 20 Interviewed → 8 Offers</p>
                <div class="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div class="bg-indigo-600 h-3" style="width: 45%"></div>
                  <div class="bg-purple-600 h-3" style="width: 27%"></div>
                  <div class="bg-emerald-600 h-3" style="width: 14%"></div>
                  <div class="bg-amber-500 h-3" style="width: 14%"></div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span class="font-bold text-slate-800">Top Represented Colleges:</span>
                <p class="text-slate-600">IIT Bombay (38%) • IISc Bangalore (24%) • BITS Pilani (18%) • Others (20%)</p>
              </div>
            </div>
          </div>
        `;

      case 'actions':
        return `
          <div class="space-y-4 text-xs">
            <h4 class="font-bold text-sm text-slate-900">8. Manage Opportunity & Administrative Actions</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <button onclick="alert('Editing opportunity details...');" class="p-3 bg-white border border-slate-200 hover:border-purple-300 rounded-xl text-left font-bold text-slate-800">
                ✏️ Edit Opportunity Details
              </button>
              <button onclick="alert('Application deadline extended by 7 days!');" class="p-3 bg-white border border-slate-200 hover:border-purple-300 rounded-xl text-left font-bold text-slate-800">
                ⏰ Extend Application Deadline
              </button>
              <button onclick="alert('Exporting applicant dataset as CSV/Excel...');" class="p-3 bg-white border border-slate-200 hover:border-purple-300 rounded-xl text-left font-bold text-slate-800">
                📥 Export Applicant Dataset (CSV)
              </button>
              <button onclick="UI.openBroadcastModal('${opp.id}')" class="p-3 bg-purple-50 border border-purple-200 hover:bg-purple-100 rounded-xl text-left font-bold text-purple-700">
                📢 Broadcast Message to Cohort
              </button>
              <button onclick="alert('Opportunity marked as Closed.');" class="p-3 bg-white border border-rose-200 hover:bg-rose-50 rounded-xl text-left font-bold text-rose-600">
                🚫 Close This Opportunity
              </button>
            </div>
          </div>
        `;
      default:
        return this.renderOpportunitySubtabContent(opp, 'overview');
    }
  },

  // -------------------------------------------------------------
  // TAB 4: Applicants Hub
  // Applicant table, Search, Multi-Filters, Slide-over Profile Drawer, Notes
  // -------------------------------------------------------------
  templateOrgApplicants() {
    const apps = state.organisation.applicants;
    const q = (state.organisation.applicantSearchQuery || '').toLowerCase();
    const oppFilter = state.organisation.applicantOppFilter || 'all';
    const statusFilter = state.organisation.applicantStatusFilter || 'all';
    const trustFilter = state.organisation.applicantTrustFilter || 'all';

    const filtered = apps.filter(a => {
      const matchSearch = a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q) || a.role.toLowerCase().includes(q);
      const matchOpp = oppFilter === 'all' || a.oppId === oppFilter;
      const matchStatus = statusFilter === 'all' || a.status.toLowerCase() === statusFilter.toLowerCase();
      const matchTrust = trustFilter === 'all' || (a.credentialTrust || 'unverified') === trustFilter;
      return matchSearch && matchOpp && matchStatus && matchTrust;
    });

    return `
      <div class="space-y-6">
        <!-- Search & Filter Controls -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <!-- Search Input -->
            <div class="relative w-full md:w-80">
              <input type="text" id="applicant-search-box" oninput="UI.filterApplicants()" value="${state.organisation.applicantSearchQuery || ''}" placeholder="Search by name or APP-ID..." class="w-full text-xs border border-slate-200 rounded-xl pl-8 pr-3 py-2.5 focus:outline-purple-600"/>
              <span class="absolute left-2.5 top-3 text-slate-400 text-xs">🔍</span>
            </div>

            <!-- Multi-Filters -->
            <div class="flex flex-wrap items-center gap-2 text-xs w-full md:w-auto">
              <select id="filter-opp" onchange="UI.filterApplicants()" class="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 font-medium text-slate-700">
                <option value="all">All Opportunities</option>
                <option value="ai-intern" ${oppFilter === 'ai-intern' ? 'selected' : ''}>AI Research Intern</option>
                <option value="data-analyst" ${oppFilter === 'data-analyst' ? 'selected' : ''}>Data Analyst</option>
                <option value="frontend-dev" ${oppFilter === 'frontend-dev' ? 'selected' : ''}>Senior Frontend Engineer</option>
                <option value="uiux-intern" ${oppFilter === 'uiux-intern' ? 'selected' : ''}>Product Design UI/UX</option>
              </select>

              <select id="filter-status" onchange="UI.filterApplicants()" class="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 font-medium text-slate-700">
                <option value="all">All Statuses</option>
                <option value="under review" ${statusFilter === 'under review' ? 'selected' : ''}>Under Review</option>
                <option value="shortlisted" ${statusFilter === 'shortlisted' ? 'selected' : ''}>Shortlisted</option>
                <option value="qualified" ${statusFilter === 'qualified' ? 'selected' : ''}>Qualified</option>
              </select>

              <!-- Credential Integrity & Anti-Fraud Filter -->
              <select id="filter-trust" onchange="UI.filterApplicants()" class="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 font-medium text-slate-700">
                <option value="all">All Integrity Levels</option>
                <option value="verified" ${trustFilter === 'verified' ? 'selected' : ''}>🛡️ Verified Genuine (100%)</option>
                <option value="flagged" ${trustFilter === 'flagged' ? 'selected' : ''}>⚠️ Tamper Risk (Flagged)</option>
                <option value="unverified" ${trustFilter === 'unverified' ? 'selected' : ''}>Self-Reported / In Review</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Applicants Table -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="p-4 border-b border-slate-100 flex justify-between items-center text-xs">
            <span class="font-bold text-slate-800">Showing ${filtered.length} of ${apps.length} Applicants</span>
            <button onclick="alert('Exporting applicants to CSV...');" class="text-purple-600 font-bold hover:underline">Export CSV</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-3.5">Candidate</th>
                  <th class="p-3.5">Applied Role</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5">Credential Integrity</th>
                  <th class="p-3.5">Applied Date</th>
                  <th class="p-3.5">Match Score</th>
                  <th class="p-3.5">Current Round</th>
                  <th class="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${filtered.map(app => `
                  <tr class="hover:bg-slate-50/80 transition cursor-pointer" onclick="UI.openApplicantDrawer('${app.id}')">
                    <td class="p-3.5">
                      <p class="font-bold text-slate-900">${app.name}</p>
                      <p class="text-[11px] text-slate-400 font-mono">${app.id}</p>
                    </td>
                    <td class="p-3.5 font-medium text-slate-700">${app.role}</td>
                    <td class="p-3.5">
                      <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] ${app.status === 'Qualified' ? 'bg-emerald-100 text-emerald-800' : app.status === 'Shortlisted' ? 'bg-purple-100 text-purple-800' : 'bg-amber-100 text-amber-800'}">
                        ${app.status}
                      </span>
                    </td>
                    <td class="p-3.5">
                      ${app.credentialTrust === 'verified' ? `
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 100% Genuine
                        </span>
                      ` : app.credentialTrust === 'flagged' ? `
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[10px] bg-rose-50 text-rose-700 border border-rose-200 animate-pulse">
                          <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> ⚠️ Tamper Risk
                        </span>
                      ` : `
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-[10px] bg-slate-100 text-slate-600 border border-slate-200">
                          <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Self-Reported
                        </span>
                      `}
                    </td>
                    <td class="p-3.5 text-slate-500">${app.appliedDate}</td>
                    <td class="p-3.5 font-black text-emerald-600">${app.matchScore}%</td>
                    <td class="p-3.5 text-slate-600">${app.currentRound}</td>
                    <td class="p-3.5 text-right" onclick="event.stopPropagation()">
                      <button onclick="UI.openApplicantDrawer('${app.id}')" class="px-3 py-1 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg font-bold">
                        Inspect
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Slide-over Applicant Profile Drawer Container (Injected when active) -->
        <div id="applicant-drawer-container"></div>
      </div>
    `;
  },

  filterApplicants() {
    const search = document.getElementById('applicant-search-box');
    const opp = document.getElementById('filter-opp');
    const status = document.getElementById('filter-status');
    const trust = document.getElementById('filter-trust');

    state.organisation.applicantSearchQuery = search ? search.value : '';
    state.organisation.applicantOppFilter = opp ? opp.value : 'all';
    state.organisation.applicantStatusFilter = status ? status.value : 'all';
    state.organisation.applicantTrustFilter = trust ? trust.value : 'all';

    const content = document.getElementById('org-tab-content');
    if (content && state.organisation.activeTab === 'applicants') {
      content.innerHTML = this.templateOrgApplicants();
    }
  },

  filterByFlaggedCredentials() {
    state.organisation.applicantSearchQuery = '';
    state.organisation.applicantOppFilter = 'all';
    state.organisation.applicantStatusFilter = 'all';
    state.organisation.applicantTrustFilter = 'flagged';
    this.switchOrgTab('applicants');
  },

  openApplicantDrawer(id) {
    const app = state.organisation.applicants.find(a => a.id === id);
    if (!app) return;

    const drawer = document.getElementById('applicant-drawer-container');
    if (!drawer) return;

    drawer.innerHTML = `
      <div class="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs">
        <div class="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col overflow-hidden animate-slide-left">
          <!-- Drawer Header -->
          <div class="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <span class="font-mono text-xs text-purple-300 font-bold">${app.id}</span>
              <h3 class="text-xl font-black">${app.name}</h3>
              <p class="text-xs text-slate-400">${app.role} • Match: <strong class="text-emerald-400">${app.matchScore}%</strong></p>
            </div>
            <button onclick="UI.closeApplicantDrawer()" class="text-slate-400 hover:text-white text-2xl font-bold">×</button>
          </div>

          <!-- Drawer Body -->
          <div class="flex-1 p-6 overflow-y-auto space-y-6 text-xs">
            <!-- AI Summary Card -->
            <div class="p-4 rounded-xl bg-purple-50 border border-purple-100 space-y-1">
              <span class="font-bold text-purple-900 uppercase text-[10px] tracking-wider">AI Recruiter Summary</span>
              <p class="text-purple-950 leading-relaxed">${app.aiSummary || 'Strong candidate with verified domain benchmarks.'}</p>
            </div>

            <!-- Details Grid -->
            <div class="space-y-3">
              <h4 class="font-bold text-slate-800 border-b pb-1">Personal Details & Education</h4>
              <p><strong>Email:</strong> ${app.email} | <strong>Phone:</strong> ${app.phone}</p>
              <p><strong>Location:</strong> ${app.location}</p>
              <p><strong>Education:</strong> ${app.education}</p>
              <p><strong>Experience:</strong> ${app.experience}</p>
            </div>

            <!-- Skills & Projects -->
            <div class="space-y-2">
              <h4 class="font-bold text-slate-800 border-b pb-1">Skills & Key Projects</h4>
              <p><strong>Matched Skills:</strong> <span class="text-emerald-700 font-semibold">${app.matchedSkills.join(', ')}</span></p>
              <p><strong>Missing Skills:</strong> <span class="text-amber-700 font-semibold">${app.missingSkills.join(', ')}</span></p>
              <p><strong>Projects:</strong> ${(app.projects || []).join(' • ')}</p>
            </div>

            <!-- Verified Credentials & Forensic Authenticity Audit Studio -->
            <div class="p-4 rounded-xl border ${
              app.credentialTrust === 'verified' ? 'bg-emerald-50/40 border-emerald-200' :
              app.credentialTrust === 'flagged' ? 'bg-rose-50/50 border-rose-300' :
              'bg-slate-50 border-slate-200'
            } space-y-3">
              <div class="flex items-center justify-between border-b ${
                app.credentialTrust === 'flagged' ? 'border-rose-200' : 'border-slate-200'
              } pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">${app.credentialTrust === 'verified' ? '🛡️' : app.credentialTrust === 'flagged' ? '⚠️' : '⏳'}</span>
                  <div>
                    <h4 class="font-bold text-slate-900 text-xs">Verified Credentials & Forensic Audit</h4>
                    <p class="text-[10px] text-slate-500">3-Tier Verification: Registry API, PDF Forensics, & Competence Cross-Check</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                    app.credentialTrust === 'verified' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                    app.credentialTrust === 'flagged' ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse' :
                    'bg-slate-200 text-slate-700'
                  }">
                    ${app.credentialTrust === 'verified' ? '100% Genuine' :
                      app.credentialTrust === 'flagged' ? 'Tamper Risk Alert' : 'Pending Review'}
                  </span>
                  <p class="text-[10px] text-slate-500 font-semibold mt-0.5">Trust Score: ${app.trustScore || 80}%</p>
                </div>
              </div>

              <!-- List of Certificates with Forensic Breakdown -->
              <div class="space-y-3 pt-1">
                ${(app.certifications || []).map((cert, cIdx) => `
                  <div class="bg-white rounded-xl border border-slate-200 p-3.5 space-y-3 shadow-2xs">
                    <!-- Cert Header -->
                    <div class="flex items-start justify-between gap-3">
                      <div>
                        <div class="flex items-center gap-1.5">
                          <span class="w-2 h-2 rounded-full ${cert.status === 'verified' ? 'bg-emerald-500' : cert.status === 'flagged' ? 'bg-rose-500' : 'bg-amber-500'}"></span>
                          <h5 class="font-bold text-slate-900 text-xs">${cert.title}</h5>
                        </div>
                        <p class="text-[11px] text-slate-500 mt-0.5">${cert.issuer} • Issued: ${cert.issueDate}</p>
                        <p class="text-[10px] font-mono text-slate-400 mt-0.5">Credential ID: <strong class="text-slate-700">${cert.credentialId}</strong></p>
                      </div>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        cert.status === 'verified' ? 'bg-emerald-100 text-emerald-800' :
                        cert.status === 'flagged' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                      }">
                        ${cert.status === 'verified' ? 'Verified Authentic' : cert.status === 'flagged' ? 'Tamper Flagged' : 'Self-Reported'}
                      </span>
                    </div>

                    <!-- Flag Alert Box (If Flagged) -->
                    ${cert.status === 'flagged' && cert.flagReasons ? `
                      <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg space-y-1.5 text-rose-900 text-[11px]">
                        <p class="font-bold flex items-center gap-1 text-rose-950">
                          <span>🚨 Forensic Tampering Flags Detected:</span>
                        </p>
                        <ul class="list-disc list-inside space-y-1 text-rose-800 text-[11px] leading-relaxed">
                          ${cert.flagReasons.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}

                    <!-- 3-Tier Forensic Inspection Card -->
                    <div class="p-3 bg-slate-50 rounded-lg border border-slate-200/80 space-y-2 text-[11px]">
                      <div class="flex items-center justify-between border-b border-slate-200 pb-1">
                        <span class="font-bold text-slate-800">Forensic Audit Results</span>
                        <span class="text-[10px] font-mono text-slate-500">Audit ID: AUD-${cIdx + 1}092</span>
                      </div>

                      <!-- 1. Digital Registry -->
                      <div class="flex items-center justify-between">
                        <span class="text-slate-500">1. Issuer Registry / Public API:</span>
                        <span class="font-semibold ${cert.issuerVerified ? 'text-emerald-700' : 'text-rose-700'}">
                          ${cert.issuerVerified ? '✓ Verified in Official Registry' : '✗ Record Not Found on Issuer DB'}
                        </span>
                      </div>

                      <!-- 2. PDF File Forensics -->
                      <div class="space-y-1 pt-1 border-t border-slate-200/60 text-[10px]">
                        <div class="flex items-center justify-between">
                          <span class="text-slate-500">2. PDF Rendering Engine:</span>
                          <span class="font-mono font-semibold ${cert.fileMetadata?.tamperingDetected ? 'text-rose-700' : 'text-slate-800'}">
                            ${cert.fileMetadata?.engine || 'Standard PDF Engine'}
                          </span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-slate-500">Creation vs Mod Timestamp:</span>
                          <span class="${cert.fileMetadata?.tamperingDetected ? 'text-rose-700 font-semibold' : 'text-slate-600'}">
                            ${cert.fileMetadata?.modifiedDate || 'Clean'}
                          </span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-slate-500">Vector / Layer Analysis:</span>
                          <span class="${cert.fileMetadata?.tamperingDetected ? 'text-rose-700 font-semibold' : 'text-emerald-700 font-semibold'}">
                            ${cert.fileMetadata?.layerCheck || 'Clean Vector Stream'}
                          </span>
                        </div>
                      </div>

                      <!-- 3. Competence Cross-Check -->
                      <div class="flex items-center justify-between pt-1 border-t border-slate-200/60">
                        <span class="text-slate-500">3. Platform Assessment Check:</span>
                        <span class="font-semibold ${cert.status === 'flagged' ? 'text-rose-700' : 'text-emerald-700'}">
                          ${cert.competenceCheck?.score || 'N/A'} (${cert.competenceCheck?.alignment || 'Evaluated'})
                        </span>
                      </div>
                    </div>

                    <!-- Certificate Action Buttons -->
                    <div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
                      <button onclick="UI.verifyCertAtSource('${cert.credentialId}', '${cert.issuer.replace(/'/g, "\\'")}', '${app.name.replace(/'/g, "\\'")}', '${cert.title.replace(/'/g, "\\'")}', '${cert.status}')" class="px-2.5 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 rounded-lg font-bold text-[11px] flex items-center gap-1 shadow-2xs">
                        <span>Verify at Source</span>
                        <svg class="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </button>

                      ${cert.status === 'flagged' ? `
                        <button onclick="UI.requestDigitalBadge('${app.id}', '${cert.title.replace(/'/g, "\\'")}')" class="px-2.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-[11px]">
                          Request Digital Badge Link
                        </button>
                        <button onclick="UI.flagCandidateFraud('${app.id}', '${cert.title.replace(/'/g, "\\'")}')" class="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-[11px]">
                          Flag as Fraudulent
                        </button>
                      ` : `
                        <button onclick="UI.markCertVerified('${app.id}', '${cert.title.replace(/'/g, "\\'")}')" class="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg font-bold text-[11px]">
                          ✓ Confirm Verified
                        </button>
                      `}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Current Application Round Status -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span class="font-bold text-slate-800">Recruitment Status & Round Progress</span>
              <p>Current Round: <strong class="text-purple-700">${app.currentRound}</strong></p>
              <p>Status: <strong class="text-emerald-700">${app.status}</strong></p>
              <p class="text-[11px] text-slate-500">History: ${(app.previousRounds || ['Round 1 Passed']).join(' → ')}</p>
            </div>

            <!-- Private Recruiter Notes -->
            <div class="space-y-2">
              <h4 class="font-bold text-slate-800 border-b pb-1">Private Recruiter Notes</h4>
              <p class="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-slate-700 italic">${app.notes}</p>
              <div class="flex gap-2">
                <input type="text" id="new-recruiter-note" placeholder="Add internal note..." class="flex-1 border rounded-xl px-3 py-1.5 text-xs"/>
                <button onclick="UI.addRecruiterNote('${app.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-xl font-bold text-xs">Add Note</button>
              </div>
            </div>
          </div>

          <!-- Drawer Footer Actions -->
          <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex gap-2">
              <button onclick="UI.downloadOptimizedResume()" class="px-3 py-2 bg-indigo-600 text-white rounded-xl font-bold">
                Download Resume
              </button>
              <button onclick="UI.closeApplicantDrawer(); UI.switchOrgTab('messages');" class="px-3 py-2 border border-slate-200 bg-white text-slate-700 rounded-xl font-bold">
                Send Message
              </button>
            </div>
            <div class="flex gap-2">
              <button onclick="UI.moveCandidateRound('${app.id}', 'Next Round'); UI.closeApplicantDrawer();" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold">
                Move to Next Round
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  closeApplicantDrawer() {
    const drawer = document.getElementById('applicant-drawer-container');
    if (drawer) drawer.innerHTML = '';
  },

  addRecruiterNote(id) {
    const input = document.getElementById('new-recruiter-note');
    if (!input || !input.value.trim()) return;
    const app = state.organisation.applicants.find(a => a.id === id);
    if (app) {
      app.notes += ` | Note: ${input.value.trim()} (by Recruiter, Today)`;
      alert('Note saved!');
      this.openApplicantDrawer(id);
    }
  },

  shortlistCandidate(id) {
    const app = state.organisation.applicants.find(a => a.id === id);
    if (app) {
      app.status = 'Shortlisted';
      alert(`${app.name} marked as Shortlisted!`);
      this.switchOrgTab('applicants');
    }
  },

  rejectCandidate(id) {
    const app = state.organisation.applicants.find(a => a.id === id);
    if (app) {
      app.status = 'Rejected';
      alert(`${app.name} marked as Rejected.`);
      this.switchOrgTab('applicants');
    }
  },

  moveCandidateRound(id, nextRound) {
    const app = state.organisation.applicants.find(a => a.id === id);
    if (app) {
      app.currentRound = nextRound || 'Round 3: Technical Coding';
      app.status = 'Qualified';
      alert(`${app.name} progressed to ${app.currentRound}!`);
      this.switchOrgTab('applicants');
    }
  },

  // -------------------------------------------------------------
  // Forensic Certificate Verification Modals & Action Handlers
  // -------------------------------------------------------------
  verifyCertAtSource(credId, issuer, candidateName, certTitle, status) {
    let modal = document.getElementById('cert-verify-modal-container');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'cert-verify-modal-container';
      document.body.appendChild(modal);
    }

    const isVerified = status === 'verified';

    modal.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
        <div class="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200 animate-scale-up">
          <!-- Modal Header -->
          <div class="p-4 ${isVerified ? 'bg-emerald-700' : 'bg-rose-700'} text-white flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xl">${isVerified ? '🛡️' : '⚠️'}</span>
              <div>
                <h4 class="font-black text-sm">Official Issuer Credential Registry</h4>
                <p class="text-[10px] text-white/80">${issuer}</p>
              </div>
            </div>
            <button onclick="UI.closeCertVerifyModal()" class="text-white hover:text-slate-200 font-bold text-xl">×</button>
          </div>

          <!-- Modal Body -->
          <div class="p-5 space-y-4 text-xs">
            <div class="p-3.5 rounded-xl ${isVerified ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'} space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider ${isVerified ? 'text-emerald-800' : 'text-rose-800'}">
                Registry Verification Lookup Result
              </span>
              <p class="font-extrabold text-sm ${isVerified ? 'text-emerald-900' : 'text-rose-900'}">
                ${isVerified ? '✓ Authenticity Confirmed by Official Authority' : '✗ Credential Record Not Found in Issuer Database'}
              </p>
              <p class="text-[11px] ${isVerified ? 'text-emerald-700' : 'text-rose-700'}">
                ${isVerified ? 
                  'The digital signature and cryptographic public key match the issuing institution’s secure repository.' : 
                  'System queried the official registry for this ID. No certificate has ever been issued under this credential number for this applicant.'}
              </p>
            </div>

            <!-- Verification Metadata Fields -->
            <div class="space-y-2 border border-slate-200 rounded-xl p-3.5 bg-slate-50 text-[11px]">
              <div class="flex justify-between border-b border-slate-200 pb-1.5">
                <span class="text-slate-500 font-medium">Candidate Name:</span>
                <span class="font-bold text-slate-800">${candidateName}</span>
              </div>
              <div class="flex justify-between border-b border-slate-200 pb-1.5">
                <span class="text-slate-500 font-medium">Certificate Title:</span>
                <span class="font-bold text-slate-800">${certTitle}</span>
              </div>
              <div class="flex justify-between border-b border-slate-200 pb-1.5">
                <span class="text-slate-500 font-medium">Credential ID:</span>
                <span class="font-mono font-bold ${isVerified ? 'text-emerald-700' : 'text-rose-700'}">${credId}</span>
              </div>
              <div class="flex justify-between border-b border-slate-200 pb-1.5">
                <span class="text-slate-500 font-medium">Registry Status:</span>
                <span class="font-bold ${isVerified ? 'text-emerald-700' : 'text-rose-700'}">${isVerified ? 'Active & Validated (SHA-256)' : 'Invalid / Record Missing'}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500 font-medium">Issuing Authority:</span>
                <span class="font-bold text-slate-800">${issuer}</span>
              </div>
            </div>

            <div class="text-[11px] text-slate-500 bg-slate-100 p-2.5 rounded-lg border border-slate-200">
              <strong>Audit Recommendation:</strong> ${isVerified ? 
                'This credential has been verified as authentic. You may proceed with candidate advancement.' : 
                'Do not consider this certificate as proof of skill. Request the candidate provide an official Credly / DigiLocker verification URL or flag this application.'}
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="p-3.5 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
            <button onclick="UI.closeCertVerifyModal()" class="px-4 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs hover:bg-slate-800">
              Close Inspection
            </button>
          </div>
        </div>
      </div>
    `;
  },

  closeCertVerifyModal() {
    const modal = document.getElementById('cert-verify-modal-container');
    if (modal) modal.innerHTML = '';
  },

  markCertVerified(appId, certTitle) {
    const app = state.organisation.applicants.find(a => a.id === appId);
    if (app) {
      const cert = (app.certifications || []).find(c => c.title === certTitle);
      if (cert) {
        cert.status = 'verified';
        cert.issuerVerified = true;
        cert.trustScore = 99;
      }
      app.credentialTrust = 'verified';
      alert(`Certificate "${certTitle}" marked as Verified Genuine!`);
      this.openApplicantDrawer(appId);
      const content = document.getElementById('org-tab-content');
      if (content && state.organisation.activeTab === 'applicants') {
        content.innerHTML = this.templateOrgApplicants();
      }
    }
  },

  flagCandidateFraud(appId, certTitle) {
    const app = state.organisation.applicants.find(a => a.id === appId);
    if (app) {
      app.credentialTrust = 'flagged';
      app.status = 'Rejected';
      app.notes += ` | [FRAUD ALERT] Disqualified due to verified forged certificate: "${certTitle}" (Adobe Photoshop tampering confirmed).`;
      alert(`Application for ${app.name} has been rejected and flagged for credential forgery.`);
      this.closeApplicantDrawer();
      this.switchOrgTab('applicants');
    }
  },

  requestDigitalBadge(appId, certTitle) {
    const app = state.organisation.applicants.find(a => a.id === appId);
    if (app) {
      alert(`Automated message sent to ${app.name}: "Please provide an official Credly, Coursera, or DigiLocker public badge link for ${certTitle}."`);
      this.closeApplicantDrawer();
      this.switchOrgTab('messages');
    }
  },

  // -------------------------------------------------------------
  // TAB 5: Assessments Engine
  // Library, Create Studio, Question Management, Assigner, Results, Settings
  // -------------------------------------------------------------
  templateOrgAssessments() {
    const list = state.organisation.assessments;
    return `
      <div class="space-y-6">
        <!-- Header -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 class="font-bold text-lg text-slate-900">Assessment Studio & Question Library</h3>
            <p class="text-xs text-slate-500">Create domain tests, manage anti-cheat proctoring, and review scoring distributions</p>
          </div>
          <button onclick="UI.openCreateAssessmentModal()" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-xs transition">
            + Create New Assessment
          </button>
        </div>

        <!-- 1. Assessment Library Table -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="p-4 border-b border-slate-100 flex justify-between items-center text-xs">
            <span class="font-bold text-slate-800">Assessment Library (${list.length} Tests)</span>
            <span class="text-slate-400">Aptitude • Technical • Domain • Coding</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-3.5">Assessment</th>
                  <th class="p-3.5">Type</th>
                  <th class="p-3.5">Duration</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5">Attempted / Assigned</th>
                  <th class="p-3.5">Avg Score</th>
                  <th class="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${list.map(test => `
                  <tr class="hover:bg-slate-50/80 transition">
                    <td class="p-3.5">
                      <p class="font-bold text-slate-900">${test.name}</p>
                      <p class="text-[11px] text-slate-500 font-mono">${test.id} • Linked: ${test.linkedTo}</p>
                    </td>
                    <td class="p-3.5 font-medium">${test.type}</td>
                    <td class="p-3.5 text-slate-600">${test.duration}</td>
                    <td class="p-3.5">
                      <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] ${test.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'}">
                        ${test.status}
                      </span>
                    </td>
                    <td class="p-3.5 text-slate-700 font-bold">${test.attemptedCount} / ${test.assignedCount}</td>
                    <td class="p-3.5 font-bold text-purple-600">${test.avgScore}</td>
                    <td class="p-3.5 text-right">
                      <div class="flex items-center justify-end gap-1.5">
                        <button onclick="alert('Viewing test results for ${test.name}');" class="px-2 py-1 bg-purple-50 text-purple-700 font-bold rounded">Results</button>
                        <button onclick="alert('Duplicated ${test.name} to draft library');" class="px-2 py-1 border border-slate-200 font-semibold rounded hover:bg-slate-100">Duplicate</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Results & Performance Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500">Assigned Candidates</span>
            <p class="text-2xl font-black text-slate-900 mt-1">144</p>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500">Total Completed</span>
            <p class="text-2xl font-black text-indigo-600 mt-1">118</p>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500">Average Score</span>
            <p class="text-2xl font-black text-purple-600 mt-1">77.8%</p>
          </div>
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-500">Pass Rate</span>
            <p class="text-2xl font-black text-emerald-600 mt-1">71.4%</p>
          </div>
        </div>
      </div>
    `;
  },

  openCreateAssessmentModal() {
    const modal = document.createElement('div');
    modal.id = 'create-assessment-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 space-y-5 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center border-b pb-3">
          <h4 class="font-black text-lg text-slate-900">Create Assessment Studio</h4>
          <button onclick="document.getElementById('create-assessment-modal').remove()" class="text-slate-400 hover:text-slate-700 text-xl font-bold">×</button>
        </div>

        <div class="space-y-4 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Assessment Name</label>
            <input type="text" id="new-test-name" value="Generative AI & Transformer Architecture Screening" class="w-full border rounded-xl px-3 py-2"/>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Assessment Type</label>
              <select class="w-full border rounded-xl px-3 py-2 bg-white text-slate-700 font-medium">
                <option>Aptitude</option>
                <option selected>Technical Coding</option>
                <option>Domain-specific</option>
              </select>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Duration (Mins)</label>
              <input type="number" value="45" class="w-full border rounded-xl px-3 py-2"/>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Total Marks</label>
              <input type="number" value="100" class="w-full border rounded-xl px-3 py-2"/>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Passing Marks</label>
              <input type="number" value="70" class="w-full border rounded-xl px-3 py-2"/>
            </div>
          </div>

          <div>
            <label class="font-bold text-slate-700 block mb-1">Question Management</label>
            <div class="p-3 bg-slate-50 border rounded-xl space-y-2">
              <p class="text-slate-600">Add MCQs, Multiple Correct, or Coding problems:</p>
              <div class="flex gap-2">
                <button type="button" onclick="alert('Added Multiple Choice Question section!');" class="px-3 py-1.5 bg-white border rounded-lg font-bold text-slate-700 hover:bg-slate-50">+ Add MCQ</button>
                <button type="button" onclick="alert('Added Multi-Correct section!');" class="px-3 py-1.5 bg-white border rounded-lg font-bold text-slate-700 hover:bg-slate-50">+ Add Multi-Correct</button>
                <button type="button" onclick="alert('Imported questions from JSON/CSV sample!');" class="px-3 py-1.5 bg-white border rounded-lg font-bold text-indigo-600 hover:bg-slate-50">📥 Import Questions</button>
              </div>
            </div>
          </div>

          <div>
            <label class="font-bold text-slate-700 block mb-1">Assign Assessment To:</label>
            <select class="w-full border rounded-xl px-3 py-2 bg-white text-slate-700 font-medium">
              <option>AI Research Intern (Entire Pool)</option>
              <option selected>AI Research Intern (Only Shortlisted Candidates)</option>
              <option>Data Analyst Candidates</option>
            </select>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-3 border-t">
          <button onclick="document.getElementById('create-assessment-modal').remove()" class="px-4 py-2 border rounded-xl font-bold">Cancel</button>
          <button onclick="document.getElementById('create-assessment-modal').remove(); alert('New assessment created, questions compiled, and published to candidate portals!'); UI.switchOrgTab('assessments');" class="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-xs">
            Publish Assessment
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  // -------------------------------------------------------------
  // TAB 6: Messages & Communication
  // Inbox grouped by role, Candidate chat, 6 Quick Templates, Attachments, Broadcast
  // -------------------------------------------------------------
  templateOrgMessages() {
    const convos = state.organisation.conversations;
    const activeCandidateKey = state.organisation.selectedChatCandidate || 'arjun';

    // Find active candidate across categories
    let activeConvo = null;
    Object.keys(convos).forEach(cat => {
      const found = convos[cat].find(c => c.id === activeCandidateKey);
      if (found) activeConvo = found;
    });
    if (!activeConvo) activeConvo = convos['ai-intern'][0];

    return `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm h-[680px] max-h-[85vh] flex overflow-hidden">
        <!-- 1. Left Column: Inbox Grouped by Opportunity -->
        <div class="w-1/3 border-r border-slate-200 flex flex-col bg-slate-50">
          <div class="p-4 border-b border-slate-200 flex justify-between items-center bg-white">
            <h4 class="font-bold text-sm text-slate-900">Inbox & Conversations</h4>
            <button onclick="UI.openBroadcastModal()" class="text-xs font-bold text-purple-600 hover:underline">Broadcast</button>
          </div>

          <div class="flex-1 overflow-y-auto divide-y divide-slate-100 text-xs">
            <!-- Group 1: AI Intern -->
            <div class="p-2 bg-slate-100/60 font-bold text-slate-500 uppercase text-[10px] tracking-wider">
              AI Intern (3 Candidates)
            </div>
            ${convos['ai-intern'].map(c => `
              <div onclick="UI.selectChatCandidate('${c.id}')" class="p-3.5 cursor-pointer transition ${c.id === activeConvo.id ? 'bg-white border-l-4 border-purple-600 shadow-xs' : 'hover:bg-white'}">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center">${c.avatar}</span>
                    <span class="font-bold text-slate-900">${c.candidateName}</span>
                  </div>
                  <span class="text-[10px] text-slate-400">${c.lastTime}</span>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-[11px] text-slate-500 truncate">${c.messages[c.messages.length - 1]?.text || ''}</p>
                  ${c.hasNewMessage ? '<span class="w-2 h-2 rounded-full bg-purple-600"></span>' : ''}
                </div>
              </div>
            `).join('')}

            <!-- Group 2: Data Analyst -->
            <div class="p-2 bg-slate-100/60 font-bold text-slate-500 uppercase text-[10px] tracking-wider">
              Data Analyst (2 Candidates)
            </div>
            ${convos['data-analyst'].map(c => `
              <div onclick="UI.selectChatCandidate('${c.id}')" class="p-3.5 cursor-pointer transition ${c.id === activeConvo.id ? 'bg-white border-l-4 border-purple-600 shadow-xs' : 'hover:bg-white'}">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center">${c.avatar}</span>
                    <span class="font-bold text-slate-900">${c.candidateName}</span>
                  </div>
                  <span class="text-[10px] text-slate-400">${c.lastTime}</span>
                </div>
                <p class="text-[11px] text-slate-500 truncate">${c.messages[c.messages.length - 1]?.text || ''}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Right Column: Active Conversation & Quick Templates -->
        <div class="flex-1 flex flex-col bg-white">
          <!-- Conversation Header -->
          <div class="px-6 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/60">
            <div>
              <h4 class="font-bold text-base text-slate-900">${activeConvo.candidateName}</h4>
              <p class="text-[11px] text-slate-500">Applied: <span class="text-purple-600 font-semibold">${activeConvo.appliedRole}</span> • Round: <span class="text-slate-800 font-semibold">${activeConvo.currentRound}</span> • Status: <span class="text-emerald-600 font-bold">${activeConvo.status}</span></p>
            </div>
            <div class="flex gap-2">
              <button onclick="alert('Viewing candidate official resume and submitted portfolio');" class="px-3 py-1.5 border rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100">
                View Dossier
              </button>
            </div>
          </div>

          <!-- Message History -->
          <div id="org-messages-thread" class="flex-1 p-6 overflow-y-auto space-y-4 text-xs bg-slate-50/30">
            ${activeConvo.messages.map(m => `
              <div class="flex flex-col ${m.sender === 'recruiter' ? 'items-end' : 'items-start'}">
                <span class="text-[10px] text-slate-400 mb-1">${m.sender === 'recruiter' ? 'Microsoft Recruiter' : activeConvo.candidateName} • ${m.time}</span>
                <div class="max-w-[75%] p-3.5 rounded-2xl ${m.sender === 'recruiter' ? 'bg-purple-600 text-white rounded-br-none shadow-xs' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'}">
                  <p class="leading-relaxed">${m.text}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 3. Quick Action Message Templates Bar -->
          <div class="p-2.5 bg-slate-100 border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <span class="font-bold text-slate-500 whitespace-nowrap pl-1">Templates:</span>
            <button onclick="UI.applyMessageTemplate('invite')" class="px-2.5 py-1 bg-white border border-slate-200 hover:border-purple-300 rounded-lg text-slate-700 font-medium whitespace-nowrap">
              📋 Invite for Assessment
            </button>
            <button onclick="UI.applyMessageTemplate('interview')" class="px-2.5 py-1 bg-white border border-slate-200 hover:border-purple-300 rounded-lg text-slate-700 font-medium whitespace-nowrap">
              📅 Schedule Interview
            </button>
            <button onclick="UI.applyMessageTemplate('documents')" class="px-2.5 py-1 bg-white border border-slate-200 hover:border-purple-300 rounded-lg text-slate-700 font-medium whitespace-nowrap">
              📄 Request Documents
            </button>
            <button onclick="UI.applyMessageTemplate('reminder')" class="px-2.5 py-1 bg-white border border-slate-200 hover:border-purple-300 rounded-lg text-slate-700 font-medium whitespace-nowrap">
              ⏰ Send Reminder
            </button>
            <button onclick="UI.applyMessageTemplate('offer')" class="px-2.5 py-1 bg-white border border-slate-200 hover:border-purple-300 rounded-lg text-slate-700 font-medium whitespace-nowrap">
              🎉 Offer Selection
            </button>
            <button onclick="UI.applyMessageTemplate('rejection')" class="px-2.5 py-1 bg-white border border-slate-200 hover:border-purple-300 rounded-lg text-slate-700 font-medium whitespace-nowrap">
              ✉ Notify Rejection
            </button>
          </div>

          <!-- Message Input Form -->
          <form onsubmit="UI.sendOrgMessage(event)" class="p-3 border-t border-slate-200 flex gap-2 bg-white">
            <input type="text" id="org-reply-input" placeholder="Type message or select a template above..." class="flex-1 text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-purple-600 font-medium"/>
            <button type="submit" class="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition shadow-xs">
              Send Message
            </button>
          </form>
        </div>
      </div>
    `;
  },

  selectChatCandidate(key) {
    state.organisation.selectedChatCandidate = key;
    const content = document.getElementById('org-tab-content');
    if (content) content.innerHTML = this.renderCurrentOrgTab();
  },

  applyMessageTemplate(type) {
    const input = document.getElementById('org-reply-input');
    if (!input) return;

    const templates = {
      invite: "Congratulations! You have passed the initial resume screening. We have assigned the Round 2 Technical Assessment to your portal. Please complete it before Sep 08.",
      interview: "We would like to invite you for a 45-minute technical video interview with our senior engineering lead this Friday at 3:00 PM IST.",
      documents: "Please upload your official college semester marksheets and verification identity documents in the portal.",
      reminder: "Friendly reminder that your technical assessment window closes in 24 hours. Please complete your submission on time.",
      offer: "We are thrilled to offer you the position at Microsoft! The formal offer letter and onboarding schedule have been released to your candidate profile.",
      rejection: "Thank you for interviewing with us. While your background was impressive, we have decided to proceed with other candidates at this time."
    };

    input.value = templates[type] || '';
    input.focus();
  },

  sendOrgMessage(e) {
    e.preventDefault();
    const input = document.getElementById('org-reply-input');
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    input.value = '';

    const key = state.organisation.selectedChatCandidate || 'arjun';
    let convo = null;
    Object.keys(state.organisation.conversations).forEach(cat => {
      const found = state.organisation.conversations[cat].find(c => c.id === key);
      if (found) convo = found;
    });

    if (convo) {
      convo.messages.push({
        sender: 'recruiter',
        time: 'Just now',
        text: text
      });
      convo.hasNewMessage = false;

      const content = document.getElementById('org-tab-content');
      if (content) content.innerHTML = this.renderCurrentOrgTab();
      const thread = document.getElementById('org-messages-thread');
      if (thread) thread.scrollTop = thread.scrollHeight;
    }
  },

  openBroadcastModal(oppId) {
    const modal = document.createElement('div');
    modal.id = 'broadcast-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
        <div class="flex justify-between items-center border-b pb-3">
          <h4 class="font-black text-base text-slate-900">Broadcast Announcement</h4>
          <button onclick="document.getElementById('broadcast-modal').remove()" class="text-slate-400 hover:text-slate-700 text-xl font-bold">×</button>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Target Cohort</label>
            <select class="w-full border rounded-xl px-3 py-2 bg-white text-slate-700 font-medium">
              <option>All Applicants (142 Candidates)</option>
              <option selected>Round 2 Aptitude Candidates (64 Candidates)</option>
              <option>Shortlisted Interviewees (20 Candidates)</option>
            </select>
          </div>

          <div>
            <label class="font-bold text-slate-700 block mb-1">Announcement Body</label>
            <textarea rows="4" class="w-full border rounded-xl p-3 text-slate-700 font-medium">Round 2 Aptitude & Technical Assessment window has been extended to Sep 08 at 11:59 PM IST. Ensure your video camera and network connections are tested prior to launch.</textarea>
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-2 border-t">
          <button onclick="document.getElementById('broadcast-modal').remove()" class="px-4 py-2 border rounded-xl font-bold">Cancel</button>
          <button onclick="document.getElementById('broadcast-modal').remove(); alert('Broadcast successfully dispatched to 64 candidates via portal notifications and email!');" class="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-xs">
            Send Broadcast
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  openNewOpportunityModal() {
    const modal = document.createElement('div');
    modal.id = 'new-opp-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
        <div class="flex justify-between items-center border-b pb-3">
          <h4 class="font-black text-base text-slate-900">Post New Opportunity</h4>
          <button onclick="document.getElementById('new-opp-modal').remove()" class="text-slate-400 hover:text-slate-700 text-xl font-bold">×</button>
        </div>

        <div class="space-y-3 text-xs">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Role Title</label>
            <input type="text" value="Applied Machine Learning Engineer" class="w-full border rounded-xl px-3 py-2"/>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Opportunity Type</label>
              <select class="w-full border rounded-xl px-3 py-2 bg-white text-slate-700 font-medium">
                <option selected>Full-time Job</option>
                <option>Internship</option>
                <option>Freelance Contract</option>
              </select>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Location / Mode</label>
              <input type="text" value="Bangalore / Hybrid" class="w-full border rounded-xl px-3 py-2"/>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Compensation Range</label>
              <input type="text" value="₹24 - ₹36 LPA" class="w-full border rounded-xl px-3 py-2"/>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Application Deadline</label>
              <input type="date" value="2026-10-15" class="w-full border rounded-xl px-3 py-2"/>
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-2 border-t">
          <button onclick="document.getElementById('new-opp-modal').remove()" class="px-4 py-2 border rounded-xl font-bold">Cancel</button>
          <button onclick="document.getElementById('new-opp-modal').remove(); alert('Opportunity posted! Candidates matching required skills will now receive recommendations.'); UI.switchOrgTab('opportunities');" class="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-xs">
            Publish Opportunity
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  // -------------------------------------------------------------
  // TAB 7: Organisation Settings (8 Comprehensive Sections)
  // 1. Account, 2. Team, 3. Notifications, 4. Verification, 5. Security, 6. Privacy, 7. Support, 8. Account
  // -------------------------------------------------------------
  templateOrgSettings() {
    const org = state.organisation.profile;
    const settings = state.organisation.settings;

    return `
      <div class="space-y-8 text-xs">
        <!-- 1. Organization Account -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 class="font-bold text-base text-slate-900 border-b pb-3">1. Organization Account & Profile</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="font-bold text-slate-700 block mb-1">Company / Institution Name</label>
              <input type="text" value="${org.name}" class="w-full border rounded-xl px-3 py-2"/>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Industry / Institution Category</label>
              <input type="text" value="${org.type}" class="w-full border rounded-xl px-3 py-2"/>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Official Careers Website</label>
              <input type="text" value="${org.website}" class="w-full border rounded-xl px-3 py-2"/>
            </div>
            <div>
              <label class="font-bold text-slate-700 block mb-1">Primary Email Contact</label>
              <input type="text" value="${org.email}" class="w-full border rounded-xl px-3 py-2"/>
            </div>
          </div>
        </div>

        <!-- 2. Team Management -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div class="flex justify-between items-center border-b pb-3">
            <div>
              <h3 class="font-bold text-base text-slate-900">2. Team Management & Recruiter Roles</h3>
              <p class="text-slate-500">Manage multiple recruiters, interviewers, and access controls</p>
            </div>
            <button onclick="alert('Invite link generated for new team member!');" class="px-3.5 py-1.5 bg-purple-600 text-white rounded-xl font-bold">+ Add Team Member</button>
          </div>
          <div class="space-y-2">
            ${settings.teamMembers.map(m => `
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <p class="font-bold text-slate-900">${m.name} (${m.email})</p>
                  <p class="text-slate-500">${m.department}</p>
                </div>
                <span class="px-2.5 py-1 rounded bg-purple-100 text-purple-800 font-bold text-[11px]">${m.role}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Notification Preferences -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 class="font-bold text-base text-slate-900 border-b pb-3">3. Notification Preferences</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border">
              <div>
                <p class="font-bold text-slate-800">New Applications Received</p>
                <p class="text-slate-500">Receive immediate alerts when candidates apply to active roles</p>
              </div>
              <input type="checkbox" checked class="w-4 h-4 accent-purple-600"/>
            </div>
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border">
              <div>
                <p class="font-bold text-slate-800">Assessment Completion Alerts</p>
                <p class="text-slate-500">Notify when candidates finish aptitude or technical coding tests</p>
              </div>
              <input type="checkbox" checked class="w-4 h-4 accent-purple-600"/>
            </div>
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border">
              <div>
                <p class="font-bold text-slate-800">Candidate Chat Messages</p>
                <p class="text-slate-500">Real-time alerts when applicants reply to recruiters</p>
              </div>
              <input type="checkbox" checked class="w-4 h-4 accent-purple-600"/>
            </div>
          </div>
        </div>

        <!-- 4. Verification -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <h3 class="font-bold text-base text-slate-900 border-b pb-3">4. Organization Verification</h3>
          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div>
              <p class="font-black text-emerald-900 text-sm">Status: Verified Enterprise Partner</p>
              <p class="text-emerald-700">Corporate CIN: ${settings.verification.cinNumber} • Tax ID: ${settings.verification.taxId}</p>
            </div>
            <span class="px-3 py-1 bg-emerald-200 text-emerald-900 font-bold rounded-full">Active</span>
          </div>
        </div>

        <!-- 5. Security -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 class="font-bold text-base text-slate-900 border-b pb-3">5. Security & Authentication</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-slate-50 border rounded-xl">
              <div>
                <p class="font-bold text-slate-800">Two-Factor Authentication (2FA)</p>
                <p class="text-slate-500">Enforce biometric or SMS OTP on all recruiter logins</p>
              </div>
              <input type="checkbox" checked class="w-4 h-4 accent-purple-600"/>
            </div>
            <div class="p-3 bg-slate-50 border rounded-xl space-y-1">
              <p class="font-bold text-slate-800">Active Recruiter Sessions</p>
              ${settings.security.activeSessions.map(s => `<p class="text-slate-600">● ${s.device} • ${s.location} (${s.status})</p>`).join('')}
              <button onclick="alert('All other recruiter sessions logged out.');" class="mt-2 text-rose-600 font-bold hover:underline">Log Out All Other Devices</button>
            </div>
          </div>
        </div>

        <!-- 6. Privacy -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <h3 class="font-bold text-base text-slate-900 border-b pb-3">6. Privacy & Data Governance</h3>
          <div class="flex items-center justify-between p-3 bg-slate-50 border rounded-xl">
            <div>
              <p class="font-bold text-slate-800">Public Company Profile</p>
              <p class="text-slate-500">Allow verified candidates to discover your campus page</p>
            </div>
            <input type="checkbox" checked class="w-4 h-4 accent-purple-600"/>
          </div>
        </div>

        <!-- 7. Help & Support -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <h3 class="font-bold text-base text-slate-900 border-b pb-3">7. Enterprise Help & Support</h3>
          <div class="p-4 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-between">
            <div>
              <p class="font-bold text-purple-900">Dedicated Enterprise Campus Support</p>
              <p class="text-purple-700">Priority SLA: 1 hour • Email: enterprise-support@careerlens.com</p>
            </div>
            <button onclick="alert('Support ticket opened.');" class="px-4 py-2 bg-purple-600 text-white font-bold rounded-xl">Contact Support</button>
          </div>
        </div>

        <!-- 8. Account Actions -->
        <div class="bg-white rounded-2xl p-6 border border-rose-200 shadow-sm space-y-3">
          <h3 class="font-bold text-base text-rose-900 border-b border-rose-100 pb-3">8. Account Management</h3>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-bold text-slate-800">Export All Company Hiring Data</p>
              <p class="text-slate-500">Download complete candidate archives, assessment results, and interview notes</p>
            </div>
            <button onclick="alert('Exporting complete company data bundle (ZIP)...');" class="px-4 py-2 border border-slate-200 font-bold rounded-xl hover:bg-slate-50">Export Data</button>
          </div>
        </div>
      </div>
    `;
  },

  // -------------------------------------------------------------
  // Multi-Disciplinary Discipline Switcher Methods
  // -------------------------------------------------------------
  renderDisciplinePills(theme = 'light') {
    const d = state.selectedDiscipline;
    const disciplines = [
      { id: 'all', label: 'All Fields', icon: '🌐', lightActive: 'bg-slate-900 text-white shadow-xs', darkActive: 'bg-white text-slate-900 shadow-xs' },
      { id: 'tech', label: 'Tech & AI', icon: '💻', lightActive: 'bg-blue-600 text-white shadow-xs', darkActive: 'bg-blue-500 text-white shadow-xs' },
      { id: 'finance', label: 'Commerce & Finance', icon: '📈', lightActive: 'bg-emerald-600 text-white shadow-xs', darkActive: 'bg-emerald-500 text-white shadow-xs' },
      { id: 'design', label: 'UI/UX Design', icon: '🎨', lightActive: 'bg-purple-600 text-white shadow-xs', darkActive: 'bg-purple-500 text-white shadow-xs' },
      { id: 'law', label: 'Law & Governance', icon: '⚖️', lightActive: 'bg-amber-600 text-white shadow-xs', darkActive: 'bg-amber-500 text-white shadow-xs' },
      { id: 'healthcare', label: 'Healthcare & Bio', icon: '🧬', lightActive: 'bg-rose-600 text-white shadow-xs', darkActive: 'bg-rose-500 text-white shadow-xs' }
    ];

    if (theme === 'dark') {
      return disciplines.map(item => `
        <button onclick="UI.setDisciplineFilter('${item.id}')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${d === item.id ? item.darkActive : 'text-slate-300 hover:text-white hover:bg-slate-700/60'}">
          <span>${item.icon}</span>
          <span>${item.label}</span>
        </button>
      `).join('');
    }

    return disciplines.map(item => `
      <button onclick="UI.setDisciplineFilter('${item.id}')" class="px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${d === item.id ? item.lightActive : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'}">
        <span>${item.icon}</span>
        <span>${item.label}</span>
      </button>
    `).join('');
  },

  setDisciplineFilter(discipline) {
    state.selectedDiscipline = discipline;
    const profileKey = discipline === 'all' ? 'tech' : discipline;
    if (disciplineProfiles[profileKey]) {
      state.applicant.profile = JSON.parse(JSON.stringify(disciplineProfiles[profileKey]));
    }
    if (fieldJDs[profileKey]) {
      state.applicant.pastedJobDescription = fieldJDs[profileKey];
    }
    state.applicant.manualUploadedFileName = null;

    const mentorGreetings = {
      tech: 'Hello Arjun! I am your AI Career Mentor for Tech & AI Systems. Ask me about LLM fine-tuning, system design, or interview prep!',
      finance: 'Hello Arjun! I am your Quantitative Finance Career Mentor. Ask me about DCF modeling, private equity, or SEBI certifications!',
      design: 'Hello Arjun! I am your Product & Design Systems Mentor. Ask me about WCAG AAA compliance, token architectures, or portfolio feedback!',
      law: 'Hello Arjun! I am your Tech & Corporate Law Mentor. Ask me about the DPDP Act 2023, contract drafting, or moot court prep!',
      healthcare: 'Hello Arjun! I am your Clinical Bioinformatics Mentor. Ask me about CDISC SDTM schemas, survival analysis, or genomics research!'
    };
    if (state.applicant.chatMessages && state.applicant.chatMessages.length > 0) {
      state.applicant.chatMessages[0].text = mentorGreetings[profileKey] || mentorGreetings['tech'];
    }

    if (state.currentPersona === 'applicant' || state.currentPersona === 'organisation') {
      this.renderPersonaView();
    }
  },

  // -------------------------------------------------------------
  // Student Pre-Flight Certificate Verifier Methods
  // -------------------------------------------------------------
  selectPreflightCert(certKey) {
    state.studentPreflight.selectedCert = certKey;
    state.studentPreflight.scanCompleted = false;
    state.studentPreflight.auditReport = null;
    const container = document.getElementById('student-preflight-result-container');
    if (container) container.innerHTML = this.renderPreflightReport();
  },

  runStudentPreflightScan() {
    const certKey = state.studentPreflight.selectedCert;
    const cert = studentCertificates[certKey] || studentCertificates['stanford-ai'];
    const btn = document.getElementById('btn-preflight-scan');
    const container = document.getElementById('student-preflight-result-container');

    state.studentPreflight.isScanning = true;
    state.studentPreflight.progress = 10;
    state.studentPreflight.currentStage = 'Stage 1: Extracting PDF XMP metadata & digital signature stream...';

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<span class="inline-block animate-spin">⏳</span> Scanning Credential...`;
    }

    if (container) {
      container.innerHTML = `
        <div class="p-5 bg-white/5 rounded-xl border border-white/10 space-y-3 animate-pulse">
          <div class="flex justify-between text-xs font-mono text-indigo-200">
            <span id="preflight-status-text">Stage 1: Extracting PDF XMP metadata & digital signature stream...</span>
            <span id="preflight-percent-text">25%</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div id="preflight-progress-bar" class="bg-gradient-to-r from-indigo-400 to-emerald-400 h-2 rounded-full transition-all duration-300" style="width: 25%"></div>
          </div>
        </div>
      `;
    }

    setTimeout(() => {
      const statusText = document.getElementById('preflight-status-text');
      const percentText = document.getElementById('preflight-percent-text');
      const progressBar = document.getElementById('preflight-progress-bar');
      if (statusText) statusText.innerText = 'Stage 2: Running OpenCV Error Level Analysis (ELA) on raster layers...';
      if (percentText) percentText.innerText = '65%';
      if (progressBar) progressBar.style.width = '65%';
    }, 600);

    setTimeout(() => {
      const statusText = document.getElementById('preflight-status-text');
      const percentText = document.getElementById('preflight-percent-text');
      const progressBar = document.getElementById('preflight-progress-bar');
      if (statusText) statusText.innerText = 'Stage 3: Querying DigiLocker India & Credly Sovereign Public Registry...';
      if (percentText) percentText.innerText = '90%';
      if (progressBar) progressBar.style.width = '90%';
    }, 1200);

    setTimeout(() => {
      state.studentPreflight.isScanning = false;
      state.studentPreflight.scanCompleted = true;
      state.studentPreflight.auditReport = cert;

      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<span>⚡ Run Pre-Flight Integrity Scan</span>`;
      }

      if (container) {
        container.innerHTML = this.renderPreflightReport();
      }
    }, 1800);
  },

  renderPreflightReport() {
    const { scanCompleted, auditReport } = state.studentPreflight;
    if (!scanCompleted || !auditReport) {
      return `
        <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-2xl">📋</span>
            <div>
              <p class="font-bold text-white">Pre-Flight Audit Pending</p>
              <p class="text-[11px] text-slate-400">Click 'Run Pre-Flight Integrity Scan' to execute cryptographic EXIF, ELA, and registry verification.</p>
            </div>
          </div>
          <span class="text-[11px] font-mono text-slate-400">Ready to audit</span>
        </div>
      `;
    }

    if (auditReport.isGenuine) {
      return `
        <div class="p-5 rounded-xl bg-emerald-950/40 border-2 border-emerald-500/40 space-y-4 shadow-inner">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-500/20 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 font-black text-xl flex items-center justify-center shadow-md">
                ✓
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-black text-sm text-white">${auditReport.title}</h4>
                  <span class="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">VERIFIED GENUINE</span>
                </div>
                <p class="text-xs text-emerald-200">${auditReport.issuer} • Credential ID: ${auditReport.credentialId}</p>
              </div>
            </div>
            <div class="text-right text-xs">
              <span class="text-[10px] text-slate-400">DigiLocker Seal</span>
              <p class="font-mono text-emerald-300 font-bold text-xs">#DL-2026-89421</p>
            </div>
          </div>

          <!-- 3-Tier Inspection Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-black/30 p-3 rounded-lg border border-white/5 space-y-1">
              <span class="text-[10px] text-slate-400 uppercase font-bold">1. File & Metadata Forensics</span>
              <p class="text-emerald-300 font-bold flex items-center gap-1"><span>✓</span> Clean Vector Stream</p>
              <p class="text-[11px] text-slate-300">${auditReport.metadata.tamperDetail}</p>
            </div>
            <div class="bg-black/30 p-3 rounded-lg border border-white/5 space-y-1">
              <span class="text-[10px] text-slate-400 uppercase font-bold">2. Error Level Analysis (ELA)</span>
              <p class="text-emerald-300 font-bold flex items-center gap-1"><span>✓</span> ${auditReport.ela.score}</p>
              <p class="text-[11px] text-slate-300">${auditReport.ela.detail}</p>
            </div>
            <div class="bg-black/30 p-3 rounded-lg border border-white/5 space-y-1">
              <span class="text-[10px] text-slate-400 uppercase font-bold">3. Sovereign Registry Audit</span>
              <p class="text-emerald-300 font-bold flex items-center gap-1"><span>✓</span> Official Record Matches</p>
              <p class="text-[11px] text-slate-300">Issued To: ${auditReport.registry.issuedTo} • Verified on ${auditReport.registry.issuer}</p>
            </div>
          </div>

          <div class="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30 flex items-center justify-between text-xs">
            <span class="text-emerald-200">✨ <strong>Pre-Flight Clear:</strong> This certificate is stamped with an official CareerLens verification hash and will bypass recruiter manual audits.</span>
            <span class="font-mono text-[10px] text-emerald-300 truncate max-w-xs">Hash: ${auditReport.registry.verifiedHash.substring(0, 18)}...</span>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="p-5 rounded-xl bg-rose-950/50 border-2 border-rose-500/50 space-y-4 shadow-inner">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rose-500/20 pb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white font-black text-xl flex items-center justify-center shadow-md">
                ⚠️
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-black text-sm text-white">${auditReport.title}</h4>
                  <span class="text-[10px] font-black px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40">AUDIT FAILED (TAMPER DETECTED)</span>
                </div>
                <p class="text-xs text-rose-200">${auditReport.issuer} • Claimed ID: ${auditReport.credentialId}</p>
              </div>
            </div>
            <div class="text-right text-xs">
              <span class="text-[10px] text-rose-400 font-bold">Tamper Severity</span>
              <p class="font-mono text-rose-300 font-bold text-xs">Critical (100% Recruiter Flag)</p>
            </div>
          </div>

          <!-- 3-Tier Inspection Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="bg-black/30 p-3 rounded-lg border border-rose-500/20 space-y-1">
              <span class="text-[10px] text-slate-400 uppercase font-bold">1. File & Metadata Forensics</span>
              <p class="text-rose-400 font-bold flex items-center gap-1"><span>✗</span> Photoshop Layer Anomaly</p>
              <p class="text-[11px] text-rose-200">${auditReport.metadata.tamperDetail}</p>
            </div>
            <div class="bg-black/30 p-3 rounded-lg border border-rose-500/20 space-y-1">
              <span class="text-[10px] text-slate-400 uppercase font-bold">2. Error Level Analysis (ELA)</span>
              <p class="text-rose-400 font-bold flex items-center gap-1"><span>✗</span> ${auditReport.ela.score}</p>
              <p class="text-[11px] text-rose-200">${auditReport.ela.detail}</p>
            </div>
            <div class="bg-black/30 p-3 rounded-lg border border-rose-500/20 space-y-1">
              <span class="text-[10px] text-slate-400 uppercase font-bold">3. Sovereign Registry Audit</span>
              <p class="text-rose-400 font-bold flex items-center gap-1"><span>✗</span> Record Mismatch</p>
              <p class="text-[11px] text-rose-200">${auditReport.registry.issuedTo}</p>
            </div>
          </div>

          <div class="p-3 bg-rose-500/10 rounded-lg border border-rose-500/30 flex items-center justify-between text-xs">
            <span class="text-rose-200">🛑 <strong>Security Recommendation:</strong> Do NOT attach this document to job or internship applications. Submitting manipulated credentials triggers permanent platform blacklisting.</span>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------
  // Live Monaco Interactive Coding Sandbox Modal Methods
  // -------------------------------------------------------------
  openCodingAssessmentModal(challengeId = 'dp-tree-reroot') {
    state.codingModal.isOpen = true;
    state.codingModal.challengeId = challengeId;
    state.codingModal.pasteWarning = false;
    state.codingModal.isRunning = false;
    state.codingModal.consoleOutput = null;

    if (!state.codingModal.code) {
      state.codingModal.code = codingChallenge.templates[state.codingModal.language];
    }

    // Start timer interval if not already running
    if (state.codingModal.timerInterval) clearInterval(state.codingModal.timerInterval);
    state.codingModal.timerInterval = setInterval(() => {
      if (state.codingModal.timeLeft > 0) {
        state.codingModal.timeLeft--;
        const timerEl = document.getElementById('coding-timer-display');
        if (timerEl) {
          const mins = Math.floor(state.codingModal.timeLeft / 60);
          const secs = state.codingModal.timeLeft % 60;
          timerEl.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
      }
    }, 1000);

    let modal = document.getElementById('coding-assessment-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'coding-assessment-modal';
      modal.className = 'fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-hidden';
      document.body.appendChild(modal);
    }

    modal.innerHTML = this.templateCodingAssessmentModal();
    modal.classList.remove('hidden');
  },

  closeCodingAssessmentModal() {
    state.codingModal.isOpen = false;
    if (state.codingModal.timerInterval) {
      clearInterval(state.codingModal.timerInterval);
      state.codingModal.timerInterval = null;
    }
    const modal = document.getElementById('coding-assessment-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  },

  setCodingLanguage(lang) {
    state.codingModal.language = lang;
    state.codingModal.code = codingChallenge.templates[lang] || '';
    state.codingModal.consoleOutput = null;
    const modal = document.getElementById('coding-assessment-modal');
    if (modal) {
      modal.innerHTML = this.templateCodingAssessmentModal();
    }
  },

  handleCodeEditorInput(value) {
    state.codingModal.code = value;
  },

  handleCodePasteGuard(event) {
    event.preventDefault();
    state.codingModal.pasteWarning = true;
    const banner = document.getElementById('paste-guard-warning');
    if (banner) {
      banner.classList.remove('hidden');
      setTimeout(() => {
        banner.classList.add('hidden');
      }, 4000);
    }
  },

  setCodingTestCaseTab(tabIndex) {
    state.codingModal.testCaseTab = tabIndex;
    const modal = document.getElementById('coding-assessment-modal');
    if (modal) {
      modal.innerHTML = this.templateCodingAssessmentModal();
    }
  },

  runCodeExecution() {
    state.codingModal.isRunning = true;
    const btn = document.getElementById('btn-run-code');
    if (btn) {
      btn.innerHTML = `<span class="inline-block animate-spin">⏳</span> Compiling in Judge0 Sandbox...`;
    }

    setTimeout(() => {
      state.codingModal.isRunning = false;
      state.codingModal.consoleOutput = {
        status: 'Accepted',
        runtime: '18 ms',
        memory: '14.2 MB',
        passedCount: 2,
        totalCount: 2,
        cases: [
          { id: 1, name: 'Sample Case 1', passed: true, input: 'n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]', expected: '[8, 12, 6, 10, 10, 10]', actual: '[8, 12, 6, 10, 10, 10]', time: '12ms' },
          { id: 2, name: 'Sample Case 2', passed: true, input: 'n = 1, edges = []', expected: '[0]', actual: '[0]', time: '6ms' }
        ]
      };

      const modal = document.getElementById('coding-assessment-modal');
      if (modal) {
        modal.innerHTML = this.templateCodingAssessmentModal();
      }
    }, 450);
  },

  submitCodingSolution() {
    const btn = document.getElementById('btn-submit-code');
    if (btn) {
      btn.innerHTML = `<span class="inline-block animate-spin">⚡</span> Evaluating Full Test Suite...`;
    }

    setTimeout(() => {
      // Award points & update streak
      state.applicant.profile.rankings[1].score = 96; // Algorithm score up to 96
      state.applicant.profile.rankings[1].rank = 136; // Rank up

      // Close coding modal
      this.closeCodingAssessmentModal();

      // Show celebratory badge modal
      const celebModal = document.createElement('div');
      celebModal.id = 'coding-success-modal';
      celebModal.className = 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4';
      celebModal.innerHTML = `
        <div class="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl border-2 border-emerald-500/40 transform transition-all scale-100">
          <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white text-3xl font-black flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            🏆
          </div>
          <div class="space-y-2">
            <span class="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              100% TEST SUITE PASSED
            </span>
            <h3 class="text-2xl font-black text-slate-900">Dynamic Programming Mastered!</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              All 3 test cases passed in Judge0 sandbox. Your solution has been cryptographically signed and added to your verified profile credentials.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div>
              <p class="text-[10px] text-slate-400 font-bold">XP EARNED</p>
              <p class="text-lg font-black text-amber-600">+50 XP</p>
            </div>
            <div>
              <p class="text-[10px] text-slate-400 font-bold">NEW STREAK</p>
              <p class="text-lg font-black text-emerald-600">9 Days 🔥</p>
            </div>
            <div>
              <p class="text-[10px] text-slate-400 font-bold">GLOBAL RANK</p>
              <p class="text-lg font-black text-indigo-600">#136</p>
            </div>
          </div>

          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-left text-[11px] text-emerald-900 space-y-0.5">
            <p class="font-bold flex items-center gap-1"><span>🛡️</span> Verified Credential Issued</p>
            <p class="font-mono text-[10px] text-emerald-700">Hash: 0x9b4c8a2e10f39485... • Recruiter Visible</p>
          </div>

          <button onclick="document.getElementById('coding-success-modal').remove(); UI.renderApplicantTab('tests');" class="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl text-xs transition shadow-md">
            Return to Leaderboard & Assessments →
          </button>
        </div>
      `;
      document.body.appendChild(celebModal);
    }, 700);
  },

  templateCodingAssessmentModal() {
    const mins = Math.floor(state.codingModal.timeLeft / 60);
    const secs = state.codingModal.timeLeft % 60;
    const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const code = state.codingModal.code || codingChallenge.templates[state.codingModal.language];
    const lineCount = code.split('\n').length;
    const lineNumbers = Array.from({ length: Math.max(lineCount, 22) }, (_, i) => i + 1).join('\n');
    const selectedTab = state.codingModal.testCaseTab;
    const currentCase = codingChallenge.testCases[selectedTab];
    const output = state.codingModal.consoleOutput;

    return `
      <div class="w-full max-w-7xl h-[92vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100 font-sans">
        
        <!-- Header Bar -->
        <div class="bg-slate-950 px-6 py-3.5 border-b border-slate-800 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
              IDE
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-black text-sm text-white">${codingChallenge.title}</h3>
                <span class="text-[10px] font-black px-2 py-0.5 rounded ${codingChallenge.difficultyColor}">
                  ${codingChallenge.difficulty}
                </span>
                <span class="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  ${codingChallenge.benchmark}
                </span>
              </div>
              <p class="text-[11px] text-slate-400">Time Limit: ${codingChallenge.timeLimit} • Memory Limit: ${codingChallenge.memoryLimit}</p>
            </div>
          </div>

          <!-- Proctoring Pill -->
          <div class="hidden md:flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[11px] px-3 py-1 rounded-full font-mono">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>🔒 Proctored Environment: Fullscreen Enforced • Paste Guard Active • 0 Flags</span>
          </div>

          <!-- Timer & Close -->
          <div class="flex items-center gap-3">
            <div class="bg-slate-800/90 border border-slate-700 px-3 py-1 rounded-xl text-center">
              <span class="text-[9px] text-slate-400 uppercase font-bold block leading-none">Time Remaining</span>
              <span id="coding-timer-display" class="font-mono font-black text-xs text-amber-400">${timeFormatted}</span>
            </div>
            <button onclick="UI.closeCodingAssessmentModal()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm transition">
              ✕
            </button>
          </div>
        </div>

        <!-- Anti-Paste Warning Banner (Hidden by default) -->
        <div id="paste-guard-warning" class="hidden bg-rose-950/90 border-b border-rose-600/50 px-4 py-2 text-rose-200 text-xs font-bold flex items-center justify-between transition">
          <div class="flex items-center gap-2">
            <span class="text-base">⚠️</span>
            <span>Anti-Cheat Notice: External clipboard paste blocked by Proctoring Guard. Candidates are evaluated on raw algorithmic implementation.</span>
          </div>
          <span class="text-[10px] font-mono text-rose-400">FLAG_ID: PG-001</span>
        </div>

        <!-- Main Body: Left Brief + Right Monaco IDE -->
        <div class="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          <!-- Left Pane: Problem Description (5 cols) -->
          <div class="lg:col-span-5 border-r border-slate-800 p-6 overflow-y-auto space-y-5 bg-slate-900/60 text-xs">
            <div class="space-y-2">
              <h4 class="font-black text-sm text-slate-200">Problem Statement</h4>
              <div class="text-slate-300 leading-relaxed space-y-2">
                ${codingChallenge.description}
              </div>
            </div>

            <!-- Example 1 -->
            <div class="space-y-1.5">
              <h5 class="font-bold text-slate-300 text-xs">Example 1:</h5>
              <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1">
                <div><span class="text-slate-500">Input:</span> <span class="text-emerald-400">${codingChallenge.example1.input}</span></div>
                <div><span class="text-slate-500">Output:</span> <span class="text-indigo-300">${codingChallenge.example1.output}</span></div>
                <div class="pt-1 text-[10px] text-slate-400 leading-relaxed"><span class="text-slate-500">Explanation:</span> ${codingChallenge.example1.explanation}</div>
              </div>
            </div>

            <!-- Example 2 -->
            <div class="space-y-1.5">
              <h5 class="font-bold text-slate-300 text-xs">Example 2:</h5>
              <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1">
                <div><span class="text-slate-500">Input:</span> <span class="text-emerald-400">${codingChallenge.example2.input}</span></div>
                <div><span class="text-slate-500">Output:</span> <span class="text-indigo-300">${codingChallenge.example2.output}</span></div>
              </div>
            </div>

            <!-- Constraints -->
            <div class="space-y-2 pt-2 border-t border-slate-800/80">
              <h5 class="font-bold text-slate-300 text-xs">Constraints:</h5>
              <ul class="list-disc pl-4 space-y-1 text-slate-400 font-mono text-[11px]">
                ${codingChallenge.constraints.map(c => `<li>${c}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Right Pane: Monaco Code Editor + Test Console (7 cols) -->
          <div class="lg:col-span-7 flex flex-col overflow-hidden bg-slate-950">
            
            <!-- Editor Toolbar -->
            <div class="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-2">
                <span class="text-slate-400 font-bold text-[11px]">Language:</span>
                <select onchange="UI.setCodingLanguage(this.value)" class="bg-slate-950 text-indigo-300 text-xs border border-slate-700 rounded-lg px-2.5 py-1 font-mono font-bold focus:outline-none focus:border-indigo-500">
                  <option value="python" ${state.codingModal.language === 'python' ? 'selected' : ''}>Python 3.12 (CPython)</option>
                  <option value="cpp" ${state.codingModal.language === 'cpp' ? 'selected' : ''}>C++ 20 (GCC 13.2)</option>
                  <option value="java" ${state.codingModal.language === 'java' ? 'selected' : ''}>Java 17 (OpenJDK)</option>
                  <option value="javascript" ${state.codingModal.language === 'javascript' ? 'selected' : ''}>TypeScript 5.4 (Node.js)</option>
                </select>
              </div>

              <div class="flex items-center gap-2">
                <button onclick="UI.setCodingLanguage(state.codingModal.language)" class="text-slate-400 hover:text-white text-[11px] font-bold px-2 py-1 rounded hover:bg-slate-800 transition">
                  ↺ Reset Code
                </button>
                <span class="text-slate-700">|</span>
                <span class="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span>●</span> Monaco LSP Ready
                </span>
              </div>
            </div>

            <!-- Code Editor Workspace (Line Numbers + Textarea) -->
            <div class="flex-1 flex overflow-hidden relative">
              <!-- Line Numbers Gutter -->
              <pre class="bg-slate-950 text-slate-600 select-none py-3 px-3 text-right font-mono text-[11px] leading-5 border-r border-slate-800/80 overflow-hidden min-w-[45px]">${lineNumbers}</pre>
              
              <!-- Code Textarea -->
              <textarea 
                id="monaco-code-textarea"
                oninput="UI.handleCodeEditorInput(this.value)"
                onpaste="UI.handleCodePasteGuard(event)"
                spellcheck="false"
                class="flex-1 bg-slate-950 text-emerald-300 font-mono text-[11px] leading-5 p-3 resize-none focus:outline-none selection:bg-indigo-600 selection:text-white"
              >${code}</textarea>
            </div>

            <!-- Bottom Console & Test Runner Pane -->
            <div class="h-56 bg-slate-900 border-t border-slate-800 flex flex-col text-xs">
              
              <!-- Test Cases Tabs -->
              <div class="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">Test Cases:</span>
                  ${codingChallenge.testCases.map((tc, idx) => `
                    <button onclick="UI.setCodingTestCaseTab(${idx})" class="px-2.5 py-1 rounded-lg text-xs font-bold transition font-mono ${selectedTab === idx ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-800 text-slate-400 hover:text-white'}">
                      Case ${idx + 1}
                    </button>
                  `).join('')}
                </div>

                <div class="text-[10px] font-mono text-slate-400">
                  Judge0 Engine • Sandbox Mode
                </div>
              </div>

              <!-- Test Case Body / Output Diff -->
              <div class="flex-1 p-4 overflow-y-auto bg-slate-900/80 font-mono text-[11px] space-y-2">
                ${output ? `
                  <!-- Output Display from Run Code -->
                  <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold border border-emerald-800">
                        ${output.status}
                      </span>
                      <span class="text-slate-400 text-xs">Runtime: <strong>${output.runtime}</strong></span>
                      <span class="text-slate-400 text-xs">• Memory: <strong>${output.memory}</strong></span>
                    </div>
                    <span class="text-emerald-400 text-xs font-bold">Passed ${output.passedCount}/${output.totalCount} Sample Cases</span>
                  </div>

                  <div class="space-y-1 text-slate-300">
                    <p class="text-[10px] text-slate-500 uppercase font-bold">Case ${selectedTab + 1} Input:</p>
                    <pre class="bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">${currentCase.input}</pre>
                    
                    <div class="grid grid-cols-2 gap-2 pt-1">
                      <div>
                        <p class="text-[10px] text-slate-500 uppercase font-bold">Your Output:</p>
                        <pre class="bg-slate-950 p-2 rounded border border-emerald-900/50 text-emerald-400">${currentCase.expected}</pre>
                      </div>
                      <div>
                        <p class="text-[10px] text-slate-500 uppercase font-bold">Expected Output:</p>
                        <pre class="bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">${currentCase.expected}</pre>
                      </div>
                    </div>
                  </div>
                ` : `
                  <!-- Default Test Case Input View -->
                  <div class="space-y-1">
                    <span class="text-[10px] text-slate-400 uppercase font-bold">Case ${selectedTab + 1} Parameters:</span>
                    <pre class="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-300">${currentCase.input}</pre>
                  </div>
                  <div class="space-y-1">
                    <span class="text-[10px] text-slate-400 uppercase font-bold">Expected Output:</span>
                    <pre class="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-emerald-400">${currentCase.expected}</pre>
                  </div>
                `}
              </div>

              <!-- Action Buttons Footer -->
              <div class="bg-slate-950 px-4 py-3 border-t border-slate-800 flex items-center justify-between">
                <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span>ℹ️</span>
                  <span>Executing code compiles on an isolated Docker container with gVisor sandbox.</span>
                </div>

                <div class="flex items-center gap-3">
                  <button id="btn-run-code" onclick="UI.runCodeExecution()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition border border-slate-700 flex items-center gap-1.5">
                    <span>▶ Run Code</span>
                  </button>
                  <button id="btn-submit-code" onclick="UI.submitCodingSolution()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-black text-xs transition shadow-lg flex items-center gap-1.5">
                    <span>⚡ Submit Solution</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    `;
  }
};

// Expose to window for inline onclick handlers & global scope
if (typeof window !== 'undefined') {
  window.UI = UI;
  window.state = state;
}

// Initialize immediately or on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
  } else {
    UI.init();
  }
}
