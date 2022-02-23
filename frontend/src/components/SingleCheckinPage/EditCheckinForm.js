import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCheckin } from "../../store/checkins";
import { getComments } from "../../store/comments";

const EditCheckinForm = ({ checkin, id, wineList, wine, setModal }) => {
  const [wineChoice, setWineChoice] = useState(`${wine?.id}, ${wine?.wineryId}`);
  const [comment, setComment] = useState(checkin?.comment);
  const [location, setLocation] = useState(checkin?.location);
  const [validationErrors, setValidationErrors] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkinEdit = {
      comment,
      wineId: +wineChoice.split(',')[0],
      wineryId: +wineChoice.split(',')[1],
      location
    };

    await dispatch(updateCheckin(id, checkinEdit))
      .then(dispatch(getComments(checkin?.id)))
    setModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {validationErrors.length > 0 &&
        validationErrors.map((error) => (
          <li key={error}>{error}</li>
        ))
      } */}
      <select
        onChange={(e) => setWineChoice(e.target.value)}
        value={wineChoice}
      >
        <option>--Select A Wine--</option>
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
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        placeholder="Enter a location..."
      />
      <textarea
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Enter a comment..."
      />
      <button
        onClick={handleSubmit}
        disabled={validationErrors.length > 0}
      >
        Submit Changes
      </button>
    </form>
  );
};

export default EditCheckinForm;
