import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";

type Operator = "min" | "avg" | "max" | "product";

export default function MinimumOperatorDemo() {
  const [aToB, setAToB] = useState(60);
  const [bToA, setBToA] = useState(40);
  const [operator, setOperator] = useState<Operator>("min");

  const calculateMR = (op: Operator, a: number, b: number): number | string => {
    switch (op) {
      case "min":
        return Math.min(a, b);
      case "avg":
        return Math.round((a + b) / 2);
      case "max":
        return Math.max(a, b);
      case "product":
        return (a * b) / 100;
    }
  };

  const result = calculateMR(operator, aToB, bToA);

  const getIssue = (op: Operator): { valid: boolean; message: string } => {
    switch (op) {
      case "min":
        return {
          valid: true,
          message: "Prevents inflation, requires bilateral consent, preserves symmetry"
        };
      case "avg":
        return {
          valid: false,
          message: "Party A can inflate unilaterally - not genuinely mutual"
        };
      case "max":
        return {
          valid: false,
          message: "Higher value dominates - not mutual recognition"
        };
      case "product":
        return {
          valid: false,
          message: "Wrong type - produces non-proportional result"
        };
    }
  };

  const issue = getIssue(operator);

  return (
    <Card className="bg-slate-800/30 border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            Minimum Operator
          </h3>
          <p className="text-sm text-slate-500">
            Why only min() preserves mutual freedom
          </p>
        </div>
        
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-sm font-medium text-slate-400">
                A → B Recognition
              </label>
              <span className="text-lg font-bold text-blue-400 tabular-nums">{aToB}%</span>
            </div>
            <Slider
              value={[aToB]}
              onValueChange={(val) => setAToB(val[0])}
              min={0}
              max={100}
              step={5}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-sm font-medium text-slate-400">
                B → A Recognition
              </label>
              <span className="text-lg font-bold text-pink-400 tabular-nums">{bToA}%</span>
            </div>
            <Slider
              value={[bToA]}
              onValueChange={(val) => setBToA(val[0])}
              min={0}
              max={100}
              step={5}
              className="w-full"
            />
          </div>
        </div>

        {/* Operator Selector */}
        <Tabs value={operator} onValueChange={(val) => setOperator(val as Operator)} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50">
            <TabsTrigger value="min" className="data-[state=active]:bg-emerald-600">min</TabsTrigger>
            <TabsTrigger value="avg" className="data-[state=active]:bg-slate-700">avg</TabsTrigger>
            <TabsTrigger value="max" className="data-[state=active]:bg-slate-700">max</TabsTrigger>
            <TabsTrigger value="product" className="data-[state=active]:bg-slate-700">×</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Calculation Display */}
        <div className="bg-slate-900/50 rounded-2xl p-6">
          <div className="font-mono text-center space-y-2">
            <div className="text-sm text-slate-500 mb-3">Mutual Recognition =</div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl text-blue-400">{aToB}%</span>
              <span className="text-lg text-slate-600">{operator === "product" ? "×" : operator}</span>
              <span className="text-2xl text-pink-400">{bToA}%</span>
            </div>
            <div className="pt-3 border-t border-slate-800 mt-3">
              <span className="text-3xl text-emerald-400 font-bold">{result}%</span>
            </div>
          </div>
        </div>

        {/* Issue Display */}
        <div className={`border-l-2 rounded-r-xl p-4 ${
          issue.valid
            ? 'bg-emerald-950/20 border-emerald-500/50' 
            : 'bg-red-950/20 border-red-500/50'
        }`}>
          <div className="flex items-start gap-2">
            {issue.valid ? (
              <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <p className={`text-sm leading-relaxed ${
              issue.valid ? 'text-emerald-300' : 'text-red-300'
            }`}>
              {issue.message}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
