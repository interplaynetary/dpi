import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

export default function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Try it out!</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Drag a square up/down to increase/decrease its priority! To see more advanced features like capacity allocation create a free account!
          </p>
          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <a
                href="https://docs.openassociation.org"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-demo-docs"
              >
                <BookOpen className="w-3 h-3" />
                Developer Documentation
              </a>
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-chart-2" />
            </div>
            <a
              href="https://free.playnet.lol/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-demo-external"
            >
              <span>free.playnet.lol</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-background" style={{ minHeight: '600px', height: '70vh' }}>
            <iframe
              src="https://free.playnet.lol/"
              className="w-full h-full"
              title="Free-Association Demo"
              data-testid="iframe-demo"
            />
          </div>
        </Card>

        {/* Map Demo */}
        <Card className="overflow-hidden mt-8">
          <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-chart-2" />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/80 font-medium hidden sm:inline-block">Interactive Map Visualization</span>
              <a
                href="https://free.playnet.lol/map"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-demo-map-external"
              >
                <span>free.playnet.lol/map</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="bg-background" style={{ minHeight: '600px', height: '70vh' }}>
            <iframe
              src="https://free.playnet.lol/map"
              className="w-full h-full"
              title="Interactive Map Visualization"
              data-testid="iframe-demo-map"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
