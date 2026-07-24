'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import PanelForWalls from '@/app/service/HVAC/Paneling/[slug]/PanelForWalls';
import Doors from '@/app/service/HVAC/Paneling/[slug]/Doors';
import CrushPanel from '@/app/service/HVAC/Paneling/[slug]/CrushPanel';
import GlassWindows from '@/app/service/HVAC/Paneling/[slug]/GlassWindows';

const componentMap = {
  'panel-for-walls-partitions-ceiling': PanelForWalls,
  'doors': Doors,
  'crush-panel': CrushPanel,
  'glass-windows': GlassWindows,
};

const items = [
  { name: 'Panel for Walls, Partitions & Ceiling', slug: 'panel-for-walls-partitions-ceiling' },
  { name: 'Doors', slug: 'doors' },
  { name: 'Crush Panel', slug: 'crush-panel' },
  { name: 'Glass Windows', slug: 'glass-windows' },
];

export default function PanelingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-8 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/HVAC#paneling"
          scroll={false}
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to HVAC & Clean Room Systems
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
            More Paneling Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/HVAC/Paneling/${item.slug}`}
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
          href="/service/HVAC#paneling"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to HVAC & Clean Room Systems
        </Link>
      </div>
    </main>
  );
}
