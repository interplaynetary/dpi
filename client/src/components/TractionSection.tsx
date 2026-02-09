import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Briefcase, School, Building } from "lucide-react";

const contributors = [
  {
    name: "Rüzgar Imski",
    role: "Playnet Founder, Core Algorithm Developer",
    initials: "RI"
  },
  {
    name: "Lubna Dajani",
    role: "Catalyst Now USA, Allternet Founder",
    initials: "LD"
  }
];

const interests = [
  { icon: Briefcase, text: "Family Offices" },
  { icon: Building, text: "Banks" },
  { icon: School, text: "Schools" },
  { icon: Users, text: "Impact Funders" }
];

export default function TractionSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Proven Traction</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building with expertise and growing interest from key sectors
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {contributors.map((contributor, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`card-contributor-${index}`}>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                    {contributor.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{contributor.name}</h3>
                  <p className="text-sm text-muted-foreground">{contributor.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-card border border-card-border rounded-lg p-8">
          <h3 className="font-semibold text-xl mb-6 text-center">Current Interest From</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="flex flex-col items-center gap-3" data-testid={`interest-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <interest.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-center">{interest.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
