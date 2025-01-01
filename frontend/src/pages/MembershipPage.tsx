import React, { useEffect, useState } from 'react';
import MembershipList from '../components/memberships/List';
import { fetchMembership } from '../api/axios';
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
      <MembershipList
        memberships={memberships}
      />
    </div>
  );
};

export default MembershipPage;
