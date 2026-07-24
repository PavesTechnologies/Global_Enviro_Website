'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Liners from '@/app/service/Metallurgicals/Casting/[slug]/Liners';
import Beaters from '@/app/service/Metallurgicals/Casting/[slug]/Beaters';
import CarbonSteelCastings from '@/app/service/Metallurgicals/Casting/[slug]/CarbonSteelCastings';
import MagnaSteelCastings from '@/app/service/Metallurgicals/Casting/[slug]/MagnaSteelCastings';
import CastIronComponents from '@/app/service/Metallurgicals/Casting/[slug]/CastIronComponents';

const componentMap = {
  liners: Liners,
  beaters: Beaters,
  'carbon-steel-castings': CarbonSteelCastings,
  'magna-steel-castings': MagnaSteelCastings,
  'cast-iron-components': CastIronComponents,
};

const items = [
  { name: 'Liners', slug: 'liners' },
  { name: 'Beaters', slug: 'beaters' },
  { name: 'Carbon Steel Castings', slug: 'carbon-steel-castings' },
  { name: 'Magna Steel Castings', slug: 'magna-steel-castings' },
  { name: 'Cast Iron Components', slug: 'cast-iron-components' },
];

export default function CastingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-8 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/Metallurgicals#casting"
          scroll={false}
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Metallurgicals &amp; Briquettes
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
            More Casting Products
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/Metallurgicals/Casting/${item.slug}`}
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
          href="/service/Metallurgicals#casting"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Metallurgicals &amp; Briquettes
        </Link>
      </div>
    </main>
  );
}
