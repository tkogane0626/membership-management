import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import type { Membership } from '../../types/membership';

interface DeleteModalProps {
  showModal: boolean;
  selectedMember: Membership;
  handleDelete: (member: Membership) => Promise<void>;
  handleClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  showModal,
  selectedMember,
  handleDelete,
  handleClose,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>会員情報を削除</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>以下の会員情報を削除しますか？</p>
        <ul>
          <li>名前: {selectedMember.name}</li>
          <li>フリガナ: {selectedMember.name_kana}</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => handleDelete(selectedMember)}>
          削除
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
