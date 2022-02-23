import CheckinDetail from "../CheckinDetail";
import { Link } from "react-router-dom";
import './Checkins.css';


const Checkins = ({ user, checkins, wineList, wineries }) => {
  return (
    <div className='checkins-container'>
      <h2 className='user-header'>{`${user?.firstName}'s Recent Activity`}</h2>
      {checkins?.length === 0 && (
        <h3>No check-ins yet... Peruse the <Link to="/wines">Wine List</Link></h3>
      )}
      {checkins.map((checkin) => (
        <CheckinDetail
          key={checkin.id}
          checkin={checkin}
          user={user}
          wineList={wineList}
          wineries={wineries}
        />
      )).reverse()}
    </div>
  )
}

export default Checkins;
