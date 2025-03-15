import { InfoIcon } from "lucide-react"

export default function DemoCredentials() {
  return (
    <div className="mt-4 rounded-md bg-muted p-4 text-sm">
      <div className="flex items-center gap-2 mb-2">
        <InfoIcon className="h-4 w-4" />
        <span className="font-medium">Demo Credentials</span>
      </div>
      <p>
        Email: <code className="bg-background px-1 py-0.5 rounded">demo@example.com</code>
      </p>
      <p>
        Password: <code className="bg-background px-1 py-0.5 rounded">password123</code>
      </p>
    </div>
  )
}

