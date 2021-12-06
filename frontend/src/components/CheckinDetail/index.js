import { NavLink } from "react-router-dom";
import './CheckinDetail.css';

const CheckinDetail = ({ user, checkin, wineList, wineries }) => {
  const lastInitial = user?.lastName.split('')[0];

  const wine = wineList.find((wine) => wine.id === checkin.wineId);
  const winery = wineries.find((winery) => winery.id === checkin.wineryId);

  return (
    <div key={checkin.id} className='checkin'>
      <img src={wine.image} alt='wine label' className='checkin-img' />
      <div className='checkin-info'>
        {`${user?.firstName} ${lastInitial}. is drinking a `}
        <NavLink to={`/wines/${checkin?.wineId}`} className='checkin-link'>
          {wine.name}
        </NavLink>
        {` from ${winery.name} `}
        <p>{checkin.comment}</p>
        <NavLink
          to={{ pathname: `/checkins/${checkin.id}`, state: { user, checkin, wineList, wineries } }}
          className='checkin-link '
        >
          Edit This Checkin
        </NavLink>
      </div>
    </div>
  )
};

export default CheckinDetail;
