import SignUpForm from "@/components/auth/sign-up-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | Task Management App",
  description: "Create a new account",
}

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <SignUpForm />
    </div>
  )
}

