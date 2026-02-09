import { Eye, Repeat, TrendingUp } from "lucide-react";

export default function HowAbundanceWorksSection() {
  return (
    <section id="how-it-works" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
            How It Works
          </h2>
          <p className="text-lg text-emerald-400 font-medium">
            Three Simple Principles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Principle 1: Recognize */}
          <div className="bg-gradient-to-br from-blue-950/20 to-cyan-950/20 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                <Eye className="h-10 w-10 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                1. RECOGNIZE
              </h3>
              <p className="text-sm text-slate-500 mb-6">(Not Price)</p>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  You allocate <span className="text-blue-400 font-semibold">recognition</span> (30%, 25%, 20%...) based on value
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    <span>Not prices (scarce money)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    <span>Not commands (hierarchical power)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    <span className="font-semibold">But proportional recognition (abundant relationship)</span>
                  </p>
                </div>
              </div>

              {/* Visual: Network with percentages */}
              <div className="mt-6 flex justify-center gap-2">
                {[30, 25, 20, 15, 10].map((pct, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className="w-10 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded flex items-end justify-center pb-1"
                      style={{ height: `${pct + 20}px` }}
                    >
                      <span className="text-xs font-bold">{pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Principle 2: Mutual */}
          <div className="bg-gradient-to-br from-purple-950/20 to-pink-950/20 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                <Repeat className="h-10 w-10 text-purple-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                2. MUTUAL
              </h3>
              <p className="text-sm text-slate-500 mb-6">(Not Unilateral)</p>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  Relationships require <span className="text-purple-400 font-semibold">both parties</span>
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-4">                  
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span>Neither can force relationship</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span>Both must freely participate</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-purple-400 mr-2">→</span>
                      <span className="font-semibold">Symmetry of freedom</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual: Bilateral flow */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center font-bold">
                  A
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  <div className="w-16 h-1 bg-gradient-to-l from-purple-600 to-pink-600"></div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-400 rounded-full flex items-center justify-center font-bold">
                  B
                </div>
              </div>
            </div>
          </div>

          {/* Principle 3: Learn */}
          <div className="bg-gradient-to-br from-emerald-950/20 to-green-950/20 border border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-500 group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 p-4 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                <TrendingUp className="h-10 w-10 text-emerald-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">
                3. LEARN
              </h3>
              <p className="text-sm text-slate-500 mb-6">(Not Fixed)</p>
              
              <div className="space-y-4 text-slate-300">
                <p>
                  Satisfaction feedback adjusts <span className="text-emerald-400 font-semibold">future allocations</span>
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="flex items-start">
                    <span className="text-emerald-400 mr-2">→</span>
                    <span>High quality → more recognition → more allocation</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-emerald-400 mr-2">→</span>
                    <span>Low quality → less recognition → less allocation</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-emerald-400 mr-2">→</span>
                    <span className="font-semibold">System converges toward quality</span>
                  </p>
                </div>
              </div>

              {/* Visual: Upward spiral */}
              <div className="mt-6 relative h-24 w-full flex items-end justify-center">
                <svg viewBox="0 0 100 80" className="w-32 h-24">
                  <path
                    d="M 20 70 Q 30 50, 40 50 T 60 40 T 80 20"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  <polygon points="80,20 75,25 80,22 85,25" fill="#34d399" />
                </svg>
              </div>
              <p className="text-xs text-emerald-400 mt-2">Convergence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

