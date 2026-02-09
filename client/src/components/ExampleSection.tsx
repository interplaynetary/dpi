import { Card } from "@/components/ui/card";
import { FloatingSDG } from "@/components/FloatingSDG";

export default function ExampleSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* SDG Icons Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <FloatingSDG sdgNumber={9} size="md" />
        <FloatingSDG sdgNumber={12} size="lg" />
        <FloatingSDG sdgNumber={17} size="sm" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Crisis Response: Before & After</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From climate disasters to pandemics - see how Free Association transforms months-long political processes into real-time mathematical convergence
          </p>
        </div>
        
        <Card className="p-6 md:p-8 max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-lg">Traditional System</th>
                  <th className="text-left py-4 px-4 font-bold text-lg text-primary">Free Association System</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">
                    <strong className="text-foreground">Day 1:</strong> Crisis hits
                  </td>
                  <td className="py-4 px-4 text-primary">
                    <strong>Day 1:</strong> Entity declares "$1B needed"
                  </td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 text-muted-foreground">
                    <strong className="text-foreground">Day 30:</strong> Emergency sessions convene
                  </td>
                  <td className="py-4 px-4 text-primary font-medium">
                    <strong>Immediately:</strong> System converges to new optimal allocation
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">
                    <strong className="text-foreground">Day 90:</strong> Negotiations drag on
                  </td>
                  <td className="py-4 px-4 text-primary font-medium">
                    <strong>Day 1-2:</strong> Commitments transparent and automatic
                  </td>
                </tr>
                <tr className="border-b border-border bg-muted/20">
                  <td className="py-4 px-4 text-muted-foreground">
                    <strong className="text-foreground">Day 180:</strong> Pledges finalized
                  </td>
                  <td className="py-4 px-4 text-primary font-medium">
                    <strong>Day 2-3:</strong> First resources arrive
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-muted-foreground">
                    <strong className="text-foreground">Day 270:</strong> Resources begin to flow
                  </td>
                  <td className="py-4 px-4 text-primary font-medium">
                    <strong>Ongoing:</strong> Continuous updates, real-time re-convergence
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-lg md:text-xl italic text-muted-foreground">
              This transforms crisis response from a <strong className="text-foreground">months-long political process</strong> into <strong className="text-primary">real-time mathematical convergence</strong>.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
