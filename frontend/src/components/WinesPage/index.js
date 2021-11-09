import { getWines } from "../../store/wines";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WineDetail from "../WineDetail";
import './WinesPage.css';

const WinesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const wineObj = useSelector((state) => state.wine.allWines);

  if (!wineObj) return null;

  const wineList = Object.values(wineObj);

  return (
    <div>
      <h1>Wines</h1>
      <div>
        {wineList.map((wine) => (
          <WineDetail key={wine.id} id={wine.id} image={wine.image} />
        ))}
      </div>
    </div>
  )
};

export default WinesPage;
