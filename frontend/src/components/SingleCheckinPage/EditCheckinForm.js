import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCheckin, removeCheckin } from "../../store/checkins";
import { getComments } from "../../store/comments";
import "./EditCheckinForm.css"

const EditCheckinForm = ({ checkin, id, wineList, wine, setModal, user }) => {
  const [wineChoice, setWineChoice] = useState(`${wine?.id}, ${wine?.wineryId}`);
  const [comment, setComment] = useState(checkin?.comment);
  const [location, setLocation] = useState(checkin?.location);
  const [validationErrors, setValidationErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (comment.length < 5 || comment.length > 255) errors.push('Comment must be between 5 and 255 characters');
    if (location.length === 0) errors.push('Please enter a location');
    setValidationErrors(errors);

    if (errors.length === 0) {
      const checkinEdit = {
        comment,
        wineId: +wineChoice.split(',')[0],
        wineryId: +wineChoice.split(',')[1],
        location
      };

      await dispatch(updateCheckin(id, checkinEdit))
        .then(dispatch(getComments(checkin?.id)))
      setModal(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(removeCheckin(id));
    history.push(`/users/${user?.id}`);
  }

  return (
    <div className="edit-checkin-container">
      <ul>
        {validationErrors.length > 0 &&
          validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmit} className="edit-checkin-form">
        <label>Wine</label>
        <select
          onChange={(e) => setWineChoice(e.target.value)}
          value={wineChoice}
          required
        >
          <option value="select">--Select A Wine--</option>
          <option
            value={wineChoice}
          >
            {wine?.name}
          </option>
          {wineList.map((item) => (
            <option
              key={item.id}
              value={`${item.id}, ${item.wineryId}`}
            >
              {item.name}
            </option>
          ))}
        </select>
        <label>Location</label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Enter a location..."
          required
        />
        <label>Comment</label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          placeholder="Enter a comment..."
          required
        />
        <button
          onClick={handleSubmit}
        >
          Submit Changes
        </button>
        <button
          onClick={handleDelete}
          className="checkin-button"
        >
          Delete Check-In
        </button>
      </form>
    </div>
  );
};

export default EditCheckinForm;
