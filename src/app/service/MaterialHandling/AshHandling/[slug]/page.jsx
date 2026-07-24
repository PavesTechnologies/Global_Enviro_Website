'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import DensePhaseAshHandling from '@/app/service/MaterialHandling/AshHandling/[slug]/DensePhaseAshHandling';
import LeanPhaseAshHandling from '@/app/service/MaterialHandling/AshHandling/[slug]/LeanPhaseAshHandling';
import MechanicalAshHandling from '@/app/service/MaterialHandling/AshHandling/[slug]/MechanicalAshHandling';
import DenseVeyor from '@/app/service/MaterialHandling/AshHandling/[slug]/DenseVeyor';
import AshVeyor from '@/app/service/MaterialHandling/AshHandling/[slug]/AshVeyor';
import WetScrapper from '@/app/service/MaterialHandling/AshHandling/[slug]/WetScrapper';
import AshConditioner from '@/app/service/MaterialHandling/AshHandling/[slug]/AshConditioner';

const componentMap = {
  'dense-phase-ash-handling': DensePhaseAshHandling,
  'lean-phase-ash-handling': LeanPhaseAshHandling,
  'mechanical-ash-handling': MechanicalAshHandling,
  'dense-veyor': DenseVeyor,
  'ash-veyor': AshVeyor,
  'wet-scrapper': WetScrapper,
  'ash-conditioner': AshConditioner,
};

const items = [
  { name: 'Dense Phase Ash Handling', slug: 'dense-phase-ash-handling' },
  { name: 'Lean Phase Ash Handling', slug: 'lean-phase-ash-handling' },
  { name: 'Mechanical Ash Handling', slug: 'mechanical-ash-handling' },
  { name: 'Dense Veyor', slug: 'dense-veyor' },
  { name: 'Ash Veyor', slug: 'ash-veyor' },
  { name: 'Wet Scrapper', slug: 'wet-scrapper' },
  { name: 'Ash Conditioner', slug: 'ash-conditioner' },
];

export default function AshHandlingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/MaterialHandling#ash-handling"
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
            More Ash Handling Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/MaterialHandling/AshHandling/${item.slug}`}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Link
          href="/service/MaterialHandling#ash-handling"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Material Handling Systems
        </Link>
      </div>
    </main>
  );
}
