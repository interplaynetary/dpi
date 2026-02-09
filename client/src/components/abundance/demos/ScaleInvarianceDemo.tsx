import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

export default function ScaleInvarianceDemo() {
  const [capacityExp, setCapacityExp] = useState(3); // 10^3 = 1000
  
  const capacity = Math.pow(10, capacityExp);
  
  const recognitions = [
    { name: "Provider A", pct: 30, color: "from-emerald-600 to-emerald-400" },
    { name: "Provider B", pct: 25, color: "from-cyan-600 to-cyan-400" },
    { name: "Provider C", pct: 20, color: "from-blue-600 to-blue-400" },
    { name: "Provider D", pct: 15, color: "from-indigo-600 to-indigo-400" },
    { name: "Provider E", pct: 10, color: "from-purple-600 to-purple-400" }
  ];

  return (
    <Card className="bg-slate-800/30 border-emerald-500/20 rounded-3xl p-8 hover:border-emerald-500/40 transition-all duration-300">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-emerald-300 mb-2">
            Scale Invariance
          </h3>
          <p className="text-sm text-slate-500">
            Adjust capacity - proportions stay constant
          </p>
        </div>
        
        {/* Capacity Slider */}
        <div>
          <div className="flex justify-between items-baseline mb-4">
            <label className="text-sm font-medium text-slate-400">
              Total Capacity
            </label>
            <span className="text-2xl font-bold text-emerald-400 tabular-nums">
              {capacity.toLocaleString()}
            </span>
          </div>
          <Slider
            value={[capacityExp]}
            onValueChange={(val) => setCapacityExp(val[0])}
            min={1}
            max={9}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-600 mt-2 font-mono">
            <span>10</span>
            <span>1K</span>
            <span>1M</span>
            <span>1B</span>
          </div>
        </div>

        {/* Recognition Display */}
        <div className="space-y-4">
          {recognitions.map((rec, i) => (
            <div key={i} className="group">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400 font-medium">{rec.name}</span>
                <div className="flex gap-6 items-baseline tabular-nums">
                  <span className="text-emerald-400 font-semibold">{rec.pct}%</span>
                  <span className="text-slate-500 text-xs">
                    = {((capacity * rec.pct) / 100).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="w-full bg-slate-900/50 rounded-full h-2 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${rec.color} h-2 rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${rec.pct}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="bg-emerald-950/20 border-l-2 border-emerald-500/50 rounded-r-xl p-4">
          <p className="text-sm text-emerald-300 font-medium mb-1">
            Same structure, any scale
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Proportions remain constant while absolute values scale - this is abundance.
          </p>
        </div>
      </div>
    </Card>
  );
}
