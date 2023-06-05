import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState';
import UseReducer from './Components/UseReducer/UseReducer';
import ObjectUseState from './Components/ImmutableState/ObjectUseState';
import ArrayUseState from './Components/UseReducer/ArrayUseState';
import Parent from './Components/ParentChild/Parent';

function App() {
  return (
    <div className="App">
      <Parent />
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
