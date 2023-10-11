import React from 'react';
import Modal from 'src/components/Modal';
import { styled } from '@superset-ui/core';


const DescriptionContainer = styled.div`
  line-height: 40px;
  padding-top: 16px;
`;

export interface IkiConfirmationModalProps {
  open: boolean;
  title: string;
  description: string;
  secondaryText: string;
  onConfirm: () => void;
  onClose: () => void;

}
export function IkiConfirmationModal(props: IkiConfirmationModalProps) {
  const {
      open,
      title,
      description,
      secondaryText,
      onConfirm,
      onClose,
  } = props;


  const confirm = () => {
    onConfirm();
  }

  const close = () => {
    onClose();
  }

  return (
    <Modal
      disablePrimaryButton={false}
      onHide={close}
      onHandledPrimaryAction={confirm}
      primaryButtonName={'Save'}
      show={open}
      title={title}
      secondaryText={secondaryText}
    >
        <DescriptionContainer>{description}</DescriptionContainer>
    </Modal>
  )
}
