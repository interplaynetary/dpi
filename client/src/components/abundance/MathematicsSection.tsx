import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TheoremProps {
  title: string;
  simple: string;
  formal: string;
  whyMatters: string;
}

function Theorem({ title, simple, formal, whyMatters }: TheoremProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/70 transition-colors"
      >
        <h4 className="text-lg font-semibold text-slate-200">{title}</h4>
        {expanded ? (
          <ChevronUp className="h-5 w-5 text-slate-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-emerald-400 mb-2">Simple Explanation:</p>
            <p className="text-slate-300">{simple}</p>
          </div>

          <div className="bg-slate-900/50 rounded p-4 border-l-4 border-emerald-500">
            <p className="text-sm font-semibold text-cyan-400 mb-2">Formal Proof:</p>
            <p className="text-slate-300 font-mono text-sm whitespace-pre-line">{formal}</p>
          </div>

          <div className="bg-emerald-950/30 rounded p-4">
            <p className="text-sm font-semibold text-emerald-400 mb-2">Why This Matters:</p>
            <p className="text-slate-300">{whyMatters}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MathematicsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            The Mathematics
          </h2>
          <p className="text-xl text-emerald-400">
            For the Curious: Why This Is Mathematically Necessary
          </p>
        </div>

        <div className="space-y-6">
          {/* Proportional Structure */}
          <Theorem
            title="The Proportional Structure"
            simple="Recognition must be proportional (percentages) to be comparable across different agents. Must sum to 100% to be complete. Any other structure would be either unbounded (meaningless), non-proportional (incomparable), or arbitrary scale."
            formal={`Proof by elimination:
• If unbounded → indeterminate (no basis for comparison)
• If non-proportional → incommensurable (can't compare 5 apples to 3 oranges)
• If not summing to 100% → arbitrary scale (why 50%? why 200%?)

∴ Proportional structure summing to 100% is uniquely necessary
∴ The 100% is not a limitation but the FORM of coordination`}
            whyMatters="This proves that the percentage structure isn't arbitrary - it's the only way to coordinate recognition across different people and contexts. The 100% isn't a 'budget constraint' but the logical form of completeness."
          />

          {/* Minimum Operator */}
          <Theorem
            title="The Minimum Operator"
            simple="Mutual recognition must use min(A→B, B→A). Why? It's the only operator that prevents unilateral inflation, requires bilateral consent, preserves symmetry of freedom, and eliminates free-riding."
            formal={`Test alternative operators:

Average: (A→B + B→A)/2
  • Problem: One party can inflate by overstating
  • A=100%, B=0% → avg=50% (A gets benefit without B's consent)
  ✗ Fails bilaterality

Maximum: max(A→B, B→A)
  • Problem: Higher value dominates
  • A=100%, B=10% → max=100% (not mutual)
  ✗ Fails mutuality

Product: A→B × B→A
  • Problem: Wrong type (not a proportion)
  • 50% × 60% = 30% (nonsensical)
  ✗ Type error

Minimum: min(A→B, B→A)
  ✓ Prevents inflation (can't force by overstating)
  ✓ Requires consent (both must agree)
  ✓ Preserves symmetry (both have veto)
  ✓ Eliminates free-riding (both must contribute)

∴ Minimum is uniquely necessary`}
            whyMatters="This proves the minimum operator isn't just 'nice to have' - it's the only operator that makes free association genuinely mutual. Any other operator allows coercion or free-riding."
          />

          {/* Infinity = 100% */}
          <Theorem
            title="Infinity = 100%"
            simple="Every amount X equals 100% of itself (self-identity). This includes infinity: ∞ = 100% of ∞. The percentage form means 'generic distributivity' - 100% can be divided into parts (30% + 25% + 45%). Therefore infinity exists AS finite distributivity. The infinite is IN the finite."
            formal={`Self-identity: ∀X: X = 100% of X
Special case: ∞ = 100% of ∞

Distributivity: 100% = Σ(parts)
  100% = 30% + 25% + 20% + 15% + 10%

Generic distributivity:
  The % form means "can be apportioned"
  100% is the whole that can be divided into parts
  
Synthesis:
  ∞ = 100% of ∞         (self-identity)
  100% = Σ(finite parts) (distributivity)
  ∴ ∞ exists AS Σ(finite parts)
  ∴ The infinite is immanent in finite proportions

Scale invariance follows:
  Works identically at capacity C=10 or C=10^9
  Because proportions are scale-invariant
  30% of 10 = 3
  30% of 10^9 = 3×10^8
  Same structure, different scale`}
            whyMatters="This proves why the system scales infinitely: it's not about the quantity of resources, but about proportional relationships. Whether you have 10 or 10 billion, the proportional structure works identically. The infinite is present in every finite instance."
          />
        </div>

        {/* Summary box */}
        <div className="mt-12 bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 border-2 border-emerald-500/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-emerald-300 mb-4 text-center">
            Mathematical Necessity
          </h3>
          <div className="space-y-3 text-slate-300">
            <p className="flex items-start">
              <span className="text-emerald-400 mr-2">1.</span>
              <span><strong>Proportional structure</strong> is the only form for commensurable coordination</span>
            </p>
            <p className="flex items-start">
              <span className="text-emerald-400 mr-2">2.</span>
              <span><strong>Minimum operator</strong> is the only operator preserving mutual freedom</span>
            </p>
            <p className="flex items-start">
              <span className="text-emerald-400 mr-2">3.</span>
              <span><strong>Infinity = 100%</strong> proves the system scales infinitely via proportional reasoning</span>
            </p>
          </div>
          <p className="mt-6 text-center text-emerald-400 font-semibold italic">
            This isn't speculation - it's mathematical proof.
          </p>
        </div>
      </div>
    </section>
  );
}

