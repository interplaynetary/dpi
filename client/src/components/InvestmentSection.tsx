import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "COP30 Deployment",
    amount: "$200K",
    description: "Launch at COP30 with full functionality",
    highlighted: true
  },
  {
    name: "Global Scale",
    amount: "$1M",
    description: "Scale to billions of users worldwide",
    roi: "188x cost savings through coordination efficiency"
  }
];

const useOfFunds = [
  { category: "Security Infrastructure", percentage: 40 },
  { category: "AI Integration", percentage: 30 },
  { category: "Custom Interfaces", percentage: 20 },
  { category: "Operations", percentage: 10 }
];

export default function InvestmentSection() {
  return (
    <section id="investment" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Investment Ask</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Funding tiers designed for maximum impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`p-8 ${tier.highlighted ? 'border-primary border-2' : ''} hover-elevate transition-all`}
              data-testid={`card-tier-${index}`}
            >
              {tier.highlighted && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  RECOMMENDED
                </div>
              )}
              <h3 className="font-display font-semibold text-2xl mb-2">{tier.name}</h3>
              <div className="text-5xl font-bold text-primary mb-4">{tier.amount}</div>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              {tier.roi && (
                <div className="bg-chart-2/10 text-chart-2 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                  ROI: {tier.roi}
                </div>
              )}
              <Button className="w-full gap-2" variant={tier.highlighted ? "default" : "outline"} data-testid={`button-invest-${index}`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
        
        <Card className="p-8">
          <h3 className="font-display font-semibold text-2xl mb-8 text-center">Use of Funds</h3>
          <div className="space-y-4">
            {useOfFunds.map((fund, index) => (
              <div key={index} className="space-y-2" data-testid={`fund-${index}`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{fund.category}</span>
                  <span className="text-muted-foreground">{fund.percentage}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${fund.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
