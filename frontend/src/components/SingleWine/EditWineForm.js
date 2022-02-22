import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWine, removeWine } from "../../store/wines";
import { useHistory } from "react-router-dom";
import "./EditWineForm.css";

const EditWineForm = ({ wine, winery, setModal }) => {
  const [editName, setEditName] = useState(wine?.name);
  const [editImage, setEditImage] = useState(wine?.image);
  const [editVintage, setEditVintage] = useState(wine?.vintage);
  const [editDescription, setEditDescription] = useState(wine?.description);
  const [editVarietal, setEditVarietal] = useState(wine?.varietal);
  const [editWinery, setEditWinery] = useState(winery?.name);
  const [editLocation, setEditlocation] = useState(winery?.location);
  const [validationErrors, setValidationErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
    if (!imgRegex.test(editImage)) errors.push('Please enter a valid image URL for your wine');
    if (editVintage < 1000 || editVintage > 2022) errors.push('Please enter a valid 4-digit vintage year');
    setValidationErrors(errors);

    if (errors.length === 0) {
      const editedWine = {
        editName,
        editImage,
        editVintage,
        editVarietal,
        editWinery,
        editDescription,
        editLocation
      };
      await dispatch(updateWine(wine.id, editedWine))
      return setModal(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(removeWine(wine.id))
      .then(() => history.push('/wines'));
    return setModal(false);
  };

  return (
    <div className="edit-wine-container">
      <ul>
        {validationErrors.length > 0 && (
          validationErrors.map(error => (
            <li key={error}>{error}</li>
          ))
        )}
      </ul>
      <form onSubmit={handleEditSubmit} className="edit-wine-form">
        <label>
          Name
        </label>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          required
        />
        <label>
          Image URL
        </label>
        <input
          type="text"
          value={editImage}
          onChange={(e) => setEditImage(e.target.value)}
        />
        <label>
          Vintage
        </label>
        <input
          type="number"
          value={editVintage}
          onChange={(e) => setEditVintage(e.target.value)}
          required
        />
        <label>
          Varietal
        </label>
        <input
          type="text"
          value={editVarietal}
          onChange={(e) => setEditVarietal(e.target.value)}
          required
        />
        <label>
          Winery
        </label>
        <input
          type="text"
          value={editWinery}
          onChange={(e) => setEditWinery(e.target.value)}
          required
        />
        <label>
          Region
        </label>
        <input
          type="text"
          value={editLocation}
          onChange={(e) => setEditlocation(e.target.value)}
          required
        />
        <label>
          Description
        </label>
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          required
        >
        </textarea>
        <button type="submit">Edit This Wine</button>
        <button onClick={handleDelete}>Delete This Wine</button>
      </form>
    </div>
  )
}

export default EditWineForm;
