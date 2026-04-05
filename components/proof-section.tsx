import { Users, DollarSign, TrendingUp } from "lucide-react"
import { ResultsCarousel } from "./results-carousel"

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Clients Helped"
  },
  {
    icon: DollarSign,
    value: "$14M+",
    label: "In Debt Removed"
  },
  {
    icon: TrendingUp,
    value: "127",
    label: "Avg. Score Increase"
  }
]

export function ProofSection() {
  return (
    <section className="bg-card py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Stats */}
        <div className="mb-10 grid gap-6 rounded-xl border border-border bg-background p-6 sm:mb-16 sm:gap-8 sm:rounded-2xl sm:p-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-3 sm:h-12 sm:w-12 sm:rounded-xl">
                <stat.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <div className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">{stat.value}</div>
              <div className="text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Results Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Real Results From Real People
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Actual credit score improvements from our clients. Click any image to view details.
          </p>
        </div>

        {/* Results Carousel */}
        <ResultsCarousel />
      </div>
    </section>
  )
}
