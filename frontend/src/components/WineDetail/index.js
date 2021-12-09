import { NavLink } from 'react-router-dom';
import './WineDetail.css';
import bottle from "../../assets/default-img.png";


const WineDetail = ({ id, image, name, winery, description }) => {
  const isImage = () =>  {
    if (!image) {
      return bottle;
    }
    return image
  }

  return (
    <div className='wine-entry'>
      <img src={isImage()} alt='wine label'/>
      <div className='wine-info'>
        <h2 className='name'>{name}</h2>
        <h3>{winery?.name}</h3>
        <p>{winery?.location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WineDetail;
