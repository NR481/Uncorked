import { useState } from "react";
import { Modal } from "../context/Modal";
import NewWineForm from "./NewWineForm";

const NewWineModal = ({ userId }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
      >
        Add A New One
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <NewWineForm userId={userId} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default NewWineModal;
