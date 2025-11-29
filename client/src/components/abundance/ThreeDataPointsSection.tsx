import { Users, Package, FileText, Repeat } from "lucide-react";

export default function ThreeDataPointsSection() {
  return (
    <section id="how-it-works" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-chart-3/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-emerald-600 font-medium">
            Three simple data points enable coordination
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Recognition Weights */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-2xl flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    1. Recognition Weights
                  </h3>
                  <p className="text-sm text-slate-600">Who contributes to your organizational goals?</p>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p>Each entity allocates <span className="text-blue-600 font-medium">100% of recognition</span> among contributors</p>
                  <p>Non-transferable and dynamically adjustable as relationships evolve</p>
                  <p>Organized as a contribution tree tracking different types of support</p>
                </div>

                <div className="bg-white rounded-xl p-4 font-mono text-xs border border-blue-200">
                  <div className="space-y-1 text-slate-700">
                    <div>Provider A: <span className="text-blue-600">30%</span></div>
                    <div>Provider B: <span className="text-blue-600">25%</span></div>
                    <div>Provider C: <span className="text-blue-600">20%</span></div>
                    <div>Others: <span className="text-blue-600">25%</span></div>
                    <div className="pt-2 border-t border-blue-200 text-blue-700">Total: 100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Capacity */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-3xl p-8 hover:border-emerald-300 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-2xl flex-shrink-0">
                <Package className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                    2. Available Capacity
                  </h3>
                  <p className="text-sm text-slate-600">What resources can you offer?</p>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p>Declare surplus resources (funds, expertise, facilities, time)</p>
                  <p>Specify filters (time windows, locations, resource types)</p>
                  <p>Update dynamically as circumstances change</p>
                </div>

                <div className="bg-white rounded-xl p-4 font-mono text-xs border border-emerald-200">
                  <div className="space-y-1 text-slate-700">
                    <div>Capacity: <span className="text-emerald-600">$50,000</span></div>
                    <div>Type: <span className="text-emerald-600">Funding</span></div>
                    <div>Available: <span className="text-emerald-600">Q1 2025</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Declared Needs */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-8 hover:border-purple-300 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-2xl flex-shrink-0">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    3. Declared Needs
                  </h3>
                  <p className="text-sm text-slate-600">What resources do you require?</p>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p>State specific resource requirements</p>
                  <p>Update in real-time as needs evolve</p>
                  <p><span className="text-purple-600 font-medium">System caps allocations at actual declared needs</span> (preventing accumulation)</p>
                </div>

                <div className="bg-white rounded-xl p-4 font-mono text-xs border border-purple-200">
                  <div className="space-y-1 text-slate-700">
                    <div>Needed: <span className="text-purple-600">$20,000</span></div>
                    <div>For: <span className="text-purple-600">Program delivery</span></div>
                    <div>Received: <span className="text-emerald-600">$12,000</span></div>
                    <div className="text-purple-700">Remaining: <span className="text-purple-600">$8,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mutual Recognition */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-8 hover:border-cyan-300 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 rounded-2xl flex-shrink-0">
                <Repeat className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                    4. Mutual Recognition
                  </h3>
                  <p className="text-sm text-slate-600">Bidirectional acknowledgment of contributions</p>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p>Calculated as the <span className="text-cyan-600 font-medium">minimum of reciprocal recognition percentages</span></p>
                  <p>Taking the minimum ensures proportional reciprocity</p>
                  <p>Self-recognition is valid for time-shifting within your organization</p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-cyan-200">
                  <div className="font-mono text-center space-y-3">
                    <div className="text-sm text-slate-700">
                      <div className="mb-2">If A recognizes B at <span className="text-cyan-600">50%</span></div>
                      <div className="mb-2">and B recognizes A at <span className="text-pink-600">10%</span></div>
                    </div>
                    <div className="text-lg text-cyan-700 pt-3 border-t border-cyan-200">
                      MR(A,B) = min(50%, 10%) = <span className="text-cyan-700 font-bold">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div className="mt-16 max-w-3xl mx-auto bg-emerald-50 border-l-4 border-emerald-400 rounded-r-2xl p-8">
          <p className="text-slate-700 leading-relaxed">
            These three data points - published by each participant - enable the system to calculate
            <span className="text-emerald-600 font-medium"> optimal resource allocation automatically</span>,
            converging in seconds as network state evolves.
          </p>
        </div>
      </div>
    </section>
  );
}
