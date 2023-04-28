import Nav from './components/Navigation';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Nav/>
      <article className="article">
        <div className="square">
          <h1>Welcome</h1>
          <p>It's a little editor.</p>
          <Link to={"/editor"} className="link">Editor</Link>
        </div>
      </article>
    </>
  );
}

export default App;