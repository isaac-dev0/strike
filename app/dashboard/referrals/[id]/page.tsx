import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default async function ViewReferral({ params }: { params: any }) {
  const data = await params

  return (
    <div>
      <div>
        <Button variant="outline">
          Return to Referrals
        </Button>
        <h2>{data.id}</h2>
      </div>
    </div>
  )
}