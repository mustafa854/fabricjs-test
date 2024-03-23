import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Ban, Terminal } from 'lucide-react'

const ErrorNotification = () => {
  return (
    <Alert variant="destructive" className="absolute top-full -translate-y-24 right-64 z-50 w-96">
      <Ban className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>

  )
}

export default ErrorNotification