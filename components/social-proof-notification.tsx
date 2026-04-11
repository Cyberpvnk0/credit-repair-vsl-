"use client"

import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

const firstNames = [
  "James", "Michael", "Robert", "David", "William", "John", "Richard", "Thomas",
  "Maria", "Jennifer", "Linda", "Patricia", "Elizabeth", "Susan", "Jessica", "Sarah",
  "Marcus", "Andre", "Destiny", "Jasmine", "Carlos", "Miguel", "Angela", "Tiffany",
  "Brandon", "Kevin", "Anthony", "Brittany", "Ashley", "Stephanie", "Christina", "Nicole"
]

const lastInitials = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "W"]

const locations = [
  "Atlanta, GA", "Houston, TX", "Miami, FL", "Chicago, IL", "Dallas, TX",
  "Los Angeles, CA", "Phoenix, AZ", "Charlotte, NC", "Detroit, MI", "Memphis, TN",
  "Baltimore, MD", "Philadelphia, PA", "New York, NY", "Jacksonville, FL", "San Antonio, TX"
]

const plans = [
  { name: "Standard Credit Repair", color: "text-primary" },
  { name: "Fast Track Credit Repair", color: "text-emerald-600" }
]

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getTimeAgo(): string {
  const minutes = Math.floor(Math.random() * 10) + 1
  return `${minutes} min ago`
}

export function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [notification, setNotification] = useState({
    name: "",
    location: "",
    plan: plans[0],
    timeAgo: ""
  })

  useEffect(() => {
    const showNotification = () => {
      // Generate new random notification
      setNotification({
        name: `${getRandomItem(firstNames)} ${getRandomItem(lastInitials)}.`,
        location: getRandomItem(locations),
        plan: getRandomItem(plans),
        timeAgo: getTimeAgo()
      })
      
      // Show notification
      setIsVisible(true)
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000)
    
    // Then show every 10 seconds
    const interval = setInterval(showNotification, 10000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-out sm:bottom-6 sm:left-6 ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-lg sm:p-4 max-w-[300px] sm:max-w-[340px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
          <CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium text-foreground sm:text-base">
            {notification.name}
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Just purchased <span className={`font-medium ${notification.plan.color}`}>{notification.plan.name}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            {notification.location} • {notification.timeAgo}
          </p>
        </div>
      </div>
    </div>
  )
}
