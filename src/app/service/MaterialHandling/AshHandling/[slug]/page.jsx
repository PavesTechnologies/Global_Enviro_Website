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

export default function AshHandlingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/MaterialHandling#ash-handling"
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
          href="/service/MaterialHandling#ash-handling"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Material Handling Systems
        </Link>
      </div>
    </main>
  );
}
