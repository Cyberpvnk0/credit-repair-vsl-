import { XCircle, TrendingDown, AlertTriangle, CreditCard } from "lucide-react"

const painPoints = [
  {
    icon: XCircle,
    title: "Denied for Loans & Credit Cards",
    description: "Tired of rejection letters? Low credit scores close doors to financing you need."
  },
  {
    icon: TrendingDown,
    title: "Stuck Below 650",
    description: "No matter what you try, your score just won't budge. It feels impossible to move up."
  },
  {
    icon: AlertTriangle,
    title: "Collections & Charge-Offs",
    description: "Old debts and negative marks haunt your report, dragging your score down year after year."
  },
  {
    icon: CreditCard,
    title: "Late Payments on Record",
    description: "Life happened, payments slipped, and now those marks follow you everywhere."
  }
]

export function ProblemSection() {
  return (
    <section className="bg-card py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            We Understand Your Frustration
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            If any of these sound familiar, you&apos;re not alone — and you&apos;re in the right place.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-lg sm:rounded-2xl sm:p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                <point.icon className="h-5 w-5 text-destructive sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
