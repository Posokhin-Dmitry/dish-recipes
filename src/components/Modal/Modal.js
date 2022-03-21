import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import Form from '../Form/Form';

function Modal({ onClose, onSubmit }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlay = e => {
    const overlay = document.querySelector('.Overlay');
    if (e.target === overlay) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlay}>
      <div className={s.modal}>
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
