'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CompactDustCollector from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/CompactDustCollector';
import TelescopicLoadingSpout from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/TelescopicLoadingSpout';
import HorizontalPositioner from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/HorizontalPositioner';
import FlowControlGates from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/FlowControlGates';
import PneumaticSlideGates from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/PneumaticSlideGates';
import ManualSlideGates from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/ManualSlideGates';
import IFMInsertFilterModule from '@/app/service/AirPollutionControl/CommonEquipment/[slug]/IFMInsertFilterModule';

const componentMap = {
  'compact-dust-collector': CompactDustCollector,
  'telescopic-loading-spout': TelescopicLoadingSpout,
  'horizontal-positioner': HorizontalPositioner,
  'flow-control-gates': FlowControlGates,
  'pneumatic-slide-gates': PneumaticSlideGates,
  'manual-slide-gates': ManualSlideGates,
  'ifm-insert-filter-module': IFMInsertFilterModule,
};

const items = [
  { name: 'Compact Dust Collector', slug: 'compact-dust-collector' },
  { name: 'Telescopic Loading Spout', slug: 'telescopic-loading-spout' },
  { name: 'Horizontal Positioner', slug: 'horizontal-positioner' },
  { name: 'Flow Control Gates', slug: 'flow-control-gates' },
  { name: 'Pneumatic Slide Gates', slug: 'pneumatic-slide-gates' },
  // { name: 'Manual Slide Gates', slug: 'manual-slide-gates' },
  { name: 'IFM (Insert Filter Module)', slug: 'ifm-insert-filter-module' },
];

export default function CommonEquipmentDetail() {
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

  const otherItems = items.filter((item) => item.slug !== slug);

  return (
    <main>
      <Component />

      {otherItems.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            More Common Equipment
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/AirPollutionControl/CommonEquipment/${item.slug}`}
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
          href="/service/AirPollutionControl#silo-bin"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Air Pollution Control Systems
        </Link>
      </div>
    </main>
  );
}
