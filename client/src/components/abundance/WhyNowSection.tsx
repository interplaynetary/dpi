import { Server, BookOpen, AlertTriangle, Zap } from "lucide-react";

export default function WhyNowSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Why Now?
          </h2>
          <p className="text-xl text-emerald-400">
            The Technology-Philosophy Convergence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technology Ready */}
          <div className="bg-gradient-to-br from-blue-950/30 to-cyan-950/30 border-2 border-blue-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Server className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-300">
                The Technology is Ready
              </h3>
            </div>

            <div className="space-y-3 text-slate-300">
              <p className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Distributed systems (no central bottleneck)</span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Real-time data (satisfaction feedback)</span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Cryptographic identity (non-transferable recognition)</span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Event-driven architectures (asynchronous coordination)</span>
              </p>
            </div>
          </div>

          {/* Philosophy Clear */}
          <div className="bg-gradient-to-br from-emerald-950/30 to-green-950/30 border-2 border-emerald-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-lg">
                <BookOpen className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-300">
                The Philosophy is Clear
              </h3>
            </div>

            <div className="space-y-3 text-slate-300">
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Logical necessity proven (minimum operator, proportional structure)</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Three necessity types distinguished (logical, functional, definitional)</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Scale invariance demonstrated (∞ = 100% of ∞)</span>
              </p>
              <p className="flex items-start">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Convergence properties proven (quality-seeking feedback)</span>
              </p>
            </div>
          </div>

          {/* Need is Urgent */}
          <div className="bg-gradient-to-br from-orange-950/30 to-red-950/30 border-2 border-orange-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-orange-300">
                The Need is Urgent
              </h3>
            </div>

            <div className="space-y-3 text-slate-300">
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Markets create artificial scarcity</span>
              </p>
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Hierarchies create bottlenecks and coercion</span>
              </p>
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Climate crisis requires abundance thinking</span>
              </p>
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>Post-scarcity technology needs post-scarcity coordination</span>
              </p>
            </div>
          </div>

          {/* Opportunity */}
          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-2 border-purple-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-purple-300">
                The Opportunity
              </h3>
            </div>

            <div className="space-y-3 text-slate-300">
              <p className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>First coordination logic beyond markets & hierarchies</span>
              </p>
              <p className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>Mathematically proven to scale infinitely</span>
              </p>
              <p className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span>Self-organizing, self-correcting, self-improving</span>
              </p>
              <p className="flex items-start">
                <span className="text-purple-400 mr-2">→</span>
                <span className="font-semibold">Ready for implementation</span>
              </p>
            </div>
          </div>
        </div>

        {/* Timeline visual */}
        <div className="bg-slate-800/50 border-2 border-emerald-500/30 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Past */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 border-2 border-red-500/50 rounded-full mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-red-300 mb-2">Past</h4>
              <p className="text-sm text-slate-400">Markets & Hierarchies</p>
              <p className="text-xs text-slate-500 mt-1">(Scarcity Logic)</p>
            </div>

            {/* Arrow */}
            <div className="text-3xl text-emerald-500">→</div>

            {/* Present */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500/50 rounded-full mb-4 animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-emerald-300 mb-2">Present</h4>
              <p className="text-sm text-slate-400">Technology Ready</p>
              <p className="text-xs text-emerald-400 mt-1 font-semibold">(Convergence Point)</p>
            </div>

            {/* Arrow */}
            <div className="text-3xl text-emerald-500">→</div>

            {/* Future */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 border-2 border-cyan-500/50 rounded-full mb-4">
                <span className="text-2xl">∞</span>
              </div>
              <h4 className="font-bold text-cyan-300 mb-2">Future</h4>
              <p className="text-sm text-slate-400">Abundance Economy</p>
              <p className="text-xs text-slate-500 mt-1">(Free Association)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

