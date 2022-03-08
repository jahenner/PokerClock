import './App.css';
import Timer from './Components/Timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poker Clock</h1>
      </header>
      <main className="App-main">
        <table>
          <Timer />
        </table>
      </main>
      <footer>
        <p>&copy; Alex Henner 2022</p>
      </footer>
    </div>
  );
}

export default App;
