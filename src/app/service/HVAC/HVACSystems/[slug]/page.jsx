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

export default function HVACSystemsDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/HVAC#hvac"
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
          href="/service/HVAC#hvac"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to HVAC & Clean Room Systems
        </Link>
      </div>
    </main>
  );
}
