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

export default function PanelingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/HVAC#paneling"
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to HVAC & Clean Room Systems
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Component />
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Link
          href="/service/HVAC#paneling"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to HVAC & Clean Room Systems
        </Link>
      </div>
    </main>
  );
}
