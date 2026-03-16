import { ExternalLink, FileText, Github, ShieldCheck, Terminal } from "lucide-react";
import { portfolio } from "../content/portfolio";

export function Projects() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="inline-block glass border border-primary/30 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-primary mb-4">
          PROJECT.ARCHIVE
        </div>
        <h1 className="text-4xl md:text-6xl mb-4 font-mono tracking-tight">
          FEATURED <span className="text-primary">WORK</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-mono">
          Featured repo case studies, a full GitHub project index, and research reports that show how the work evolved.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 lg:col-span-8 row-span-2 glass-dark border border-primary/20 clip-corner-all overflow-hidden group relative">
          <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 flex items-center justify-center">
            <Terminal className="w-24 h-24 text-primary/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
          </div>
          <div className="p-8 relative">
            <div className="circuit-pattern absolute inset-0 opacity-30"></div>
            <div className="relative z-10">
              <div className="inline-block glass border border-primary/30 px-3 py-1 clip-corner-br text-xs mb-3 font-mono text-primary">
                PRIMARY.PROJECT
              </div>
              <h2 className="text-2xl md:text-3xl mb-3 font-mono tracking-wider">{portfolio.caseStudies[0].title}</h2>
              <p className="text-muted-foreground mb-4 font-mono text-sm">{portfolio.caseStudies[0].summary}</p>
              <p className="text-muted-foreground mb-4 font-mono text-sm">{portfolio.caseStudies[0].details}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {portfolio.caseStudies[0].tools.map((tag) => (
                  <span key={tag} className="glass border border-border px-3 py-1 clip-corner-tl text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="glass border border-border clip-corner-tl p-4 text-sm text-muted-foreground font-mono mb-6">
                {portfolio.caseStudies[0].whyItMatters}
              </div>
              <a
                href={portfolio.caseStudies[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-mono"
              >
                <FileText className="w-4 h-4" />
                {portfolio.caseStudies[0].linkLabel.toUpperCase()}
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          {portfolio.caseStudies.slice(1).map((project, index) => (
            <div
              key={project.title}
              className={`glass border border-border overflow-hidden group relative ${
                index === 0 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-secondary/15 via-transparent to-primary/15 flex items-center justify-center">
                <ShieldCheck className="w-16 h-16 text-secondary/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 font-mono tracking-wider">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-mono text-xs leading-relaxed">{project.summary}</p>
                <p className="text-sm text-muted-foreground mb-3 font-mono text-xs leading-relaxed">{project.whyItMatters}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tools.map((tag) => (
                    <span key={tag} className="glass border border-border px-2 py-0.5 clip-corner-tl text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-primary/80 transition-colors font-mono flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  {project.linkLabel.toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl mb-6 font-mono tracking-wider">
          ALL.GITHUB <span className="text-primary">REPOS</span>
        </h2>
        <div className="grid grid-cols-12 gap-4">
          {portfolio.githubProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`col-span-12 md:col-span-6 xl:col-span-4 glass border border-border overflow-hidden group relative ${
                index % 3 === 0 ? "clip-corner-tl" : index % 3 === 1 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="p-6 relative">
                <div className="grid-pattern absolute inset-0 opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-mono text-xs text-primary mb-1 tracking-wider">REPOSITORY</div>
                      <h3 className="font-mono tracking-wider break-words">{project.name}</h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 font-mono text-xs leading-relaxed">{project.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-4 font-mono text-xs leading-relaxed">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="glass-dark border border-border px-2.5 py-1 clip-corner-tl text-xs font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl mb-6 font-mono tracking-wider">
          RESEARCH <span className="text-primary">REPORTS</span>
        </h2>
        <div className="grid grid-cols-12 gap-4">
          {portfolio.researchReports.map((report, index) => (
            <a
              key={report.title}
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                index === 0 ? "col-span-12 md:col-span-7" : index === 1 ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-6"
              } glass-dark border border-border overflow-hidden group relative ${
                index % 3 === 0 ? "clip-corner-tl" : index % 3 === 1 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 flex items-center justify-center">
                <FileText className="w-16 h-16 text-primary/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                <div className="scan-lines absolute inset-0"></div>
              </div>
              <div className="p-6 relative">
                <div className="grid-pattern absolute inset-0 opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-mono tracking-wider">{report.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground">PDF</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 font-mono text-xs">{report.body}</p>
                  <span className="text-xs text-primary font-mono flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    OPEN.REPORT
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 clip-corner-all bg-gradient-to-br from-primary via-secondary to-primary p-8 relative overflow-hidden">
          <div className="mesh-gradient absolute inset-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-4 font-mono tracking-wider text-background">ENGINEERING.MINDSET</h2>
            <p className="text-background/90 mb-6 font-mono text-sm max-w-xl">
              These projects focus on what broke, why it broke, and how the system became more reliable.
            </p>
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-primary px-6 py-3 clip-corner-tl hover:opacity-90 transition-opacity font-mono tracking-wider"
            >
              <Github className="w-4 h-4" />
              VIEW.GITHUB
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 glass-dark border border-border clip-corner-br p-6 flex flex-col justify-center">
          <div className="font-mono text-xs text-primary mb-4 tracking-wider">AT.A.GLANCE</div>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-mono text-primary mb-1">{portfolio.caseStudies.length}</div>
              <div className="text-xs text-muted-foreground font-mono">Featured repos</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-secondary mb-1">{portfolio.githubProjects.length}</div>
              <div className="text-xs text-muted-foreground font-mono">GitHub repos</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-primary mb-1">{portfolio.researchReports.length}</div>
              <div className="text-xs text-muted-foreground font-mono">Research reports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
