import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Heart } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="bg-primary py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Ready to Transform Your Credit?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-primary-foreground/80 sm:mt-6 sm:text-lg">
          Join over 2,500 clients who have taken control of their financial future. 
          Your journey to better credit starts with a single step.
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-4 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center sm:px-0">
          <Button 
            size="lg" 
            className="h-12 w-full bg-white px-6 text-base font-semibold text-primary shadow-xl hover:bg-white/90 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
            asChild
          >
            <a href="https://www.fanbasis.com/agency-checkout/evolve-credit/14v4q">
              Start Repair Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        <p className="mt-4 text-xs text-primary-foreground/70 sm:text-sm">
          $97/month • No contracts • Cancel anytime
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-primary-foreground/80 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm">Secure & Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm">Results in 30-45 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm">Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
