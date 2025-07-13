import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
      <WelcomeMessage />
    </>
  );
}

export default App