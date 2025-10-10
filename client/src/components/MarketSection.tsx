import { Card } from "@/components/ui/card";
import { Building2, Landmark, Globe2, Building } from "lucide-react";

const sectors = [
  {
    icon: Building2,
    name: "Philanthropic Foundations",
    amount: "$25M",
    orgs: "Gates, MacArthur, Omidyar",
    color: "chart-1"
  },
  {
    icon: Landmark,
    name: "Government Agencies",
    amount: "$21M",
    orgs: "USAID, DFID, GIZ",
    color: "chart-2"
  },
  {
    icon: Globe2,
    name: "Multilateral Organizations",
    amount: "$22M",
    orgs: "World Bank, UNDP",
    color: "chart-3"
  },
  {
    icon: Building,
    name: "Corporate Philanthropy",
    amount: "$5M",
    orgs: "Microsoft, Google.org",
    color: "chart-4"
  }
];

export default function MarketSection() {
  return (
    <section id="impact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Market Opportunity</h2>
          <div className="inline-block">
            <div className="text-6xl font-bold text-primary mb-2">$73M</div>
            <p className="text-lg text-muted-foreground">Funding Pipeline Across 4 Sectors</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-sector-${index}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-${sector.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <sector.icon className={`w-6 h-6 text-${sector.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{sector.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{sector.amount}</div>
                  <p className="text-sm text-muted-foreground">{sector.orgs}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
