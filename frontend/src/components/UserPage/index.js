import { useSelector, useDispatch } from 'react-redux';
import List from '../Lists';
import Checkins from '../Checkins';
import { useEffect } from 'react';
import { getCheckins } from '../../store/checkins';
import { getWines } from '../../store/wines';

const UserPage = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const checkinsObj = useSelector((state) => state.checkins);
  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);

  useEffect(() => {
    dispatch(getCheckins(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);


  if(!checkinsObj) return null;

  const checkins = Object.values(checkinsObj);



  if (!wineObj) return null;

  const wineList = Object.values(wineObj);
  const wineries = Object.values(wineryObj);


  return (
    <div>
      <h2>Welcome, {user.firstName + ' ' + user.lastName}</h2>
      <h3>My Lists</h3>
      <Checkins
        user={user}
        checkins={checkins}
        wineList={wineList}
        wineries={wineries}
      />
    </div>
  )
}

export default UserPage;
