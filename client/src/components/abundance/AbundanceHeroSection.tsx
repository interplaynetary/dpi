import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function AbundanceHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-3/5 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))] -z-10" />
      
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Main headline */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Free Association</span>
            <span className="block text-3xl md:text-4xl font-normal text-muted-foreground mt-4">
              Resource Coordination Through Mutual Recognition
            </span>
          </h1>
        </div>

        {/* Core insight */}
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            Traditional coordination relies on markets (which exclude), charity (which creates dependency), 
            or bureaucracy (which is slow).
          </p>
          <p className="text-xl md:text-2xl text-emerald-600 font-medium leading-relaxed">
            Free Association coordinates through mutual recognition - 
            <span className="block mt-2">fast, fair, and decentralized.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 text-base font-medium group transition-all"
            asChild
          >
            <a href="#how-it-works">
              How It Works
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500 px-8 h-12 text-base font-medium group transition-all"
            asChild
          >
            <a href="#demo">
              Try the Protocol
              <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Key properties */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
          {[
            { label: "Fast", value: "Seconds" },
            { label: "Fair", value: "Mathematical" },
            { label: "Efficient", value: "Direct" },
            { label: "Decentralized", value: "Peer-to-peer" }
          ].map((prop, i) => (
            <div key={i} className="text-center">
              <div className="text-emerald-600 font-semibold text-lg">{prop.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{prop.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
