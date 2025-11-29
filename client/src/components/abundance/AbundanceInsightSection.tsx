import { useState, useEffect } from "react";
import { Infinity } from "lucide-react";

export default function AbundanceInsightSection() {
  const [scale, setScale] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scales = [
    { value: 10, size: 80, label: "Small" },
    { value: 1000, size: 140, label: "Medium" },
    { value: 1000000, size: 200, label: "Large" }
  ];

  const currentScale = scales[scale];

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            The Abundance Insight
          </h2>
          <p className="text-lg text-slate-500">
            Free Association: Built for Abundance
          </p>
        </div>

        {/* The Revolutionary Insight */}
        <div className="bg-gradient-to-br from-emerald-950/20 to-cyan-950/20 border border-emerald-500/20 rounded-3xl p-12 mb-16">
          <h3 className="text-2xl font-semibold text-emerald-300 mb-10 text-center">
            The Revolutionary Insight
          </h3>
          
          <div className="space-y-8">
            {/* Mathematical formula */}
            <div className="text-center">
              <div className="inline-flex items-center gap-6 bg-slate-900/50 px-16 py-10 rounded-2xl border border-emerald-500/30">
                <Infinity className="h-14 w-14 text-emerald-400" />
                <span className="text-4xl font-light text-slate-400">=</span>
                <span className="text-5xl font-bold text-emerald-400">100%</span>
                <span className="text-2xl font-light text-slate-500">of</span>
                <Infinity className="h-14 w-14 text-emerald-400" />
              </div>
            </div>

            {/* Explanation */}
            <div className="max-w-3xl mx-auto space-y-4 text-center text-lg text-slate-300">
              <p>Every amount equals <span className="text-emerald-400 font-semibold">100% of itself</span></p>
              <p>Therefore: Infinity equals <span className="text-emerald-400 font-semibold">100% of itself</span></p>
              <p className="text-xl text-emerald-300 font-semibold">
                The infinite exists AS finite proportionality
              </p>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-800/30 border border-emerald-500/20 rounded-2xl p-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-emerald-300 mb-6">This Means:</h4>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Works identically whether capacity is 10 or 10,000,000</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Not about "limited resources"</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>About proportional relationships</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Scales infinitely without changing structure</span>
                </p>
              </div>
            </div>
          </div>

          {/* Animated scale visualization */}
          <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-8 flex flex-col items-center justify-center">
            <div className="relative w-full h-64 flex items-center justify-center">
              <div 
                className="absolute rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 border-2 border-emerald-400/50 flex items-center justify-center transition-all duration-1000 ease-in-out"
                style={{ 
                  width: `${currentScale.size}px`, 
                  height: `${currentScale.size}px` 
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">100%</div>
                  <div className="text-sm text-slate-400 mt-1">= {currentScale.value.toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-cyan-400 font-mono font-semibold">
                {currentScale.label} Scale
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Structure identical at all scales
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800/30 via-emerald-900/10 to-slate-800/30 border-l-2 border-emerald-500/50 rounded-r-2xl p-10">
          <blockquote className="text-base text-slate-300 italic font-light leading-relaxed">
            "The protocol is not fundamentally about scarcity but about <span className="text-emerald-400 font-semibold not-italic">proportional reasoning</span> as a coordination logic. This is why it can <span className="text-emerald-400 font-semibold not-italic">scale infinitely</span> – proportions work identically at any scale."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

