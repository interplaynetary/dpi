import { Infinity } from "lucide-react";

export default function Why100Section() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-3/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground flex items-center justify-center gap-4">
            Why 100%?
          </h2>
          <p className="text-lg text-muted-foreground">
            Self-identity, completeness, and the infinite-in-finite
          </p>
        </div>

        {/* The core identity */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-6 bg-white px-16 py-10 rounded-2xl border-2 border-emerald-200">
              <Infinity className="h-16 w-16 text-emerald-600" />
              <span className="text-5xl font-light text-slate-600">=</span>
              <span className="text-6xl font-bold text-emerald-600">100%</span>
              <span className="text-3xl font-light text-slate-600">of</span>
              <Infinity className="h-16 w-16 text-emerald-600" />
            </div>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-center text-lg text-emerald-600 font-semibold">
              Not metaphor, but logical necessity
            </p>

            <div className="bg-white rounded-2xl p-8 space-y-4 font-mono text-sm border border-emerald-200">
              <div>Every X = 100% of X <span className="text-slate-500 ml-4">[self-identity: A = A]</span></div>
              <div className="text-emerald-600">∴ ∞ = 100% of ∞ <span className="text-slate-500 ml-4">[infinity is 100% of itself]</span></div>
              <div className="pt-4 border-t border-emerald-200">
                But % = generic distributivity <span className="text-slate-500 ml-4">[can be apportioned]</span>
              </div>
              <div>∴ 100% = 30% + 25% + 45% + ...</div>
              <div className="pt-4 border-t border-emerald-200 text-cyan-600">
                ∴ The infinite exists AS finite distributivity
              </div>
            </div>

            <p className="text-center text-emerald-600 italic pt-4">
              The infinite is IN the finite
            </p>
          </div>
        </div>

        {/* Why this is necessary */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
            Why Any Other Structure Fails
          </h3>

          <div className="space-y-4">
            {[
              {
                structure: "Unbounded (no limit)",
                problem: "No determinacy - could be anything",
                color: "red"
              },
              {
                structure: "Not summing to 100% (arbitrary scale)",
                problem: "No completeness - why 50%? why 200%?",
                color: "orange"
              },
              {
                structure: "Non-proportional (absolute values)",
                problem: "No commensurability - can't compare across contexts",
                color: "yellow"
              }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-r from-${item.color}-50 to-${item.color}-100/50 border border-${item.color}-200 rounded-2xl p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`text-${item.color}-600 font-bold text-2xl flex-shrink-0`}>⊗</div>
                  <div className="flex-1">
                    <div className={`text-${item.color}-700 font-semibold mb-2`}>{item.structure}</div>
                    <div className="text-slate-600 text-sm">{item.problem}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The necessity */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-10">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
            The Logical Necessity
          </h3>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              The 100% proportional structure is <span className="text-emerald-600 font-semibold">uniquely necessary</span> for:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { term: "Determinacy", desc: "Each recognition has specific meaning" },
                { term: "Completeness", desc: "Nothing arbitrary or outside the system" },
                { term: "Commensurability", desc: "Can compare across different contexts" },
                { term: "Self-identity", desc: "Each entity = 100% of itself" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-emerald-600 font-semibold">{item.term}</div>
                    <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-emerald-200">
              <p className="text-center text-lg text-emerald-600 font-semibold">
                ∴ This is not a design choice but the necessary form of determinate, complete, commensurable coordination
              </p>
            </div>
          </div>
        </div>

        {/* Scale invariance consequence */}
        <div className="mt-12 max-w-3xl mx-auto bg-cyan-50 border-l-4 border-cyan-400 rounded-r-2xl p-8">
          <p className="text-slate-700 leading-relaxed">
            <span className="text-cyan-700 font-semibold">This is why the system scales infinitely:</span> It's not about 
            the quantity of resources, but about proportional relationships. Whether capacity is 10 or 10 billion, the 
            proportional structure works identically. The infinite is present in every finite instance.
          </p>
        </div>
      </div>
    </section>
  );
}
