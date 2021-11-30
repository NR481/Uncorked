import { NavLink } from "react-router-dom";

const CheckinDetail = ({ user, checkin, wineList, wineries }) => {
  const lastInitial = user?.lastName.split('')[0];

  const wine = wineList.find((wine) => wine.id === checkin.wineId);
  const winery = wineries.find((winery) => winery.id === checkin.wineryId);

  return (
    <div key={checkin.id}>
      {`${user?.firstName} ${lastInitial}. is drinking a `}
      <NavLink to={`/wines/${checkin?.wineId}`}>
        {wine.name}
      </NavLink>
      {` from ${winery.name} `}
      <img src={wine.image} alt='wine label' />
      <p>{checkin.comment}</p>
      <NavLink to={{pathname: `/checkins/${checkin.id}`, state: {user, checkin, wineList, wineries}}}>Edit This Checkin</NavLink>
    </div>
  )
};

export default CheckinDetail;
