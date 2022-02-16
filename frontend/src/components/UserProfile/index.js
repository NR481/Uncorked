import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWines } from "../../store/wines";
import { getCheckins } from "../../store/checkins";
import { useEffect } from "react";
import Checkins from "../Checkins";

const UserProfile = () => {
  const location = useLocation();
  const { user, wineries, wineList } = location.state;
  const checkinsObj = useSelector(state => state.checkins.checkins);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCheckins(user?.id));
  }, [dispatch, user?.id]);

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const checkins = Object.values(checkinsObj);

  return (
    <div className='user-container'>
      <img
        src='https://images.unsplash.com/photo-1543418219-44e30b057fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        alt='Vineyard Rows'
        className='user-banner'
      />
      <h2 className='welcome'>{`${user?.firstName}'s Profile`}</h2>
      <Checkins
        user={user}
        checkins={checkins}
        wineList={wineList}
        wineries={wineries}
      />
    </div>
  )
}

export default UserProfile;
