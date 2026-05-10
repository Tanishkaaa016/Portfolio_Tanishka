import { useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin, MapPin, Sparkles, GraduationCap, Microscope, Cpu, FileText, Award, Mic, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlobCursor from "@/components/portfolio/BlobCursor";
import Reveal from "@/components/portfolio/Reveal";
import Typewriter from "@/components/portfolio/Typewriter";
import useActiveSection from "@/components/portfolio/useActiveSection";

const projects = [
  {
    name: "Geneatlas",
    tag: "Bioinformatics",
    blurb: "Pan-cancer RNA-Seq classifier with self-attention + SHAP biomarker discovery.",
    href: "https://github.com/Tanishkaaa016/Geneatlas",
    chips: ["Python", "Self-Attention", "SHAP"],
    details: [
      "Classifies tumour samples across cancer types from bulk RNA-Seq data.",
      "Self-attention highlights the genes driving each prediction.",
      "SHAP surfaces a shortlist of candidate biomarkers per class.",
    ],
    highlights: ["Multi-class tumour classification", "Attention over gene expression", "Interpretable biomarker shortlist"],
  },
  {
    name: "Medpath",
    tag: "Clinical ML",
    blurb: "Symptom-to-diagnosis triage app powered by an ANN model and Flask.",
    href: "https://github.com/Tanishkaaa016/Medpath",
    chips: ["Flask", "ANN"],
    details: [
      "ANN trained on symptom–diagnosis data to suggest likely conditions.",
      "Served via a simple Flask form for non-technical users.",
      "A small prototype for explainable clinical decision support.",
    ],
    highlights: ["End-to-end ML app", "Symptom-driven inference", "Friendly triage UI"],
  },
  {
    name: "EEG Seizure Detection",
    tag: "Signals",
    blurb: "Random Forest baseline → XGBoost on segmented EEG features.",
    href: "https://github.com/Tanishkaaa016/EEG-Seizure-ML-Baseline-and-Improvement",
    chips: ["XGBoost", "EEG"],
    details: [
      "Windowed EEG signals and extracted time/frequency features.",
      "Improved on a Random Forest baseline with tuned XGBoost.",
      "Evaluated on recall to minimise missed seizure events.",
    ],
    highlights: ["Feature-engineered EEG", "Baseline → boosted model", "Recall-aware evaluation"],
  },
  {
    name: "ECG Filtering",
    tag: "Biomedical",
    blurb: "Cardiac signal cleanup with low/high-pass filters in MATLAB.",
    href: "https://github.com/Tanishkaaa016/ECG-Signal-Filtering-Analysis",
    chips: ["MATLAB", "DSP"],
    details: [
      "MATLAB filters strip baseline wander and muscle noise from ECG.",
      "Compared raw vs. filtered signals and frequency responses.",
      "Cleaner R-peaks ready for heart-rate / arrhythmia analysis.",
    ],
    highlights: ["Baseline-wander removal", "Frequency-response analysis", "Cleaner R-peaks"],
  },
  {
    name: "Iris ANN — Web",
    tag: "Deployment",
    blurb: "End-to-end MLP classifier deployed via a tidy Flask interface.",
    href: "https://github.com/Tanishkaaa016/Iris-ANN-classifier",
    chips: ["Flask", "MLP"],
    details: [
      "Small MLP trained on the classic Iris dataset.",
      "Flask form predicts species from four measurements.",
      "A tidy walk through the full ML lifecycle.",
    ],
    highlights: ["Full ML lifecycle", "Live web inference", "Minimal, focused UI"],
  },
];

const experience = [
  {
    date: "Oct 2025 — Present",
    role: "R&D Associate Head",
    org: "Placfv's, SRMIST Placement Team",
    note: "Industry research, recruiter outreach, hiring strategy support.",
    details: [
      "Map hiring trends across biotech and healthtech verticals.",
      "Coordinate recruiter outreach and placement leads.",
      "Support seniors on overall hiring strategy.",
    ],
  },
  {
    date: "Jan 2025 — Present",
    role: "Content Member",
    org: "Team SRM Hackathon",
    note: "Emcee for SRM Hackathon 2025; scripts, sponsor outreach, comms.",
    details: [
      "Hosted SRM Hackathon 2025 across opening, judging and closing.",
      "Planned run-of-show and speaker introductions.",
      "Handled sponsor outreach and post-event communications.",
    ],
  },
  {
    date: "Jan 2025 — Oct 2025",
    role: "Trainee Lead",
    org: "Directorate of Alumni Affairs, SRMIST",
    note: "Publicity, content, hosting and logistics for alumni events.",
    details: [
      "Ran alumni meet-ups end-to-end: publicity, hosting, logistics.",
      "Created outreach content — invites, recaps, speaker spotlights.",
      "Bridged student volunteers and the directorate during events.",
    ],
  },
  {
    date: "Jan — Mar 2025",
    role: "Intern",
    org: "Agnirva",
    note: "Technical research and structured project execution.",
    details: [
      "Researched assigned topics and documented structured findings.",
      "Worked to milestone-based deadlines and weekly check-ins.",
      "Saw how a small team scopes and ships research.",
    ],
  },
  {
    date: "Apr — May 2024",
    role: "Content Writing Intern",
    org: "Kshitiksha Foundation",
    note: "Donation-appeal writing for a social-impact initiative.",
    details: [
      "Drafted donation appeals for a grassroots foundation.",
      "Adapted messaging for different donor segments.",
      "Saw concise messaging translate into funds raised.",
    ],
  },
];

const Index = () => {
  const [activeProj, setActiveProj] = useState(0);
  const navItems: [string, string][] = [
    ["Work", "work"],
    ["About", "about"],
    
    ["Experience", "experience"],
    ["Education", "education"],
    ["Press", "press"],
    ["Contact", "contact"],
  ];
  const active = useActiveSection(["top", ...navItems.map(([, id]) => id)]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlobCursor />

      {/* Decorative blush blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full opacity-60 float-slower" style={{ background: "radial-gradient(circle, hsl(var(--blush)) 0%, transparent 65%)" }} />
        <div className="absolute top-[60%] -left-40 h-[36rem] w-[36rem] rounded-full opacity-70 float-slow" style={{ background: "radial-gradient(circle, hsl(var(--rose-soft) / 0.35) 0%, transparent 65%)" }} />
        <div className="absolute top-[30%] left-[55%] h-[20rem] w-[20rem] rounded-full opacity-40 float-slow" style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 65%)" }} />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-tight">
            Tanishka <span className="italic text-primary">Bajpai</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {navItems.map(([label, id]) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative transition-colors ${isActive ? "text-foreground" : "hover:text-foreground"}`}
                  >
                    {label}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            <a href="#contact">Say hi <ArrowUpRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <Reveal>
          <Badge variant="secondary" className="rounded-full bg-accent/70 text-accent-foreground hover:bg-accent border-0 mb-8 gap-1.5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" /> Open to research roles & internships
          </Badge>
        </Reveal>

        <Reveal delay={60}>
          <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-4">
            Hi, I'm Tanishka — a&nbsp;
            <Typewriter
              className="text-primary italic"
              words={["biomedical student.", "ML tinkerer.", "signal nerd.", "emcee.", "writer.", "quiet over-thinker."]}
            />
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            Building <em className="text-primary font-normal">gentle</em> tools
            <br />
            for <span className="squiggle">hard medicine.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 grid md:grid-cols-3 gap-8 items-end">
            <p className="md:col-span-2 text-base leading-relaxed text-muted-foreground max-w-xl">
              Second-year Biomedical Engineering @ SRMIST (Machine Intelligence). I mostly tinker with code and biomed projects, host events on the side, and write when something's worth saying.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#work">See my work</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-foreground/20" asChild>
                <a href="#contact"><Mail className="mr-2 h-4 w-4" /> Get in touch</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-foreground/20" asChild>
                <a href="/Tanishka-Bajpai-CV.pdf" target="_blank" rel="noreferrer" download><Download className="mr-2 h-4 w-4" /> Download CV</a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              ["9.0", "Current CGPA"],
              ["5+", "Biomed projects shipped"],
              ["3", "Internships & leadership roles"],
              ["2028", "B.Tech, expected"],
            ].map(([n, l]) => (
              <div key={l} className="bg-card p-6 transition-colors hover:bg-accent/30">
                <div className="font-display text-3xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

      </section>

      {/* MARQUEE */}
      <section aria-hidden className="border-y border-border bg-paper-2/60 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-5 text-sm text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              {["Biomedical Engineering", "Machine Intelligence", "Signal Processing", "Bioinformatics", "Clinical ML", "Medical Devices", "Python", "MATLAB"].map((w) => (
                <span key={w} className="flex items-center gap-10">
                  <span className="font-display italic">{w}</span>
                  <Sparkles className="h-3.5 w-3.5 text-rose" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ Selected work</div>
              <h2 className="font-display text-4xl md:text-5xl">Things I've built recently.</h2>
            </div>
            <a href="https://github.com/Tanishkaaa016" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
              All on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)]">
            <ul className="md:col-span-2 divide-y divide-border">
              {projects.map((p, i) => (
                <li key={p.name}>
                  <button
                    onClick={() => setActiveProj(i)}
                    onMouseEnter={() => setActiveProj(i)}
                    data-cursor="hover"
                    className={`w-full text-left px-6 py-5 transition-colors ${activeProj === i ? "bg-accent/50" : "hover:bg-secondary/60"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg">{p.name}</span>
                      <ChevronRight className={`h-4 w-4 transition-transform ${activeProj === i ? "translate-x-1 text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="md:col-span-3 p-8 md:p-10 bg-gradient-to-br from-paper to-paper-2 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{projects[activeProj].tag}</div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">{projects[activeProj].name}</h3>
                <p className="text-foreground/80 max-w-xl leading-relaxed font-medium">{projects[activeProj].blurb}</p>

                <div className="mt-5 space-y-3 max-w-xl">
                  {projects[activeProj].details.map((d, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{d}</span>
                    </p>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Highlights</div>
                  <ul className="flex flex-wrap gap-2">
                    {projects[activeProj].highlights.map((h) => (
                      <li key={h} className="text-xs px-2.5 py-1 rounded-full bg-accent/60 text-accent-foreground border border-border/60">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {projects[activeProj].chips.map((c) => (
                    <span key={c} className="chip-soft">{c}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  <a href={projects[activeProj].href} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight className="ml-1 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ About</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A second-year <em className="text-primary">biomed</em> student who likes to <em className="text-primary">build, host & write.</em>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7" delay={100}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>I'm a second-year B.Tech Biomedical Engineering student at SRMIST, specialising in Machine Intelligence. Mostly I'm learning by doing — small ML projects, a bit of signal processing, and some biology when it helps.</p>
              <p>Outside of class, I host events as an emcee and write across different formats. I like projects that mix tech with people.</p>
            </div>

            <Tabs defaultValue="focus" className="mt-8">
              <TabsList className="bg-secondary rounded-full p-1">
                <TabsTrigger value="focus" className="rounded-full data-[state=active]:bg-background">Focus</TabsTrigger>
                <TabsTrigger value="stack" className="rounded-full data-[state=active]:bg-background">Stack</TabsTrigger>
                <TabsTrigger value="soft" className="rounded-full data-[state=active]:bg-background">Beyond code</TabsTrigger>
              </TabsList>
              <TabsContent value="focus" className="pt-5 flex flex-wrap gap-2">
                {["Machine Intelligence","Signal Processing","Clinical ML","Bioinformatics","Biosignals","Medical Devices","Biomarker Discovery","Cancer Transcriptomics"].map(s => <span key={s} className="chip-soft">{s}</span>)}
              </TabsContent>
              <TabsContent value="stack" className="pt-5 flex flex-wrap gap-2">
                {["Python","MATLAB","Flask","PyTorch","XGBoost","SHAP","AutoCAD","PCB design"].map(s => <span key={s} className="chip-soft">{s}</span>)}
              </TabsContent>
              <TabsContent value="soft" className="pt-5 flex flex-wrap gap-2">
                {["Hosting & emceeing","Writing","Event ops","Reading papers","Hindi","English","French"].map(s => <span key={s} className="chip-soft">{s}</span>)}
              </TabsContent>
            </Tabs>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="card-paper flex items-start gap-3 tilt">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-medium">B.Tech BME (MI)</div>
                  <div className="text-xs text-muted-foreground">SRMIST Chennai · 2024–2028 · CGPA 9.0</div>
                </div>
              </div>
              <div className="card-paper flex items-start gap-3 tilt">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Bengaluru / Chennai</div>
                  <div className="text-xs text-muted-foreground">Open to remote & relocation</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CURRENTLY — interactive mood + this-or-that */}
      <section id="now" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-soft)]">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ Now</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  What I'm <em className="text-primary">learning</em> right now.
                </h2>
                <p className="mt-5 text-muted-foreground max-w-md">
                  Second-year focus — building the toolkit I'll need for biomedical research and healthtech roles.
                </p>
              </div>
              <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Deep learning for medical imaging", sub: "CNNs on X-ray / MRI datasets, segmentation basics." },
                  { title: "Biosignal pipelines", sub: "EEG & ECG preprocessing, feature extraction, classification." },
                  { title: "Bioinformatics workflows", sub: "RNA-Seq analysis, expression matrices, interpretability with SHAP." },
                  { title: "Medical device fundamentals", sub: "PCB design, sensor interfacing, regulatory awareness (ISO 13485 / FDA basics)." },
                ].map((c) => (
                  <div key={c.title} className="card-paper tilt">
                    <div className="font-display text-base leading-snug">{c.title}</div>
                    <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {[
                { k: "Research interests", v: "Computational oncology, biosignal ML, clinical decision support, medical imaging." },
                { k: "Looking for", v: "Summer 2026 research internships, biomed/healthtech R&D roles, lab assistantships." },
                { k: "Strengths", v: "Self-directed learner, clean documentation, comfortable across code, hardware and people." },
              ].map((b) => (
                <div key={b.k} className="rounded-2xl border border-border bg-background/60 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2">{b.k}</div>
                  <div className="text-sm text-foreground/80 leading-relaxed">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE — accordion */}
      <section id="experience" className="bg-paper-2/50 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-10 mb-10">
              <div className="md:col-span-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ Experience</div>
                <h2 className="font-display text-4xl md:text-5xl">Where I've worked & helped out.</h2>
              </div>
              <p className="md:col-span-7 text-muted-foreground self-end">
                A short, honest list — mostly ops and research-adjacent roles. Tap to expand.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible defaultValue="item-0" className="rounded-2xl border border-border bg-card overflow-hidden">
              {experience.map((e, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-0 px-6">
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="flex flex-1 items-center justify-between gap-4 pr-4">
                      <div className="text-left">
                        <div className="font-display text-lg">{e.role}</div>
                        <div className="text-xs text-muted-foreground">{e.org}</div>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-primary whitespace-nowrap">{e.date}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-foreground/80 mb-3 leading-relaxed">{e.note}</p>
                    <ul className="space-y-2">
                      {e.details.map((d, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ Education</div>
              <h2 className="font-display text-4xl md:text-5xl">Where I've studied.</h2>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "B.Tech — Biomedical Engineering (MI)", school: "SRM Institute of Science & Technology", date: "2024 — 2028 (expected)", score: "CGPA 9.0" },
            { title: "Class XII — PCB + IP", school: "Vydehi School of Excellence", date: "May 2023", score: "86.8%" },
            { title: "Class X — Science", school: "Vydehi School of Excellence", date: "May 2021", score: "93%" },
          ].map((e) => (
            <Reveal key={e.title}>
              <div className="card-paper h-full transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] tilt">
                <div className="h-10 w-10 rounded-full bg-accent/70 flex items-center justify-center mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-lg leading-snug">{e.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{e.date}</span>
                  <span className="chip-soft">{e.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRESS / RECOGNITION */}
      <section id="press" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ Accomplishments</div>
          <h2 className="font-display text-4xl md:text-5xl mb-10">Small wins, kept close.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Award, title: "2nd Runner-Up", sub: "PCB Design & Fabrication — TekMedica, SRMIST" },
            { icon: Award, title: "Zonal Rank Holder", sub: "International English Olympiad" },
            { icon: FileText, title: "Published — Anthology", sub: "Literary publication, 2021" },
            { icon: Mic, title: "Emcee — SRM Hackathon 2025", sub: "Hosted SRMIST flagship event" },
            { icon: Sparkles, title: "MUN Organiser", sub: "Inter & intra-school conferences" },
          ].map(({ icon: Icon, title, sub }) => (
            <Reveal key={title}>
              <div className="card-paper h-full transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] tilt">
                <div className="h-10 w-10 rounded-full bg-accent/70 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-lg leading-snug">{title}</div>
                <div className="text-sm text-muted-foreground mt-1">{sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 mt-20">/ Certifications</div>
          <h2 className="font-display text-4xl md:text-5xl mb-10">Coursework, certified.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Microscope, title: "MATLAB Onramp", sub: "MathWorks · Jun 2025" },
            { icon: Cpu, title: "BIO101", sub: "Molecular & Cellular Biology · Saylor Academy" },
          ].map(({ icon: Icon, title, sub }) => (
            <Reveal key={title}>
              <div className="card-paper h-full transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] tilt">
                <div className="h-10 w-10 rounded-full bg-accent/70 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-lg leading-snug">{title}</div>
                <div className="text-sm text-muted-foreground mt-1">{sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-14 shadow-[var(--shadow-soft)]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">/ Contact</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Got a biomed project or codebase to share? <em className="text-primary">Let's chat.</em>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                I read every email. Research collaborations, internships and biomed projects all welcome.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="mailto:tanishkabajpai2005@gmail.com"><Mail className="mr-2 h-4 w-4" /> Send an email</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-foreground/20" asChild>
                  <a href="https://github.com/Tanishkaaa016" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-foreground/20" asChild>
                  <a href="/Tanishka-Bajpai-CV.pdf" target="_blank" rel="noreferrer" download><Download className="mr-2 h-4 w-4" /> Download CV</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-3">
                {[
                  { icon: Mail, label: "Email", val: "tanishkabajpai2005@gmail.com", href: "mailto:tanishkabajpai2005@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", val: "/in/tanishka-bajpai", href: "https://linkedin.com" },
                  { icon: Github, label: "GitHub", val: "@Tanishkaaa016", href: "https://github.com/Tanishkaaa016" },
                  { icon: MapPin, label: "Based in", val: "Bengaluru / Chennai, India" },
                ].map(({ icon: Icon, label, val, href }) => {
                  const Inner = (
                    <>
                      <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
                        <span className="block text-sm">{val}</span>
                      </span>
                      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground" />}
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                           className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 px-5 py-4 hover:bg-accent/40 transition-colors">
                          {Inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 px-5 py-4">{Inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Tanishka Bajpai · Built with care.</span>
          <span className="font-display italic">Soft as paper · sharp as a scalpel.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
