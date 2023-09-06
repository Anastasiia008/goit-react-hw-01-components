import  Profile  from './Profile/Profile';
import user from '../path/user.json';

import  Statistics  from './Statistics/Statistics';
import data from '../path/data.json';


import  FriendList  from './FriendList/FriendList';
import friends from '../path/friends.json';

import  TransactionHistory  from './TransactionHistory/TransactionHistory';
import transactions from '../path/transactions.json';

import  Section  from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="">
        <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section title="">
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
