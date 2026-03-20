import { Download, FileText, Linkedin, Mail, ShieldCheck, Sparkles, Target } from "lucide-react";
import { portfolio } from "../content/portfolio";

export function Resume() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 lg:col-span-9 clip-corner-all bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground p-8 relative overflow-hidden">
          <div className="mesh-gradient absolute inset-0"></div>
          <div className="relative z-10">
            <div className="font-mono text-xs tracking-wider mb-2 text-background/80">ENGINEER.PROFILE</div>
            <h1 className="text-4xl md:text-6xl mb-4 font-mono tracking-tight text-background">{portfolio.name}</h1>
            <p className="text-xl text-background/90 mb-6 font-mono">
              {portfolio.role} • {portfolio.focus}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-background/80 font-mono">
              <span className="inline-flex items-center gap-2">
                <Target className="w-4 h-4" />
                Reliable AI and ML systems for real-world constraints
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Full-stack delivery • defensible evaluation
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Fallback paths • reproducibility • documented handoff
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {portfolio.email}
              </span>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/cordell-stonecipher-27a54a14a
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 glass-dark border border-border clip-corner-br p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="scan-lines absolute inset-0"></div>
          <div className="relative z-10">
            <div className="mb-5 w-full">
              <div className="mx-auto w-fit rounded-full border border-primary/25 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 p-2">
                <div className="h-28 w-28 overflow-hidden rounded-full border border-white/10">
                  <img
                    src={portfolio.headshotPath}
                    alt="Portrait of Cordell Stonecipher"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <a
              href={portfolio.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 clip-corner-tl hover:opacity-90 transition-opacity mb-4 font-mono tracking-wider w-full justify-center"
            >
              <Download className="w-4 h-4" />
              EXPORT.PDF
            </a>
            <a
              href={portfolio.contactPath}
              className="inline-flex items-center gap-2 glass border border-border px-6 py-3 clip-corner-tl hover:border-primary/40 transition-colors mb-4 font-mono tracking-wider w-full justify-center"
            >
              <Mail className="w-4 h-4" />
              CONTACT.ME
            </a>
            <div className="text-xs text-muted-foreground font-mono">Last updated: {portfolio.updated}</div>
          </div>
        </div>
      </div>

      <div className="mb-8 glass-dark border border-primary/20 clip-corner-all p-8 relative overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="font-mono text-xs text-primary mb-4 tracking-wider">SUMMARY.TXT</div>
          <p className="text-muted-foreground leading-relaxed font-mono text-sm">{portfolio.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 lg:col-span-8 glass border border-border clip-corner-tr p-8 relative overflow-hidden">
          <div className="grid-pattern absolute inset-0 opacity-20"></div>
          <div className="relative z-10">
            <div className="font-mono text-xs text-primary mb-6 tracking-wider">TECHNICAL.SKILLS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolio.skillGroups.map((group, index) => (
                <div key={group.title}>
                  <div className={`font-mono text-sm mb-3 ${index < 2 ? "text-primary" : "text-secondary"}`}>
                    {group.title.toUpperCase()}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="glass border border-border px-3 py-1.5 clip-corner-tl text-xs font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-dark border border-secondary/20 clip-corner-bl p-8 relative overflow-hidden">
          <div className="scan-lines absolute inset-0"></div>
          <div className="relative z-10">
            <div className="font-mono text-xs text-secondary mb-6 tracking-wider">TARGET.ROLES</div>
            <ul className="space-y-3">
              {portfolio.targetRoles.map((role) => (
                <li key={role} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full pulse-glow"></div>
                  <span className="font-mono text-sm">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="font-mono text-xs text-primary mb-6 tracking-wider">SELECTED.WORK</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolio.caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`glass border border-border p-6 relative overflow-hidden ${
                index === 0 ? "clip-corner-tl" : index === 1 ? "clip-corner-tr" : "clip-corner-br"
              }`}
            >
              <div className="grid-pattern absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <h3 className="font-mono tracking-wider mb-3">{study.title}</h3>
                <p className="text-muted-foreground font-mono text-sm mb-4">{study.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tools.map((tool) => (
                    <span key={tool} className="glass border border-border px-3 py-1 clip-corner-tl text-xs font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-mono hover:text-primary/80 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  {study.linkLabel.toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-dark border border-border clip-corner-all p-8 relative overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10">
          <div className="font-mono text-xs text-primary mb-6 tracking-wider">RESEARCH.REPORTS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.researchReports.map((report, index) => (
              <a
                key={report.title}
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-3 glass border border-border p-4 hover:border-primary/40 transition-colors ${
                  index % 3 === 0 ? "clip-corner-tl" : index % 3 === 1 ? "clip-corner-tr" : "clip-corner-br"
                }`}
              >
                <div className="w-10 h-10 bg-primary/10 clip-corner-all flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-1">{report.title}</h4>
                  <p className="text-xs text-muted-foreground font-mono">{report.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
