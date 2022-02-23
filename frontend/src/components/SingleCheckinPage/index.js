import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateCheckin, removeCheckin, loadWineCheckins } from "../../store/checkins";
import Comments from "../Comments";
import { getWines } from "../../store/wines";
import { getComments } from "../../store/comments";
import './SingleCheckinPage.css';
import EditCheckinModal from "./EditCheckinModal";


const SingleCheckinPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const userObj = useSelector((state) => state.checkins.users);
  const user = useSelector((state) => state.session.user);
  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);
  const checkin = useSelector((state) => state.comments.checkins[id]);

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const wineList = Object.values(wineObj);
  const wine = wineList.find((wine) => wine.id === checkin?.wineId);
  const wineries = Object.values(wineryObj);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [wineChoice, setWineChoice] = useState('');
  const [comment, setComment] = useState(checkin?.comment);
  const [location, setLocation] = useState(checkin?.location);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    dispatch(loadWineCheckins(wine?.id));
  }, [dispatch, wine?.id]);


  useEffect(() => {
    const errors = [];

    if (!wineChoice) errors.push('Please select a wine');
    if (comment?.length < 5 || comment?.length > 250) errors.push('Please enter a comment between 5 and 250 characters');
    if (location?.length < 4 || location?.length > 50) errors.push('Please enter a location between 4 and 50 characters');

    setValidationErrors(errors);
  }, [wineChoice, comment?.length, location?.length]);


  if (!wineryObj) return null;
  if (!user) return null;
  if (!userObj) return null;

  const winery = wineries.find((winery) => winery.id === checkin?.wineryId);
  const users = Object.values(userObj);
  const checkinUser = users.find((user) => +user?.id === +userObj[checkin?.userId]?.id);

  const showForm = () => {
    setIsLoaded(!isLoaded);
  }

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
      .then(setIsLoaded(false));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeCheckin(id));
    history.push(`/users/${user?.id}`);
  }

  return (
    <div>
      <div className="checkin-container">
        <img src={wine?.image} alt='wine label' />
        <div className="single-checkin">
          <NavLink
            to={{
              pathname: `/user/${checkinUser?.id}/profile`,
              state: { user: checkinUser, wineries, wineList }
            }}
          >
            {checkinUser?.firstName}
          </NavLink>
          {` is at ${checkin?.location} drinking a `}
          <NavLink to={`/wines/${wine?.id}`}>
            {`${wine?.name}`}
          </NavLink>
          {` by ${winery?.name}`}
          <p className="comment-bubble">{checkin?.comment}</p>
          {/* <button onClick={showForm} className="checkin-button">Edit</button> */}
          {/* <button onClick={handleDelete} className="checkin-button">Delete</button> */}
        </div>
        <EditCheckinModal checkin={checkin} id={id} wineList={wineList} wine={wine}/>
        {/* {isLoaded &&
          <form onSubmit={handleSubmit}>
            {validationErrors.length > 0 &&
              validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
            <select
              onChange={(e) => setWineChoice(e.target.value)}
              value={wineChoice}
            >
              <option>--Select A Wine--</option>
              {wineList.map((wine) => (
                <option
                  key={wine.id}
                  value={`${wine.id}, ${wine.wineryId}`}
                >
                  {wine.name}
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
        } */}
      </div>
      <Comments id={id} wine={wine} user={user} wineries={wineries} wineList={wineList} />
    </div>
  )
}

export default SingleCheckinPage;
