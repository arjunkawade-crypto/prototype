# Talent & Hiring Platform: Complete UI/UX & System Specification

## Executive Overview
This document specifies the complete user experience, screen layouts, workflows, and component hierarchy for a dual-ecosystem platform serving:
1. **Applicants**: Students, academicians, and working professionals seeking new jobs, internships, freelance gigs, and AI-driven upskilling.
2. **Organisations**: Colleges, universities, enterprises, and startups creating opportunities, screening applicants, executing multi-round hiring pipelines, and conducting assessments.

---

## 1. System Navigation & Persona Routing

### 1.1 First Screen: Persona Selection Gate
- **Purpose**: Provides immediate persona bifurcation upon landing.
- **Components**:
  - **Hero Title**: *"Connected Career & Hiring Intelligence"*
  - **Persona Card 1 - Applicant & Talent**:
    - Tag: `For Candidates`
    - Subtitle: *For students, academicians, and working professionals seeking jobs, internships, freelance gigs & upskilling.*
    - Highlights: Unique Post IDs, Deep AI Skill & Test Gap Analysis, Recommended Freelance Projects, LeetCode/GitHub Activity Heatmap, Domain Rankings, Settings & Saved Bookmarks.
    - CTA: `Enter Applicant Mode →`
  - **Persona Card 2 - Organisation & Colleges**:
    - Tag: `For Employers`
    - Subtitle: *For companies, colleges, placement cells & recruiters posting openings and assessing talent.*
    - Highlights: 8-Step Opportunity Analytics (AI Intern), Multi-Round Pipeline, Custom Assessment Studio, Messaging & Broadcasts.
    - CTA: `Enter Organisation Mode →`
  - **Top Switcher Bar**: Streamlined header with Recruiter Messages icon (with unread badge), AI Career Advisor drawer trigger, and candidate profile avatar. Removed switcher pills from logged-in applicant view.
  - **Landing Selection**: Direct clean selection between `[Applicant & Talent]` and `[Organisation & Colleges]`.

---

## 2. Applicant Portal (8 Core Tabs)

### Tab 1: Recommendations (4 Clean Core Sections)
1. **Resume AI Studio**:
   - **Analyse Current Resume**: Deep ATS diagnostic inspection of current document (`Arjun_Kawade_Resume_2026.pdf` or uploaded revision). Provides 92/100 score, breaks down quantified metrics (88%), keyword density (95%), formatting parsability (94%), and delivers 3 distinct diagnostic cards:
     - *Strengths Detected*: Executive action verbs, quantified metrics, high domain alignment, clean single-column ATS layout.
     - *Weaknesses Detected*: Missing hardware acceleration keywords, cluster scale ambiguity, generic summary lead.
     - *Actionable Suggestions*: Token throughput benchmarks, links to public GitHub/Hugging Face model cards, specific testbed environments.
   - **Make New Resume Using AI**: Automatically pulls verified profile credentials (IIT Bombay background, top 1.1% algorithmic rank, PyTorch & FastAPI skills, completed freelance projects). Presents 5 personalization questions (Target Role, Industry, Key Achievement, Tone, and Verified Badges toggle), displays an AI blueprint overview, and provides a "Create Resume" button with live formatted preview and PDF/DOCX downloads.
   - **Upload a Resume**: Drag-and-drop file picker supporting PDF, DOCX, DOC from computer with "Upload & Scan with AI" action updating diagnostics.
2. **AI Skill Gap Analysis Studio**:
   - **Dual Input Modes**:
     - *Job ID Lookup*: Enter any ID (e.g. `JOB-MSFT-901`, `INT-MSFT-101`) to pull live requirements.
     - *Paste Raw Job Description (JD)*: Paste full JD text from LinkedIn, Indeed, etc.
   - **Gap Breakdown**: Matched skills pills (78% match) vs. missing/gap skills pills (*Triton, TensorRT, vLLM, K8s*).
   - **Actionable Next Steps & Recommendations for this Job**:
     - *Recommended Certifications*: NVIDIA DLI LLM Serving, AWS Certified Machine Learning Specialty.
     - *Curated Learning Courses*: Vector Databases & Agentic RAG, High-Throughput Inference with vLLM.
     - *Suggested Portfolio Project to Build*: "Triton & vLLM Streaming Gateway Container".
3. **Recommendations (Clean Text, No Emojis & Click-to-Modal)**:
   - Curated specifically for candidate's verified proficiencies (*PyTorch, Python, LLM Tuning, FastAPI, Computer Vision*):
     - **Freelance Projects (3)**: Fine-tune Llama 3 ($1,400), Multi-Modal OCR ($1,800), Next.js SaaS Analytics ($2,200). Clicking any card opens the full project scope and deliverables modal with AI fit analysis.
     - **Internships (3)**: Microsoft AI Research Intern (₹80k/mo), Google SWE Intern (₹1,10k/mo), AWS Cloud Intern (₹75k/mo). Clicking card opens full internship modal.
     - **Jobs (3)**: Microsoft Applied AI Engineer (₹24 - ₹36 LPA), Razorpay ML Engineer (₹20 - ₹28 LPA), Google Deep Learning Engineer (₹30 - ₹45 LPA). Clicking card opens full job modal.
4. **Future Market Scope & Predictions (Real-Life News & Citations)**:
   - **Growth Velocity Forecast with Real-World Evidence**:
     - *Autonomous Agentic Swarms & Tool Calling*: +186% demand surge | ₹24 - ₹38 LPA ($175k - $210k). *Citation: Bloomberg Tech & Gartner 2026 Emerging Tech Report*.
     - *Edge AI & Small Language Models (SLMs)*: +142% demand surge | ₹20 - ₹34 LPA ($160k - $190k). *Citation: Reuters & Apple Silicon Briefing*.
     - *AI Safety, Alignment & Red-Teaming*: +110% demand surge | ₹18 - ₹32 LPA ($155k - $185k). *Citation: Financial Times & Stanford AI Index (EU AI Act penalties)*.
     - *High-Throughput Inference Engineering*: +168% demand surge | ₹26 - ₹40 LPA ($180k - $220k). *Citation: SemiAnalysis & NVIDIA GTC Keynote*.
   - **Market Demand Radar**: Accelerating skills vs. commoditizing/declining skills warning (manual scrapers, basic non-AI CRUD).
   - **Strategic Career Upskilling Advice**: Actionable advice to build an edge model with Triton.

### Tab 2: Tests & Skill Verification
- **Test Categories**:
  - Portal Assessment Tests, Company Assessments (*Microsoft AI Screening*), College Assessments, Domain-wise Tests, Aptitude & Quantitative Tests, Technical Coding Tests.
- **Gamification & Daily Quests**:
  - Daily challenge with streak tracker (🔥 8-day streak, Level 4 Scholar) and test proctoring launcher.

### Tab 3: Freelance Marketplace
- **Project Directory & Filters**:
  - Filter by Skill tag, Budget range, and Duration.
- **AI Proposal Generator**:
  - Instant tailored cover letters highlighting verified benchmarks.
- **Earnings & Reputation Dashboard**:
  - Total Earned ($3,450), Completed Projects (14), Active Gigs (2), Client Rating (4.9 ★).

### Tab 4: Internships (with Unique IDs)
- **Listing Engine**:
  - Every internship displays a unique ID badge (e.g., `INT-MSFT-101`, `INT-GOOG-102`, `INT-AMZN-103`, `INT-IISC-104`) with a **"Copy ID"** button.
- **Interactive Post Detail & Deep AI Gap Analysis**:
  - Clicking any card opens a comprehensive modal with:
    - Full post description & responsibilities
    - Required skills and compensation
    - **"✨ Run AI Skill & Test Analysis"**: Compares applicant's skills with required tags, compares candidate's test score (92/100) against company test cutoff (80/100), and provides actionable AI suggestions & interview tips!

### Tab 5: Jobs Hub (with Unique IDs)
- **Classifications**: Full-time, Remote, Startup, Government/PSU, and Academic faculty positions.
- **Unique IDs & Deep AI Analysis**:
  - Posts with IDs like `JOB-MSFT-901` (Microsoft Applied AI Engineer), `JOB-RZP-402` (Razorpay ML Engineer), `JOB-GOOG-301` (Google Deep Learning Engineer), `JOB-IITB-501` (IIT Bombay Assistant Professor).
  - Side-by-side Required Skills comparison and instant modal with AI interview tips.

### Tab 6: Organisations Directory (Companies for Students & Colleges for Academicians)
- **Tailored Filtering**:
  - When viewed as a **Student / Job Seeker**, directory prioritizes **Companies & Enterprises** hiring students and interns (Microsoft, Google, Razorpay, Nvidia).
  - When viewed as an **Academician**, directory prioritizes **Colleges & Academic Institutions** hiring faculty, researchers, and fellows (IIT Bombay, IISc Bangalore, Stanford University, BITS Pilani).
  - Quick filter buttons: `All`, `Companies (Students)`, `Colleges (Academicians)`.
- **Deep Organization / College Profile**:
  - Clicking any card opens a rich modal: About & mission, Hiring focus, Culture & values, Recruitment process walkthrough, Office / Campus locations, and active openings count.

### Tab 7: Comprehensive Profile
1. **Header**:
   - Avatar, Name, Title, Verified talent tier ("Top 1% Talent").
   - **Social Links**: GitHub, LinkedIn, Portfolio (`arjun.dev`), Twitter/X.
   - **Current Resume Card**: File name, 92% ATS score, Download PDF button, and Update button.
2. **Active Days Graph (GitHub / LeetCode style)**:
   - 52-week activity heatmap with colored intensity cells (`heat-0` to `heat-4`).
   - Active metrics: 184 active coding days, 🔥 Current Streak: 8 Days, Longest: 24 Days.
3. **Domain Test Scores & Global Rankings**:
   - *Artificial Intelligence & ML*: Score **94/100**, Global Rank: **#142 / 12,400** (Top 1.1%)
   - *Data Structures & Algorithms*: Score **92/100**, Global Rank: **#185 / 15,600** (Top 1.2%)
   - *Quantitative Aptitude & Logic*: Score **88/100**, Global Rank: **#310 / 18,200** (Top 1.7%)
   - *Technical Communication & Soft Skills*: Score **86/100**, Global Rank: **#420 / 9,800** (Top 4.2%)
4. **Skills Breakdown**:
   - Domain-Specific Skills vs. Common Transferable Skills.
5. **Honors & Badges Earned**:
   - 🔥 8-Day Streak Master, 🏆 Top 5% Coder, 🌟 Verified PyTorch Pro, 📜 ATS Champion, 💡 Top Rated Freelancer.
6. **Completed Freelanced Projects**:
   - Project titles, client names, earnings, client ratings, and review quotes.
7. **Education & Experience**:
   - B.Tech CSE, IIT Bombay (CGPA: 8.9/10), ML Research Intern @ AI Labs.

### Tab 8: Dedicated Settings & Bookmarks Hub
1. **Saved Bookmarks**:
   - Saved Jobs (Applied AI Engineer, ML Engineer) with 1-click Apply and Remove.
   - Saved Internships (Microsoft GenAI, Google SWE) with deadline tracking.
   - Saved Freelance Projects (Fine-tune Llama 3) with AI Proposal trigger.
2. **Security Features**:
   - Change Password interface with validation.
   - Two-Factor Authentication (2FA) toggle.
   - Active Login Sessions list (Chrome on macOS, Safari on iPhone) with "Log Out All Others" action.
3. **Privacy & Recruiter Visibility**:
   - Profile visibility toggle (Public to verified employers vs Anonymous mode).
   - Mask Phone & Email until interview confirmation.
   - AI Resume improvement permissions.

---

## 3. Organisation Portal (7 Core Tabs & Analytics)
- **Dashboard**: Recruiter KPIs (Openings, Applicants, Tests active, Offers). Visual 5-stage recruitment funnel.
- **Profile (Public Brand Page)**: Brand info, recruitment locations, target domains.
- **Opportunities & In-Depth Analytics (8-Step Drill-Down into "AI Intern")**:
  1. *Overview*
  2. *Applicant Statistics* (Total 142, New 24, Under Review 48, Shortlisted 32, Rejected 30, Selected 8)
  3. *Resume Screening* with AI match scores
  4. *Recruitment Pipeline* (5 rounds with assigned, completed, qualified, eliminated)
  5. *Assessment Integration* (Avg score 79.4%, Pass rate 68%)
  6. *Candidate Progress Matrix* (Arjun, Priya, Rahul)
  7. *Reports & Charts*
  8. *Batch Actions* (Broadcast, Extend, Export)
- **Applicants**: Searchable master table and applicant drawer with private recruiter notes.
- **Assessments Studio**: Library of active/draft tests, creation wizard, anti-cheat controls.
- **Messages & Communication**: Split-pane inbox, chat window, quick-action templates, broadcast modal.
- **Settings**: Account info, Team management (Admin, Recruiter, HR), verification badge, security.
