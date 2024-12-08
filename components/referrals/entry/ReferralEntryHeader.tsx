import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Archive, ChevronLeft, Download } from "lucide-react"
import { mapStatusToEnum, ReferralStatusBadge } from "@/components/referrals/ReferralStatusBadge"
import { mapPriorityToEnum, ReferralPriorityBadge } from "@/components/referrals/ReferralPriorityBadge"

interface ReferralEntryHeaderProps {
  id: string
  status: string
  priority: string
  createdAt: string
  lastUpdated: string
}

export default function ReferralEntryHeader({ 
  id,
  status,
  priority,
  createdAt,
  lastUpdated
}: ReferralEntryHeaderProps) {
  const createdAtFormatted = new Date(createdAt as string)
  const updatedAtFormatted = new Date(lastUpdated as string)

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <Button variant="link">
            <ChevronLeft /> Return to Referrals
          </Button>
        </div>
      </div>
      <Card className="my-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h2>{id}</h2>
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size="icon" variant="ghost">
                      <Download />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Download as PDF</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size="icon" variant="ghost">
                      <Archive />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Archive</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardTitle>
          <CardDescription className="w-4/5">
            All information contained within this referral is strictly confidential and the details contained
            within should not be discussed external to the perview of those working within the organisation.
            You can view the <span className="underline">Terms of Service</span> for more information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row w-3/4 justify-between">
            <div className="flex flex-col gap-2">
              <small>Status</small>
              {/* TODO: On-click, open dialog to change status */}
              <ReferralStatusBadge status={mapStatusToEnum(status)} />
            </div>
            <div className="flex flex-col gap-2">
              <small>Priority</small>
              {/* TODO: On-click, open dialog to change priority */}
              <ReferralPriorityBadge priority={mapPriorityToEnum(priority)} />
            </div>
            <div className="flex flex-col gap-2">
              <small>Created At</small>
              <p>{createdAtFormatted.toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
            </div>
            <div className="flex flex-col gap-2">
              <small>Last Updated</small>
              <p>{updatedAtFormatted.toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
