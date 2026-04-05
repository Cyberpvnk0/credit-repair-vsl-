import { FileSearch, Scale, Settings, RefreshCw, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Credit Audit",
    description: "We pull your credit reports from all three bureaus and identify every negative item hurting your score."
  },
  {
    number: "02",
    icon: Scale,
    title: "Dispute Negative Items",
    description: "Our experts file strategic disputes with bureaus and creditors to challenge inaccurate or unfair items."
  },
  {
    number: "03",
    icon: Settings,
    title: "Optimize Your Profile",
    description: "We guide you on credit utilization, account mix, and smart strategies to boost your score faster."
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Monthly Improvement",
    description: "Each month, we continue disputing, tracking deletions, and refining your credit strategy for ongoing gains."
  }
]

export function SolutionSection() {
  return (
    <section className="bg-background py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <CheckCircle className="h-4 w-4" />
            Our Proven System
          </div>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            How We Fix Your Credit
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            A simple, step-by-step process designed to help you recover and rebuild your credit score.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-px w-full bg-gradient-to-r from-primary/20 to-primary/5 lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="mb-3 text-xs font-bold tracking-widest text-primary sm:mb-4">
                  STEP {step.number}
                </div>
                
                {/* Icon circle */}
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                  <step.icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground sm:mb-3 sm:text-xl">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
