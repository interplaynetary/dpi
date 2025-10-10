import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Try It Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Free-Association in action with our live demo
          </p>
        </div>
        
        <Card className="overflow-hidden">
          <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-chart-2" />
            </div>
            <a 
              href="https://interplaynetary.github.io/free-association/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-demo-external"
            >
              <span>interplaynetary.github.io/free-association</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="aspect-video bg-background">
            <iframe
              src="https://interplaynetary.github.io/free-association/"
              className="w-full h-full"
              title="Free-Association Demo"
              data-testid="iframe-demo"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
