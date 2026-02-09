import { ArrowRight, RotateCw } from "lucide-react";

export default function ConvergenceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-emerald-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            The Convergence
          </h2>
          <p className="text-xl text-emerald-400">
            How Abundance Self-Organizes
          </p>
        </div>

        {/* Feedback Loop */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-emerald-950/30 border-2 border-emerald-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-300 mb-8 text-center flex items-center justify-center gap-3">
              <RotateCw className="h-6 w-6" />
              The Feedback Loop
            </h3>

            <div className="space-y-6">
              {[
                {
                  step: "Recognition",
                  desc: "(hypothesis about value)",
                  color: "blue"
                },
                {
                  step: "Allocation",
                  desc: "(proportional to recognition)",
                  color: "purple"
                },
                {
                  step: "Delivery",
                  desc: "(actual provision)",
                  color: "pink"
                },
                {
                  step: "Satisfaction",
                  desc: "(experienced quality)",
                  color: "emerald"
                },
                {
                  step: "Share Update",
                  desc: "(satisfaction weights recognition)",
                  color: "cyan"
                },
                {
                  step: "Recognition Update",
                  desc: "(learn from experience)",
                  color: "blue"
                }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-${item.color}-500/20 border-2 border-${item.color}-500/50 rounded-full flex items-center justify-center text-${item.color}-400 font-bold`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold text-${item.color}-400`}>{item.step}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  {i < 5 && (
                    <div className="ml-6 my-2">
                      <ArrowRight className="h-5 w-5 text-emerald-500/50" />
                    </div>
                  )}
                </div>
              ))}

              {/* Cycle back */}
              <div className="ml-6 flex items-center gap-2 text-emerald-500/50">
                <RotateCw className="h-5 w-5" />
                <span className="text-sm">[Cycle Repeats]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Result */}
          <div className="bg-slate-800/50 border-2 border-emerald-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-emerald-300 mb-4">Result:</h4>
            <div className="space-y-3 text-slate-300">
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>False recognition → corrected by reality</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>True recognition → reinforced by reality</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Quality providers → naturally receive more allocation</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Poor quality → naturally receives less allocation</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">✓</span>
                <span className="font-semibold">System converges toward quality WITHOUT central planning</span>
              </p>
            </div>
          </div>

          {/* Incentive Structure */}
          <div className="bg-slate-800/50 border-2 border-cyan-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-cyan-300 mb-4">Incentive Structure:</h4>
            <div className="space-y-4 text-slate-300">
              <div className="bg-slate-900/50 rounded p-3">
                <p className="text-sm">
                  <span className="text-red-400">↑</span> Recognition to non-beneficial 
                  <span className="text-red-400"> → ↓</span> allocation from beneficial
                </p>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <p className="text-sm">
                  <span className="text-emerald-400">↑</span> Recognition to high-quality 
                  <span className="text-emerald-400"> → ↑</span> allocation received
                </p>
              </div>
              
              <div className="pt-4 border-t border-cyan-900/30 space-y-2 text-sm">
                <p><span className="text-cyan-400">∴</span> Self-correcting</p>
                <p><span className="text-cyan-400">∴</span> Incentive-compatible</p>
                <p><span className="text-cyan-400">∴</span> Truth-seeking</p>
              </div>
            </div>
          </div>
        </div>

        {/* This Creates */}
        <div className="bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 border-2 border-emerald-500/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-emerald-300 mb-6 text-center">
            This Creates:
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><strong className="text-emerald-300">Abundance of good outcomes</strong> (quality rewarded)</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                <span><strong className="text-emerald-300">Scarcity of bad outcomes</strong> (quality punished)</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Without central planner deciding "good" vs "bad"</span>
              </p>
              <p className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Emergent quality through distributed recognition</span>
              </p>
            </div>
          </div>

          {/* Visual: Upward spiral */}
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <svg viewBox="0 0 200 120" className="w-64 h-32">
                <path
                  d="M 30 100 Q 50 80, 70 75 T 110 60 T 150 35 T 180 15"
                  stroke="url(#spiralGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="spiralGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <polygon points="180,15 175,20 180,17 185,20" fill="#34d399" />
              </svg>
              <p className="text-sm text-emerald-400 font-semibold mt-2">
                Self-Organizing Abundance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

