import styles from './App.css';
import Game from './components/Game';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App} >
      <Navbar/>
      
      <div className="container center-align">
      <div className="row">
        <div class="col s12">
        <Game/>
        </div>
      </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;