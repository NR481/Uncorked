import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { newCheckin } from "../../store/checkins";
import "./CheckinForm.css";

const CheckinForm = ({ user, wine, winery }) => {
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkin = {
      comment,
      userId: user.id,
      wineryId: winery.id,
      wineId: wine.id,
      location
    }
    await dispatch(newCheckin(checkin));
    // reset();
    history.push(`/users/${user.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="checkin-form">
      <h3>Where are you enjoying {wine?.name}?</h3>
      <input
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        placeholder="Enter a location..."
        required
      />
      <textarea
        placeholder='Leave a comment...'
        rows='10'
        cols='40'
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        required
      />
      <button>Check In</button>
    </form>
  );
};

export default CheckinForm;
