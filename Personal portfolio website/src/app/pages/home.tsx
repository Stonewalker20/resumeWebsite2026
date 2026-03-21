import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, BookOpen, CalendarDays, Download, Github, Layers, Linkedin, Mail, ShieldCheck, Terminal, Waves } from "lucide-react";
import { ContactLink } from "../components/contact-link";
import { portfolio } from "../content/portfolio";
import { trackAnalyticsEvent } from "../lib/analytics";
import { pagePaths } from "../page-paths";

const CONTRIBUTIONS_API_URL = "https://github-contributions-api.jogruber.de/v4/Stonewalker20?y=last";

type GithubContributionsResponse = {
  total?: Record<string, number>;
};

function LiveContributionCount() {
  const [count, setCount] = useState(portfolio.contributionCount);

  useEffect(() => {
    let cancelled = false;

    async function loadContributionCount() {
      try {
        const response = await fetch(CONTRIBUTIONS_API_URL, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as GithubContributionsResponse;
        const liveCount = data.total?.lastYear ?? Object.values(data.total ?? {})[0];

        if (!cancelled && typeof liveCount === "number" && Number.isFinite(liveCount)) {
          setCount(liveCount);
        }
      } catch {
        // Keep the verified fallback count when the live request fails.
      }
    }

    void loadContributionCount();

    return () => {
      cancelled = true;
    };
  }, []);

  return <>{count}</>;
}

export function Home() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-6 clip-corner-tl border border-primary/30 bg-gradient-to-r from-primary/14 via-secondary/16 to-primary/10 px-4 py-3 relative overflow-hidden">
        <div className="mesh-gradient absolute inset-0 opacity-60"></div>
        <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-xs tracking-wider text-muted-foreground">
            <span className="text-primary">QUICK.CHAT</span> Excited for what we may build together.
          </div>
          <a
            href={portfolio.schedulingPath}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAnalyticsEvent("Booking Click", { location: "home_top_banner" })}
            className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-2 clip-corner-tr text-primary-foreground hover:opacity-90 transition-opacity font-mono text-sm tracking-wider"
          >
            <CalendarDays className="h-4 w-4" />
            BOOK.15.MIN
          </a>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 lg:col-span-8 row-span-2 relative clip-corner-all glass-dark border border-primary/20 p-8 md:p-12 overflow-hidden corner-accent">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_320px] xl:items-start">
              <div>
                <div className="inline-block mb-4">
                  <span className="glass border border-primary/30 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-primary">
                    SYSTEM.STATUS: AVAILABLE
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl mb-6 font-mono tracking-tight">
                  {portfolio.name.toUpperCase()}
                  <span className="block text-primary data-bars">ML.SYSTEMS</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl font-mono">{portfolio.heroHeadline}</p>
                <p className="text-sm text-muted-foreground mb-4 max-w-3xl font-mono">{portfolio.heroBody}</p>
                <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono text-muted-foreground">
                  <ContactLink href={portfolio.contactPath} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    {portfolio.email}
                  </ContactLink>
                  <a
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LINKEDIN
                  </a>
                </div>
                <div className="glass border border-primary/20 clip-corner-tl p-4 mb-8 max-w-3xl">
                  <div className="text-xs font-mono text-primary mb-2 tracking-wider">SEEKING.NOW</div>
                  <p className="text-sm text-muted-foreground font-mono">{portfolio.seeking}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <ContactLink
                    href={portfolio.contactPath}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 clip-corner-tr hover:opacity-90 transition-all font-mono tracking-wider glow-edge group"
                  >
                    <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    CONTACT.ME
                  </ContactLink>
                  <Link
                    to={pagePaths.projects}
                    onClick={() => trackAnalyticsEvent("Projects Click", { location: "home_hero" })}
                    className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-tr hover:border-primary/50 transition-all font-mono tracking-wider group"
                  >
                    <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    VIEW.PROJECTS
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={portfolio.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalyticsEvent("Resume Download", { location: "home_hero" })}
                    className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-tl hover:border-primary/50 transition-all font-mono tracking-wider"
                  >
                    <Download className="w-4 h-4" />
                    DOWNLOAD.RESUME
                  </a>
                  <a
                    href={portfolio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalyticsEvent("GitHub Click", { location: "home_hero" })}
                    className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-br hover:border-primary/50 transition-all font-mono tracking-wider"
                  >
                    <Github className="w-4 h-4" />
                    GITHUB.REPOS
                  </a>
                  <a
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalyticsEvent("LinkedIn Click", { location: "home_hero" })}
                    className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-br hover:border-primary/50 transition-all font-mono tracking-wider"
                  >
                    <Linkedin className="w-4 h-4" />
                    LINKEDIN
                  </a>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[320px] xl:mx-0">
                <div className="flex flex-col items-center xl:items-start">
                  <div className="rounded-full border border-primary/25 bg-gradient-to-br from-primary/12 via-transparent to-secondary/18 p-2 layered-depth">
                    <div className="h-32 w-32 overflow-hidden rounded-full border border-white/10 sm:h-36 sm:w-36">
                      <img
                        src={portfolio.headshotPath}
                        alt="Portrait of Cordell Stonecipher"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="mt-4 inline-flex glass border border-primary/30 px-3 py-1 clip-corner-tl text-[10px] font-mono tracking-[0.28em] text-primary">
                    ENGINEER.PORTRAIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:row-start-1 glass border border-border clip-corner-all p-6 relative overflow-hidden">
          <div className="scan-lines h-full">
            <div className="font-mono text-xs text-primary mb-4 tracking-wider">RECENT.STACK</div>
            <div className="space-y-3">
              {portfolio.recentStack.map((skill) => (
                <div key={skill.name} className="glass-dark border border-border clip-corner-tl p-3">
                  <div className="text-xs mb-1 font-mono text-primary">{skill.name.toUpperCase()}</div>
                  <div className="text-xs text-muted-foreground font-mono">{skill.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:row-start-2 glass-dark border border-secondary/20 clip-corner-br p-6 holographic">
          <div className="font-mono text-xs text-secondary mb-4 tracking-wider">SYSTEM.METRICS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-mono text-primary mb-1">{portfolio.caseStudies.length}</div>
              <div className="text-xs text-muted-foreground font-mono">FEATURED</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-secondary mb-1">{portfolio.githubProjects.length}</div>
              <div className="text-xs text-muted-foreground font-mono">REPOS</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-primary mb-1">{portfolio.researchReports.length}</div>
              <div className="text-xs text-muted-foreground font-mono">REPORTS</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-primary mb-1">
                <LiveContributionCount />
              </div>
              <div className="text-xs text-muted-foreground font-mono">CONTRIBS</div>
            </div>
          </div>
          <div className="mt-4 glass border border-border clip-corner-tl p-3 font-mono text-xs text-muted-foreground">
            A quick snapshot of the work, projects, and research that best reflect what I am building right now.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        {portfolio.proofPoints.map((item, index) => (
          <div
            key={item.label}
            className={`col-span-12 md:col-span-4 glass border border-border p-5 relative overflow-hidden ${
              index === 0 ? "clip-corner-tl" : index === 1 ? "clip-corner-tr" : "clip-corner-br"
            }`}
          >
            <div className="grid-pattern absolute inset-0 opacity-20"></div>
            <div className="relative z-10">
              <div className="text-xs font-mono text-primary mb-2 tracking-wider">{item.label.toUpperCase()}</div>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <div className="inline-block glass border border-primary/30 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-primary mb-4">
            WHAT.YOU.GET
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 font-mono tracking-tight">
            WHY <span className="text-primary">TEAMS REACH OUT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl font-mono">
            The strongest fit is usually a team that wants someone who can move between product needs, engineering detail, and ML reliability without losing the bigger picture.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {portfolio.valueProps.map((item, index) => (
            <div
              key={item.title}
              className={`col-span-12 md:col-span-4 glass-dark border border-border p-6 relative overflow-hidden ${
                index === 0 ? "clip-corner-tl" : index === 1 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="grid-pattern absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <div className="text-xs font-mono text-primary mb-3 tracking-wider">{item.title.toUpperCase()}</div>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
          <div>
            <div className="inline-block glass border border-primary/30 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-primary mb-4">
              FEATURED.SNAPSHOTS
            </div>
            <h2 className="text-3xl md:text-5xl mb-3 font-mono tracking-tight">
              PROOF OF <span className="text-primary">HOW I WORK</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl font-mono">
              A quick preview of the projects that best show how I build, evaluate, and deliver.
            </p>
          </div>
          <Link
            to={pagePaths.projects}
            onClick={() => trackAnalyticsEvent("Projects Click", { location: "home_featured_snapshots" })}
            className="inline-flex items-center gap-2 glass border border-border px-5 py-3 clip-corner-tl hover:border-primary/50 transition-colors font-mono text-sm tracking-wider"
          >
            VIEW.ALL.PROJECTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {portfolio.caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`col-span-12 md:col-span-4 glass border border-border p-6 relative overflow-hidden ${
                index === 0 ? "clip-corner-tl" : index === 1 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="circuit-pattern absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <div className="text-xs font-mono text-muted-foreground mb-2">{study.year}</div>
                <h3 className="text-xl font-mono tracking-wider mb-3">{study.title}</h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-3">{study.summary}</p>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-4">{study.whyItMatters}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="glass-dark border border-border px-3 py-1 clip-corner-tl text-xs font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <Link
          to={pagePaths.profile}
          className="col-span-12 md:col-span-5 glass border border-border clip-corner-all p-6 hover:border-primary/50 transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 clip-corner-tl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center mb-4 border border-primary/30">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-mono tracking-wider mb-2">PROFILE.LOG</h3>
            <p className="text-muted-foreground text-sm mb-4 font-mono">Target roles • strengths • operating style</p>
            <span className="inline-flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all font-mono">
              ACCESS <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        <Link
          to={pagePaths.projects}
          className="col-span-12 md:col-span-7 row-span-2 glass-dark border border-primary/20 clip-corner-br p-8 hover:border-primary/50 transition-all group relative overflow-hidden"
        >
          <div className="circuit-pattern absolute inset-0 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary clip-corner-all flex items-center justify-center mb-4 glow-edge">
                  <Terminal className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-2xl font-mono tracking-wider mb-2">PROJECT.ARCHIVE</h3>
                <p className="text-muted-foreground mb-4 font-mono text-sm">
                  Featured builds • all GitHub repos • older research reports
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolio.projectDomains.slice(0, 4).map((tech) => (
                    <span key={tech} className="glass border border-border px-3 py-1 clip-corner-tl text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all font-mono text-sm">
                  EXPLORE.ALL <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="w-full md:w-48 h-48 clip-corner-all border border-border bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 flex items-center justify-center">
                <Terminal className="w-16 h-16 text-primary/70" />
              </div>
            </div>
          </div>
        </Link>
        
        <Link
          to={pagePaths.resume}
          className="col-span-12 md:col-span-5 glass border border-border clip-corner-tl p-6 hover:border-secondary/50 transition-all group"
        >
          <div className="w-12 h-12 clip-corner-br bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center mb-4 border border-secondary/30">
            <BookOpen className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="font-mono tracking-wider mb-2">CREDENTIALS.DB</h3>
          <p className="text-muted-foreground text-sm mb-4 font-mono">Summary • current stack • applied skills</p>
          <span className="inline-flex items-center gap-2 text-secondary text-sm group-hover:gap-3 transition-all font-mono">
            QUERY <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <Link
          to={pagePaths.hobbies}
          className="col-span-12 md:col-span-6 diagonal-split glass-dark border border-border p-8 hover:border-primary/50 transition-all group relative overflow-hidden h-64"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-background/20 clip-corner-all flex items-center justify-center mb-4 border border-border/60">
              <Waves className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-mono tracking-wider mb-2">HOBBIES.LOG</h3>
            <p className="text-muted-foreground mb-4 font-mono text-sm">Cars • paddleboarding • PCBs • instruments</p>
            <span className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all font-mono text-sm">
              EXPLORE <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        <div className="col-span-12 md:col-span-6 clip-corner-all bg-gradient-to-br from-primary via-secondary to-primary/80 p-8 relative overflow-hidden h-64">
          <div className="mesh-gradient absolute inset-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-mono tracking-wider mb-4 text-background">QUICK.ACCESS</h2>
            <p className="text-background/80 mb-6 font-mono text-sm">
              Easy ways to get in touch, view my resume, and take a closer look at the AI and ML work I am most excited about.
            </p>
            <div className="flex flex-wrap gap-3">
              <ContactLink
                href={portfolio.contactPath}
                className="inline-flex items-center gap-2 bg-background text-primary px-5 py-2.5 clip-corner-tl hover:opacity-90 transition-opacity font-mono text-sm tracking-wider"
              >
                <Mail className="w-4 h-4" />
                EMAIL
              </ContactLink>
              <a
                href={portfolio.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent("Resume Download", { location: "home_quick_access" })}
                className="inline-flex items-center gap-2 glass-dark border border-background/30 px-5 py-2.5 clip-corner-br hover:bg-background/10 transition-colors font-mono text-sm tracking-wider text-background"
              >
                <Download className="w-4 h-4" />
                RESUME
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent("LinkedIn Click", { location: "home_quick_access" })}
                className="inline-flex items-center gap-2 glass-dark border border-background/30 px-5 py-2.5 clip-corner-br hover:bg-background/10 transition-colors font-mono text-sm tracking-wider text-background"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent("GitHub Click", { location: "home_quick_access" })}
                className="inline-flex items-center gap-2 glass-dark border border-background/30 px-5 py-2.5 clip-corner-br hover:bg-background/10 transition-colors font-mono text-sm tracking-wider text-background"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
              <Link
                to={pagePaths.resume}
                className="inline-flex items-center gap-2 glass-dark border border-background/30 px-5 py-2.5 clip-corner-br hover:bg-background/10 transition-colors font-mono text-sm tracking-wider text-background"
              >
                <Layers className="w-4 h-4" />
                PROFILE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="glass border border-border clip-corner-all p-4">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow"></div>
              STATUS: OPERATIONAL
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>FOCUS: {portfolio.focus.toUpperCase()}</span>
            <span className="text-primary">UPDATED: {portfolio.updated.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
