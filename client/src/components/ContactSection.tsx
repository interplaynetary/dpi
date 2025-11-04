import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, DollarSign, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const devEmail = "ruzgar@playnet.lol";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(devEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl">The Invitation</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The technology exists. The code works. The need is undeniable. Join us in deploying infrastructure that aligns capacity with priorities and satisfies needs through mutual recognition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-funding">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Funding</h3>
            <p className="text-sm text-muted-foreground mb-6">Tax-deductible via Playnet Open Collective</p>
            <Button className="w-full gap-2" asChild>
              <a href="https://opencollective.com/playnet" target="_blank" rel="noopener noreferrer">
                Contribute <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-github">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Source Code</h3>
            <p className="text-sm text-muted-foreground mb-6">Explore the open-source implementation</p>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="https://github.com/interplaynetary/free-association" target="_blank" rel="noopener noreferrer">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-partnership">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Partnerships</h3>
            <p className="text-sm text-muted-foreground mb-6">Technical partnerships & pilot programs</p>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full gap-2" asChild>
                <a href={`mailto:${devEmail}`}>
                  Get In Touch <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full gap-2"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
