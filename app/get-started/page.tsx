"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CHECKOUT_URLS = {
  standard: "https://www.fanbasis.com/agency-checkout/evolve-credit/14v4q",
  "fast-track": "https://www.fanbasis.com/agency-checkout/evolve-credit/7XBXB",
}

function GetStartedForm() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") as keyof typeof CHECKOUT_URLS | null
  const checkoutUrl = plan && CHECKOUT_URLS[plan] ? CHECKOUT_URLS[plan] : CHECKOUT_URLS.standard

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Send data to our API route which forwards to GoHighLevel
    try {
      await fetch("/api/lead-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          plan: plan || "standard",
        }),
      })
    } catch (error) {
      // Continue to checkout even if webhook fails
      console.error("Webhook error:", error)
    }
    
    // Redirect to the appropriate checkout based on plan
    window.location.href = checkoutUrl
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone

  return (
    <main className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-lg px-4">
          {/* Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Start Your Credit Repair
              </h1>
              <p className="mt-2 text-muted-foreground">
                Enter your information below to get started with our professional credit repair service.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-11"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="mt-6 h-12 w-full text-base font-semibold shadow-lg shadow-primary/25"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  "Redirecting..."
                ) : (
                  <>
                    Continue to Repair Your Credit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-6 space-y-3 border-t border-border pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Your information is secure and encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No credit card required to get started</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Cancel anytime - no long-term contracts</span>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to home
            </Link>
          </p>
        </div>
      </main>
  )
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/evolve-funding-logo.png" 
                alt="Evolve Funding" 
                width={180} 
                height={48}
                className="h-8 w-auto sm:h-10"
                priority
              />
            </Link>
          </div>
        </div>
      </header>

      <Suspense fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      }>
        <GetStartedForm />
      </Suspense>
    </div>
  )
}
