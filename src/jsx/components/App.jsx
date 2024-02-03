import './App.css';
import userData from './profile/userdata.json';
import friends from './friends-list/friends.json';
import transactions from './transactions-history/transactions.json';

import Profile from './profile/Profile';
import FriendsList from './friends-list/FriendsList';
import TransactionsHistory from './transactions-history/TransactionsHistory';

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
