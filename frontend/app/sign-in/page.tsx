import SignInForm from "@/components/auth/sign-in-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | Task Management App",
  description: "Sign in to your account",
}

export default function SignInPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <SignInForm />
    </div>
  )
}

