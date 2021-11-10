import { getWines } from "../../store/wines";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WineDetail from "../WineDetail";

const SingleWine = () => {
  const [revealForm, setRevealForm] = useState(false);
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const handleCheckin = () => {
    setRevealForm(true);
  };

  const { id } = useParams();
  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);

  if (!wineObj) return null;

  const wine = wineObj[id];
  const wineries = Object.values(wineryObj);
  const winery = wineries.find((winery) => (
    winery.id === wine.wineryId
  ));

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
        <button>Add To List</button>
      </div>

      {revealForm && (
        <form>
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
    </div>
  )
};

export default SingleWine;
