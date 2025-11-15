import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function COP30DemosSection() {
  return (
    <section id="cop30-demos" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            COP30 Organization Demos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All data is for demonstration purposes only.
          </p>
        </div>

        {/* Embedded Demo */}
        <Card className="overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-primary/10 to-chart-2/10 border-b flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Interactive Demo Platform</h3>
              <p className="text-sm text-muted-foreground">
                Explore organizations and their coordination needs
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <a 
                href="https://free.openassociation.org/org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                Open in New Tab <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <iframe
              src="https://free.openassociation.org/org"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="COP30 Organization Demos"
              allow="fullscreen"
              loading="lazy"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

