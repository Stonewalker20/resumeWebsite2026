import { Cpu, Guitar, Trees, Waves, Wrench } from "lucide-react";
import { portfolio } from "../content/portfolio";

export function Hobbies() {
  const hobbyIcons = [Wrench, Cpu, Waves, Guitar];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-12 lg:col-span-8 clip-corner-all bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground p-8 relative overflow-hidden">
          <div className="mesh-gradient absolute inset-0"></div>
          <div className="relative z-10">
            <div className="inline-block glass-dark border border-background/25 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-background/90 mb-4">
              HOBBIES.LOG
            </div>
            <h1 className="text-4xl md:text-6xl mb-4 font-mono tracking-tight text-background">
              OUTSIDE <span className="text-background/80">WORK</span>
            </h1>
            <p className="text-background/90 text-base md:text-lg max-w-3xl font-mono">
              Active, outside, and hands-on. Nature keeps me grounded, and building things keeps me sharp.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-dark border border-border clip-corner-br p-6 relative overflow-hidden">
          <div className="scan-lines absolute inset-0"></div>
          <div className="relative z-10">
            <div className="font-mono text-xs text-primary mb-4 tracking-wider">RECHARGE.MODE</div>
            <Trees className="w-10 h-10 mb-4 text-primary" />
            <div className="space-y-3">
              {[
                "diagnose, test, verify, fix",
                "builder and restorer energy",
                "quiet focus outside the desk",
              ].map((item) => (
                <div key={item} className="glass border border-border clip-corner-tl p-3 text-sm font-mono text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-6">
        {portfolio.hobbies.map((interest, index) => {
          const Icon = hobbyIcons[index];

          return (
            <div
              key={interest.title}
              className={`col-span-12 md:col-span-6 glass-dark border border-primary/20 p-6 relative overflow-hidden ${
                index % 2 === 0 ? "clip-corner-tl" : "clip-corner-br"
              }`}
            >
              <div className="grid-pattern absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="font-mono text-xs text-primary mb-2 tracking-wider">
                      HOBBY.{String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-xl md:text-2xl font-mono tracking-wider mb-2">{interest.title}</h2>
                  </div>
                  <div className="w-11 h-11 clip-corner-all bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-4">{interest.body}</p>

                <div className="flex flex-wrap gap-2">
                  {interest.highlights.map((highlight) => (
                    <span key={highlight} className="glass border border-border px-3 py-1.5 clip-corner-tl text-xs font-mono">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-12 lg:col-span-4 glass border border-border clip-corner-tl p-6">
          <div className="font-mono text-xs text-primary mb-4 tracking-wider">HOW.I.RECHARGE</div>
          <div className="space-y-3">
            {[
              { title: "Cars", tech: "diagnostics and restoration" },
              { title: "Nature", tech: "trails, lakes, outside resets" },
              { title: "Hardware", tech: "custom PCBs and microcontrollers" },
            ].map((project) => (
              <div key={project.title} className="glass-dark border border-border clip-corner-br p-3">
                <div className="text-sm font-mono mb-1">{project.title}</div>
                <div className="text-xs text-muted-foreground font-mono">{project.tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 glass-dark border border-primary/20 clip-corner-br p-6 relative overflow-hidden">
          <div className="grid-pattern absolute inset-0 opacity-20"></div>
          <div className="relative z-10">
            <div className="font-mono text-xs text-primary mb-4 tracking-wider">LONG.TERM.DIRECTION</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: "PRODUCT.MINDSET",
                  title: "Build something useful",
                  desc: portfolio.longTermDirection,
                  gradient: "from-primary/10 to-primary/5",
                },
                {
                  label: "WHY.IT.FITS",
                  title: "Health and safety interest",
                  desc: "I am drawn to work where better tools lead to better outcomes for people.",
                  gradient: "from-secondary/10 to-secondary/5",
                },
                {
                  label: "WORK.STYLE",
                  title: "Hands-on learning",
                  desc: "I like projects where you can point to something real at the end, even if it took a few failed attempts to get there.",
                  gradient: "from-primary/10 via-secondary/5 to-primary/5",
                },
                {
                  label: "TRANSFERABLE",
                  title: "Same mindset as software",
                  desc: "Cars, hardware, and time outside all reinforce patience, testing, and root-cause thinking.",
                  gradient: "from-secondary/10 to-secondary/5",
                },
              ].map((activity) => (
                <div key={activity.title} className={`glass border border-border clip-corner-tl p-4 bg-gradient-to-br ${activity.gradient}`}>
                  <div className="text-xs text-muted-foreground font-mono mb-2">{activity.label}</div>
                  <div className="font-mono text-sm mb-1">{activity.title}</div>
                  <p className="text-xs text-muted-foreground font-mono">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="clip-corner-all glass-dark border border-border p-6 md:p-8 text-center relative overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-4xl text-primary mb-4 font-mono">&gt;_</div>
          <blockquote className="text-xl md:text-2xl mb-4 font-mono tracking-wide">
            "I like projects where you can point to something real at the end."
          </blockquote>
          <p className="text-muted-foreground font-mono text-sm">
            That applies to software, hardware, and the way I spend time outside work.
          </p>
        </div>
      </div>
    </div>
  );
}
