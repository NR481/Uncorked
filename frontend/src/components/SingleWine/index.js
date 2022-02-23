import { getWines } from "../../store/wines";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import WineDetail from "../WineDetail";
import { loadWineCheckins } from "../../store/checkins";
import CheckinModal from "./CheckinModal";
import EditWineModal from "./EditWineModal";
import './SingleWine.css'

const SingleWine = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(loadWineCheckins(id))
  }, [dispatch, id])


  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

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

  if (!wine) return <p>Loading</p>;

  return (
    <div className="single-wine-container">
      <img
        src='https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt='wine cellar'
        className="single-wine-img"
      />
      <div className="single-wine-detail">
        <WineDetail
          key={wine?.id}
          id={wine?.id}
          image={wine?.image}
          name={wine?.name}
          winery={winery}
          description={wine?.description}
        />
      </div>
      <div className="modal-buttons">
        {wine?.userId === user?.id && (
          <EditWineModal wine={wine} winery={winery} />
        )}
        <CheckinModal user={user} wine={wine} winery={winery} />
      </div>
      <div className="checkin-wrapper">
        <h2 className="checkin-header">See Who's Enjoying This Wine</h2>
        {checkins?.length === 0 && (
          <h3>No check-ins yet...be the first to check in!</h3>
        )}
        {Object.keys(usersObj).length > 0 &&
          checkins?.map((checkin) => (
            <div key={checkin?.id} className="single-checkin">
              <NavLink
                to={{
                  pathname: `/user/${usersObj[checkin?.userId].id}/profile`,
                  state: { user: usersObj[checkin?.userId], checkins, wineries, wineList }
                }}
              >
                {usersObj[checkin?.userId].firstName}
              </NavLink>
              {` is at ${checkin.location} drinking a ${wine.name} by ${winery.name}`}
              <p>{checkin.comment}</p>
              <NavLink
                to={{ pathname: `/checkins/${checkin.id}`, state: { user, checkin, wineList, wineries } }}
                className='checkin-link '
              >View Details</NavLink>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default SingleWine;
