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
  firstName: string;
  lastName: string;
  organization: string;
  phone: string;
  email: string;
  preferredMessenger: string;
  messengerHandle: string;
  country: string;
  message: string;
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
      phone: "",
      email: "",
      preferredMessenger: "",
      messengerHandle: "",
      country: "",
      message: "",
      consentTransactional: false,
      consentMarketing: false,
    },
  });

  const onSubmit = async (data: PledgeFormData) => {
    try {
      // Get Google Sheets endpoint URL from environment variable
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
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
              Thank You for Signing the Pledge!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your commitment to the Free Association Coalition has been recorded. Now, consider supporting this initiative with a donation.
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
                        href={`https://opencollective.com/playnet/donate?amount=${tier.amount}&currency=EUR`}
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
                        href={`https://opencollective.com/playnet/donate?amount=${tier.amount}&currency=EUR`}
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
                        href={`https://opencollective.com/playnet/donate?amount=${tier.amount}&currency=EUR`}
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
                      href="https://opencollective.com/playnet/donate" 
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
                      href="https://opencollective.com/playnet/donate" 
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
              Sign Another Pledge
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
            Sign the Free Association Coalition Pledge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join organizations, foundations, and changemakers worldwide in committing to a new paradigm of planetary coordination through mutual recognition.
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization / Family Office / Foundation / Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Organization" {...field} />
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
                          By checking this box, I consent to receive transactional messages related to my donation or joining of the Free Association Coalition. These messages may include appointment reminders, order confirmations, receipts, and stewardship updates related to this initiative.
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
                          By checking this box, I consent to receive occasional marketing and community updates from the Free Association Coalition. These may include invitations to events, new partnership opportunities, campaign updates, and stories of impact.
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
                  {form.formState.isSubmitting ? "Submitting..." : "Sign the Pledge"}
                </Button>
              </div>
            </form>
          </Form>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          After signing, you'll have the opportunity to support this initiative with a donation via Open Collective.
        </p>
      </div>
    </section>
  );
}

