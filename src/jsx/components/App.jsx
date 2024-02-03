import './App.css';
import userData from './profile/userdata.json';
import Profile from './profile/Profile';

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}
