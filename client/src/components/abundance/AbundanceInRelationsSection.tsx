import { Network, Infinity } from "lucide-react";

export default function AbundanceInRelationsSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-50/50 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Main insight */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <Network className="h-12 w-12 text-emerald-600" />
            <Infinity className="h-12 w-12 text-cyan-600" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
            Abundance Is in the Relations
          </h2>
          
          <p className="text-2xl text-slate-700 font-light leading-relaxed">
            Each relationship is a <span className="text-emerald-600 font-medium">proportion</span>, not an absolute quantity.
            <span className="block mt-4 text-emerald-600 font-semibold">
              Therefore, relationships have infinite potential.
            </span>
          </p>
        </div>

        {/* The key contrast */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Absolute quantities */}
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-red-700 mb-6">
              Absolute Quantities
            </h3>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <span className="text-red-600 font-medium">"I have $100"</span>
              </p>
              <p className="text-sm text-slate-600">
                Fixed. Bounded. Scarce.
              </p>

              <div className="pt-6 space-y-3 text-sm border-t border-red-200">
                <p>• More for you = less for me</p>
                <p>• Zero-sum competition</p>
                <p>• Resources are exhaustible</p>
                <p className="text-red-600 font-medium pt-2">Scarcity is inherent</p>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-white rounded-xl p-6 text-center border border-red-200">
              <div className="text-4xl text-red-600 font-bold mb-2">$100</div>
              <div className="text-xs text-slate-500">Finite limit</div>
            </div>
          </div>

          {/* Proportional relations */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
              Proportional Relations
            </h3>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <span className="text-emerald-600 font-medium">"You receive 30% of my capacity"</span>
              </p>
              <p className="text-sm text-slate-600">
                Scale-invariant. Unlimited potential.
              </p>

              <div className="pt-6 space-y-3 text-sm border-t border-emerald-200">
                <p>• Works identically at any scale</p>
                <p>• Non-zero-sum relationships</p>
                <p>• Capacity can grow infinitely</p>
                <p>• Abundance is inherent</p>
              </div>
            </div>

            {/* Visual */}
            <div className="mt-6 bg-white rounded-xl p-6 text-center border border-emerald-200">
              <div className="text-4xl text-emerald-600 font-bold mb-2">30%</div>
              <div className="text-xs text-slate-500">Scales infinitely</div>
            </div>
          </div>
        </div>

        {/* The mathematical truth */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
              Why Relations Have Infinite Potential
            </h3>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div className="bg-emerald-50 rounded-2xl p-6 space-y-4 font-mono text-sm">
                <div>30% of <span className="text-emerald-600">10</span> = <span className="text-cyan-600">3</span></div>
                <div>30% of <span className="text-emerald-600">100</span> = <span className="text-cyan-600">30</span></div>
                <div>30% of <span className="text-emerald-600">1,000</span> = <span className="text-cyan-600">300</span></div>
                <div>30% of <span className="text-emerald-600">1,000,000</span> = <span className="text-cyan-600">300,000</span></div>
                <div className="pt-4 border-t border-emerald-200">
                  <div className="text-emerald-600">30% of <Infinity className="inline h-4 w-4" /> = <Infinity className="inline h-4 w-4" /></div>
                </div>
              </div>

              <p className="text-center text-lg">
                The <span className="text-emerald-600 font-semibold">proportion remains constant</span> while
                the <span className="text-cyan-600 font-semibold">absolute values scale infinitely</span>
              </p>

              <div className="pt-6 border-t border-emerald-200 space-y-4">
                <p>
                  <span className="text-emerald-600 font-semibold">This is abundance:</span> Not that resources
                  are unlimited, but that <span className="text-emerald-600 font-medium">relationships scale without limit</span>.
                </p>
                <p>
                  A 30% recognition relationship works identically whether your capacity is 10 or 10 billion.
                  The relationship structure itself is <span className="text-cyan-600 font-medium">scale-invariant</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Network effects */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-cyan-700 mb-6 text-center">
              Realizing the Infinite Potential
            </h3>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg text-center">
                While relationships have <span className="text-cyan-600 font-medium">infinite potential</span>,
                that potential becomes <span className="text-emerald-600 font-semibold">realized</span> through the network:
              </p>

              <div className="bg-white rounded-2xl p-6 space-y-4 border border-cyan-200">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-cyan-600">↑</div>
                  <div>
                    <div className="text-cyan-700 font-semibold mb-2">More Capacity Distributed</div>
                    <p className="text-sm text-slate-600">
                      Each entity sharing capacity through recognition multiplies what's available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-emerald-600">↑</div>
                  <div>
                    <div className="text-emerald-700 font-semibold mb-2">More Participants Coordinating</div>
                    <p className="text-sm text-slate-600">
                      Each new participant brings relationships, capacity, and coordination potential
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-blue-600">↑</div>
                  <div>
                    <div className="text-blue-700 font-semibold mb-2">More of the Infinite Is Actualized</div>
                    <p className="text-sm text-slate-600">
                      The mathematical potential becomes tangible coordination abundance
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-cyan-700 font-medium">10 participants</div>
                      <div className="text-slate-500 text-xs mt-1">Limited actualized coordination</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-cyan-700 font-medium">1,000 participants</div>
                      <div className="text-slate-500 text-xs mt-1">Significant network effects emerge</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-emerald-700 font-medium">1,000,000 participants</div>
                      <div className="text-slate-500 text-xs mt-1">Massive coordination abundance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-emerald-700 font-medium">Recognition creates value</div>
                      <div className="text-slate-500 text-xs mt-1">Relationships are productive</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cyan-200">
                <p className="text-lg text-center mb-4">
                  <span className="text-cyan-700 font-semibold">The more we coordinate through proportional recognition,</span>
                </p>
                <p className="text-2xl text-emerald-600 font-bold text-center">
                  the more of the infinite potential we realize.
                </p>
                <p className="text-sm text-slate-600 text-center mt-4">
                  Each relationship contains infinite potential • Each participant actualizes more of it
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
