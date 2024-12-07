import { ReferralStatus } from "@/enums/ReferralStatus";
import { Badge } from "../ui/badge";

interface StatusBadgeProps {
  status: ReferralStatus;
}

const statusColours = {
  [ReferralStatus.RECEIVED]: "bg-status-received text-status-received-foreground",
  [ReferralStatus.ACCEPTED]: "bg-status-accepted text-status-accepted-foreground",
  [ReferralStatus.DECLINED]: "bg-status-declined text-status-declined-foreground",
  [ReferralStatus.IN_PROGRESS]: "bg-status-in-progress text-status-in-progress-foreground",
  [ReferralStatus.READY]: "bg-status-ready text-status-ready-foreground",
  [ReferralStatus.PENDING]: "bg-status-pending text-status-pending-foreground",
  [ReferralStatus.COLLECTED]: "bg-status-collected text-status-collected-foreground"
};

export const mapStatusToEnum = (status: string): ReferralStatus => {
  switch (status.toLowerCase()) {
    case "received":
      return ReferralStatus.RECEIVED;
    case "accepted":
      return ReferralStatus.ACCEPTED;
    case "declined":
      return ReferralStatus.DECLINED;
    case "in progress":
      return ReferralStatus.IN_PROGRESS;
    case "ready":
      return ReferralStatus.READY;
    case "pending":
      return ReferralStatus.PENDING;
    case "collected":
      return ReferralStatus.COLLECTED;
    default:
      throw new Error(`Unknown status: ${status}`);
  }
};

export const ReferralStatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colourClass = statusColours[status] || "bg-gray-500 text-white";

  return (
    <Badge className={`${colourClass}`}>
      {status}
    </Badge>
  )
}