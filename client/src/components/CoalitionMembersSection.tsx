import { Card } from "@/components/ui/card";
import playnetLogo from "@/media/playnet.gif";
import allernetLogo from "@/media/allternet.jpg";
import dreamtankLogo from "@/media/dreamtank.png";
import modularCommonsLogo from "@/media/modular-commons.png";
import solarPunkNowLogo from "@/media/solar-punk-now.png";
import beTogetherLogo from "@/media/be-together.png";

const coalitionMembers = [
  { name: "Playnet", logo: playnetLogo, url: "https://openassociation.org" },
  { name: "Allternet", logo: allernetLogo, url: "https://allternet.org" },
  { name: "Dreamtank", logo: dreamtankLogo, url: "https://wearedreamtank.org/" },
  { name: "Modular Commons", logo: modularCommonsLogo, url: "https://modularcommons.com" },
  { name: "Solar Punk Now", logo: solarPunkNowLogo, url: "https://solarpunknow.world" },
  { name: "Be Together", logo: beTogetherLogo, url: "https://betogether.org" },
];

export default function CoalitionMembersSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl">Founding Coalition Members</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Forward-thinking organizations joining the movement for planetary coordination infrastructure
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {coalitionMembers.map((member, index) => (
            <a 
              key={index}
              href={member.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              data-testid={`coalition-member-${index}`}
            >
              <Card className="p-3 md:p-4 hover-elevate transition-all cursor-pointer bg-background w-20 h-20 md:w-24 md:h-24">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={member.logo} 
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground text-xs md:text-sm">
            These pioneering organizations are building the foundation for a new coordination paradigm—proving that mutual recognition can transform how humanity allocates resources for shared goals.
          </p>
        </div>
      </div>
    </section>
  );
}

