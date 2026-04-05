import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most clients begin seeing negative items removed within 30-45 days of starting the program. However, significant score improvements typically occur over 3-6 months as more items are disputed and removed. Every situation is unique, and results depend on the number and type of negative items on your report."
  },
  {
    question: "What results can I expect?",
    answer: "While we can't guarantee specific results (no legitimate company can), our average client sees a 127-point increase in their credit score over the course of their time with us. We focus on removing inaccurate, unverifiable, and unfair negative items including collections, late payments, charge-offs, and more."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. We operate on a month-to-month basis with no long-term contracts. You can cancel your subscription at any time by contacting our support team. There are no cancellation fees or hidden charges."
  },
  {
    question: "Is credit repair legal?",
    answer: "Yes, credit repair is 100% legal. The Credit Repair Organizations Act (CROA) establishes your legal right to dispute inaccurate information on your credit report. We use proven, compliant methods to challenge negative items on your behalf."
  },
  {
    question: "What information do you need from me?",
    answer: "To get started, we'll need copies of your credit reports from all three bureaus (Equifax, Experian, and TransUnion), along with some basic personal information. Our team will guide you through the simple enrollment process."
  },
  {
    question: "How is this different from doing it myself?",
    answer: "While you can dispute items yourself, our team brings years of experience, proven strategies, and persistent follow-up that gets results. We know what works, what language to use, and how to escalate disputes effectively. Most importantly, we save you dozens of hours of tedious work."
  }
]

export function FAQSection() {
  return (
    <section className="bg-background py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Get answers to common questions about our credit repair service.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-4 data-[state=open]:border-primary/30 sm:rounded-xl sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
