import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, DollarSign } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Next Steps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to deploy at COP30. Join us in building the infrastructure humanity needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover-elevate transition-all" data-testid="card-funding">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Funding</h3>
            <p className="text-sm text-muted-foreground mb-6">Tax-deductible via Playnet Open Collective</p>
            <Button className="w-full gap-2" asChild>
              <a href="https://opencollective.com/playnet" target="_blank" rel="noopener noreferrer">
                Contribute <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </Card>
          
          <Card className="p-8 text-center hover-elevate transition-all" data-testid="card-github">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Source Code</h3>
            <p className="text-sm text-muted-foreground mb-6">Explore the open-source implementation</p>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="https://github.com/interplaynetary/free-association" target="_blank" rel="noopener noreferrer">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </Card>
          
          <Card className="p-8 text-center hover-elevate transition-all" data-testid="card-partnership">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Partnerships</h3>
            <p className="text-sm text-muted-foreground mb-6">Technical partnerships & pilot programs</p>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="https://opencollective.com/playnet" target="_blank" rel="noopener noreferrer">
                Get In Touch <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-muted-foreground italic">
            "The infrastructure humanity needs to coordinate effectively already exists. We just need to build it."
          </p>
        </div>
      </div>
    </section>
  );
}
