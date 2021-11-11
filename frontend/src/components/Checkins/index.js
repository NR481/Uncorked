import CheckinDetail from "../CheckinDetail";

const Checkins = ({ user, checkins, wineList, wineries }) => {

  return (
    <div>
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
