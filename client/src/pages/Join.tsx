import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoalitionMembersSection from "@/components/CoalitionMembersSection";
import PledgeFormSection from "@/components/PledgeFormSection";
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
            <div className="text-center space-y-6 mb-12">
              {/* Large Logo */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/logo.png" 
                  alt="Free-Association Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
                />
              </div>
              
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
                This peer-to-peer Digital Public Infrastructure (DPI) allows any entity — from nation-states and UN agencies to philanthropic foundations, impact funds, and grassroots organizations — to coordinate resources through transparent, automatic allocation based on mutual recognition.
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

            {/* The Coalition */}
            <Card className="p-8">
              <h2 className="font-display font-bold text-3xl mb-6">The Free Association Coalition</h2>
              
              <p className="text-muted-foreground mb-6">
                We are organizing a joint initiative bringing together organizations worldwide to experience this coordination paradigm firsthand. Both Global Living Labs and Organizational Pilots are happening simultaneously.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    <span className="text-primary">•</span> Global Living Labs
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Interactive demonstrations where participants engage with real-time simulations of resource mapping and allocation across diverse contexts.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Objectives: Demonstrate the protocol, convene stakeholders, build credibility through partnerships, and gather feedback from diverse contexts
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    <span className="text-primary">•</span> Organizational Pilots
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    We invite organizations to pilot resource coordination using a portion of their discretionary budget or grant portfolio. Each organization operates autonomously while being part of the coalition network.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-3">
                    <li><strong className="text-foreground">Your Organization Chooses:</strong></li>
                    <li className="ml-4">• <strong className="text-foreground">Scale:</strong> What portion of your budget to pilot with (e.g., $50-100M)</li>
                    <li className="ml-4">• <strong className="text-foreground">Focus Area:</strong> Which programs align with coalition priorities (climate, health, humanitarian response, sustainable development)</li>
                    <li className="ml-4">• <strong className="text-foreground">Timeline:</strong> Your own 6-12 month pilot period</li>
                    <li className="ml-4">• <strong className="text-foreground">Partners:</strong> Which other coalition members you recognize and coordinate with</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    Coalition Network: 15-20 active members running pilots, plus supporting members and aligned allies. Total network resources: $500M-$1B+ collectively coordinated.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Success Metrics (For Active Members):</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <strong className="block text-foreground">Speed</strong>
                        <span className="text-sm text-muted-foreground">&lt;48 hours from need to commitment (vs. typical 90+ days)</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">💰</span>
                      <div>
                        <strong className="block text-foreground">Efficiency</strong>
                        <span className="text-sm text-muted-foreground">&gt;95% resource deployment (vs. typical ~70%)</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <strong className="block text-foreground">Alignment</strong>
                        <span className="text-sm text-muted-foreground">Resources reach mission-aligned entities you recognize</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-2xl">🔄</span>
                      <div>
                        <strong className="block text-foreground">Adaptability</strong>
                        <span className="text-sm text-muted-foreground">Real-time responsiveness when priorities change</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Coalition Membership Tiers */}
            <Card className="p-8 border-primary/50">
              <h2 className="font-display font-bold text-3xl mb-6">Coalition Membership Tiers</h2>
              
              <p className="text-muted-foreground mb-6">
                Join the coalition at a level that matches your capacity and readiness:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    Active Member
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Organizations piloting resource coordination</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Implement the system with a portion of your discretionary budget or grant portfolio</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Publish recognition weights, capacity, and needs on the protocol</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Participate in pilot coalition learning and quarterly coordination reviews</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Receive priority technical support and protocol refinements</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-chart-4 pl-4">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    Supporting Member
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Organizations exploring and learning</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-4 shrink-0 mt-0.5" />
                      <span>Attend living labs and coordination demonstrations</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-4 shrink-0 mt-0.5" />
                      <span>Access pilot data and learnings from active members</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-4 shrink-0 mt-0.5" />
                      <span>Participate in coalition convenings and feedback sessions</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-4 shrink-0 mt-0.5" />
                      <span>No resource commitment required – observe and evaluate</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-chart-3 pl-4">
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    Aligned Ally
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Organizations endorsing the vision</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                      <span>Stay connected to coalition developments and findings</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                      <span>Share insights from your network and context</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-chart-3 shrink-0 mt-0.5" />
                      <span>Consider future active participation as capacity allows</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold mb-3">Coalition Benefits (All Tiers):</h4>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Shared Infrastructure:</strong> Access to the proven DPI protocol</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Network Effects:</strong> More organizations = more coordination opportunities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Peer Learning:</strong> Regular convenings to share insights and best practices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Collective Legitimacy:</strong> Part of a recognized coalition strengthening systems change</span>
                  </li>
                </ul>
              </div>
            </Card>

          </div>
          <PledgeFormSection />
        
        <Footer />
        </section>

        {/* Coalition Members Section */}
        {/* <CoalitionMembersSection /> */}

        {/* Pledge Form Section */}

      </div>
    </div>
  );
}


