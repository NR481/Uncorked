import { useState } from "react";
import { Modal } from "../context/Modal";
import EditCommentForm from "./EditCommentForm";


const EditCommentModal = ({ checkin, user, com }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
      >
        Edit
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <EditCommentForm
            checkin={checkin}
            user={user}
            com={com}
            setModal={setModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default EditCommentModal;
