import { X, Check } from "lucide-react";

interface DistinctionProps {
  misconception: string;
  reality: string;
  explanation: string;
}

function Distinction({ misconception, reality, explanation }: DistinctionProps) {
  return (
    <div className="bg-slate-800/50 border-2 border-slate-700 hover:border-emerald-500/50 rounded-xl p-6 transition-all">
      <div className="grid md:grid-cols-2 gap-6 mb-4">
        {/* Misconception */}
        <div className="bg-red-950/20 border-l-4 border-red-500 rounded-r p-4">
          <div className="flex items-start gap-2 mb-2">
            <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-red-300 text-sm">Not This:</p>
          </div>
          <p className="text-slate-300 text-sm">{misconception}</p>
        </div>

        {/* Reality */}
        <div className="bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r p-4">
          <div className="flex items-start gap-2 mb-2">
            <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-emerald-300 text-sm">But This:</p>
          </div>
          <p className="text-slate-300 text-sm">{reality}</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-slate-900/50 rounded p-4">
        <p className="text-slate-300 text-sm">{explanation}</p>
      </div>
    </div>
  );
}

export default function KeyDistinctionsSection() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Key Distinctions
          </h2>
          <p className="text-xl text-emerald-400">
            What Abundance Is NOT
          </p>
        </div>

        <div className="space-y-6">
          <Distinction
            misconception="Abundance = unlimited resources"
            reality="Abundance = infinite coordination capacity"
            explanation="The system works identically with limited material resources or abundant material resources. It's about coordination logic, not resource quantity. Material constraints still exist."
          />

          <Distinction
            misconception="Abundance = no scarcity"
            reality="Abundance = coordinating without artificial scarcity"
            explanation="Material constraints exist, but there's no artificial scarcity through pricing, no artificial scarcity through hierarchy. Proportional coordination scales infinitely regardless of material limits."
          />

          <Distinction
            misconception="Abundance = everything is free"
            reality="Abundance = allocation via recognition, not price/command"
            explanation="Decisions still need to be made about allocation. But they're based on mutual recognition, distributed proportionally, and converge toward quality - not determined by prices or commands."
          />

          <Distinction
            misconception="Abundance = utopian perfection"
            reality="Abundance = logical structure that scales infinitely"
            explanation="It's mathematics, not magic. The system is provably scalable, naturally converges to quality, and has self-correcting structure. Perfect outcomes aren't guaranteed - but the coordination logic is sound."
          />
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 via-emerald-900/20 to-slate-800/50 border-2 border-emerald-500/30 rounded-xl p-8 text-center">
          <p className="text-xl text-emerald-300 font-semibold mb-4">
            The Core Insight
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Abundance isn't about the quantity of things - it's about the <span className="text-emerald-400 font-semibold">quality of coordination</span>. 
            Free Association uses proportional recognition instead of scarce money or hierarchical command, 
            enabling infinite scalability through mathematical necessity.
          </p>
        </div>
      </div>
    </section>
  );
}

