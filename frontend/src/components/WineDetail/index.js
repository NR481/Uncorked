import { NavLink } from 'react-router-dom';
import './WineDetail.css';
import bottle from "../../assets/default-img.png";


const WineDetail = ({ id, image, name, winery }) => {
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
        <NavLink to={`/wines/${id}`}>{name}</NavLink>
        <NavLink to={`/wineries/${winery.id}`}>{winery.name}</NavLink>
      </div>
    </div>
  );
};

export default WineDetail;
