import { useSelector } from 'react-redux';

const UserPage = () => {
  const user = useSelector((state) => state.session.user);
  const lastInitial = user.lastName.split('')[0];

  return (
    <div>
      <h2>{user.firstName}</h2>
    </div>
  )
}

export default UserPage;
