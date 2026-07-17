import CareersBrowser from "@/components/careers/CareersBrowser";
import { getActiveJobs } from "@/lib/queries/jobs";

export const dynamic = "force-dynamic";

export default async function CareersPage() {
  let jobs = [];

  try {
    jobs = await getActiveJobs();
  } catch {
    jobs = [];
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-bold text-accent">
        Careers at Global Industries
      </h1>
      <p className="mb-10 text-gray-600">
        We&apos;re always looking for passionate people to join our growing
        team. Browse our open roles below.
      </p>

      <CareersBrowser jobs={jobs} />
    </main>
  );
}
