import { NavLink } from "react-router-dom";

const CheckinDetail = ({ user, checkin, wineList, wineries }) => {
  const lastInitial = user.lastName.split('')[0];
  return (
    <div key={checkin.id}>
      {`${user.firstName} ${lastInitial}. is drinking a `}
      <NavLink to={`/wines/${checkin.wineId}`}>
        {wineList[checkin.wineId - 1].name}
      </NavLink>
      {' from '}
      <NavLink to={`/wineries/${checkin.wineryId}`}>
        {wineries[checkin.wineryId - 1].name}
      </NavLink>
      <img src={wineList[checkin.wineId - 1].image} alt='wine label' />
      <p>{checkin.comment}</p>
      <NavLink to={`/checkins/${checkin.id}`}>Edit This Checkin</NavLink>
    </div>
  )
};

export default CheckinDetail;
