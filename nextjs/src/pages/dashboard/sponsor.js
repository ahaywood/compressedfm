import Link from "next/link";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { SponsorDashboardPage } from 'modules/sponsorDashboard';

export default function sponsor() {
  return (
    <InteriorLayout>
      <SponsorDashboardPage />
    </InteriorLayout>
  )
}
