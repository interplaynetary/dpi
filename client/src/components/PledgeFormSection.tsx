import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Heart } from "lucide-react";

interface PledgeFormData {
  // Basic Contact Info
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  phone: string;
  email: string;
  preferredMessenger: string;
  messengerHandle: string;
  country: string;
  message: string;
  
  // Section 1: Organization Profile
  orgTypeGovernment: boolean;
  orgTypeUN: boolean;
  orgTypeFoundation: boolean;
  orgTypeInvestment: boolean;
  orgTypeNGO: boolean;
  orgTypeRegional: boolean;
  orgTypePrivate: boolean;
  orgTypeGrassroots: boolean;
  orgTypeOther: string;
  
  missionClimate: boolean;
  missionHealth: boolean;
  missionHumanitarian: boolean;
  missionDevelopment: boolean;
  missionBiodiversity: boolean;
  missionFood: boolean;
  missionWater: boolean;
  missionEducation: boolean;
  missionEconomic: boolean;
  missionOther: string;
  
  // Section 2: Pilot Commitment
  membershipActive: boolean;
  membershipSupporting: boolean;
  membershipAlly: boolean;
  
  // For Active Members
  resourceRange: string;
  resourceGrantFunding: boolean;
  resourceDevelopmentAid: boolean;
  resourceInvestment: boolean;
  resourceInKind: string;
  resourceTechnical: boolean;
  resourceEmergency: boolean;
  resourceOther: string;
  
  pilotStartDate: string;
  pilotDuration: string;
  pilotFocusAreas: string;
  currentDecisionProcess: string;
  
  // Section 3: Coordination Interests
  recognitionPartners: string;
  geographicPriorities: string;
  
  // Section 4: Organizational Readiness
  authorityCommit: boolean;
  authorityRecommend: boolean;
  authorityRecommendFrom: string;
  authorityExploratory: boolean;
  
  techCapacityHave: boolean;
  techCapacityNeed: boolean;
  techCapacitySimplified: boolean;
  
  dataSharingWeights: boolean;
  dataSharingCapacity: boolean;
  dataSharingNeeds: boolean;
  dataSharingPrivacy: boolean;
  
  // Section 5: Next Steps
  supportDemo: boolean;
  supportTechnical: boolean;
  supportLegal: boolean;
  supportExecutive: boolean;
  supportOther: string;
  
  followupTimeline: string;
  additionalQuestions: string;
  
  // Acknowledgment & Consent
  acknowledgmentAccepted: boolean;
  consentTransactional: boolean;
  consentMarketing: boolean;
}

export default function PledgeFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  const form = useForm<PledgeFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      organization: "",
      title: "",
      phone: "",
      email: "",
      preferredMessenger: "",
      messengerHandle: "",
      country: "",
      message: "",
      
      orgTypeGovernment: false,
      orgTypeUN: false,
      orgTypeFoundation: false,
      orgTypeInvestment: false,
      orgTypeNGO: false,
      orgTypeRegional: false,
      orgTypePrivate: false,
      orgTypeGrassroots: false,
      orgTypeOther: "",
      
      missionClimate: false,
      missionHealth: false,
      missionHumanitarian: false,
      missionDevelopment: false,
      missionBiodiversity: false,
      missionFood: false,
      missionWater: false,
      missionEducation: false,
      missionEconomic: false,
      missionOther: "",
      
      membershipActive: false,
      membershipSupporting: false,
      membershipAlly: false,
      
      resourceRange: "",
      resourceGrantFunding: false,
      resourceDevelopmentAid: false,
      resourceInvestment: false,
      resourceInKind: "",
      resourceTechnical: false,
      resourceEmergency: false,
      resourceOther: "",
      
      pilotStartDate: "",
      pilotDuration: "",
      pilotFocusAreas: "",
      currentDecisionProcess: "",
      
      recognitionPartners: "",
      geographicPriorities: "",
      
      authorityCommit: false,
      authorityRecommend: false,
      authorityRecommendFrom: "",
      authorityExploratory: false,
      
      techCapacityHave: false,
      techCapacityNeed: false,
      techCapacitySimplified: false,
      
      dataSharingWeights: false,
      dataSharingCapacity: false,
      dataSharingNeeds: false,
      dataSharingPrivacy: false,
      
      supportDemo: false,
      supportTechnical: false,
      supportLegal: false,
      supportExecutive: false,
      supportOther: "",
      
      followupTimeline: "",
      additionalQuestions: "",
      
      acknowledgmentAccepted: false,
      consentTransactional: false,
      consentMarketing: false,
    },
  });

  const onSubmit = async (data: PledgeFormData) => {
    try {
      // Get Google Sheets endpoint URL from environment variable or use fallback
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || 
        'https://script.google.com/macros/s/AKfycbxQ-rUSwysn_2v1tNNk2-t3cCnlBtMIqPaaocrQQSCAYk3YaKpPUyb1rF_zAjB9R3ydrQ/exec';
      
      if (!googleSheetsUrl) {
        console.error('Google Sheets URL not configured');
        alert('Form submission is not configured. Please contact the administrator.');
        return;
      }

      // Add additional metadata
      const submissionData = {
        ...data,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      console.log("Submitting pledge to Google Sheets:", submissionData);

      // Submit to Google Sheets
      const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // Note: With no-cors mode, we can't read the response
      // But if we get here without error, it likely worked
      console.log("Pledge submitted successfully");
      
      setSubmitted(true);
      setShowDonation(true);
      
      // Scroll to donation section
      setTimeout(() => {
        document.getElementById("donation-section")?.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 500);

    } catch (error) {
      console.error('Error submitting pledge:', error);
      alert('There was an error submitting your pledge. Please try again or contact us directly at coalition@openassociation.org');
    }
  };

  if (submitted && showDonation) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Thank You for Submitting Your Letter of Intent!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your Letter of Intent has been received. We'll be in touch soon to discuss next steps. Now, consider supporting this initiative with a donation.
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-xl">Support the Movement</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Your donation directly supports the development and deployment of planetary coordination infrastructure through Playnet Open Collective.
            </p>
            
            {/* Open Collective Donation Options */}
            <div id="donation-section" className="space-y-6">
              
              {/* Seed Contribution */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Seed Contribution</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { amount: 100, label: "€100" },
                    { amount: 250, label: "€250" },
                    { amount: 500, label: "€500" },
                  ].map((tier) => (
                    <Button
                      key={tier.amount}
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <a
                        href={`https://opencollective.com/free-association/donate?amount=${tier.amount}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tier.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Bridge Contribution */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Bridge Contribution</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { amount: 1000, label: "€1K" },
                    { amount: 5000, label: "€5K" },
                    { amount: 10000, label: "€10K" },
                  ].map((tier) => (
                    <Button
                      key={tier.amount}
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <a
                        href={`https://opencollective.com/free-association/donate?amount=${tier.amount}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tier.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Catalyst Contribution */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Catalyst Contribution</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { amount: 25000, label: "€25K" },
                    { amount: 100000, label: "€100K" },
                    { amount: 250000, label: "€250K" },
                  ].map((tier) => (
                    <Button
                      key={tier.amount}
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <a
                        href={`https://opencollective.com/free-association/donate?amount=${tier.amount}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tier.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom & Recurring */}
              <div className="space-y-3 pt-4 border-t">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://opencollective.com/free-association/donate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Custom Amount
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    className="gap-2"
                    asChild
                  >
                    <a 
                      href="https://opencollective.com/free-association/donate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Heart className="w-4 h-4" />
                      Monthly Contribution
                    </a>
                  </Button>
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-xs text-center text-muted-foreground">
                You'll be redirected to Open Collective to complete your donation securely.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setShowDonation(false);
                form.reset();
              }}
            >
              Submit Another Letter of Intent
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Free Association Coalition Letter of Intent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Express your organization's interest in exploring or participating in the Free Association Coalition pilot initiative for planetary coordination through mutual recognition.
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Organization */}
              <FormField
                control={form.control}
                name="organization"
                rules={{ required: "Organization name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization / Family Office / Foundation / Brand *</FormLabel>
                    <FormControl>
                      <Input placeholder="Organization" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Title/Position */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title / Position</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Executive Director, Program Manager" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  rules={{ required: "Phone is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Messenger Preference */}
              <FormField
                control={form.control}
                name="preferredMessenger"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Messenger</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred messenger" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="telegram">Telegram</SelectItem>
                        <SelectItem value="signal">Signal</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="sms">SMS/Regular Text</SelectItem>
                        <SelectItem value="other">Other (please specify)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Messenger Handle */}
              <FormField
                control={form.control}
                name="messengerHandle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Messenger Number or Handle</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. +1 303 555 1212 or @yourtelegram" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Where are you operating from?</FormLabel>
                    <FormControl>
                      <Input placeholder="Country / region / sector" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      As you send your breath into this network, is there a message, project, or dream you'd like us to know about as we reach back to you?
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your vision..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Section 1: Organization Profile */}
              <div className="space-y-6 pt-6 border-t">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Section 1: Organization Profile</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help us understand your organizational context
                  </p>
                </div>

                {/* 1.1 Organization Type */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">Organization Type <span className="text-sm font-normal text-muted-foreground">(check all that apply)</span></h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="orgTypeGovernment"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            National Government / Ministry
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypeUN"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            UN Agency / Multilateral Organization
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypeFoundation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Philanthropic Foundation
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypeInvestment"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Impact Investment Fund
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypeNGO"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Civil Society Organization / NGO
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypeRegional"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Regional Coordination Body
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypePrivate"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Private Sector / Corporate Foundation
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orgTypeGrassroots"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Grassroots / Community Organization
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="orgTypeOther"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Other organization type (please specify)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* 1.2 Primary Mission Areas */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">Primary Mission Areas <span className="text-sm font-normal text-muted-foreground">(check all that apply)</span></h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="missionClimate"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Climate Action & Adaptation
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionHealth"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Health & Pandemic Response
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionHumanitarian"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Humanitarian Aid & Emergency Response
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionDevelopment"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Sustainable Development
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionBiodiversity"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Biodiversity & Conservation
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionFood"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Food Security & Agriculture
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionWater"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Water & Sanitation
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionEducation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Education & Capacity Building
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="missionEconomic"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Economic Development
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="missionOther"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Other mission areas (please specify)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Coalition Membership Type */}
              <div className="space-y-4 pt-6 border-t">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Coalition Membership</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select the level(s) of engagement that align with your capacity and intention:
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="membershipActive"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base font-semibold">
                          Active Member
                        </FormLabel>
                        <FormDescription className="text-sm">
                          Participating in pilots, living labs, and resource coordination experiments
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="membershipSupporting"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base font-semibold">
                          Supporting Member
                        </FormLabel>
                        <FormDescription className="text-sm">
                          Attending demonstrations, sharing learnings, connecting networks
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="membershipAlly"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base font-semibold">
                          Aligned Ally
                        </FormLabel>
                        <FormDescription className="text-sm">
                          Endorsing the vision and staying connected to coalition developments
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Section 2: Pilot Commitment (For Active Members) */}
              {form.watch("membershipActive") && (
                <div className="space-y-6 pt-6 border-t bg-muted/20 p-6 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Section 2: Pilot Commitment Details</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For Active Members piloting resource coordination
                    </p>
                  </div>

                  {/* Resource Commitment */}
                  <FormField
                    control={form.control}
                    name="resourceRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Resource Range</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., $50M-100M, €20M, 500,000 units of aid supplies, 10% of discretionary fund" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Approximate range of resources you might allocate to the pilot
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Resource Type */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-base">Resource Type <span className="text-sm font-normal text-muted-foreground">(check all that apply)</span></h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="resourceGrantFunding"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 bg-background">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Grant Funding
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resourceDevelopmentAid"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 bg-background">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Development Aid
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resourceInvestment"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 bg-background">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Impact Investment Capital
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resourceTechnical"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 bg-background">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Technical Assistance / Capacity
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="resourceEmergency"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 bg-background">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Emergency Response Resources
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="resourceInKind"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="In-Kind Resources (please specify)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="resourceOther"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Other resource types (please specify)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Pilot Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="pilotStartDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anticipated Start Date</FormLabel>
                          <FormControl>
                            <Input 
                              type="text" 
                              placeholder="e.g., Q2 2025, June 2025" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pilotDuration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pilot Duration</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g., 6 months, 12 months" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Typically 6-12 months
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Focus Areas for Pilot */}
                  <FormField
                    control={form.control}
                    name="pilotFocusAreas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Focus Areas for Pilot</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Which mission areas will pilot resources address?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Current Decision-Making Process */}
                  <FormField
                    control={form.control}
                    name="currentDecisionProcess"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Decision-Making Process</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Brief description of how these resources are currently allocated"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Section 3: Coordination Interests */}
              <div className="space-y-6 pt-6 border-t">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Section 3: Coordination Interests</h3>
                </div>

                <FormField
                  control={form.control}
                  name="recognitionPartners"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Potential Recognition Partners</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Are there specific organizations/types you already coordinate with or wish to coordinate with through this pilot?"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="geographicPriorities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Geographic or Thematic Priorities</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific regions, communities, or issue areas this pilot should prioritize?"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Section 4: Organizational Readiness */}
              <div className="space-y-6 pt-6 border-t">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Section 4: Organizational Readiness</h3>
                </div>

                {/* Decision-Making Authority */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">Decision-Making Authority</h4>
                  
                  <FormField
                    control={form.control}
                    name="authorityCommit"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          Signatory has authority to commit resources for pilot
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="authorityRecommend"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          Signatory can recommend; formal approval needed
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  {form.watch("authorityRecommend") && (
                    <FormField
                      control={form.control}
                      name="authorityRecommendFrom"
                      render={({ field }) => (
                        <FormItem className="ml-6">
                          <FormControl>
                            <Input placeholder="Formal approval needed from..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="authorityExploratory"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          Exploratory only; further internal discussion required
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Technical Capacity */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">Technical Capacity</h4>
                  
                  <FormField
                    control={form.control}
                    name="techCapacityHave"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          We have technical staff who can engage with digital infrastructure
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="techCapacityNeed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          We will need technical support and onboarding
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="techCapacitySimplified"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          We prefer simplified/non-technical interface
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Data Sharing Readiness */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">Data Sharing Readiness</h4>
                  <p className="text-sm text-muted-foreground">Our organization is prepared to:</p>
                  
                  <FormField
                    control={form.control}
                    name="dataSharingWeights"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          Publish recognition weights (who we value as contributing to our goals)
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dataSharingCapacity"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          Publish resource capacity available for pilot
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dataSharingNeeds"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          Publish needs/requirements relevant to our mission
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dataSharingPrivacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          We need to understand privacy/sovereignty protections first
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Section 5: Next Steps & Support Needs */}
              <div className="space-y-6 pt-6 border-t">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Section 5: Next Steps & Support Needs</h3>
                </div>

                {/* Support Needs */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">What support would help your organization move forward?</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="supportDemo"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Attend a DPI demonstration session
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supportTechnical"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Technical briefing for our team
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supportLegal"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Legal/governance review support
                          </FormLabel>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supportExecutive"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Executive briefing for leadership
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="supportOther"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Other support needs (please specify)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Preferred Timeline for Follow-Up */}
                <FormField
                  control={form.control}
                  name="followupTimeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timeline for Follow-Up</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                          <SelectItem value="1month">Within 1 month</SelectItem>
                          <SelectItem value="3months">Within 3 months</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Questions */}
                <FormField
                  control={form.control}
                  name="additionalQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Questions or Considerations</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any questions or considerations you'd like to share?"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Section 6: Acknowledgment */}
              <div className="space-y-6 pt-6 border-t">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Section 6: Acknowledgment</h3>
                </div>

                <div className="bg-muted/50 p-4 rounded-md space-y-2">
                  <p className="text-sm">
                    By submitting this Letter of Intent, our organization expresses interest in exploring or participating in the Free Association Coalition pilot initiative. We understand that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>This LOI is non-binding and represents initial interest and intent</li>
                    <li>Active Member participation requires formal resource commitment at a later stage</li>
                    <li>All organizations maintain full autonomy over their resources and decisions</li>
                    <li>Participation is voluntary and organizations can adjust engagement level at any time</li>
                    <li>The pilot is designed to complement (not replace) existing coordination mechanisms</li>
                  </ul>
                </div>

                <FormField
                  control={form.control}
                  name="acknowledgmentAccepted"
                  rules={{ required: "You must acknowledge and accept these terms" }}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base font-semibold">
                          I acknowledge and accept these terms *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-6 pt-4 border-t">
                <FormField
                  control={form.control}
                  name="consentTransactional"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          By checking this box, I consent to receive messages related to my donation or joining of the Free Association Coalition. These messages may include appointment reminders, order confirmations, receipts, and coalition updates related to this initiative.
                        </FormLabel>
                        <FormDescription className="text-xs">
                          Message & data rates may apply. Frequency may vary. You can reply HELP for help or STOP to opt out.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consentMarketing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          By checking this box, I consent to receive occasional opportunities and community updates from the Free Association Coalition. These may include invitations to events, new partnership opportunities, campaign updates, and stories of impact.
                        </FormLabel>
                        <FormDescription className="text-xs">
                          Message & data rates may apply. Frequency may vary. You can reply HELP for help or STOP to opt out at any time.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit Letter of Intent"}
                </Button>
              </div>
            </form>
          </Form>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          After submitting, you'll have the opportunity to support this initiative with a donation via Open Collective.
        </p>
      </div>
    </section>
  );
}

