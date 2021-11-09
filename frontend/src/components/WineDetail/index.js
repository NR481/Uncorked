import { NavLink } from 'react-router-dom';

const WineDetail = ({ id, image }) => {
  return (
      <NavLink to={`/wines/${id}`}>
        <img src={image}/>
      </NavLink>
  );
};

export default WineDetail;
