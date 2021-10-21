
import './App.css';
import './components/Quadrado';
import Quadrado from './components/Quadrado';
import Jogo from './components/Jogo';
import Tabuleiro from './components/Tabuleiro';

function App() {

  const status = 'Next player: X';

  return (
    <div>
        <h1>
          Jogo da Velha
        </h1>
        <Quadrado/>
        <div>
          <div className="status">
            {status}
          </div>
          <div className="board-row">
            <div className="square">
              {0}
            </div>
            <div className="square">
              {1}
            </div>
            <div className="square">
              {2}
            </div>
          </div>
          <div className="board-row">
            <div className="square">
              {3}
            </div>
            <div className="square">
              {4}
            </div>
            <div className="square">
              {5}
            </div>
          </div>
          <div className="board-row">
            <div className="square">
              {6}
            </div>
            <div className="square">
              {7}
            </div>
            <div className="square">
              {8}
            </div>
          </div>
      </div>      
    </div>
  );
}

export default App;
