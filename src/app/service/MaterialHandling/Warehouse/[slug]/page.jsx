'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import EOTCranes from '@/app/service/MaterialHandling/Warehouse/[slug]/EOTCranes';
import SingleGirderEOTCrane from '@/app/service/MaterialHandling/Warehouse/[slug]/SingleGirderEOTCrane';
import DoubleGirderEOTCrane from '@/app/service/MaterialHandling/Warehouse/[slug]/DoubleGirderEOTCrane';

const componentMap = {
  'eot-cranes': EOTCranes,
  'single-girder-eot-crane': SingleGirderEOTCrane,
  'double-girder-eot-crane': DoubleGirderEOTCrane,
};

export default function WarehouseDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/MaterialHandling#warehouse"
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Material Handling Systems
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Component />
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Link
          href="/service/MaterialHandling#warehouse"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Material Handling Systems
        </Link>
      </div>
    </main>
  );
}
