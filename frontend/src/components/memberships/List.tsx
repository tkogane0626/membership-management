import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import MembershipDeleteModal from '../../components/memberships/DeleteModal';
import { fetchMembership, deleteMembership } from '../../api/axios';
import type { Membership } from '../../types/membership';

interface MembershipListProps {
  memberships: Membership[];
}

const MembershipList: React.FC<MembershipListProps> = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Membership | null>(null);
  const [membershipsData, setMembershipsData] = useState<Membership[]>([]);

  useEffect(() => {
    const loadMemberships = async (): Promise<void> => {
      try {
        const data = await fetchMembership();
        setMembershipsData(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    loadMemberships();
  }, []);

  const handleDelete = async (member: Membership): Promise<void> => {
    try {
      await deleteMembership(member.id);
      const updatedMemberships = await fetchMembership();
      setMembershipsData(updatedMemberships);
      setShowDeleteModal(false);
    } catch (error) {
      console.log('error', error);
      setShowDeleteModal(false);
    }
  };

  const onDelete = (member: Membership): void => {
    setSelectedMember(member);
    setShowDeleteModal(true);
  };

  const columns = [
    { label: 'No', key: 'id' },
    { label: '名前', key: 'name' },
    { label: 'フリガナ', key: 'name_kana' },
    { label: '入会日', key: 'membership_start_date' },
    { label: '退会日', key: 'membership_end_date' },
    { label: '道場', key: 'dojang' },
    { label: 'コース', key: 'course' },
    { label: '略称', key: 'abbreviation' },
    { label: '性別', key: 'gender' },
    { label: '生年月日', key: 'date_of_birth' },
    { label: '郵便番号', key: 'postal_code' },
    { label: '住所1', key: 'address1' },
    { label: '住所2', key: 'address2' },
    { label: 'TEL', key: 'telephone_number' },
    { label: '保護者名', key: 'parents' },
    { label: '職業', key: 'occupation' },
  ];

  return (
    <div className="table-container">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">{column.label}</th>
              ))}
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            {membershipsData.map((membership) => (
              <tr key={membership.id}>
                {columns.map((column) => (
                  <td key={column.key}>{membership[column.key as keyof Membership]}</td>
                ))}
                <td>
                  <div className="operation-buttons">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger" onClick={() => onDelete(membership)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedMember && (
        <MembershipDeleteModal
          showModal={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          selectedMember={selectedMember}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default MembershipList;
