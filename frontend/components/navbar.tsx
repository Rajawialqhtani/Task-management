"use client"

import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { ThemeToggle } from "./theme-toggle"
import UserProfile from "./user-profile"
import { Button } from "@/components/ui/button"
import { CheckSquare } from "lucide-react"

export default function Navbar() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <CheckSquare className="h-6 w-6" />
            <span className="font-bold">TaskManager</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {user ? (
              <UserProfile />
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

