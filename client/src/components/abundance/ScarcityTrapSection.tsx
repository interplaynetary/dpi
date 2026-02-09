import { TrendingUp, Users } from "lucide-react";

export default function ScarcityTrapSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
            The Scarcity Trap
          </h2>
          <p className="text-lg text-slate-500">
            Current Systems: Built for Scarcity
          </p>
        </div>

        {/* Split visual */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Markets */}
          <div className="bg-gradient-to-br from-red-950/10 to-red-900/5 border border-red-900/30 rounded-2xl p-8 hover:border-red-800/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold text-red-300">Markets</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-red-200 mb-2">The Question:</p>
                <p className="italic">"How do we distribute LIMITED resources?"</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  Prices ration scarcity
                </p>
                <p className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  Higher price = more scarce
                </p>
                <p className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  Zero-sum competition
                </p>
              </div>
            </div>

            {/* Visual: Price graph */}
            <div className="mt-6 pt-6 border-t border-red-900/30">
              <div className="h-32 flex items-end justify-around gap-2">
                {[60, 80, 95, 100].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t transition-all"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-red-400 mt-2">T{i + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-red-400 mt-4 font-mono">
                Scarcity ↑ = Price ↑
              </p>
            </div>
          </div>

          {/* Hierarchies */}
          <div className="bg-gradient-to-br from-orange-950/10 to-orange-900/5 border border-orange-900/30 rounded-2xl p-8 hover:border-orange-800/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Users className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold text-orange-300">Hierarchies</h3>
            </div>
            
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-orange-200 mb-2">The Question:</p>
                <p className="italic">"Who decides the LIMITED allocation?"</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-start">
                  <span className="text-orange-400 mr-2">→</span>
                  Commanders ration scarcity
                </p>
                <p className="flex items-start">
                  <span className="text-orange-400 mr-2">→</span>
                  Authority distributes finite resources
                </p>
                <p className="flex items-start">
                  <span className="text-orange-400 mr-2">→</span>
                  Top-down control
                </p>
              </div>
            </div>

            {/* Visual: Hierarchy pyramid */}
            <div className="mt-6 pt-6 border-t border-orange-900/30">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-700 to-orange-500 rounded flex items-center justify-center">
                    <span className="text-xs">2</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-700 to-orange-500 rounded flex items-center justify-center">
                    <span className="text-xs">3</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[4, 5, 6, 7].map((n) => (
                    <div key={n} className="w-8 h-8 bg-gradient-to-br from-orange-800 to-orange-600 rounded-sm flex items-center justify-center">
                      <span className="text-xs">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-xs text-orange-400 mt-4 font-mono">
                Centralized Control
              </p>
            </div>
          </div>
        </div>

        {/* The Assumption */}
        <div className="max-w-2xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-2xl p-10 text-center">
          <h4 className="text-lg font-medium text-slate-400 mb-6">The Shared Assumption</h4>
          <div className="space-y-3 text-base text-slate-300">
            <p>Resources are inherently scarce</p>
            <p>Coordination = managing scarcity</p>
            <p className="text-red-400 font-semibold text-lg pt-2">More for you = less for me</p>
          </div>
        </div>
      </div>
    </section>
  );
}

