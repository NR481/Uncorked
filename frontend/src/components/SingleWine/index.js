import { getWines, removeWine, updateWine } from "../../store/wines";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import WineDetail from "../WineDetail";
import { newCheckin } from "../../store/checkins";

const SingleWine = () => {
  const [revealCheckinForm, setRevealCheckinForm] = useState(false);
  const [revealEditForm, setRevealEditForm] = useState(false);
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editVintage, setEditVintage] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editVarietal, setEditVarietal] = useState('');
  const [editWinery, setEditWinery] = useState('');
  const [editLocation, setEditlocation] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const handleCheckin = () => {
    setRevealCheckinForm(!revealCheckinForm);
  };

  const handleEdit = () => {
    setRevealEditForm(!revealEditForm);
  };


  const { id } = useParams();
  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);
  const userId = useSelector((state) => state.session.user.id);

  if (!wineObj) return null;

  const wine = wineObj[id];
  const wineries = Object.values(wineryObj);
  const winery = wineries.find((winery) => (
    winery.id === wine.wineryId
    ));

  const reset = () => {
    setRevealCheckinForm(false);
    setComment('');
    setLocation();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkin = {
      comment,
      userId,
      wineryId: winery.id,
      wineId: wine.id
    }
    await dispatch(newCheckin(checkin));
    reset();
    history.push(`/users/${userId}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(removeWine(wine.id))
      .then(history.push('/wines'));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const editedWine = {
      editName,
      editImage,
      editVintage,
      editVarietal,
      editWinery,
      editDescription,
      editLocation
    };
    await dispatch(updateWine(wine.id, editedWine))
      .then(history.push('/wines'));
  };

  return (
    <div>
      <h1>Single Wine</h1>
      <WineDetail
              key={wine.id}
              id={wine.id}
              image={wine.image}
              name={wine.name}
              winery={winery}
            />
      <p>{wine.description}</p>
      <div>
        <button onClick={handleCheckin}>Check-in </button>
        <button onClick={handleEdit}>Edit</button>
        {/* <button onClick={handleDelete}>Delete</button> */}
      </div>

      {revealCheckinForm && (
        <form onSubmit={handleSubmit}>
          <select>
            <option>--Choose A Location--</option>
            <option
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              {winery.name}
            </option>
            <option>Uncorked at Home</option>
          </select>
          <textarea
            placeholder='Leave a comment...'
            rows='10'
            cols='40'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button>Check In</button>
        </form>
      )}
      {revealEditForm && (
        <form onSubmit={handleEditSubmit}>
        <label>
          Name
        </label>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder={wine.name}
        />
        <label>
          Image URL
        </label>
        <input
          type="text"
          value={editImage}
          onChange={(e) => setEditImage(e.target.value)}
          placeholder={wine.image}
        />
        <label>
          Vintage
        </label>
        <input
          type="text"
          value={editVintage}
          onChange={(e) => setEditVintage(e.target.value)}
          placeholder={wine.vintage}
        />
        <label>
          Varietal
        </label>
        <input
          type="text"
          value={editVarietal}
          onChange={(e) => setEditVarietal(e.target.value)}
          placeholder={wine.varietal}
        />
        <label>
          Winery
        </label>
        <input
          type="text"
          value={editWinery}
          onChange={(e) => setEditWinery(e.target.value)}
          placeholder={winery.name}
        />
        <label>
          Wine location
        </label>
        <input
          type="text"
          value={editLocation}
          onChange={(e) => setEditlocation(e.target.value)}
          placeholder={winery.location}
        />
        <label>
          Description
        </label>
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder={wine.description}
        >
        </textarea>
        <button type="submit">Edit This Wine</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
      )}
    </div>
  )
};

export default SingleWine;
