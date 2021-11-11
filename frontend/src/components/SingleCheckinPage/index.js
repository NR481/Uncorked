import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCheckins } from "../../store/checkins";
import { getWines } from "../../store/wines";

const SingleCheckinPage = () => {
  // const [wine, setWine] = useState();
  // const [winery, setWinery] = useState();
  // const [checkin, setCheckin] = useState();

  const { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const checkinsObj = useSelector((state) => state.checkins[id]?.wineId);
  // const wineObj = useSelector((state) => state.wine.allWines[checkinsObj?.wineId]);
  const wineryObj = useSelector((state) => state.wine.wineries);

  console.log(checkinsObj, wineryObj, user);
  return null;


  // const wineList = Object.values(wineObj);
  // const wineries = Object.values(wineryObj);



  // const lastInitial = user.lastName.split('')[0];

  // useEffect(() => {
  //   dispatch(getCheckins(user.id))
  //     .then(() => setCheckin(checkinsObj[id]));
  // }, [dispatch, user.id, checkinsObj, id]);


  // useEffect(() => {
  //   dispatch(getWines())
  //     .then(() => setWine(wineList.find((wine) => wine.id === checkin.wineId)))
  //     .then(() => setWinery(wineries.find((winery) => winery.id === checkin.wineryId)))
  // }, [dispatch, ]);

  // if (!checkinsObj) return null;
  // const checkin = checkinsObj[id];

  // if(!wineObj) return null;





  // const wine = wineList.find((wine) => wine.id === checkin.wineId);
  // const winery = wineries.find((winery) => winery.id === checkin.wineryId);






  // return (
  //   <div>
  //     <h2>{`${user.firstName} ${lastInitial}.`}</h2>
  //     <NavLink to={`/wines/${wine.id}`}>
  //       {wine.name}
  //     </NavLink>
  //     <NavLink to={`/wineries/${winery.id}`}>
  //       {winery.name}
  //     </NavLink>
  //   </div>
  // )
}

export default SingleCheckinPage;
