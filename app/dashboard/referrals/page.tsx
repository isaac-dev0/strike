import DataTable from "@/components/DataTable";
import { columns } from "@/components/referrals/table/ReferralTableColumns";
import { Referral } from "@/types/Referral";
import { createClient } from "@/utils/supabase/server";

async function getData(): Promise<Referral[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('referrals')
    .select(`
      *,
      guardians (
        id,
        surname
      ),
      referees (
        id,
        email
      )
    `);

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  const processedData = (data ?? []).map((referral) => ({
    ...referral,
    guardianSurnames: referral.guardians
      ?.map((guardian: { first_name: string, surname: string }) => guardian.surname)
      .join(", ") || "",
  }));

  return processedData as Referral[];
}

export default async function Referrals() {
  const referrals: Referral[] = await getData();

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
          searchParams="guardianSurnames"
        />
      </div>
    </>
  )
}