import { getWines } from "../../store/wines";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WineDetail from "../WineDetail";
import './WinesPage.css';
import NewWineModal from "./NewWineModal";


const WinesPage = () => {
  const [winesLoaded, setWinesLoaded] = useState(false);
  const dispatch = useDispatch();

  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);
  const userId = useSelector((state) => state.session.user.id);

  useEffect(() => {
    dispatch(getWines())
      .then(() => setWinesLoaded(true));
  }, [dispatch]);

  if (!wineObj) return null;

  const wineList = Object.values(wineObj);
  const wineries = Object.values(wineryObj);

  if (!winesLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div className='wines-container'>
      <img
        className='wine-img'
        src='https://images.unsplash.com/photo-1535208239377-4a7f8e310dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29tbWVsaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        alt='wine corks'
      />
      <h1 className='wine-banner'>Wine List</h1>
      <div className='new-wine'>
        <h2>Can't find the wine you're looking for?</h2>
        <NewWineModal userId={userId}/>
      </div>
      <div className='wine-page'>
        {wineList?.length > 0 &&
          wineList?.map((wine) => (
          <WineDetail
            key={wine?.id}
            id={wine?.id}
            image={wine?.image}
            name={wine?.name}
            winery={wineries?.find((winery => (
              winery.id === wine.wineryId
            )))}
          />
        )).reverse()}
      </div>
    </div>
  )
};

export default WinesPage;
