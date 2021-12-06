import CheckinDetail from "../CheckinDetail";
import './Checkins.css';


const Checkins = ({ user, checkins, wineList, wineries }) => {
  console.log(user);
  return (
    <div className='checkins-container'>
      <h2 className='user-header'>{`${user.firstName}'s Recent Activity`}</h2>
      {checkins.map((checkin) => (
        <CheckinDetail
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
