import logo from './logo.svg';
import './App.css';
import FullNames from './profile/FullNames';
import Profession from './profile/Profession ';
import Bio from './profile/Bio';
import HandelName from './profile/HandelName';
function App() {
  const HandelEven=(abc)=>{
    return (
      alert(`Hello ${abc}`)
    )

  }
  return (
    <div className="App">
      <h1>Hello this is my app</h1>
    <FullNames FirstName="jaber" LastName = "mayoufi"/>
    <Profession/>
    <Bio/>
    <HandelName HandelEvent={HandelEven} FirstName="jaber"/>
    
    </div>
  );
}

export default App;
