import { Cpu, Guitar, Trees, Waves, Wrench } from "lucide-react";
import { portfolio } from "../content/portfolio";

export function Hobbies() {
  const hobbyIcons = [Wrench, Cpu, Waves, Guitar];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="inline-block glass border border-primary/30 px-4 py-2 clip-corner-tl text-sm font-mono tracking-wider text-primary mb-4">
          HOBBIES.LOG
        </div>
        <h1 className="text-4xl md:text-6xl mb-4 font-mono tracking-tight">
          OUTSIDE <span className="text-primary">WORK</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-mono">
          Active, outside, and hands-on. Nature keeps me grounded, and building things keeps me sharp.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-12 lg:col-span-6 clip-corner-all bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground p-8 relative overflow-hidden">
          <div className="mesh-gradient absolute inset-0"></div>
          <div className="relative z-10">
            <Trees className="w-12 h-12 mb-6 text-background" />
            <h2 className="text-3xl md:text-4xl mb-4 font-mono tracking-wider text-background">RECHARGE.MODE</h2>
            <p className="text-background/90 mb-6 font-mono text-sm max-w-md">
              I am at my best when I am moving and building. Outside time keeps me balanced, and hands-on work keeps me honest about constraints.
            </p>
            <div className="space-y-2">
              {[
                "diagnose, test, verify, fix",
                "builder and restorer energy",
                "quiet focus outside the desk",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                  <span className="font-mono text-sm text-background">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
          {portfolio.hobbies.map((interest, index) => {
            const Icon = hobbyIcons[index];
            return (
              <div key={interest.title} className="aspect-square clip-corner-all overflow-hidden border border-border relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <div className="font-mono text-xs text-primary">{interest.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {portfolio.hobbies.map((interest, index) => {
          const Icon = hobbyIcons[index];
          return (
            <div key={interest.title} className="grid grid-cols-12 gap-4">
              <div
                className={`${
                  index % 2 === 0 ? "col-span-12 lg:col-span-5" : "col-span-12 lg:col-span-6 lg:col-start-7 lg:row-start-1"
                } ${index % 2 === 0 ? "clip-corner-tl" : "clip-corner-tr"} overflow-hidden h-64 lg:h-auto border border-border relative group bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 flex items-center justify-center`}
              >
                <div className="scan-lines absolute inset-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Icon className="w-24 h-24 text-primary/70 relative z-10" />
              </div>

              <div
                className={`${
                  index % 2 === 0 ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-6"
                } glass-dark border border-primary/20 p-8 relative overflow-hidden ${
                  index % 2 === 0 ? "clip-corner-br" : "clip-corner-bl"
                }`}
              >
                <div className="circuit-pattern absolute inset-0 opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <div className="font-mono text-xs text-primary mb-3 tracking-wider">
                        HOBBY.{String(index + 1).padStart(2, "0")}
                      </div>
                      <h2 className="text-2xl md:text-3xl mb-2 font-mono tracking-wider">{interest.title}</h2>
                      <p className="text-muted-foreground font-mono text-sm">{interest.body}</p>
                    </div>
                    <div className="w-12 h-12 clip-corner-all bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-2 mt-6">
                    <div className="font-mono text-xs text-secondary mb-3 tracking-wider">FOCUS.AREAS</div>
                    {interest.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 glass border border-border clip-corner-tl p-3">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                        <span className="text-sm font-mono">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-4 mb-8">
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

      <div className="clip-corner-all glass-dark border border-border p-8 md:p-12 text-center relative overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-6xl text-primary mb-6 font-mono">&gt;_</div>
          <blockquote className="text-2xl md:text-3xl mb-6 font-mono tracking-wide">
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
