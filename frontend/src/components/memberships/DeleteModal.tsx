import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import type { Membership } from '../../types/membership';

interface DeleteModalProps {
  showModal: boolean;
  handleClose: () => void;
  selectedMember: Membership;
  handleDelete: (member: Membership) => Promise<void>;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  showModal,
  handleClose,
  selectedMember,
  handleDelete,
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
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button variant="danger" onClick={() => handleDelete(selectedMember)}>
          削除
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
