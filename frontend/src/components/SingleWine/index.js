import { getWines } from "../../store/wines";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WineDetail from "../WineDetail";

const SingleWine = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const { id } = useParams();
  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);

  if (!wineObj) return null;

  const wine = wineObj[id];
  const wineries = Object.values(wineryObj);

  return (
    <div>
      <h1>Single Wine</h1>
      <WineDetail
              key={wine.id}
              id={wine.id}
              image={wine.image}
              name={wine.name}
              winery={wineries.find((winery => (
                winery.id === wine.wineryId
              )))}
            />
      <p>{wine.description}</p>
    </div>
  )
};

export default SingleWine;
