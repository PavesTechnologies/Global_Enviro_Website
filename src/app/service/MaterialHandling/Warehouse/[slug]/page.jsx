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

const items = [
  { name: 'EOT Cranes', slug: 'eot-cranes' },
  { name: 'Single Girder EOT Crane', slug: 'single-girder-eot-crane' },
  { name: 'Double Girder EOT Crane', slug: 'double-girder-eot-crane' },
];

export default function WarehouseDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-10 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/MaterialHandling#warehouse"
          scroll={false}
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Material Handling Systems
        </Link>
      </div>
    );
  }

  const otherItems = items.filter((item) => item.slug !== slug);

  return (
    <main>
      <Component />

      {otherItems.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            More Warehouse Handling Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/MaterialHandling/Warehouse/${item.slug}`}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pb-6">
        <Link
          href="/service/MaterialHandling#warehouse"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Material Handling Systems
        </Link>
      </div>
    </main>
  );
}
