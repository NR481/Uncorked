import { useState } from "react";
import { Modal } from "../context/Modal";
import CheckinForm from "./CheckinForm";

const CheckinModal = ({ user, wine, winery }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
      >
        Check In
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <CheckinForm user={user} wine={wine} winery={winery} />
        </Modal>
      )}
    </div>
  );
};

export default CheckinModal;
