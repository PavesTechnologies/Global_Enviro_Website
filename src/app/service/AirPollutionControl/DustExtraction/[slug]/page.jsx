'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import PulseJetBagFilter from '@/app/service/AirPollutionControl/DustExtraction/[slug]/PulseJetBagFilter';
import PulseJetBagFilterForBoiler from '@/app/service/AirPollutionControl/DustExtraction/[slug]/PulseJetBagFilterForBoiler';
import SingleCycloneSeparator from '@/app/service/AirPollutionControl/DustExtraction/[slug]/SingleCycloneSeparator';
import TreemaCycloneSeparator from '@/app/service/AirPollutionControl/DustExtraction/[slug]/TreemaCycloneSeparator';
import MultiCycloneSeparator from '@/app/service/AirPollutionControl/DustExtraction/[slug]/MultiCycloneSeparator';
import CentrifugalFans from '@/app/service/AirPollutionControl/DustExtraction/[slug]/CentrifugalFans';
import RotaryAirLockValve from '@/app/service/AirPollutionControl/DustExtraction/[slug]/RotaryAirLockValve';
import AxialFlowFans from '@/app/service/AirPollutionControl/DustExtraction/[slug]/AxialFlowFans';

const componentMap = {
  'pulse-jet-bag-filter': PulseJetBagFilter,
  'pulse-jet-bag-filter-for-boiler': PulseJetBagFilterForBoiler,
  'single-cyclone-separator': SingleCycloneSeparator,
  'treema-cyclone-separator': TreemaCycloneSeparator,
  'multi-cyclone-separator': MultiCycloneSeparator,
  'centrifugal-fans': CentrifugalFans,
  'rav-rotary-air-lock-valve': RotaryAirLockValve,
  'axial-flow-fans': AxialFlowFans,
};

const items = [
  { name: 'Pulse Jet Bag Filter', slug: 'pulse-jet-bag-filter' },
  { name: 'Pulse Jet Bag Filter for Boiler', slug: 'pulse-jet-bag-filter-for-boiler' },
  { name: 'Single Cyclone Separator', slug: 'single-cyclone-separator' },
  { name: 'Treema Cyclone Separator', slug: 'treema-cyclone-separator' },
  { name: 'Multi Cyclone Separator', slug: 'multi-cyclone-separator' },
  { name: 'Centrifugal Fans', slug: 'centrifugal-fans' },
  { name: 'RAV (Rotary Air Lock Valve)', slug: 'rav-rotary-air-lock-valve' },
  { name: 'Axial Flow Fans', slug: 'axial-flow-fans' },
];

export default function DustExtractionDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/AirPollutionControl"
          scroll={false}
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Air Pollution Control Systems
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
            More Dust Extraction Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/AirPollutionControl/DustExtraction/${item.slug}`}
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
          href="/service/AirPollutionControl#dust-extraction"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Air Pollution Control Systems
        </Link>
      </div>
    </main>
  );
}
