import { NavLink } from "react-router-dom";

const Checkins = ({ user, checkins, wineList, wineries }) => {
  const lastInitial = user.lastName.split('')[0];

  // wineList[checkin.wineId-1].name
  // wineries[checkin.wineryId-1].name

  return (
    <div>
      <h2>My Checkins</h2>
      {checkins.map((checkin) => (
        <div key={checkin.id}>
          {`${user.firstName} ${lastInitial}. is drinking a `}
          <NavLink to={`/wines/${checkin.wineId}`}>
            {wineList[checkin.wineId-1].name}
          </NavLink>
          {' from '}
          <NavLink to={`/wineries/${checkin.wineryId}`}>
            {wineries[checkin.wineryId-1].name}
          </NavLink>
          <img src={wineList[checkin.wineId-1].image} alt='wine label'/>
          <p>{checkin.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default Checkins;
