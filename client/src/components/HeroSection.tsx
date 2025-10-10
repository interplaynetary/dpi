import { Button } from "@/components/ui/button";
import { ArrowRight, Users, DollarSign, TrendingDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-3/10 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
              Ready for COP30 | $200K Investment Opportunity
            </div>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl mx-auto leading-tight">
            Technology for Better{" "}
            <span className="text-primary">Global Coordination</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform how humanity coordinates resources by aligning resource flows with collective values and mutual contribution. From local communities to global institutions.
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
                <DollarSign className="w-5 h-5 text-chart-2" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">$73M</span>
              </div>
              <span className="text-sm text-muted-foreground">Funding Pipeline</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-chart-2" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">83%</span>
              </div>
              <span className="text-sm text-muted-foreground">Cost Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
