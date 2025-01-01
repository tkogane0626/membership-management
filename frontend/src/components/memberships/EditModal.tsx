import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import type { Membership } from '../../types/membership';

interface EditModalProps {
  showModal: boolean;
  selectedMember: Membership;
  handleChange: (key: keyof Membership, value: number | string) => void;
  handleSave: () => Promise<void>;
  handleClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  showModal,
  selectedMember,
  handleChange,
  handleSave,
  handleClose
}) => (
  <Modal show={showModal} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>会員情報の編集</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Row key="id" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>会員No</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.id || ''}
              readOnly
              disabled
            />
          </Col>
        </Row>

        <Row key="name" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>名前</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="name_kana" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>フリガナ</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.name_kana || ''}
              onChange={(e) => handleChange('name_kana', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="membership_start_date" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>入会日</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.membership_start_date || ''}
              onChange={(e) => handleChange('membership_start_date', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="membership_end_date" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>退会日</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.membership_end_date || ''}
              onChange={(e) => handleChange('membership_end_date', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="dojang" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>道場</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              as="select"
              value={selectedMember.dojang || ''}
              onChange={(e) => handleChange('dojang', e.target.value)}
            >
              <option value="">選択してください</option>
              <option value="1">府中</option>
              <option value="2">本宿</option>
            </Form.Control>
          </Col>
        </Row>

        <Row key="course" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>コース</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              as="select"
              value={selectedMember.course || ''}
              onChange={(e) => handleChange('course', e.target.value)}
            >
              <option value="">選択してください</option>
              <option value="1">少年部</option>
              <option value="2">青年部</option>
              <option value="3">準会員</option>
            </Form.Control>
          </Col>
        </Row>

        <Row key="abbreviation" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>略称</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.abbreviation || ''}
              onChange={(e) => handleChange('abbreviation', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="gender" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>性別</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              as="select"
              value={selectedMember.gender || ''}
              onChange={(e) => handleChange('gender', e.target.value)}
            >
              <option value="">選択してください</option>
              <option value="1">男</option>
              <option value="2">女</option>
              <option value="3">未選択</option>
            </Form.Control>
          </Col>
        </Row>

        <Row key="date_of_birth" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>生年月日</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.date_of_birth || ''}
              onChange={(e) => handleChange('date_of_birth', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="postal_code" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>郵便番号</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.postal_code || ''}
              onChange={(e) => handleChange('postal_code', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="address1" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>住所1</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.address1 || ''}
              onChange={(e) => handleChange('address1', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="address2" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>住所2</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.address2 || ''}
              onChange={(e) => handleChange('address2', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="telephone_number" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>電話番号</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.telephone_number || ''}
              onChange={(e) => handleChange('telephone_number', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="parents" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>保護者名</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.parents || ''}
              onChange={(e) => handleChange('parents', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="parents_telephone_number" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>保護者電話番号</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.parents_telephone_number || ''}
              onChange={(e) => handleChange('parents_telephone_number', e.target.value)}
            />
          </Col>
        </Row>

        <Row key="occupation" className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>職業</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              value={selectedMember.occupation || ''}
              onChange={(e) => handleChange('occupation', e.target.value)}
            />
          </Col>
        </Row>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleSave}>保存</Button>
      <Button variant="secondary" onClick={handleClose}>キャンセル</Button>
    </Modal.Footer>
  </Modal>
);

export default EditModal;
