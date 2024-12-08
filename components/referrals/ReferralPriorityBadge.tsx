import { ReferralPriority } from "@/enums/ReferralPriority";
import { Badge } from "@/components/ui/badge";

interface PriorityBadgeProps {
  priority: ReferralPriority;
}

const priorityColours = {
  [ReferralPriority.NONE]: "bg-gray-500 text-white",
  [ReferralPriority.LOW]: "bg-status-accepted text-status-accepted-foreground",
  [ReferralPriority.MEDIUM]: "bg-status-pending text-status-pending-foreground",
  [ReferralPriority.HIGH]: "bg-status-declined text-status-declined-foreground",
  [ReferralPriority.URGENT]: "bg-status-declined text-status-declined-foreground",
};

export const mapPriorityToEnum = (priority: string): ReferralPriority => {
  switch (priority.toLowerCase()) {
    case "none":
      return ReferralPriority.NONE;
    case "received":
      return ReferralPriority.LOW;
    case "accepted":
      return ReferralPriority.MEDIUM;
    case "declined":
      return ReferralPriority.HIGH;
    case "in progress":
      return ReferralPriority.URGENT;
    default:
      throw new Error(`Unknown priority: ${priority}`);
  }
};

export const ReferralPriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const colourClass = priorityColours[priority] || "bg-gray-500 text-white";

  return (
    <Badge className={`${colourClass}`}>
      {priority}
    </Badge>
  )
}