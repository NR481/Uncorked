import CheckinDetail from "../CheckinDetail";
import './Checkins.css';


const Checkins = ({ user, checkins, wineList, wineries }) => {

  return (
    <div className = 'checkins-container'>
      <h2>My Checkins</h2>
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
