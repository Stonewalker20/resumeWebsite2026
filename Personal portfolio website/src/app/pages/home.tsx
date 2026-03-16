import { Link } from "react-router";
import { ArrowRight, BookOpen, Download, Github, Layers, Linkedin, Mail, ShieldCheck, Terminal, Waves } from "lucide-react";
import { portfolio } from "../content/portfolio";
import { pagePaths } from "../page-paths";

export function Home() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 lg:col-span-8 row-span-2 relative clip-corner-all glass-dark border border-primary/20 p-8 md:p-12 overflow-hidden corner-accent">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
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
              <a href={portfolio.contactPath} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {portfolio.email}
              </a>
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
              <a
                href={portfolio.contactPath}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 clip-corner-tr hover:opacity-90 transition-all font-mono tracking-wider glow-edge group"
              >
                <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                CONTACT.ME
              </a>
              <Link
                to={pagePaths.projects}
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
                className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-tl hover:border-primary/50 transition-all font-mono tracking-wider"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD.RESUME
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-br hover:border-primary/50 transition-all font-mono tracking-wider"
              >
                <Github className="w-4 h-4" />
                GITHUB.REPOS
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-br hover:border-primary/50 transition-all font-mono tracking-wider"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
              <div className="text-3xl font-mono text-secondary mb-1">{portfolio.commitCount}</div>
              <div className="text-xs text-muted-foreground font-mono">COMMITS</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-primary mb-1">{portfolio.contributionCount}</div>
              <div className="text-xs text-muted-foreground font-mono">1Y CONTRIBS</div>
            </div>
          </div>
          <div className="mt-4 glass border border-border clip-corner-tl p-3 font-mono text-xs text-muted-foreground">
            Current portfolio content reflects active GitHub work, current resume details, research projects, and overall GitHub activity.
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
              Fast contact, LinkedIn, resume PDF, and a direct view into current AI and ML work.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={portfolio.contactPath}
                className="inline-flex items-center gap-2 bg-background text-primary px-5 py-2.5 clip-corner-tl hover:opacity-90 transition-opacity font-mono text-sm tracking-wider"
              >
                <Mail className="w-4 h-4" />
                EMAIL
              </a>
              <a
                href={portfolio.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-dark border border-background/30 px-5 py-2.5 clip-corner-br hover:bg-background/10 transition-colors font-mono text-sm tracking-wider text-background"
              >
                <Download className="w-4 h-4" />
                RESUME
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-dark border border-background/30 px-5 py-2.5 clip-corner-br hover:bg-background/10 transition-colors font-mono text-sm tracking-wider text-background"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
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
            <span>GITHUB.REPOS: {portfolio.githubProjects.length}</span>
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
