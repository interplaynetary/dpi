import { Card } from "@/components/ui/card";
import { ArrowRight, Flag } from "lucide-react";

export default function ExampleSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Real-World Example</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Country-to-Country Coordination in Action
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4" data-testid="step-recognition">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Mutual Recognition Formed</h3>
                <p className="text-muted-foreground">Tanzania recognizes Brazil's agricultural contributions → Brazil recognizes Tanzania's environmental work</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4" data-testid="step-need">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Need Identified</h3>
                <p className="text-muted-foreground">Tanzania needs agricultural expertise to improve food security</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4" data-testid="step-resource">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Resource Available</h3>
                <p className="text-muted-foreground">Brazil has 5,000 hours of agricultural expertise available</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4" data-testid="step-allocation">
              <div className="w-8 h-8 bg-chart-2/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-chart-2 font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Automatic Priority Allocation</h3>
                <p className="text-muted-foreground">Resources flow based on mutual recognition strength</p>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-3/5 border-primary/20">
            <div className="space-y-8">
              <div className="flex items-center justify-between" data-testid="flow-tanzania">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                    <Flag className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <div className="font-semibold">Tanzania</div>
                    <div className="text-sm text-muted-foreground">Environmental Work</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              
              <div className="h-px bg-border" />
              
              <div className="flex items-center justify-between" data-testid="flow-brazil">
                <ArrowRight className="w-6 h-6 text-primary transform rotate-180" />
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold text-right">Brazil</div>
                    <div className="text-sm text-muted-foreground text-right">Agricultural Expertise</div>
                  </div>
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                    <Flag className="w-6 h-6 text-chart-4" />
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">5,000</div>
                <div className="text-sm text-muted-foreground">Hours Allocated</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
