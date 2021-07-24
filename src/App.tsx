
import CellSimulator from './Components/CellSimulator';
import {AppContainer,AppHeader} from "./App.styles"

function App() {
  return (
    <div>
      <AppHeader>
        <div>Cell Simulator Game</div>
      </AppHeader>
      <main>
        <AppContainer>
          <CellSimulator/>
        </AppContainer>
      </main>
    </div>
  );
}

export default App;
