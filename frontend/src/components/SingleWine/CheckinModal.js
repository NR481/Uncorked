import { useState } from "react";
import { Modal } from "../context/Modal";
import CheckinForm from "./CheckinForm";
import "./SingleWine.css";

const CheckinModal = ({ user, wine, winery }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(true)}
        className="checkin-modal-button"
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
