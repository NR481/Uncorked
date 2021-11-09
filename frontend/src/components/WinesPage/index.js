import { getWines } from "../../store/wines";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WineDetail from "../WineDetail";

const WinesPage = () => {
  const dispatch = useDispatch();

  const [wines, setWines] = useState([]);

  const wineObj = useSelector((state) => state.wine.allWines);
  const wineList = Object.values(wineObj);


  useEffect(() => {

    dispatch(getWines());
  }, [dispatch]);

  return (
    <div>
      <h1>Wines</h1>
      <div>
        {wineList.map(({ id, image }) => {
          <WineDetail key={id} id={id} image={image} />
        })}
      </div>
    </div>
  )
};

export default WinesPage;
