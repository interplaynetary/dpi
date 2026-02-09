import { Infinity, TrendingUp, Target, Network } from "lucide-react";

export default function AbundancePropertiesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            The Abundance Properties
          </h2>
          <p className="text-xl text-emerald-400">
            Why This Creates Abundance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scale Invariance */}
          <div className="bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-2 border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Infinity className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-300">
                Scale Invariance
              </h3>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Works identically with 10 people or 10 million people
              </p>
              <p className="leading-relaxed">
                Works identically with $10 capacity or $10 billion capacity
              </p>

              <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm border-l-4 border-cyan-500">
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>No centralized bottleneck</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span>No coordination overhead growth</span>
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">→</span>
                  <span className="font-semibold text-cyan-300">Infinite scalability</span>
                </p>
              </div>

              {/* Visual: Flat coordination cost */}
              <div className="mt-6 bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-end h-24 gap-1">
                  {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t" style={{ height: '100%' }}></div>
                  ))}
                </div>
                <p className="text-xs text-cyan-400 text-center mt-2 font-mono">
                  Coordination Cost: Constant ∞
                </p>
              </div>
            </div>
          </div>

          {/* Non-Zero-Sum */}
          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-2 border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-purple-300">
                Non-Zero-Sum
              </h3>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Your recognition of others doesn't diminish them
              </p>
              <p className="leading-relaxed">
                Their recognition of you creates mutual benefit
              </p>

              <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm border-l-4 border-purple-500">
                <p className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span>More relationships = more coordination</span>
                </p>
                <p className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span>More quality = more allocation to quality</span>
                </p>
                <p className="flex items-start">
                  <span className="text-purple-400 mr-2">→</span>
                  <span className="font-semibold text-purple-300">Growth begets growth</span>
                </p>
              </div>

              {/* Visual: Both arrows up */}
              <div className="mt-6 bg-slate-900/50 rounded-lg p-6 flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-t from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">↑</span>
                  </div>
                  <p className="text-xs text-purple-400">You</p>
                </div>
                <div className="flex items-center text-2xl text-purple-400">+</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-t from-pink-600 to-pink-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">↑</span>
                  </div>
                  <p className="text-xs text-pink-400">Them</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Convergence */}
          <div className="bg-gradient-to-br from-emerald-950/30 to-green-950/30 border-2 border-emerald-500/30 rounded-xl p-8 hover:border-emerald-400/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <Target className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-300">
                Quality Convergence
              </h3>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                High satisfaction → increased recognition → more allocation
              </p>

              <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm border-l-4 border-emerald-500">
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">→</span>
                  <span>Best providers naturally get more capacity</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">→</span>
                  <span>Quality is rewarded automatically</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">→</span>
                  <span className="font-semibold text-emerald-300">Excellence emerges without central planning</span>
                </p>
              </div>

              {/* Visual: Upward ratchet */}
              <div className="mt-6 bg-slate-900/50 rounded-lg p-6">
                <div className="flex items-end h-24 gap-2">
                  {[40, 55, 70, 85, 95].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t transition-all"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-emerald-400 mt-2">T{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-emerald-400 text-center mt-3 font-mono">
                  Quality ↑ over time
                </p>
              </div>
            </div>
          </div>

          {/* No Artificial Scarcity */}
          <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border-2 border-blue-500/30 rounded-xl p-8 hover:border-blue-400/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Network className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300">
                No Artificial Scarcity
              </h3>
            </div>

            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Recognition is not money (limited tokens)
              </p>
              <p className="leading-relaxed">
                Recognition is relationship (unlimited potential)
              </p>

              <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm border-l-4 border-blue-500">
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>Create new relationships freely</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span>No zero-sum competition for slots</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-2">→</span>
                  <span className="font-semibold text-blue-300">Abundance of connection</span>
                </p>
              </div>

              {/* Visual: Network expanding */}
              <div className="mt-6 bg-slate-900/50 rounded-lg p-6">
                <div className="flex justify-center items-center gap-8">
                  <div className="relative">
                    {/* Center node */}
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full"></div>
                    {/* Surrounding nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const x = Math.cos((angle * Math.PI) / 180) * 40;
                      const y = Math.sin((angle * Math.PI) / 180) * 40;
                      return (
                        <div
                          key={i}
                          className="absolute w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-xs text-blue-400 text-center mt-4 font-mono">
                  Limitless Connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

