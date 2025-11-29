import { Lock, Shield, TrendingUp } from "lucide-react";

export default function NonTransferableSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Free and Equal Association
          </h2>
          <p className="text-2xl text-emerald-600 font-medium">
            Full Autonomy and Sovereignty
          </p>
        </div>

        {/* Core principles */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          {/* Full autonomy to allocate */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-10">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-3xl text-center font-semibold text-emerald-700">
                You have full autonomy to allocate your capacities as you wish
              </p>

              <div className="pt-6 border-t border-emerald-200 space-y-4 text-lg">
                <p>
                  <span className="text-emerald-600 font-medium">Your capacity, your decision.</span> You 
                  choose who receives resources, how much, and based on what criteria.
                </p>
                <p>
                  No central authority dictates allocation. No market forces compel you.
                  <span className="text-cyan-600 font-medium"> You are fully sovereign</span> over 
                  your resource decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Recognition is non-transferable */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-10">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-3xl text-center font-semibold text-cyan-700">
                You always keep your power to determine what's valuable
              </p>

              <div className="pt-6 border-t border-cyan-200 space-y-4 text-lg">
                <p>
                  Your <span className="text-cyan-600 font-medium">recognition of contributions</span> cannot 
                  be taken, bought, sold, or transferred.
                </p>
                <p>
                  Whether you allocate capacity or not, you maintain
                  <span className="text-emerald-600 font-medium"> full sovereignty</span> over 
                  who you recognize as valuable.
                </p>
                <p>
                  <span className="text-cyan-600 font-medium">Distributing capacity doesn't diminish your power.</span> Your 
                  autonomy to recognize contributions remains completely yours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contrast with traditional models */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional: Giving capacity = giving power */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <Lock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-red-700">
                Traditional Models
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-red-600 font-semibold mb-3">Equity/Ownership</div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Give $100,000 → Get 10% equity</p>
                  <p>• <span className="text-red-600">You've given away permanent ownership</span></p>
                  <p>• That 10% can be sold, transferred, inherited</p>
                  <p>• <span className="text-red-600">Your initial contribution becomes someone else's power</span></p>
                </div>
              </div>

              <div className="pt-6 border-t border-red-200">
                <div className="text-orange-600 font-semibold mb-3">Charity/Grants</div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Give resources unilaterally</p>
                  <p>• <span className="text-orange-600">No ongoing relationship or recognition</span></p>
                  <p>• Can't adjust if quality changes</p>
                  <p>• <span className="text-orange-600">One-time transfer, no continued influence</span></p>
                </div>
              </div>

              <div className="bg-red-100 rounded-xl p-4 mt-6 border border-red-200">
                <p className="text-red-700 font-semibold text-sm text-center">
                  Giving capacity = giving away power
                </p>
              </div>
            </div>
          </div>

          {/* Free Association: Capacity flows, recognition stays */}
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-700">
                Free Association
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-emerald-600 font-semibold mb-3">Recognition-Based Coordination</div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Allocate 30% of capacity based on recognition</p>
                  <p>• <span className="text-emerald-600">You keep your 100% recognition budget</span></p>
                  <p>• Recognition cannot be sold, transferred, or taken</p>
                  <p>• <span className="text-emerald-600">You always control who you recognize</span></p>
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-200">
                <div className="text-cyan-600 font-semibold mb-3">Dynamic & Sovereign</div>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <p>• Adjust recognition as quality changes</p>
                  <p>• <span className="text-cyan-600">No one can force your recognition</span></p>
                  <p>• No one can buy your recognition</p>
                  <p>• <span className="text-cyan-600">Complete autonomy over your 100%</span></p>
                </div>
              </div>

              <div className="bg-emerald-100 rounded-xl p-4 mt-6 border border-emerald-200">
                <p className="text-emerald-700 font-semibold text-sm text-center">
                  Capacity flows, power remains
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why this matters */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
              Why Non-Transferability Matters
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-emerald-600 font-semibold mb-2">Prevents Power Concentration</div>
                    <p className="text-sm text-slate-600">
                      Can't accumulate others' recognition. Each entity remains sovereign over their own 100%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-cyan-600 font-semibold mb-2">Maintains Autonomy</div>
                    <p className="text-sm text-slate-600">
                      Your recognition reflects YOUR evaluation of contributions, not market prices or coercion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-blue-600 font-semibold mb-2">Enables Dynamic Adjustment</div>
                    <p className="text-sm text-slate-600">
                      Change recognition as quality changes. No permanent claims from past contributions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-purple-600 font-semibold mb-2">Protects Self-Determination</div>
                    <p className="text-sm text-slate-600">
                      Your capacity can grow infinitely without giving away decision-making power.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-emerald-200 text-center">
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="text-emerald-600 font-semibold">This is abundance in power:</span> You can 
                distribute unlimited capacity through recognition without ever diminishing your sovereignty 
                over who receives that recognition.
              </p>
            </div>
          </div>
        </div>

        {/* Bridge to next section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 rounded-3xl p-10">
            <div className="space-y-6 text-center">
              <p className="text-2xl text-slate-700 leading-relaxed">
                <span className="text-emerald-600 font-semibold">You are free to allocate however you choose.</span>
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                You might allocate based on personal preference, random selection, hierarchy, or any other criteria.
              </p>

              <div className="pt-6 border-t border-emerald-200">
                <p className="text-xl text-slate-700 leading-relaxed">
                  <span className="text-cyan-600 font-semibold">We propose a specific approach:</span>
                </p>
                <p className="text-lg text-emerald-600 font-medium mt-4">
                  Allocate capacities proportional to recognition and mutual recognition
                </p>
                <p className="text-base text-slate-600 mt-4">
                  This creates self-organizing coordination with mathematical properties that benefit all participants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mathematical property note */}
        <div className="mt-8 max-w-3xl mx-auto bg-cyan-50 border-l-4 border-cyan-400 rounded-r-2xl p-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <span className="text-cyan-700 font-semibold">Why non-transferability matters:</span> If 
            recognition could be transferred, bought, or coerced, it would no longer represent genuine mutual acknowledgment.
            Recognition must be <span className="text-cyan-600 font-medium">inalienable</span> to maintain the autonomy that makes association truly "free."
          </p>
        </div>
      </div>
    </section>
  );
}
