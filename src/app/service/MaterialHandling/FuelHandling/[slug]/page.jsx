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

const items = [
  { name: 'Coal Handling', slug: 'coal-handling' },
  { name: 'Husk Handling', slug: 'husk-handling' },
  { name: 'Biomass Briquettes Handling', slug: 'biomass-briquettes-handling' },
  { name: 'Belt Conveyor', slug: 'belt-conveyor' },
  { name: 'Bucket Elevator', slug: 'bucket-elevator' },
  { name: 'Slot Chain Conveyor', slug: 'slot-chain-conveyor' },
  { name: 'Vibratory Screen (Single/Double/Triple Deck)', slug: 'vibratory-screen' },
  { name: 'Screw Conveyor', slug: 'screw-conveyor' },
  { name: 'Crusher (Impact Hammer Mill)', slug: 'crusher-impact-hammer-mill' },
  { name: 'Crusher Cum Screen', slug: 'crusher-cum-screen' },
];

export default function FuelHandlingDetail() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center py-10 text-gray-600">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <Link
          href="/service/MaterialHandling#fuel-handling"
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
            More Fuel Handling Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {otherItems.map((item) => (
              <Link
                key={item.slug}
                href={`/service/MaterialHandling/FuelHandling/${item.slug}`}
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
          href="/service/MaterialHandling#fuel-handling"
          scroll={false}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          ← Back to Material Handling Systems
        </Link>
      </div>
    </main>
  );
}
