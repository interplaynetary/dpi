import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NetworkBackground } from "@/components/NetworkBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function Join() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <NetworkBackground />
      <div className="relative z-10 overflow-x-hidden">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h1 className="font-display font-bold text-4xl md:text-6xl bg-gradient-to-r from-primary via-chart-1 to-chart-3 bg-clip-text text-transparent">
                Free Association Coalition
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Summary & Pledge
              </p>
              <p className="text-lg text-muted-foreground italic">
                A Digital Public Infrastructure for Planetary Coordination
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* The Problem */}
            <Card className="p-8">
              <h2 className="font-display font-bold text-3xl mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                From climate adaptation to pandemic response, our coordination mechanisms are failing. Pledges stall in bureaucracy, emergency resources are paralyzed by political negotiation, and aid flows are inequitable. The challenge isn't lack of resources or goodwill — it's inadequate coordination infrastructure. We're solving 21st-century polycrises with 20th-century tools.
              </p>
            </Card>

            {/* The Solution */}
            <Card className="p-8">
              <h2 className="font-display font-bold text-3xl mb-6">The Solution: A Fourth Economic Relationship</h2>
              <p className="text-muted-foreground mb-6">
                Free Association introduces <strong className="text-foreground">Mutual Recognition</strong> as a new mode of coordination, moving beyond the limitations of existing systems:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Relationship</th>
                      <th className="text-left py-3 px-4 font-semibold">Logic</th>
                      <th className="text-left py-3 px-4 font-semibold">Limitation</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Market</td>
                      <td className="py-3 px-4 text-muted-foreground">"I'll give you X if you give me Y"</td>
                      <td className="py-3 px-4 text-muted-foreground">Excludes those without purchasing power</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Charity</td>
                      <td className="py-3 px-4 text-muted-foreground">"I'll give you X because you need it"</td>
                      <td className="py-3 px-4 text-muted-foreground">Unsustainable, creates dependency</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Bureaucracy</td>
                      <td className="py-3 px-4 text-muted-foreground">"Authority decides who gets what"</td>
                      <td className="py-3 px-4 text-muted-foreground">Slow, political, inflexible</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="py-3 px-4 font-bold">Free Association</td>
                      <td className="py-3 px-4 font-medium">"I recognize your contribution; you recognize mine"</td>
                      <td className="py-3 px-4 font-medium text-primary">Enables voluntary, fair, self-organizing coordination</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-muted-foreground mt-6">
                This peer-to-peer Digital Public Infrastructure (DPI) allows any entity—from nation-states and UN agencies to philanthropic foundations, impact funds, and grassroots organizations—to coordinate resources through transparent, automatic allocation based on mutual recognition.
              </p>
            </Card>

            {/* How It Works */}
            <Card className="p-8">
              <h2 className="font-display font-bold text-3xl mb-4">How It Works: Three Data Points + One Algorithm</h2>
              <p className="text-muted-foreground mb-6">Each participant publishes:</p>
              <ol className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">1.</span>
                  <span><strong>Recognition Weights:</strong> Who contributes to my goals? (e.g., Partner A 20%, Partner B 30%, totaling 100%)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">2.</span>
                  <span><strong>Capacity:</strong> What resources can I offer? (e.g., $500M available)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">3.</span>
                  <span><strong>Stated Need:</strong> What resources do I require? (e.g., $2B needed)</span>
                </li>
              </ol>
              <p className="text-muted-foreground">
                An algorithm automatically computes optimal resource flows, prioritizing allocations between entities that mutually recognize each other. The system converges to fair and stable equilibrium in <strong className="text-foreground">real-time</strong>, adapting continuously as circumstances evolve.
              </p>
            </Card>

            {/* Crisis Response Comparison */}
            <Card className="p-8">
              <h2 className="font-display font-bold text-3xl mb-6">Crisis Response: Before & After</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Traditional System</th>
                      <th className="text-left py-3 px-4 font-semibold">Free Association System</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground"><strong className="text-foreground">Day 1:</strong> Crisis hits</td>
                      <td className="py-3 px-4 text-primary"><strong>Day 1:</strong> Entity declares "$1B needed"</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground"><strong className="text-foreground">Day 30:</strong> Emergency sessions convene</td>
                      <td className="py-3 px-4 text-primary"><strong>Immediately:</strong> System converges to new optimal allocation</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground"><strong className="text-foreground">Day 90:</strong> Negotiations drag on</td>
                      <td className="py-3 px-4 text-primary"><strong>Day 1-2:</strong> Commitments transparent and automatic</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground"><strong className="text-foreground">Day 180:</strong> Pledges finalized</td>
                      <td className="py-3 px-4 text-primary"><strong>Day 2-3:</strong> First resources arrive</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-muted-foreground"><strong className="text-foreground">Day 270:</strong> Resources begin to flow</td>
                      <td className="py-3 px-4 text-primary"><strong>Ongoing:</strong> Continuous updates, real-time re-convergence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-muted-foreground mt-6 text-center italic">
                This transforms crisis response from a <strong className="text-foreground">months-long political process</strong> into <strong className="text-primary">real-time mathematical convergence</strong>.
              </p>
            </Card>

            {/* Core Guarantees */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-chart-3/5">
              <h2 className="font-display font-bold text-3xl mb-6">Why This Is Trustworthy: Core Guarantees</h2>
              <p className="text-muted-foreground mb-6">The system is built on mathematically proven principles:</p>
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Guaranteed Fairness:</strong>
                    <span className="text-muted-foreground">Allocations strictly proportional to mutual recognition and need</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Strategy-Proof:</strong>
                    <span className="text-muted-foreground">Honest reporting is always the best strategy; gaming the system is neutralized</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Fast Convergence:</strong>
                    <span className="text-muted-foreground">Reaches stable optimal state in 5-10 calculation rounds</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground">Privacy-Preserving:</strong>
                    <span className="text-muted-foreground">Each entity only publishes its own data; no central authority controls outcomes</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* The Coalition */}
            <Card className="p-8">
              <h2 className="font-display font-bold text-3xl mb-6">The Coalition: Global Living Labs + Pilot Program</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">Phase 1: Global Living Labs</h3>
                  <p className="text-muted-foreground">
                    Interactive demonstrations where participants engage with real-time simulations of resource mapping and allocation across diverse contexts.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-3">Phase 2: Landmark Pilot</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Scope:</strong> 15-20 entities coordinating up to <strong className="text-primary">$1 billion</strong> across climate, health, aid, and development</li>
                    <li><strong className="text-foreground">Duration:</strong> 12 months in parallel with traditional processes for direct comparison</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Success Metrics:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <strong className="block text-foreground">Speed</strong>
                        <span className="text-sm text-muted-foreground">Real-time convergence (vs. 90+ day cycles)</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">💰</span>
                      <div>
                        <strong className="block text-foreground">Efficiency</strong>
                        <span className="text-sm text-muted-foreground">&gt;95% resource allocation (vs. ~70%)</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">⚖️</span>
                      <div>
                        <strong className="block text-foreground">Fairness</strong>
                        <span className="text-sm text-muted-foreground">Gini coefficient &lt;0.3</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">🔄</span>
                      <div>
                        <strong className="block text-foreground">Adaptability</strong>
                        <span className="text-sm text-muted-foreground">Immediate re-convergence to new crises</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Coalition Commitments */}
            <Card className="p-8 border-primary/50">
              <h2 className="font-display font-bold text-3xl mb-6">Coalition Member Commitments</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-primary">We Pledge To:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Participate</strong> in Global Living Labs to experience this coordination paradigm firsthand</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Publish</strong> our recognition weights, capacity, and needs transparently on the platform</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Coordinate</strong> resources through mutual recognition alongside existing mechanisms</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Advocate</strong> for this DPI as trustworthy infrastructure for planetary coordination</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Contribute</strong> feedback to refine the platform for diverse organizational contexts</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-4 text-chart-3">We Receive:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                      <span><strong>Real-time coordination</strong> adapting within seconds to changing needs</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                      <span><strong>Transparent allocation</strong> based on mathematical fairness, not political negotiation</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                      <span><strong>Maintained autonomy</strong> – no central authority controls your data or decisions</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                      <span><strong>Strategy-proof infrastructure</strong> – honest reporting rewarded by design</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-chart-3 shrink-0 mt-0.5" />
                      <span><strong>Partnership network</strong> with forward-thinking organizations solving global challenges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Sign the Pledge */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-chart-3/10 border-primary text-center">
              <h2 className="font-display font-bold text-3xl mb-4">Sign the Pledge</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The technology exists. The code works. The need is undeniable.
              </p>
              
              <div className="space-y-4 max-w-2xl mx-auto mb-8">
                <p className="text-left text-sm text-muted-foreground mb-4">
                  To formally join the Free Association Coalition, please contact us at:
                </p>
                <Button className="w-full gap-2" size="lg" asChild>
                  <a href="mailto:coalition@openassociation.org">
                    Join the Coalition
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <h3 className="font-semibold text-lg mb-4">Resources & Contact</h3>
                <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-sm">
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="https://playnet.gitbook.io/docs" target="_blank" rel="noopener noreferrer">
                      📖 Documentation
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="https://github.com/interplaynetary/free-association" target="_blank" rel="noopener noreferrer">
                      🔬 Mathematical Proofs
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="https://free.playnet.lol" target="_blank" rel="noopener noreferrer">
                      💻 Working Demo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="mailto:info@openassociation.org">
                      ✉️ Questions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quote */}
            <div className="text-center py-8">
              <p className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
                "Moving beyond markets, charity, and bureaucracy to enable voluntary, fair, self-organizing coordination for humanity's greatest challenges."
              </p>
            </div>

          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

