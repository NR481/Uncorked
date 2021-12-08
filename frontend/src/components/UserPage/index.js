import { useSelector, useDispatch } from 'react-redux';
import Checkins from '../Checkins';
import { useEffect } from 'react';
import { getCheckins } from '../../store/checkins';
import { getWines } from '../../store/wines';
import './UserPage.css';

const UserPage = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const checkinsObj = useSelector((state) => state.checkins.checkins);
  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);


  useEffect(() => {
    dispatch(getCheckins(user?.id));
  }, [dispatch, user?.id]);

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  if(!checkinsObj) return null;

  const checkins = Object.values(checkinsObj);



  if (!wineObj) return null;

  const wineList = Object.values(wineObj);
  const wineries = Object.values(wineryObj);


  return (
    <div className='user-container'>
      <img
        src='https://images.unsplash.com/photo-1543418219-44e30b057fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        alt='Vineyard Rows'
        className='user-banner'
      />
      <h2 className='welcome'>{`Welcome, ${user?.firstName} ${user?.lastName}`}</h2>
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
