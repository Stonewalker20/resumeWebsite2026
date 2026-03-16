import { BookOpen, FileText, Users, Award, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "Neural Networks for Gesture Recognition in AR/VR Environments",
    authors: "Your Name, Co-Author A, Co-Author B",
    conference: "ACM CHI Conference on Human Factors in Computing Systems",
    year: "2024",
    type: "Conference Paper",
    abstract: "We present a novel approach to gesture recognition using deep learning models optimized for real-time AR/VR applications.",
    citations: 45,
    link: "https://example.com",
    award: "Best Paper Award",
  },
  {
    title: "Distributed Machine Learning at Scale: A Performance Analysis",
    authors: "Your Name, Co-Author C",
    conference: "IEEE International Conference on Distributed Computing Systems",
    year: "2023",
    type: "Conference Paper",
    abstract: "An empirical study examining the scalability and performance characteristics of distributed ML training frameworks.",
    citations: 32,
    link: "https://example.com",
  },
  {
    title: "Human-Centered Design Principles for AI-Powered Interfaces",
    authors: "Your Name, Co-Author D, Co-Author E",
    conference: "ACM UIST Symposium on User Interface Software and Technology",
    year: "2023",
    type: "Conference Paper",
    abstract: "We propose a framework for designing AI interfaces that prioritize human agency and interpretability.",
    citations: 28,
    link: "https://example.com",
  },
  {
    title: "Real-Time Data Processing in Edge Computing Environments",
    authors: "Your Name, Co-Author F",
    conference: "Journal of Distributed Systems",
    year: "2022",
    type: "Journal Article",
    abstract: "A comprehensive analysis of latency and throughput optimization techniques for edge computing systems.",
    citations: 67,
    link: "https://example.com",
  },
  {
    title: "Privacy-Preserving Machine Learning Techniques",
    authors: "Your Name, Co-Author G, Co-Author H",
    conference: "International Workshop on Privacy and Security",
    year: "2022",
    type: "Workshop Paper",
    abstract: "Novel approaches to training ML models while preserving user privacy through federated learning and differential privacy.",
    citations: 41,
    link: "https://example.com",
  },
];

const researchInterests = [
  "Human-Computer Interaction",
  "Machine Learning",
  "Distributed Systems",
  "AR/VR Technologies",
  "Privacy & Security",
  "Edge Computing",
];

export function Research() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
          Academic Contributions
        </div>
        <h1 className="text-4xl md:text-5xl mb-4">Research & Publications</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          My research focuses on the intersection of machine learning, human-computer
          interaction, and distributed systems.
        </p>
      </div>

      {/* Stats - Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        <div className="md:col-span-5 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl p-8">
          <h2 className="text-3xl mb-2">Research Impact</h2>
          <div className="space-y-6 mt-8">
            <div>
              <div className="text-4xl mb-1">5</div>
              <div className="text-primary-foreground/80">Published Papers</div>
            </div>
            <div>
              <div className="text-4xl mb-1">213</div>
              <div className="text-primary-foreground/80">Total Citations</div>
            </div>
            <div>
              <div className="text-4xl mb-1">12</div>
              <div className="text-primary-foreground/80">Conference Presentations</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-card border border-border rounded-3xl p-8">
          <h2 className="text-2xl mb-6">Research Interests</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {researchInterests.map((interest) => (
              <div
                key={interest}
                className="flex items-start gap-2 bg-accent rounded-xl p-4"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{interest}</span>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 mt-6">
            <Award className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h4 className="mb-1">Best Paper Award</h4>
              <p className="text-sm text-muted-foreground">ACM CHI 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="mb-12">
        <h2 className="text-3xl mb-8">Publications</h2>
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 ${
                index % 2 === 0 ? "lg:grid-cols-12" : "lg:grid-cols-12"
              } gap-6`}
            >
              {/* Main Content */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:col-span-9" : "lg:col-span-8 lg:col-start-5"
                } bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
              >
                {paper.award && (
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs mb-3">
                    <Award className="w-3 h-3 inline mr-1" />
                    {paper.award}
                  </div>
                )}
                <h3 className="text-xl mb-3">{paper.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{paper.authors}</p>
                <div className="flex flex-wrap gap-2 mb-4 text-sm">
                  <span className="inline-flex items-center gap-1 text-primary">
                    <BookOpen className="w-4 h-4" />
                    {paper.conference}
                  </span>
                  <span className="text-muted-foreground">• {paper.year}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{paper.abstract}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {paper.citations} citations
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {paper.type}
                    </span>
                  </div>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Read Paper
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Side Info */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:col-span-3" : "lg:col-span-4 lg:col-start-1 lg:row-start-1"
                } bg-gradient-to-br from-accent to-primary/5 rounded-2xl p-6 flex flex-col justify-center`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{paper.year}</div>
                  <div className="text-sm text-muted-foreground mb-4">{paper.type}</div>
                  <div className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-sm">
                    <Users className="w-4 h-4" />
                    {paper.citations} citations
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaborations & Future Work */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-card border border-border rounded-3xl p-8">
          <h3 className="text-2xl mb-4">Collaborations</h3>
          <p className="text-muted-foreground mb-6">
            I actively collaborate with researchers from leading institutions worldwide.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm">🏛️</span>
              </div>
              <div>
                <div className="text-sm">Stanford University</div>
                <div className="text-xs text-muted-foreground">3 publications</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm">🏛️</span>
              </div>
              <div>
                <div className="text-sm">MIT CSAIL</div>
                <div className="text-xs text-muted-foreground">2 publications</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 bg-gradient-to-br from-primary/5 via-accent to-primary/5 rounded-3xl p-8">
          <h3 className="text-2xl mb-4">Future Research Directions</h3>
          <p className="text-muted-foreground mb-6">
            Currently exploring new areas in AI safety, multimodal learning, and sustainable
            computing systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background border border-border rounded-xl p-4">
              <h4 className="mb-2">AI Safety & Ethics</h4>
              <p className="text-sm text-muted-foreground">
                Developing frameworks for responsible AI deployment
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
              <h4 className="mb-2">Multimodal Learning</h4>
              <p className="text-sm text-muted-foreground">
                Cross-modal understanding and generation
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
              <h4 className="mb-2">Green Computing</h4>
              <p className="text-sm text-muted-foreground">
                Energy-efficient ML training methods
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4">
              <h4 className="mb-2">Quantum ML</h4>
              <p className="text-sm text-muted-foreground">
                Exploring quantum computing for ML tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
