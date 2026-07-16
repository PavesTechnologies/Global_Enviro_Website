'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import PulseJetBagFilter from '@/app/service/AirPollutionControl/DustExtraction/[slug]/PulseJetBagFilter';
import SingleCycloneSeparator from '@/app/service/AirPollutionControl/DustExtraction/[slug]/SingleCycloneSeparator';
import TreemaCycloneSeparator from '@/app/service/AirPollutionControl/DustExtraction/[slug]/TreemaCycloneSeparator';
import MultiCycloneSeparator from '@/app/service/AirPollutionControl/DustExtraction/[slug]/MultiCycloneSeparator';
import CentrifugalFans from '@/app/service/AirPollutionControl/DustExtraction/[slug]/CentrifugalFans';
import RotaryAirLockValve from '@/app/service/AirPollutionControl/DustExtraction/[slug]/RotaryAirLockValve';
import AxialFlowFans from '@/app/service/AirPollutionControl/DustExtraction/[slug]/AxialFlowFans';

const componentMap = {
  'pulse-jet-bag-filter': PulseJetBagFilter,
  'single-cyclone-separator': SingleCycloneSeparator,
  'treema-cyclone-separator': TreemaCycloneSeparator,
  'multi-cyclone-separator': MultiCycloneSeparator,
  'centrifugal-fans': CentrifugalFans,
  'rav-rotary-air-lock-valve': RotaryAirLockValve,
  'axial-flow-fans': AxialFlowFans,
};

export default function DustExtractionDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/AirPollutionControl"
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Air Pollution Control Systems
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Component />
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Link
          href="/service/AirPollutionControl"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Air Pollution Control Systems
        </Link>
      </div>
    </main>
  );
}
