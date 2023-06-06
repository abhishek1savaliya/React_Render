import './App.css';
import { ChildA } from './Components/Context/ContextChildren';
import ContextParent from './Components/Context/ContextParent';
import ParentFour from './Components/IncorrectOptimization/ParentFour';
import ParentThree from './Components/IncorrectOptimization/ParentThree';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ParentFour /> */}
      {/* <ParentThree /> */}
    </div>
  );
}

export default App;
