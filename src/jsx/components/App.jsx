import './App.css';
import userData from './profile/userdata.json';
import friends from './friendslist/friends.json';
import transactions from './transactionshistory/transactions.json';

import Profile from './profile/Profile';
import FriendsList from './friendslist/FriendsList';
import TransactionsHistory from './transactionshistory/TransactionsHistory';

export default function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
}
