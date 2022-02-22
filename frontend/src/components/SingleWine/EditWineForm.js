import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWine, removeWine } from "../../store/wines";
import { useHistory } from "react-router-dom";

const EditWineForm = ({ wine, winery, setModal }) => {
  const [editName, setEditName] = useState(wine?.name);
  const [editImage, setEditImage] = useState(wine?.image);
  const [editVintage, setEditVintage] = useState(wine?.vintage);
  const [editDescription, setEditDescription] = useState(wine?.description);
  const [editVarietal, setEditVarietal] = useState(wine?.varietal);
  const [editWinery, setEditWinery] = useState(winery?.name);
  const [editLocation, setEditlocation] = useState(winery?.location);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditSubmit = async (e) => {
    e.preventDefault();
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
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(removeWine(wine.id))
      .then(() => history.push('/wines'));
    return setModal(false);
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <label>
        Name
      </label>
      <input
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
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
      />
      <label>
        Varietal
      </label>
      <input
        type="text"
        value={editVarietal}
        onChange={(e) => setEditVarietal(e.target.value)}
      />
      <label>
        Winery
      </label>
      <input
        type="text"
        value={editWinery}
        onChange={(e) => setEditWinery(e.target.value)}
      />
      <label>
        Region
      </label>
      <input
        type="text"
        value={editLocation}
        onChange={(e) => setEditlocation(e.target.value)}
      />
      <label>
        Description
      </label>
      <textarea
        value={editDescription}
        onChange={(e) => setEditDescription(e.target.value)}
      >
      </textarea>
      <button type="submit">Edit This Wine</button>
      <button onClick={handleDelete}>Delete</button>
    </form>
  )
}

export default EditWineForm;
