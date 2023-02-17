import Jogo from "./Jogo";
import palavras from "./palavras";

function App() {
  return (
    <div>
      <Jogo palavras={palavras} />
    </div>
  );
}

export default App;
