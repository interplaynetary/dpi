import ScaleInvarianceDemo from "./demos/ScaleInvarianceDemo";
import MinimumOperatorDemo from "./demos/MinimumOperatorDemo";
import ConvergenceDemo from "./demos/ConvergenceDemo";

export default function InteractiveDemosSection() {
  return (
    <section id="demo" className="py-32 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
            Interactive Demos
          </h2>
          <p className="text-lg text-emerald-400 font-medium">
            Experience the Mathematics of Abundance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <ScaleInvarianceDemo />
          <MinimumOperatorDemo />
        </div>

        <div className="max-w-4xl mx-auto">
          <ConvergenceDemo />
        </div>

        {/* Try It Yourself */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-slate-800/20 via-emerald-900/10 to-slate-800/20 border border-emerald-500/20 rounded-3xl p-10 text-center">
          <h3 className="text-xl font-semibold text-emerald-300 mb-4">
            Try Abundance Coordination Yourself
          </h3>
          <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            These demos show the mathematical principles in action. 
            The actual protocol implements these same principles for real-world coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://github.com/dpi-coalition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all hover:scale-105 duration-200"
            >
              Explore the Protocol
            </a>
            <a 
              href="/join"
              className="px-6 py-3 border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500 rounded-xl font-medium transition-all"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

