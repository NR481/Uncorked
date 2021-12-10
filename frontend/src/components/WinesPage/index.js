import { createNewWine, getWines } from "../../store/wines";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WineDetail from "../WineDetail";
import './WinesPage.css';


const WinesPage = ({ isLoaded }) => {
  const [addWineForm, setAddWineForm] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [vintage, setVintage] = useState('');
  const [description, setDescription] = useState('');
  const [varietal, setVarietal] = useState('');
  const [winery, setWinery] = useState('');
  const [location, setlocation] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  useEffect(() => {
    const errors = [];

    if (name.length < 5 || name.length > 50) errors.push('The name must be between 5 and 50 characters');
    if (+vintage < 1000) errors.push('Please enter a 4 digit vintage year');
    if (description.length < 5 || description.length > 280) errors.push('The description must be between 5 and 280 characters');
    if (winery.length < 5 || winery.length > 50) errors.push('The winery name must be between 5 and 50 characters');
    if (location.length < 5 || location.length > 50) errors.push('The location must be between 5 and 50 characters');
    if (varietal.length < 5 || varietal.length > 40) errors.push('The varietal must be between 5 and 50 characters');

    setValidationErrors(errors);
  }, [description.length, location.length, name.length, varietal.length, vintage, winery.length]);

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
    <div className='wines-container'>
      <img
        className='wine-img'
        src='https://images.unsplash.com/photo-1535208239377-4a7f8e310dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29tbWVsaWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        alt='vineyard'
      />
      <h1 className='wine-banner'>Wine List</h1>
      <div className='new-wine'>
        <h2>Can't find the wine you're looking for?</h2>
        <button onClick={revealWineForm}>Add A New One</button>
      </div>
      {addWineForm &&
        <form onSubmit={handleSubmit}>
          <ul>
          {validationErrors.length > 0 &&
            validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))
          }
        </ul>
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
            type="number"
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
          <button disabled={validationErrors.length > 0}>Add To Wine List</button>
        </form>
      }
      <div className='wine-page'>
        {wineList.map((wine) => (
          <WineDetail
            key={wine?.id}
            id={wine?.id}
            image={wine?.image}
            name={wine?.name}
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
