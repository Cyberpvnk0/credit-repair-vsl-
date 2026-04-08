"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, VolumeX } from "lucide-react"

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      setIsMuted(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-20 lg:py-32">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Trusted by 2,500+ clients nationwide
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Fix Your Credit Score & Unlock Financial Freedom
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
            Our done-for-you monthly service removes negative items, disputes errors, 
            and optimizes your credit profile — so you can finally get approved.
          </p>

          {/* VSL Video */}
          <div className="mt-8 w-full max-w-3xl sm:mt-10">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card shadow-xl sm:rounded-2xl">
              <video 
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
                autoPlay
                muted
                loop
              >
                <source src="https://wtmybw1lfshqhpvx.public.blob.vercel-storage.com/0404%20%283%29%287%29%20%281%29.mov" type="video/quicktime" />
                <source src="https://wtmybw1lfshqhpvx.public.blob.vercel-storage.com/0404%20%283%29%287%29%20%281%29.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Unmute Button Overlay */}
              {isMuted && (
                <button
                  onClick={handleUnmute}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
                  aria-label="Unmute video"
                >
                  <div className="flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:px-8 sm:py-5 sm:text-xl">
                    <VolumeX className="h-6 w-6 sm:h-7 sm:w-7" />
                    UNMUTE
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col items-center gap-4 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:px-0">
            <Button size="lg" className="h-12 w-full px-6 text-base font-semibold shadow-lg shadow-primary/25 sm:h-14 sm:w-auto sm:px-8 sm:text-lg" asChild>
              <a href="/get-started">
                Start Repair Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Micro text */}
          <p className="mt-4 text-sm text-muted-foreground">
            No long-term contracts. Cancel anytime.
          </p>

          {/* Secondary link */}
          <a 
            href="https://funding-vsl.vercel.app/" 
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Already have a 680+ score? See how to get funded
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
