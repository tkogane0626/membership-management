import React, { useEffect, useState } from 'react';
import { fetchMembership } from '../api/axios';
import MembershipList from '../components/memberships/List';
import type { Membership } from '../types/membership';

const MembershipPage: React.FC = () => {
  const [memberships, setMemberships] = useState<Membership[]>([]);

  useEffect(() => {
    const loadMemberships = async (): Promise<void> => {
      const fetchedMemberships = await fetchMembership();
      setMemberships(fetchedMemberships);
    };

    loadMemberships();
  }, []);

  return (
    <div>
      <h1>会員情報</h1>
      <MembershipList
        memberships={memberships}
      />
    </div>
  );
};

export default MembershipPage;
