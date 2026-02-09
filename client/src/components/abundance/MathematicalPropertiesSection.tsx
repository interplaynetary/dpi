import { Check } from "lucide-react";

export default function MathematicalPropertiesSection() {
  const properties = [
    {
      name: "Proportional Fairness",
      color: "emerald",
      formula: "∀ A, B: If MR(P, A) = MR(P, B) Then Allocation(A) = Allocation(B)",
      meaning: "Allocations are strictly proportional to mutual recognition - equal recognition yields equal allocation"
    },
    {
      name: "Non-Accumulative",
      color: "cyan",
      formula: "Total_Received(R) ≤ Declared_Need(R)",
      meaning: "No entity receives beyond declared needs - the min() capping prevents accumulation"
    },
    {
      name: "Contraction (Always Holds)",
      color: "blue",
      formula: "Remaining_Need(after) ≤ Need(before)",
      meaning: "Receiving resources always reduces remaining need - holds in every round regardless of how needs change"
    },
    {
      name: "Deterministic Algorithm",
      color: "purple",
      formula: "Same inputs → Same allocations",
      meaning: "The allocation algorithm produces identical results for identical inputs - pure mathematical operation"
    }
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-3/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Mathematical Properties
          </h2>
          <p className="text-lg text-muted-foreground">
            Formally proven guarantees
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {properties.map((prop, i) => (
            <div 
              key={i}
              className={`bg-gradient-to-br from-${prop.color}-50 to-${prop.color}-100/50 border-2 border-${prop.color}-200 rounded-3xl p-8 hover:border-${prop.color}-300 transition-all duration-300`}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className={`p-2 bg-${prop.color}-100 rounded-lg flex-shrink-0 border border-${prop.color}-200`}>
                  <Check className={`h-6 w-6 text-${prop.color}-600`} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-700">
                  {prop.name}
                </h3>
              </div>
              <div className="space-y-4">
                <div className={`bg-white rounded-xl p-4 font-mono text-xs text-slate-700 border border-${prop.color}-200`}>
                  {prop.formula}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className={`text-${prop.color}-700 font-medium`}>Meaning:</span> {prop.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-emerald-50 border-l-4 border-emerald-400 rounded-r-2xl p-8">
          <p className="text-slate-700 leading-relaxed">
            These properties are not design choices but <span className="text-emerald-700 font-semibold">logical necessities</span>
            derived from the core principles of mutual recognition and proportional allocation.
          </p>
        </div>
      </div>
    </section>
  );
}
