import { useSelector } from 'react-redux';
import List from '../Lists'

const UserPage = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <div>
      <h2>{user.firstName + ' ' + user.lastName}</h2>
      <h3>My Lists</h3>
    </div>
  )
}

export default UserPage;
