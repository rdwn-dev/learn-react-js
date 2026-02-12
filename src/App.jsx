import "./css/styles.css";
import Card from "./components/Card";
import Account from "./components/Account";
import Counter from "./practice/CounterApp";
import Sapa from "./practice/InputState";
import { ToggleStatus } from "./practice/ToggleStatus";
import { User } from "./state-event/Login";
import { Mahasiswa } from "./state-event/Mahasiswa";
import { Messages } from "./conditional-rendering/LogginMessage";
import { Role } from "./conditional-rendering/RoleUser";
import { LoginStatus } from "./conditional-rendering/LoginStatus";
import { AgeChecker } from "./conditional-rendering/AgeChecker";
import { Fruits } from "./render-list-key/RenderList";
import { Product } from "./render-list-key/ListObject";
import { ProdukCard } from "./render-list-key/ListComponent";
import Todo from "./render-list-key/TodoListStatic";

function App() {
  const produks = [
    { id: 1, nama: "Laptop", harga: 10000000 },
    { id: 2, nama: "Mouse", harga: 200000 },
  ];

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

      {/* Condotional Rendering */}
      <Messages />
      <Role />
      <LoginStatus />
      <AgeChecker age={18} />

      {/* Render List & Key */}
      {/* <Fruits />
      <Product /> */}

      <h1>Produk</h1>
      {produks.map((produk) => (
        <ProdukCard key={produk.id} nama={produk.nama} harga={produk.harga} />
      ))}

      {/* Todo List Static */}
      <h1>List Tugas hari ini:</h1>
      <Todo />
    </div>
  );
}

export default App;
