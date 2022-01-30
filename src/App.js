import './App.css';
import './firebase.js';
import Header from './Header';
import { useEffect,useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {

  }, []); 
  return (
    <div className="App">
      <Header user={user} setUser={setUser}></Header>
    </div>
  );
}

export default App;
