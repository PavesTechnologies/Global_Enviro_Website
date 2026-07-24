'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AHU from '@/app/service/HVAC/HVACSystems/[slug]/AHU';
import PassBox from '@/app/service/HVAC/HVACSystems/[slug]/PassBox';
import ModulesGrillsDiffusers from '@/app/service/HVAC/HVACSystems/[slug]/ModulesGrillsDiffusers';
import Filters from '@/app/service/HVAC/HVACSystems/[slug]/Filters';
import LaminarFlowUnit from '@/app/service/HVAC/HVACSystems/[slug]/LaminarFlowUnit';
import AirShower from '@/app/service/HVAC/HVACSystems/[slug]/AirShower';
import DustCollector from '@/app/service/HVAC/HVACSystems/[slug]/DustCollector';

const componentMap = {
  'ahus-air-handling-units': AHU,
  'pass-box-dynamic-static': PassBox,
  'modules-grills-diffusers-linear-bar-grills': ModulesGrillsDiffusers,
  'filters-pre-fine-hepa': Filters,
  'laminar-flow-unit': LaminarFlowUnit,
  'air-shower': AirShower,
  'dust-collector': DustCollector,
};

const items = [
  { name: 'AHUs (Air Handling Units)', slug: 'ahus-air-handling-units' },
  { name: 'Pass Box (Dynamic & Static)', slug: 'pass-box-dynamic-static' },
  { name: 'Modules, Grills, Diffusers & Linear Bar Grills', slug: 'modules-grills-diffusers-linear-bar-grills' },
  { name: 'Filters (Pre, Fine & HEPA)', slug: 'filters-pre-fine-hepa' },
  { name: 'Laminar Flow Unit', slug: 'laminar-flow-unit' },
  { name: 'Air Shower', slug: 'air-shower' },
  { name: 'Dust Collector', slug: 'dust-collector' },
];

export default function HVACSystemsDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-8 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/HVAC#hvac"
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
            More HVAC Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/HVAC/HVACSystems/${item.slug}`}
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
          href="/service/HVAC#hvac"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to HVAC & Clean Room Systems
        </Link>
      </div>
    </main>
  );
}
