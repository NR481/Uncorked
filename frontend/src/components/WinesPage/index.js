import { createNewWine, getWines } from "../../store/wines";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WineDetail from "../WineDetail";
import './WinesPage.css';
import { useHistory } from "react-router";


const WinesPage = () => {
  const [addWineForm, setAddWineForm] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [vintage, setVintage] = useState('');
  const [description, setDescription] = useState('');
  const [varietal, setVarietal] = useState('');
  const [winery, setWinery] = useState('');
  const [location, setlocation] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  const wineObj = useSelector((state) => state.wine.allWines);
  const wineryObj = useSelector((state) => state.wine.wineries);
  const userId = useSelector((state) => state.session.user.id);

  if (!wineObj) return null;

  const wineList = Object.values(wineObj);
  const wineries = Object.values(wineryObj);

  const revealWineForm = (e) => {
    e.preventDefault();
    setAddWineForm(!addWineForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWine = {
      name,
      image,
      vintage,
      varietal,
      winery,
      location,
      description,
      userId
    };
    await dispatch(createNewWine(newWine));
    setAddWineForm(false);
  };

  return (
    <div>
      <h1>Wines</h1>
      <h2>Can't find the wine you're looking for?</h2>
      <button onClick={revealWineForm}>Add A New One</button>
      {addWineForm &&
        <form onSubmit={handleSubmit}>
          <label>
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>
            Vintage
          </label>
          <input
            type="text"
            value={vintage}
            onChange={(e) => setVintage(e.target.value)}
          />
          <label>
            Varietal
          </label>
          <input
            type="text"
            value={varietal}
            onChange={(e) => setVarietal(e.target.value)}
          />
          <label>
            Winery
          </label>
          <input
            type="text"
            value={winery}
            onChange={(e) => setWinery(e.target.value)}
          />
          <label>
            Region
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
          <label>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
          <button>Add To Wine List</button>
        </form>
      }
      <div className='wine-page'>
        {wineList.map((wine) => (
          <WineDetail
            key={wine.id}
            id={wine.id}
            image={wine.image}
            name={wine.name}
            winery={wineries.find((winery => (
              winery.id === wine.wineryId
            )))}
          />
        )).reverse()}
      </div>
    </div>
  )
};

export default WinesPage;
