import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div className="app">
        <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <Header />
      <MainContent />
      <Footer />
    </div>
      <WelcomeMessage />
      <Counter />
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App