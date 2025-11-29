import { DollarSign, Users, Network } from "lucide-react";

export default function CompareLogicsSection() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Three Coordination Logics
          </h2>
          <p className="text-xl text-slate-400">
            Compare the Fundamental Approaches
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Markets */}
          <div className="bg-gradient-to-br from-red-950/30 to-orange-950/30 border-2 border-red-500/30 rounded-xl p-6 hover:border-red-400/50 transition-all">
            <div className="text-center mb-6">
              <div className="inline-flex p-4 bg-red-500/20 rounded-full mb-4">
                <DollarSign className="h-10 w-10 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-red-300 mb-2">
                MARKETS
              </h3>
              <p className="text-sm text-slate-400">(Scarcity Management)</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-red-300 mb-1">Primitive:</p>
                <p>Price (scarce money)</p>
              </div>

              <div>
                <p className="font-semibold text-red-300 mb-1">Constraint:</p>
                <p>Budget (limited tokens)</p>
              </div>

              <div>
                <p className="font-semibold text-red-300 mb-1">Logic:</p>
                <p className="italic">"I have $100, you have the good"</p>
              </div>

              <div>
                <p className="font-semibold text-emerald-300 mb-1">Result:</p>
                <p>Efficient allocation of SCARCE resources</p>
              </div>

              <div className="pt-4 border-t border-red-900/30">
                <p className="font-semibold text-red-400 mb-1">Problem:</p>
                <p>Creates artificial scarcity through property</p>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-slate-900/50 rounded-lg p-4 flex justify-center">
              <div className="text-center">
                <div className="flex gap-2 justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs">
                      $
                    </div>
                  ))}
                </div>
                <p className="text-xs text-red-400">Limited Pool</p>
              </div>
            </div>
          </div>

          {/* Hierarchies */}
          <div className="bg-gradient-to-br from-orange-950/30 to-yellow-950/30 border-2 border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all">
            <div className="text-center mb-6">
              <div className="inline-flex p-4 bg-orange-500/20 rounded-full mb-4">
                <Users className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-orange-300 mb-2">
                HIERARCHIES
              </h3>
              <p className="text-sm text-slate-400">(Authority Management)</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-orange-300 mb-1">Primitive:</p>
                <p>Command (scarce positions)</p>
              </div>

              <div>
                <p className="font-semibold text-orange-300 mb-1">Constraint:</p>
                <p>Authority (limited power)</p>
              </div>

              <div>
                <p className="font-semibold text-orange-300 mb-1">Logic:</p>
                <p className="italic">"Boss says allocate thus"</p>
              </div>

              <div>
                <p className="font-semibold text-emerald-300 mb-1">Result:</p>
                <p>Coordinated allocation by CENTRAL planner</p>
              </div>

              <div className="pt-4 border-t border-orange-900/30">
                <p className="font-semibold text-orange-400 mb-1">Problem:</p>
                <p>Bottleneck, information loss, coercion</p>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-slate-900/50 rounded-lg p-4 flex justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 bg-orange-600 rounded-lg"></div>
                <div className="w-1 h-3 bg-orange-700"></div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 bg-orange-700 rounded"></div>
                  ))}
                </div>
                <p className="text-xs text-orange-400 mt-2">Single Control Point</p>
              </div>
            </div>
          </div>

          {/* Free Association */}
          <div className="bg-gradient-to-br from-emerald-950/50 to-cyan-950/50 border-2 border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400/70 transition-all hover:scale-105 shadow-lg shadow-emerald-900/20">
            <div className="text-center mb-6">
              <div className="inline-flex p-4 bg-emerald-500/20 rounded-full mb-4 animate-pulse">
                <Network className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-300 mb-2">
                FREE ASSOCIATION
              </h3>
              <p className="text-sm text-emerald-400">(Abundance Coordination)</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-emerald-300 mb-1">Primitive:</p>
                <p>Recognition (abundant relationship)</p>
              </div>

              <div>
                <p className="font-semibold text-emerald-300 mb-1">Constraint:</p>
                <p>Proportion (100% = complete, not limited)</p>
              </div>

              <div>
                <p className="font-semibold text-emerald-300 mb-1">Logic:</p>
                <p className="italic">"I recognize these relationships proportionally"</p>
              </div>

              <div>
                <p className="font-semibold text-emerald-300 mb-1">Result:</p>
                <p>Distributed coordination through MUTUAL recognition</p>
              </div>

              <div className="pt-4 border-t border-emerald-900/30">
                <p className="font-semibold text-emerald-400 mb-1">Advantage:</p>
                <p className="font-semibold">Scales infinitely, no artificial scarcity</p>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-slate-900/50 rounded-lg p-4 flex justify-center">
              <div className="relative w-32 h-20">
                {/* Network mesh */}
                {[
                  [20, 10], [60, 10], [100, 10],
                  [40, 40], [80, 40],
                  [20, 70], [60, 70], [100, 70]
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-emerald-500 rounded-full"
                    style={{ left: `${pos[0]}px`, top: `${pos[1]}px`, transform: 'translate(-50%, -50%)' }}
                  ></div>
                ))}
                <p className="text-xs text-emerald-400 text-center mt-16">Distributed Network</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 border-2 border-emerald-500/50 rounded-lg px-8 py-4">
            <p className="text-xl text-emerald-400 font-semibold">
              Free Association: The Third Way Beyond Markets & Hierarchies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

