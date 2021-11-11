import CheckinDetail from "../CheckinDetail";
import { useSelector } from "react-redux";

const Checkins = ({ user, checkins, wineList, wineries }) => {
  // const user = useSelector((state) => state.session.user);
  // // const dispatch = useDispatch();
  // const checkinsObj = useSelector((state) => state.checkins);
  // const wineObj = useSelector((state) => state.wine.allWines);
  // const wineryObj = useSelector((state) => state.wine.wineries);
  console.log(user);

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
