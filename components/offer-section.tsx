import { Button } from "@/components/ui/button"
import { Check, Zap, ArrowRight, Shield } from "lucide-react"

const standardFeatures = [
  "Full 3-bureau credit audit",
  "Strategic dispute letters each month",
  "Credit score tracking & updates",
  "Dedicated credit specialist",
  "Creditor negotiations",
  "Progress reports every 30 days"
]

const fastTrackFeatures = [
  "Everything in Standard",
  "Priority dispute processing",
  "Expedited creditor outreach",
  "Rush delivery of results"
]

export function OfferSection() {
  return (
    <section id="pricing" className="bg-background py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {/* Standard Plan */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:rounded-2xl sm:p-8">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Standard Repair</h3>
              <p className="mt-1 text-sm text-muted-foreground">Perfect for most clients</p>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground sm:text-5xl">$97</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Billed monthly. Cancel anytime.
              </p>
            </div>

            <Button className="mb-6 h-11 w-full text-base font-semibold sm:mb-8 sm:h-12" variant="outline" asChild>
              <a href="https://www.fanbasis.com/agency-checkout/evolve-credit/14v4q">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <ul className="space-y-3 sm:space-y-4">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fast Track Plan */}
          <div className="relative order-first rounded-xl border-2 border-primary bg-card p-6 shadow-xl sm:rounded-2xl sm:p-8 md:order-last">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg sm:-top-4 sm:px-4 sm:text-sm">
              <Zap className="mr-1 inline-block h-3 w-3 sm:h-4 sm:w-4" />
              Fastest Results
            </div>

            <div className="mb-4 mt-2 sm:mb-6 sm:mt-0">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">Fast Track</h3>
              <p className="mt-1 text-sm text-muted-foreground">For those who need results now</p>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground sm:text-5xl">$197</span>
                <span className="text-sm text-muted-foreground sm:text-base">/first month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Then $97/month. Priority processing included.
              </p>
            </div>

            <Button className="mb-6 h-11 w-full text-base font-semibold shadow-lg shadow-primary/25 sm:mb-8 sm:h-12" asChild>
              <a href="https://www.fanbasis.com/agency-checkout/evolve-credit/7XBXB">
                Start Fast Track
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <ul className="space-y-3 sm:space-y-4">
              {fastTrackFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-muted-foreground sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm">No Long-Term Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
