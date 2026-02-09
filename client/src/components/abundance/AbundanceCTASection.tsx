import { Button } from "@/components/ui/button";
import { BookOpen, Play, Users, Github } from "lucide-react";

export default function AbundanceCTASection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-5xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
            Implement Free Association
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            <p className="text-lg text-slate-600 font-light">
              Open source protocol. Mathematically proven properties.
            </p>
            <p className="text-xl text-emerald-600 font-medium">
              Resource coordination through mutual recognition.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 font-medium transition-all hover:scale-105"
              asChild
            >
              <a href="https://github.com/dpi-coalition" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 h-12 font-medium transition-all hover:scale-105"
              asChild
            >
              <a href="/join">
                <Users className="mr-2 h-5 w-5" />
                Join the Coalition
              </a>
            </Button>
          </div>
        </div>

        {/* Key features grid */}
        <div className="grid md:grid-cols-2 gap-3 mb-16">
          {[
            "MR = min(A→B, B→A)  -  Uniquely preserves mutual freedom",
            "∞ = 100% of ∞  -  Logical necessity, not design choice",
            "Proportional fairness  -  Mathematically guaranteed",
            "Non-accumulative  -  Cannot receive beyond declared needs",
            "Self-correcting  -  100% budget creates accuracy incentives",
            "Fast convergence  -  100-200ms allocation computation",
            "Decentralized  -  No central authority or bottleneck",
            "Open source  -  MIT license, production ready"
          ].map((message, i) => {
            const [highlight, ...rest] = message.split('  -  ');
            return (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 transition-colors">
                <p className="text-sm text-slate-700">
                  <span className="text-emerald-600 font-medium">{highlight}</span>
                  {rest.length > 0 && <span className="text-slate-500">  -  {rest.join('  -  ')}</span>}
                </p>
              </div>
            );
          })}
        </div>

        {/* Use cases */}
        <div className="mb-16 bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-3xl p-10">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
            Production-Ready Use Cases
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Crisis Response", desc: "Coordinate resources during emergencies" },
              { title: "Open Source", desc: "Sustain commons-based production" },
              { title: "Supply Networks", desc: "Resilient supply chain coordination" }
            ].map((useCase, i) => (
              <div key={i} className="text-center">
                <div className="text-emerald-600 font-semibold mb-2">{useCase.title}</div>
                <div className="text-sm text-slate-600">{useCase.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final message */}
        <div className="text-center">
          <p className="text-lg text-slate-700">
            We're building coordination beyond scarcity. <span className="text-emerald-600 font-semibold">Are you in?</span>
          </p>
        </div>
      </div>
    </section>
  );
}
