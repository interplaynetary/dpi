import { ShoppingCart, Users, Building, BookOpen } from "lucide-react";

interface ScenarioProps {
  icon: React.ReactNode;
  title: string;
  current: string;
  abundance: string;
  outcome: string;
}

function Scenario({ icon, title, current, abundance, outcome }: ScenarioProps) {
  return (
    <div className="bg-slate-800/50 border-2 border-slate-700 hover:border-emerald-500/50 rounded-xl p-6 transition-all">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-500/20 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-emerald-300">{title}</h3>
      </div>

      <div className="space-y-4">
        {/* Current approach */}
        <div className="bg-red-950/20 border-l-4 border-red-500 rounded-r p-4">
          <p className="text-sm font-semibold text-red-300 mb-2">Current (Scarcity):</p>
          <p className="text-slate-300 text-sm">{current}</p>
        </div>

        {/* Abundance approach */}
        <div className="bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r p-4">
          <p className="text-sm font-semibold text-emerald-300 mb-2">Abundance:</p>
          <p className="text-slate-300 text-sm">{abundance}</p>
        </div>

        {/* Outcome */}
        <div className="bg-cyan-950/20 rounded p-3">
          <p className="text-xs font-semibold text-cyan-400 mb-1">Outcome:</p>
          <p className="text-slate-300 text-xs">{outcome}</p>
        </div>
      </div>
    </div>
  );
}

export default function AbundancePracticeSection() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Abundance in Practice
          </h2>
          <p className="text-xl text-emerald-400">
            What Abundance Looks Like
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Scenario
            icon={<ShoppingCart className="h-8 w-8 text-emerald-400" />}
            title="Resource Sharing"
            current="I have limited food, you need food, what's the price? → Artificial scarcity through pricing → Zero-sum competition"
            abundance="I have capacity to provide, you recognize value, we coordinate proportionally → Recognition flows to quality → Mutual benefit"
            outcome="No artificial scarcity through pricing. No zero-sum competition. Recognition flows to quality providers."
          />

          <Scenario
            icon={<Users className="h-8 w-8 text-emerald-400" />}
            title="Collaborative Work"
            current="Limited positions, competitive hiring, scarce promotions → Artificial scarcity of 'positions' → Hierarchical bottlenecks"
            abundance="Recognize valuable contributions proportionally, allocation flows to recognized value → Quality naturally recognized → No artificial position limits"
            outcome="No artificial scarcity of positions. No hierarchical bottlenecks. Quality contributions naturally get more allocation."
          />

          <Scenario
            icon={<Building className="h-8 w-8 text-emerald-400" />}
            title="Community Coordination"
            current="Limited budget, vote on priorities, some win/some lose → Zero-sum budget battles → Artificial scarcity of community capacity"
            abundance="Recognize community needs proportionally, allocation flows via mutual recognition → Needs satisfied via distributed coordination → Cooperative allocation"
            outcome="No zero-sum budget battles. No artificial scarcity of community capacity. Distributed satisfaction of needs."
          />

          <Scenario
            icon={<BookOpen className="h-8 w-8 text-emerald-400" />}
            title="Knowledge & Creativity"
            current="Intellectual property, artificial scarcity, gatekeepers → IP monopolies restrict access → Centralized control of distribution"
            abundance="Recognize valuable knowledge proportionally, support flows to recognized creators → Quality content naturally supported → No artificial IP scarcity"
            outcome="No artificial scarcity through IP monopolies. No gatekeepers controlling distribution. Quality creators naturally get support."
          />
        </div>

        {/* Key insight */}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 via-emerald-900/20 to-slate-800/50 border-2 border-emerald-500/30 rounded-xl p-8 text-center">
          <p className="text-xl text-slate-200 mb-4">
            The Key Insight
          </p>
          <p className="text-lg text-emerald-400 font-semibold">
            Same capacity, different coordination logic
          </p>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            Abundance isn't about having infinite resources - it's about coordinating finite resources 
            through proportional recognition instead of artificial scarcity mechanisms.
          </p>
        </div>
      </div>
    </section>
  );
}

