import { NavLink, useRouteMatch, useParams } from "react-router-dom";
import './CheckinDetail.css';

const CheckinDetail = ({ user, checkin, wineList, wineries }) => {
  const { id } = useParams();
  const match = useRouteMatch(`/checkins/${id}`);

  const wine = wineList.find((wine) => wine?.id === checkin?.wineId);
  const winery = wineries.find((winery) => winery?.id === checkin?.wineryId);
  return (
    <div key={checkin?.id} className='checkin'>
      <img src={wine?.image} alt='wine label' className='checkin-img' />
      <div className='checkin-info'>
        <NavLink to={`/users/${user?.id}`} className='checkin-link'>{user?.firstName}</NavLink>
        {' is drinking a '}
        <NavLink to={`/wines/${checkin?.wineId}`} className='checkin-link'>
          {wine?.name}
        </NavLink>
        {` by ${winery?.name} at ${checkin?.location}`}
        <p className='comment-bubble'>{checkin?.comment}</p>
        {!match && (
          <NavLink
            to={`/checkins/${checkin?.id}`}
            className='checkin-link '
          >
            View Details
          </NavLink>
        )}
      </div>
    </div>
  )
};

export default CheckinDetail;
