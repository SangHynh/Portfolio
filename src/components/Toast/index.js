import React, { useEffect } from 'react';
import './ToastStyles.css';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
};

export default Toast;
