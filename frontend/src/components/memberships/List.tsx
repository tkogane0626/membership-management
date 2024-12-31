import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import MembershipEditModal from '../../components/memberships/EditModal';
import MembershipDeleteModal from '../../components/memberships/DeleteModal';
import { fetchMembership, updateMembership, deleteMembership } from '../../api/axios';
import { columns } from '../../utils/membershipColumns';
import type { Membership } from '../../types/membership';

const List: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Membership | null>(null);
  const [membershipsData, setMembershipsData] = useState<Membership[]>([]);

  useEffect(() => {
    const loadMemberships = async (): Promise<void> => {
      try {
        const data = await fetchMembership();

        setMembershipsData(data);
      } catch (error) {
        console.log('Error fetching memberships', error);
      }
    };
    loadMemberships();
  }, []);

  const refreshMemberships = async (): Promise<void> => {
    try {
      const updatedMemberships = await fetchMembership();

      setMembershipsData(updatedMemberships);
    } catch (error) {
      console.log('Error refreshing memberships', error);
    }
  };

  const handleUpdate = async (member: Membership): Promise<void> => {
    try {
      await updateMembership(member.id, member);
      await refreshMemberships();

      setShowEditModal(false);
    } catch (error) {
      console.log('Error updating membership', error);

      setShowEditModal(false);
    }
  };

  const handleDelete = async (member: Membership): Promise<void> => {
    try {
      await deleteMembership(member.id);
      await refreshMemberships();

      setShowDeleteModal(false);
    } catch (error) {
      console.log('Error deleting membership', error);

      setShowDeleteModal(false);
    }
  };

  const handleMemberAction = (action: 'delete' | 'edit', member: Membership): void => {
    setSelectedMember(member);
    if (action === 'edit') setShowEditModal(true);
    if (action === 'delete') setShowDeleteModal(true);
  };

  const handleChange = (key: keyof Membership, value:  number | string): void => {
    if (selectedMember) {
      setSelectedMember(prev => (prev ? { ...prev, [key]: value } : null));
    }
  };

  const handleSave = async (): Promise<void> => {
    if (selectedMember) {
      const MISSING_FIELDS_LIMIT = 0;
      const missingFields: string[] = [];

      if (!selectedMember.name) missingFields.push('名前');
      if (!selectedMember.name_kana) missingFields.push('フリガナ');
      if (!selectedMember.dojang) missingFields.push('道場');
      if (!selectedMember.course) missingFields.push('コース');
      if (!selectedMember.gender) missingFields.push('性別');
      if (!selectedMember.address1) missingFields.push('住所1');

      if (!selectedMember.telephone_number && !selectedMember.parents_telephone_number) {
        missingFields.push('電話番号または保護者電話番号');
      }

      if (missingFields.length > MISSING_FIELDS_LIMIT) {
        alert(`未入力の項目があります: ${missingFields.join(', ')}`);
      } else {
        await handleUpdate(selectedMember);
      }
    }
  };

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
                    <Button variant="warning" onClick={() => handleMemberAction('edit', membership)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleMemberAction('delete', membership)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedMember && (
        <MembershipEditModal
          showModal={showEditModal}
          selectedMember={selectedMember}
          handleChange={handleChange}
          handleSave={handleSave}
          handleClose={() => setShowEditModal(false)}
        />
      )}

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

export default List;
