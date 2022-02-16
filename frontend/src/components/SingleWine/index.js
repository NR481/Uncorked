import { getWines, removeWine, updateWine } from "../../store/wines";
import { newCheckin } from "../../store/checkins";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import WineDetail from "../WineDetail";
import { loadWineCheckins } from "../../store/checkins";
import './SingleWine.css'

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
  const [validationErrors, setValidationErrors] = useState([]);
  const [checkinValidation, setCheckinValidation] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();


  const { id } = useParams();

  useEffect(() => {
    dispatch(loadWineCheckins(id))
  }, [dispatch, id])


  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);


  useEffect(() => {
    const errors = [];

    if (location?.length < 4 || location?.length > 50) errors.push('Please enter a location between 4 and 50 characters');
    if (comment?.length < 5 || comment?.length > 250) errors.push('Please enter a comment between 5 and 250 characters');

    setValidationErrors(errors);
  }, [comment?.length, location?.length]);

  useEffect(() => {
    const errors = [];

    if (editName.length < 5 || editName.length > 50) errors.push('The name must be between 5 and 50 characters');
    if (+editVintage < 1000) errors.push('Please enter a 4 digit vintage year');
    if (editDescription.length < 5 || editDescription.length > 280) errors.push('The description must be between 5 and 280 characters');
    if (editWinery.length < 5 || editWinery.length > 50) errors.push('The winery name must be between 5 and 50 characters');
    if (editLocation.length < 5 || editLocation.length > 50) errors.push('The location must be between 5 and 50 characters');
    if (editVarietal.length < 4 || editVarietal.length > 40) errors.push('The varietal must be between 4 and 50 characters');

    setCheckinValidation(errors);
  }, [editDescription.length, editLocation.length, editName.length, editVarietal.length, editVintage, editWinery.length]);

  const handleCheckin = () => {
    setRevealCheckinForm(!revealCheckinForm);
  };

  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);
  const user = useSelector((state) => state.session.user);
  const checkinsObj = useSelector((state) => state.checkins?.checkins);
  const usersObj = useSelector((state) => state.checkins?.users);

  if (!wineObj) return null;
  if (!usersObj) return null;

  const wine = wineObj[id];
  const wineries = Object.values(wineryObj);
  const winery = wineries?.find((winery) => (
    winery.id === wine?.wineryId
  ));
  const checkins = Object.values(checkinsObj);
  const wineList = Object.values(wineObj);

  const handleEdit = () => {
    setRevealEditForm(!revealEditForm);
    setEditName(wine.name);
    setEditImage(wine.image);
    setEditVintage(wine.vintage);
    setEditDescription(wine.description);
    setEditVarietal(wine.varietal);
    setEditWinery(winery.name);
    setEditlocation(winery.location);
  };

  const reset = () => {
    setRevealCheckinForm(false);
    setComment('');
    setLocation();
  };

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
    reset();
    history.push(`/users/${user.id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(removeWine(wine.id))
      .then(history.push('/wines'));
    return;
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
    setRevealEditForm(false);
  };

  return (
    <div>
      <WineDetail
        key={wine?.id}
        id={wine?.id}
        image={wine?.image}
        name={wine?.name}
        winery={winery}
        description={wine?.description}
      />
      <div>
        <button className="checkin-button" onClick={handleCheckin}>Check-in </button>
        {wine?.userId === user?.id &&
          <button onClick={handleEdit}>Edit</button>
        }
      </div>

      {revealCheckinForm && (
        <form onSubmit={handleSubmit}>
          <ul className="checkin-form">
            {validationErrors.length > 0 &&
              validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
          </ul>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Enter a location..."
          />
          {/* <select
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            <option>--Choose A Location--</option>
            <option
              value={winery.name}
            >
              {winery.name}
            </option>
            <option
              onChange={(e) => setLocation(e.target.value)}
              value={'Uncorked at Home'}
            >
              Uncorked at Home
            </option>
          </select> */}
          <textarea
            placeholder='Leave a comment...'
            rows='10'
            cols='40'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button disabled={validationErrors.length > 0}>Check In</button>
        </form>
      )}
      {revealEditForm && (
        <form onSubmit={handleEditSubmit}>
          <ul>
            {checkinValidation.length > 0 &&
              checkinValidation.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
          </ul>
          <label>
            Name
          </label>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <label>
            Image URL
          </label>
          <input
            type="text"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
          />
          <label>
            Vintage
          </label>
          <input
            type="number"
            value={editVintage}
            onChange={(e) => setEditVintage(e.target.value)}
          />
          <label>
            Varietal
          </label>
          <input
            type="text"
            value={editVarietal}
            onChange={(e) => setEditVarietal(e.target.value)}
          />
          <label>
            Winery
          </label>
          <input
            type="text"
            value={editWinery}
            onChange={(e) => setEditWinery(e.target.value)}
          />
          <label>
            Region
          </label>
          <input
            type="text"
            value={editLocation}
            onChange={(e) => setEditlocation(e.target.value)}
          />
          <label>
            Description
          </label>
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          >
          </textarea>
          <button type="submit">Edit This Wine</button>
          <button onClick={handleDelete}>Delete</button>
        </form>
      )}
      <div className="checkin-wrapper">
        <h2 className="checkin-header">See Who's Enjoying This Wine</h2>
        {Object.keys(usersObj).length > 0 &&
          checkins?.map((checkin) => (
            <div className="single-checkin">
              {/* <NavLink to={`/users/${usersObj[checkin?.userId].id}`}>{usersObj[checkin?.userId].firstName}</NavLink> */}
              <NavLink
                to={{
                  pathname: `/user/${usersObj[checkin?.userId].id}/profile`,
                  state: { user: usersObj[checkin?.userId], checkins, wineries, wineList }
                }}
              >
                {usersObj[checkin?.userId].firstName}
              </NavLink>
              {` is drinking a ${wine.name} by ${winery.name}`}
              <p>{checkin.comment}</p>
              <NavLink
                to={{ pathname: `/checkins/${checkin.id}`, state: { user, checkin, wineList, wineries } }}
                className='checkin-link '
              >View Details</NavLink>
            </div>
            // <p>
            //   {`${usersObj[checkin?.userId].firstName} says "${checkin?.comment}"`}
            // </p>
          ))
        }
      </div>
    </div>
  )
};

export default SingleWine;
