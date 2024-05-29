import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalPopup = ({ children,open,setOpen,title }) => {
 
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalPopup;
