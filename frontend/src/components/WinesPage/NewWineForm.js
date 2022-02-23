import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewWine, getWines } from "../../store/wines";
import "./NewWineForm.css";

const NewWineForm = ({ userId, setModal }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [vintage, setVintage] = useState('');
  const [description, setDescription] = useState('');
  const [varietal, setVarietal] = useState('');
  const [winery, setWinery] = useState('');
  const [location, setlocation] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
    if (!imgRegex.test(image)) errors.push('Please enter a valid image URL for your wine');
    if (vintage < 1000 || vintage > 2022) errors.push('Please enter a valid 4-digit vintage year');
    setValidationErrors(errors);

    if (errors.length === 0) {
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
      await dispatch(createNewWine(newWine))
        .then(dispatch(getWines()))
      return setModal(false);
    }
  };

  return (
    <div className="add-wine-container">
      <ul className="errors">
        {validationErrors.length > 0 &&
          validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))
        }
      </ul>
      <form className="add-wine">
        <label>
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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
          required
        />
        <label>
          Varietal
        </label>
        <input
          type="text"
          value={varietal}
          onChange={(e) => setVarietal(e.target.value)}
          required
        />
        <label>
          Winery
        </label>
        <input
          type="text"
          value={winery}
          onChange={(e) => setWinery(e.target.value)}
          required
        />
        <label>
          Region
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          required
        />
        <label>
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        >
        </textarea>
        <button
          onClick={handleSubmit}
        >
          Add To Wine List
        </button>
      </form>
    </div>
  )
};

export default NewWineForm;
