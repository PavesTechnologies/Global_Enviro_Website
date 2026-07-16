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
