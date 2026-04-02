'use client';
import { useParams } from 'next/navigation';
import PulseJetBagFilter from "@/components/PulseJetBagFilter";
import DustExtraction from "@/components/DustExtraction";
import HVAC from "@/app/service/HVAC/page.jsx";
import CentrifugalFans from '@/components/CentrifugalFans';




export default function AirPollutionControlDetail() {
  const { id } = useParams();

  switch (id) {
    case '1':
      return <PulseJetBagFilter />;
    case '2':
      return <DustExtraction />;
     case '3':
         return <AshHandling/>;
     case '4':
         return <CentrifugalFans/>;
    case '5':
        return <HVAC />;
    default:
      return (
        <div className="text-center py-20 text-gray-600">
          <h1 className="text-2xl font-semibold">Page Not Found</h1>
        </div>
      );
  }
}










