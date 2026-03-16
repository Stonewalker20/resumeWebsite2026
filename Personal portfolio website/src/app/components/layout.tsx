import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Download, Github, Menu, Terminal, X } from "lucide-react";
import { portfolio } from "../content/portfolio";
import { pagePaths } from "../page-paths";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  const currentPath =
    location.pathname.startsWith(basePath) && basePath
      ? location.pathname.slice(basePath.length) || "/"
      : location.pathname;

  const navItems = [
    { path: pagePaths.home, matches: [pagePaths.home, pagePaths.homeFile], label: "Home" },
    { path: pagePaths.resume, matches: [pagePaths.resume], label: "Resume" },
    { path: pagePaths.profile, matches: [pagePaths.profile, pagePaths.experience], label: "Profile" },
    { path: pagePaths.projects, matches: [pagePaths.projects], label: "Projects" },
    { path: pagePaths.hobbies, matches: [pagePaths.hobbies], label: "Hobbies" },
  ];

  return (
    <div className="min-h-screen bg-background grid-pattern">
      <header className="sticky top-0 z-50 glass-dark border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={pagePaths.home} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 clip-corner-all bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Terminal className="w-5 h-5 text-background" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm tracking-wider text-primary font-mono">{portfolio.name.toUpperCase()}</span>
                <span className="text-xs text-muted-foreground font-mono">
                  {portfolio.role} • {portfolio.focus}
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex gap-1">
              {navItems.map((item) => {
                const isActive = item.matches.includes(currentPath);
                return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 transition-all font-mono text-sm tracking-wider ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{item.label.toUpperCase()}</span>
                  {isActive && (
                    <div className="absolute inset-0 glass border border-primary/30 clip-corner-tl"></div>
                  )}
                  <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 hover:opacity-100 transition-opacity w-full"></div>
                </Link>
              )})}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
              <span className="text-xs text-muted-foreground font-mono">ONLINE</span>
            </div>

            <button
              className="md:hidden p-2 glass rounded border border-border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-1 scan-lines">
              {navItems.map((item) => {
                const isActive = item.matches.includes(currentPath);
                return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 clip-corner-tl transition-all font-mono text-sm tracking-wider ${
                    isActive
                      ? "glass border border-primary/30 text-primary"
                      : "text-muted-foreground hover:glass hover:border hover:border-border"
                  }`}
                >
                  {item.label.toUpperCase()}
                </Link>
              )})}
            </nav>
          )}
        </div>
      </header>

      <main className="grain">
        <Outlet />
      </main>

      <footer className="border-t border-border glass-dark mt-auto">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-mono text-primary tracking-wider">SYSTEM.INFO</div>
              <div className="text-xs text-muted-foreground font-mono">© {portfolio.updated} {portfolio.name}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-mono text-primary tracking-wider">QUICK.LINKS</div>
              <div className="flex items-center gap-3">
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <Github className="w-3.5 h-3.5" />
                  GITHUB
                </a>
                <a
                  href={portfolio.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  <Download className="w-3.5 h-3.5" />
                  RESUME
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-mono text-primary tracking-wider">STATUS.OPERATIONAL</div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full pulse-glow"></div>
                <span className="text-xs text-muted-foreground font-mono">Portfolio content integrated</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
