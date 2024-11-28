import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, Banner } from "./components/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
