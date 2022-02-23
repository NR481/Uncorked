import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { loadWineCheckins } from "../../store/checkins";
import Comments from "../Comments";
import { getWines } from "../../store/wines";
import { getComments } from "../../store/comments";
import './SingleCheckinPage.css';
import EditCheckinModal from "./EditCheckinModal";


const SingleCheckinPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(loadWineCheckins(wine?.id));
  }, [dispatch, wine?.id]);


  if (!wineryObj) return null;
  if (!user) return null;
  if (!userObj) return null;

  const winery = wineries.find((winery) => winery.id === checkin?.wineryId);
  const users = Object.values(userObj);
  const checkinUser = users.find((user) => +user?.id === +userObj[checkin?.userId]?.id);

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
        </div>
        <EditCheckinModal
          checkin={checkin}
          id={id}
          wineList={wineList}
          wine={wine}
          user={user}
        />
      </div>
      <Comments
        id={id}
        wine={wine}
        user={user}
        wineries={wineries}
        wineList={wineList}
      />
    </div>
  )
}

export default SingleCheckinPage;
