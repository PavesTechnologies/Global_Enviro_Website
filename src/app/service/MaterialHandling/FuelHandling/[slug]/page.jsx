'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CoalHandling from '@/app/service/MaterialHandling/FuelHandling/[slug]/CoalHandling';
import HuskHandling from '@/app/service/MaterialHandling/FuelHandling/[slug]/HuskHandling';
import BiomassBriquettesHandling from '@/app/service/MaterialHandling/FuelHandling/[slug]/BiomassBriquettesHandling';
import BeltConveyor from '@/app/service/MaterialHandling/FuelHandling/[slug]/BeltConveyor';
import BucketElevator from '@/app/service/MaterialHandling/FuelHandling/[slug]/BucketElevator';
import SlotChainConveyor from '@/app/service/MaterialHandling/FuelHandling/[slug]/SlotChainConveyor';
import VibratoryScreen from '@/app/service/MaterialHandling/FuelHandling/[slug]/VibratoryScreen';
import ScrewConveyor from '@/app/service/MaterialHandling/FuelHandling/[slug]/ScrewConveyor';
import CrusherImpactHammerMill from '@/app/service/MaterialHandling/FuelHandling/[slug]/CrusherImpactHammerMill';
import CrusherCumScreen from '@/app/service/MaterialHandling/FuelHandling/[slug]/CrusherCumScreen';

const componentMap = {
  'coal-handling': CoalHandling,
  'husk-handling': HuskHandling,
  'biomass-briquettes-handling': BiomassBriquettesHandling,
  'belt-conveyor': BeltConveyor,
  'bucket-elevator': BucketElevator,
  'slot-chain-conveyor': SlotChainConveyor,
  'vibratory-screen': VibratoryScreen,
  'screw-conveyor': ScrewConveyor,
  'crusher-impact-hammer-mill': CrusherImpactHammerMill,
  'crusher-cum-screen': CrusherCumScreen,
};

export default function FuelHandlingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/MaterialHandling#fuel-handling"
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
          href="/service/MaterialHandling#fuel-handling"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Material Handling Systems
        </Link>
      </div>
    </main>
  );
}
