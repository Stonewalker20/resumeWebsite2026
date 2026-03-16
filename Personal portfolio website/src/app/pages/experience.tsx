import { ArrowRight, Compass, Download, Gauge, Github, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router";
import { portfolio } from "../content/portfolio";
import { pagePaths } from "../page-paths";

export function Experience() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="inline-block glass border border-primary/30 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-primary mb-4">
          WORKING.STYLE
        </div>
        <h1 className="text-4xl md:text-6xl mb-4 font-mono tracking-tight">
          ENGINEERING <span className="text-primary">PROFILE</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-mono">
          Target roles, strengths, and the workflow behind how I build reliable AI and ML systems.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-12">
        <div className="col-span-12 lg:col-span-7 glass-dark border border-primary/20 p-8 relative overflow-hidden clip-corner-tr">
          <div className="circuit-pattern absolute inset-0 opacity-20"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass border border-primary/30 px-3 py-1 clip-corner-br text-xs mb-4 font-mono text-primary">
              <Target className="w-3.5 h-3.5" />
              TARGET.ROLES
            </div>
            <ul className="space-y-3">
              {portfolio.targetRoles.map((role) => (
                <li key={role} className="flex items-start gap-3 glass border border-border clip-corner-tl p-3">
                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                  <span className="text-sm font-mono">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 glass border border-border clip-corner-all p-8 relative overflow-hidden">
          <div className="scan-lines absolute inset-0"></div>
          <div className="relative z-10">
            <div className="font-mono text-xs text-primary mb-6 tracking-wider">WHAT.I.OPTIMIZE.FOR</div>
            <div className="space-y-4">
              {portfolio.valueProps.map((item) => (
                <div key={item.title}>
                  <div className="font-mono text-sm text-primary mb-1">{item.title.toUpperCase()}</div>
                  <p className="text-sm text-muted-foreground font-mono">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-12">
        <div className="col-span-12 lg:col-span-4 glass border border-border clip-corner-tl p-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary mb-4 tracking-wider">
            <Gauge className="w-3.5 h-3.5" />
            STRENGTHS
          </div>
          <ul className="space-y-3">
            {portfolio.strengths.map((strength) => (
              <li key={strength} className="glass-dark border border-border clip-corner-br p-3 text-sm font-mono">
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-8 glass-dark border border-secondary/20 clip-corner-br p-8 relative overflow-hidden">
          <div className="grid-pattern absolute inset-0 opacity-20"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-secondary mb-4 tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              OPERATING.STYLE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolio.operatingStyle.map((item, index) => (
                <div key={item} className="glass border border-border clip-corner-tl p-4">
                  <div className="text-xs font-mono text-muted-foreground mb-2">
                    STEP.{String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-sm font-mono">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 glass border border-border clip-corner-all p-8 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="font-mono text-xs text-primary mb-6 tracking-wider">RECENT.BUILD.TIMELINE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {portfolio.buildTimeline.map((item, index) => (
              <div
                key={`${item.period}-${item.title}`}
                className={`glass-dark border border-border p-5 relative ${
                  index % 2 === 0 ? "clip-corner-tl" : "clip-corner-br"
                }`}
              >
                <div className="text-xs text-secondary font-mono mb-2">{item.period}</div>
                <h3 className="font-mono tracking-wider mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 clip-corner-all bg-gradient-to-br from-primary via-secondary to-primary p-8 relative overflow-hidden">
          <div className="mesh-gradient absolute inset-0"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-background/80 font-mono text-xs tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              QUICK.READ
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 font-mono tracking-wider text-background">WHY THIS FITS</h2>
            <p className="text-background/90 mb-6 font-mono text-sm">
              I focus on the gap between "a demo that works once" and "a system that stays useful": product-aware workflows,
              measurable failure modes, and engineering paths that survive real constraints.
            </p>
            <div className="glass-dark border border-background/30 clip-corner-tl p-4 mb-6 text-background font-mono text-sm">
              {portfolio.seeking}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {portfolio.quickLinks.map((item) => (
                <div
                  key={item}
                  className="glass-dark border border-background/30 clip-corner-tl px-4 py-3 text-background font-mono text-xs tracking-wider text-center"
                >
                  {item.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-dark border border-border clip-corner-br p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="grid-pattern absolute inset-0 opacity-30"></div>
          <div className="relative z-10">
            <h3 className="text-2xl mb-4 font-mono tracking-wider">NEXT.STEP</h3>
            <p className="text-muted-foreground mb-6 font-mono text-sm">
              Open the full resume or jump into the case studies for the longer version.
            </p>
            <div className="space-y-3">
              <a
                href={portfolio.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 clip-corner-tl hover:opacity-90 transition-opacity font-mono tracking-wider w-full"
              >
                <Download className="w-4 h-4" />
                OPEN.RESUME
              </a>
              <Link
                to={pagePaths.projects}
                className="inline-flex items-center justify-center gap-2 glass border border-border px-6 py-3 clip-corner-tl hover:border-primary/40 transition-colors font-mono tracking-wider w-full"
              >
                <ArrowRight className="w-4 h-4" />
                VIEW.PROJECTS
              </Link>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 glass border border-border px-6 py-3 clip-corner-tl hover:border-primary/40 transition-colors font-mono tracking-wider w-full"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
