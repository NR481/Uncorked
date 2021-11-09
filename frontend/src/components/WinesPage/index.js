import { getWines } from "../../store/wines";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import WineDetail from "../WineDetail";
import SingleWine from "../SingleWine";
import './WinesPage.css';

const WinesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);

  if (!wineObj) return null;

  const wineList = Object.values(wineObj);
  const wineries = Object.values(wineryObj);

  return (
    <div>
      <h1>Wines</h1>
      <div className='wine-page'>
        {wineList.map((wine) => (
          <WineDetail
            key={wine.id}
            id={wine.id}
            image={wine.image}
            name={wine.name}
            winery={wineries.find((winery => (
              winery.id === wine.wineryId
            )))}
          />
        ))}
      </div>
    </div>
  )
};

export default WinesPage;
