import { X, Check } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            The Coordination Challenge
          </h2>
          <p className="text-lg text-muted-foreground">
            Existing mechanisms are inadequate for the speed and scale we need
          </p>
        </div>

        {/* Current mechanisms */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Markets */}
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <X className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-700">Markets</h3>
            </div>
            
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>Efficient but <span className="text-red-600 font-medium">exclude those without purchasing power</span></p>
              <p>Prices ration scarce resources</p>
              <p>Zero-sum competition</p>
            </div>
          </div>

          {/* Charity */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <X className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-700">Charity</h3>
            </div>
            
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>Unidirectional flow</p>
              <p><span className="text-orange-600 font-medium">Creates dependency</span> relationships</p>
              <p>No material reciprocity</p>
            </div>
          </div>

          {/* Bureaucracy */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <X className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-700">Bureaucracy</h3>
            </div>
            
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p><span className="text-yellow-600 font-medium">Slow</span> - months for resource flow</p>
              <p>Inflexible decision-making</p>
              <p>High overhead costs</p>
            </div>
          </div>
        </div>

        {/* The solution */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-100 rounded-2xl">
              <Check className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700">
              The Fourth Way: Mutual Recognition
            </h3>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              A coordination infrastructure where entities acknowledge each other's contributions 
              toward shared goals and allocate resources accordingly.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-emerald-600 font-semibold mb-2">Fast</div>
                <p className="text-sm text-slate-600">Allocations converge in seconds, not months</p>
              </div>
              <div>
                <div className="text-emerald-600 font-semibold mb-2">Fair</div>
                <p className="text-sm text-slate-600">Mathematically guaranteed proportional distribution</p>
              </div>
              <div>
                <div className="text-emerald-600 font-semibold mb-2">Efficient</div>
                <p className="text-sm text-slate-600">Resources flow directly based on mutual recognition</p>
              </div>
              <div>
                <div className="text-emerald-600 font-semibold mb-2">Decentralized</div>
                <p className="text-sm text-slate-600">No central authority controls outcomes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example contrast */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="text-red-700 font-semibold mb-4 text-sm">Traditional Crisis Response</div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>• Day 1: Crisis hits</p>
              <p>• Day 30: Coordination bodies convene</p>
              <p>• Day 90: Political negotiations</p>
              <p>• Day 180: Pledges finalized</p>
              <p className="text-red-600 font-medium">• Day 270+: Resources begin flowing</p>
            </div>
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6">
            <div className="text-emerald-700 font-semibold mb-4 text-sm">Free Association Response</div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>• Day 1: Entity declares need</p>
              <p>• <span className="text-emerald-600 font-medium">Immediately</span>: System recalculates optimal allocation</p>
              <p>• Day 1-2: Resource commitments transparent</p>
              <p className="text-emerald-700 font-semibold">• Day 2-3: First resources arrive</p>
              <p className="text-slate-600">• Ongoing: Continuous adaptation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

