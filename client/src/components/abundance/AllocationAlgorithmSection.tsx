import { ArrowRight } from "lucide-react";

export default function AllocationAlgorithmSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-xl text-slate-600 mb-4">
            Given your full autonomy to allocate as you wish...
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            We Propose This Algorithm
          </h2>
          <p className="text-lg text-emerald-600 font-medium">
            Allocate proportional to recognition and mutual recognition
          </p>
        </div>

        <div className="text-center mb-20 space-y-4">
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            This creates a two-tier priority system with mathematical guarantees that enable 
            self-organizing coordination and quality convergence
          </p>
        </div>

        {/* Two tiers */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Tier 1 */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-8">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-emerald-100 rounded-lg text-emerald-700 text-sm font-semibold mb-4">
                Tier 1 - Priority
              </div>
              <h3 className="text-2xl font-semibold text-emerald-700">
                Mutual Recognition Priority
              </h3>
            </div>
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>Entities with mutual recognition receive first priority based on:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-slate-600">
                <li>Strength of mutual recognition</li>
                <li>Declared resource needs</li>
                <li>Compatible resource specifications (time, location, type)</li>
              </ul>
            </div>
          </div>
          {/* Tier 2 */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-8">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-cyan-100 rounded-lg text-cyan-700 text-sm font-semibold mb-4">
                Tier 2 - Support
              </div>
              <h3 className="text-2xl font-semibold text-cyan-700">
                Unilateral Recognition
              </h3>
            </div>
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>Remaining capacity flows to entities you recognize (even without mutual recognition):</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-slate-600">
                <li>Enables support for new partners building recognition networks</li>
                <li>Maintains incentives for genuine contribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Allocation Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold text-foreground text-center mb-10">
            Allocation Process
          </h3>
          <div className="space-y-6">
            {[
              { step: "1", title: "Filter Compatible Resources", desc: "Match time windows, locations, and resource types" },
              { step: "2", title: "Calculate Proportional Shares", desc: "Based on mutual recognition strength" },
              { step: "3", title: "Recognition Determines Split", desc: "Need size sets the cap - recognition determines proportion" },
              { step: "4", title: "Cap at Declared Needs", desc: "No accumulation beyond stated requirements" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                <div className="p-3 bg-slate-100 rounded-full text-slate-700 font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-emerald-700 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Updates */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-3xl p-10">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
            Dynamic Updates
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
            <div className="space-y-4">
              <p>• Remaining need = max(0, Declared Need - Total Received)</p>
              <p>• Adaptive damping prevents allocation oscillation</p>
            </div>
            <div className="space-y-4">
              <p>• Each resource type tracks independently</p>
              <p>• System converges to stable equilibrium in 5-10 calculation rounds</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-200 text-center">
            <p className="text-lg text-emerald-600 font-semibold">
              Near-instantaneous adaptation to network evolution (100-200ms per state change)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
