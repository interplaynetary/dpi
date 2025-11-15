import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Try it out!</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Drag a square up/down to increase/decrease its priority! To see more advanced features like mutual-recognition and capacity allocation create a free account!</p>
        </div>
        
        <Card className="overflow-hidden">
          <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-chart-2" />
            </div>
            <a 
              href="https://free.openassociation.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-demo-external"
            >
              <span>free.openassociation.org</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-background" style={{ minHeight: '600px', height: '70vh' }}>
            <iframe
              src="https://free.openassociation.org/"
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
