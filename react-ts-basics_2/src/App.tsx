import Button from "./components/Button.tsx";
import Conatiner from './components/Container.tsx';

function App() {
  return (
  <main>
    <Conatiner as={Button}>Click me</Conatiner>
  </main>
  );
}

export default App;
