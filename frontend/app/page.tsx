import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manage Your Tasks Efficiently
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Stay organized, focused, and in control of all your tasks with our simple task management app.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/sign-in">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/sign-up">Create Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <CheckSquare className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Simple Task Management</h3>
                <p className="text-muted-foreground">
                  Create, edit, and organize your tasks with an intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <CheckSquare className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Track Your Progress</h3>
                <p className="text-muted-foreground">
                  See how many tasks you've completed and what's still on your plate.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <CheckSquare className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Dark Mode Support</h3>
                <p className="text-muted-foreground">Work comfortably day or night with our dark mode feature.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

