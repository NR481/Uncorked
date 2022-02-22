import { useState } from "react";
import { Modal } from "../context/Modal";
import EditWineForm from "./EditWineForm";

const EditWineModal = ({ wine, winery }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
      >
        Edit Wine Listing
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <EditWineForm wine={wine} winery={winery} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default EditWineModal;
