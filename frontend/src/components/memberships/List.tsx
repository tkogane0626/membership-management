import React from 'react';
import Button from 'react-bootstrap/Button';
import type { Membership } from '../../types/membership';

interface MembershipListProps {
  memberships: Membership[];
}

const MembershipList: React.FC<MembershipListProps> = ({ memberships }) => {
  return (
    <div className="table-container">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">名前</th>
              <th scope="col">フリガナ</th>
              <th scope="col">入会日</th>
              <th scope="col">退会日</th>
              <th scope="col">道場</th>
              <th scope="col">コース</th>
              <th scope="col">略称</th>
              <th scope="col">性別</th>
              <th scope="col">生年月日</th>
              <th scope="col">郵便番号</th>
              <th scope="col">住所1</th>
              <th scope="col">住所2</th>
              <th scope="col">TEL</th>
              <th scope="col">保護者名</th>
              <th scope="col">職業</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((membership) => (
              <tr key={membership.id}>
                <td>{membership.id}</td>
                <td>{membership.name}</td>
                <td>{membership.name_kana}</td>
                <td>{membership.membership_start_date}</td>
                <td>{membership.membership_end_date}</td>
                <td>{membership.dojang}</td>
                <td>{membership.course}</td>
                <td>{membership.abbreviaion}</td>
                <td>{membership.gender}</td>
                <td>{membership.date_of_birth}</td>
                <td>{membership.postal_code}</td>
                <td>{membership.address1}</td>
                <td>{membership.address2}</td>
                <td>{membership.telephone_number}</td>
                <td>{membership.parents}</td>
                <td>{membership.occupation}</td>
                <td>
                  <div className="operation-buttons">
                    <Button variant="warning">
                      Edit
                    </Button>
                    <Button variant="danger">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipList;
