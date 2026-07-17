'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import BiomassBriquettes from '@/app/service/Metallurgicals/Briquettes/[slug]/BiomassBriquettes';

const componentMap = {
  'biomass-briquettes': BiomassBriquettes,
};

export default function BriquettesDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/Metallurgicals#briquettes"
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Metallurgicals &amp; Briquettes
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Component />
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Link
          href="/service/Metallurgicals#briquettes"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Metallurgicals &amp; Briquettes
        </Link>
      </div>
    </main>
  );
}
