import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import './FriendsList.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
