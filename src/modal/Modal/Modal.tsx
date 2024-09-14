import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles['modalBackdrop']}>
      <div className={styles['modalContent']}>
        <button className={styles['closeButton']} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
