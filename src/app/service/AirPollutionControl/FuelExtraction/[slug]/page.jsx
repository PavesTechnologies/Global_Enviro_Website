'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import WetScrubber from '@/app/service/AirPollutionControl/FuelExtraction/[slug]/WetScrubber';
import VenturiScrubber from '@/app/service/AirPollutionControl/FuelExtraction/[slug]/VenturiScrubber';
import CarbonFilterForOdourControl from '@/app/service/AirPollutionControl/FuelExtraction/[slug]/CarbonFilterForOdourControl';

const componentMap = {
  'wet-scrubber': WetScrubber,
  'venturi-scrubber': VenturiScrubber,
  'carbon-filter-for-odour-control': CarbonFilterForOdourControl,
};

export default function FuelExtractionDetail() {
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
