import { useEffect, useState } from "react";
import client from "utils/client";
import groq from "groq";
import { InteriorLayout } from "modules/shared/layouts/InteriorLayout";
import { SponsorDashboardPage } from 'modules/sponsorDashboard';
import { useUser } from '@auth0/nextjs-auth0';

const query = groq`*[_type == "sponsor" && associatedEmails match $email] {
  title,
  logo,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  contractsInvoices[]
}[0]`;

export default function sponsor(props) {
  const [sponsor, setSponsor] = useState();
  const { user } = useUser();

  useEffect(() => {
    const email = user?.email;
    if (email) client.fetch(query, { email }).then((res) => setSponsor(res));
  }, [user]);

  return (
    <InteriorLayout>
      <SponsorDashboardPage sponsor={sponsor} />
    </InteriorLayout>
  )
}