import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Scale, RefreshCw } from "lucide-react";

const metrics = [
  {
    icon: Zap,
    metric: "Real-Time",
    value: "Seconds",
    comparison: "vs. 90+ Days",
    description: "Convergence to optimal allocation within seconds of any need update",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10"
  },
  {
    icon: TrendingUp,
    metric: "Minimal",
    value: "Overhead",
    comparison: "P2P Design",
    description: "Resources flow directly between participants - no central intermediary taking a cut",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Scale,
    metric: "< 0.3",
    value: "Gini Coefficient",
    comparison: "Fair Distribution",
    description: "Allocation proportional to need and mutual recognition - no concentration",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10"
  },
  {
    icon: RefreshCw,
    metric: "Immediate",
    value: "Re-Convergence",
    comparison: "Continuous",
    description: "System adapts instantly when new crises emerge or needs change",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10"
  }
];

export default function MetricsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Measurable Outcomes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empirically validated success metrics for coordination infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {metrics.map((item, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-metric-${index}`}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">{item.comparison}</span>
                </div>
                <div className="space-y-1">
                  <div className={`text-3xl md:text-4xl font-bold ${item.color}`}>{item.metric}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/30">
          <div className="text-center space-y-3">
            <h3 className="font-display font-bold text-2xl">Design Characteristics</h3>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">Scalable</div>
                <div className="text-sm text-muted-foreground">Peer-to-Peer</div>
                <div className="text-xs text-muted-foreground">From local communities to global institutions</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">Proven</div>
                <div className="text-sm text-muted-foreground">Mathematically</div>
                <div className="text-xs text-muted-foreground">Guaranteed fairness, convergence, strategy-proofness</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">Open</div>
                <div className="text-sm text-muted-foreground">Source & Access</div>
                <div className="text-xs text-muted-foreground">AGPL-3.0 license, participate on your terms</div>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}

