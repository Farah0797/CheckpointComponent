import './App.css';
import Profile from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';
import Fullname from './Components/Profile/FullName';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Fullname/>
      <Address/>
      
    </div>
  );
}

export default App;
