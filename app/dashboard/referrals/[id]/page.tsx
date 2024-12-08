import ReferralEntryDetails from "@/components/referrals/entry/ReferralEntryDetails"
import ReferralEntryHeader from "@/components/referrals/entry/ReferralEntryHeader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Referral } from "@/types/Referral"
import { createClient } from "@/utils/supabase/server"

async function getData(referral_id: string): Promise<Referral> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("referrals")
    .select("*")
    .eq("referral_id", referral_id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Referral;
}

export default async function ViewReferral({ params }: { params: any }) {
  const { id: referral_id } = params;
  const referral: Referral = await getData(referral_id);

  return (
    <div>
      <ReferralEntryHeader 
        id={referral.referral_id}
        status={referral.status}
        priority={referral.priority ?? ""}
        createdAt={referral.created_at}
        lastUpdated={referral.updated_at} 
      />
      <Tabs defaultValue="details" className="w-full">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="flex w-full flex-row gap-4">
            <div className="w-full rounded-lg bg-muted/50 p-4">
              <ReferralEntryDetails id={referral.referral_id} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="items">
          <div className="flex flex-1 flex-col gap-4">
            <div className="w-full rounded-lg bg-muted/50 p-4">
              <h2>Items</h2>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <div className="flex flex-1 flex-col gap-4">
            <div className="w-full rounded-lg bg-muted/50 p-4">
              <h2>History</h2>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
