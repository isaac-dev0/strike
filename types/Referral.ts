import { ReferralStatus } from "@/enums/ReferralStatus"

export type Referral = {
  id: string
  referee: string
  familyName: string
  status: ReferralStatus
}