import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Network } from "lucide-react";
import { FloatingSDG } from "@/components/FloatingSDG";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-3/5 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))] -z-10" />
      
      {/* SDG Icons Floating Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <FloatingSDG sdgNumber={1} size="md" />
        <FloatingSDG sdgNumber={13} size="lg" />
        <FloatingSDG sdgNumber={17} size="md" />
        <FloatingSDG sdgNumber={10} size="lg" />
        <FloatingSDG sdgNumber={16} size="md" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
             Digital Public Infrastructure for Planetary Coordination
            </div>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl mx-auto leading-tight">
            Free Association
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-tight mb-4">
            Align <span className="text-chart-3">Capacities</span> with <span className="text-primary">Priorities</span> and <span className="text-chart-2">Needs</span>
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A mathematically-proven infrastructure where capacity flows automatically to what you value most - enabling any entity, from individuals to institutions, to coordinate resources through mutual recognition.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => scrollToSection('contact')}
              data-testid="button-hero-get-started"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('demo')}
              data-testid="button-hero-view-demo"
            >
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">200+</span>
              </div>
              <span className="text-sm text-muted-foreground">Active Contributors</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-chart-2" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">&lt;100ms</span>
              </div>
              <span className="text-sm text-muted-foreground">Allocation Convergence</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-chart-2" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">P2P</span>
              </div>
              <span className="text-sm text-muted-foreground">Decentralized Architecture</span>
            </div>
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-12">

            
            <div className="flex items-center gap-2 px-4 py-2 bg-chart-2/10 rounded-full border border-chart-2/20">
              <svg className="w-5 h-5 text-chart-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm font-medium text-chart-2">Open Source</span>
            </div>
            
            <a 
              href="https://github.com/interplaynetary/free-association"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span className="text-sm font-medium">AGPL-3.0</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
