import { NavLink } from 'react-router-dom';
import './WineDetail.css';


const WineDetail = ({ id, image, name, winery }) => {
  return (
    <div className='wine-entry'>
      <img src={image} alt='wine label'/>
      <div className='wine-info'>
        <NavLink to={`/wines/${id}`}>{name}</NavLink>
        <NavLink to={`/wineries/${winery.id}`}>{winery.name}</NavLink>
      </div>
    </div>
  );
};

export default WineDetail;
