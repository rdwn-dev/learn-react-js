import "./css/styles.css";
import Card from "./components/Card";
import Account from "./components/Account";
import Counter from "./practice/CounterApp";
import Sapa from "./practice/InputState";
import { ToggleStatus } from "./practice/ToggleStatus";
import { User } from "./exercise/Login";
import { Mahasiswa } from "./exercise/Mahasiswa";

function App() {
  return (
    <div className="main-content">
      <Card />
      <Account github="Github" instagram="Instagram" tiktok="Tiktok" />

      {/* Practice */}
      <div className="counter">
        <h1>Praktek 1-3 useState</h1>
        <Counter />
      </div>
      <div className="input-state">
        <Sapa />
      </div>
      <div className="toggle-status">
        <ToggleStatus />
      </div>

      {/* Exercise 1 & 2 */}
      <div className="exercise">
        {/* Login & Logout */}
        <User />
        {/* Form Sederhana */}
        <Mahasiswa />
      </div>
    </div>
  );
}

export default App;
