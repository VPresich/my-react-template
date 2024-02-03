import PropTypes from 'prop-types';
import './Profile.css';
import StatsItem from './StatsItem';

const Profile = ({ name, tag, location, image, stats }) => {
  const statsData = Object.entries(stats);

  return (
    <div className="profile">
      <div className="description">
        <img src={image} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        {statsData.map(([label, value], index) => (
          <StatsItem key={index} label={label} value={value} />
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
