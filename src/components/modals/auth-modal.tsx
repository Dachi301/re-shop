import React from "react";

import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(16, 16, 16, 0.3)",
    zIndex: "10",
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    margin: "0",
    padding: "0",
    border: "none",
    zIndex: "90",
    overflow: "visible",
  },
};

export type ModalStates = "open" | "closed";

export interface modalProps {
  children: React.ReactNode;
  modalState: ModalStates;
  setModalState: Function;
  className?: string;
}

const AuthModal = ({ children, modalState, className }: any) => {
  return (
    <Modal
      isOpen={modalState === "open"}
      closeTimeoutMS={10}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      preventScroll={true}
      className={className}
    >
      {children}
    </Modal>
  );
};

export default AuthModal;
