import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Criarnota from './Criarnota';

function App() {

  
  

















  return (
    <div>
      <div className="App">
        <BrowserRouter>
    <nav className="navbar is-dark" >
      <div className="navbar-menu">
        <div className="navbar-start">
      <Link className="navbar-item" to="/">Página inicial</Link>
      <br/>
      <Link className="navbar-item" to="/kanbans">Kanbans</Link>
      <br/>
      <Link className="navbar-item" to="/Kanboard">Kanboard</Link>
      </div>
      </div>
    </nav>
      <Routes>
        <Route path="*" element={<p>Pagina Home, onde ficara o menu do projeto, explicaçao e link para outras paginas</p>}></Route>
        <Route path="/Kanbans" element={<Criarnota></Criarnota>}></Route>
        <Route path="/Kanboard" element={<p>Pagina onde tera um quadro interativo para colar seus kanbans. Por exemplo: tarefa conculuidas, tarefas a fazer e</p>}></Route>

      </Routes>
    </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
