import { Card } from "@/components/ui/card";

const phases = [
  {
    phase: "PHASE 1",
    title: "Launching",
    items: [
      { text: "Launching Time", status: "complete" },
      { text: "Social Launch", status: "complete" },
      { text: "Giveways & Promos", status: "complete" },
      { text: "Publish Whitepaper", status: "pending" },
      { text: "Website Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
    ]
  },
  {
    phase: "PHASE 2",
    title: "Investment",
    items: [
      { text: "Launching Time", status: "pending" },
      { text: "Social Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
      { text: "Publish Whitepaper", status: "pending" },
      { text: "Website Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
    ]
  },
  {
    phase: "PHASE 3",
    title: "Connection",
    items: [
      { text: "Launching Time", status: "pending" },
      { text: "Social Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
      { text: "Publish Whitepaper", status: "pending" },
      { text: "Website Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
    ]
  },
  {
    phase: "PHASE 4",
    title: "Growth",
    items: [
      { text: "Launching Time", status: "pending" },
      { text: "Social Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
      { text: "Publish Whitepaper", status: "pending" },
      { text: "Website Launch", status: "pending" },
      { text: "Giveways & Promos", status: "pending" },
    ]
  }
];

const getStatusEmoji = (status: string) => {
  switch (status) {
    case "complete":
      return "☑️";
    case "progress":
      return "⏳";
    default:
      return "⭕";
  }
};

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl">Implementation Status</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            COP30 Ready with $200K Investment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, phaseIndex) => (
            <Card 
              key={phaseIndex} 
              className="p-6 bg-muted/30"
              data-testid={`phase-${phaseIndex}`}
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">
                    {phase.phase}
                  </div>
                  <h3 className="font-display font-bold text-xl">{phase.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="flex items-start gap-2"
                      data-testid={`phase-${phaseIndex}-item-${itemIndex}`}
                    >
                      <span className="text-lg leading-none mt-0.5">
                        {getStatusEmoji(item.status)}
                      </span>
                      <span className="text-sm flex-1">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <p className="font-semibold text-lg">
              Timeline: Fully operational for COP30 (6 months)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
