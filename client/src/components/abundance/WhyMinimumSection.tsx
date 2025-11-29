import { Check } from "lucide-react";

export default function WhyMinimumSection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Why Minimum?
          </h2>
          <p className="text-lg text-muted-foreground">
            Logical necessity from the structure of recognition
          </p>
        </div>

        {/* The insight */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-10">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
            The Unilateral Recognition Contradiction
          </h3>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>Consider the failed structure of unilateral recognition:</p>

            <div className="bg-white rounded-2xl p-6 space-y-3 text-sm border border-emerald-200">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">Master:</span>
                <span>Receives recognition, doesn't give (takes without reciprocity)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">Slave:</span>
                <span>Gives recognition (coerced), doesn't receive (forced labor)</span>
              </div>
              <div className="pt-3 border-t border-emerald-200">
                <div className="text-red-600 font-semibold">∴ Master's recognition is EMPTY</div>
                <div className="text-sm text-slate-600 ml-4 mt-1">
                  (recognized by one who is forced, not free)
                </div>
              </div>
              <div className="text-red-600 font-semibold">
                ∴ Unilateral recognition is self-contradictory
              </div>
              <div className="text-sm text-slate-600 ml-4">
                (needs free recognition but destroys freedom)
              </div>
            </div>

            <p className="text-lg text-emerald-600 font-semibold pt-4">
              ∴ Minimum is the only operator preserving mutual freedom
            </p>
          </div>
        </div>

        {/* Minimum ensures */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-100 rounded-2xl border border-emerald-200">
              <Check className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold text-emerald-700">
              Minimum Ensures
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Neither can unilaterally inflate",
              "Both must contribute (either=0 → MR=0)",
              "Symmetry of freedom (bilateral consent)",
              "Weakest link determines (respects autonomy)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="text-emerald-600 font-bold">✓</div>
                <p className="text-slate-700 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-emerald-200">
            <p className="text-slate-600 text-sm">
              <span className="text-slate-700 font-semibold">Special case:</span> MR(A,A) = A→A
              <span className="block mt-1 text-slate-500">Pure self-determination (no external limit)</span>
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-50 border-l-4 border-emerald-400 rounded-r-2xl p-8">
          <p className="text-slate-700 leading-relaxed">
            <span className="text-emerald-700 font-semibold">This is not a design choice but logical necessity.</span> The 
            minimum operator is uniquely required for genuine mutual recognition - any other operator allows coercion 
            or free-riding, violating the mutual character of the relationship.
          </p>
        </div>
      </div>
    </section>
  );
}
