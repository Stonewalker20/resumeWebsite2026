import { ExternalLink, FileText, Github } from "lucide-react";
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
          <div className="overflow-hidden relative bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 p-5 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
            {portfolio.caseStudies[0].previewImages ? (
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.14fr_1fr] gap-3 items-start">
                <div className="overflow-hidden border border-border/70 clip-corner-tl bg-background/20 p-3 md:p-4">
                  <div className="aspect-[2046/1832] w-full bg-white/95 overflow-hidden border border-white/60 shadow-xl">
                    <img
                      src={portfolio.caseStudies[0].previewImages[0].src}
                      alt={portfolio.caseStudies[0].previewImages[0].alt}
                      className="w-full h-full object-cover object-center bg-white scale-[1.08] md:scale-[1.12] transform-gpu"
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  {portfolio.caseStudies[0].previewImages.slice(1).map((image, index) => (
                    <div
                      key={image.src}
                      className={`overflow-hidden border border-border/70 bg-background/20 p-2 ${
                        index === 0 ? "clip-corner-br" : "clip-corner-tl"
                      }`}
                    >
                      <div
                        className={`w-full bg-white/95 overflow-hidden border border-white/60 shadow-lg ${
                          index === 0 ? "aspect-[3832/1834]" : "aspect-[3364/1838]"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-center bg-white scale-[1.1] md:scale-[1.15] transform-gpu"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative z-10 h-full grid grid-cols-2 gap-3">
                {portfolio.caseStudies[0].preview.map((item, index) => (
                  <div
                    key={item}
                    className={`glass-dark border border-border/70 p-4 font-mono text-xs tracking-wider flex items-end ${
                      index % 2 === 0 ? "clip-corner-tl" : "clip-corner-br"
                    }`}
                  >
                    {item.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="p-8 relative">
            <div className="circuit-pattern absolute inset-0 opacity-30"></div>
            <div className="relative z-10">
              <div className="inline-block glass border border-primary/30 px-3 py-1 clip-corner-br text-xs mb-3 font-mono text-primary">
                PRIMARY.PROJECT
              </div>
              <div className="text-xs text-muted-foreground font-mono mb-2">{portfolio.caseStudies[0].year}</div>
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
              <div className="mb-6">
                <div className="text-xs text-primary font-mono tracking-wider mb-3">HIRING.SIGNAL</div>
                <p className="text-sm text-muted-foreground font-mono mb-3">{portfolio.caseStudies[0].impact}</p>
                <ul className="space-y-2">
                  {portfolio.caseStudies[0].highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground font-mono">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-secondary/15 via-transparent to-primary/15 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                <div className="relative z-10 grid grid-cols-2 gap-2 h-full">
                  {project.preview.map((item, previewIndex) => (
                    <div
                      key={item}
                      className={`glass-dark border border-border/70 p-3 text-[10px] font-mono tracking-wider flex items-end ${
                        previewIndex % 2 === 0 ? "clip-corner-tl" : "clip-corner-br"
                      }`}
                    >
                      {item.toUpperCase()}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="text-[10px] text-muted-foreground mb-2 font-mono">{project.year}</div>
                <h3 className="mb-2 font-mono tracking-wider">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-mono text-xs leading-relaxed">{project.summary}</p>
                <p className="text-sm text-muted-foreground mb-3 font-mono text-xs leading-relaxed">{project.whyItMatters}</p>
                <p className="text-sm text-muted-foreground mb-3 font-mono text-xs leading-relaxed">{project.impact}</p>
                <ul className="space-y-1.5 mb-3">
                  {project.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[10px] text-muted-foreground font-mono">
                      <div className="w-1 h-1 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              className={`col-span-12 md:col-span-6 glass-dark border border-border overflow-hidden group relative ${
                index % 3 === 0 ? "clip-corner-tl" : index % 3 === 1 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                <div className="h-52 md:h-full min-h-[260px] overflow-hidden relative bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-3 flex items-center justify-center">
                  <div className="w-[86%] h-full bg-white border border-white/60 shadow-2xl overflow-hidden">
                    <img
                      src={report.thumbnail}
                      alt={`${report.title} PDF preview`}
                      className="w-full h-full object-cover object-top scale-[1.1] origin-top bg-white"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-card/20 via-transparent to-transparent md:bg-gradient-to-t md:from-card/10 md:via-transparent md:to-transparent"></div>
                  <div className="scan-lines absolute inset-0"></div>
                </div>
                <div className="p-4 relative">
                  <div className="grid-pattern absolute inset-0 opacity-20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2 gap-3">
                        <h3 className="font-mono tracking-wider">{report.title}</h3>
                        <span className="text-xs font-mono text-muted-foreground">PDF</span>
                      </div>
                      <p className="text-muted-foreground mb-3 font-mono text-[11px] leading-relaxed">{report.body}</p>
                    </div>
                    <span className="text-xs text-primary font-mono flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      OPEN.REPORT
                    </span>
                  </div>
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
              These projects emphasize product usefulness, measurable failure modes, and the engineering tradeoffs needed to make AI systems credible.
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
            <div className="glass border border-border clip-corner-tl p-3 text-[10px] text-muted-foreground font-mono">
              Featured projects now include impact language, delivery scope, and snapshot modules for faster recruiter scanning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
