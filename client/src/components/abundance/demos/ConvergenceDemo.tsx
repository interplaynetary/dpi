import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Pause } from "lucide-react";

interface Provider {
  name: string;
  quality: number;
  recognition: number;
  allocation: number;
}

export default function ConvergenceDemo() {
  const [cycle, setCycle] = useState(0);
  const [running, setRunning] = useState(false);
  
  const initialProviders: Provider[] = [
    { name: "Provider A", quality: 90, recognition: 20, allocation: 0 },
    { name: "Provider B", quality: 70, recognition: 30, allocation: 0 },
    { name: "Provider C", quality: 50, recognition: 25, allocation: 0 },
    { name: "Provider D", quality: 30, recognition: 25, allocation: 0 },
  ];

  const [providers, setProviders] = useState<Provider[]>(initialProviders);

  const runCycle = () => {
    setProviders(prev => {
      const capacity = 1000;
      const totalQuality = prev.reduce((sum, p) => sum + p.quality, 0);
      
      return prev.map(p => ({
        ...p,
        allocation: Math.round((capacity * p.recognition) / 100),
        recognition: Math.round((p.quality / totalQuality) * 100)
      }));
    });

    setCycle(prev => prev + 1);
  };

  const reset = () => {
    setProviders(initialProviders);
    setCycle(0);
    setRunning(false);
  };

  const autoRun = () => {
    setRunning(true);
    let count = 0;
    const interval = setInterval(() => {
      runCycle();
      count++;
      if (count >= 5) {
        clearInterval(interval);
        setRunning(false);
      }
    }, 1000);
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 80) return "from-emerald-600 to-emerald-400";
    if (quality >= 60) return "from-cyan-600 to-cyan-400";
    if (quality >= 40) return "from-orange-600 to-orange-400";
    return "from-red-600 to-red-400";
  };

  return (
    <Card className="bg-slate-800/30 border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-300">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">
            Quality Convergence
          </h3>
          <p className="text-sm text-slate-500">
            Watch recognition align with quality over time
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex gap-2">
          <Button 
            onClick={runCycle} 
            disabled={running}
            size="sm"
            className="bg-cyan-600 hover:bg-cyan-700 h-9 text-sm"
          >
            <Play className="h-3 w-3 mr-2" />
            Run Cycle
          </Button>
          <Button 
            onClick={autoRun} 
            disabled={running}
            size="sm"
            variant="outline"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 h-9 text-sm"
          >
            {running ? <Pause className="h-3 w-3 mr-2" /> : <Play className="h-3 w-3 mr-2" />}
            Auto Run
          </Button>
          <Button 
            onClick={reset} 
            size="sm"
            variant="ghost"
            className="text-slate-400 hover:text-slate-300 h-9 text-sm"
          >
            <RotateCcw className="h-3 w-3 mr-2" />
            Reset
          </Button>
        </div>

        {/* Cycle Counter */}
        <div className="bg-slate-900/50 rounded-xl p-4 text-center">
          <div className="text-xs text-slate-500 mb-1">Cycle</div>
          <div className="text-3xl font-bold text-cyan-400 tabular-nums">{cycle}</div>
        </div>

        {/* Providers Display */}
        <div className="space-y-3">
          {providers.map((p, i) => (
            <div key={i} className="bg-slate-900/30 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-slate-300 text-sm">{p.name}</span>
                <span className="text-xs text-slate-500">Quality: <span className="text-slate-400 font-semibold">{p.quality}/100</span></span>
              </div>
              
              {/* Recognition */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-500">Recognition</span>
                  <span className="text-emerald-400 font-semibold tabular-nums">{p.recognition}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${getQualityColor(p.quality)} h-1.5 rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${p.recognition}%` }}
                  ></div>
                </div>
              </div>

              {cycle > 0 && (
                <div className="text-xs text-slate-500 pt-1">
                  Allocation: <span className="text-cyan-400 font-semibold tabular-nums">{p.allocation}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="bg-cyan-950/20 border-l-2 border-cyan-500/50 rounded-r-xl p-4">
          <p className="text-sm text-cyan-300 font-medium mb-1">
            Self-organizing quality
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Recognition converges toward quality. High-quality providers naturally receive more allocation - no central planner needed.
          </p>
        </div>

        {cycle >= 5 && (
          <div className="bg-emerald-950/20 border-2 border-emerald-500/30 rounded-xl p-4 text-center">
            <p className="text-emerald-300 font-semibold text-sm">
              ✓ Convergence Complete
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Recognition aligned with quality
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
