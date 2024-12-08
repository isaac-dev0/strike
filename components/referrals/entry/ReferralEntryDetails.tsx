import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit } from "lucide-react";

export default function ReferralEntryDetails({ id }: { id: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h2>Details</h2>
        <Button size="sm" variant="outline">
          <Edit /> Edit
        </Button>
      </div>
      <Separator className="my-2" />
    </div>
  )
}