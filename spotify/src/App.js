import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MySidebar from "./components/MySidebar";
import Player from "./components/Player";
import Home from "./components/Home";

function App() {
  return (
    <>
      <MySidebar />
      <Home />
      <Player />
    </>
  );
}

export default App;
