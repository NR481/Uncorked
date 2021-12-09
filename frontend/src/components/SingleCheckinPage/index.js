import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateCheckin, removeCheckin, loadWineCheckins } from "../../store/checkins";
import Comments from "../Comments";


const SingleCheckinPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // const { user, checkin, wineList, wineries } = location.state;
  const userObj = useSelector((state) => state.checkins.users);
  const user = useSelector((state) => state.session.user);

  const wineObj = useSelector((state) => state.wine.allWines);
  const wineList = Object.values(wineObj);
  const wine = wineList.find((wine) => wine.id === checkin.wineId);

  const checkin = useSelector((state) => state.checkins.checkins[id]);

  const wineryObj = useSelector((state) => state.wine.wineries);
  const wineries = Object.values(wineryObj);

  const [isLoaded, setIsLoaded] = useState(false);
  const [wineChoice, setWineChoice] = useState(wine);
  const [comment, setComment] = useState(checkin.comment);

  useEffect(() => {
    dispatch(loadWineCheckins(wine.id));
  }, [dispatch, wine.id]);

  if (!user) return null;
  const winery = wineries.find((winery) => winery.id === checkin.wineryId);
  const users = Object.values(userObj);
  const checkinUser = users.find((user) => +user.id === +userObj[checkin.userId].id);

  const reset = () => {
    setWineChoice('');
    setComment('')
  }

  const showForm = () => {
    setIsLoaded(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkinEdit = {
      comment,
      wineId: +wineChoice.split(',')[0],
      wineryId: +wineChoice.split(',')[1]
    };

    await dispatch(updateCheckin(id, checkinEdit));
    reset();
    history.push(`/users/${user?.id}`)
  }

  const handleDelete =  (e) => {
    e.preventDefault();
    dispatch(removeCheckin(id));
    history.push(`/users/${user?.id}`);
  }


  return (
    <div>
      <img src={wine.image} alt='wine label'/>
      <h2>{`${checkinUser?.firstName} is drinking a `}</h2>
      <NavLink to={`/wines/${wine.id}`}>
        {`${wine.name} by `}
      </NavLink>
      <p>{winery.name}</p>
      <p>{winery.location}</p>
      {checkin.comment}
      <button onClick={showForm}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {isLoaded &&
        <form onSubmit={handleSubmit}>
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
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button>Submit Changes</button>
        </form>
      }
      <Comments checkin={checkin} wine={wine} user={user}/>
    </div>
  )
}

export default SingleCheckinPage;
