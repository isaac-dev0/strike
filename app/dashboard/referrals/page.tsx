import DataTable from "@/components/DataTable";
import { columns } from "@/components/referrals/table/ReferralTableColumns";
import { ReferralStatus } from "@/enums/ReferralStatus";
import { Referral } from "@/types/Referral";

// async function getData(): Promise<Referral[]> {
//   return [
//     // Fetch API data here.
//   ]
// }

export const referrals: Referral[] = [
  {
    id: "GB-00166",
    referee: "John Smith",
    familyName: "Johnson",
    status: ReferralStatus.ACCEPTED
  },
  {
    id: "GB-21235",
    referee: "Bob Jones",
    familyName: "Smith",
    status: ReferralStatus.DECLINED
  },
  {
    id: "GB-12311",
    referee: "Daisy Anderson",
    familyName: "Villa",
    status: ReferralStatus.RECEIVED
  },
  {
    id: "GB-56533",
    referee: "Valerie Bowlhead",
    familyName: "Gray",
    status: ReferralStatus.PENDING
  },
  {
    id: "GB-89753",
    referee: "Vernon Grist",
    familyName: "Falla",
    status: ReferralStatus.IN_PROGRESS
  },
  {
    id: "GB-22344",
    referee: "Nina Neutron",
    familyName: "Achme",
    status: ReferralStatus.READY
  },
  {
    id: "GB-45555",
    referee: "Graham Vins",
    familyName: "De Luca",
    status: ReferralStatus.COLLECTED
  },
]

export default async function Referrals() {
  // const data = await getData()

  return (
    <>
      <h2>Referrals</h2>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <DataTable 
          columns={columns} 
          data={referrals}
          searchParams="familyName" 
        />
      </div>
    </>
  )
}